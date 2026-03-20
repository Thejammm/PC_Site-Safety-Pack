/* =============================================================
   cpp-content.js — AHS CPP Populate System
   
   One click fills the CPP tab with:
   - Sections 2-5: Styled prompt cards telling the user 
     exactly what to enter, with guidance notes
   - Sections 6-18: AHS standard boilerplate (generic content 
     that is the same every time, based on live site content)
   - Partially generic sections: Boilerplate + [ENTER: ...] 
     prompts for the parts that change per project
   
   If a section already has content, it is NOT overwritten
   unless the user confirms.
   ============================================================= */
'use strict';

/* ─────────────────────────────────────────────────────────────
   PROMPT CARD HELPER
   Creates a styled guidance card that sits inside the editor.
   When the user starts typing, it disappears automatically.
───────────────────────────────────────────────────────────── */
function promptCard(heading, bullets, notes) {
  // Minimal single-line prompt — user clicks and deletes/replaces
  const hint = notes ? notes : (bullets[0] || heading);
  // Strip any HTML from hint
  const plain = hint.replace(/<[^>]+>/g, '').replace(/&amp;/g,'&').trim();
  return `<p class="cpp-prompt-card" contenteditable="true">${plain}</p>`;
}

/* ─────────────────────────────────────────────────────────────
   EDITABLE FIELD MARKER
   Marks parts of generic content that the user must edit.
   Styled in amber so they stand out clearly.
───────────────────────────────────────────────────────────── */


