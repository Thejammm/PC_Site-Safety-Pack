// ================================================================================
// AHS RAMS PDF REPORT GENERATOR v1.0
// Professional jsPDF Edition for RAMS App
// ================================================================================
// OVERVIEW:
//   This script generates professional PDF reports for Construction Phase Plans (CPP)
//   including RAMS (Risk Assessment & Method Statements), Method Statements (MS),
//   and Risk Assessments (RA). Reports are exported in Portrait (RAMS/MS) or Landscape (RA).
//
// KEY FEATURES:
//   - Responsive PDF layout with automatic pagination
//   - Embedded client logos (converted to Base64 from logo-embedder.js)
//   - Section rendering with boxes (colored emergency notifications), tables, snippets, and rich text
//   - Sequential DOM element processing (preserves HTML layout order in PDF)
//   - Landscape Risk Assessment pages with matrices, evaluations, and specialized tables
//
// EXPORTS:
//   - handleReportClick() — entry point; receives click event from Report button
//   - generateRAMSReport(tab) — generates portrait PDF for Selected tab (RAMS/MS/RA)
//   - generateCPPReport() — generates CPP-specific report (alternative generator)
//
// FILE DEPENDENCIES:
//   - jsPDF library (window.jspdf global)
//   - logo-embedder.js (provides window._embeddedClientLogoData)
//   - index.html DOM structure with IDs like #tab-rams, #tab-ms, #tab-ra
//
// ================================================================================
// QUICK TOUR — File Structure & Main Components
// ================================================================================
// SECTION 1: IMAGE LOADING & CACHING (Lines ~30-50)
//   - fetchImageAsDataURL: Convert image files to Base64 data URLs
//   - Caches result in _cachedClientLogoData to avoid refetching for every page
//
// SECTION 2: EVENT LISTENERS & DISPATCHER (Lines ~55-95)
//   - handleReportClick: Entry point for Report button click
//   - Routes to correct generator based on selected export tab
//
// SECTION 3: MAIN REPORT GENERATOR (Lines ~100-850)
//   - generateRAMSReport: Main async function
//   - Handles 3 major report types:
//     * RAMS: Portrait pages with 14 numbered sections + cover page
//     * MS: Portrait pages with tightly formatted method statements
//     * RA: Landscape pages with risk matrices, hazards, PPE, etc.
//   - Each section has its own rendering logic with nested helper functions
//
// SECTION 4: CONTENT RENDERING FUNCTIONS (Lines ~2100-2400)
//   - renderSectionContentSequentially: Process children in DOM order (KEY for Section 10 fix)
//   - renderRichContent: Convert formatted HTML to PDF text with headings/bullets
//   - renderHTMLTablePaginated: Render HTML tables with page break support
//   - renderEmergencyBoxes: Render yellow/red notification boxes (legacy, kept for reference)
//
// SECTION 5: PAGE LAYOUT & HEADERS/FOOTERS (Lines ~2400-2550)
//   - drawSectionHeader: Branded header bar for each page
//   - addFooter: Portrait page footer with company name + disclaimer
//   - addFooterLandscape: Landscape page footer with date
//
// SECTION 6: UTILITY FUNCTIONS (Lines ~2550-2700)
//   - getText: Query selector and extract text
//   - getFormattedText: Convert HTML to plain text with structure preserved
//   - cleanText: Normalize whitespace
//   - imageToDataURL: Promise wrapper for image conversion
//
// ================================================================================
// CUSTOMIZATION TIPS
// ================================================================================
// TO CHANGE COLORS:
//   Search for RGB arrays like [20, 30, 60] (dark blue), [248, 225, 144] (yellow), etc.
//   These are defined in color sections of each export type (RAMS/MS/RA)
//
// TO ADJUST PAGE LAYOUT:
//   - MARGIN: Left/right margin (15mm for portrait, 10mm for landscape)
//   - PAGE_W: Document width (210mm portrait, 297mm landscape)
//   - Line 270: Page break threshold for portrait (leave room for footer)
//   - Line 195: Page break threshold for landscape (leave room for footer)
//
// TO ADD NEW SECTIONS:
//   Modify queries like document.querySelectorAll('#tab-rams .section')
//   to target new elements, then add corresponding rendering logic
//
// TO MODIFY FONT SIZES/STYLES:
//   doc.setFontSize(11) — change the number (8, 9, 10, 11, 12, etc.)
//   doc.setFont(undefined, 'bold') — use 'bold', 'normal', or 'italic'
//
// ================================================================================

// MODULE-LEVEL CACHE: Stores client logo as Base64 data URL (populated once per export session)
// This avoids re-fetching the logo for every page, improving performance
let _cachedClientLogoData = null;

/** 
 * ================================================================================
 * IMAGE LOADING & CACHING
 * ================================================================================
 * Fetch an image src as a data URL using fetch+blob
 * This approach avoids tainted canvas issues that can occur with file:// URLs
 * Data URLs can be safely embedded in PDF without cross-origin restrictions
 * 
 * @param {string} src - Image URL or file path
 * @returns {Promise<string|null>} Base64 data URL or null if fetch fails
 */
async function fetchImageAsDataURL(src) {
  // Already a data URL — return as-is
  if (src && src.startsWith('data:')) return src;

  // For file:// URLs Chrome blocks cross-origin canvas reads.
  // Check if there's already a loaded <img> on the page with this src
  // and try to read it from canvas — if that fails, return the src directly
  // so jsPDF can at least attempt to use it natively.
  return new Promise(resolve => {
    const img = new Image();
    img.crossOrigin = null; // don't set crossOrigin for local files

    img.onload = function() {
      try {
        const canvas = document.createElement('canvas');
        canvas.width  = img.naturalWidth  || 200;
        canvas.height = img.naturalHeight || 80;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      } catch(e) {
        // Canvas tainted (file:// security) — return src directly
        resolve(src);
      }
    };
    img.onerror = () => {
      // Image failed to load entirely — resolve null so PDF skips it
      resolve(null);
    };
    img.src = src;
  });
}

// ================================================================================
// DOM EVENT LISTENERS
// ================================================================================
// Attach click handler to the Report button when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('btnClientReport');
  if (btn) {
    btn.addEventListener('click', handleReportClick);
  }
});

// ================================================================================
// REPORT GENERATION DISPATCHER
// ================================================================================
/**
 * handleReportClick — Main entry point when user clicks "Generate Report" button
 * Reads the selected export tab (RAMS/MS/RA/CPP) and routes to appropriate generator
 * 
 * FLOW:
 *   1. Read selected radio button (exportTab) from UI
 *   2. Route to CPP generator if tab-cpp is selected
 *   3. Otherwise route to RAMS generator (handles RAMS/MS/RA tabs)
 */
async function handleReportClick(e) {
  e.preventDefault();
  
  // Query the selected export tab from the radio button group
  const selectedExport = document.querySelector('input[name="exportTab"]:checked');
  const exportTab = selectedExport ? selectedExport.value : 'tab-rams';
  console.log('📋 Export button clicked - Selected tab:', exportTab);

  // Route to appropriate PDF generator based on selected tab
  if (exportTab === 'tab-cpp') {
    console.log('→ Routing to CPP PDF generator...');
    generateCPPReport();
  } else {
    console.log('→ Routing to RAMS/MS/RA PDF generator for tab:', exportTab);
    // RAMS, MS, RA share the same jsPDF-based generator
    generateRAMSReport(exportTab);
  }
}

// ================================================================================
// MAIN PDF REPORT GENERATOR
// ================================================================================
/**
 * generateRAMSReport — Main async function that generates the PDF report
 * 
 * PROCESS:
 *   1. Initialize jsPDF document (A4 portrait, 210x297mm)
 *   2. Cache client logo (Base64 data URL)
 *   3. Extract form data from DOM (project name, site address, dates, etc.)
 *   4. Generate Cover Page with project details
 *   5. Generate section pages based on selectedtab (RAMS/MS/RA):
 *      - RAMS Tab: Render 14 numbered sections with emergency boxes, tables, rich text
 *      - MS Tab: Method Statements with tight formatting (title/equipment/PPE/procedure/training)
 *      - RA Tab: Risk Assessment in landscape with matrices, evaluations, hazards table, etc.
 *   6. Add page numbers to all pages
 *   7. Save PDF with auto-generated filename
 * 
 * @param {string} exportTab - Which section to export (default: 'tab-rams')
 *                            Options: 'tab-rams' | 'tab-ms' | 'tab-ra' | 'tab-cpp'
 * 
 * PDF LAYOUT CONSTANTS:
 *   - PAGE_W = 210mm (A4 width)
 *   - MARGIN = 15mm (left/right margins)
 *   - CONTENT_W = Page width minus both margins
 *   - All Y-coordinates measured from top of page in mm
 *   - Page break threshold = 270mm (leaves 10mm footer room on 297mm page)
 * 
 * COLOR SCHEME (RGB arrays):
 *   - Dark brand blue: [20, 30, 60] — headers, accents, primary text
 *   - Emergency yellow: [248, 225, 144] — warning/notice boxes
 *   - Emergency red: [250, 143, 143] — critical/alert boxes
 *   - Light backgrounds: [248, 249, 252] — table alternating rows
 */
