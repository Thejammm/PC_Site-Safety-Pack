/* =============================================================
   app.js — AHS RAMS Tool  |  Consolidated single-file script
   Sections:
     1. CLIENT PDF PROFILES  — theme engine + modal UI
     2. TAB SWITCHING
     3. RTE TOOLBAR          — formatting, table, colour
     4. DATE PICKER          — front page calendar
     5. CLIENT NAME SYNC     — FP → MS / RA / CPP
     6. SECTION MANAGEMENT   — add/remove/rename/page-break
     7. SIGNIFICANT RISKS    — dynamic row helpers
     8. MS PAGES             — add/remove/snippet
     9. CPP                  — date fill + TOC
    10. RA RISK DROPDOWNS    — setup + badge colours
    11. RA PPE / FORM PAGES
    12. SNIPPET LIBRARY      — all 4 tabs merged
    13. SAVE SYSTEM          — localStorage + Save-As HTML
    14. BACK TO TOP
   ============================================================= */

'use strict';

/* ─────────────────────────────────────────────────────────────
   1. CLIENT PDF PROFILES
   Hardcoded defaults + localStorage extras.
   Only affects PDF output — UI always stays AHS teal/grey.
───────────────────────────────────────────────────────────── */
const PROFILES_KEY = 'rams:clientProfiles:v1';

const DEFAULT_PROFILES = [
  { id: 'default', name: 'AHS Default',        primary: '#4BBFD6', logo: null, locked: true },
];

function loadProfiles() {
  try {
    const raw = localStorage.getItem(PROFILES_KEY);
    const saved = raw ? JSON.parse(raw) : [];
    // Merge: defaults first, then user-added
    const ids = new Set(DEFAULT_PROFILES.map(p => p.id));
    const extras = saved.filter(p => !ids.has(p.id));
    return [...DEFAULT_PROFILES, ...extras];
  } catch { return [...DEFAULT_PROFILES]; }
}

function saveProfiles(profiles) {
  // Only persist non-locked (user-added) ones
  const toSave = profiles.filter(p => !p.locked);
  try { localStorage.setItem(PROFILES_KEY, JSON.stringify(toSave)); } catch {}
}

function getActiveProfile() {
  const sel = document.getElementById('clientProfileSelect');
  const id  = sel ? sel.value : 'default';
  const profiles = loadProfiles();
  return profiles.find(p => p.id === id) || profiles[0];
}

function populateProfileDropdown() {
  const sel = document.getElementById('clientProfileSelect');
  if (!sel) return;
  const profiles = loadProfiles();
  const current  = sel.value;
  sel.innerHTML  = '';
  profiles.forEach(p => {
    const opt = document.createElement('option');
    opt.value       = p.id;
    opt.textContent = p.name;
    if (p.id === current) opt.selected = true;
    sel.appendChild(opt);
  });
  // Default to first if nothing selected
  if (!sel.value && profiles.length) sel.value = profiles[0].id;
}

/* ── Profile Modal ── */
function openProfileModal() {
  clearProfileForm();
  renderProfileList();
  const m = document.getElementById('profileModal');
  if (m) m.classList.add('active');
}
function closeProfileModal() {
  const m = document.getElementById('profileModal');
  if (m) m.classList.remove('active');
}
function clearProfileForm() {
  const f = v => document.getElementById(v);
  if (f('editProfileId'))  f('editProfileId').value  = '';
  if (f('profileName'))    f('profileName').value    = '';
  if (f('profileColor'))   f('profileColor').value   = '#4BBFD6';
  if (f('profileLogo'))    f('profileLogo').value    = '';
  if (f('profileLogoPreview')) f('profileLogoPreview').innerHTML = '';
  // Clear stored temp logo
  delete window._tempProfileLogo;
}

function renderProfileList() {
  const list = document.getElementById('profileList');
  if (!list) return;
  const profiles = loadProfiles();
  list.innerHTML = '';
  profiles.forEach(p => {
    const item = document.createElement('div');
    item.className = 'profile-item';
    item.innerHTML = `
      <div class="profile-swatch" style="background:${p.primary}"></div>
      <span class="profile-name">${escHtml(p.name)}</span>
      ${p.locked ? '<span class="profile-badge">Default</span>' : ''}
      <div class="profile-item-actions">
        ${!p.locked ? `<button class="btn-danger-sm" data-del="${p.id}">Delete</button>` : ''}
        <button class="btn-secondary" style="font-size:11px;padding:4px 8px;" data-edit="${p.id}">Edit</button>
      </div>`;
    list.appendChild(item);
  });

  list.addEventListener('click', function handler(e) {
    const del  = e.target.closest('[data-del]');
    const edit = e.target.closest('[data-edit]');
    if (del) {
      const id = del.dataset.del;
      if (!confirm(`Delete profile "${id}"?`)) return;
      const profiles = loadProfiles().filter(p => p.id !== id);
      saveProfiles(profiles);
      populateProfileDropdown();
      renderProfileList();
    }
    if (edit) {
      const id = edit.dataset.edit;
      const p  = loadProfiles().find(x => x.id === id);
      if (!p) return;
      document.getElementById('editProfileId').value = p.id;
      document.getElementById('profileName').value   = p.name;
      document.getElementById('profileColor').value  = p.primary;
      if (p.logo) {
        window._tempProfileLogo = p.logo;
        document.getElementById('profileLogoPreview').innerHTML =
          `<img src="${p.logo}" style="max-height:50px;max-width:200px;object-fit:contain;">`;
      }
    }
  });
}

function saveProfileFromForm() {
  const nameEl  = document.getElementById('profileName');
  const colorEl = document.getElementById('profileColor');
  const idEl    = document.getElementById('editProfileId');
  const name    = (nameEl ? nameEl.value : '').trim();
  if (!name) { alert('Please enter a client name.'); return; }

  const primary = colorEl ? colorEl.value : '#4BBFD6';
  const logo    = window._tempProfileLogo || null;
  const editId  = idEl ? idEl.value : '';

  const profiles = loadProfiles();

  if (editId && editId !== 'default') {
    // Update existing
    const idx = profiles.findIndex(p => p.id === editId);
    if (idx > -1) {
      profiles[idx].name    = name;
      profiles[idx].primary = primary;
      if (logo !== null) profiles[idx].logo = logo;
    }
  } else {
    // Add new
    const id = 'profile_' + Date.now();
    profiles.push({ id, name, primary, logo, locked: false });
  }

  saveProfiles(profiles);
  populateProfileDropdown();
  renderProfileList();
  clearProfileForm();
  showStatus('✅ Profile saved');
}

// Handle logo file upload in modal
document.addEventListener('change', function(e) {
  if (e.target.id !== 'profileLogo') return;
  const file = e.target.files[0];
  if (!file) return;
  if (file.size > 2 * 1024 * 1024) { alert('Logo must be under 2MB'); e.target.value = ''; return; }
  const reader = new FileReader();
  reader.onload = function(ev) {
    window._tempProfileLogo = ev.target.result;
    const prev = document.getElementById('profileLogoPreview');
    if (prev) prev.innerHTML = `<img src="${ev.target.result}" style="max-height:50px;max-width:200px;object-fit:contain;">`;
  };
  reader.readAsDataURL(file);
});

function escHtml(s) {
  return String(s).replace(/[&<>"']/g, m =>
    ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[m]));
}


/* ─────────────────────────────────────────────────────────────
   2. TAB SWITCHING
───────────────────────────────────────────────────────────── */
function showTab(tabId) {
  document.querySelectorAll('.tab-button').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.tab === tabId));
  document.querySelectorAll('.tab-panel').forEach(panel =>
    panel.classList.toggle('active', panel.id === tabId));
  document.body.setAttribute('data-active-tab', tabId);

  const radio = document.querySelector(`input[name="exportTab"][value="${tabId}"]`);
  if (radio) radio.checked = true;

  setTimeout(() => {
    if (tabId === 'tab-ms'  && typeof populateMSSnippets  === 'function') populateMSSnippets();
    if (tabId === 'tab-ra'  && typeof window.populateRASnippets === 'function') window.populateRASnippets();
    if (tabId === 'tab-cpp' && typeof window.populateCPPSnippets === 'function') window.populateCPPSnippets();
  }, 50);
}

function initTabs() {
  document.querySelectorAll('.tab-button').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault(); e.stopPropagation();
      const id = this.getAttribute('data-tab');
      if (id) showTab(id);
    });
  });
}


/* ─────────────────────────────────────────────────────────────
   3. RTE TOOLBAR
───────────────────────────────────────────────────────────── */
let _rteTarget = null;

document.addEventListener('focusin', function(e) {
  const t = e.target;
  if (t && (t.isContentEditable || t.getAttribute('contenteditable') === 'true' ||
      t.tagName === 'TEXTAREA' || (t.classList && t.classList.contains('editable')))) {
    _rteTarget = t;
  }
}, true);

document.addEventListener('mousedown', function(e) {
  const t = e.target.closest('[contenteditable="true"], .editable, textarea');
  if (t) _rteTarget = t;
}, true);

function applyCmd(cmd) {
  if (!_rteTarget) return;
  if (cmd === 'createLink') {
    const url = prompt('Enter URL (https://...)');
    if (url) document.execCommand('createLink', false, url);
    return;
  }
  if (cmd === 'valignTop' || cmd === 'valignBottom') {
    let td = _rteTarget.closest('td, th');
    if (!td) {
      const sel = window.getSelection();
      if (sel && sel.anchorNode) {
        let n = sel.anchorNode;
        if (n.nodeType === 3) n = n.parentNode;
        td = n && n.closest ? n.closest('td, th') : null;
      }
    }
    if (td) td.style.verticalAlign = (cmd === 'valignTop') ? 'top' : 'bottom';
    return;
  }
  try { _rteTarget.focus(); } catch {}
  document.execCommand(cmd, false, null);
}

function insertTablePrompt() {
  const rows = parseInt(prompt('How many rows?', '3'), 10);
  if (!(rows > 0)) return;
  const cols = parseInt(prompt('How many columns?', '3'), 10);
  if (!(cols > 0)) return;
  const table = document.createElement('table');
  table.className = 'rte-table';
  for (let r = 0; r < rows; r++) {
    const tr = document.createElement('tr');
    for (let c = 0; c < cols; c++) {
      const cell = document.createElement(r === 0 ? 'th' : 'td');
      cell.textContent = r === 0 ? ('Col ' + (c + 1)) : '\u00A0';
      cell.style.border  = '1px solid #777';
      cell.style.padding = '4px 6px';
      tr.appendChild(cell);
    }
    table.appendChild(tr);
  }
  if (_rteTarget) {
    const sel = window.getSelection();
    if (sel && sel.rangeCount) {
      const range = sel.getRangeAt(0);
      range.deleteContents();
      range.insertNode(table);
    } else {
      _rteTarget.appendChild(table);
    }
  }
}

function applyCellBg(color) {
  const sel = window.getSelection();
  let applied = false;
  if (sel && sel.rangeCount) {
    document.querySelectorAll('td,th').forEach(cell => {
      if (sel.containsNode && sel.containsNode(cell, true)) {
        cell.style.backgroundColor = color; applied = true;
      }
    });
    if (!applied) {
      let n = sel.anchorNode;
      if (n && n.nodeType === 3) n = n.parentNode;
      const td = n && n.closest ? n.closest('td,th') : null;
      if (td) { td.style.backgroundColor = color; applied = true; }
    }
  }
  if (!applied && _rteTarget) {
    const td = _rteTarget.closest('td,th');
    if (td) td.style.backgroundColor = color;
  }
}

function applyTextColor(color) {
  try { document.execCommand('foreColor', false, color); } catch {}
}