/* ─────────────────────────────────────────────────────────────
   CPP SECTION CONTENT
   Key:
   - null       = prompt card only (user fills entirely)  
   - string     = boilerplate HTML
   - 'prompt'   = guidance prompt + boilerplate mix
───────────────────────────────────────────────────────────── */
const CPP_SECTIONS = {

  // ── SECTIONS 2-5: User fills based on project/environment ──

  'cpp.section2': promptCard(    'Section 2: Project Details — Complete from project documents',
    [
      '<strong>Project Description:</strong> Describe the nature and scope of the works — what is being built, refurbished or installed?',
      '<strong>Location Overview:</strong> Where is the project? Include full address and any notable features of the site.',
      '<strong>Programme:</strong> What is the expected start date, duration and completion date?',
      '<strong>Project Notification:</strong> Has an F10 been submitted to the HSE? If yes, attach reference.',
      '<strong>Existing Records:</strong> List any surveys, drawings, or reports already in place (asbestos, structural, ground investigation etc.).',
    ],
    'This information usually comes from the client brief, contract documents or pre-construction information pack.'
  ),

  'cpp.section3': promptCard(    'Section 3: Project Specific Conditions & Arrangements — Based on site visit and CPP',
    [
      '<strong>Planning & Managing Construction Work:</strong> How will the PC manage the works? Include programme management, subcontractor control, and coordination arrangements.',
      '<strong>Safety Goals:</strong> What are the specific H&S targets for this project? (e.g. zero RIDDOR incidents, weekly inspections, site audit schedule)',
      '<strong>Communication & Liaison:</strong> How will the PC communicate with the client, designers and contractors? (meetings, reports, toolbox talks)',
      '<strong>Site-specific conditions:</strong> Are there any unusual conditions on this site? (restricted access, occupied building, sensitive neighbours, difficult ground)',
    ],
    'Check the pre-construction information pack from the client / Principal Designer for this information.'
  ),

  'cpp.section4': promptCard(    'Section 4: Environmental Restrictions & Existing Site Risks — From pre-construction information',
    [
      '<strong>Environmental restrictions:</strong> Are there any noise restrictions, protected species, contaminated land, or flood risk areas?',
      '<strong>Existing services:</strong> What underground or overhead services are on or near the site? List utilities and their locations.',
      '<strong>Existing structures:</strong> Are there any existing buildings, retaining walls, or structures that could be affected by the works?',
      '<strong>Ground conditions:</strong> What is known about the ground? (made ground, rock, high water table, contamination)',
      '<strong>Adjacent land uses:</strong> What is next to the site? (railway, highway, school, residential, commercial)',
    ],
    'This section must come from the Pre-Construction Information (PCI) provided by the client or Principal Designer. Do not guess — if you don\'t have the PCI, request it before starting.'
  ),

  'cpp.section5': promptCard(    'Section 5: Significant Design & Construction Hazards — Identified by the design team and PC',
    [
      '<strong>Design hazards:</strong> List any significant hazards arising from the design (e.g. structural works, deep excavations, complex steelwork, cladding at height).',
      '<strong>Construction hazards:</strong> What are the main hazards during the construction phase? (working at height, plant movements, confined spaces, live services)',
      '<strong>Residual risks:</strong> What risks will remain during the life of the building after construction? (access for maintenance, cleaning)',
      '<strong>CDM designer contribution:</strong> What information has the designer provided to assist with safe construction?',
    ],
    'Use the CDM 2015 designer risk register and any pre-construction information provided. This section is critical for demonstrating compliance with CDM Regulation 4.'
  ),

  // ── SECTION 6: Generic — same every time ──
  'cpp.section6': `<p><strong>6.1 Format and Content of this Construction Phase Plan</strong></p>
<p>This Construction Phase Plan has been prepared by the Principal Contractor in accordance with the requirements of Regulation 12 of the Construction (Design and Management) Regulations 2015 and Schedule 3 of the same regulations.</p>
<p>The plan sets out the health and safety management arrangements for the construction phase of this project and is a live document that will be updated and developed as the project progresses. It must be made available to all persons working on the project who need to see it.</p>
<p>This document must be read in conjunction with the following:</p>
<ul>
  <li>Pre-Construction Information (PCI) provided by the client / Principal Designer</li>
  <li>Individual contractor method statements and risk assessments</li>
  <li>Site rules and emergency procedures (see Sections 9 and 16)</li>
  <li>Any permits to work in operation on site</li>
</ul>
<p>The Construction Phase Plan will be reviewed and updated:</p>
<ul>
  <li>At least monthly throughout the construction phase</li>
  <li>When there is a significant change to the programme, scope or method of working</li>
  <li>Following any accident, incident or near miss on site</li>
  <li>When new contractors or activities are introduced to the project</li>
</ul>`,

  // ── SECTION 7: Generic core, with environment-driven additions ──
  'cpp.section7': `<p><strong>7.1 Monitoring Arrangements</strong></p>
<p>Arrangements for monitoring Health, Safety and Welfare throughout the construction phase of this project will take the form of proactive inspections and audits. The results of all safety inspections and audits will be available on site for inspection by interested parties, along with details of all remedial action taken to remedy non-compliance.</p>
<table class="rte-table">
  <thead><tr><th>Activity</th><th>Frequency</th><th>Carried Out By</th><th>Reported To</th></tr></thead>
  <tbody>
    <tr><td>Site Safety Inspection</td><td>Weekly</td><td>Site Manager</td><td>Principal Contractor / Client</td></tr>
    <tr><td>Formal H&S Audit</td><td>Monthly</td><td>AHS Compliance Consulting</td><td>Client / Principal Contractor</td></tr>
    <tr><td>Toolbox Talk</td><td>Weekly</td><td>Site Supervisor</td><td>Site Manager</td></tr>
    <tr><td>Plant & Equipment Inspection</td><td>Daily / Weekly (as per schedule)</td><td>Competent Person / Plant Operator</td><td>Site Manager</td></tr>
    <tr><td>Excavation Inspection</td><td>Start of each shift + after adverse weather</td><td>Competent Person</td><td>Site Manager</td></tr>
    <tr><td>Scaffold Inspection</td><td>Weekly + after adverse weather</td><td>Competent Scaffold Inspector</td><td>Site Manager</td></tr>
    <tr><td>COSHH Review</td><td>When new substances introduced</td><td>Site Manager</td><td>Principal Contractor</td></tr>
  </tbody>
</table>
<p>Inspectors and auditors shall require evidence of competence for individual employees carrying out works on site, particularly for plant operators and those working on risk activities such as working at height, working in excavations, and working with live energy sources.</p>`,

  // ── SECTION 8: Generic ──
  'cpp.section8': `<p><strong>8.1 Communication and Liaison</strong></p>
<p>The Principal Contractor will liaise with the Principal Designer and client as and when required. Meetings will be instructed by the client and held at regular intervals throughout the construction phase.</p>
<p>The Principal Contractor will carry out monthly safety inspections of the site. These inspections will be open to the client on prior notice. A copy of each inspection report will be issued to the client within five working days.</p>
<p>The Principal Contractor will be responsible for ensuring all subcontractors are kept informed of matters relevant to health and safety on this project. This will be achieved through:</p>
<ul>
  <li>Pre-start meetings with all contractors before they commence work on site</li>
  <li>Regular site progress meetings (minimum monthly)</li>
  <li>Weekly site safety briefings / toolbox talks</li>
  <li>Distribution of updated versions of this Construction Phase Plan</li>
  <li>Immediate communication of any changes to site conditions or programme that affect health and safety</li>
</ul>
<p>All subcontractors must provide their method statements and risk assessments to the Principal Contractor for approval a minimum of <strong>5 working days</strong> before commencing their work package.</p>`,

  // ── SECTION 9: Generic ──
  'cpp.section9': `<p><strong>9.1 Site Rules</strong></p>
<p>All contractors' employees, self-employed personnel and visitors must comply with the following site rules at all times. Failure to comply may result in removal from site.</p>
<p><strong>Access & Induction</strong></p>
<ul>
  <li>All workers must have completed a site-specific induction prior to starting work on site.</li>
  <li>All site personnel must sign in and out on a daily basis.</li>
  <li>Visitors must report to the site office on arrival and be accompanied at all times.</li>
  <li>All operatives must hold a valid CSCS card (or equivalent) for their trade.</li>
</ul>
<p><strong>Personal Protective Equipment</strong></p>
<ul>
  <li>Safety helmets and hi-visibility vests/jackets must be worn in all active work areas at all times.</li>
  <li>Safety footwear with steel toe-cap and midsole protection must be worn at all times on site.</li>
  <li>Additional task-specific PPE (eye protection, gloves, hearing protection, RPE) must be worn as required by the relevant method statement and risk assessment.</li>
  <li>Tracksuit bottoms and shorts are not permitted on site.</li>
</ul>
<p><strong>General Conduct</strong></p>
<ul>
  <li>The site operates a zero-tolerance policy on alcohol and drugs. Any person found to be under the influence will be removed from site immediately.</li>
  <li>Smoking is only permitted in designated smoking areas away from flammable materials and welfare facilities.</li>
  <li>Mobile phones must not be used whilst operating plant or machinery, or whilst working at height.</li>
  <li>Horseplay, running, and any unsafe behaviour will not be tolerated.</li>
</ul>
<p><strong>Working Hours</strong></p>
<ul>
  <li>Standard working hours: Monday–Friday 07:30–17:30, Saturday 07:30–13:00.</li>
  <li>Out-of-hours working must be pre-approved by the Principal Contractor and may require local authority notification.</li>
</ul>
<p><strong>Environment & Housekeeping</strong></p>
<ul>
  <li>The site must be kept clean and tidy at all times. Each contractor is responsible for removing their own waste daily.</li>
  <li>Burning of waste is strictly prohibited.</li>
  <li>No materials, plant or equipment to be left in areas that obstruct access, egress or emergency routes.</li>
</ul>`,

  // ── SECTION 10: Generic ──
  'cpp.section10': `<p><strong>10.1 Arrangements for Changes in Design</strong></p>
<p>The Principal Contractor will report to the client or their representative if, for any reason, there is additional information required or a change to the scope of works that may affect health and safety.</p>
<p>The Designer responsible for any design change will assess the health and safety implications of any proposed design change, contract instruction, or any eventuality which could impact on health and safety before the change is implemented on site.</p>
<p>The Principal Designer will be made aware of any significant health and safety risks or changes to programme or methods of working resulting from design changes.</p>
<p>No design change that affects the structural integrity of the works or introduces a significant new hazard will be implemented on site without:</p>
<ul>
  <li>Written confirmation from the designer that the change has been assessed for H&S impact</li>
  <li>A revised or new method statement and risk assessment from the relevant contractor</li>
  <li>Written approval from the Principal Contractor</li>
  <li>Communication to all affected personnel before work commences</li>
</ul>`,

  // ── SECTION 11: Generic with training additions ──
  'cpp.section11': `<p><strong>11.1 Site Induction</strong></p>
<p>All personnel must attend a PCL site-specific induction prior to commencing work on site. Visitors, including delivery drivers, will be given a brief induction covering the key site health and safety issues they need to be aware of during their visit.</p>
<p>Induction will be carried out by a member of the management team and will cover:</p>
<ul>
  <li>Construction Phase Plan and site rules</li>
  <li>Relevant legislation and the operative's responsibilities</li>
  <li>Site geography, access and egress routes, and restricted areas</li>
  <li>Management hierarchy and key site contacts</li>
  <li>First aid arrangements and accident/incident reporting</li>
  <li>Emergency procedures, fire assembly point, and muster point location</li>
  <li>Environmental requirements — noise, dust, vibration and pollution controls</li>
  <li>Interface with other contractors and the public</li>
  <li>Personal Protective Equipment requirements</li>
  <li>Permit to work systems in operation on site</li>
  <li>Welfare facilities location</li>
</ul>
<p><strong>11.2 Ongoing Training & Competency</strong></p>
<p>The Principal Contractor will ensure that all operatives hold the appropriate qualifications, training certificates and competency cards for their trade and activities. The following minimum requirements apply:</p>
<table class="rte-table">
  <thead><tr><th>Certification</th><th>Applies To</th><th>Minimum Requirement</th></tr></thead>
  <tbody>
    <tr><td>CSCS Card</td><td>All site operatives</td><td>Appropriate card for trade</td></tr>
    <tr><td>SMSTS</td><td>Site Managers</td><td>Current (5-yearly renewal)</td></tr>
    <tr><td>SSSTS</td><td>Site Supervisors</td><td>Current (5-yearly renewal)</td></tr>
    <tr><td>First Aid at Work</td><td>Site Manager / designated FAW</td><td>Current (3-yearly renewal)</td></tr>
    <tr><td>Asbestos Awareness</td><td>All operatives</td><td>Annual refresher</td></tr>
    <tr><td>Manual Handling</td><td>All operatives</td><td>Every 3 years</td></tr>
    <tr><td>CPCS / NPORS</td><td>Plant operators</td><td>Relevant category, current</td></tr>
    <tr><td>IPAF</td><td>MEWP operators</td><td>Relevant category, current</td></tr>
    <tr><td>PASMA</td><td>Mobile scaffold users</td><td>Current</td></tr>
  </tbody>
</table>
<p><strong>11.3 Toolbox Talks</strong></p>
<p>Toolbox talks will be held weekly as a minimum, addressing topics relevant to the current works. Records of all toolbox talks (topic, date, attendees) will be maintained on site.</p>`,

  // ── SECTION 12: Environment-driven — prompt for specifics ──
  'cpp.section12': `<p><strong>12.1 General Environmental Good Practice</strong></p>
<p>Good housekeeping will be maintained at all times to ensure that materials and waste are properly managed, storage areas remain secure, and the risk of pollution is minimised. The burning of waste materials is not permitted under any circumstances.</p>
<p>All operatives will be briefed on environmental requirements during site induction. Environmental awareness will be reinforced through toolbox talks and supervision.</p>
<p><strong>12.2 Waste Management</strong></p>
<ul>
  <li>Segregated waste skips will be provided on site for different waste streams (inert, general, hazardous).</li>
  <li>Waste Transfer Notes (WTNs) will be retained for all off-site waste movements for a minimum of 2 years.</li>
  <li>Hazardous waste will be disposed of by a licensed contractor with appropriate documentation.</li>
</ul>
<p><strong>12.3 Pollution Prevention</strong></p>
<ul>
  <li>Concrete washout, paint and hazardous liquids must not enter surface water drains.</li>
  <li>Spill kits will be available at fuel storage and plant maintenance areas.</li>
  <li>Refuelling to take place away from watercourses, drains and unsealed ground.</li>
</ul>
<p><strong>12.4 Noise & Dust Controls</strong></p>
<ul>
  <li>Noisy works restricted to agreed working hours — check local planning conditions.</li>
  <li>Acoustic screening to be used where practicable for noisy operations near sensitive receptors.</li>
  <li>Dust suppression by damping down or on-tool extraction for all dusty operations.</li>
</ul>
<div class="cpp-enter-block">
  <p class="cpp-enter-label">⚠️ Project-specific environmental requirements — complete from site survey or planning conditions:</p>
  <p contenteditable="true" class="cpp-enter-field">Enter any specific environmental constraints for this project — e.g. protected species, watercourses, contaminated land, noise restrictions from planning permission, Tree Preservation Orders, designated areas (SSSI, conservation area), specific working hour restrictions...</p>
</div>`,

  // ── SECTION 13: Works-dependent ──
  'cpp.section13': `<p><strong>13.1 Plant &amp; Equipment Management</strong></p>
<p>All plant and equipment used on this project will be properly maintained, regularly inspected, and serviced in accordance with manufacturer recommendations. Records of all statutory inspections and test certificates will be retained on site within the Plant and Equipment Register.</p>
<p>Plant will not be permitted to operate on site until all statutory inspections and safety checks have been completed and verified by the Site Manager.</p>
<p><strong>Daily pre-use inspections</strong> are mandatory for all plant — the operator must complete the relevant pre-use check sheet before commencing work each day. Defective plant must be taken out of service immediately and not used until repaired and re-inspected.</p>
<p><strong>Relevant legislation and standards:</strong></p>
<ul>
  <li>Provision and Use of Work Equipment Regulations 1998 (PUWER)</li>
  <li>Lifting Operations and Lifting Equipment Regulations 1998 (LOLER) — for all lifting equipment</li>
  <li>Supply of Machinery (Safety) Regulations 2008</li>
</ul>
<div class="cpp-enter-block">
  <p class="cpp-enter-label">⚠️ Project-specific plant — list the main plant and equipment that will be used on this project:</p>
  <p contenteditable="true" class="cpp-enter-field">e.g. 13-tonne tracked excavator, 6-tonne dumper, telehandler, concrete pump, MEWP (specify type), generators, compressors, hand tools, welding equipment...</p>
</div>`,

  // ── SECTION 14: Works-dependent ──
  'cpp.section14': `<p><strong>14.1 Occupational Health</strong></p>
<p>The Principal Contractor is committed to protecting the long-term health of all workers on this project. The following occupational health arrangements are in place:</p>
<p><strong>Noise & Vibration</strong></p>
<ul>
  <li>Noise risk assessments will be carried out for all activities exceeding 80dB(A).</li>
  <li>Hearing protection zones will be established and signposted where noise exceeds 85dB(A).</li>
  <li>HAV (Hand-Arm Vibration) exposure will be monitored — trigger times calculated for all vibrating tools.</li>
  <li>Job rotation will be used to limit individual exposure below the Exposure Action Values (EAV).</li>
</ul>
<p><strong>Dust & Respiratory Health</strong></p>
<ul>
  <li>On-tool extraction or water suppression to be used for all dusty operations where practicable.</li>
  <li>Respiratory Protective Equipment (RPE) to be provided when dust cannot be adequately controlled at source.</li>
  <li>Face fit testing required for all wearers of tight-fitting RPE — records to be maintained on site.</li>
  <li>Silica dust controls: no dry cutting of concrete, masonry or stone — wet methods or on-tool extraction mandatory.</li>
</ul>
<p><strong>Manual Handling</strong></p>
<ul>
  <li>Manual handling assessments to be carried out for all significant lifting, carrying and pushing operations.</li>
  <li>Mechanical aids (hoists, trolleys, vacuum lifters) to be used wherever practicable.</li>
  <li>Two-person lifts mandatory for loads exceeding 20kg where mechanical aids are not available.</li>
</ul>
<p><strong>Health Surveillance</strong></p>
<ul>
  <li>Health surveillance will be provided for workers regularly exposed to hand-arm vibration, noise, or hazardous substances.</li>
</ul>
<div class="cpp-enter-block">
  <p class="cpp-enter-label">⚠️ Project-specific occupational health risks — add any additional hazards specific to this project:</p>
  <p contenteditable="true" class="cpp-enter-field">e.g. asbestos removal/disturbance risk, lead paint, biological hazards, chemical exposure, working in extreme temperatures, confined space air quality monitoring...</p>
</div>`,

  // ── SECTION 15: Generic ──
  'cpp.section15': `<p><strong>15.1 Health &amp; Safety File Information</strong></p>
<p>The Principal Contractor will collect and collate all health and safety information required for the Health & Safety File throughout the construction phase. This information will be passed to the Principal Designer at the end of the project for inclusion in the Health & Safety File.</p>
<p>The following information will be provided as a minimum:</p>
<ul>
  <li>As-built drawings and specifications</li>
  <li>Details of all services installed — location, size, specification</li>
  <li>Structural calculations and certificates</li>
  <li>Details of any residual risks in the completed structure (e.g. fragile roof lights, pre-stressed elements)</li>
  <li>Material safety data sheets for any hazardous materials incorporated into the structure</li>
  <li>Test and commissioning certificates (electrical, gas, water, fire systems)</li>
  <li>Operating and maintenance manuals for installed plant and equipment</li>
  <li>Details of any monitoring or inspection requirements for the completed structure</li>
</ul>
<p>All subcontractors must provide their H&S file information to the Principal Contractor within <strong>2 weeks of completing their works</strong> on site.</p>`,

  // ── SECTION 16: Generic ──
  'cpp.section16': `<p><strong>16.0 Accident &amp; Incident Arrangements</strong></p>
<p>The purpose of this section is to outline the Principal Contractor's arrangements for the prevention, reporting, recording, and investigation of all accidents, incidents, dangerous occurrences, near misses and cases of occupational ill health that occur during the construction phase.</p>
<p>These arrangements ensure compliance with CDM 2015 (Regulation 13), RIDDOR 2013 and the Health and Safety at Work etc. Act 1974.</p>
<p><strong>Responsibilities</strong></p>
<ul>
  <li><strong>Principal Contractor:</strong> Ensure all accidents and near misses are reported, recorded and investigated. Notify HSE of RIDDOR reportable incidents. Review trends and implement preventive measures.</li>
  <li><strong>Site Manager:</strong> Ensure immediate first aid is given. Preserve the scene. Complete accident book entry. Notify Principal Contractor management immediately.</li>
  <li><strong>All Workers:</strong> Report all accidents, incidents and near misses to the Site Manager immediately, however minor.</li>
</ul>
<p><strong>Reporting Procedure</strong></p>
<ul>
  <li>All injuries requiring first aid treatment must be recorded in the site accident book on the day of occurrence.</li>
  <li>RIDDOR reportable incidents (fatalities, specified injuries, over-7-day injuries, dangerous occurrences, occupational diseases) must be reported to the HSE within the required timescales.</li>
  <li>The accident scene must be preserved following any significant incident pending investigation.</li>
  <li>Accident investigation reports will be completed within 5 working days of the incident.</li>
</ul>
<p><strong>RIDDOR Reportable Incidents — Timescales</strong></p>
<table class="rte-table">
  <thead><tr><th>Type of Incident</th><th>Reporting Method</th><th>Timescale</th></tr></thead>
  <tbody>
    <tr><td>Death / Specified Injury</td><td>Online / telephone</td><td>Without delay (telephone same day for fatality)</td></tr>
    <tr><td>Over-7-Day Injury (not reportable over-3-day)</td><td>Online</td><td>Within 15 days</td></tr>
    <tr><td>Dangerous Occurrence</td><td>Online</td><td>Without delay</td></tr>
    <tr><td>Occupational Disease</td><td>Online</td><td>On diagnosis</td></tr>
  </tbody>
</table>`,

  // ── SECTION 17: Generic with editable contact details ──
  'cpp.section17': `<p><strong>17.1 Enforcing Authorities &amp; Key Contacts</strong></p>
<table class="rte-table">
  <thead><tr><th>Contact / Authority</th><th>Details</th></tr></thead>
  <tbody>
    <tr><td><strong>Health & Safety Executive (HSE)</strong><br>Incident reporting</td><td>www.hse.gov.uk<br>Tel: 0300 003 1647<br>RIDDOR online: www.hse.gov.uk/riddor</td></tr>
    <tr><td><strong>Local Authority EHO</strong></td><td contenteditable="true">Enter local authority name and contact details for Environmental Health</td></tr>
    <tr><td><strong>Environment Agency</strong><br>Pollution / environmental incidents</td><td>Incident Hotline: 0800 80 70 60 (24hrs)</td></tr>
    <tr><td><strong>National Gas Emergency</strong></td><td>0800 111 999 (24hrs)</td></tr>
    <tr><td><strong>UK Power Networks / DNO</strong></td><td contenteditable="true">Enter local Distribution Network Operator name and emergency number</td></tr>
    <tr><td><strong>Principal Contractor H&S Contact</strong></td><td contenteditable="true">Enter name, role and contact number</td></tr>
    <tr><td><strong>AHS Compliance Consulting</strong></td><td>07XXX XXXXXX</td></tr>
    <tr><td><strong>Nearest A&E Hospital</strong></td><td contenteditable="true">Enter hospital name, address and telephone number</td></tr>
    <tr><td><strong>Local Police</strong></td><td>101 (non-emergency) / 999 (emergency)</td></tr>
  </tbody>
</table>`,

  // ── SECTION 18: Generic with project-specific additions ──
  'cpp.section18': `<p><strong>18.1 Appendices</strong></p>
<p>The following documents are appended to or referenced within this Construction Phase Plan:</p>
<table class="rte-table">
  <thead><tr><th>Ref</th><th>Document</th><th>Status</th></tr></thead>
  <tbody>
    <tr><td>A</td><td>Pre-Construction Information (PCI)</td><td contenteditable="true">Attached / Ref:</td></tr>
    <tr><td>B</td><td>F10 Notification to HSE</td><td contenteditable="true">Submitted / N/A</td></tr>
    <tr><td>C</td><td>Site-Specific Emergency Plan</td><td contenteditable="true">Attached / TBC</td></tr>
    <tr><td>D</td><td>Method Statements & Risk Assessments Register</td><td contenteditable="true">See RAMS document</td></tr>
    <tr><td>E</td><td>Contractor Competency Register</td><td contenteditable="true">Maintained on site</td></tr>
    <tr><td>F</td><td>Plant & Equipment Inspection Register</td><td contenteditable="true">Maintained on site</td></tr>
    <tr><td>G</td><td>Induction Records</td><td contenteditable="true">Maintained on site</td></tr>
    <tr><td>H</td><td>Toolbox Talk Records</td><td contenteditable="true">Maintained on site</td></tr>
    <tr><td contenteditable="true">I</td><td contenteditable="true">Add additional document</td><td contenteditable="true">Status</td></tr>
  </tbody>
</table>`,

};