async function generateRAMSReport(exportTab = 'tab-rams') {
  const btn = document.getElementById('btnClientReport');                    // Get Report button element
  const originalText = btn.textContent;                                      // Save original button text
  btn.textContent = '⏳ Generating RAMS Report...';                          // Update button to show loading state
  btn.disabled = true;                                                       // Disable button to prevent duplicate clicks

  try {
    const { jsPDF } = window.jspdf;                                         // Extract jsPDF library from global window object
    const doc = new jsPDF('p', 'mm', 'a4');                                 // Create new A4 portrait PDF document
    let currentPage = 1;                                                     // Initialize page counter
    const PAGE_W = 210;                                                      // A4 width in mm
    const MARGIN = 15;                                                       // Left/right margin in mm
    const CONTENT_W = PAGE_W - MARGIN * 2;                                  // Calculate usable content width (210 - 30 = 180mm)

    console.log('=== RAMS PDF Generation Started ===');                   // Log start of PDF generation

    // ─── LOGO CACHING ─────────────────────────────────────────────
    // The logo-embedder.js script converts client.png to Base64 on page load
    // and stores it in window._embeddedClientLogoData
    _cachedClientLogoData = null;                                            // Reset logo cache at start of generation
    try {
      if (window._embeddedClientLogoData) {                                  // Check if embedded logo is available
        _cachedClientLogoData = window._embeddedClientLogoData;             // Use embedded logo from canvas
        console.log('✅ Using embedded Base64 client logo from logo-embedder.js');
      } else {
        // Fallback: try to pre-fetch from img element (legacy approach)
        const clientImgForCache = document.querySelector('#tab-rams img[src*="client"]')
                               || document.querySelector('#tab-ra img[src*="client"]')
                               || document.querySelector('img[src*="client"]');  // Find any client logo image in DOM
        if (clientImgForCache && clientImgForCache.src) {                   // If image found and has src
          if (clientImgForCache.src.startsWith('data:image')) {            // Check if already a data URL
            _cachedClientLogoData = clientImgForCache.src;                 // Use directly if already data URL
            console.log('✅ Using data URI client logo from img element');
          } else {
            // Otherwise fetch it
            _cachedClientLogoData = await fetchImageAsDataURL(clientImgForCache.src); // Convert to data URL
            if (_cachedClientLogoData) {                                    // If conversion successful
              console.log('✅ Client logo pre-fetched successfully via fetch+blob');
            }
          }
        }
      }
      
      if (!_cachedClientLogoData) {                                         // If no logo was obtained
        console.log('⚠ Client logo: no embedded or fetched logo available');
      }
    } catch (e) {
      console.log('⚠ Client logo error:', e.message);                      // Log any logo loading errors
    }

    // ─── COLLECT FORM DATA ─────────────────────────────────────────
    // Extract all required fields from the DOM form for cover page
    const projectName    = getText('#projectNamefp');                        // Extract project name from form
    const clientContract = getText('#clientContractfp');                     // Extract client/contract info
    const siteAddress    = getText('#siteAddressfp');                        // Extract site address
    const works          = getText('#worksToBeUndertakenfp');                // Extract scope of works
    const preparedBy     = getText('#preparedByfp');                         // Extract preparer name
    const startDate      = getText('#startOnSitefp');                        // Extract project start date
    const duration       = getText('#durationWksfp');                        // Extract project duration
    const clientName     = getText('#lhClientNamefp');                       // Extract client name for footer
    const reportDate     = getText('#lhDatefp');                             // Extract report generation date
    const producer       = getText('#lhProducerfp');                         // Extract producer name for footer

    // ═══════════════════════════════════════════════════════════════════════════
    // COVER PAGE RENDERING
    // ═══════════════════════════════════════════════════════════════════════════

    // TITLE BAND — Dark blue background with white RAMS title
    doc.setFillColor(...(window._activePdfBrand || [20, 30, 60]));                                            // Set fill color to dark blue
    doc.rect(0, 10, PAGE_W, 28, 'F');                                        // Draw full-width rectangle from top
    doc.setFontSize(26);                                                      // Set very large font for main title
    doc.setFont(undefined, 'bold');                                          // Use bold weight
    doc.setTextColor(255, 255, 255);                                         // Set text to white
    doc.text('RAMS', PAGE_W / 2, 23, { align: 'center' });                  // Draw "RAMS" centered at Y=23mm
    doc.setFontSize(12);                                                      // Reduce font size for subtitle
    doc.setFont(undefined, 'normal');                                        // Use normal weight for subtitle
    doc.text('Risk Assessment & Method Statement', PAGE_W / 2, 32, { align: 'center' }); // Draw subtitle

    // CLIENT LOGO — Extract cached logo and calculate dimensions
    let logoData = _cachedClientLogoData, logoProps = null, logoX = 65, logoY = 55, logoW = 90, logoH = 0; // Initialize logo variables
    try {
      if (logoData) {                                                         // If logo data exists
        logoProps = doc.getImageProperties(logoData);                        // Get image properties (width/height ratio)
        const aspectRatio = logoProps.height / logoProps.width;             // Calculate height-to-width ratio
        logoH = logoW * aspectRatio;                                         // Calculate logo height to maintain aspect ratio
        logoX = (PAGE_W - logoW) / 2;                                        // Center logo horizontally on page
        console.log('Client logo ready:', logoW, 'x', logoH, 'at', logoX, logoY);  // Log logo dimensions
      } else {                                                                // If no cached logo
        console.log('⚠ Client logo: no cached logo data available');         // Log warning
      }
    } catch (e) {                                                             // Catch any logo processing errors
      console.log('⚠ Could not load client logo:', e.message);              // Log error message
    }

    // PROJECT DETAILS BOX — Position calculation
    let y = logoH > 0 ? (logoY + logoH + 6) : 100;                          // Set Y position: below logo if present, else at 100mm

    // BOX LAYOUT CONSTANTS
    const boxInsetX = 12;                                                    // Inset from left edge of label text (mm)
    const labelX = MARGIN + boxInsetX;                                      // X position where label text starts
    const valueX = 100;                                                      // X position where value text starts
    const pageW = doc.internal.pageSize.getWidth();                         // Get page width from jsPDF
    const valueWidth = pageW - valueX - MARGIN - 6;                         // Calculate value column width (mm)
    const lineH = 5;                                                         // Line height for text (mm)

    // Helper function: Clean HTML, preserve paragraph structure for cover page text
    function cleanTextPreserveLines(input) {
      const s = (input ?? '').toString()                                     // Convert input to string
      .replace(/<h[1-6][^>]*>/gi, '\n@@H@@')                                // Mark headings with @@H@@ marker
      .replace(/<\/h[1-6]>/gi, '\n')                                         // Add newline after heading

      if (typeof cleanText === 'function') {                                // If cleanText utility function exists
        return s.split('\n').map(line => cleanText(line)).join('\n');      // Clean each line individually
      }
      return s;                                                              // Return as-is if cleanText not available
    }

    // COVER PAGE FIELDS — Define label/value pairs to render
    const coverFields = [
      ['Project Name', projectName],
      ['Client (Contract)', clientContract],
      ['Site Address', siteAddress],
      ['Works to be Undertaken', works],
      ['Prepared by', preparedBy],
      ['Start On Site', startDate],
      ['Duration (Wks)', duration],
    ];

    // PRE-CALCULATE BOX HEIGHT — Measure all content to determine box size
    doc.setFontSize(11);                                                      // Set font for measurement
    let totalContentH = 4;                                                    // Initialize height with 4mm offset
    coverFields.forEach(([label, value]) => {                               // Iterate through each field
      const raw = cleanTextPreserveLines(value);                            // Clean and preserve structure
      const manualLines = raw.split('\n');                                   // Split into lines at newbreaks
      let lines = [];                                                         // Accumulate wrapped lines
      for (const ml of manualLines) {                                        // Process each manual line
        if (ml.trim() === '') lines.push(' ');                              // Keep empty lines as spaces
        else lines = lines.concat(doc.splitTextToSize(ml, valueWidth));    // Wrap long lines to fit column
      }
      if (lines.length === 0) lines = [' '];                                 // Ensure minimum one line
      totalContentH += Math.max(lines.length * lineH, 9);                  // Add this field's height (min 9mm)
    });
    const boxPadding = 18;                                                   // Padding top + bottom (mm)
    const boxH = totalContentH + boxPadding;                                // Calculate final box height

    // DRAW BOX BACKGROUND
    doc.setFillColor(248, 249, 252);                                        // Set fill to light pale blue
    doc.rect(MARGIN, y - 5, CONTENT_W, boxH, 'F');                         // Draw filled rectangle
    doc.setDrawColor(...(window._activePdfBrand || [20, 30, 60]));                                            // Set stroke to dark blue
    doc.setLineWidth(1);                                                      // Set border thickness (mm)
    doc.rect(MARGIN, y - 5, CONTENT_W, boxH);                              // Draw border (no fill)
    
    // ACCENT BAR — Left side accent stripe
    doc.setFillColor(...(window._activePdfBrand || [20, 30, 60]));                                            // Set fill to dark blue
    doc.rect(MARGIN, y - 5, 4, boxH, 'F');                                  // Draw 4mm wide stripe on left

    // DRAW CLIENT LOGO ON TOP OF BOX
    if (logoData && logoProps) {                                             // If logo data and properties available
      doc.addImage(logoData, logoProps.fileType || 'PNG', logoX, logoY, logoW, logoH); // Place logo image
    }

    doc.setFontSize(11);
    y += 4;

    // --- Now render the text ---
    coverFields.forEach(([label, value]) => {
      doc.setFont(undefined, 'bold');
      doc.setTextColor(60, 60, 60);
      doc.text(`${label}:`, labelX, y);

      doc.setFont(undefined, 'normal');
      doc.setTextColor(30, 30, 30);

      const raw = cleanTextPreserveLines(value);
      const manualLines = raw.split('\n');

      let lines = [];
      for (const ml of manualLines) {
        if (ml.trim() === '') lines.push(' ');
        else lines = lines.concat(doc.splitTextToSize(ml, valueWidth));
      }
      if (lines.length === 0) lines = [' '];

      doc.text(lines, valueX, y);
      y += Math.max(lines.length * lineH, 9);
    });

    // COVER PAGE FOOTER — Bottom of first page with report meta info
    doc.setFontSize(9);                                                      // Small footer font (9pt)
    doc.setTextColor(120, 120, 120);                                         // Grey text color for footer
    doc.text('Prepared for: ' + cleanText(clientName), MARGIN, 260);        // Left column: client name at Y=260
    doc.text('Date: ' + cleanText(reportDate), MARGIN, 266);                // Left column: report date at Y=266
    doc.text('Produced by: ' + cleanText(producer), MARGIN, 272);           // Left column: producer name at Y=272

    addFooter(doc, currentPage);                                             // Add branded footer to cover page

    // ═════════════════════════════════════════════════════════════════════════
    // RAMS MASTER SECTIONS (1-14) — Sequential DOM Processing
    // ═════════════════════════════════════════════════════════════════════════
    // NEW APPROACH: Render elements in original DOM order (not grouped by type)
    // This preserves interleaved layout like Section 10: yellow box > text > red box > text
    // ═════════════════════════════════════════════════════════════════════════
    
    if (exportTab === 'tab-rams') {                                          // Only render if RAMS tab is selected
      const sections = document.querySelectorAll('#tab-rams .section');      // Find all section containers
      console.log('Found RAMS sections:', sections.length);                  // Log count of sections found

      sections.forEach((section, index) => {                                // Process each section
        doc.addPage();                                                       // Create new PDF page for this section
        currentPage++;                                                        // Increment page counter

        const header = section.querySelector('.section-header');            // Find section title element
        const sectionTitle = header ? header.textContent.trim() : 'Section ' + (index + 1); // Extract title or use default

        // PAGE HEADER — Branded section header bar
        drawSectionHeader(doc, sectionTitle, MARGIN, CONTENT_W);            // Draw header with section title
        y = 32;                                                              // Reset Y position to below header

        // ROUTING Logic: Determine section content type and render accordingly
        // Sections can contain: directory table, snippet editor, inline tables, or section-content with boxes/text

        // 1) DIRECTORY TABLE (Section 1 only)
        const dirTable = section.querySelector('.directory-table');          // Query for directory table
        if (dirTable) {                                                       // If directory table exists
          // COLUMN WIDTH CALCULATIONS — From original CSS proportions
          const colWidths = [CONTENT_W * 0.16, CONTENT_W * 0.32, CONTENT_W * 0.16, CONTENT_W * 0.32]; // 4 columns: 16% | 32% | 16% | 32%
          
          // COLUMN X COORDINATES — Calculate left edge of each column
          const colX = [
            MARGIN,                                                          // Column 1 starts at margin
            MARGIN + colWidths[0],                                          // Column 2 starts after column 1
            MARGIN + colWidths[0] + colWidths[1],                          // Column 3 starts after columns 1+2
            MARGIN + colWidths[0] + colWidths[1] + colWidths[2]            // Column 4 starts after columns 1+2+3
          ];
        
        const rows = dirTable.querySelectorAll('tbody tr');
        const rowHeight = 12;
        
        rows.forEach((row, rowIdx) => {
          const cells = row.querySelectorAll('td');
          
          // Page break check
          if (y + rowHeight > 270) {
            addFooter(doc, currentPage);
            doc.addPage();
            currentPage++;
            y = 20;
          }
          
          // Alternating row background
          if (rowIdx % 2 === 1) {
            doc.setFillColor(248, 249, 252);
            doc.rect(MARGIN, y, CONTENT_W, rowHeight, 'F');
          }
          
          // Draw each cell
          cells.forEach((cell, colIdx) => {
            // Border
            doc.setDrawColor(200, 210, 220);
            doc.setLineWidth(0.3);
            doc.rect(colX[colIdx], y, colWidths[colIdx], rowHeight);
            
            // Check if this is a label cell
            const isLabel = cell.classList.contains('dir-label');
            
            if (isLabel) {
              // Label cell: dark background, bold, centered
              doc.setFillColor(...(window._activePdfBrand || [20, 30, 60]));
              doc.rect(colX[colIdx], y, colWidths[colIdx], rowHeight, 'F');
              doc.setFontSize(FONT_BODY);
              doc.setFont(undefined, 'bold');
              doc.setTextColor(255, 255, 255);
              
              const text = cell.textContent.trim();
              const lines = doc.splitTextToSize(text, colWidths[colIdx] - 4);
              doc.text(lines.join('\n'), colX[colIdx] + 2, y + 3, { maxWidth: colWidths[colIdx] - 4, align: 'left' });
            } else {
              // Data cell: white background, normal text
              doc.setFillColor(255, 255, 255);
              doc.rect(colX[colIdx], y, colWidths[colIdx], rowHeight, 'F');
              doc.setFontSize(FONT_BODY);
              doc.setFont(undefined, 'normal');
              doc.setTextColor(50, 50, 50);
              
              const text = cell.textContent.trim();
              const lines = doc.splitTextToSize(text, colWidths[colIdx] - 4);
              doc.text(lines.join('\n'), colX[colIdx] + 2, y + 3, { maxWidth: colWidths[colIdx] - 4, align: 'left' });
            }
          });
          
          y += rowHeight;
        });
        
        addFooter(doc, currentPage);
        return;
      }

      // 2) Snippet editor content — render in DOM order so tables appear where they are
      const snippetEditor = section.querySelector('.snippet-editor');
      if (snippetEditor) {
        const seqRes = renderSectionContentSequentially(doc, snippetEditor, y, MARGIN, CONTENT_W, currentPage, sectionTitle);
        y = seqRes.y;
        currentPage = seqRes.page;
        addFooter(doc, currentPage);
        return;
      }

      // 3) Tables directly in section
      const tables = section.querySelectorAll('table');
      if (tables.length > 0) {
        tables.forEach(table => {
          const tRes = renderHTMLTablePaginated(doc, table, y, MARGIN, CONTENT_W, currentPage, sectionTitle);
          y = tRes.y;
          currentPage = tRes.page;
          y += 6;
        });
        addFooter(doc, currentPage);
        return;
      }

      // 4) Section content: render in sequential order (boxes, text, tables as they appear in DOM)
      const content = section.querySelector('.section-content');
      if (content) {
        const seqRes = renderSectionContentSequentially(doc, content, y, MARGIN, CONTENT_W, currentPage, sectionTitle);
        y = seqRes.y;
        currentPage = seqRes.page;
      }

      addFooter(doc, currentPage);
    });
    } // end RAMS export

    // ========================================
    // ========================================
    // METHOD STATEMENT PAGES (Portrait)
    // ========================================
    // OVERVIEW:
    //   Method Statements use a highly optimized tight-layout format with 6 fields:
    //   - TITLE (method statement name)
    //   - EQUIPMENT (tools/machinery required)
    //   - PPE (personal protective equipment)
    //   - PROCEDURE (step-by-step instructions with bullets)
    //   - TRAINING & ASSOCIATED RISKS
    //   - RISK ASSESSMENT REF & GUIDANCE
    //
    // LAYOUT:
    //   Each field is rendered as a LEFT LABEL + RIGHT VALUE row
    //   - Label column: 28mm, pale blue-grey background
    //   - Value column: ~155mm, white background
    //   - 2mm dark blue accent stripe on far left
    //   - Automatic page breaks based on content height
    //   - Headings (@@H@@) and bullets (•) are styled within value text
    //
    // TEXT FORMATTING:
    //   - Headings (@@H@@): Bold, 10pt, 5mm line height + 0.8mm gap
    //   - Bullets (•): Indented 3.5mm, 9pt, 4.4mm line height + 0.6mm gap
    //   - Regular text: 9pt normal, 4.4mm line height
    //   - Dynamic row height: min 6.5mm, expands for content
    //
    // ========================================
if (exportTab === 'tab-ms') {
    const msPages = document.querySelectorAll('#tab-ms .ms-page');
    console.log('Found MS pages:', msPages.length);

    // --- HELPER FUNCTIONS (scoped to MS rendering) ---
    
    // Normalize bullets so we don't get "• -" and we don't waste width
    function msNormalizeLine(s) {
      let t = (s || '').trim();
      // If a line begins with a dash, make it a bullet
      t = t.replace(/^[-–—]\s+/g, '• ');
      // If a line begins with "• -" or "• –", collapse to "• "
      t = t.replace(/^•\s*[-–—]\s+/g, '• ');
      return t;
    }

    // Measure marked text (@@H@@ heading) for dynamic row height (bullet-aware)
    function msMeasureMarked(doc, text, maxW) {
      const parts = (text || '')
        .split('\n')
        .map(msNormalizeLine)
        .map(s => s.trim())
        .filter(Boolean);
      if (!parts.length) return { height: 0 };
      let totalH = 0;
      parts.forEach(p => {
        const isH = p.startsWith('@@H@@');
        const clean = isH ? p.replace('@@H@@', '').trim() : p;
        const isBullet = !isH && clean.startsWith('•');
        const indent = isBullet ? 3.5 : 0;
        const wrapW = maxW - indent;
        const wrapped = doc.splitTextToSize(clean, wrapW);
        totalH += isH
          ? (wrapped.length * 5 + 0.8)
          : (wrapped.length * 4.4 + 0.6);
      });
      return { height: totalH };
    }

    // Render marked text and return ending Y (bullet hanging indent)
    function msRenderMarked(doc, text, x, y, maxW) {
      const parts = (text || '')
        .split('\n')
        .map(msNormalizeLine)
        .map(s => s.trim())
        .filter(Boolean);
      let cursorY = y;
      parts.forEach(p => {
        const isH = p.startsWith('@@H@@');
        const clean = isH ? p.replace('@@H@@', '').trim() : p;
        const isBullet = !isH && clean.startsWith('•');
        const indent = isBullet ? 3.5 : 0;
        const wrapW = maxW - indent;
        const wrapped = doc.splitTextToSize(clean, wrapW);
        if (isH) {
          doc.setFontSize(10);
          doc.setFont(undefined, 'bold');
          doc.setTextColor(...(window._activePdfBrand || [20, 30, 60]));
          doc.text(wrapped, x, cursorY);
          cursorY += wrapped.length * 5 + 0.8;
        } else {
          doc.setFontSize(9);
          doc.setFont(undefined, 'normal');
          doc.setTextColor(30, 30, 30);
          doc.text(wrapped, x + indent, cursorY);
          cursorY += wrapped.length * 4.4 + 0.6;
        }
      });
      return cursorY;
    }

    // Helper: draw client logo with white background on MS header
    function drawMSLogo(doc) {
      try {
        if (_cachedClientLogoData) {
          const props = doc.getImageProperties(_cachedClientLogoData);
          const maxW = 28, maxH = 10;
          const ar = props.width / props.height;
          let w = maxW, h = w / ar;
          if (h > maxH) { h = maxH; w = h * ar; }
          const logoX = MARGIN;
          const logoY = 4;
          const pad = 1.5;
          doc.setFillColor(255, 255, 255);
          doc.rect(logoX - pad, logoY - pad, w + pad * 2, h + pad * 2, 'F');
          doc.addImage(_cachedClientLogoData, 'PNG', logoX, logoY, w, h);
        }
      } catch(e) {
        console.log('MS header logo skipped:', e.message);
      }
    }

    if (msPages.length > 0) {
  msPages.forEach((page, pi) => {
    doc.addPage();
    currentPage++;
    drawSectionHeader(doc, 'Method Statement', MARGIN, CONTENT_W);
    drawMSLogo(doc);
    y = 29;

    // MS global title (h1) only on first page
    if (pi === 0) {
      const msH1 = document.querySelector('#tab-ms h1');
      if (msH1) {
        doc.setFontSize(12);
        doc.setFont(undefined, 'bold');
        doc.setTextColor(...(window._activePdfBrand || [20, 30, 60]));
        const h1Lines = doc.splitTextToSize(cleanText(msH1.textContent), CONTENT_W);
        doc.text(h1Lines, MARGIN, y);
        y += h1Lines.length * 3 + 0;  // 5mm per title line + 0mm gap before first table row
      }
    }

    // Get method table data
    const titleEl  = page.querySelector('[data-key$=".title"]');
    const equipEl  = page.querySelector('[data-key$=".equipment"]');
    const ppeEl    = page.querySelector('[data-key$=".ppe"]');
    const procEl   = page.querySelector('[data-key$=".procedure"]');
    const trainEl  = page.querySelector('[data-key$=".training"]');
    const raRefEl  = page.querySelector('[data-key$=".raRef"]');

    const msTitle     = titleEl  ? getFormattedText(titleEl)  : 'MS' + (pi + 1);
    const msEquip     = equipEl  ? getFormattedText(equipEl)  : '';
    const msPPE       = ppeEl    ? getFormattedText(ppeEl)    : '';
    const msProcedure = procEl   ? getFormattedText(procEl)   : '';
    const msTraining  = trainEl  ? getFormattedText(trainEl)  : '';
    const msRaRef     = raRefEl  ? getFormattedText(raRefEl)  : '';

    const msFields = [
      { label: 'TITLE', value: msTitle },
      { label: 'EQUIPMENT', value: msEquip },
      { label: 'PPE', value: msPPE },
      { label: 'PROCEDURE', value: msProcedure },
      { label: 'TRAINING & ASSOCIATED RISKS', value: msTraining },
      { label: 'RISK ASSESSMENT REF & GUIDANCE:', value: msRaRef }
    ];

    // ---- Visual/layout constants (tuned for tighter boxes + fewer wraps) ----
    const labelW = 28;                    // Width (mm) of the left label column (e.g. "TITLE", "PPE"). Decrease to give more room to value text
    const accentW = 2;                    // Width (mm) of the dark-blue vertical stripe on the far left of each row
    const valueX = MARGIN + labelW + 3;   // X position (mm from left) where value text starts. Controls gap between label and value columns
    const valueW = CONTENT_W - (labelW + 7); // Max width (mm) the value text can use before wrapping to a new line

    const paddingTop = 4.8;              // Space (mm) above the text inside each row. Reduce to move text closer to top edge
    const paddingBottom = 1.2;           // Space (mm) below the text inside each row. Reduce to shrink row height
    const paddingLeft = 1;               // Space (mm) before value text from the left edge of the value column

    const BRAND = window._activePdfBrand || [20, 30, 60];          // RGB colour for accent bar (dark navy blue)
    const BORDER = [210, 218, 228];      // RGB colour for row border lines (light grey)
    const LABEL_BG = [236, 240, 245];    // RGB colour for label column background (pale blue-grey)
    const ROW_BG = [255, 255, 255];      // RGB colour for value column background (white)

    msFields.forEach(field => {           // Loop through each MS field (TITLE, EQUIPMENT, PPE, PROCEDURE, etc.)
      if (!field.value) return;           // Skip empty fields — don't draw a row if there's no content

      // Measure dynamic height of the value (bullet-aware + heading-aware)
      const measured = msMeasureMarked(doc, field.value, valueW - paddingLeft); // Calculate how tall the text will be when wrapped

      // Tight height model: min + measured + top/bottom padding
      const minInner = 6.5;              // Minimum content height (mm) — even short text gets at least this much space
      const inner = Math.max(minInner, measured.height); // Use measured height or minimum, whichever is larger
      const blockH = inner + paddingTop + paddingBottom; // Total row box height = content + top padding + bottom padding

      // Page break if needed
      if (y + blockH > 279) {            // If row would go past 279mm (near bottom of A4 page), start a new page
        addFooter(doc, currentPage);      // Draw footer on current page before breaking
        doc.addPage();                    // Create new PDF page
        currentPage++;                    // Increment page counter
        drawSectionHeader(doc, 'Method Statement (continued)', MARGIN, CONTENT_W); // Draw header bar on new page
        drawMSLogo(doc);                  // Draw client logo on new page header
        y = 32;                           // Reset Y cursor to below the header (32mm from top)
      }

      // Row background + soft border
      doc.setFillColor(...ROW_BG);        // Set fill to white for the row background
      doc.setDrawColor(...BORDER);        // Set stroke colour to light grey for the border
      doc.setLineWidth(0.35);             // Border line thickness (mm)
      doc.rect(MARGIN, y, CONTENT_W, blockH, 'FD'); // Draw the full-width row rectangle (filled + border)

      // Label column background
      doc.setFillColor(...LABEL_BG);      // Set fill to pale blue-grey
      doc.rect(MARGIN, y, labelW, blockH, 'F'); // Draw label column background over the left portion of the row

      // Accent bar
      doc.setFillColor(...BRAND);         // Set fill to dark navy blue
      doc.rect(MARGIN, y, accentW, blockH, 'F'); // Draw thin vertical accent stripe on far left

      // Label text (slightly higher so it feels tighter)
      doc.setFontSize(7);                 // Label font size (pt) — small caps style
      doc.setFont(undefined, 'bold');     // Bold weight for labels
      doc.setTextColor(40, 40, 40);       // Dark grey text colour for labels
      const labelLines = doc.splitTextToSize(field.label, labelW - (accentW + 4)); // Wrap label text if it's wider than the label column
      doc.text(labelLines, MARGIN + accentW + 2, y + 6.2); // Draw label text, offset right of accent bar, 6.2mm down from row top

      // Value text
      const startTextY = y + paddingTop;  // Y position where value text begins (row top + padding)
      const endTextY = msRenderMarked(    // Render the value text (handles headings, bullets, wrapping) and returns ending Y
        doc,
        field.value,                      // The text content to render
        valueX + paddingLeft,             // X start position for value text
        startTextY,                       // Y start position for value text
        valueW - paddingLeft              // Max width before text wraps
      );

      // Tighter spacing between rows
      y = Math.max(y + blockH + 2, endTextY + 1.5); // Move Y cursor: row height + 2mm gap, or text end + 1.5mm, whichever is further down
    });

    addFooter(doc, currentPage);          // Draw footer on the last MS page
  });
    } // end msPages.length > 0
    } // end MS export

    // ========================================
    // ========================================
    // RISK ASSESSMENT (Landscape Pages)
    // ========================================
    // OVERVIEW:
    //   Risk Assessment exports use LANDSCAPE orientation (297 x 210mm)
    //   Each assessment form generates 4 pages of content:
    //   - Page 1: Header + Letterhead + Meta Grid + Matrix + Evaluation Table
    //   - Page 2-N: Hazards Table (paginated, up to 20+ rows of risk data)
    //   - Page N+1-M: PPE Checklist, Equipment, COSHH Info, Sign-off Register, etc.
    //   - Final: Revision History, Assessor Sign-off Grid
    //
    // LAYOUT CONSTANTS (Landscape):
    //   - LA_W = 297mm (page width)
    //   - LA_H = 210mm (page height)
    //   - LA_MARGIN = 10mm (left/right margins)
    //   - Page break threshold ≈ 195mm (leaving ~15mm footer room)
    //
    // COLOR SCHEME (all RGB arrays):
    //   - BRAND [20, 30, 60]: Dark navy blue for headers, accents
    //   - BORDER [200, 210, 220]: Light grey for table/grid lines
    //   - LIGHT_BG [248, 249, 252]: Pale blue-grey for alternating rows
    //   - GREY_HEAD [242, 244, 247]: Soft grey for table headers
    //   - Pills: LOW [209, 250, 229], MEDIUM [254, 243, 199], HIGH [254, 226, 226]
    //
    // SPECIAL RENDERING:
    //   - Risk matrices with color-coded LOW/MEDIUM/HIGH pills
    //   - Evaluation table with combined risk scores
    //   - Hazards table with 7 columns (hazard, who, how, risk, controls, residual, action)
    //   - Inline checkboxes for PPE and other selection fields
    //
    // ========================================
    if (exportTab === 'tab-ra') {
    const raTab = document.getElementById('tab-ra');
    if (raTab) {
  console.log('Processing Risk Assessment...');

  // LANDSCAPE DIMENSIONS (all in mm)
  const LA_W = 297;                          // Landscape page width (A4 rotated)
  const LA_H = 210;                          // Landscape page height (A4 rotated)
  const LA_MARGIN = 10;                      // Left/right margins on landscape pages
  const LA_CONTENT_W = LA_W - LA_MARGIN * 2; // 277mm available for content

  // COLOR PALETTE (RGB arrays for jsPDF setFillColor / setDrawColor)
  const BRAND = window._activePdfBrand || [20, 30, 60];                // Dark blue: headers, primary accents
  const BORDER = [200, 210, 220];            // Medium grey: grid lines, borders
  const LIGHT_BG = [248, 249, 252];          // Pale blue-grey: table alternating rows
  const GREY_HEAD = [242, 244, 247];         // Soft grey: table header backgrounds

  const raForms = raTab.querySelectorAll('.sheet.sheet-landscape.form-page');
  console.log('Found RA forms:', raForms.length);

  const isVisible = (el) => !!(el && el.offsetParent !== null);

  function newLandscapePage(titleText) {
    doc.addPage([LA_W, LA_H], 'l');
    currentPage++;

    // Top bar (like UI)
    doc.setFillColor(...BRAND);
    doc.rect(0, 0, LA_W, 4, 'F');

    // Light header area
    doc.setFillColor(255, 255, 255);
    doc.rect(0, 4, LA_W, 28, 'F');

    // Title (center)
    doc.setFontSize(16);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(60, 70, 85);
    doc.text(titleText || 'Risk Assessment', LA_W / 2, 10, { align: 'center' });

    // Thin rule under header
    doc.setDrawColor(...BORDER);
    doc.setLineWidth(0.6);
    doc.line(LA_MARGIN, 18, LA_W - LA_MARGIN, 18);

    return 20; // startY for page content
  }

  function getCEText(root, selector) {
    const el = root.querySelector(selector);
    if (!el) return '';
    return (el.textContent || '').replace(/\s+/g, ' ').trim();
  }

  function getEditableText(root, selector) {
    const el = root.querySelector(selector);
    if (!el) return '';
    return getFormattedText(el);
  }

  function getRiskText(td) {
    if (!td) return '';
    const badge = td.querySelector('.badge');
    if (badge) return badge.textContent.trim();
    const sel = td.querySelector('select.risk-select');
    if (sel) return sel.options[sel.selectedIndex]?.text?.trim() || '';
    return cleanText(td.textContent || '');
  }

  function drawLetterheadRow(formRoot) {
    // Left logo — use pre-fetched cached logo data (avoids tainted canvas)
    try {
      if (_cachedClientLogoData) {
        const props = doc.getImageProperties(_cachedClientLogoData);
        const maxW = 34, maxH = 10;
        const ar = props.width / props.height;
        let w = maxW, h = w / ar;
        if (h > maxH) { h = maxH; w = h * ar; }
        doc.addImage(_cachedClientLogoData, 'PNG', LA_MARGIN, 6, w, h);
      }
    } catch(e) {
      console.log('RA letterhead logo skipped:', e.message);
    }

    const producedBy = getCEText(formRoot, '#lhProducerra');
    const preparedFor = getCEText(formRoot, '#lhClientNamera');
    const dateText = getCEText(formRoot, '#lhDatera');
    const subtitle = getCEText(formRoot, '#lhSubtitlera');

    /*
    // Produced by (left)
    doc.setFontSize(7);
    doc.setFont(undefined, 'normal');
    doc.setTextColor(120, 130, 150);
    doc.text('PRODUCED BY', LA_MARGIN + 22, 12);

    doc.setFontSize(9);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(70, 80, 95);
    const pbLines = doc.splitTextToSize(producedBy, 45);
    doc.text(pbLines, LA_MARGIN + 22, 16);

    // Prepared for pill (center top)
    doc.setDrawColor(215, 220, 230);
    doc.setLineWidth(0.5);
    doc.roundedRect(LA_W / 2 - 26, 7.5, 52, 8, 4, 4, 'S');

    doc.setFontSize(7);
    doc.setFont(undefined, 'normal');
    doc.setTextColor(120, 130, 150);
    doc.text('PREPARED FOR', LA_W / 2 - 22, 12.4);

    doc.setFontSize(8);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(70, 80, 95);
    doc.text(preparedFor || 'Client Name', LA_W / 2 + 7, 12.4, { align: 'left' });


    */
    // Subtitle under title (center)
    doc.setFontSize(9);
    doc.setFont(undefined, 'normal');
    doc.setTextColor(120, 130, 150);
    doc.text(subtitle || 'Risk Assessment', LA_W / 2, 14.5, { align: 'center' });

    // Date (right)
    doc.setFontSize(7);
    doc.setFont(undefined, 'normal');
    doc.setTextColor(120, 130, 150);
    doc.text('DATE', LA_W - LA_MARGIN - 10, 12, { align: 'right' });

    doc.setFontSize(8);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(70, 80, 95);
    doc.text(dateText || '', LA_W - LA_MARGIN, 16, { align: 'right' });
  }


  /*   this is part of the y await function and if this is uncommented it need to be done with te y await on or near line 1087 //
  async function drawCenteredClientLogo(formRoot, y) {
    const img = formRoot.querySelector('.client-logo-section img');
    if (!img || !img.src) return y;

    try {
      const data = await imageToDataURL(img);
      if (!data) return y;

      const props = doc.getImageProperties(data);
      const maxW = 80;
      const maxH = 28;

      const ar = props.width / props.height;
      let w = maxW, h = w / ar;
      if (h > maxH) { h = maxH; w = h * ar; }

      const x = (LA_W - w) / 2;
      doc.addImage(data, props.fileType || 'PNG', x, y, w, h);
      return y + h + 6;
    } catch (e) {
      console.log('⚠ Could not load client logo:', e.message);
      return y;
    }
  }
*/
// ---------- RA Page 1 helpers (tight) + Evaluation-on-Page-1 ----------

function drawMetaGrid(formRoot, y) {
  const task = getCEText(formRoot, '[data-key="ra.meta.task"]');
  const loc  = getCEText(formRoot, '[data-key="ra.meta.location"]');
  const proj = getCEText(formRoot, '[data-key="ra.meta.project"]');
  const ref  = getCEText(formRoot, '[data-key="ra.meta.reference"]');

  const boxH = 12;
  const colW = [
    LA_CONTENT_W * 0.32,
    LA_CONTENT_W * 0.24,
    LA_CONTENT_W * 0.22,
    LA_CONTENT_W * 0.22
  ];

  // outer
  doc.setDrawColor(...BORDER);
  doc.setLineWidth(0.5);
  doc.rect(LA_MARGIN, y, LA_CONTENT_W, boxH);

  // vertical dividers
  let x = LA_MARGIN;
  for (let i = 0; i < 3; i++) {
    x += colW[i];
    doc.line(x, y, x, y + boxH);
  }

  const items = [
    { label: 'TASK / ACTIVITY', value: task },
    { label: 'LOCATION', value: loc },
    { label: 'PROJECT NAME', value: proj },
    { label: 'RISK ASSESSMENT REFERENCE', value: ref },
  ];

  let cx = LA_MARGIN;

  items.forEach((it, i) => {
    // label (lifted)
    doc.setFontSize(6);
    doc.setFont(undefined, 'normal');
    doc.setTextColor(120, 130, 150);
    doc.text(it.label, cx + 2.5, y + 4.2);

    // value (lifted + smaller)
    doc.setFontSize(7);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(30, 30, 30);

    const vLines = doc.splitTextToSize(cleanText(it.value), colW[i] - 5);

    // keep meta grid tight: 1 line only
    doc.text((vLines[0] || ''), cx + 2.5, y + 9.0);

    cx += colW[i];
  });

  return y + boxH + 3;
}

function drawBand(text, y) {
  const h = 6;

  // Stronger UI-like border
  doc.setDrawColor(160, 170, 185);
  doc.setLineWidth(0.6);

  // White fill (keeps it crisp)
  doc.setFillColor(255, 255, 255);
  doc.rect(LA_MARGIN, y, LA_CONTENT_W, h, 'FD');

  doc.setFontSize(7);
  doc.setFont(undefined, 'bold');
  doc.setTextColor(30, 30, 30);

  // inside 6mm (vertically centered)
  doc.text(text, LA_MARGIN + 3, y + 4.2);

  return y + h + 2; // tighter spacing after
}

function drawMatrix(formRoot, y) {
  const matrix = formRoot.querySelector('.matrix-wrap');
  if (!matrix) return y;

  const boxH = 68;

  // ---- STYLE RULES ----
  const OUTER_W = 0.6;
  const INNER_W = 0.25;
  const OUTER_COL = [160, 170, 185];

  const PILL_COLOURS = {
    'LOW':    { fill: [209, 250, 229], text: [5, 122, 85]   },
    'MEDIUM': { fill: [254, 243, 199], text: [180, 130, 0]  },
    'HIGH':   { fill: [254, 226, 226], text: [220, 38, 38]  },
  };

  function extractLevel(el) {
    const badge = el.querySelector('.badge');
    const pillKey = badge ? cleanText(badge.textContent).toUpperCase() : '';
    const fullText = cleanText(el.textContent);
    const bodyText = pillKey ? fullText.replace(badge.textContent.trim(), '').trim() : fullText;
    return { pillKey, bodyText };
  }

  function drawMatrixPill(pillKey, x, y) {
    if (!pillKey || !PILL_COLOURS[pillKey]) return;
    const style = PILL_COLOURS[pillKey];
    const pillW = pillKey === 'MEDIUM' ? 16 : 11;
    const pillH = 4.5;
    doc.setFillColor(...style.fill);
    doc.setDrawColor(200, 210, 220);
    doc.setLineWidth(0.3);
    doc.roundedRect(x, y - 3.2, pillW, pillH, 2, 2, 'FD');
    doc.setFontSize(6);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(...style.text);
    doc.text(pillKey, x + pillW / 2, y - 0.2, { align: 'center' });
  }

  // ---- OUTER BOX ----
  doc.setDrawColor(...OUTER_COL);
  doc.setLineWidth(OUTER_W);
  doc.rect(LA_MARGIN, y, LA_CONTENT_W, boxH);

  // Header row "RISK"
  const headerH = 6;
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(...OUTER_COL);
  doc.setLineWidth(OUTER_W);
  doc.rect(LA_MARGIN, y, LA_CONTENT_W, headerH, 'FD');

  doc.setFontSize(7.5);
  doc.setFont(undefined, 'bold');
  doc.setTextColor(30, 30, 30);
  doc.text('RISKS - THE LIKLIHOOD AN UNDESIRED EVENT OCCURING x THE SEVERITY OF ITS CONSEQUENCES', LA_MARGIN + 3, y + 4.2);

  // Split into two columns beneath header
  const innerY = y + headerH;
  const innerH = boxH - headerH;
  const halfW = LA_CONTENT_W / 2;

  // ---- INNER GRID LINES ----
  doc.setDrawColor(...BORDER);
  doc.setLineWidth(INNER_W);
  doc.line(LA_MARGIN + halfW, innerY, LA_MARGIN + halfW, innerY + innerH);

  // Column titles
  doc.setFontSize(7);
  doc.setFont(undefined, 'bold');
  doc.setTextColor(30, 30, 30);
  doc.text('LIKELIHOOD', LA_MARGIN + 3, innerY + 6);
  doc.text('SEVERITY', LA_MARGIN + halfW + 3, innerY + 6);

  // Extract levels with badge separated from body text
  const likeLevels = Array.from(
    matrix.querySelectorAll('.matrix-col:nth-child(1) .level')
  ).map(extractLevel);

  const sevLevels = Array.from(
    matrix.querySelectorAll('.matrix-col:nth-child(2) .level')
  ).map(extractLevel);

  // Space below titles
  const bodyTop = innerY + 8;
  const keyH = 8;
  const bodyH = innerH - (keyH + 2);
  const rowH = bodyH / 3;

  for (let i = 0; i < 3; i++) {
    const ry = bodyTop + i * rowH;

    // Horizontal row lines
    if (i > 0) {
      doc.setDrawColor(...BORDER);
      doc.setLineWidth(INNER_W);
      doc.line(LA_MARGIN, ry, LA_MARGIN + LA_CONTENT_W, ry);
    }

    // Draw pills
    drawMatrixPill(likeLevels[i]?.pillKey, LA_MARGIN + 4, ry + 5);
    drawMatrixPill(sevLevels[i]?.pillKey,  LA_MARGIN + halfW + 4, ry + 5);

    // Body text offset by pill width
// Fixed text column — always starts at same x regardless of pill width
const TEXT_INDENT = 22; // mm from column edge to text start — increase to push further right

const likeTextX = LA_MARGIN + TEXT_INDENT;
const sevTextX  = LA_MARGIN + halfW + TEXT_INDENT;
const likeTextW = halfW - TEXT_INDENT - 4;
const sevTextW  = halfW - TEXT_INDENT - 4;

doc.setFontSize(6.6);
doc.setFont(undefined, 'normal');
doc.setTextColor(30, 30, 30);

const likeLines = doc.splitTextToSize(likeLevels[i]?.bodyText || '', likeTextW);
const sevLines  = doc.splitTextToSize(sevLevels[i]?.bodyText  || '', sevTextW);

doc.text(likeLines, likeTextX, ry + 5);
doc.text(sevLines,  sevTextX,  ry + 5);
  }

  // Key strip at bottom
  const keyY = y + boxH - keyH;

  doc.setDrawColor(...BORDER);
  doc.setLineWidth(INNER_W);
  doc.line(LA_MARGIN, keyY, LA_MARGIN + LA_CONTENT_W, keyY);

  const keyLabels = ['LOW', 'MEDIUM', 'HIGH'];
  const keyW = LA_CONTENT_W / 3;

  keyLabels.forEach((k, i) => {
    const kx = LA_MARGIN + i * keyW;

    if (i > 0) {
      doc.setDrawColor(...BORDER);
      doc.setLineWidth(INNER_W);
      doc.line(kx, keyY, kx, y + boxH);
    }

    if (k === 'LOW')    doc.setFillColor(209, 250, 229);
    if (k === 'MEDIUM') doc.setFillColor(254, 243, 199);
    if (k === 'HIGH')   doc.setFillColor(254, 226, 226);

    doc.rect(kx + 3, keyY + 2.4, 3, 3, 'F');

    doc.setDrawColor(...BORDER);
    doc.setLineWidth(INNER_W);
    doc.rect(kx + 3, keyY + 2.4, 3, 3);

    doc.setFontSize(7);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(30, 30, 30);
    doc.text(k, kx + 8, keyY + 5.2);
  });

  return y + boxH + 4;
}


// try at new table start evaluation of the risk table //
function renderEvalTableInline(formRoot, y) {
  const evalTable = formRoot.querySelector('.eval-wrap table.eval-table');
  if (!evalTable) return { y, page: currentPage };

  // ── CONTROL PANEL ───────────────────────────────
  const ROW_HEIGHTS = {
    0: 8,    // Aim row (mm)
    1: 11,    // List the hazards row (mm)
    2: 53,    // Results row (mm) — increase if text gets cut off
  };

  const PILL_COLOURS = {
    'LOW':    { fill: [209, 250, 229], text: [5, 122, 85]   },
    'MEDIUM': { fill: [254, 243, 199], text: [180, 130, 0]  },
    'HIGH':   { fill: [254, 226, 226], text: [220, 38, 38]  },
  };

  const LABEL_W = LA_CONTENT_W * 0.22;
  // ────────────────────────────────────────────────

  // Header row
  doc.setFillColor(...(window._activePdfBrand || [20, 30, 60]));
  doc.setDrawColor(200, 210, 220);
  doc.setLineWidth(0.3);
  doc.rect(LA_MARGIN, y, LA_CONTENT_W, 7, 'F');
  doc.setFontSize(8);
  doc.setFont(undefined, 'bold');
  doc.setTextColor(255, 255, 255);
  doc.text('Evaluation of the risk', LA_MARGIN + 3, y + 4.8);
  y += 7;

  const labelW = LABEL_W;
  const valueX = LA_MARGIN + labelW;
  const valueW = LA_CONTENT_W - labelW;
  const rows = evalTable.querySelectorAll('tbody tr');

  rows.forEach((row, ri) => {
    const tds = row.querySelectorAll('td');
    if (tds.length < 2) return;

    const labelText = cleanText(tds[0].textContent);

    // Build value lines — handle <li> items with bold <strong> prefix
    const items = tds[1].querySelectorAll('li');
    let valueLines = [];

    if (items.length) {
      items.forEach(li => {
        if (!li.textContent.trim()) return;
        const strong = li.querySelector('strong');
        const boldPart = strong ? cleanText(strong.textContent) : '';
        const rest = cleanText(li.textContent.replace(strong?.textContent || '', ''));
        valueLines.push({ bold: boldPart, normal: rest });
      });
    } else {
      valueLines.push({ bold: '', normal: cleanText(tds[1].textContent) });
    }

    // Use manual height from config, fallback to auto
    let totalH = 6;
    valueLines.forEach(seg => {
      const fullText = seg.bold ? seg.bold + seg.normal : seg.normal;
      const wrapped = doc.splitTextToSize((seg.bold ? '• ' : '') + fullText, valueW - 6);
      totalH += wrapped.length * 4.2 + 2;
    });
    const rowH = ROW_HEIGHTS[ri] ?? Math.max(10, totalH);

    // Page break check
    if (y + rowH > LA_H - 15) {
      addFooterLandscape(doc, currentPage, LA_W);
      doc.addPage([LA_W, LA_H], 'l');
      currentPage++;
      y = 15;
    }

    // Row background
    doc.setFillColor(ri % 2 === 0 ? 248 : 255, ri % 2 === 0 ? 249 : 255, ri % 2 === 0 ? 252 : 255);
    doc.setDrawColor(200, 210, 220);
    doc.setLineWidth(0.3);
    doc.rect(LA_MARGIN, y, LA_CONTENT_W, rowH, 'FD');

    // Divider between label and value
    doc.line(LA_MARGIN + labelW, y, LA_MARGIN + labelW, y + rowH);

    // Label (bold, left cell)
    doc.setFontSize(8);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(40, 40, 40);
    const labelLines = doc.splitTextToSize(labelText, labelW - 6);
    doc.text(labelLines, LA_MARGIN + 3, y + 5);

    // Value — render each line segment
    let ty = y + 5;
    valueLines.forEach(seg => {
      if (seg.bold) {
        // Detect which pill to draw (LOW / MEDIUM / HIGH)
        const pillKey = Object.keys(PILL_COLOURS).find(k => seg.bold.includes(k));
        const pillStyle = pillKey ? PILL_COLOURS[pillKey] : null;

        if (pillStyle) {
          // Draw coloured pill
          const pillW = pillKey === 'MEDIUM' ? 16 : 11;
          const pillH = 5;
          doc.setFillColor(...pillStyle.fill);
          doc.setDrawColor(200, 210, 220);
          doc.setLineWidth(0.3);
          doc.roundedRect(valueX + 3, ty - 3.5, pillW, pillH, 2, 2, 'FD');
          doc.setFontSize(6.5);
          doc.setFont(undefined, 'bold');
          doc.setTextColor(...pillStyle.text);
          doc.text(pillKey, valueX + 3 + pillW / 2, ty - 0.2, { align: 'center' });

          // Rest of bold heading after pill
          const headingRest = seg.bold.replace('Combined risk =', '').replace(pillKey, '').trim();
          doc.setFontSize(8);
          doc.setFont(undefined, 'bold');
          doc.setTextColor(...(window._activePdfBrand || [20, 30, 60]));
          doc.text(headingRest, valueX + 3 + pillW + 2, ty - 0.2);
          ty += 6;
        } else {
          // No pill match — just bold text
          doc.setFontSize(8);
          doc.setFont(undefined, 'bold');
          doc.setTextColor(...(window._activePdfBrand || [20, 30, 60]));
          const boldLines = doc.splitTextToSize('• ' + seg.bold, valueW - 6);
          doc.text(boldLines, valueX + 3, ty);
          ty += boldLines.length * 4.2;
        }

        // Normal body text below heading
        doc.setFont(undefined, 'normal');
        doc.setTextColor(40, 40, 40);
        doc.setFontSize(7.5);
        const normalLines = doc.splitTextToSize(seg.normal, valueW - 10);
        doc.text(normalLines, valueX + 6, ty);
        ty += normalLines.length * 4.0 + 3;

      } else {
        doc.setFont(undefined, 'normal');
        doc.setTextColor(40, 40, 40);
        doc.setFontSize(8);
        const lines = doc.splitTextToSize(seg.normal, valueW - 6);
        doc.text(lines, valueX + 3, ty);
        ty += lines.length * 4.2 + 2;
      }
    });

    y += rowH;
  });

  return { y: y + 4, page: currentPage };
}
// try at new table end 






/*
// NEW: render Evaluation table onto the CURRENT page (Page 1) at the given y
function renderEvalTableInline(formRoot, y) {
  const evalTable = formRoot.querySelector('.eval-wrap table.eval-table');
  if (!evalTable) return { y, page: currentPage };

  doc.setFontSize(9);
  doc.setFont(undefined, 'bold');
  doc.setTextColor(30, 30, 30);
  doc.text('Evaluation of the risk', LA_MARGIN, y);
  y += 4;

  const res = renderHTMLTableLandscape(doc, evalTable, y, LA_MARGIN, LA_CONTENT_W, currentPage, LA_W, LA_H);
  return { y: res.y + 4, page: res.page };
}
*/


  // Page 3: hazards table (paginated)
  function renderHazardsPages(formRoot) {
    const hazardsTable = formRoot.querySelector('table.hazardsTable[data-role="hazards"]') || formRoot.querySelector('table.hazardsTable');
    if (!hazardsTable) return;

    const rows = Array.from(hazardsTable.querySelectorAll('tbody tr'));
    if (!rows.length) return;

    // Column widths close to UI proportions
    const headers = [
      'What are the hazards?',
      'Who might be harmed?',
      'How',
      'Initial risk\n(without controls)',
      'What controls are required?',
      'Residual risk',
      'Action by'
    ];
    const base = [70, 45, 45, 26, 78, 26, 28];
    const sum = base.reduce((a,b)=>a+b,0);
    const scale = LA_CONTENT_W / sum;
    const colW = base.map(w => Math.round(w * scale));

    function drawHazHeader(y) {
      let x = LA_MARGIN;
      doc.setFillColor(...GREY_HEAD);
      doc.setDrawColor(...BORDER);
      doc.setLineWidth(0.5);
      doc.rect(LA_MARGIN, y, LA_CONTENT_W, 16, 'FD');

      doc.setFontSize(7);
      doc.setFont(undefined, 'bold');
      doc.setTextColor(60, 70, 85);

      headers.forEach((h, i) => {
        const lines = doc.splitTextToSize(h, colW[i] - 4);
        doc.text(lines, x + 2, y + 6);
        x += colW[i];
        if (i < headers.length - 1) doc.line(x, y, x, y + 16);
      });
    }

    function drawRiskPill(text, x, y, w, h) {
      const t = (text || '').toUpperCase();
      let fill = [240, 240, 240];
      let col = [60, 60, 60];
      if (t.includes('HIGH')) { fill = [254, 226, 226]; col = [220, 38, 38]; }
      else if (t.includes('MED')) { fill = [254, 243, 199]; col = [180, 130, 0]; }
      else if (t.includes('LOW')) { fill = [209, 250, 229]; col = [5, 122, 85]; }

      const pillW = Math.min(w - 6, 18);
      const pillH = 6;
      const px = x + (w - pillW) / 2;
      const py = y + (h - pillH) / 2;

      doc.setFillColor(...fill);
      doc.setDrawColor(...BORDER);
      doc.setLineWidth(0.4);
      doc.roundedRect(px, py, pillW, pillH, 3, 3, 'FD');

      doc.setFontSize(7);
      doc.setFont(undefined, 'bold');
      doc.setTextColor(...col);
      doc.text(t || '-', x + w / 2, py + 4.2, { align: 'center' });

      doc.setTextColor(30, 30, 30);
      doc.setFont(undefined, 'normal');
    }

    // Start first hazards page
    let y = newLandscapePage('Risk Assessment');
    drawLetterheadRow(formRoot);

    doc.setFontSize(10);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(30, 30, 30);
    y += 4;
    doc.text('HAZARDS, ASSOCIATED RISKS AND CONTROLS', LA_MARGIN, y);
    y += 5;

    drawHazHeader(y);
    y += 16;

    doc.setFontSize(7);
    doc.setFont(undefined, 'normal');
    doc.setTextColor(30, 30, 30);

    rows.forEach((row, ri) => {
      const tds = row.querySelectorAll('td');
      if (tds.length < 7) return;

      const txt = [
        getFormattedText(tds[0].querySelector('.editable[contenteditable="true"]') || tds[0]),
        getFormattedText(tds[1].querySelector('.editable[contenteditable="true"]') || tds[1]),
        getFormattedText(tds[2].querySelector('.editable[contenteditable="true"]') || tds[2]),
        getRiskText(tds[3]),
        getFormattedText(tds[4].querySelector('.editable[contenteditable="true"]') || tds[4]),
        getRiskText(tds[5]),
        getFormattedText(tds[6].querySelector('.editable[contenteditable="true"]') || tds[6]),
      ];

      const wrapped = txt.map((t, i) => doc.splitTextToSize(t, colW[i] - 4));
      const rowH = Math.max(18, ...wrapped.map(l => l.length * 3.2 + 6));

      // page break
      if (y + rowH > LA_H - 15) {
        addFooterLandscape(doc, currentPage, LA_W);
        y = newLandscapePage('Risk Assessment (continued)');
        drawLetterheadRow(formRoot);

        doc.setFontSize(10);
        doc.setFont(undefined, 'bold');
        doc.setTextColor(30, 30, 30);
        y += 4;
        doc.text('HAZARDS, ASSOCIATED RISKS AND CONTROLS (continued)', LA_MARGIN, y);
        y += 5;

        drawHazHeader(y);
        y += 16;
      }

      // Row background + border
      doc.setFillColor(255, 255, 255);
      doc.setDrawColor(...BORDER);
      doc.setLineWidth(0.4);
      doc.rect(LA_MARGIN, y, LA_CONTENT_W, rowH, 'FD');

      // vertical lines and text
      let x = LA_MARGIN;
      wrapped.forEach((lines, ci) => {
        if (ci > 0) doc.line(x, y, x, y + rowH);

        if (ci === 3 || ci === 5) {
          drawRiskPill(txt[ci], x, y, colW[ci], rowH);
        } else {
          const textBlockH = lines.length * 3.2;
          const ty = y + 4 + (rowH - 8 - textBlockH) / 2;
          doc.text(lines, x + 2, ty);
        }

        x += colW[ci];
      });

      y += rowH;
    });

    addFooterLandscape(doc, currentPage, LA_W);
  }

  // Page 4: PPE + equip + coshh + signoff + revision + sig-grid (paginated)
  function renderFinalPages(formRoot) {
    let y = newLandscapePage('Risk Assessment');
    drawLetterheadRow(formRoot);

    // PPE table — render with proper checkbox support
    const ppeTable = formRoot.querySelector('.ppe-table');
    if (ppeTable) {
      doc.setFontSize(10);
      doc.setFont(undefined, 'bold');
      doc.setTextColor(30, 30, 30);
      y += 4;
      doc.text('Personal Protective Equipment (PPE)', LA_MARGIN, y);
      y += 5;

      // Header row
      doc.setFillColor(...(window._activePdfBrand || [20, 30, 60]));
      doc.setDrawColor(200, 210, 220);
      doc.setLineWidth(0.3);
      doc.rect(LA_MARGIN, y, LA_CONTENT_W, 7, 'F');
      doc.setFontSize(7);
      doc.setFont(undefined, 'bold');
      doc.setTextColor(255, 255, 255);
      doc.text('Personal Protective Equipment (PPE)', LA_MARGIN + 3, y + 4.8);
      y += 7;

      // Instruction row
      const instrH = 8;
      doc.setFillColor(248, 249, 252);
      doc.setDrawColor(200, 210, 220);
      doc.rect(LA_MARGIN, y, LA_CONTENT_W * 0.18, instrH, 'FD');
      doc.rect(LA_MARGIN + LA_CONTENT_W * 0.18, y, LA_CONTENT_W * 0.82, instrH, 'FD');
      doc.setFontSize(7);
      doc.setFont(undefined, 'bold');
      doc.setTextColor(30, 30, 30);
      doc.text('Instruction', LA_MARGIN + 2, y + 5.2);
      doc.setFont(undefined, 'normal');
      doc.text('Identify all necessary PPE.', LA_MARGIN + LA_CONTENT_W * 0.18 + 2, y + 5.2);
      y += instrH;

      // Checklist row — render checkboxes
      const checks = Array.from(formRoot.querySelectorAll('.ppe-checks .check'));
      const colCount = 4;
      const checkW = (LA_CONTENT_W * 0.82) / colCount;
      const checkRowH = Math.ceil(checks.length / colCount) * 7 + 4;

      doc.setFillColor(255, 255, 255);
      doc.setDrawColor(200, 210, 220);
      doc.rect(LA_MARGIN, y, LA_CONTENT_W * 0.18, checkRowH, 'FD');
      doc.rect(LA_MARGIN + LA_CONTENT_W * 0.18, y, LA_CONTENT_W * 0.82, checkRowH, 'FD');
      doc.setFont(undefined, 'bold');
      doc.setFontSize(7);
      doc.setTextColor(30, 30, 30);
      doc.text('Checklist', LA_MARGIN + 2, y + 5.2);

      checks.forEach((check, i) => {
        const col = i % colCount;
        const row = Math.floor(i / colCount);
        const cx = LA_MARGIN + LA_CONTENT_W * 0.18 + col * checkW + 2;
        const cy = y + 3 + row * 7;
        const isChecked = check.querySelector('input[type="checkbox"]')?.checked || false;
        const label = cleanText(check.querySelector('span')?.textContent || check.textContent);

        // Draw checkbox square
        doc.setDrawColor(150, 160, 175);
        doc.setLineWidth(0.4);
        doc.setFillColor(255, 255, 255);
        doc.rect(cx, cy, 3.5, 3.5, 'FD');

        // Draw tick if checked
        if (isChecked) {
          doc.setDrawColor(5, 122, 85);
          doc.setLineWidth(0.6);
          doc.line(cx + 0.5, cy + 1.8, cx + 1.4, cy + 2.8);
          doc.line(cx + 1.4, cy + 2.8, cx + 3, cy + 0.8);
        }

        doc.setFontSize(6.5);
        doc.setFont(undefined, 'normal');
        doc.setTextColor(30, 30, 30);
        doc.text(label, cx + 4.5, cy + 3);
      });

      y += checkRowH;

      // Notes row
const notesEl = ppeTable.querySelector('tr:last-child td:last-child .editable');
const notesText = notesEl ? cleanText(notesEl.textContent) : '';

const labelColW = LA_CONTENT_W * 0.18;
const valueColW = LA_CONTENT_W * 0.82;
const valueTextX = LA_MARGIN + labelColW + 2;
const valueTextW = valueColW - 20;  // ← this is the key fix — proper right margin

const notesLines = doc.splitTextToSize(notesText, valueTextW);
const notesH = Math.max(8, notesLines.length * 3.5 + 4);

doc.setFillColor(248, 249, 252);
doc.setDrawColor(200, 210, 220);
doc.rect(LA_MARGIN, y, labelColW, notesH, 'FD');
doc.rect(LA_MARGIN + labelColW, y, valueColW, notesH, 'FD');
doc.setFont(undefined, 'bold');
doc.setFontSize(7);
doc.setTextColor(30, 30, 30);
doc.text('Notes', LA_MARGIN + 2, y + 5.2);
doc.setFont(undefined, 'normal');
doc.text(notesLines, valueTextX, y + 4);

      y += notesH + 6;
    }

    // Equipment
    const equipTable = formRoot.querySelector('.equip-table');
    if (equipTable) {
      if (y > LA_H - 55) {
        addFooterLandscape(doc, currentPage, LA_W);
        y = newLandscapePage('Risk Assessment (continued)');
        drawLetterheadRow(formRoot);
      }
      doc.setFontSize(10);
      doc.setFont(undefined, 'bold');
      doc.setTextColor(30, 30, 30);
      doc.text('Equipment Details / Schedule', LA_MARGIN, y);
      y += 5;

      const res = renderHTMLTableLandscape(doc, equipTable, y, LA_MARGIN, LA_CONTENT_W, currentPage, LA_W, LA_H);
      y = res.y;
      currentPage = res.page;
      y += 6;
    }

    // COSHH
    const coshhTable = formRoot.querySelector('.coshh-table');
    if (coshhTable) {
      if (y > LA_H - 55) {
        addFooterLandscape(doc, currentPage, LA_W);
        y = newLandscapePage('Risk Assessment (continued)');
        drawLetterheadRow(formRoot);
      }
      doc.setFontSize(10);
      doc.setFont(undefined, 'bold');
      doc.setTextColor(30, 30, 30);
      doc.text('COSHH Information', LA_MARGIN, y);
      y += 5;

      const res = renderHTMLTableLandscape(doc, coshhTable, y, LA_MARGIN, LA_CONTENT_W, currentPage, LA_W, LA_H);
      y = res.y;
      currentPage = res.page;
      y += 6;
    }

    // Sign-off register
    const signregTable = formRoot.querySelector('.signreg-table');
    if (signregTable) {
      if (y > LA_H - 70) {
        addFooterLandscape(doc, currentPage, LA_W);
        y = newLandscapePage('Risk Assessment (continued)');
        drawLetterheadRow(formRoot);
      }
      doc.setFontSize(10);
      doc.setFont(undefined, 'bold');
      doc.setTextColor(30, 30, 30);
      y += 4;
      doc.text('Sign-off Register', LA_MARGIN, y);
      y += 5;

      const res = renderHTMLTableLandscape(doc, signregTable, y, LA_MARGIN, LA_CONTENT_W, currentPage, LA_W, LA_H);
      y = res.y;
      currentPage = res.page;
      y += 6;
    }

    // Revision table
    const reviewTable = formRoot.querySelector('table.review');
    if (reviewTable) {
      if (y > LA_H - 55) {
        addFooterLandscape(doc, currentPage, LA_W);
        y = newLandscapePage('Risk Assessment (continued)');
        drawLetterheadRow(formRoot);
      }
      doc.setFontSize(10);
      doc.setFont(undefined, 'bold');
      doc.setTextColor(30, 30, 30);
      doc.text('Revision History', LA_MARGIN, y);
      y += 5;

      const res = renderHTMLTableLandscape(doc, reviewTable, y, LA_MARGIN, LA_CONTENT_W, currentPage, LA_W, LA_H);
      y = res.y;
      currentPage = res.page;
      y += 6;
    }

    // Assessor sign-off grid (boxes)
    const sigGrid = formRoot.querySelector('.sig-grid');
    if (sigGrid) {
      if (y > LA_H - 35) {
        addFooterLandscape(doc, currentPage, LA_W);
        y = newLandscapePage('Risk Assessment (continued)');
        drawLetterheadRow(formRoot);
      }

      const sigs = Array.from(sigGrid.querySelectorAll('.sig')).filter(isVisible);
      if (sigs.length) {
        // Render 4 boxes across like UI
        const boxW = (LA_CONTENT_W - 12) / 4;
        const boxH = 16;

        doc.setDrawColor(...BORDER);
        doc.setLineWidth(0.5);

        sigs.slice(0, 4).forEach((sig, i) => {
          const lbl = cleanText(sig.querySelector('.label')?.textContent || '');
          const val = cleanText(sig.querySelector('.sig-value')?.textContent || '');
          const x = LA_MARGIN + i * (boxW + 4);

          doc.rect(x, y, boxW, boxH);

          doc.setFontSize(7);
          doc.setFont(undefined, 'normal');
          doc.setTextColor(120, 130, 150);
          doc.text(lbl.toUpperCase(), x + 3, y + 5.5);

          doc.setFontSize(8);
          doc.setFont(undefined, 'bold');
          doc.setTextColor(30, 30, 30);
          doc.text(doc.splitTextToSize(val, boxW - 6), x + 3, y + 11);
        });

        y += boxH + 6;
      }
    }

    addFooterLandscape(doc, currentPage, LA_W);
  }

  // --------- Export each RA form as 4 pages ----------
  for (let fi = 0; fi < raForms.length; fi++) {
    const formRoot = raForms[fi];

    // PAGE 1 (fixed): letterhead + client logo + meta + band + matrix
    {
      const titleText = getCEText(formRoot, '#lhTitlera') || 'Risk Assessment';
      let y = newLandscapePage(titleText);
      drawLetterheadRow(formRoot);

      // big centered client logo this is linked to the function commented out on line 597 // if you want to use it then uncomment the function and this line and make sure the img selector is correct in the function
     // y = await drawCenteredClientLogo(formRoot, y + 6);

      // meta grid (4 columns)
      y = drawMetaGrid(formRoot, y);

      // band
      const bandText = cleanText(formRoot.querySelector('.band')?.textContent || 'Evaluation of risk – The Procedure is outlined below');
      y = drawBand(bandText, y);

      // matrix box
      y = drawMatrix(formRoot, y);

      // evaluation table (inline on page 1)
      const ev = renderEvalTableInline(formRoot, y);
      y = ev.y;
      currentPage = ev.page;

      addFooterLandscape(doc, currentPage, LA_W);
    }

    // PAGE 2 (fixed): evaluation table
   // renderEvalTablePage(formRoot);

    // PAGE 3 (dynamic): hazards table paginated
    renderHazardsPages(formRoot);

    // PAGE 4 (dynamic): PPE/equip/coshh/signoff/revision/sigs paginated
    renderFinalPages(formRoot);
  }
    } // end raTab check
    } // end RA export


    // ========================================
    // UPDATE PAGE NUMBERS
    // ========================================
    const totalPages = doc.internal.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setFontSize(7);
      doc.setTextColor(120, 120, 120);
      doc.setFont(undefined, 'normal');

      const pw = doc.internal.pageSize.getWidth();
      const ph = doc.internal.pageSize.getHeight();
      doc.setFillColor(255, 255, 255);
      doc.rect(pw - 35, ph - 8, 30, 8, 'F');
      doc.text('Page ' + i + ' of ' + totalPages, pw - 5, ph - 3, { align: 'right' });
    }

    // ========================================
    // SAVE
    // ========================================
    const cleanName = projectName
      .replace(/[^a-z0-9]/gi, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
      .substring(0, 40) || 'RAMS';
    const dateStr = new Date().toISOString().slice(0, 10);
    const filename = 'RAMS-' + cleanName + '-' + dateStr + '.pdf';
    doc.save(filename);

    console.log('=== RAMS PDF Generated ===');
    console.log('File:', filename, '| Pages:', totalPages);
    alert('✅ RAMS report generated!\n\n' + totalPages + ' pages\nFilename: ' + filename);

  } catch (error) {
    console.error('❌ RAMS PDF generation failed:', error);
    alert('❌ Failed to generate PDF.\n\nError: ' + error.message + '\n\nCheck console (F12) for details.');
  } finally {
    btn.textContent = originalText;
    btn.disabled = false;
  }
}