function wireToolbar() {
  const bar = document.querySelector('.global-rte');
  if (!bar) return;
  bar.addEventListener('click', function(e) {
    const btn = e.target.closest('.rte-btn, .table-btn-success, .table-btn-danger');
    if (!btn) return;
    const cmd = btn.getAttribute('data-cmd');
    if (cmd) { applyCmd(cmd); return; }
  });

  const tblBtn  = document.getElementById('btnInsertTable');
  const cellBtn = document.getElementById('btnCellBg');
  const textBtn = document.getElementById('btnTextColor');
  const cellPkr = document.getElementById('cellColorPicker');
  const textPkr = document.getElementById('textColorPicker');
  const manageBtn = document.getElementById('btnManageProfiles');

  if (tblBtn)  tblBtn.addEventListener('click',  insertTablePrompt);
  if (cellBtn) cellBtn.addEventListener('click',  () => cellPkr && cellPkr.click());
  if (textBtn) textBtn.addEventListener('click',  () => textPkr && textPkr.click());
  if (cellPkr) cellPkr.addEventListener('change', e => applyCellBg(e.target.value));
  if (textPkr) textPkr.addEventListener('change', e => applyTextColor(e.target.value));
  if (manageBtn) manageBtn.addEventListener('click', openProfileModal);

  // Wire image insert button
  const imgBtn  = document.getElementById('btnInsertImage');
  const imgPick = document.createElement('input');
  imgPick.type   = 'file';
  imgPick.accept = 'image/*';
  imgPick.style.display = 'none';
  imgPick.id = 'imgPick';
  document.body.appendChild(imgPick);

  if (imgBtn) imgBtn.addEventListener('click', () => imgPick.click());

  imgPick.addEventListener('change', function() {
    const file = this.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(ev) {
      const img = document.createElement('img');
      img.src = ev.target.result;
      img.style.maxWidth = '100%';
      const target = _rteTarget || document.querySelector('[contenteditable="true"]:focus') || document.querySelector('.snippet-editor');
      if (!target) return;
      target.focus();
      const sel = window.getSelection();
      if (sel && sel.rangeCount) {
        const range = sel.getRangeAt(0);
        range.deleteContents();
        range.insertNode(img);
        range.setStartAfter(img);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
      } else {
        target.appendChild(img);
      }
    };
    reader.readAsDataURL(file);
    this.value = ''; // reset so same file can be picked again
  });

  const closeBtn = document.getElementById('btnCloseProfileModal');
  const saveProf = document.getElementById('btnSaveProfile');
  const clearProf= document.getElementById('btnClearProfileForm');
  if (closeBtn) closeBtn.addEventListener('click', closeProfileModal);
  if (saveProf) saveProf.addEventListener('click', saveProfileFromForm);
  if (clearProf) clearProf.addEventListener('click', clearProfileForm);

  // Close modal on overlay click
  const modal = document.getElementById('profileModal');
  if (modal) modal.addEventListener('click', e => { if (e.target === modal) closeProfileModal(); });
}


/* ─────────────────────────────────────────────────────────────
   4. DATE PICKER (Front Page)
───────────────────────────────────────────────────────────── */
function initDatePickerFP() {
  const dateDisplay   = document.getElementById('lhDatefp');
  const dateModal     = document.getElementById('dateModalfp');
  const currentMonthEl= document.getElementById('dateCurrentMonthfp');
  const calendarDays  = document.getElementById('dateDaysfp');
  const prevBtn       = document.getElementById('datePrevBtnfp');
  const nextBtn       = document.getElementById('dateNextBtnfp');

  if (!dateDisplay || !dateModal) return;
  if (dateDisplay.dataset.dpBound === '1') return;
  dateDisplay.dataset.dpBound = '1';

  let currentDate  = new Date();
  let selectedDate = new Date();

  const MONTHS_SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const MONTHS_LONG  = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  function fmtDisplay(d) { return `${d.getDate()} ${MONTHS_SHORT[d.getMonth()]} ${d.getFullYear()}`; }
  function fmtMonthYear(d) { return `${MONTHS_LONG[d.getMonth()]} ${d.getFullYear()}`; }
  function sameDay(a, b) { return a.getDate()===b.getDate() && a.getMonth()===b.getMonth() && a.getFullYear()===b.getFullYear(); }

  function closeModal() { dateModal.style.display = 'none'; }

  function renderCalendar() {
    const y = currentDate.getFullYear(), mo = currentDate.getMonth();
    if (currentMonthEl) currentMonthEl.textContent = fmtMonthYear(currentDate);
    if (!calendarDays) return;
    calendarDays.innerHTML = '';
    const firstDay = new Date(y, mo, 1).getDay();
    const lastDate = new Date(y, mo + 1, 0).getDate();
    const prevLast = new Date(y, mo, 0).getDate();
    const today    = new Date();

    for (let i = firstDay - 1; i >= 0; i--) {
      const d = document.createElement('div');
      d.className = 'date-day other-month'; d.textContent = prevLast - i;
      calendarDays.appendChild(d);
    }
    for (let i = 1; i <= lastDate; i++) {
      const d = document.createElement('div');
      d.className = 'date-day'; d.textContent = i;
      const dayDate = new Date(y, mo, i);
      if (sameDay(dayDate, today))    d.classList.add('today');
      if (sameDay(dayDate, selectedDate)) d.classList.add('selected');
      d.addEventListener('click', function() {
        selectedDate = new Date(y, mo, i);
        const display = fmtDisplay(selectedDate);
        dateDisplay.textContent = display;
        document.dispatchEvent(new CustomEvent('rams:dateChanged', {
          detail: { iso: selectedDate.toISOString().slice(0,10), display }
        }));
        closeModal();
      });
      calendarDays.appendChild(d);
    }
    const filled = calendarDays.children.length;
    const extra  = filled % 7 === 0 ? 0 : 7 - (filled % 7);
    for (let i = 1; i <= extra; i++) {
      const d = document.createElement('div');
      d.className = 'date-day other-month'; d.textContent = i;
      calendarDays.appendChild(d);
    }
  }

  // Set initial text and dispatch
  const init = dateDisplay.textContent.trim() || fmtDisplay(selectedDate);
  dateDisplay.textContent = init;
  document.dispatchEvent(new CustomEvent('rams:dateChanged', { detail: { iso: '', display: init } }));

  dateDisplay.style.cursor = 'pointer';
  dateDisplay.addEventListener('click', function(e) {
    e.preventDefault(); e.stopPropagation();
    currentDate = new Date(selectedDate);
    renderCalendar();
    dateModal.style.display = 'block';
  });

  if (prevBtn) prevBtn.addEventListener('click', () => { currentDate.setMonth(currentDate.getMonth()-1); renderCalendar(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { currentDate.setMonth(currentDate.getMonth()+1); renderCalendar(); });
  window.addEventListener('click', e => { if (e.target === dateModal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && dateModal.style.display === 'block') closeModal(); });
}


/* ─────────────────────────────────────────────────────────────
   5. CLIENT NAME SYNC  (FP → MS / RA / CPP)
───────────────────────────────────────────────────────────── */
function initClientNameSync() {
  const el = document.getElementById('lhClientNamefp');
  if (!el) return;
  const broadcast = () => document.dispatchEvent(new CustomEvent('rams:clientNameChanged',
    { detail: { name: el.textContent.trim() } }));
  el.addEventListener('input', broadcast);
  setTimeout(broadcast, 200);
}

document.addEventListener('rams:dateChanged', e => {
  const d = e.detail && e.detail.display;
  if (!d) return;
  ['lhDatems','lhDatera','lhDatecpp'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = d;
  });
});

document.addEventListener('rams:clientNameChanged', e => {
  const name = e.detail && e.detail.name;
  if (!name) return;
  ['lhClientNamems','lhClientNamera','lhClientNamecpp'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = name;
  });
});


/* ─────────────────────────────────────────────────────────────
   6. SECTION MANAGEMENT (FP / CPP tabs)
───────────────────────────────────────────────────────────── */
let _lastSection = null;

document.addEventListener('focusin', function(e) {
  const sec = e.target.closest && e.target.closest('.section, .section-cpp');
  if (sec) _lastSection = sec;
}, true);
document.addEventListener('mousedown', function(e) {
  const sec = e.target.closest && e.target.closest('.section, .section-cpp');
  if (sec) _lastSection = sec;
}, true);

function makeUid(prefix) { return (prefix||'sec') + '-' + Date.now() + '-' + Math.random().toString(16).slice(2); }

function stripIds(root) { root.querySelectorAll('[id]').forEach(el => el.removeAttribute('id')); }

function assignPersistKeys(sec) {
  if (!sec.getAttribute('data-section-id')) sec.setAttribute('data-section-id', makeUid('section'));
  const sid = sec.getAttribute('data-section-id');
  let idx = 0;
  sec.querySelectorAll('[data-persist]').forEach(el => {
    if (!el.getAttribute('name') && !el.id && !el.getAttribute('data-key')) {
      el.setAttribute('data-key', sid + '::' + (idx++));
    }
  });
}

function ensureSnippetUI(scope) {
  if (!scope.querySelector('.snippet-toolbar')) {
    const sc = scope.querySelector('.section-content, .section-content-cpp') || scope;
    const toolbar = document.createElement('div');
    toolbar.className = 'no-print snippet-toolbar';
    toolbar.innerHTML = '<label>Snippet:</label><select class="snip-select"></select><button type="button" class="btn snip-insert">Insert</button><button type="button" class="btn danger snip-clear">Clear</button>';
    sc.insertBefore(toolbar, sc.firstChild);
  }
  if (!scope.querySelector('.snippet-editor')) {
    const sc = scope.querySelector('.section-content, .section-content-cpp') || scope;
    const ed = document.createElement('div');
    ed.className = 'snippet-editor editable';
    ed.setAttribute('contenteditable', 'true');
    sc.appendChild(ed);
  }
  repopulateSnippetSelects(scope);
}

function renumberSections() {
  const sheet = document.querySelector('#tab-rams .sheet');
  if (!sheet) return;
  let n = 1;
  sheet.querySelectorAll('.section .section-header').forEach(h => {
    const raw = h.textContent.trim();
    const m   = raw.match(/^(section|SECTION)\s*\d+\s*:\s*(.*)$/i);
    const title = m ? m[2] : raw;
    const word  = (m && /^[A-Z]+$/.test(m[1])) ? 'SECTION' : 'Section';
    h.textContent = word + ' ' + (n++) + (title ? ': ' + title : '');
  });
}

function createPageBreakEl() {
  const wrap = document.createElement('div');
  wrap.className = 'page-break';
  const label = document.createElement('span'); label.className = 'pb-label'; label.textContent = 'Page break';
  const btn   = document.createElement('button'); btn.type = 'button'; btn.className = 'pb-remove'; btn.textContent = '×';
  wrap.appendChild(label); wrap.appendChild(btn);
  return wrap;
}

function addSectionAfterSelected() {
  const base = _lastSection || document.querySelector('.sheet .section:last-of-type, .sheet .section-cpp:last-of-type');
  if (!base) { alert('No section found to clone.'); return; }
  const clone = base.cloneNode(true);
  stripIds(clone);
  clone.querySelectorAll('[contenteditable="true"]').forEach(el => el.innerHTML = '');
  ensureSnippetUI(clone);
  assignPersistKeys(clone);
  base.parentNode.insertBefore(clone, base.nextSibling);
  _lastSection = clone;
  clone.scrollIntoView({ behavior: 'smooth', block: 'start' });
  renumberSections();
}

function renameSelectedSection() {
  const sec = _lastSection || document.querySelector('.sheet .section, .sheet .section-cpp');
  if (!sec) { alert('No section selected.'); return; }
  const h = sec.querySelector('.section-header, .section-header-cpp');
  if (!h)  { alert('No header found.'); return; }
  const next = prompt('Rename section header:', h.textContent.trim());
  if (next !== null) { h.textContent = next; renumberSections(); }
}