/* ─────────────────────────────────────────────────────────────
   POPULATE FUNCTION
   Merges template content (sections 1-5) with standard 
   boilerplate (sections 6-18) and fills the CPP tab.
   All content is injected as editable HTML — user can 
   edit everything directly in the UI.
───────────────────────────────────────────────────────────── */
function populateCPP() {
  const cppTab = document.getElementById('tab-cpp');
  if (!cppTab) return;

  // Get selected template
  const sel = document.getElementById('cppTemplateSelect');
  const templateKey = sel ? sel.value : null;

  if (!templateKey) {
    alert('Please select a project type from the dropdown first.');
    sel && sel.focus();
    return;
  }

  const template = window.CPP_TEMPLATES && window.CPP_TEMPLATES[templateKey];

  // Check if any sections already have content
  const editors = cppTab.querySelectorAll('.snippet-editor');
  const hasContent = Array.from(editors).some(ed => ed.textContent.trim().length > 10);

  if (hasContent) {
    if (!confirm(
      `Load "${templateKey}" template?\n\n` +
      'Some sections already have content.\n' +
      'Click OK to overwrite ALL sections, or Cancel to abort.'
    )) return;
  }

  let filled = 0;

  // ── Sections 2-5: from selected template ──────────────────
  if (template) {
    [
      { key: 'cpp.section2', tKey: 'section2' },
      { key: 'cpp.section3', tKey: 'section3' },
      { key: 'cpp.section4', tKey: 'section4' },
      { key: 'cpp.section5', tKey: 'section5' },
    ].forEach(({ key, tKey }) => {
      const el  = cppTab.querySelector(`[data-key="${key}"]`);
      const html = template[tKey];
      if (el && html) { el.innerHTML = html; filled++; }
    });
  }

  // ── Sections 6-18: standard boilerplate ───────────────────
  Object.entries(CPP_SECTIONS).forEach(([dataKey, html]) => {
    // Skip sections 2-5 — already handled by template above
    const secNum = parseInt((dataKey.match(/section(\d+)/) || [])[1]);
    if (secNum && secNum <= 5) return;

    const el = cppTab.querySelector(`[data-key="${dataKey}"]`);
    if (el && html) { el.innerHTML = html; filled++; }
  });

  // Switch to CPP tab
  const cppBtn = document.querySelector('.tab-button[data-tab="tab-cpp"]');
  if (cppBtn) cppBtn.click();

  // Rebuild TOC
  if (typeof buildTOC === 'function') buildTOC();

  showStatus(
    `✅ CPP populated with "${templateKey}" template — ${filled} sections filled. Edit any section directly in the document.`,
    'success', 4000
  );
}

/* ─────────────────────────────────────────────────────────────
   POPULATE TEMPLATE DROPDOWN
   Reads window.CPP_TEMPLATES and builds the <select> options
───────────────────────────────────────────────────────────── */
function buildCPPTemplateDropdown() {
  const sel = document.getElementById('cppTemplateSelect');
  if (!sel) return;

  sel.innerHTML = '<option value="">— Select project type —</option>';

  if (!window.CPP_TEMPLATES) return;

  Object.keys(window.CPP_TEMPLATES).forEach(key => {
    const opt = document.createElement('option');
    opt.value = key;
    opt.textContent = key;
    sel.appendChild(opt);
  });
}

/* ─────────────────────────────────────────────────────────────
   INIT
───────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function() {
  // Build dropdown after all scripts have loaded
  setTimeout(buildCPPTemplateDropdown, 100);

  const btn = document.getElementById('btnPopulateCPP');
  if (btn) btn.addEventListener('click', populateCPP);
});