// ================================================================================
// UTILITY FUNCTIONS (Text, Element, DOM helpers)
// ================================================================================

/**
 * getText - Query element by CSS selector and extract trimmed text content
 * @param {string} selector — CSS selector (e.g., '#projectName')
 * @returns {string} Element text or empty string if not found
 */
function getText(selector) {
  const el = document.querySelector(selector);
  if (!el) return '';
  return el.textContent.trim();
}

/**
 * getTextFromElement - Extract trimmed text from a passed element
 * @param {HTMLElement} el
 * @returns {string}
 */
function getTextFromElement(el) {
  if (!el) return '';
  return el.textContent.trim();
}

/**
 * cleanText - Normalize whitespace in text (compress multiple spaces to single space)
 * Used to sanitize text before rendering in PDF
 * @param {string} text
 * @returns {string} Cleaned text
 */
function cleanText(text) {
  if (!text) return '';
  return text.replace(/\s+/g, ' ').trim();
}

/**
 * getFormattedText - Convert HTML element to plain text with structure preserved
 * 
 * HTML CONVERSIONS:
 *   - <br /> → newline
 *   - </div>, </p> → newline (paragraph break)
 *   - <li> → bullet point (•)
 *   - <h1-6> → @@H@@ heading marker (detected by renderRichContent)
 *   - Removes all HTML tags except semantic structure
 *   - Decodes HTML entities (&amp; → &, etc.)
 * 
 * RESULT: Plain text with:
 *   - Heading markers (@@H@@) for styled rendering
 *   - Bullet points (•) preserved
 *   - Paragraph breaks (\n\n) preserved
 *   - Multiple blank lines collapsed to two
 * 
 * @param {HTMLElement|string} el — Element or CSS selector
 * @returns {string} Formatted plain text
 */