function addPageBreakAfterSelected() {
  const base = _lastSection || document.querySelector('.sheet .section:last-of-type, .sheet .section-cpp:last-of-type');
  if (!base) { alert('No section selected/found.'); return; }
  const marker = createPageBreakEl();
  base.parentNode.insertBefore(marker, base.nextSibling);
  marker.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Remove page break on ×
document.addEventListener('click', function(e) {
  const rm = e.target.closest('.pb-remove');
  if (rm) { const m = rm.closest('.page-break'); if (m) m.remove(); }
});

function initSectionButtons() {
  const addBtn = document.getElementById('btnAddSection');
  const remBtn = document.getElementById('btnRemoveSection');
  const renBtn = document.getElementById('btnRenameSection');
  const pbBtn  = document.getElementById('btnAddPageBreak');
  if (addBtn) addBtn.addEventListener('click', addSectionAfterSelected);
  if (remBtn) remBtn.addEventListener('click', function() {
    const sec  = _lastSection || document.querySelector('.sheet .section:last-of-type, .sheet .section-cpp:last-of-type');
    if (!sec) { alert('No section selected.'); return; }
    const all = document.querySelectorAll('.sheet .section, .sheet .section-cpp');
    if (all.length <= 1) { alert('Cannot remove the last section.'); return; }
    if (!confirm('Remove this section?')) return;
    sec.remove(); _lastSection = null; renumberSections();
  });
  if (renBtn) renBtn.addEventListener('click', renameSelectedSection);
  if (pbBtn)  pbBtn.addEventListener('click',  addPageBreakAfterSelected);
}


/* ─────────────────────────────────────────────────────────────
   7. SIGNIFICANT RISKS (Section 9 dynamic rows)
───────────────────────────────────────────────────────────── */
(function() {
  function initRisksTable() {
    const tbody = document.getElementById('significantRisksBody');
    if (!tbody) return;

    function uid() { return 'risk-' + Date.now().toString(36) + '-' + Math.random().toString(16).slice(2); }
    function applyKeys(tr) {
      if (!tr.dataset.rowId) tr.dataset.rowId = uid();
      const rid = tr.dataset.rowId;
      const tds = tr.querySelectorAll('td');
      if (tds[0]) tds[0].setAttribute('data-key', `risks.row.${rid}.risk`);
      if (tds[1]) tds[1].setAttribute('data-key', `risks.row.${rid}.description`);
      if (tds[2]) tds[2].setAttribute('data-key', `risks.row.${rid}.reference`);
      tds.forEach(td => td.setAttribute('data-persist', ''));
    }
    tbody.querySelectorAll('tr').forEach(applyKeys);

    window.addSignificantRiskRow = function() {
      const tr = document.createElement('tr');
      tr.innerHTML = '<td contenteditable="true" data-persist></td><td contenteditable="true" data-persist></td><td contenteditable="true" data-persist></td>';
      tbody.appendChild(tr); applyKeys(tr);
    };
    window.removeLastSignificantRiskRow = function() {
      const rows = tbody.querySelectorAll('tr');
      if (rows.length <= 1) { alert('Cannot remove the last row.'); return; }
      rows[rows.length - 1].remove();
    };
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initRisksTable);
  else initRisksTable();
})();


/* ─────────────────────────────────────────────────────────────
   8. METHOD STATEMENT PAGES
───────────────────────────────────────────────────────────── */
const MS = { containerId: 'methodTables', pageSelector: '.ms-page', sectionSelector: '.method-statement-section' };

function getMSContainer() { return document.getElementById(MS.containerId); }
function getMSPages()     { const c = getMSContainer(); return c ? Array.from(c.querySelectorAll(MS.pageSelector)) : []; }

function clearEditableMS(root) {
  root.querySelectorAll('[contenteditable="true"]').forEach(el => el.innerHTML = '');
  root.querySelectorAll('input, textarea').forEach(el => { if ('value' in el) el.value = ''; });
}

function updateMSKeys(pageEl, n) {
  pageEl.dataset.pageIndex = String(n);
  pageEl.dataset.key       = `ms.page.${n}`;
  pageEl.querySelectorAll('[data-key]').forEach(el => {
    const k = el.getAttribute('data-key');
    const m = k && k.match(/^ms\.page\.(\d+)\.(.+)$/);
    if (m) el.setAttribute('data-key', `ms.page.${n}.${m[2]}`);
  });
}

function renumberMSPages() { getMSPages().forEach((p, i) => updateMSKeys(p, i + 1)); }

function addMSPage(afterPageEl) {
  const container = getMSContainer();
  const pages     = getMSPages();
  if (!pages.length) return;
  const clone = pages[0].cloneNode(true);
  clearEditableMS(clone);
  if (afterPageEl && afterPageEl.parentNode === container) afterPageEl.insertAdjacentElement('afterend', clone);
  else container.appendChild(clone);
  renumberMSPages();
  initMSSection(clone);
}

function removeMSPage(pageEl) {
  const pages = getMSPages();
  if (pages.length <= 1) { alert('Cannot remove the last page.'); return; }
  pageEl.remove(); renumberMSPages();
}

function populateMSSnippets() {
  const list = window.SNIPPETS && window.SNIPPETS['Method Statements'] ? window.SNIPPETS['Method Statements'] : [];
  document.querySelectorAll('.ms-snip-select').forEach(sel => {
    sel.innerHTML = '<option value="">Select…</option>';
    const sectionOrder = [], sectionMap = {};
    list.forEach((snip, idx) => {
      const sec = snip.section || 'Other';
      if (!sectionMap[sec]) { sectionMap[sec] = []; sectionOrder.push(sec); }
      sectionMap[sec].push({ snip, idx });
    });
    sectionOrder.forEach(sec => {
      const og = document.createElement('optgroup'); og.label = sec;
      sectionMap[sec].forEach(({ snip, idx }) => {
        const opt = document.createElement('option');
        opt.value = String(idx); opt.textContent = snip.title || snip.id || `Snippet ${idx+1}`;
        og.appendChild(opt);
      });
      sel.appendChild(og);
    });
  });
}

function insertMSSnippet(section) {
  /* Auto-fills ALL fields in one click:
     title, equipment, PPE → left column cells
     method/procedure      → right column (procedure panel)
     training + risks      → training/risks panel
     raRef / associated    → RA reference cell
  */
  const sel  = section.querySelector('.ms-snip-select');
  const list = window.SNIPPETS && window.SNIPPETS['Method Statements'] ? window.SNIPPETS['Method Statements'] : [];
  if (!sel || !list.length) return;
  const idx  = parseInt(sel.value, 10);
  if (!(idx >= 0)) return;
  const item = list[idx];
  if (!item) return;

  const f     = item.fields || {};
  const table = section.querySelector('table.method-table');
  if (!table) return;

  // Helper — find a cell by its data-key suffix
  function byKey(suffix) {
    return table.querySelector(`[data-key$=".${suffix}"]`);
  }

  // Fill each named field
  if (f.title)     { const el = byKey('title');     if (el) el.innerHTML = f.title; }
  if (f.equipment) { const el = byKey('equipment'); if (el) el.innerHTML = nl2html(f.equipment); }
  if (f.ppe)       { const el = byKey('ppe');       if (el) el.innerHTML = nl2html(f.ppe); }

  // Procedure / method goes into the right-hand rowspan cell
  const methodContent = f.method || f.procedure || '';
  if (methodContent) {
    const el = byKey('procedure');
    if (el) el.innerHTML = nl2html(methodContent);
  }

  // Training + risks combined into training cell
  const trainEl = byKey('training');
  if (trainEl) {
    const parts = [];
    if (f.training) parts.push('<strong>Training:</strong><br>' + nl2html(f.training));
    if (f.risks)    parts.push('<strong>Associated Risks:</strong><br>' + nl2html(f.risks));
    if (f.associated) parts.push('<strong>Legislation / Guidance:</strong><br>' + nl2html(f.associated));
    if (parts.length) trainEl.innerHTML = parts.join('<br><br>');
  }

  // RA reference
  if (f.associated || f.raRef) {
    const el = byKey('raRef');
    if (el) el.innerHTML = f.raRef || f.associated || '';
  }

  // Visual confirmation flash on the section
  section.style.transition = 'box-shadow 0.4s';
  section.style.boxShadow = '0 0 0 3px rgba(75,191,214,0.6)';
  setTimeout(() => { section.style.boxShadow = ''; }, 700);
}

function nl2html(text) {
  if (!text) return '';
  const s = String(text).trim();
  // Already HTML — return as-is
  if (/<[a-z][\s\S]*>/i.test(s)) return s;
  // Newlines or semicolons → bullet list
  const parts = s.split(/\n+|;\s+/).map(x => x.trim()).filter(Boolean);
  if (parts.length > 1) return '<ul>' + parts.map(p => '<li>' + p + '</li>').join('') + '</ul>';
  return '<p>' + s + '</p>';
}

function clearMSSection(section) {
  section.querySelectorAll('[contenteditable="true"]').forEach(el => el.innerHTML = '');
}

function initMSSection(section) {
  populateMSSnippets();
}
window.initMSSection = initMSSection;

function wireMSContainer() {
  const container = getMSContainer();
  if (!container) return;
  container.addEventListener('click', function(e) {
    const section = e.target.closest(MS.sectionSelector);
    if (!section) return;
    if (e.target.closest('.ms-snip-insert')) { e.preventDefault(); insertMSSnippet(section); return; }
    if (e.target.closest('.ms-snip-clear'))  { e.preventDefault(); clearMSSection(section); return; }
    if (e.target.closest('.add-page'))   { e.preventDefault(); addMSPage(e.target.closest(MS.pageSelector)); return; }
    if (e.target.closest('.remove-page')){ e.preventDefault(); const p = e.target.closest(MS.pageSelector); if (p) removeMSPage(p); return; }
    if (e.target.closest('.ms-break')) {
      e.preventDefault();
      const page   = e.target.closest(MS.pageSelector);
      const marker = createPageBreakEl();
      if (page) page.insertAdjacentElement('afterend', marker);
      return;
    }
  });
}

document.addEventListener('rams:dateChanged',       e => { const el = document.getElementById('lhDatems');        if (el && e.detail) el.textContent = e.detail.display; });
document.addEventListener('rams:clientNameChanged', e => { const el = document.getElementById('lhClientNamems');  if (el && e.detail) el.textContent = e.detail.name; });


/* ─────────────────────────────────────────────────────────────
   9. CPP  — date fill + TOC
───────────────────────────────────────────────────────────── */
function fillCPPDate() {
  const d = new Date().toLocaleDateString();
  const el = document.getElementById('cpp-current-date');
  if (el && !el.textContent.trim()) el.textContent = d;
}

function buildTOC() {
  const tab = document.getElementById('tab-cpp');
  const toc = tab && tab.querySelector('#toc');
  if (!toc) return;
  const headers = Array.from(tab.querySelectorAll('.section-header-cpp')).filter(h => h.textContent.trim());
  if (!headers.length) { toc.innerHTML = ''; return; }
  const used = {};
  headers.forEach((h, i) => {
    if (!h.id) {
      let base = h.textContent.toLowerCase().trim().replace(/[^\w\s-]/g,'').replace(/\s+/g,'-').replace(/-+/g,'-') || 'cpp-section-' + (i+1);
      let id = base; let n = 2;
      while (used[id] || document.getElementById(id)) id = base + '-' + (n++);
      h.id = id; used[id] = true;
    }
  });
  toc.innerHTML = '<strong>Table of contents</strong><ol>' +
    headers.map(h => {
      const text  = h.textContent.trim();
      const colon = text.indexOf(':');
      const left  = colon !== -1 ? text.slice(0, colon+1).trim() : text;
      const right = colon !== -1 ? text.slice(colon+1).trim()    : '';
      return `<li><a href="#${h.id}"><span class="toc-left">${left}</span><span class="toc-right">${right}</span></a></li>`;
    }).join('') + '</ol>';
}

window.populateCPPSnippets = function() {
  const tab = document.getElementById('tab-cpp');
  if (!tab || !window.SNIPPETS) return;
  tab.querySelectorAll('.snip-select').forEach(populateSelect);
};

document.addEventListener('rams:dateChanged',       e => { const el = document.getElementById('lhDatecpp');       if (el && e.detail) el.textContent = e.detail.display; });
document.addEventListener('rams:clientNameChanged', e => { const el = document.getElementById('lhClientNamecpp'); if (el && e.detail) el.textContent = e.detail.name; });


/* ─────────────────────────────────────────────────────────────
   10. RA RISK DROPDOWNS
───────────────────────────────────────────────────────────── */
function attachRiskListener(sel) {
  if (!sel || !sel.classList.contains('risk-select')) return;
  const badge = sel.parentElement && sel.parentElement.querySelector('.badge');

  function sync() {
    badge.classList.remove('low','med','high');
    sel.classList.remove('low','med','high');
    if (sel.value === 'low')         { badge.textContent = 'LOW';    badge.classList.add('low');  sel.classList.add('low');  }
    else if (sel.value === 'medium') { badge.textContent = 'MEDIUM'; badge.classList.add('med');  sel.classList.add('med');  }
    else if (sel.value === 'high')   { badge.textContent = 'HIGH';   badge.classList.add('high'); sel.classList.add('high'); }
    else                             { badge.textContent = ''; }
  }

  // Always remove old listener and re-attach — fixes cloned rows that copy
  // data-ra-bound="1" but lose the actual event listener
  sel.removeEventListener('change', sel._raSyncFn);
  sel._raSyncFn = sync;
  sel.addEventListener('change', sync);
  sel.dataset.raBound = '1';
  sync(); // apply colour for current value immediately
}

function setupRiskForCell(td) {
  if (!td) return;
  const existing = td.querySelector('.risk-cell');
  if (existing) { const s = existing.querySelector('.risk-select'); if (s) attachRiskListener(s); return; }
  const raw = (td.textContent || '').trim().toLowerCase();
  let val = '';
  if (raw.includes('low'))   val = 'low';
  if (raw.includes('medium'))val = 'medium';
  if (raw.includes('high'))  val = 'high';
  td.innerHTML = '';
  td.contentEditable = 'false';
  const wrap = document.createElement('div'); wrap.className = 'risk-cell';
  const sel  = document.createElement('select'); sel.className = 'risk-select';
  [['','-- Select --'],['low','LOW'],['medium','MEDIUM'],['high','HIGH']].forEach(([v,t]) => {
    const o = document.createElement('option'); o.value = v; o.textContent = t; sel.appendChild(o);
  });
  sel.value = val;
  const badge = document.createElement('span'); badge.className = 'badge';
  wrap.appendChild(sel); wrap.appendChild(badge); td.appendChild(wrap);
  attachRiskListener(sel);
}

function setupRiskCellsForRow(tr) {
  const cells = tr.children;
  if (cells.length >= 7) { setupRiskForCell(cells[3]); setupRiskForCell(cells[5]); }
}

function setupRiskCellsForTable(table) {
  const tbody = table.querySelector('tbody');
  if (!tbody) return;
  tbody.querySelectorAll('tr').forEach(setupRiskCellsForRow);
}

window.setupRiskCellsForTable = setupRiskCellsForTable;

function initRADropdowns() {
  document.querySelectorAll('.hazardsTable').forEach(setupRiskCellsForTable);
}

/* RA row click tracking */
let _lastClickedTable    = null;
let _lastClickedHazardRow= null;
let _lastClickedFormPage = null;

document.addEventListener('click', function(e) {
  const cell = e.target.closest('td, th');
  if (cell) {
    _lastClickedTable = cell.closest('table');
    if (_lastClickedTable && _lastClickedTable.classList.contains('hazardsTable')) {
      const row = e.target.closest('.hazardsTable tbody tr');
      if (row) _lastClickedHazardRow = row;
    }
  }
  const fp = e.target.closest('.form-page');
  if (fp) _lastClickedFormPage = fp;
}, true);

/* RA toolbar row buttons */
function wireRAButtons() {
  const btnAdd    = document.getElementById('btnAddRow');
  const btnRem    = document.getElementById('btnRemoveRow');
  const btnDup    = document.getElementById('btnDuplicateRow');
  const btnClr    = document.getElementById('btnClearRow');
  const btnRemClk = document.getElementById('btnRemoveClickedRow');

  if (btnAdd) btnAdd.addEventListener('click', function(e) {
    e.preventDefault();
    if (!_lastClickedTable) { alert('Click inside a table first'); return; }
    const tbody = _lastClickedTable.querySelector('tbody');
    if (!tbody) return;
    const lastRow = tbody.querySelector('tr:last-child');
    if (!lastRow) return;
    const newRow = lastRow.cloneNode(true);
    newRow.querySelectorAll('[contenteditable="true"]').forEach(el => el.innerHTML = '');
    newRow.querySelectorAll('input[type="text"]').forEach(el => el.value = '');
    // Clear raBound so listeners re-attach properly (listeners don't survive cloneNode)
    newRow.querySelectorAll('.risk-select').forEach(sel => {
      sel.value = '';
      delete sel.dataset.raBound;
      sel._raSyncFn = null;
    });
    tbody.appendChild(newRow);
    if (_lastClickedTable.classList.contains('hazardsTable')) setupRiskCellsForRow(newRow);
    newRow.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  if (btnRem) btnRem.addEventListener('click', function(e) {
    e.preventDefault();
    if (!_lastClickedTable) { alert('Click inside a table first'); return; }
    const tbody = _lastClickedTable.querySelector('tbody');
    if (!tbody) return;
    const rows = tbody.querySelectorAll('tr');
    if (rows.length <= 1) { alert('Cannot remove the last row.'); return; }
    rows[rows.length-1].remove();
  });

  if (btnDup) btnDup.addEventListener('click', function(e) {
    e.preventDefault();
    if (!_lastClickedTable || !_lastClickedTable.classList.contains('hazardsTable')) { alert('Click inside a Hazards table first'); return; }
    const tbody = _lastClickedTable.querySelector('tbody');
    if (!tbody) return;
    const lastRow = tbody.querySelector('tr:last-child');
    if (!lastRow) return;
    const newRow = lastRow.cloneNode(true);
    tbody.appendChild(newRow);
    setupRiskCellsForRow(newRow);
    newRow.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  if (btnClr) btnClr.addEventListener('click', function(e) {
    e.preventDefault();
    if (!_lastClickedHazardRow) { alert('Click inside a hazard row first'); return; }
    _lastClickedHazardRow.querySelectorAll('[contenteditable="true"]').forEach(el => el.innerHTML = '');
    _lastClickedHazardRow.querySelectorAll('.risk-select').forEach(sel => { sel.value = ''; sel.dispatchEvent(new Event('change',{bubbles:true})); });
  });

  if (btnRemClk) btnRemClk.addEventListener('click', function(e) {
    e.preventDefault();
    if (!_lastClickedHazardRow) { alert('Click inside a hazard row first'); return; }
    const tbody = _lastClickedHazardRow.closest('tbody');
    if (!tbody) return;
    if (tbody.querySelectorAll('tr').length <= 1) { alert('Cannot remove the last row.'); return; }
    _lastClickedHazardRow.remove(); _lastClickedHazardRow = null;
  });

  // Row-level remove button
  document.addEventListener('click', function(e) {
    const btn = e.target.closest('.ra-remove-row,[data-action="raRemoveRow"]');
    if (!btn) return;
    const row = btn.closest('.hazardsTable tbody tr');
    if (!row) return;
    const tbody = row.closest('tbody');
    const rows  = tbody ? tbody.querySelectorAll('tr') : [];
    if (rows.length <= 1) { alert('Cannot remove the last row.'); return; }
    row.remove();
  });
}


/* ─────────────────────────────────────────────────────────────
   11. RA PPE & FORM PAGES
───────────────────────────────────────────────────────────── */
function wireRAFormAndPPE() {
  const btnAddPPE = document.getElementById('btnAddPPE');
  const btnRemPPE = document.getElementById('btnRemovePPE');

  if (btnAddPPE) btnAddPPE.addEventListener('click', function(e) {
    e.preventDefault();
    const fp  = _lastClickedFormPage || document;
    const con = fp.querySelector('.ppe-checks');
    if (!con) { alert('PPE area not found'); return; }
    const div = document.createElement('div'); div.className = 'check';
    const id  = 'ppe_' + Date.now();
    div.innerHTML = `<label><input type="checkbox" id="${id}"> <span class="editable" contenteditable="true">New PPE item</span></label>`;
    con.appendChild(div);
    const span = div.querySelector('.editable');
    if (span) { span.focus(); const r = document.createRange(); r.selectNodeContents(span); const s = window.getSelection(); s.removeAllRanges(); s.addRange(r); }
  });

  if (btnRemPPE) btnRemPPE.addEventListener('click', function(e) {
    e.preventDefault();
    const fp  = _lastClickedFormPage || document;
    const con = fp.querySelector('.ppe-checks');
    if (!con) { alert('PPE area not found'); return; }
    const items = con.querySelectorAll('.check');
    if (!items.length) { alert('No PPE items to remove'); return; }
    items[items.length-1].remove();
  });

  // Add/remove RA form pages
  document.addEventListener('click', function(e) {
    const addBtn = e.target.closest('.add-ra-form');
    if (addBtn) {
      const page  = addBtn.closest('.form-page');
      if (!page) return;
      const tab   = document.getElementById('tab-ra');
      const pages = tab ? Array.from(tab.querySelectorAll('.form-page')) : [];
      if (!pages.length) return;
      const clone = pages[0].cloneNode(true);
      // Clear hazards rows
      clone.querySelectorAll('.hazardsTable tbody tr').forEach(tr => {
        tr.querySelectorAll('[contenteditable="true"]').forEach(el => el.innerHTML = '');
        tr.querySelectorAll('.risk-select').forEach(sel => sel.value = '');
        tr.querySelectorAll('.badge').forEach(b => { b.textContent = ''; b.classList.remove('low','med','high'); });
      });
      // Clear sign-off rows
      clone.querySelectorAll('.signreg-table tbody tr').forEach(tr => {
        tr.querySelectorAll('[contenteditable="true"]').forEach(el => el.innerHTML = '<br>');
      });
      // Uncheck PPE
      clone.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
      // Deduplicate IDs
      let ctr = Date.now();
      clone.querySelectorAll('[id]').forEach(el => el.id = el.id + '_' + ctr++);
      page.insertAdjacentElement('afterend', clone);
      clone.querySelectorAll('.hazardsTable').forEach(setupRiskCellsForTable);
      window.populateRASnippets && window.populateRASnippets();
      clone.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    const remBtn = e.target.closest('.remove-ra-form');
    if (remBtn) {
      const page  = remBtn.closest('.form-page');
      if (!page) return;
      const tab   = document.getElementById('tab-ra');
      const pages = tab ? Array.from(tab.querySelectorAll('.form-page')) : [];
      if (pages.length <= 1) { alert('Cannot remove the last RA form page.'); return; }
      page.remove();
      return;
    }
  });
}


/* ─────────────────────────────────────────────────────────────
   12. SNIPPET SYSTEM
   Tab-aware: each tab's dropdowns only show their own categories.
   Section-aware: each section's dropdown pre-filters to its own
   matching category based on the section header number.
   Snippet files load their own data into window.SNIPPETS.
   This file only handles population and insertion logic.
───────────────────────────────────────────────────────────── */
window.SNIPPETS = window.SNIPPETS || {};

/* ── Tab → snippet category mapping ───────────────────────── */
const SNIPPET_TAB_MAP = {
  'tab-rams': [
    'Project Description',
    'Site Specifics',
    'Scope / Sequence of Works',
    'Emergency Arrangements',
    'Roles & Responsibilities',
    'Plant, Tools & Equipment',
    'Training & Competency',
    'Significant Risks',
    'Legislation & Standards',
    'COSHH',
    'PPE Standards',
    'RAMS List'
  ],
  'tab-cpp': null, // populated dynamically — all keys starting with "CPP"
  'tab-ms':  ['Method Statements'],
  'tab-ra':  ['RA Hazards']
};

/* ── Section number → snippet category (RAMS tab) ─────────── */
const SECTION_SNIPPET_MAP = {
  '2': 'Project Description',
  '3': 'Site Specifics',
  '4': 'Scope / Sequence of Works',
  '5': 'Emergency Arrangements',
  '6': 'Roles & Responsibilities',
  '7': 'Plant, Tools & Equipment',
  '8': 'Training & Competency',
  '9': 'Significant Risks',
  '11': 'Legislation & Standards',
  '12': 'COSHH',
  '13': 'PPE Standards',
  '14': 'RAMS List'
};

/* ── Get categories for a given tab ───────────────────────── */
function getTabSnippetCats(tabId) {
  if (tabId === 'tab-cpp') {
    return Object.keys(window.SNIPPETS).filter(k => k.startsWith('CPP'));
  }
  return SNIPPET_TAB_MAP[tabId] || Object.keys(window.SNIPPETS);
}

/* ── Get section number from a section header text ─────────── */
function getSectionNumber(headerText) {
  const m = (headerText || '').match(/(?:section)\s+(\d+)/i);
  return m ? m[1] : null;
}

/* ── Populate a single <select> with tab+section scoped snippets ── */
function populateSelect(sel) {
  if (!sel || !window.SNIPPETS) return;

  // Find which tab this select lives in
  const tabPanel = sel.closest('.tab-panel');
  const tabId    = tabPanel ? tabPanel.id : null;

  // Section-level override: data-snip-cat on the section element
  const section    = sel.closest('[data-snip-cat]');
  const sectionCat = section ? section.getAttribute('data-snip-cat') : null;

  // Determine which categories to show
  let cats;
  if (sectionCat) {
    // Section-specific: only show the one matching category
    cats = [sectionCat];
  } else {
    // Tab-level: show all categories for this tab
    cats = getTabSnippetCats(tabId);
  }

  // Build the dropdown
  sel.innerHTML = '<option value="">-- Select snippet --</option>';
  cats.forEach(cat => {
    const items = window.SNIPPETS[cat];
    if (!items || !items.length) return;
    const og = document.createElement('optgroup');
    og.label = cat;
    items.forEach((snip, idx) => {
      const opt       = document.createElement('option');
      opt.value       = cat + '::' + idx;
      opt.textContent = snip.title;
      og.appendChild(opt);
    });
    sel.appendChild(og);
  });
}

/* ── Repopulate all selects in a scope ────────────────────── */
function repopulateSnippetSelects(scope) {
  if (!window.SNIPPETS) return;
  (scope || document).querySelectorAll('.snip-select').forEach(populateSelect);
}

/* ── toHTML helper ────────────────────────────────────────── */
function toHTML(text) {
  if (!text) return '';
  const s = String(text).trim();
  if (/<(ul|ol|li|p|h[1-6]|table|thead|tbody|tr|td|div|br)\b/i.test(s)) return s;
  const parts = s.split(/\n+|;\s+/).map(x => x.trim()).filter(Boolean);
  if (parts.length > 1) return '<ul>' + parts.map(p => '<li>' + p + '</li>').join('') + '</ul>';
  return '<p>' + s + '</p>';
}

/* ── Delegated snippet insert/clear (RAMS + CPP tabs) ─────────
   Smart insert rules:
   - Table/structured HTML snippets → replaces editor content
     (tables need the whole box, not appended mid-text)
   - Plain text / bullet snippets   → appended at cursor or end
     (so multiple snippets can be combined)
   - Always adds a snippet heading above the content
─────────────────────────────────────────────────────────── */
document.addEventListener('click', function(e) {
  // INSERT
  const insertBtn = e.target.closest('.snip-insert');
  if (insertBtn) {
    const sc  = insertBtn.closest('.section-content, .section-content-cpp') || document;
    const sel = sc.querySelector('.snip-select');
    const ed  = sc.querySelector('.snippet-editor');
    if (!sel || !sel.value || !ed) return;

    const [cat, idxStr] = sel.value.split('::');
    const item = (window.SNIPPETS[cat] || [])[parseInt(idxStr, 10)];
    if (!item) return;

    const rawContent = item.content || '';
    const isStructured = /<(table|thead|tbody|tr|td|th|ul|ol)/i.test(rawContent);
    const heading = item.title ? `<h4 class="snippet-heading">${item.title}</h4>` : '';
    const html    = heading + toHTML(rawContent);

    ed.focus();

    if (isStructured) {
      // Structured content (tables, lists): clear and replace
      // so the table isn't broken by being appended mid-paragraph
      if (ed.innerHTML.trim()) {
        // There's existing content — append after it with a divider
        ed.insertAdjacentHTML('beforeend', '<hr style="border:none;border-top:1px dashed #ccc;margin:8px 0">' + html);
      } else {
        ed.innerHTML = html;
      }
    } else {
      // Plain text: insert at cursor position if focused, else append
      const sel2 = window.getSelection();
      const inEditor = sel2 && sel2.rangeCount && ed.contains(sel2.getRangeAt(0).commonAncestorContainer);
      if (inEditor && document.queryCommandSupported && document.queryCommandSupported('insertHTML')) {
        document.execCommand('insertHTML', false, html);
      } else {
        ed.insertAdjacentHTML('beforeend', html);
      }
    }

    // Flash confirmation
    ed.style.transition = 'background 0.4s';
    ed.style.background = 'rgba(75,191,214,0.1)';
    setTimeout(() => { ed.style.background = ''; }, 600);
    return;
  }

  // CLEAR
  const clearBtn = e.target.closest('.snip-clear');
  if (clearBtn) {
    const sc = clearBtn.closest('.section-content, .section-content-cpp') || document;
    const ed = sc.querySelector('.snippet-editor');
    if (ed) { ed.innerHTML = ''; ed.focus(); }
    return;
  }
});

/* ── RA snippet insert ────────────────────────────────────────
   Behaviour:
   - If the last row is EMPTY  → populate it in place (no new row)
   - If the last row has data  → add a fresh row, then populate it
   - Always scrolls to the populated row
─────────────────────────────────────────────────────────── */
document.addEventListener('click', function(e) {
  if (!e.target.closest('.snip-insert-ra')) return;
  const btn     = e.target.closest('.snip-insert-ra');
  const toolbar = btn.closest('.snippet-toolbar');
  const sel     = toolbar && toolbar.querySelector('.ra-snip-select');
  if (!sel || !sel.value) { alert('Please select a hazard snippet first'); return; }

  const snippet = window.SNIPPETS['RA Hazards'] && window.SNIPPETS['RA Hazards'][parseInt(sel.value, 10)];
  if (!snippet) { console.warn('RA snippet not found'); return; }

  const tab   = btn.closest('.tab-panel') || document;
  const table = tab.querySelector('.hazardsTable[data-role="hazards"]') || document.querySelector('.hazardsTable[data-role="hazards"]');
  if (!table) { alert('Hazards table not found'); return; }

  const tbody = table.querySelector('tbody');
  if (!tbody) return;

  function getEd(td) {
    return td.querySelector('div.editable[contenteditable="true"]') ||
           td.querySelector('div[contenteditable="true"]') || td;
  }

  function rowIsEmpty(tr) {
    // A row is considered empty if all text cells have no content
    const cells = tr.children;
    const textCols = [0, 1, 2, 4, 6];
    return textCols.every(i => {
      if (!cells[i]) return true;
      const ed = getEd(cells[i]);
      return !ed.textContent.trim();
    });
  }

  function buildEmptyRow() {
    const tr = document.createElement('tr');
    for (let i = 0; i < 7; i++) {
      const td = document.createElement('td');
      // Risk columns (3 and 5) — no contenteditable, get risk-cell setup
      if (i === 3 || i === 5) {
        td.contentEditable = 'false';
      } else {
        const div = document.createElement('div');
        div.className = 'editable';
        div.contentEditable = 'true';
        td.appendChild(div);
      }
      tr.appendChild(td);
    }
    return tr;
  }

  // Decide target row
  let targetRow;
  const rows = tbody.querySelectorAll('tr');

  if (!rows.length) {
    // No rows at all — create one
    targetRow = buildEmptyRow();
    tbody.appendChild(targetRow);
  } else {
    const lastRow = rows[rows.length - 1];
    if (rowIsEmpty(lastRow)) {
      // Last row is blank — reuse it
      targetRow = lastRow;
    } else {
      // Last row has content — add a new row
      targetRow = buildEmptyRow();
      tbody.appendChild(targetRow);
    }
  }

  // Reset clicked row tracker so we always target the fresh row
  _lastClickedHazardRow = targetRow;

  // Populate text fields
  const cells = targetRow.children;
  if (cells[0] && snippet.hazard)   getEd(cells[0]).innerHTML = snippet.hazard;
  if (cells[1] && snippet.who)      getEd(cells[1]).innerHTML = snippet.who;
  if (cells[2] && snippet.how)      getEd(cells[2]).innerHTML = snippet.how;
  if (cells[4] && snippet.controls) getEd(cells[4]).innerHTML = snippet.controls;
  if (cells[6] && snippet.action)   getEd(cells[6]).innerHTML = snippet.action;

  // Setup risk dropdowns (always fresh — handles newly built rows)
  setupRiskCellsForRow(targetRow);

  // Set risk values with immediate colour sync
  if (cells.length >= 7) {
    const rInit  = cells[3] && cells[3].querySelector('.risk-select');
    const rResid = cells[5] && cells[5].querySelector('.risk-select');
    const init   = snippet.init  ? String(snippet.init).toLowerCase()  : '';
    const resid  = snippet.resid ? String(snippet.resid).toLowerCase() : '';
    if (rInit  && init)  { rInit.value  = init;  attachRiskListener(rInit); }
    if (rResid && resid) { rResid.value = resid; attachRiskListener(rResid); }
  }

  // Scroll to the populated row
  targetRow.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  // Visual flash to confirm insert
  targetRow.style.transition = 'background 0.4s';
  targetRow.style.background = 'rgba(75,191,214,0.2)';
  setTimeout(() => { targetRow.style.background = ''; }, 800);
});

/* ── RA snippet dropdown population ──────────────────────── */
window.populateRASnippets = function() {
  const list = window.SNIPPETS['RA Hazards'];
  if (!list || !list.length) return;

  const selects = document.querySelectorAll('.ra-snip-select');
  if (!selects.length) return;

  // Group by section field
  const sectionOrder = [], sectionMap = {};
  list.forEach((snippet, index) => {
    const sec = snippet.section || (snippet.title ? snippet.title.split(/\s*[–-]\s*/)[1] || 'Other' : 'Other');
    if (!sectionMap[sec]) { sectionMap[sec] = []; sectionOrder.push(sec); }
    sectionMap[sec].push({ snippet, index });
  });

  selects.forEach(sel => {
    sel.innerHTML = '<option value="">-- Select Hazard --</option>';
    sectionOrder.forEach(sec => {
      const og = document.createElement('optgroup'); og.label = sec;
      sectionMap[sec].forEach(({ snippet, index }) => {
        const opt = document.createElement('option');
        opt.value = index; opt.textContent = snippet.title;
        og.appendChild(opt);
      });
      sel.appendChild(og);
    });
  });
};

/* ── MS snippet population ────────────────────────────────── */
function populateMSSnippets() {
  const list = window.SNIPPETS && window.SNIPPETS['Method Statements'] ? window.SNIPPETS['Method Statements'] : [];
  document.querySelectorAll('.ms-snip-select').forEach(sel => {
    sel.innerHTML = '<option value="">Select…</option>';
    const sectionOrder = [], sectionMap = {};
    list.forEach((snip, idx) => {
      const sec = snip.section || 'General';
      if (!sectionMap[sec]) { sectionMap[sec] = []; sectionOrder.push(sec); }
      sectionMap[sec].push({ snip, idx });
    });
    sectionOrder.forEach(sec => {
      const og = document.createElement('optgroup'); og.label = sec;
      sectionMap[sec].forEach(({ snip, idx }) => {
        const opt = document.createElement('option');
        opt.value = String(idx);
        opt.textContent = snip.title || snip.id || 'Snippet ' + (idx + 1);
        og.appendChild(opt);
      });
      sel.appendChild(og);
    });
  });
}

/* ── CPP snippet population ───────────────────────────────── */
window.populateCPPSnippets = function() {
  const tab = document.getElementById('tab-cpp');
  if (!tab || !window.SNIPPETS) return;
  tab.querySelectorAll('.snip-select').forEach(populateSelect);
};

/* ─────────────────────────────────────────────────────────────
   12b. GENERATE METHOD STATEMENTS FROM SECTION 14
   Reads the Section 14 RAMS table, matches each row to a
   snippet in snippetsms.js by MS reference number, and
   creates a pre-filled MS page for each matched method.
───────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('btnGenerateMS');
  if (!btn) return;
  btn.addEventListener('click', generateMSFromSection14);
});

function generateMSFromSection14() {
  // ── 1. Read Section 14 table rows ──────────────────────────
  const sec14 = document.getElementById('snippetEditor-section14');
  if (!sec14) { alert('Section 14 not found — make sure you are on the RAMS tab.'); return; }

  const rows = sec14.querySelectorAll('table tr');
  if (!rows.length) {
    alert('Section 14 has no table yet.\n\nLoad a RAMS template first to populate the method statement list, then click Generate MS.');
    return;
  }

  // Collect MS references from table rows (skip header)
  const msList = [];
  rows.forEach((row, i) => {
    if (i === 0) return; // skip header
    const cells = row.querySelectorAll('td');
    if (!cells.length) return;
    const msTitle = cells[0] ? cells[0].textContent.trim() : '';
    const raRef   = cells[2] ? cells[2].textContent.trim() : '';
    if (msTitle && msTitle !== '[Add additional MS]') {
      msList.push({ msTitle, raRef });
    }
  });

  if (!msList.length) {
    alert('No method statements found in Section 14.\n\nMake sure the table has rows with MS titles in the first column.');
    return;
  }

  // ── 2. Get MS snippet library ───────────────────────────────
  const snippets = window.SNIPPETS && window.SNIPPETS['Method Statements'];
  if (!snippets || !snippets.length) {
    alert('Method Statement snippets not loaded.\n\nMake sure snippetsms.js is in your folder.');
    return;
  }

  // ── 3. Match each row to a snippet ─────────────────────────
  // Match by MS number prefix: "MS1" in title matches MS1_Manual_Handling
  function findSnippet(msTitle) {
    // Extract MS number from title — e.g. "MS1 – Manual Handling" → "MS1"
    const numMatch = msTitle.match(/^MS(\d+)/i);
    if (!numMatch) return null;
    const msNum = 'MS' + numMatch[1];
    return snippets.find(s =>
      s.id && s.id.toUpperCase().startsWith(msNum.toUpperCase() + '_') ||
      s.title && s.title.toUpperCase().startsWith(msNum.toUpperCase() + ' ')
    ) || null;
  }

  const matched   = msList.filter(m => findSnippet(m.msTitle));
  const unmatched = msList.filter(m => !findSnippet(m.msTitle));

  // Confirm with user
  let msg = `Found ${matched.length} method statement${matched.length !== 1 ? 's' : ''} to generate`;
  if (unmatched.length) {
    msg += `\n\n${unmatched.length} row${unmatched.length !== 1 ? 's' : ''} had no matching snippet and will be created as blank pages:\n` +
      unmatched.map(m => '  • ' + m.msTitle).join('\n');
  }
  msg += '\n\nThis will replace all existing Method Statement pages. Continue?';

  if (!confirm(msg)) return;

  // ── 4. Build MS pages ───────────────────────────────────────
  const container = document.getElementById('methodTables');
  if (!container) { alert('Method Statement container not found.'); return; }
  container.innerHTML = '';

  function nl2html(text) {
    if (!text) return '';
    const s = String(text).trim();
    if (/<[a-z][\s\S]*>/i.test(s)) return s;
    const parts = s.split(/\n+|;\s+/).map(x => x.trim()).filter(Boolean);
    if (parts.length > 1) return '<ul>' + parts.map(p => '<li>' + p + '</li>').join('') + '</ul>';
    return '<p>' + s + '</p>';
  }

  msList.forEach((item, i) => {
    const pageNum = i + 1;
    const snip    = findSnippet(item.msTitle);
    const f       = snip ? (snip.fields || {}) : {};
    const title   = f.title || item.msTitle;
    const raRef   = item.raRef || '';

    container.insertAdjacentHTML('beforeend', `
      <section class="wm-section method-statement-section ms-page" data-page-index="${pageNum}" data-key="ms.page.${pageNum}">
        <div class="headersplitter" style="margin:20px 0;border-top:2px solid #333;position:relative;">
          <span style="position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:white;padding:0 10px;font-size:16px;font-weight:bold;">${item.msTitle.toUpperCase()}</span>
        </div>
        <div class="no-print snippet-toolbar">
          <label>MS Snippet:</label>
          <select class="ms-snip-select"></select>
          <button type="button" class="btn ms-snip-insert">Insert</button>
          <button type="button" class="btn danger ms-snip-clear">Clear All</button>
          <button type="button" class="btn ms-break">Break</button>
          <button type="button" class="btn add-page">+ Page</button>
          <button type="button" class="btn remove-page">− Page</button>
        </div>
        <table class="method-table" style="table-layout:fixed;width:100%;">
          <colgroup><col style="width:12%;"><col style="width:33%;"><col style="width:55%;"></colgroup>
          <tbody>
            <tr><th colspan="3" class="section-header">METHOD STATEMENT</th></tr>
            <tr>
              <td class="section-label">TITLE</td>
              <td class="editable-section" contenteditable="true" data-persist data-key="ms.page.${pageNum}.title">${title}</td>
              <td class="section-content" rowspan="6">
                <div class="editable-section" contenteditable="true" data-snippet-category="procedures" data-persist data-key="ms.page.${pageNum}.procedure" style="min-height:260px;">${f.method ? nl2html(f.method) : ''}</div>
              </td>
            </tr>
            <tr>
              <td class="section-label">EQUIPMENT</td>
              <td class="editable-section" contenteditable="true" data-persist data-key="ms.page.${pageNum}.equipment">${f.equipment ? nl2html(f.equipment) : ''}</td>
            </tr>
            <tr>
              <td class="section-label">PPE</td>
              <td class="editable-section" contenteditable="true" data-persist data-key="ms.page.${pageNum}.ppe">${f.ppe ? nl2html(f.ppe) : ''}</td>
            </tr>
            <tr><th colspan="2" class="section-header">TRAINING &amp; ASSOCIATED RISKS</th></tr>
            <tr>
              <td colspan="2" class="section-content">
                <div class="editable-section" contenteditable="true" data-persist data-key="ms.page.${pageNum}.training" style="min-height:150px;">${
                  [f.training ? '<strong>Training Required:</strong><br>' + nl2html(f.training) : '',
                   f.risks    ? '<strong>Associated Risks:</strong><br>'    + nl2html(f.risks)    : '']
                  .filter(Boolean).join('<br>')
                }</div>
              </td>
            </tr>
            <tr>
              <td class="section-label" style="font-size:9px;font-weight:600;padding:2px 6px;">RISK ASSESSMENT REF:</td>
              <td class="editable-section" contenteditable="true" data-persist data-key="ms.page.${pageNum}.raRef">${raRef ? raRef + ' — ' + item.msTitle : item.msTitle}</td>
            </tr>
          </tbody>
        </table>
      </section>`);
  });

  // Re-init MS snippet dropdowns for new pages
  if (typeof populateMSSnippets === 'function') populateMSSnippets();
  if (typeof renumberMSPages    === 'function') renumberMSPages();

  // Switch to MS tab
  const msBtn = document.querySelector('.tab-button[data-tab="tab-ms"]');
  if (msBtn) msBtn.click();

  if (typeof showStatus === 'function') {
    showStatus(
      `✅ Generated ${msList.length} Method Statement pages from Section 14 — ${matched.length} pre-filled, ${unmatched.length} blank.`,
      'success', 5000
    );
  }
}

/* ─────────────────────────────────────────────────────────────
   12c. GENERATE RISK ASSESSMENTS FROM METHOD STATEMENTS
   Reads each MS page, finds its raGroup from snippetsms.js,
   pulls all matching RA hazards, and creates pre-filled
   RA form pages — one per method statement.
───────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function() {
  // Wire Generate RA button
  const btn = document.getElementById('btnGenerateRA');
  if (btn) btn.addEventListener('click', generateRAFromMS);

  // Remember last location typed on any RA form — fires on existing form too
  function wireLocationMemory(container) {
    // Find location fields by label text (data-key may be stripped on cloned forms)
    const root = container || document;
    const labels = root.querySelectorAll('.meta .label');
    labels.forEach(lbl => {
      if (!lbl.textContent.trim().toLowerCase().includes('location')) return;
      const el = lbl.parentElement && lbl.parentElement.querySelector('[contenteditable="true"]');
      if (!el || el.dataset.locationWired) return;
      el.dataset.locationWired = '1';
      if (!el.textContent.trim()) {
        const last = localStorage.getItem('ra.lastLocation');
        if (last) el.textContent = last;
      }
      el.addEventListener('input', () => {
        localStorage.setItem('ra.lastLocation', el.textContent.trim());
      });
    });
  }

  // Wire on load for the initial RA form
  wireLocationMemory();

  // Also wire any new pages added later (observe DOM changes on tab-ra)
  const raTab = document.getElementById('tab-ra');
  if (raTab) {
    new MutationObserver(() => wireLocationMemory(raTab))
      .observe(raTab, { childList: true, subtree: false });
  }
});

function generateRAFromMS() {
  // ── 1. Collect MS pages from MS tab ──────────────────────
  const msPages = Array.from(document.querySelectorAll('#tab-ms .ms-page'));
  if (!msPages.length) {
    alert('No Method Statement pages found.\n\nGenerate Method Statements first using ⚡ Generate MS, then come back to generate the Risk Assessments.');
    return;
  }

  const msSnippets = window.SNIPPETS && window.SNIPPETS['Method Statements'] || [];
  const raHazards  = window.SNIPPETS && window.SNIPPETS['RA Hazards'] || [];

  if (!raHazards.length) {
    alert('RA Hazard snippets not loaded. Make sure snippetsra.js is in your folder.');
    return;
  }

  // ── 2. Build raGroup lookup from MS snippets ─────────────
  // Map: msN → raGroup array (e.g. ms7 → ['ms7'])
  function getMSSnippet(msTitle) {
    const numMatch = (msTitle || '').match(/MS(\d+)/i);
    if (!numMatch) return null;
    const msNum = 'MS' + numMatch[1];
    return msSnippets.find(s =>
      (s.id && s.id.toUpperCase().startsWith(msNum + '_')) ||
      (s.title && s.title.toUpperCase().startsWith(msNum + ' '))
    ) || null;
  }

  // ── 3. Preview what will be generated ────────────────────
  const planned = msPages.map(page => {
    const titleEl = page.querySelector('[data-key$=".title"]');
    const msTitle = titleEl ? titleEl.textContent.trim() : '';
    const snip    = getMSSnippet(msTitle);
    const groups  = snip && snip.raGroup ? snip.raGroup : [];
    const hazards = raHazards.filter(h => h.id && groups.some(g => h.id.toLowerCase().startsWith(g.toLowerCase() + '-')));
    return { msTitle, groups, hazardCount: hazards.length };
  });

  const totalHazards = planned.reduce((sum, p) => sum + p.hazardCount, 0);
  const noMatch = planned.filter(p => !p.hazardCount);

  let msg = `Ready to generate ${msPages.length} Risk Assessment form${msPages.length !== 1 ? 's' : ''} with ${totalHazards} pre-filled hazard rows total.`;
  if (noMatch.length) {
    msg += `\n\n${noMatch.length} MS page${noMatch.length !== 1 ? 's' : ''} had no matching hazards and will get a blank RA form:\n` +
      noMatch.map(p => '  • ' + (p.msTitle || '(untitled)')).join('\n');
  }
  msg += '\n\nThis will replace all existing RA form pages. Continue?';

  if (!confirm(msg)) return;

  // ── 4. Build RA form pages ───────────────────────────────
  const raSheet = document.querySelector('#tab-ra .sheet, #tab-ra');
  if (!raSheet) { alert('RA tab not found.'); return; }

  // IMPORTANT: clone the template BEFORE removing existing pages
  const firstFormTemplate = buildEmptyRAFormPage();
  if (!firstFormTemplate || !firstFormTemplate.querySelector) {
    alert('Could not build RA form template — RA tab structure not found.\n\nMake sure you have opened the Risk Assessment tab at least once before generating.');
    return;
  }

  // Now remove all existing form pages and replace with generated ones
  Array.from(document.querySelectorAll('#tab-ra .form-page')).forEach(p => p.remove());

  let totalFilled = 0;

  // The RA tab container to append pages to
  const raContainer = document.getElementById('tab-ra');

  planned.forEach((plan, pageIdx) => {
    const formPage = firstFormTemplate.cloneNode(true);

    // Unique ID suffix for this page
    const suffix = '_rg' + pageIdx + '_' + (Date.now() % 100000);

    // Deduplicate ALL IDs first (before touching any specific elements)
    formPage.querySelectorAll('[id]').forEach(el => {
      el.id = el.id.replace(/(_rg\d+_\d+|_rp\d+|_ra\d+)$/, '') + suffix;
    });

    // ── Extract activity name and MS ref from title ──────────
    // "MS1 Manual Handling" → activity: "Manual Handling", msRef: "MS1"
    const msNumMatch  = (plan.msTitle || '').match(/^(MS\d+)\s*[–\-]?\s*/i);
    const msRef       = msNumMatch ? msNumMatch[1].toUpperCase() : (plan.msTitle || '');
    const activityName = (plan.msTitle || '').replace(/^MS\d+\s*[–\-]?\s*/i, '').trim()
                          || plan.msTitle || 'Risk Assessment ' + (pageIdx + 1);

    // ── Letterhead title → always "Risk Assessment" ──
    const titleEl = formPage.querySelector('[id^="lhTitlera"], .lh-title');
    if (titleEl) titleEl.textContent = 'Risk Assessment';

    // ── Letterhead subtitle → activity name (e.g. "Manual Handling") ──
    const subtitleEl = formPage.querySelector('[id^="lhSubtitlera"], .lh-subtitle');
    if (subtitleEl) subtitleEl.textContent = activityName;

    // ── Meta fields ───────────────────────────────────────────

    // ── Meta fields — use label text to find each field ──────
    // (data-key is stripped from the clone so we find by .label text)
    function metaFieldByLabel(container, labelText) {
      const labels = container.querySelectorAll('.meta .label');
      for (const lbl of labels) {
        if (lbl.textContent.trim().toLowerCase().includes(labelText.toLowerCase())) {
          // .label is itself a <div> so use parentElement (the wrapper div)
          // to find the sibling <strong contenteditable="true">
          return lbl.parentElement.querySelector('[contenteditable="true"]');
        }
      }
      return null;
    }

    // Task / Activity → activity name only (e.g. "Manual Handling")
    const taskEl = metaFieldByLabel(formPage, 'task');
    if (taskEl) taskEl.textContent = activityName;

    // Location → last entered value (user fills it themselves)
    const lastLocation = localStorage.getItem('ra.lastLocation') || '';
    const locEl = metaFieldByLabel(formPage, 'location');
    if (locEl) {
      locEl.textContent = lastLocation;
      locEl.addEventListener('input', () => {
        localStorage.setItem('ra.lastLocation', locEl.textContent.trim());
      });
    }

    // Project Name — read from DOM first, fall back to localStorage
    // (localStorage key 'project.Namefp' is where the save system persists it)
    const projectDomEl  = document.getElementById('projectNamefp');
    const projectDomVal = projectDomEl ? projectDomEl.textContent.trim() : '';
    const projectLsVal  = localStorage.getItem('project.Namefp') || '';
    // Use whichever has real content (not the default placeholder text)
    const projectName   = (projectDomVal && projectDomVal !== 'Add Text')
                            ? projectDomVal
                            : (projectLsVal && projectLsVal !== 'Add Text')
                              ? projectLsVal
                              : '';
    const projEl = metaFieldByLabel(formPage, 'project');
    if (projEl) projEl.textContent = projectName;

    // Risk Assessment Reference → MS number e.g. "MS1"
    const refEl = metaFieldByLabel(formPage, 'reference');
    if (refEl) refEl.textContent = msRef;

    // Build hazard rows for this MS
    const tbody = formPage.querySelector('table.hazardsTable tbody');
    if (tbody) {
      tbody.innerHTML = '';
      const groups  = plan.groups;
      const hazards = raHazards.filter(h =>
        h.id && groups.some(g => h.id.toLowerCase().startsWith(g.toLowerCase() + '-'))
      );

      if (hazards.length) {
        hazards.forEach(hazard => {
          const tr = buildHazardRow(hazard);
          tbody.appendChild(tr);
          totalFilled++;
        });
      } else {
        tbody.appendChild(buildBlankHazardRow());
      }

      if (typeof setupRiskCellsForTable === 'function') {
        setupRiskCellsForTable(formPage.querySelector('.hazardsTable'));
      }
    }

    raContainer.appendChild(formPage);
  });

  // Repopulate RA snippet dropdowns
  if (typeof window.populateRASnippets === 'function') window.populateRASnippets();

  // Switch to RA tab
  const raBtn = document.querySelector('.tab-button[data-tab="tab-ra"]');
  if (raBtn) raBtn.click();

  if (typeof showStatus === 'function') {
    showStatus(
      `✅ Generated ${planned.length} Risk Assessment forms with ${totalFilled} pre-filled hazard rows.`,
      'success', 5000
    );
  }
}

/* ── Build a blank RA form page (deep clone from the live form page) ── */
function buildEmptyRAFormPage() {
  // Find the form-page — could be .sheet.form-page or a child .form-page
  const existing = document.querySelector('#tab-ra .form-page') ||
                   document.querySelector('#tab-ra .sheet');
  if (!existing) return null;

  const clone = existing.cloneNode(true);

  // Ensure it has the form-page class
  clone.classList.add('form-page');

  // Remove persist keys so data doesn't conflict with original
  clone.removeAttribute('data-persist-container');
  clone.removeAttribute('data-key');
  clone.querySelectorAll('[data-persist]').forEach(el => {
    el.removeAttribute('data-persist');
    el.removeAttribute('data-key');
  });

  // Clear hazard rows — will be re-filled per MS
  const tbody = clone.querySelector('.hazardsTable tbody');
  if (tbody) tbody.innerHTML = '';

  // Clear editable meta fields (task, location etc.)
  clone.querySelectorAll('.meta [contenteditable="true"], .meta .editable').forEach(el => {
    el.textContent = '';
  });

  // Clear risk select bindings so they re-initialise
  clone.querySelectorAll('.risk-select').forEach(sel => {
    sel.value = '';
    delete sel.dataset.raBound;
    sel._raSyncFn = null;
  });

  // Clear sign-off register rows
  const signregBody = clone.querySelector('#signregTable tbody, .signreg-table tbody');
  if (signregBody) {
    signregBody.querySelectorAll('[contenteditable="true"]').forEach(el => el.innerHTML = '');
  }

  return clone;
}

/* ── Build a single hazard <tr> from an RA snippet ── */
function buildHazardRow(hazard, container) {
  const tr = document.createElement('tr');

  function makeCell(text) {
    const td  = document.createElement('td');
    const div = document.createElement('div');
    div.className = 'editable';
    div.contentEditable = 'true';
    div.innerHTML = text || '';
    td.appendChild(div);
    return td;
  }

  function makeRiskCell() {
    const td  = document.createElement('td');
    td.contentEditable = 'false';
    return td;
  }

  // 7 columns: hazard | who | how | init risk | controls | resid risk | action
  tr.appendChild(makeCell(hazard.hazard  || ''));
  tr.appendChild(makeCell(hazard.who     || ''));
  tr.appendChild(makeCell(hazard.how     || ''));
  tr.appendChild(makeRiskCell());   // initial risk — col 3
  tr.appendChild(makeCell(hazard.controls || ''));
  tr.appendChild(makeRiskCell());   // residual risk — col 5
  tr.appendChild(makeCell(hazard.action  || ''));

  // Wire risk dropdowns and set values
  if (typeof setupRiskCellsForRow === 'function') setupRiskCellsForRow(tr);

  const rInit  = tr.children[3] && tr.children[3].querySelector('.risk-select');
  const rResid = tr.children[5] && tr.children[5].querySelector('.risk-select');
  const init   = hazard.init  ? String(hazard.init).toLowerCase()  : '';
  const resid  = hazard.resid ? String(hazard.resid).toLowerCase() : '';

  if (rInit  && init)  { rInit.value  = init;  if (typeof attachRiskListener === 'function') attachRiskListener(rInit); }
  if (rResid && resid) { rResid.value = resid; if (typeof attachRiskListener === 'function') attachRiskListener(rResid); }

  return tr;
}

/* ── Build a blank hazard row ── */
function buildBlankHazardRow() {
  const tr = document.createElement('tr');
  for (let i = 0; i < 7; i++) {
    const td = document.createElement('td');
    if (i === 3 || i === 5) {
      td.contentEditable = 'false';
    } else {
      const div = document.createElement('div');
      div.className = 'editable';
      div.contentEditable = 'true';
      td.appendChild(div);
    }
    tr.appendChild(td);
  }
  return tr;
}

/* ─────────────────────────────────────────────────────────────
   13. SAVE SYSTEM (localStorage + Save-As HTML)
   Ported from save-system.js
───────────────────────────────────────────────────────────── */
(function() {
  const STORE_KEY = 'rams:localSave:v1';
  const EMBED_ID  = 'rams-embedded-save-data';
  const $  = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  function showStatus(msg, type, dur) {
    const el = document.getElementById('saveStatus');
    if (!el) return;
    el.textContent = msg;
    el.className = 'save-status' + (type && type !== 'success' ? ' ' + type : '');
    el.style.display = 'block';
    setTimeout(() => { el.style.display = 'none'; }, dur || 2500);
  }
  window.showStatus = showStatus;

  function serializeState() {
    const payload = { meta: { version: 2, savedAt: new Date().toISOString() }, containers: {}, fields: {}, inputsById: {}, ceById: {}, activeTab: document.body.getAttribute('data-active-tab') || '' };

    $$('[data-persist-container][data-key]').forEach(el => {
      const key = el.getAttribute('data-key'); if (!key) return;
      el.querySelectorAll('input[type="checkbox"],input[type="radio"]').forEach(cb => { if (cb.checked) cb.setAttribute('checked',''); else cb.removeAttribute('checked'); });
      el.querySelectorAll('input:not([type="checkbox"]):not([type="radio"])').forEach(inp => inp.setAttribute('value', inp.value ?? ''));
      el.querySelectorAll('textarea').forEach(ta => ta.textContent = ta.value ?? '');
      el.querySelectorAll('select').forEach(sel => Array.from(sel.options).forEach(opt => { if (opt.selected) opt.setAttribute('selected',''); else opt.removeAttribute('selected'); }));
      payload.containers[key] = el.innerHTML;
    });

    $$('[data-persist][data-key]').forEach(el => {
      const key = el.getAttribute('data-key'); if (!key) return;
      if (el.matches('input,textarea,select')) payload.fields[key] = { t: 'v', v: el.value ?? '' };
      else payload.fields[key] = { t: 'h', v: el.innerHTML ?? '' };
    });

    $$('input,textarea,select').forEach(el => {
      if (!el.id) return;
      if (el.hasAttribute('data-persist') && el.hasAttribute('data-key')) return;
      if (el.type === 'checkbox' || el.type === 'radio') payload.inputsById[el.id] = { t: 'c', v: !!el.checked };
      else if (el.tagName === 'SELECT') payload.inputsById[el.id] = { t: 's', v: el.value ?? '' };
      else payload.inputsById[el.id] = { t: 'v', v: el.value ?? '' };
    });

    $$("[contenteditable='true']").forEach(el => {
      if (!el.id) return;
      if (el.hasAttribute('data-persist') && el.hasAttribute('data-key')) return;
      payload.ceById[el.id] = el.innerHTML ?? '';
    });

    return payload;
  }

  function restoreState(payload) {
    if (!payload) return false;
    function safeEsc(s) { return (window.CSS && CSS.escape) ? CSS.escape(s) : String(s).replace(/["\\]/g,'\\$&'); }

    if (payload.containers) Object.keys(payload.containers).forEach(key => {
      const el = document.querySelector(`[data-persist-container][data-key="${safeEsc(key)}"]`);
      if (el) el.innerHTML = payload.containers[key] ?? '';
    });

    if (payload.fields) Object.keys(payload.fields).forEach(key => {
      const el = document.querySelector(`[data-persist][data-key="${safeEsc(key)}"]`);
      if (!el) return;
      const rec = payload.fields[key];
      if (el.matches('input,textarea,select') && rec.t === 'v') el.value = rec.v ?? '';
      else el.innerHTML = rec.v ?? '';
    });

    if (payload.inputsById) Object.keys(payload.inputsById).forEach(id => {
      const el = document.getElementById(id); if (!el) return;
      const rec = payload.inputsById[id];
      if (rec.t === 'c') el.checked = !!rec.v;
      else el.value = rec.v ?? '';
    });

    if (payload.ceById) Object.keys(payload.ceById).forEach(id => {
      const el = document.getElementById(id);
      if (!el || el.getAttribute('contenteditable') !== 'true') return;
      el.innerHTML = payload.ceById[id] ?? '';
    });

    if (payload.activeTab) {
      const btn = document.querySelector(`.tab-button[data-tab="${payload.activeTab}"]`);
      if (btn) btn.click();
    }

    reinitAfterRestore();
    return true;
  }

  function reinitAfterRestore() {
    try { if (typeof window.initMSSection === 'function') document.querySelectorAll('#methodTables .method-statement-section').forEach(sec => window.initMSSection(sec)); } catch {}
    try { if (typeof window.populateRASnippets === 'function') window.populateRASnippets(); } catch {}
    try { if (typeof window.setupRiskCellsForTable === 'function') document.querySelectorAll('.hazardsTable').forEach(t => window.setupRiskCellsForTable(t)); } catch {}
  }

  function saveToLocalStorage() {
    const payload = serializeState();
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(payload));
      showStatus('💾 Saved to browser — survives refresh', 'success', 3000);
      return true;
    } catch(e) {
      showStatus('⚠️ Save failed — storage full. Use Save As instead.', 'error', 4000);
      return false;
    }
  }

  function restoreFromLocalStorage() {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return false;
    try { return restoreState(JSON.parse(raw)); } catch { return false; }
  }

  function promptRestoreIfExists() {
    const embedded = document.getElementById(EMBED_ID);
    if (embedded) {
      try {
        const decoded = decodeURIComponent(escape(atob(embedded.textContent.trim())));
        const payload = JSON.parse(decoded);
        restoreState(payload);
        localStorage.setItem(STORE_KEY, JSON.stringify(payload));
        embedded.remove(); return;
      } catch {}
    }
    if (!localStorage.getItem(STORE_KEY)) return;
    if (!confirm('Saved progress found in this browser.\nRestore it now?')) return;
    restoreFromLocalStorage();
  }

  function exportAsHTML() {
    const payload = serializeState();
    const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
    const cloned  = document.documentElement.cloneNode(true);

    // Sync live inputs into clone
    const liveInputs  = $$('input,textarea,select');
    const cloneInputs = $$('input,textarea,select', cloned);
    liveInputs.forEach((liveEl, i) => {
      const cloneEl = cloneInputs[i]; if (!cloneEl) return;
      if (liveEl.tagName === 'TEXTAREA') { cloneEl.textContent = liveEl.value ?? ''; return; }
      if (liveEl.tagName === 'SELECT') { Array.from(cloneEl.options).forEach((opt, idx) => { opt.selected = !!liveEl.options[idx]?.selected; }); return; }
      if (liveEl.type === 'checkbox' || liveEl.type === 'radio') { if (liveEl.checked) cloneEl.setAttribute('checked',''); else cloneEl.removeAttribute('checked'); return; }
      cloneEl.setAttribute('value', liveEl.value ?? '');
    });

    // Sync contenteditable
    const liveCE  = $$("[contenteditable='true']");
    const cloneCE = $$("[contenteditable='true']", cloned);
    liveCE.forEach((el, i) => { if (cloneCE[i]) cloneCE[i].innerHTML = el.innerHTML; });

    // Remove old embed + inject new
    const oldEmbed = $(`#${EMBED_ID}`, cloned);
    if (oldEmbed) oldEmbed.remove();
    const dataTag = cloned.ownerDocument.createElement('script');
    dataTag.type = 'text/plain'; dataTag.id = EMBED_ID; dataTag.style.display = 'none';
    dataTag.textContent = encoded;
    const head = $('head', cloned); if (head) head.appendChild(dataTag);

    // Filename
    const projEl  = document.getElementById('projectNamefp');
    const projName = (projEl ? projEl.textContent.trim() : 'RAMS').replace(/[^a-zA-Z0-9-_ ]/g,'').replace(/\s+/g,'-') || 'RAMS';
    const filename = `${projName}_${new Date().toISOString().slice(0,10)}.html`;

    const html = '<!DOCTYPE html>\n' + cloned.outerHTML;
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a'); a.href = url; a.download = filename;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 500);
    showStatus(`📥 Saved as "${filename}"`, 'info', 3000);
  }

  function clearAll() {
    if (!confirm('⚠️ This will erase ALL saved data and reload a blank form.\nMake sure you have used Save As first.\n\nContinue?')) return;
    showStatus('🗑️ Clearing…', 'info', 2000);
    localStorage.removeItem(STORE_KEY);
    setTimeout(() => location.reload(), 500);
  }

  function wireSaveButtons() {
    const btnSave   = document.getElementById('btnSave');
    const btnSaveAs = document.getElementById('btnExportSaveas');
    const btnClear  = document.getElementById('btnClearAll');
    if (btnSave)   btnSave.addEventListener('click',   e => { e.preventDefault(); saveToLocalStorage(); });
    if (btnSaveAs) btnSaveAs.addEventListener('click', e => { e.preventDefault(); exportAsHTML(); });
    if (btnClear)  btnClear.addEventListener('click',  e => { e.preventDefault(); clearAll(); });
  }

  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 's') { e.preventDefault(); exportAsHTML(); }
  });

  document.addEventListener('DOMContentLoaded', () => {
    wireSaveButtons();
    promptRestoreIfExists();
  });

  window.AppSave = { save: saveToLocalStorage, restore: restoreFromLocalStorage, saveAsHtml: exportAsHTML, clearAll };
})();


/* ─────────────────────────────────────────────────────────────
   14. BACK TO TOP
───────────────────────────────────────────────────────────── */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('show', window.pageYOffset > 300));
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}


/* ─────────────────────────────────────────────────────────────
   IMAGE PRELOADER
   Converts ahs.png + client.png to base64 data-URLs on load.
   This avoids fetch() calls that fail on file:// protocol.
   Also makes missing images graceful (no broken-image errors).
───────────────────────────────────────────────────────────── */
// Images are set directly in HTML with onerror handlers.
// No canvas, no fetch, no CORS — works on file://.


/* ─────────────────────────────────────────────────────────────
   PDF REPORT GENERATOR — BRAND INJECTION
   client-reportpdfv2.js owns the btnClientReport click handler.
   We intercept in the CAPTURE phase (runs first) to inject the
   active client profile before the generator reads it.
   We do NOT call handleReportClick ourselves — that would fire twice.
───────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('btnClientReport');
  if (!btn) return;

  // Use capture:true so this fires BEFORE the listener in client-reportpdfv2.js
  btn.addEventListener('click', function(e) {
    // Inject client profile into globals the generator reads
    const profile = getActiveProfile();

    // Logo
    if (profile.logo) {
      window._embeddedClientLogoData = profile.logo;
    } else {
      const clientImg = document.querySelector('.client-logo');
      const src = clientImg && clientImg.src &&
                  !clientImg.src.endsWith('/') &&
                  !clientImg.src.endsWith('index.html') ? clientImg.src : null;
      window._embeddedClientLogoData = src || null;
    }

    // Brand colour → [R, G, B]
    function hexToRgb(hex) {
      const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return r ? [parseInt(r[1],16), parseInt(r[2],16), parseInt(r[3],16)] : [20,30,60];
    }
    window._activePdfBrand = hexToRgb(profile.primary || '#4BBFD6');

    // Do NOT call handleReportClick here — client-reportpdfv2.js handles it
  }, true); // <-- capture phase
});


/* ─────────────────────────────────────────────────────────────
   INIT — wire everything on DOMContentLoaded
───────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function() {
  populateProfileDropdown();
  initTabs();
  wireToolbar();
  initDatePickerFP();
  initClientNameSync();
  initSectionButtons();
  initRADropdowns();
  wireRAButtons();
  wireRAFormAndPPE();
  wireMSContainer();
  populateMSSnippets();
  renumberMSPages();
  getMSPages().forEach(initMSSection);
  repopulateSnippetSelects(document);
  window.populateRASnippets();
  window.populateCPPSnippets && window.populateCPPSnippets();
  fillCPPDate();
  buildTOC();
  initBackToTop();
  renumberSections();

  // Auto-rebuild TOC on CPP mutations
  const cppSheet = document.querySelector('#tab-cpp .sheet');
  if (cppSheet) {
    new MutationObserver(() => { clearTimeout(window._cppTocTimer); window._cppTocTimer = setTimeout(buildTOC, 150); })
      .observe(cppSheet, { subtree: true, childList: true, characterData: true });
  }
});