function getFormattedText(el) {
  if (!el) return '';
  const element = typeof el === 'string' ? document.querySelector(el) : el;
  if (!element) return '';

  // Skip prompt cards and UI-only elements
  const clone = element.cloneNode(true);
  clone.querySelectorAll('.cpp-prompt-card, .no-print, .snippet-toolbar, .rte-toolbar').forEach(e => e.remove());
  // Remove tables — they are handled separately by the sequential renderer
  clone.querySelectorAll('table').forEach(e => e.remove());

  let html = clone.innerHTML;
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/div>/gi, '\n')
    .replace(/<div[^>]*>/gi, '')
    .replace(/<strong[^>]*>(.*?)<\/strong>/gi, (_, t) => t.trim() ? '**' + t + '**' : '')
    .replace(/<b[^>]*>(.*?)<\/b>/gi, (_, t) => t.trim() ? '**' + t + '**' : '')
    .replace(/<em[^>]*>(.*?)<\/em>/gi, (_, t) => t)
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<p[^>]*>/gi, '')
    .replace(/<li[^>]*>/gi, '• ')
    .replace(/<\/li>/gi, '\n')
    .replace(/<ul[^>]*>/gi, '\n')
    .replace(/<\/ul>/gi, '\n')
    .replace(/<ol[^>]*>/gi, '\n')
    .replace(/<\/ol>/gi, '\n')
    .replace(/<h[1-6][^>]*>/gi, '\n@@H@@')
    .replace(/<\/h[1-6]>/gi, '\n')
    .replace(/<blockquote[^>]*>/gi, '  ')
    .replace(/<\/blockquote>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/**
 * imageToDataURL - Fetch image and convert to Base64 data URL
 * Promise wrapper around fetchImageAsDataURL for convenience
 * @param {HTMLImageElement} img
 * @returns {Promise<string|null>} Data URL or null
 */
function imageToDataURL(img) {
  if (img && img.src) {
    return fetchImageAsDataURL(img.src);
  }
  return Promise.resolve(null);
}

// ================================================================================
// PAGE LAYOUT & HEADER/FOOTER FUNCTIONS
// ================================================================================
// ================================================================================
// TYPOGRAPHY CONSTANTS — all content text uses these values for uniformity
// ================================================================================
const FONT_BODY    = 9;    // Standard body text
const FONT_SMALL   = 8;    // Table cells, footnotes
const FONT_HEAD    = 9;    // Section sub-headings (bold)
const FONT_SECTION = 11;   // Section bar title
const LINE_H       = 4.5;  // Line height for body text (mm)
const LINE_H_SM    = 4.0;  // Line height for table cells



/**
 * drawSectionHeader - Render branded header bar at top of each page
 * 
 * DESIGN:
 *   - Dark blue full-width bar [20, 30, 60], 18mm tall
 *   - White title text (14pt, bold, centered)
 *   - Thin underline in medium blue [50, 110, 170]
 * 
 * LAYOUT:
 *   - Returns Y=22mm for content to start below header
 *   - Used on all RAMS section pages and MS pages
 *   - Title may wrap to multiple lines if > 180mm
 * 
 * @param {jsPDF} doc
 * @param {string} title — Section or page title
 * @param {number} margin — Left margin (mm)
 * @param {number} contentW — Content width (mm)
 */
function drawSectionHeader(doc, title, margin, contentW) {
  // Dark blue full-width bar (0 to 210mm width, 0 to 18mm height)
  doc.setFillColor(...(window._activePdfBrand || [20, 30, 60]));
  doc.rect(0, 0, 210, 18, 'F');
  
  // Centered white title text
  doc.setFontSize(14);
  doc.setFont(undefined, 'bold');
  doc.setTextColor(255, 255, 255);
  const titleLines = doc.splitTextToSize(title, 180);
  doc.text(titleLines[0], 105, 12, { align: 'center' });

  // Thin underline below header
  doc.setDrawColor(50, 110, 170);
  doc.setLineWidth(0.6);
  doc.line(margin, 22, margin + contentW, 22);
}

// ================================================================================
// CONTENT RENDERING FUNCTIONS (Portrait)
// ================================================================================

/**
 * renderSectionContentSequentially — CORE RENDERER for RAMS Sections
 * 
 * ALGORITHM: Process section children in original DOM order (not grouped by type)
 * This preserves the HTML layout where boxes, text, and tables can be interleaved:
 *   Yellow box → heading → red box → paragraph → table → more text
 * 
 * PROCESS:
 *   1. Iterate through direct children of content element
 *   2. For boxes (.emergency-box or .emergency-box2): flush text buffer, render box
 *   3. For tables: flush text buffer, render table with pagination
 *   4. For other elements: accumulate in text buffer (render later)
 *   5. At end, flush any remaining text buffer
 * 
 * This approach avoids the old problem where all boxes were rendered first,
 * breaking the interleaved structure of Section 10 (yellow/text/red/text pattern)
 * 
 * @param {jsPDF} doc — jsPDF document object
 * @param {HTMLElement} content — Container with .emergency-box, tables, text elements
 * @param {number} startY — Y coordinate (mm) to begin rendering
 * @param {number} margin — Left margin (mm)
 * @param {number} contentW — Available content width (mm)
 * @param {number} currentPage — Current page number
 * @param {string} sectionTitle — Section title for page breaks
 * @returns {{y: number, page: number}} Final Y position and page number
 */
function renderSectionContentSequentially(doc, content, startY, margin, contentW, currentPage, sectionTitle) {
  let y = startY;
  let textBuffer = null;

  // Helper: Render accumulated text buffer
  const flushTextBuffer = () => {
    if (!textBuffer) return;
    const result = renderRichContent(doc, textBuffer, y, margin, contentW, currentPage, sectionTitle);
    y = result.y;
    currentPage = result.page;
    textBuffer = null;
  };

  // Helper: Render a single box
  const renderSingleBox = (box) => {
    let fill = [248, 225, 144];
    let stroke = [255, 165, 0];
    let titleCol = [204, 102, 0];

    if (box.classList.contains('emergency-box2')) {
      fill = [250, 143, 143];
      stroke = [250, 17, 17];
      titleCol = [255, 2, 2];
    }

    const title = cleanText(box.querySelector('h3')?.textContent || '');
    const ps = Array.from(box.querySelectorAll('p')).map(p => cleanText(p.textContent || ''));
    const lis = Array.from(box.querySelectorAll('li')).map(li => cleanText(li.textContent || ''));

    doc.setFontSize(9);
    doc.setFont(undefined, 'normal');

    let lines = [];
    ps.forEach(t => {
      if (!t) return;
      lines = lines.concat(doc.splitTextToSize(t, contentW - 10));
    });

    lis.forEach(t => {
      if (!t) return;
      lines = lines.concat(doc.splitTextToSize('• ' + t, contentW - 10));
    });

    const titleH = title ? 6 : 0;
    const bodyH = lines.length * 4.5;
    const boxH = Math.max(18, titleH + bodyH + 10);

    if (y + boxH > 270) {
      addFooter(doc, currentPage);
      doc.addPage();
      currentPage++;
      drawSectionHeader(doc, sectionTitle + ' (continued)', margin, contentW);
      y = 32;
    }

    doc.setFillColor(...fill);
    doc.setDrawColor(...stroke);
    doc.setLineWidth(0.6);
    doc.roundedRect(margin, y, contentW, boxH, 2, 2, 'FD');

    let ty = y + 6;
    if (title) {
      doc.setFont(undefined, 'bold');
      doc.setFontSize(FONT_HEAD);
      doc.setTextColor(...titleCol);
      doc.text(doc.splitTextToSize(title, contentW - 10), margin + 5, ty);
      ty += 5;
    }

    doc.setFont(undefined, 'normal');
    doc.setFontSize(FONT_BODY);
    doc.setTextColor(30, 30, 30);
    doc.text(lines, margin + 5, ty);

    y += boxH + 6;
  };

  // Process children in DOM order
  Array.from(content.children).forEach(child => {
    // Skip guidance/prompt cards — PDF only, not content
    if (child.classList.contains('cpp-prompt-card') ||
        child.classList.contains('no-print') ||
        child.classList.contains('snippet-toolbar') ||
        child.classList.contains('rte-toolbar')) {
      return;
    }

    if (child.classList.contains('emergency-box') || child.classList.contains('emergency-box2')) {
      flushTextBuffer();
      renderSingleBox(child);

    } else if (child.tagName === 'TABLE') {
      flushTextBuffer();
      const tRes = renderHTMLTablePaginated(doc, child, y, margin, contentW, currentPage, sectionTitle);
      y = tRes.y;
      currentPage = tRes.page;
      y += 5;

    } else if (child.classList.contains('cpp-enter-block')) {
      // Enter-block: render label as small italic heading, then content
      flushTextBuffer();
      const label = child.querySelector('.cpp-enter-label');
      const field = child.querySelector('.cpp-enter-field');
      const fieldText = field ? cleanText(field.textContent) : '';
      if (fieldText && fieldText.length > 5) {
        // Only render if user has actually filled it in (not just the placeholder)
        doc.setFontSize(FONT_BODY);
        doc.setFont(undefined, 'italic');
        doc.setTextColor(100, 100, 100);
        const lbl = label ? cleanText(label.textContent).replace('⚠️','').trim() : '';
        if (lbl) {
          const lblLines = doc.splitTextToSize(lbl, contentW);
          if (y + lblLines.length * 4 > 270) {
            addFooter(doc, currentPage); doc.addPage(); currentPage++;
            drawSectionHeader(doc, sectionTitle || '(continued)', margin, contentW); y = 32;
          }
          doc.text(lblLines, margin, y);
          y += lblLines.length * 4 + 1;
        }
        doc.setFont(undefined, 'normal');
        doc.setTextColor(30, 30, 30);
        const fieldLines = doc.splitTextToSize(fieldText, contentW);
        if (y + fieldLines.length * 4.5 > 270) {
          addFooter(doc, currentPage); doc.addPage(); currentPage++;
          drawSectionHeader(doc, sectionTitle || '(continued)', margin, contentW); y = 32;
        }
        doc.text(fieldLines, margin, y);
        y += fieldLines.length * 4.5 + 4;
      }

    } else {
      // Check if this wrapper div contains tables — if so, recurse into it sequentially
      const hasTables = child.querySelector('table');
      if (hasTables && child.tagName !== 'TABLE') {
        flushTextBuffer();
        // Recurse: process this wrapper's children the same way
        const innerRes = renderSectionContentSequentially(doc, child, y, margin, contentW, currentPage, sectionTitle);
        y = innerRes.y;
        currentPage = innerRes.page;
      } else {
        // Plain text/content element — accumulate into buffer
        if (!textBuffer) textBuffer = document.createElement('div');
        textBuffer.appendChild(child.cloneNode(true));
      }
    }
  });

  // Render any remaining text buffer
  flushTextBuffer();

  return { y, page: currentPage };
}

/**
 * renderEmergencyBoxes — Render colored notification boxes (YELLOW or RED)
 * 
 * BOX STYLES:
 *   - .emergency-box (yellow): Fill [248, 225, 144], Border [255, 165, 0]
 *   - .emergency-box2 (red): Fill [250, 143, 143], Border [250, 17, 17]
 *   - Title color matches border color (orange for yellow, red for red)
 * 
 * BOX LAYOUT:
 *   - Rounded corners (2mm radius)
 *   - Title: Bold, 11pt, title-colored text
 *   - Body: Paragraph text + bullet points (prefixed with •)
 *   - Padding: 5mm margin from edge, 6mm top offset
 *   - Height: Auto-calculated from content (min 18mm)
 * 
 * NOTE: This function is NOT used in current RAMS rendering (superseded by
 * renderSectionContentSequentially). Kept for backward compatibility/reference.
 * 
 * @param {jsPDF} doc
 * @param {HTMLElement} container — Element containing .emergency-box elements
 * @param {number} startY
 * @param {number} margin
 * @param {number} contentW
 * @param {number} currentPage
 * @param {string} sectionTitle
 * @returns {{y: number, page: number}}
 */
function renderEmergencyBoxes(doc, container, startY, margin, contentW, currentPage, sectionTitle) {
  let y = startY;

  const boxes = container.querySelectorAll('.emergency-box, .emergency-box-urgent, .emergency-box2');
  if (!boxes.length) return { y, page: currentPage };

  boxes.forEach(box => {
    let fill = [248, 225, 144];
    let stroke = [255, 165, 0];
    let titleCol = [204, 102, 0];

    if (box.classList.contains('emergency-box2')) {
      fill = [250, 143, 143];
      stroke = [250, 17, 17];
      titleCol = [255, 2, 2];
    }

    const title = cleanText(box.querySelector('h3')?.textContent || '');
    const ps = Array.from(box.querySelectorAll('p')).map(p => cleanText(p.textContent || ''));
    const lis = Array.from(box.querySelectorAll('li')).map(li => cleanText(li.textContent || ''));

    doc.setFontSize(9);
    doc.setFont(undefined, 'normal');

    let lines = [];





    
    ps.forEach(t => {
      if (!t) return;
      lines = lines.concat(doc.splitTextToSize(t, contentW - 10));
    });

    lis.forEach(t => {
      if (!t) return;
      lines = lines.concat(doc.splitTextToSize('• ' + t, contentW - 10));
    });

    const titleH = title ? 6 : 0;
    const bodyH = lines.length * 4.5;
    const boxH = Math.max(18, titleH + bodyH + 10);

    if (y + boxH > 270) {
      addFooter(doc, currentPage);
      doc.addPage();
      currentPage++;
      drawSectionHeader(doc, sectionTitle + ' (continued)', margin, contentW);
      y = 32;
    }

    doc.setFillColor(...fill);
    doc.setDrawColor(...stroke);
    doc.setLineWidth(0.6);
    doc.roundedRect(margin, y, contentW, boxH, 2, 2, 'FD');

    let ty = y + 6;
    if (title) {
      doc.setFont(undefined, 'bold');
      doc.setFontSize(FONT_HEAD);
      doc.setTextColor(...titleCol);
      doc.text(doc.splitTextToSize(title, contentW - 10), margin + 5, ty);
      ty += 5;
    }

    doc.setFont(undefined, 'normal');
    doc.setFontSize(FONT_BODY);
    doc.setTextColor(30, 30, 30);
    doc.text(lines, margin + 5, ty);

    y += boxH + 6;
  });

  return { y, page: currentPage };
}

/**
 * renderRichContent — Render mixed HTML content (paragraphs, bullet points, headings)
 * 
 * FEATURES:
 *   - Converts formatted HTML to plain text with bullets and headings preserved
 *   - Detects headings (@@H@@ marker from getFormattedText)
 *   - Detects bullet points (lines starting with • or -)
 *   - Handles automatic page breaks when content exceeds page height
 *   - Maintains consistent column text wrapping and line spacing
 * 
 * TEXT FORMATTING:
 *   - Headings (@@H@@): Bold, dark blue, 10pt, requires bold font style marker
 *   - Bullets (•): Indented 5mm, normal 9pt text
 *   - Regular text: 9pt, normal weight, 30/30/30 grey
 * 
 * PAGE BREAKS:
 *   Triggered when Y > 260mm (leaving 10mm for footer on 297mm page)
 *   New pages include section header and reset Y to 32mm
 * 
 * @param {jsPDF} doc
 * @param {HTMLElement} element — Element containing text (HTML converted to formatted text)
 * @param {number} startY
 * @param {number} margin
 * @param {number} contentW
 * @param {number} currentPage
 * @param {string} sectionTitle — For page break headers
 * @returns {{y: number, page: number}}
 */
function renderRichContent(doc, element, startY, margin, contentW, currentPage, sectionTitle) {
  let y = startY;
  const text = getFormattedText(element);
  if (!text) return { y, page: currentPage };

  const paragraphs = text.split('\n');

  doc.setFontSize(FONT_BODY);
  doc.setFont(undefined, 'normal');
  doc.setTextColor(30, 30, 30);

  paragraphs.forEach(para => {
    para = para.trim();
    if (!para) { y += 2; return; }

    // Detect headings
    const isHeading = para.startsWith('@@H@@') || /^\d+\.\d+\s/.test(para) || /^Section\s/i.test(para);
if (para.startsWith('@@H@@')) para = para.replace('@@H@@', '').trim();

    if (isHeading) {
      if (y > 260) {
        addFooter(doc, currentPage);
        doc.addPage();
        currentPage++;
        drawSectionHeader(doc, sectionTitle || '(continued)', margin, contentW);
        y = 32;
      }
      doc.setFontSize(FONT_HEAD);
      doc.setFont(undefined, 'bold');
      doc.setTextColor(40, 40, 40);
      const headLines = doc.splitTextToSize(para, contentW);
      doc.text(headLines, margin, y);
      y += headLines.length * LINE_H + 2;
      doc.setFontSize(FONT_BODY);
      doc.setFont(undefined, 'normal');
      doc.setTextColor(30, 30, 30);
      return;
    }

    // Detect bullet points
    const isBullet = para.startsWith('•') || para.startsWith('-');
    const indent = isBullet ? 5 : 0;
    const textW = contentW - indent;

    // Detect bold markers **text** — render whole paragraph bold if it starts with **
    const hasBold = para.includes('**');
    if (hasBold) {
      // Split into segments: normal and **bold**
      const segments = para.split(/\*\*(.*?)\*\*/g);
      // segments: [normal, bold, normal, bold, ...]
      let xPos = margin + indent;
      const lineHeight = 4.5;

      // Measure total text to check page break
      const plainPara = para.replace(/\*\*/g, '');
      const checkLines = doc.splitTextToSize(plainPara, textW);
      if (y + checkLines.length * lineHeight > 270) {
        addFooter(doc, currentPage);
        doc.addPage();
        currentPage++;
        drawSectionHeader(doc, sectionTitle || '(continued)', margin, contentW);
        y = 32;
        xPos = margin + indent;
      }

      // Simple approach: strip ** and render as bold if starts with **
      if (para.startsWith('**')) {
        doc.setFontSize(FONT_BODY);
        doc.setFont(undefined, 'bold');
        doc.setTextColor(30, 30, 30);
      }
      const cleanPara = para.replace(/\*\*/g, '');
      const lines = doc.splitTextToSize(cleanPara, textW);
      doc.text(lines, margin + indent, y);
      doc.setFontSize(FONT_BODY);
      doc.setFont(undefined, 'normal');
      y += lines.length * LINE_H + 1.5;
    } else {
      const lines = doc.splitTextToSize(para, textW);
      if (y + lines.length * 4.5 > 270) {
        addFooter(doc, currentPage);
        doc.addPage();
        currentPage++;
        drawSectionHeader(doc, sectionTitle || '(continued)', margin, contentW);
        y = 32;
      }
      doc.text(lines, margin + indent, y);
      y += lines.length * LINE_H + 1.5;
    }
  });

  return { y, page: currentPage };
}

/**
 * renderHTMLTable - Simple HTML table renderer (no pagination)
 * 
 * LAYOUT:
 *   - Equal column widths (contentW / num columns)
 *   - Header rows: Dark blue [20, 30, 60] background, white bold text
 *   - Data rows: Even rows light-grey [248, 249, 252], odd rows white
 *   - All cells: 8pt text, grey borders [200, 210, 220]
 * 
 * NOTE: Does NOT handle page breaks — for use within pre-sized content areas
 * For tables that may exceed page height, use renderHTMLTablePaginated instead
 * 
 * @param {jsPDF} doc
 * @param {HTMLTableElement} table
 * @param {number} startY
 * @param {number} margin
 * @param {number} contentW
 * @param {number} currentPage
 * @returns {number} Final Y coordinate
 */
function renderHTMLTable(doc, table, startY, margin, contentW, currentPage) {
  let y = startY;
  const rows = table.querySelectorAll('tr');
  if (rows.length === 0) return y;

  rows.forEach((row, ri) => {
    const cells = row.querySelectorAll('th, td');
    if (cells.length === 0) return;

    const numCols = cells.length;
    const colW = contentW / numCols;
    const isHeader = row.querySelector('th') !== null;

    doc.setFontSize(FONT_BODY);
    const cellTexts = [];
    cells.forEach(cell => {
      const txt = cleanText(cell.textContent);
      const wrapped = doc.splitTextToSize(txt, colW - 4);
      cellTexts.push(wrapped);
    });

    const rowH = Math.max(7, ...cellTexts.map(l => l.length * 3.5 + 3));

    if (y + rowH > 270) {
      addFooter(doc, currentPage);
      doc.addPage();
      currentPage++;
      y = 20;
    }

    let xPos = margin;
    cells.forEach((cell, ci) => {
      if (isHeader) {
        doc.setFillColor(...(window._activePdfBrand || [20, 30, 60]));
        doc.rect(xPos, y, colW, rowH, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFont(undefined, 'bold');
      } else if (ri % 2 === 0) {
        doc.setFillColor(248, 249, 252);
        doc.rect(xPos, y, colW, rowH, 'F');
        doc.setTextColor(30, 30, 30);
        doc.setFont(undefined, 'normal');
      } else {
        doc.setFillColor(255, 255, 255);
        doc.rect(xPos, y, colW, rowH, 'F');
        doc.setTextColor(30, 30, 30);
        doc.setFont(undefined, 'normal');
      }

      if (!isHeader && (cell.classList.contains('label') || cell.classList.contains('dir-label') || cell.querySelector('strong'))) {
        doc.setFont(undefined, 'bold');
        doc.setTextColor(60, 60, 60);
      }

      doc.setDrawColor(200, 210, 220);
      doc.setLineWidth(0.3);
      doc.rect(xPos, y, colW, rowH);
      doc.setFontSize(FONT_BODY);
      doc.text(cellTexts[ci], xPos + 2, y + 4);

      xPos += colW;
    });

    y += rowH;
  });

  return y;
}

/**
 * renderHTMLTablePaginated — Render HTML <table> with proper pagination and styling
 * 
 * LAYOUT:
 *   - All columns equal width (contentW / number of columns)
 *   - Header rows: Dark blue background [20, 30, 60], white text, bold
 *   - Data rows: Alternating white/light-grey backgrounds
 *   - All cells have thin grey borders [200, 210, 220]
 *   - Text: 8pt, center-aligned within cells
 * 
 * PAGE BREAKS:
 *   Triggered when row height would exceed Y=270mm
 *   New pages include section header and reset Y to 32mm
 *   All pages include footer with section title
 * 
 * CELL DETECTION:
 *   - <th> elements → header row (bold, blue background)
 *   - <td> elements → data cells
 *   - Special classes: .label, .dir-label → rendered bold/highlighted
 * 
 * @param {jsPDF} doc
 * @param {HTMLTableElement} table — HTML <table> element
 * @param {number} startY
 * @param {number} margin
 * @param {number} contentW
 * @param {number} currentPage
 * @param {string} sectionTitle — For page headers
 * @returns {{y: number, page: number}}
 */
function renderHTMLTablePaginated(doc, table, startY, margin, contentW, currentPage, sectionTitle) {
  let y = startY;
  // Collect only rows that are direct tbody/thead/table children (skip nested tables)
  const rows = Array.from(table.querySelectorAll('tr')).filter(r => {
    let p = r.parentElement;
    while (p && p !== table) {
      if (p.tagName === 'TABLE') return false;
      p = p.parentElement;
    }
    return true;
  });
  if (rows.length === 0) return { y, page: currentPage };

  // Work out column count from the row with most cells
  const numCols = Math.max(...rows.map(r => r.querySelectorAll('th, td').length));
  if (numCols === 0) return { y, page: currentPage };

  // ── Smart column widths based on column count ──────────────
  // Detect table type by header text to apply sensible proportions
  const headerRow = table.querySelector('thead tr, tr:first-child');
  const headerTexts = headerRow ? Array.from(headerRow.querySelectorAll('th,td')).map(c => c.textContent.trim().toLowerCase()) : [];
  const isHazardTable = headerTexts.some(t => t.includes('hazard') || t.includes('risk') || t.includes('control'));
  const isPersonnelTable = headerTexts.some(t => t.includes('role') || t.includes('name') || t.includes('contact'));
  const isRevisionTable = headerTexts.some(t => t.includes('revision') || t.includes('issued'));
  const isDocTable = headerTexts.some(t => t.includes('document') || t.includes('reference') || t.includes('description'));

  let colWidths;
  if (numCols === 2) {
    // 2-col: label | value
    colWidths = [contentW * 0.35, contentW * 0.65];
  } else if (numCols === 3 && isHazardTable) {
    // Hazard | Risk | Controls
    colWidths = [contentW * 0.28, contentW * 0.22, contentW * 0.50];
  } else if (numCols === 3 && isPersonnelTable) {
    // Role | Name | Contact
    colWidths = [contentW * 0.40, contentW * 0.35, contentW * 0.25];
  } else if (numCols === 3 && isDocTable) {
    // Document | Ref | Description
    colWidths = [contentW * 0.35, contentW * 0.20, contentW * 0.45];
  } else if (numCols === 3) {
    colWidths = [contentW * 0.30, contentW * 0.30, contentW * 0.40];
  } else if (numCols === 4 && isRevisionTable) {
    colWidths = [contentW * 0.12, contentW * 0.38, contentW * 0.25, contentW * 0.25];
  } else if (numCols === 4) {
    colWidths = [contentW * 0.22, contentW * 0.28, contentW * 0.28, contentW * 0.22];
  } else if (numCols === 5) {
    colWidths = [contentW * 0.18, contentW * 0.18, contentW * 0.20, contentW * 0.24, contentW * 0.20];
  } else {
    // Fallback: equal widths
    colWidths = Array(numCols).fill(contentW / numCols);
  }

  // Normalise widths so they sum exactly to contentW (avoid float drift)
  const sum = colWidths.reduce((a, b) => a + b, 0);
  colWidths = colWidths.map(w => (w / sum) * contentW);

  rows.forEach((row, ri) => {
    const cells = row.querySelectorAll('th, td');
    if (cells.length === 0) return;
    const isHeader = row.querySelector('th') !== null;

    // Build cell text arrays using actual column widths
    doc.setFontSize(FONT_BODY);
    const cellTexts = [];
    cells.forEach((cell, ci) => {
      const cw = colWidths[ci] || (contentW / numCols);
      // Get text, preserving bullet structure from lists
      let txt = '';
      const lis = cell.querySelectorAll('li');
      if (lis.length > 0) {
        txt = Array.from(lis).map(li => '• ' + cleanText(li.textContent)).join('\n');
      } else {
        txt = cleanText(cell.textContent);
      }
      const wrapped = doc.splitTextToSize(txt, cw - 4);
      cellTexts.push(wrapped);
    });

    const rowH = Math.max(8, ...cellTexts.map(l => l.length * LINE_H + 3));

    if (y + rowH > 270) {
      addFooter(doc, currentPage);
      doc.addPage();
      currentPage++;
      drawSectionHeader(doc, sectionTitle || '(continued)', margin, contentW);
      y = 32;
    }

    let xPos = margin;
    cells.forEach((cell, ci) => {
      const cw = colWidths[ci] || (contentW / numCols);

      // Background fill
      if (isHeader) {
        doc.setFillColor(...(window._activePdfBrand || [20, 30, 60]));
      } else if (ri % 2 === 0) {
        doc.setFillColor(248, 249, 252);
      } else {
        doc.setFillColor(255, 255, 255);
      }
      doc.rect(xPos, y, cw, rowH, 'F');

      // Text colour and weight
      if (isHeader) {
        doc.setTextColor(255, 255, 255);
        doc.setFont(undefined, 'bold');
      } else if (cell.classList.contains('label') || cell.classList.contains('dir-label') || cell.querySelector('strong')) {
        doc.setFont(undefined, 'bold');
        doc.setTextColor(40, 40, 40);
      } else {
        doc.setFont(undefined, 'normal');
        doc.setTextColor(30, 30, 30);
      }

      // Cell border
      doc.setDrawColor(200, 210, 220);
      doc.setLineWidth(0.3);
      doc.rect(xPos, y, cw, rowH);

      // Cell text
      doc.setFontSize(FONT_BODY);
      doc.text(cellTexts[ci], xPos + 2, y + 4);
      xPos += cw;
    });

    y += rowH;
  });

  return { y, page: currentPage };
}

/** Render table in landscape with page tracking */
function renderHTMLTableLandscape(doc, table, startY, margin, contentW, currentPage, pageW, pageH) {
  let y = startY;
  const rows = table.querySelectorAll('tr');
  if (rows.length === 0) return { y, page: currentPage };

  rows.forEach((row, ri) => {
    const cells = row.querySelectorAll('th, td');
    if (cells.length === 0) return;

    const numCols = cells.length;
    const colW = contentW / numCols;
    const isHeader = row.querySelector('th') !== null;

    doc.setFontSize(7);
    const cellTexts = [];
    cells.forEach(cell => {
      const txt = cleanText(cell.textContent);
      const wrapped = doc.splitTextToSize(txt, colW - 3);
      cellTexts.push(wrapped);
    });

    const rowH = Math.max(8, ...cellTexts.map(l => l.length * LINE_H + 3));

    if (y + rowH > pageH - 15) {
      addFooterLandscape(doc, currentPage, pageW);
      doc.addPage([297, 210], 'l');
      currentPage++;
      y = 15;
    }

    let xPos = margin;
    cells.forEach((cell, ci) => {
      if (isHeader) {
        doc.setFillColor(...(window._activePdfBrand || [20, 30, 60]));
        doc.rect(xPos, y, colW, rowH, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFont(undefined, 'bold');
      } else {
        doc.setFillColor(ri % 2 === 0 ? 248 : 255, ri % 2 === 0 ? 249 : 255, ri % 2 === 0 ? 252 : 255);
        doc.rect(xPos, y, colW, rowH, 'F');
        doc.setTextColor(30, 30, 30);
        doc.setFont(undefined, 'normal');
      }

      doc.setDrawColor(200, 210, 220);
      doc.setLineWidth(0.2);
      doc.rect(xPos, y, colW, rowH);
      doc.setFontSize(7);
      doc.text(cellTexts[ci], xPos + 1.5, y + 3.5);
      xPos += colW;
    });

    y += rowH;
  });

  return { y, page: currentPage };
}

/**
 * addFooter - Draw footer bar on portrait page (A4 21 0x297mm)
 * 
 * LAYOUT (bottom 6-10mm of page):
 *   - Thin blue line separator at Y=280mm
 *   - Left (Y=286): Company name "AHS Compliance Consulting" (bold, 7pt)
 *   - Center (Y=286): "Uncontrolled if printed" (italic, 6pt, grey)
 *   - Right: Empty (page numbers added separately in updatePageNumbers)
 * 
 * COLORS:
 *   - Separator line: [50, 110, 170] (medium blue)
 *   - Text: [80, 90, 110] (dark grey) or [120, 130, 150] (lighter grey for disclaimer)
 * 
 * @param {jsPDF} doc
 * @param {number} pageNum — Current page number (not currently used in rendering)
 */
function addFooter(doc, pageNum) {
  // Separator line (thin blue rule)
  doc.setDrawColor(50, 110, 170);
  doc.setLineWidth(0.5);
  doc.line(15, 280, 195, 280);

  // Company name (left, bold)
  doc.setFontSize(7);
  doc.setFont(undefined, 'bold');
  doc.setTextColor(80, 90, 110);
  doc.text('AHS Compliance Consulting', 15, 286);

  // Disclaimer (center, italic, smaller, lighter grey)
  doc.setFont(undefined, 'italic');
  doc.setFontSize(6);
  doc.setTextColor(120, 130, 150);
  doc.text('Uncontrolled if printed', 105, 286, { align: 'center' });

  // Placeholder for right-side page number (added via UPDATE PAGE NUMBERS section)
  doc.setFont(undefined, 'normal');
  doc.setFontSize(7);
  doc.setTextColor(80, 90, 110);
}

/**
 * addFooterLandscape - Draw footer bar on landscape page (297 x 210mm)
 * 
 * LAYOUT (bottom of landscape page, ~Y=200mm):
 *   - Thin blue line separator at Y=200mm
 *   - Left (Y=206): Company name "AHS Compliance Consulting" (bold, 7pt)
 *   - Center (Y=206): "Uncontrolled if printed" (italic, 6pt, grey)
 *   - Right (Y=206): Current date in GB format (7pt, right-aligned)
 * 
 * Used on Risk Assessment landscape pages. Date auto-populated with today's date.
 * 
 * @param {jsPDF} doc
 * @param {number} pageNum — Current page number (not currently used)
 * @param {number} pageW — Page width (297 for landscape)
 */
function addFooterLandscape(doc, pageNum, pageW) {
  const fw = pageW || 297;
  
  // Separator line (thin blue rule)
  doc.setDrawColor(50, 110, 170);
  doc.setLineWidth(0.5);
  doc.line(10, 200, fw - 10, 200);

  // Company name (left, bold)
  doc.setFontSize(7);
  doc.setFont(undefined, 'bold');
  doc.setTextColor(80, 90, 110);
  doc.text('AHS Compliance Consulting', 10, 206);

  // Disclaimer (center, italic, smaller, lighter grey)
  doc.setFont(undefined, 'italic');
  doc.setFontSize(6);
  doc.setTextColor(120, 130, 150);
  doc.text('Uncontrolled if printed', fw / 2, 206, { align: 'center' });

  // Date (right, normal, date formatted as DD/MM/YYYY)
  doc.setFont(undefined, 'normal');
  doc.setFontSize(7);
  doc.setTextColor(80, 90, 110);
  doc.text(new Date().toLocaleDateString('en-GB'), fw - 10, 206, { align: 'right' });
}



























// ─── CPP PDF GENERATION (using jsPDF, same as RAMS) ─────────────────────────────
async function generateCPPReport() {
  console.log('━━━ CPP PDF EXPORT STARTED ━━━');
  const btn = document.getElementById('btnClientReport');
  const originalText = btn.textContent;
  btn.textContent = '⏳ Generating CPP PDF...';
  btn.disabled = true;

  try {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'a4'); // portrait A4
    let currentPage = 1;
    const PAGE_W = 210;
    const MARGIN = 15;
    const CONTENT_W = PAGE_W - MARGIN * 2;

    console.log('=== CPP PDF Generation Started ===');

    // ─── GET CPP TAB REFERENCE ────
    const cppTab = document.getElementById('tab-cpp');
    if (!cppTab) {
      throw new Error('CPP Tab not found');
    }

    // ─── PRE-FETCH CLIENT LOGO ────
    _cachedClientLogoData = null;
    try {
      // First, try to use the embedded logo from logo-embedder.js
      if (window._embeddedClientLogoData) {
        _cachedClientLogoData = window._embeddedClientLogoData;
        console.log('✅ Using embedded Base64 client logo from logo-embedder.js');
      } else {
        // Fallback: try to get from img element in CPP tab
        const clientImgForCache = cppTab.querySelector('img[src*="client"]');
        if (clientImgForCache && clientImgForCache.src) {
          // If the src is already a data URI, use it directly
          if (clientImgForCache.src.startsWith('data:image')) {
            _cachedClientLogoData = clientImgForCache.src;
            console.log('✅ Using data URI client logo from img element');
          } else {
            // Otherwise fetch it
            _cachedClientLogoData = await fetchImageAsDataURL(clientImgForCache.src);
            if (_cachedClientLogoData) {
              console.log('✅ Client logo pre-fetched successfully for CPP');
            }
          }
        }
      }
      
      if (!_cachedClientLogoData) {
        console.log('⚠ Client logo: no embedded or fetched logo available for CPP');
      }
    } catch (e) {
      console.log('⚠ Client logo error:', e.message);
    }

    // ─── COLLECT DATA FROM CPP FORM FIELDS ────────────────────────────
    const cppProjectInfoTable = cppTab.querySelector('table.project-info');
    const projectName    = cppProjectInfoTable ? getTextFromElement(cppProjectInfoTable.querySelector('tr:nth-child(1) td.value')) : '';
    const projectAddress = cppProjectInfoTable ? getTextFromElement(cppProjectInfoTable.querySelector('tr:nth-child(2) td.value')) : '';
    const worksToBeUndertaken = cppProjectInfoTable ? getTextFromElement(cppProjectInfoTable.querySelector('tr:nth-child(3) td.value')) : '';
    const clientName     = cppProjectInfoTable ? getTextFromElement(cppProjectInfoTable.querySelector('tr:nth-child(4) td.value')) : '' || getTextFromElement(cppTab.querySelector('#lhClientNamecpp'));
    const clientAddress  = cppProjectInfoTable ? getTextFromElement(cppProjectInfoTable.querySelector('tr:nth-child(5) td.value')) : '';
    const preparedBy     = cppProjectInfoTable ? getTextFromElement(cppProjectInfoTable.querySelector('tr:nth-child(6) td.value')) : '';
    const reportDate     = getTextFromElement(cppTab.querySelector('#lhDatecpp')) || 'N/A';
    const producedBy     = getTextFromElement(cppTab.querySelector('#lhProducecpp')) || 'AHS';

    // ========================================
    // PAGE 1: COVER PAGE
    // ========================================
    doc.setFillColor(...(window._activePdfBrand || [20, 30, 60]));
    doc.rect(0, 10, PAGE_W, 28, 'F');
    doc.setFontSize(26);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(255, 255, 255);
    doc.text('CONSTRUCTION PHASE PLAN', PAGE_W / 2, 23, { align: 'center' });
    doc.setFontSize(12);
    doc.setFont(undefined, 'normal');
    doc.text('Construction Health & Safety nformation', PAGE_W / 2, 32, { align: 'center' });

    // Client logo
    let logoData = _cachedClientLogoData, logoProps = null, logoX = 65, logoY = 55, logoW = 90, logoH = 0;
    try {
      if (logoData) {
        logoProps = doc.getImageProperties(logoData);
        const aspectRatio = logoProps.height / logoProps.width;
        logoH = logoW * aspectRatio;
        logoX = (PAGE_W - logoW) / 2;
        doc.addImage(logoData, 'PNG', logoX, logoY, logoW, logoH);
      }
    } catch (e) {
      console.log('⚠ Could not load client logo:', e.message);
    }

    // Project details box
    let y = logoH > 0 ? (logoY + logoH + 6) : 100;
    const boxInsetX = 12;
    const labelX = MARGIN + boxInsetX;
    const valueX = 100;
    const pageW = doc.internal.pageSize.getWidth();
    const valueWidth = pageW - valueX - MARGIN - 6;
    const lineH = 5;

    const coverFields = [
      ['Project Name', projectName],
      ['Site Address', projectAddress],
      ['Works to be Undertaken', worksToBeUndertaken],
      ['Client Name', clientName],
      ['Client Address', clientAddress],
      ['Prepared by', preparedBy],
      ['Date', reportDate],
    ];

    // Pre-calculate box height
    doc.setFontSize(11);
    let totalContentH = 4;
    coverFields.forEach(([label, value]) => {
      const raw = (value || '').toString().replace(/<[^>]*>/g, '');
      const lines = doc.splitTextToSize(raw, valueWidth);
      totalContentH += Math.max(lines.length * lineH, 9);
    });
    const boxPadding = 18;
    const boxH = totalContentH + boxPadding;

    // Draw box
    doc.setFillColor(248, 249, 252);
    doc.rect(MARGIN, y - 5, CONTENT_W, boxH, 'F');
    doc.setDrawColor(...(window._activePdfBrand || [20, 30, 60]));
    doc.setLineWidth(1);
    doc.rect(MARGIN, y - 5, CONTENT_W, boxH);

    // Add fields to box
    y += 8;
    coverFields.forEach(([label, value]) => {
      const raw = (value || '').toString().replace(/<[^>]*>/g, '');
      const lines = doc.splitTextToSize(raw, valueWidth);

      doc.setFontSize(10);
      doc.setFont(undefined, 'bold');
      doc.setTextColor(...(window._activePdfBrand || [20, 30, 60]));
      doc.text(label + ':', labelX, y);

      doc.setFont(undefined, 'normal');
      doc.setFontSize(10);
      doc.setTextColor(50, 50, 50);
      lines.forEach((line, idx) => {
        doc.text(line, valueX, y + (idx * lineH));
      });

      y += Math.max(lines.length * lineH, 9);
    });

    // ========================================
    // REVISION SIGNOFF TABLE (Author/Signature) - CUSTOM STYLED
    // ========================================
    const signoffElement = cppTab.querySelector('#revision-signoff-table');
    if (signoffElement) {
      console.log('✓ Found revision signoff table');
      
      // Add new page
      doc.addPage();
      currentPage++;
      
      // Header
      doc.setFillColor(...(window._activePdfBrand || [20, 30, 60]));
      doc.rect(0, 0, PAGE_W, 20, 'F');
      doc.setFontSize(18);
      doc.setFont(undefined, 'bold');
      doc.setTextColor(255, 255, 255);
      doc.text('Document Approval', PAGE_W / 2, 12, { align: 'center' });
      
      // Extract table data
      const rows = signoffElement.querySelectorAll('tbody tr');
      let y = 32;
      const colWidths = [CONTENT_W * 0.35, CONTENT_W * 0.35, CONTENT_W * 0.3];
      const colX = [MARGIN, MARGIN + colWidths[0], MARGIN + colWidths[0] + colWidths[1]];
      
      rows.forEach((row, rowIdx) => {
        const cells = row.querySelectorAll('td');
        const rowHeight = rowIdx === 0 ? 10 : 30; // Header smaller, content larger for signature
        
        // Header row background
        if (rowIdx === 0) {
          doc.setFillColor(240, 242, 245);
        } else {
          doc.setFillColor(255, 255, 255);
        }
        
        // Row border and background
        doc.rect(MARGIN, y, CONTENT_W, rowHeight, 'F');
        doc.setDrawColor(200, 210, 220);
        doc.setLineWidth(0.3);
        doc.rect(MARGIN, y, CONTENT_W, rowHeight);
        
        // Draw each cell
        cells.forEach((cell, colIdx) => {
          // Cell border
          doc.setDrawColor(200, 210, 220);
          doc.line(colX[colIdx], y, colX[colIdx], y + rowHeight);
          
          if (rowIdx === 0) {
            // Header cell
            doc.setFontSize(9);
            doc.setFont(undefined, 'bold');
            doc.setTextColor(...(window._activePdfBrand || [20, 30, 60]));
            const cellText = cell.textContent.trim();
            doc.text(cellText, colX[colIdx] + 3, y + 6);
          } else {
            // Data cell
            doc.setFontSize(9);
            doc.setFont(undefined, 'normal');
            doc.setTextColor(50, 50, 50);
            
            const cellWidth = colX[colIdx + 1] ? colX[colIdx + 1] - colX[colIdx] - 4 : CONTENT_W - colX[colIdx] - 3;
            
            // Check if it has an image (signature)
            const img = cell.querySelector('img');
            if (img) {
              doc.text('[Signature space]', colX[colIdx] + 3, y + rowHeight / 2, { align: 'left' });
            } else {
              // Regular text content
              const content = cell.textContent.trim();
              const lines = doc.splitTextToSize(content, cellWidth);
              doc.text(lines, colX[colIdx] + 3, y + 5, { maxWidth: cellWidth, overflow: 'hidden' });
            }
          }
        });
        
        y += rowHeight;
      });
      
      addFooter(doc, currentPage);
      console.log('✓ Revision signoff rendered with custom styling');
    } else {
      console.warn('⚠ Revision signoff table not found');
    }

    // ========================================
    // REVISION HISTORY TABLE - CUSTOM STYLED
    // ========================================
    const historyElement = cppTab.querySelector('#revision-history-table');
    if (historyElement) {
      console.log('✓ Found revision history table');
      
      // Add new page
      doc.addPage();
      currentPage++;
      
      // Header
      doc.setFillColor(...(window._activePdfBrand || [20, 30, 60]));
      doc.rect(0, 0, PAGE_W, 20, 'F');
      doc.setFontSize(18);
      doc.setFont(undefined, 'bold');
      doc.setTextColor(255, 255, 255);
      doc.text('Revision History', PAGE_W / 2, 12, { align: 'center' });
      
      // Extract table data
      const rows = historyElement.querySelectorAll('tbody tr');
      let y = 32;
      const colWidths = [CONTENT_W * 0.12, CONTENT_W * 0.35, CONTENT_W * 0.18, CONTENT_W * 0.18, CONTENT_W * 0.17];
      const colX = [MARGIN, MARGIN + colWidths[0], MARGIN + colWidths[0] + colWidths[1], MARGIN + colWidths[0] + colWidths[1] + colWidths[2], MARGIN + colWidths[0] + colWidths[1] + colWidths[2] + colWidths[3]];
      
      rows.forEach((row, rowIdx) => {
        const cells = row.querySelectorAll('td');
        const rowHeight = rowIdx === 0 ? 10 : 16; // Header smaller, data slightly smaller
        
        // Header row background
        if (rowIdx === 0) {
          doc.setFillColor(240, 242, 245);
        } else {
          doc.setFillColor(255, 255, 255);
        }
        
        // Row border and background
        doc.rect(MARGIN, y, CONTENT_W, rowHeight, 'F');
        doc.setDrawColor(200, 210, 220);
        doc.setLineWidth(0.3);
        doc.rect(MARGIN, y, CONTENT_W, rowHeight);
        
        // Draw each cell
        cells.forEach((cell, colIdx) => {
          // Cell border
          doc.setDrawColor(200, 210, 220);
          doc.line(colX[colIdx], y, colX[colIdx], y + rowHeight);
          
          if (rowIdx === 0) {
            // Header cell
            doc.setFontSize(8);
            doc.setFont(undefined, 'bold');
            doc.setTextColor(...(window._activePdfBrand || [20, 30, 60]));
            const cellText = cell.textContent.trim();
            doc.text(cellText, colX[colIdx] + 2, y + 6);
          } else {
            // Data cell
            doc.setFontSize(FONT_BODY);
            doc.setFont(undefined, 'normal');
            doc.setTextColor(50, 50, 50);
            
            const cellWidth = colX[colIdx + 1] ? colX[colIdx + 1] - colX[colIdx] - 4 : CONTENT_W - colX[colIdx] - 3;
            const content = cell.textContent.trim();
            const lines = doc.splitTextToSize(content, cellWidth);
            
            // Render lines (limit to fit in row)
            lines.slice(0, Math.ceil(rowHeight / 4)).forEach((line, lineIdx) => {
              doc.text(line, colX[colIdx] + 2, y + 4 + (lineIdx * 3), { maxWidth: cellWidth, overflow: 'hidden' });
            });
          }
        });
        
        y += rowHeight;
        
        // Page break if needed
        if (y > 270 && rowIdx < rows.length - 1) {
          addFooter(doc, currentPage);
          doc.addPage();
          currentPage++;
          
          // Re-draw header row on new page
          doc.setFillColor(240, 242, 245);
          doc.rect(MARGIN, 20, CONTENT_W, 10, 'F');
          doc.setDrawColor(200, 210, 220);
          doc.setLineWidth(0.3);
          doc.rect(MARGIN, 20, CONTENT_W, 10);
          
          rows[0].querySelectorAll('td').forEach((cell, colIdx) => {
            doc.setDrawColor(200, 210, 220);
            doc.line(colX[colIdx], 20, colX[colIdx], 30);
            doc.setFontSize(8);
            doc.setFont(undefined, 'bold');
            doc.setTextColor(...(window._activePdfBrand || [20, 30, 60]));
            doc.text(cell.textContent.trim(), colX[colIdx] + 2, 26);
          });
          
          y = 32;
        }
      });
      
      addFooter(doc, currentPage);
      console.log('✓ Revision history rendered');
    } else {
      console.warn('⚠ Revision history table not found');
    }

    addFooter(doc, currentPage);

    // ========================================
    // TABLE OF CONTENTS PAGE
    // ========================================
    const tocNav = cppTab.querySelector('nav#toc');
    if (tocNav) {
      doc.addPage();
      currentPage++;
      
      // TOC Header
      doc.setFillColor(...(window._activePdfBrand || [20, 30, 60]));
      doc.rect(0, 0, PAGE_W, 20, 'F');
      doc.setFontSize(18);
      doc.setFont(undefined, 'bold');
      doc.setTextColor(255, 255, 255);
      doc.text('Table of Contents', PAGE_W / 2, 12, { align: 'center' });
      
      // Extract and render TOC items
      const tocItems = tocNav.querySelectorAll('ol > li');
      let y = 30;
      
      doc.setFontSize(10);
      doc.setFont(undefined, 'normal');
      doc.setTextColor(30, 30, 30);
      
      tocItems.forEach((item, idx) => {
        const text = item.textContent.trim();
        const itemNum = idx + 1;
        
        if (y > 270) {
          doc.addPage();
          currentPage++;
          y = 20;
          addFooter(doc, currentPage);
        }
        
        // Item number and text
        const lines = doc.splitTextToSize(`${itemNum}. ${text}`, CONTENT_W - 5);
        doc.text(lines, MARGIN + 5, y);
        y += lines.length * 5 + 2;
      });
      
      addFooter(doc, currentPage);
      console.log('✓ Table of Contents added to PDF');
    }

    // ========================================
    // SUBSEQUENT PAGES: CONTENT SECTIONS
    // ========================================
    const cppSections = cppTab.querySelectorAll('.section-cpp');
    console.log(`✓ Found ${cppSections.length} CPP sections for PDF export`);
    
    cppSections.forEach((section, idx) => {
      // Skip table of contents section
      if (section.id === 'toc' || section.id === 'cpp-toc' || section.querySelector('nav')) {
        console.log(`  Skipping TOC section`);
        return;
      }

      // Add new page for each section
      doc.addPage();
      currentPage++;

      // Section header with styled bar (CPP style)
      const headerEl = section.querySelector('.section-header-cpp');
      const sectionTitle = headerEl ? getTextFromElement(headerEl) : 'Section';
      const sectionId = section.id || (headerEl ? headerEl.id : null); // Get ID from section or header
      console.log(`  Section ${idx + 1}: "${sectionTitle}" (id: ${sectionId})`);
      drawSectionHeader(doc, sectionTitle, MARGIN, CONTENT_W);
      
      // Start content below the header bar and line
      y = 28;

      // ═══════════════════════════════════════════════════════════
      // SPECIAL: Section 1 - Project Directory Table
      // ═══════════════════════════════════════════════════════════
      if (sectionId === 'section-1-project-directory-cpp') {
        const dirTable = section.querySelector('.directory-table');
        if (dirTable) {
          console.log('  ✓ Rendering Section 1 Project Directory Table with custom styling');
          
          // Column widths from CSS: 18% | 32% | 18% | 32%
          const colWidths = [CONTENT_W * 0.18, CONTENT_W * 0.32, CONTENT_W * 0.18, CONTENT_W * 0.32];
          const colX = [
            MARGIN, 
            MARGIN + colWidths[0], 
            MARGIN + colWidths[0] + colWidths[1], 
            MARGIN + colWidths[0] + colWidths[1] + colWidths[2]
          ];
          
          const rows = dirTable.querySelectorAll('tbody tr');
          const rowHeight = 12;
          
          rows.forEach((row, rowIdx) => {
            const cells = row.querySelectorAll('td');
            
            // Page break check
            if (y + rowHeight > 270) {
              addFooter(doc, currentPage);
              doc.addPage();
              currentPage++;
              drawSectionHeader(doc, sectionTitle, MARGIN, CONTENT_W);
              y = 28;
            }
            
            // Alternating row background
            if (rowIdx % 2 === 1) {
              doc.setFillColor(248, 249, 252);
              doc.rect(MARGIN, y, CONTENT_W, rowHeight, 'F');
            }
            
            // Draw each cell
            cells.forEach((cell, colIdx) => {
              // Border
              doc.setDrawColor(200, 210, 220);
              doc.setLineWidth(0.3);
              doc.rect(colX[colIdx], y, colWidths[colIdx], rowHeight);
              
              // Check if this is a label cell
              const isLabel = cell.classList.contains('dir-label');
              
              if (isLabel) {
                // Label cell: dark background, bold, centered
                doc.setFillColor(...(window._activePdfBrand || [20, 30, 60]));
                doc.rect(colX[colIdx], y, colWidths[colIdx], rowHeight, 'F');
                doc.setFontSize(8);
                doc.setFont(undefined, 'bold');
                doc.setTextColor(255, 255, 255);
                
                const text = cell.textContent.trim();
                const lines = doc.splitTextToSize(text, colWidths[colIdx] - 4);
                doc.text(lines.join('\n'), colX[colIdx] + 2, y + 3, { maxWidth: colWidths[colIdx] - 4, align: 'left' });
              } else {
                // Data cell: white background, normal text
                doc.setFillColor(255, 255, 255);
                doc.rect(colX[colIdx], y, colWidths[colIdx], rowHeight, 'F');
                doc.setFontSize(8);
                doc.setFont(undefined, 'normal');
                doc.setTextColor(50, 50, 50);
                
                const text = cell.textContent.trim();
                const lines = doc.splitTextToSize(text, colWidths[colIdx] - 4);
                doc.text(lines.join('\n'), colX[colIdx] + 2, y + 3, { maxWidth: colWidths[colIdx] - 4, align: 'left' });
              }
            });
            
            y += rowHeight;
          });
          
          addFooter(doc, currentPage);
          return;
        }
      }

      // ═══════════════════════════════════════════════════════════
      // Regular Section Content — uses sequential renderer so
      // tables, text and enter-blocks all render in DOM order
      // ═══════════════════════════════════════════════════════════

      // Try snippet-editor first (populated by Load CPP / templates)
      // Fall back to .section-content-cpp (hand-entered content)
      const snippetEditorCpp = section.querySelector('.snippet-editor');
      const contentEl        = section.querySelector('.section-content-cpp');
      const renderTarget     = snippetEditorCpp || contentEl;

      if (renderTarget) {
        console.log(`    ✓ Rendering ${snippetEditorCpp ? 'snippet-editor' : 'section-content-cpp'} for: ${sectionTitle}`);
        const seqRes = renderSectionContentSequentially(doc, renderTarget, y, MARGIN, CONTENT_W, currentPage, sectionTitle);
        y = seqRes.y;
        currentPage = seqRes.page;
      } else {
        console.warn(`    ⚠ No renderable content found for section ${idx + 1}: ${sectionTitle}`);
      }

      addFooter(doc, currentPage);
    });

    // ========================================
    // REVISION REGISTER PAGE
    // ========================================
    const revisionTable = cppTab.querySelector('#revision-history-table');
    console.log('Looking for revision table... found:', !!revisionTable);
    
    if (revisionTable) {
      console.log('✓ Revision table found, rendering...');
      doc.addPage();
      currentPage++;
      
      // Revision Register Header
      doc.setFillColor(...(window._activePdfBrand || [20, 30, 60]));
      doc.rect(0, 0, PAGE_W, 20, 'F');
      doc.setFontSize(18);
      doc.setFont(undefined, 'bold');
      doc.setTextColor(255, 255, 255);
      doc.text('Revision Register', PAGE_W / 2, 12, { align: 'center' });
      
      // Clone the table to render it
      const tableClone = revisionTable.cloneNode(true);
      const tableStartY = 28;
      
      try {
        const revTableResult = renderHTMLTablePaginated(doc, tableClone, tableStartY, MARGIN, CONTENT_W, currentPage, 'Revision Register');
        currentPage = revTableResult.page;
        console.log('✓ Revision Register rendered successfully');
      } catch (e) {
        console.error('Error rendering revision table:', e.message);
        // Fallback: render table rows manually
        const rows = tableClone.querySelectorAll('tbody tr');
        let y = tableStartY;
        
        rows.forEach((row, idx) => {
          if (y > 270) {
            doc.addPage();
            currentPage++;
            y = 20;
            addFooter(doc, currentPage);
          }
          
          const cells = row.querySelectorAll('td');
          let cellText = Array.from(cells).map(c => c.textContent.trim()).join(' | ');
          
          const lines = doc.splitTextToSize(cellText, CONTENT_W);
          doc.setFontSize(9);
          doc.text(lines, MARGIN + 5, y);
          y += Math.max(lines.length * 4, 8);
        });
      }
      
      addFooter(doc, currentPage);
    } else {
      console.warn('⚠ Revision table not found in CPP tab');
    }

    // Save PDF
    const fileName = 'CPP_' + new Date().toISOString().split('T')[0] + '.pdf';
    doc.save(fileName);
    console.log('✓ CPP PDF saved:', fileName);

    btn.textContent = originalText;
    btn.disabled = false;

  } catch (e) {
    console.error('CPP PDF generation error:', e);
    alert('Error generating CPP PDF: ' + e.message);
    
    const btn = document.getElementById('btnClientReport');
    btn.textContent = originalText;
    btn.disabled = false;
  }
}