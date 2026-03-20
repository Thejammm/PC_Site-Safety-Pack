/* =================================================================
   snippetscpptemplates.js — CPP Project Templates
   AHS Compliance Consulting
   
   HOW TO USE:
   - Each entry in window.CPP_TEMPLATES is a named project type
   - Each has content for CPP sections 2–5 (project-specific)
   - Sections 6–18 are generic and loaded automatically from cpp-content.js
   
   HOW TO EDIT:
   - Find the project type below and edit the HTML for any section
   - To add a new project type: copy an existing block, rename the
     key and update the content
   - Changes take effect on next page load — no rebuild needed
   ================================================================= */
'use strict';

window.CPP_TEMPLATES = window.CPP_TEMPLATES || {};

/* ================================================================
   GROUNDWORKS
   Large-scale enabling works, excavation, drainage, roads & sewers
   Based on Mill View, Keyingham CPP (Prestons Construction Ltd)
   ================================================================ */
window.CPP_TEMPLATES['Groundworks'] = {

  section2: `<p><strong>2.1 Description of Works</strong></p>
<p>This project is split into individual phases. The works covered by this Construction Phase Plan are detailed as follows:</p>
<p><strong>Roads &amp; Sewers</strong> — Construction of roads and sewers will focus on establishing the site infrastructure, main drainage, and road formation up to binder course level. This phase also includes the installation of key utilities, initial safety measures, and essential enabling works to support future construction phases. All works will be carried out in accordance with approved drawings and specifications.</p>
<p>General ground works, elements of the substructure, drainage, and external finishes required to prepare each plot and surrounding areas for the subsequent build stages. Activities will be carried out in accordance with the issued construction drawings, engineering layouts, and specifications.</p>
<p><strong>Section 278 and Section 106 Works</strong> — In addition to the main site infrastructure, the project includes off-site highway improvement works under a Section 278 Agreement and utility connection works under a Section 106 Agreement. The S278 works will comprise the formation of a new site entrance onto the existing public highway, associated kerb realignment, new footpaths, drainage adjustments, and resurfacing of the affected carriageway to local authority standards. The S106 works will include the construction of a new foul sewer connection from the development to the adopted sewer network, incorporating manholes, pipework, and reinstatement of the existing highway or footpath as required. All works will be undertaken in accordance with the relevant technical approvals, statutory undertaker requirements, and local authority specifications to ensure full adoption and compliance upon completion.</p>
<p><strong>Proposed Site Layout</strong></p>
<p><em>[Insert site layout plan or reference drawing number here]</em></p>`,

  section3: `<p><strong>3.1 Permitted Working Hours</strong></p>
<p>Not Before 07:30am or after 17:00pm Monday to Friday. At no time on Saturdays, Sundays or Bank Holidays unless agreed by the Client.</p>
<p>No noising specific regarding deliveries but care to be taken to avoid deliveries outside school times where possible.</p>
<p>Minimum mobilisation period for preparation and planning: <strong>1 week</strong>. No works will commence until the local authority and client have approved in writing details of the layout, drainage, construction, utilities and lighting.</p>

<p><strong>3.2 Existing Services</strong></p>
<p>The known extent of existing mains/services comprising water and fire main, electricity, gas, drainage, and telecommunication services on, or adjacent to, the site are detailed in the Included Appendix B which will be held alongside this document and held by the Prestons senior management team on site.</p>
<p>Contractors must verify both the accuracy of service drawings ensuring all such services are traced using electromagnetic and/or ground penetrating radar detection systems, status verified, shut down and isolated or marked up and protected prior to commencing any works and for liaising with Prestons Construction Limited (PCL) at all times. Permits are required for excavation as instructed from the PCI.</p>
<p>All newly installed services must be included on updated service plans, and by any previously passed works — in this instance this is from the demolition phase which will be completed by a separate contractor and finished prior to PCL commencing their works. Information will be requested from the Principal Designer for the location of any services likely to be present and not recorded on the utility drawings in the Pre Construction Information (PCI).</p>
<p>All services uncovered are to be treated as live unless they have been confirmed otherwise by the utility services with any unrecorded services immediately brought to the attention of PCL Management. Particular attention will be given to the presence of existing services in relation to providing new supplies/substation for the project i.e. all works to be carried out strictly in accordance with HSG Guidance HSG (G) 16 — Local authority/clients instructions and PCL safe systems of work with a particular emphasis on pre-planning the works and providing competent supervision and workforce to manage the works.</p>
<p>Appropriate controls will be identified in the method statement and risk assessment and must be implemented when services are made live e.g. isolation, warning signage, and permit to work system. It may from time to time during construction phases that various existing live services will be present. Any work that may undermine or disturb any existing service contractors must establish and agree with PCL what protection or control measure must be employed before work commences. Every effort must be made to avoid digging near any live underground services.</p>

<p><strong>3.3 Pre-Construction Information</strong></p>
<p>The Pre-Construction Information (PCI) has been provided by the client and Principal Designer and is available in the project Central Data Environment (CDE). Key documents specific to the Phase 2 works have been referenced into this CPP and will be made available to all contractors under the control of PCL.</p>`,

  section4: `<p><strong>4.1 Significant Site Risks</strong></p>
<p>The following significant hazards have been identified and must be managed through appropriate method statements and risk assessments:</p>
<table class="rte-table">
  <thead>
    <tr>
      <th>Hazard</th>
      <th>Risk</th>
      <th>Key Controls Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Work at height</td>
      <td>Falls from height — injury or fatality</td>
      <td>Work at height plan, edge protection, MEWP where applicable, IPAF trained operatives</td>
    </tr>
    <tr>
      <td>Excavations</td>
      <td>Collapse of excavation — burial, injury or fatality</td>
      <td>Temporary works design, daily inspection by competent person, no entry without assessment</td>
    </tr>
    <tr>
      <td>Uncontrolled structural collapses</td>
      <td>Unexpected collapse causing injury or fatality</td>
      <td>Structural assessment prior to works, temporary propping where required, exclusion zones</td>
    </tr>
    <tr>
      <td>Manual Handling</td>
      <td>Musculoskeletal injury from heavy/awkward loads</td>
      <td>Manual handling assessments, mechanical aids, two-person lifts for loads over 20kg</td>
    </tr>
    <tr>
      <td>Traffic Management / pedestrian and vehicular traffic</td>
      <td>Collision between plant, vehicles and pedestrians</td>
      <td>Traffic management plan, banksman, 5mph site limit, segregated pedestrian routes</td>
    </tr>
    <tr>
      <td>Live services (gas / electric / water)</td>
      <td>Service strike causing explosion, electrocution or flooding</td>
      <td>CAT &amp; Genny scan, utility records, hand dig within 500mm, permit to work</td>
    </tr>
    <tr>
      <td>Dust, noise and vibration</td>
      <td>Occupational ill health — respiratory disease, hearing damage, HAVS</td>
      <td>On-tool extraction, RPE, HAV assessments, trigger times, job rotation</td>
    </tr>
    <tr>
      <td>Fire — materials hazardous to health</td>
      <td>Uncontrolled fire or explosion</td>
      <td>Hot works permit, no fires on site, gas cylinders stored correctly per regulations</td>
    </tr>
  </tbody>
</table>
<p>Identification of site hierarchy, site rules, first aid arrangements and reporting of accidents and "near miss" incidents. Environmental requirements — noise, dust, vibration, pollution controls etc. Interface with others, care and consideration of the general public and interface with other contractors.</p>`,

  section5: `<p><strong>5.1 Key Personnel &amp; Responsibilities</strong></p>
<table class="rte-table">
  <thead>
    <tr>
      <th>Role</th>
      <th>Name</th>
      <th>Contact</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Contract Manager</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>Contract Manager (Alt)</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>Site Supervisor</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>Commercial Manager</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>Managing Director</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>H&amp;S Officer</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>First Aider</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>Temporary Works Coordinator</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>Fire Safety Coordinator</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>Management of underground services</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
  </tbody>
</table>

<p><strong>5.2 Safety Management Approach</strong></p>
<p>Safety on this site is managed through effective planning, clear communication, and a shared commitment from all personnel to carry out work safely and responsibly. Safe working practices are an integral part of the job and form the foundation of how all site activities are undertaken. PCL will carry out a daily briefing or toolbox talk to review the planned works, identify potential hazards, and agree on the safest method of delivery. These briefings also provide an opportunity for the team to raise concerns, share observations, and suggest improvements.</p>
<p>Open and honest communication ensures that everyone has a voice in maintaining a safe working environment. All operatives have the authority to stop work immediately if unsafe conditions are identified. Any concerns raised will be reviewed without delay, and suitable corrective actions agreed and implemented before work recommences. No one will be criticised for taking action to prevent an incident — protecting people always takes priority over production.</p>
<p>All plant, tools, and equipment are inspected daily, and any defects are reported immediately so that repairs or replacements can be arranged. Good housekeeping standards are maintained at all times to prevent slips, trips, and other avoidable hazards. A "clean as you go" approach is promoted to ensure work areas remain organised and safe throughout the day. Regular safety tours, walks, etc. are carried out by PCL to verify that safe systems of work are being followed, PPE is being used correctly, and access routes remain clear but not limited to.</p>
<p>Where improvements are identified, they are communicated directly to the workforce and actioned promptly. Training and ongoing competency development are key parts of our approach. All operatives receive instruction relevant to their tasks, along with continuous support to reinforce safe behaviour and encourage personal responsibility. The working culture on site is based on mutual respect and accountability.</p>
<p>Everyone is expected to look after themselves, their colleagues, and the wider working environment. Through careful planning, strong supervision, and clear communication, all work will be completed safely, efficiently, and to the highest standard. Our goal is simple — that every person involved in the project finishes the day in the same condition they started.</p>

<p><strong>5.3 Welfare Arrangements</strong></p>
<p>Welfare arrangements will be provided in accordance with the Construction (Design and Management) Regulations 2015 schedule 2. These welfare facilities will be maintained in a clean and tidy condition throughout the contract. The welfare facilities will be inspected weekly by PCL senior manager or their nominee and any defects or issues reported and subsequently rectified. The welfare facilities will be located within the site compound area in an area that has little or no E conditions.</p>

<p><strong>5.4 Permit to Work Systems</strong></p>
<p>Permits to work systems will be in place for the following construction activities:</p>
<ul>
  <li>Electrical Works</li>
  <li>Works at Height</li>
  <li>Lifting Operations</li>
  <li>Excavation Works</li>
  <li>Works which are classified as being in a confined space as per the definition in The Confined Spaces Regulations 1997 and in line with L101</li>
</ul>
<p><strong>Excavation Works — specific controls:</strong></p>
<p>All excavation activities will be properly planned, managed, and supervised to ensure that the works are carried out safely and without risk to any person. Excavations present significant hazards to both those working within them and those working nearby, and therefore all works will follow a strict sequence of preparation, inspection, and monitoring. All excavation works will be managed under the temporary works process and will be subject to a temporary works design. The extent of the design will be in accordance with company requirements for trenches and excavations and risk posed. No excavation shall commence until a suitable risk assessment and safe system of work have been developed and agreed by PCL. Excavations will be inspected daily by a competent person and after any event that could affect stability, such as heavy rain or vibration. In addition, a formal weekly inspection will be recorded on by PCL. If any sign of ground movement or instability is observed, work will stop immediately, and the area will be made safe before work resumes. Before breaking ground, the area will be scanned for buried services, and all known services will be identified, marked, and protected.</p>
<p>Excavations must be properly supported or battered back to prevent collapse, with the design of support systems confirmed through the temporary works procedure. Any changes to the design, depth, or sequence of work must be reviewed before excavation continues. Edge protection will be installed on all open sides of excavations where a fall could occur. Guard rails and barriers will be located securely to control the on site ground hazards and where plant is operating adjacent to excavations, suitable barriers or stop blocks will be provided to prevent vehicles entering the excavation safe zone. Safe access and egress will be maintained at all times using secured ladders or proprietary stair units extending at least one metre above the landing point. Ladders must be fixed and inspected daily, and used for access only. All entry and exit points must remain clear and unobstructed. Excavated material and equipment will be risk assessed to confirm its storage point away from the edge of the excavation to prevent collapse or materials falling into the trench. Work areas must remain level, firm, and free from slip or trip hazards. Where work is required at the edge of an open excavation, operatives must work from stable ground and make use of trench boxes or working platforms with adequate edge protection.</p>
<p>All lifting operations near excavations will be carried out under a lifting plan, and no outriggers or heavy plant are to be positioned close to excavation edges unless ground stability has been confirmed and adequate support provided. Operatives engaged in excavation works will hold the appropriate Skills card and be briefed on the hazards and control measures before starting work. Personal protective equipment including safety helmets, high-visibility clothing, gloves, and protective footwear must be worn at all times. Where dust or airborne contaminants are present, respiratory protection will be issued and worn. An emergency procedure will be in place to cover potential incidents such as trench collapse, falls, or medical emergencies. Emergency routes must remain clear at all times, and suitable rescue equipment will be available on site.</p>`

};

/* ================================================================
   M&E / DUCTWORK
   Large-scale mechanical and electrical installation projects
   ================================================================ */
window.CPP_TEMPLATES['M&E / Ductwork'] = {

  section2: `<p><strong>2.1 Description of Works</strong></p>
<p>This project comprises the installation of mechanical and electrical services within [ENTER — building type / location]. The principal work packages include:</p>
<ul>
  <li>Ductwork fabrication and installation</li>
  <li>Mechanical plant installation and commissioning</li>
  <li>Electrical containment and cabling</li>
  <li>Pipework fabrication and connections</li>
  <li>Testing, commissioning and system handover</li>
</ul>
<p>All works will be carried out in accordance with approved drawings and specifications, HVCA DW/144, and the relevant building services standards.</p>
<p><em>[Add project-specific scope here — include system types, floors affected, plant room locations, commissioning requirements]</em></p>`,

  section3: `<p><strong>3.1 Permitted Working Hours</strong></p>
<p>Standard working hours: Monday–Friday 07:30–17:30. Saturday by prior arrangement only. No works on Sundays or Bank Holidays without written client approval.</p>
<p>Out-of-hours working (required for hot works, system isolations, or commissioning) must be pre-approved by the building facilities manager and Principal Contractor.</p>

<p><strong>3.2 Existing Services &amp; Building Systems</strong></p>
<p>The building contains existing live mechanical and electrical services. All services must be located and identified before works commence in any area. Permits to work are required for all electrical isolation, hot works, and any works in confined spaces (plant rooms, ceiling voids, risers).</p>
<p>An asbestos R&D survey [has / has not] been carried out. [No ACMs were identified in the work areas / The following ACMs were identified — ENTER DETAILS]. No work will be undertaken that could disturb suspected ACMs without confirmation that the material has been surveyed and cleared.</p>

<p><strong>3.3 Pre-Construction Information</strong></p>
<p>The Pre-Construction Information (PCI) provided by the client and Principal Designer is available in [ENTER — project CDE / site office]. Key documents referenced include: [ENTER — existing services survey, asbestos report, structural assessment, fire strategy].</p>`,

  section4: `<p><strong>4.1 Significant Site Risks</strong></p>
<table class="rte-table">
  <thead><tr><th>Hazard</th><th>Risk</th><th>Key Controls</th></tr></thead>
  <tbody>
    <tr><td>Working at height — ductwork &amp; pipework installation</td><td>Falls from height</td><td>MEWP preferred over ladders, IPAF trained operators, work at height plan</td></tr>
    <tr><td>Live electrical services</td><td>Electrocution</td><td>Permit to work, lockout/tagout, test before touch — all circuits assumed live</td></tr>
    <tr><td>Hot works — welding / brazing / grinding</td><td>Fire or explosion</td><td>Hot works permit, 1-hour fire watch, extinguisher adjacent</td></tr>
    <tr><td>Confined spaces — plant rooms, ceiling voids</td><td>Asphyxiation, engulfment</td><td>Confined space assessment, permit to enter, atmospheric monitoring</td></tr>
    <tr><td>Heavy plant and equipment — lifts</td><td>Dropped load, crush injury</td><td>LOLER lift plan, appointed person, exclusion zone</td></tr>
    <tr><td>Asbestos — disturbing existing fabric</td><td>Asbestos exposure</td><td>R&amp;D survey, stop work if ACMs suspected, licensed contractor for removal</td></tr>
    <tr><td>Manual handling — heavy ductwork / plant</td><td>Musculoskeletal injury</td><td>Manual handling assessment, mechanical aids, two-person lifts</td></tr>
  </tbody>
</table>`,

  section5: `<p><strong>5.1 Key Personnel &amp; Responsibilities</strong></p>
<table class="rte-table">
  <thead><tr><th>Role</th><th>Name</th><th>Contact</th></tr></thead>
  <tbody>
    <tr><td>Contract Manager</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>Site Supervisor</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>H&amp;S Officer</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>First Aider</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>Permit to Work Coordinator</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
  </tbody>
</table>
<p><strong>5.2 Safety Management Approach</strong></p>
<p>Safety on this project is managed through effective planning, clear communication, and a shared commitment from all personnel. A permit to work system governs all high-risk activities including electrical isolation, hot works, and confined space entry. Daily briefings will address planned works, hazards and controls. All personnel have the authority to stop work if unsafe conditions are identified — no one will be criticised for doing so.</p>
<p><strong>5.3 Welfare Arrangements</strong></p>
<p>Welfare facilities will be provided in accordance with CDM 2015 Schedule 2 requirements and maintained in a clean and tidy condition throughout the project. [ENTER welfare facility location].</p>`

};

/* ================================================================
   JOINERY / CARPENTRY
   Large house building and carpentry projects
   ================================================================ */
window.CPP_TEMPLATES['Joinery'] = {

  section2: `<p><strong>2.1 Description of Works</strong></p>
<p>The project comprises joinery and carpentry works for [ENTER — new build residential / commercial / refurbishment] at [ENTER LOCATION]. The principal work packages include:</p>
<ul>
  <li>First fix carpentry — structural timbers, joist hangers, studwork, noggins</li>
  <li>Second fix carpentry — door linings, skirtings, architraves, ironmongery</li>
  <li>Timber frame installation and roof structure</li>
  <li>Staircase installation</li>
  <li>Flooring installation</li>
</ul>
<p>All works will be carried out in accordance with approved drawings, structural engineer's specification, and the contract programme. <em>[Add project-specific scope here]</em></p>`,

  section3: `<p><strong>3.1 Permitted Working Hours</strong></p>
<p>Standard working hours: Monday–Friday 07:30–17:30. Saturday by arrangement. No Sundays or Bank Holidays without written approval.</p>
<p>Noisy operations (saws, nail guns, routers) restricted to [ENTER — 08:00–17:00] to minimise disturbance to neighbours. <em>[Check and enter planning conditions]</em></p>

<p><strong>3.2 Existing Structure &amp; Services</strong></p>
<p>The following existing features must be taken into account before works commence: <em>[Enter — existing structural elements not to be altered without engineer approval; existing service routes through carpentry areas; asbestos details if refurbishment project]</em></p>

<p><strong>3.3 Pre-Construction Information</strong></p>
<p>PCI provided by [ENTER Principal Designer] is available at [ENTER location]. Key referenced documents: structural drawings [ENTER REF], asbestos survey [ENTER REF if applicable], planning permission [ENTER REF].</p>`,

  section4: `<p><strong>4.1 Significant Site Risks</strong></p>
<table class="rte-table">
  <thead><tr><th>Hazard</th><th>Risk</th><th>Key Controls</th></tr></thead>
  <tbody>
    <tr><td>Working at height — roof structure, upper floors</td><td>Falls from height</td><td>Edge protection before work starts at that level, harness during frame erection</td></tr>
    <tr><td>Temporary structural stability</td><td>Collapse before permanent structure complete</td><td>Follow temporary works schedule, no propping removed without engineer sign-off</td></tr>
    <tr><td>Crane / telehandler lifts — roof trusses, heavy beams</td><td>Dropped load, crush injury</td><td>Lift plan, appointed person, trained slinger, exclusion zone</td></tr>
    <tr><td>Wood dust</td><td>Respiratory disease (long-term)</td><td>On-tool extraction, FFP2 minimum when extraction not practicable</td></tr>
    <tr><td>Noise &amp; vibration — power tools</td><td>Hearing damage, HAVS</td><td>HAV assessments, trigger times, job rotation</td></tr>
    <tr><td>Manual handling — heavy timbers</td><td>Musculoskeletal injury</td><td>Two-person minimum for timbers over 20kg, mechanical aids where practicable</td></tr>
  </tbody>
</table>`,

  section5: `<p><strong>5.1 Key Personnel &amp; Responsibilities</strong></p>
<table class="rte-table">
  <thead><tr><th>Role</th><th>Name</th><th>Contact</th></tr></thead>
  <tbody>
    <tr><td>Contract Manager</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>Site Supervisor</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>H&amp;S Officer / AHS Consultant</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>First Aider</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
  </tbody>
</table>
<p><strong>5.2 Safety Management Approach</strong></p>
<p>Safety is managed through careful planning, daily briefings and clear supervision. Works at height are planned and supervised as a priority — edge protection is installed at each level before work commences. All temporary works follow the engineer's schedule and no temporary propping is removed without written confirmation. All operatives are briefed on hazards and controls before starting their activity.</p>
<p><strong>5.3 Welfare Arrangements</strong></p>
<p>Welfare facilities provided in accordance with CDM 2015 Schedule 2. [ENTER welfare facility location and arrangements].</p>`

};

/* ================================================================
   SCAFFOLDING
   ================================================================ */
window.CPP_TEMPLATES['Scaffolding'] = {

  section2: `<p><strong>2.1 Description of Works</strong></p>
<p>The project comprises the erection, adaptation, inspection and dismantling of [ENTER — independent tied scaffold / birdcage / system scaffold / other] at [ENTER LOCATION] to facilitate [ENTER — roofing works / external refurbishment / maintenance / other].</p>
<ul>
  <li>Scaffold erection to [ENTER height and extent]</li>
  <li>Ongoing inspection, adaptation and maintenance during the works period</li>
  <li>Scaffold dismantling on completion of the supported works</li>
</ul>
<p>All scaffolding works will be designed and erected in accordance with TG20:21 or a bespoke structural design where required. <em>[State which applies and reference design document if bespoke]</em></p>`,

  section3: `<p><strong>3.1 Permitted Working Hours</strong></p>
<p>Erection and dismantling: Monday–Friday 07:30–17:30. Saturday by arrangement. No works on Sundays or Bank Holidays without prior approval.</p>
<p>Where the scaffold is over a public highway, all erection and dismantling operations require a local authority licence and must be carried out within the hours specified by that licence. <em>[Enter licence reference and permitted hours]</em></p>

<p><strong>3.2 Existing Services &amp; Obstructions</strong></p>
<p>The following obstructions and services must be taken into account before erection commences: <em>[Enter — overhead power lines and safe distances; existing drainage covers requiring protection; building tie point locations and confirmed capacities; highway features]</em></p>
<p>Where the scaffold is adjacent to overhead power lines, a safe working distance has been confirmed with the DNO and appropriate controls (goal posts / exclusion zone / de-energisation) are in place. <em>[Enter specific arrangement]</em></p>

<p><strong>3.3 Pre-Construction Information</strong></p>
<p>PCI / scaffold design provided by [ENTER]. Referenced documents include: scaffold design / TG20:21 compliance sheet [ENTER REF], ground bearing assessment [ENTER REF], local authority licence [ENTER REF].</p>`,

  section4: `<p><strong>4.1 Significant Site Risks</strong></p>
<table class="rte-table">
  <thead><tr><th>Hazard</th><th>Risk</th><th>Key Controls</th></tr></thead>
  <tbody>
    <tr><td>Falls from height during erection / dismantling</td><td>Fatal or serious injury</td><td>CISRS trained operatives, advance guard rail technique, harness where advance guard rail not practicable</td></tr>
    <tr><td>Falling materials — tools, fittings, boards</td><td>Serious injury to public / workers below</td><td>Exclusion zone maintained, debris nets, hard hat area within scaffold footprint + 6m</td></tr>
    <tr><td>Scaffold over public highway</td><td>Injury to members of the public</td><td>LA licence, lighting inspected nightly, footpath maintained at minimum required width</td></tr>
    <tr><td>Scaffold collapse — overloading or inadequate ties</td><td>Collapse causing multiple casualties</td><td>Appointed person responsible throughout standing period, SWL clearly displayed, tie schedule followed</td></tr>
    <tr><td>Ground bearing failure — sole plates</td><td>Scaffold settlement / collapse</td><td>Ground bearing confirmed before erection, sole plates on all standards</td></tr>
    <tr><td>Adverse weather — high winds</td><td>Collapse or damage during erection</td><td>Wind speed monitoring, erection/dismantling suspended when wind exceeds manufacturer limit</td></tr>
  </tbody>
</table>`,

  section5: `<p><strong>5.1 Key Personnel &amp; Responsibilities</strong></p>
<table class="rte-table">
  <thead><tr><th>Role</th><th>Name</th><th>Contact</th></tr></thead>
  <tbody>
    <tr><td>Contract Manager</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>Appointed Person (Scaffold)</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>H&amp;S Officer / AHS Consultant</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>First Aider</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
  </tbody>
</table>
<p><strong>5.2 Safety Management Approach</strong></p>
<p>An appointed person is responsible for the scaffold throughout its standing period. Weekly scaffold inspections are carried out by a competent person — scaffold tags (green/red) indicate the inspection status and must be visible to all users. Any defects are rectified within 24 hours of identification. All erection and dismantling is supervised by a CISRS Advanced or Part 2 scaffolder.</p>
<p><strong>5.3 Welfare Arrangements</strong></p>
<p>Welfare facilities provided in accordance with CDM 2015 Schedule 2. [ENTER welfare facility location and arrangements].</p>`

};

/* ================================================================
   OFFICE / SURVEYING
   General office H&S and property / land surveying
   ================================================================ */
window.CPP_TEMPLATES['Office / Surveying'] = {

  section2: `<p><strong>2.1 Description of Works</strong></p>
<p>This plan covers [ENTER — office refurbishment / property surveys / land surveys / health and safety consultancy / other] at / for [ENTER CLIENT / LOCATION].</p>
<p>The principal activities include:</p>
<ul>
  <li>[ENTER scope of works or survey activities]</li>
  <li>[ENTER additional activities]</li>
</ul>
<p><em>[Add project-specific description — include whether premises are occupied, survey types, access arrangements, any construction or installation works involved]</em></p>`,

  section3: `<p><strong>3.1 Permitted Working Hours</strong></p>
<p>Standard office / survey hours: Monday–Friday 08:00–17:30. Out-of-hours access to be pre-arranged with building management / property owner. <em>[Enter any specific restrictions]</em></p>

<p><strong>3.2 Existing Building Conditions</strong></p>
<p>The following existing conditions must be taken into account before works or surveys commence: <em>[Enter — ACMs identified in asbestos management survey; fire alarm isolation requirements; access restrictions; condition of structure for survey premises]</em></p>

<p><strong>3.3 Pre-Construction Information</strong></p>
<p>The following documents have been provided / obtained: <em>[Enter — asbestos management survey ref; fire risk assessment ref; building plans ref; any other relevant documents]</em></p>`,

  section4: `<p><strong>4.1 Significant Site Risks</strong></p>
<table class="rte-table">
  <thead><tr><th>Hazard</th><th>Risk</th><th>Key Controls</th></tr></thead>
  <tbody>
    <tr><td>Lone working — remote survey locations</td><td>Injury with no assistance available</td><td>Lone worker check-in system, GPS tracking, buddy system for high-risk surveys</td></tr>
    <tr><td>Falls from height — roof surveys, elevated access</td><td>Fatal or serious injury</td><td>Work at height plan, appropriate access equipment, harness where required</td></tr>
    <tr><td>Unsafe structures — derelict / damaged buildings</td><td>Structural collapse</td><td>Structural assessment before entry, do not enter if unsafe, engineer's sign-off required</td></tr>
    <tr><td>DSE — prolonged computer use</td><td>Musculoskeletal and eye strain</td><td>DSE assessments, regular breaks, ergonomic workstation setup</td></tr>
    <tr><td>Driving — extensive travel between sites</td><td>Road traffic collision</td><td>Driver assessments, journey planning, no hand-held mobile use, rest breaks on long journeys</td></tr>
    <tr><td>Asbestos — surveys in older buildings</td><td>Asbestos fibre inhalation</td><td>Asbestos awareness training, do not disturb suspected ACMs, withdraw and report immediately</td></tr>
  </tbody>
</table>`,

  section5: `<p><strong>5.1 Key Personnel &amp; Responsibilities</strong></p>
<table class="rte-table">
  <thead><tr><th>Role</th><th>Name</th><th>Contact</th></tr></thead>
  <tbody>
    <tr><td>Principal Contact / Manager</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>H&amp;S Officer / AHS Consultant</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>First Aider</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>Lone Worker Emergency Contact</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
  </tbody>
</table>
<p><strong>5.2 Safety Management Approach</strong></p>
<p>All survey activities are planned in advance with site-specific risk assessments completed before attendance. A lone worker check-in procedure is followed by all survey operatives — check in at start and end of each visit with a designated contact. DSE assessments are reviewed annually and whenever workstation arrangements change. All operatives hold current asbestos awareness certificates.</p>
<p><strong>5.3 Welfare Arrangements</strong></p>
<p>Office welfare facilities are maintained in accordance with the Workplace (Health, Safety and Welfare) Regulations 1992. For survey activities, welfare needs are assessed per site visit. [ENTER any site-specific welfare arrangements].</p>`

};


/* ================================================================
   ROOFING
   Flat / pitched / cladding and waterproofing works
   ================================================================ */
window.CPP_TEMPLATES['Roofing'] = {

  section2: `<p><strong>2.1 Description of Works</strong></p>
<p>The project comprises [ENTER — flat roofing / pitched roofing / cladding / waterproofing / roof refurbishment] works at [ENTER LOCATION]. The principal work packages include:</p>
<ul>
  <li>Strip off existing [ENTER — felt / asphalt / tiles / slates / cladding panels]</li>
  <li>Deck inspection, repair and preparation</li>
  <li>Installation of new [ENTER — roof system / covering / insulation]</li>
  <li>Flashings, upstands, edge details and rainwater outlets</li>
  <li>Reinstatement of any disturbed areas and completion of making good</li>
</ul>
<p>All works will be carried out in accordance with approved drawings, the manufacturer's installation specification, and relevant British Standards. <em>[Add project-specific scope including roof area, heights, access method]</em></p>`,

  section3: `<p><strong>3.1 Permitted Working Hours</strong></p>
<p>Standard working hours: Monday–Friday 07:30–17:30. Saturday by arrangement. No works on Sundays or Bank Holidays without written approval. Hot works (torch-applied) restricted to daylight hours only and not within the last 2 hours of the working day.</p>
<p><em>[Check and enter any planning or local authority noise/working hour conditions]</em></p>

<p><strong>3.2 Existing Roof Structure & Services</strong></p>
<p>The existing roof structure has been assessed as [ENTER — structurally sound / requiring repairs as specified]. The following existing services pass through or are located on the roof: <em>[Enter — roof lights, plant, lightning conductors, solar panels, drainage outlets, TV aerials, comms equipment]</em>. All services must be identified and protected before works commence. Any services requiring isolation must be arranged with the building occupier prior to works.</p>
<p>The existing roof covering must be assessed for asbestos-containing materials before any stripping works commence. An asbestos survey [has / has not] been carried out — ref: <em>[Enter ref]</em>.</p>

<p><strong>3.3 Pre-Construction Information</strong></p>
<p>PCI provided by [ENTER Principal Designer] including: structural assessment [ENTER REF], asbestos survey [ENTER REF], roof survey / condition report [ENTER REF], planning permission [ENTER REF].</p>`,

  section4: `<p><strong>4.1 Significant Site Risks</strong></p>
<table class="rte-table">
  <thead><tr><th>Hazard</th><th>Risk</th><th>Key Controls</th></tr></thead>
  <tbody>
    <tr><td>Working at height — on and adjacent to roof edge</td><td>Fatal or serious fall</td><td>Edge protection (guardrails/scaffold) installed before access, no unprotected edge working, harness where edge protection not practicable</td></tr>
    <tr><td>Fragile / deteriorated roof surfaces</td><td>Falls through roof</td><td>Condition assessment before access, crawl boards, no walking on unsupported areas, warnings posted</td></tr>
    <tr><td>Hot works — torch-applied membranes, bitumen</td><td>Fire, burns, explosion</td><td>Hot works permit, fire watch for minimum 1 hour after completion, fire extinguisher adjacent, no hot works near flammables</td></tr>
    <tr><td>Falling objects — onto persons below</td><td>Serious injury to persons below</td><td>Exclusion zone beneath working area, brick guards / fans on scaffold, netting where necessary</td></tr>
    <tr><td>Asbestos — existing roof covering or insulation</td><td>Asbestos fibre inhalation</td><td>R&amp;D survey completed before strip, licensed contractor for notifiable ACMs, PPE/RPE as specified</td></tr>
    <tr><td>Manual handling — heavy boards, rolls, plant</td><td>Musculoskeletal injury</td><td>Mechanical hoists for materials to roof level, two-person lifts over 20kg</td></tr>
    <tr><td>Adverse weather — wind, wet surfaces</td><td>Falls, dropped materials</td><td>Works suspended in winds above safe working limit, wet surfaces treated/signed, weather monitoring</td></tr>
  </tbody>
</table>`,

  section5: `<p><strong>5.1 Key Personnel & Responsibilities</strong></p>
<table class="rte-table">
  <thead><tr><th>Role</th><th>Name</th><th>Contact</th></tr></thead>
  <tbody>
    <tr><td>Contract Manager</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>Site Supervisor / Foreman</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>H&S Officer / AHS Consultant</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>First Aider</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>Hot Works Permit Authoriser</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
  </tbody>
</table>
<p><strong>5.2 Safety Management Approach</strong></p>
<p>All work at height is planned before commencement. Edge protection is installed and inspected before any operative accesses the roof. A hot works permit system is in operation — no torch or flame work without a signed permit, and a minimum 1-hour fire watch is carried out after every hot works session. Works are suspended in adverse weather conditions and the roof is inspected before access each morning.</p>
<p><strong>5.3 Welfare Arrangements</strong></p>
<p>Welfare facilities provided in accordance with CDM 2015 Schedule 2. [ENTER welfare location and arrangements].</p>`
};


/* ================================================================
   DEMOLITION & STRIP OUT
   Soft strip, selective demolition, and full demolition
   ================================================================ */
window.CPP_TEMPLATES['Demolition & Strip Out'] = {

  section2: `<p><strong>2.1 Description of Works</strong></p>
<p>The project comprises [ENTER — soft strip / selective demolition / full demolition / façade retention] at [ENTER LOCATION]. The principal work packages include:</p>
<ul>
  <li>Soft strip — removal of fixtures, fittings, non-structural elements and services</li>
  <li>Asbestos removal works (where identified in the R&D survey)</li>
  <li>[ENTER — selective structural demolition / full demolition to slab / retained façade works]</li>
  <li>Crushing/sorting of arisings and removal from site</li>
  <li>Site clearance and preparation for subsequent construction phase</li>
</ul>
<p>All demolition works will be carried out in accordance with BS 6187:2011 Code of Practice for Full and Partial Demolition, the approved demolition method statement, and structural engineer's requirements. <em>[Add project-specific scope]</em></p>`,

  section3: `<p><strong>3.1 Permitted Working Hours</strong></p>
<p>Standard demolition hours: Monday–Friday 07:30–17:30. Saturday 08:00–13:00 by arrangement. No Sundays or Bank Holidays without written local authority approval. Noisy demolition restricted to <em>[ENTER hours per planning/LA requirement]</em>.</p>

<p><strong>3.2 Existing Services & Structure</strong></p>
<p>All services must be isolated and disconnected at the boundary before any demolition commences. Written confirmation of disconnection must be obtained from each utility provider. The services to be disconnected are: <em>[Enter — gas, electricity, water, telecoms, drainage — include supply reference numbers where known]</em>.</p>
<p>An asbestos R&D survey has been completed — ref: <em>[Enter ref]</em>. ACMs identified require [licensed / non-licensed / notifiable non-licensed] removal prior to any demolition works. ACM removal will be completed by <em>[Enter licensed contractor name]</em> before structural demolition commences.</p>
<p>Structural demolition sequence and temporary works requirements have been specified by the structural engineer — ref: <em>[Enter ref]</em>. No deviation from the approved sequence without written engineer approval.</p>

<p><strong>3.3 Pre-Construction Information</strong></p>
<p>PCI including: structural engineer's demolition design [ENTER REF], asbestos R&D survey [ENTER REF], services disconnection certificates [to be obtained], ecology survey [ENTER REF if applicable], planning permission and conditions [ENTER REF].</p>`,

  section4: `<p><strong>4.1 Significant Site Risks</strong></p>
<table class="rte-table">
  <thead><tr><th>Hazard</th><th>Risk</th><th>Key Controls</th></tr></thead>
  <tbody>
    <tr><td>Asbestos — soft strip and structural demolition</td><td>Asbestos fibre inhalation — mesothelioma, lung cancer</td><td>R&amp;D survey completed, licensed removal before demolition, air monitoring, RPE, notifiable works notified to HSE</td></tr>
    <tr><td>Unplanned structural collapse</td><td>Fatal or serious injury — burial</td><td>Structural engineer's approved demolition sequence, temporary propping where required, exclusion zones, no deviation without engineer sign-off</td></tr>
    <tr><td>Live services — residual risk after disconnection</td><td>Electrocution, explosion, flooding</td><td>Written confirmation of disconnection before works, treat all services as live until confirmed dead, permit to work</td></tr>
    <tr><td>Dust — silica, wood dust, general demolition dust</td><td>Respiratory disease (silicosis, COPD)</td><td>Damping down, on-tool extraction, RPE (FFP3), dust monitoring, site boundary screening</td></tr>
    <tr><td>Falling objects and debris</td><td>Serious injury to workers and public</td><td>Exclusion zones, hoarding, scaffold fans/brick guards, hard hat area, debris netting</td></tr>
    <tr><td>Plant — excavators, crushers, high-reach machines</td><td>Collision, crush, overturning</td><td>Traffic management, segregation, banksman, structural assessment of ground before plant positioning</td></tr>
    <tr><td>Contaminated ground / materials</td><td>Occupational ill health, environmental pollution</td><td>Ground investigation report reviewed, COSHH assessments, waste transfer notes, licensed waste contractor</td></tr>
  </tbody>
</table>`,

  section5: `<p><strong>5.1 Key Personnel & Responsibilities</strong></p>
<table class="rte-table">
  <thead><tr><th>Role</th><th>Name</th><th>Contact</th></tr></thead>
  <tbody>
    <tr><td>Contract Manager</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>Site Manager / Supervisor</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>Structural Engineer (Demolition Design)</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>Asbestos Licensed Contractor</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>H&S Officer / AHS Consultant</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>First Aider</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
  </tbody>
</table>
<p><strong>5.2 Safety Management Approach</strong></p>
<p>Demolition works are among the highest-risk construction activities. No structural demolition commences without the structural engineer's approved sequence in place and all services confirmed disconnected in writing. Asbestos removal is completed and clearance certificates obtained before any structural demolition. The approved demolition sequence is briefed to all operatives before works start and is not deviated from. A competent person inspects the structure at the start of each shift and after any event that could affect stability.</p>
<p><strong>5.3 Welfare Arrangements</strong></p>
<p>Welfare facilities provided in accordance with CDM 2015 Schedule 2. [ENTER welfare location and arrangements].</p>`
};


/* ================================================================
   BRICKWORK & MASONRY
   New build blockwork, brickwork, stonework and masonry
   ================================================================ */
window.CPP_TEMPLATES['Brickwork & Masonry'] = {

  section2: `<p><strong>2.1 Description of Works</strong></p>
<p>The project comprises [ENTER — new build brickwork / blockwork / stonework / masonry repairs / repointing] at [ENTER LOCATION]. The principal work packages include:</p>
<ul>
  <li>Foundation blockwork and substructure masonry</li>
  <li>External brickwork / blockwork cavity wall construction</li>
  <li>Internal blockwork partitions and separating walls</li>
  <li>[ENTER — stonework / decorative brickwork / feature panels] as specified</li>
  <li>Lintels, cavity closers, wall ties and insulation installation</li>
</ul>
<p>All masonry works will be carried out in accordance with approved drawings, BS EN 1996 (Eurocode 6), and the structural engineer's specification. <em>[Add project-specific scope]</em></p>`,

  section3: `<p><strong>3.1 Permitted Working Hours</strong></p>
<p>Standard working hours: Monday–Friday 07:30–17:30. Saturday by arrangement. No Sundays or Bank Holidays without written approval. <em>[Check and enter any planning conditions relating to hours]</em></p>

<p><strong>3.2 Existing Structure & Services</strong></p>
<p>The following existing features must be taken into account: <em>[Enter — existing structural elements not to be removed without engineer approval; existing services routes in masonry walls; any party wall awards; proximity to neighbouring structures]</em>.</p>
<p>Where works are in proximity to existing structures, a party wall agreement [has / has not] been entered into with the affected owners. Ref: <em>[Enter ref]</em>.</p>

<p><strong>3.3 Pre-Construction Information</strong></p>
<p>PCI including: structural drawings and specification [ENTER REF], ground investigation report [ENTER REF], party wall award [ENTER REF if applicable], planning permission and conditions [ENTER REF].</p>`,

  section4: `<p><strong>4.1 Significant Site Risks</strong></p>
<table class="rte-table">
  <thead><tr><th>Hazard</th><th>Risk</th><th>Key Controls</th></tr></thead>
  <tbody>
    <tr><td>Working at height — scaffold, working platforms</td><td>Falls from height</td><td>Scaffold erected to TG20:21, fully boarded, double guard rails, inspected weekly</td></tr>
    <tr><td>Cement / mortar — skin and eye burns</td><td>Dermatitis, chemical burns, eye injury</td><td>Nitrile gloves, eye protection, barrier cream, welfare with running water adjacent</td></tr>
    <tr><td>Silica dust — cutting, grinding, mixing</td><td>Silicosis — irreversible lung disease</td><td>Wet cutting only, on-tool extraction, FFP3 RPE when dusty, no dry brushing of dried mortar</td></tr>
    <tr><td>Manual handling — bricks, blocks, lintels</td><td>Musculoskeletal injury</td><td>Mechanical offloading for palleted deliveries, two-person lifts for items over 20kg, lightweight blocks specified where possible</td></tr>
    <tr><td>Falling objects — bricks, tools, materials</td><td>Serious injury to workers below</td><td>Brick guards on scaffold, toe boards, hard hat area, clear exclusion zone at scaffold base</td></tr>
    <tr><td>Scaffold overloading</td><td>Scaffold collapse</td><td>SWL clearly marked, do not exceed load limits, appointed person to monitor</td></tr>
    <tr><td>Adverse weather — frost, high winds</td><td>Compromise of structural integrity, falls</td><td>Protect fresh brickwork from frost (minimum +3°C), work suspended in high winds, morning inspection after adverse weather</td></tr>
  </tbody>
</table>`,

  section5: `<p><strong>5.1 Key Personnel & Responsibilities</strong></p>
<table class="rte-table">
  <thead><tr><th>Role</th><th>Name</th><th>Contact</th></tr></thead>
  <tbody>
    <tr><td>Contract Manager</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>Site Supervisor / Foreman</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>H&S Officer / AHS Consultant</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>First Aider</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
  </tbody>
</table>
<p><strong>5.2 Safety Management Approach</strong></p>
<p>Scaffold is erected to TG20:21 and inspected weekly by a competent person. No masonry works commence at height until scaffold inspection is current and tag is green. COSHH assessments for cement and mortar are briefed to all operatives at induction. Silica dust controls (wet cutting/on-tool extraction) are mandatory — no dry cutting of masonry. Fresh brickwork is protected from frost damage — works suspended when temperature falls below +3°C during or after laying.</p>
<p><strong>5.3 Welfare Arrangements</strong></p>
<p>Welfare facilities provided in accordance with CDM 2015 Schedule 2. Running water adjacent to mortar mixing areas for skin washing. [ENTER welfare location].</p>`
};


/* ================================================================
   FIT-OUT & REFURBISHMENT
   Internal fit-out, commercial and residential refurbishment
   ================================================================ */
window.CPP_TEMPLATES['Fit-Out & Refurbishment'] = {

  section2: `<p><strong>2.1 Description of Works</strong></p>
<p>The project comprises [ENTER — commercial fit-out / residential refurbishment / office refit / retail fit-out / healthcare refurbishment] at [ENTER LOCATION]. The building [is / is not] occupied during the works. The principal work packages include:</p>
<ul>
  <li>Soft strip — removal of existing fixtures, fittings, partitions and finishes</li>
  <li>Structural alterations — <em>[Enter — new openings, lintels, beams, column removals]</em></li>
  <li>First fix M&E — electrical containment, cabling, mechanical services rough-in</li>
  <li>Partitions, ceilings, floors and wall linings</li>
  <li>Second fix M&E, joinery, finishes, fixtures and fittings</li>
  <li>Decoration and final clean</li>
</ul>
<p>All works will be carried out in accordance with approved drawings, specifications, and the CDM 2015 regulations. <em>[Add project-specific scope]</em></p>`,

  section3: `<p><strong>3.1 Permitted Working Hours</strong></p>
<p>Standard working hours: Monday–Friday 07:30–17:30. Saturday by arrangement. <em>[If building is occupied, enter any restrictions — e.g. no noisy works during business hours, access restrictions, lift restrictions, car park access]</em></p>
<p>Where the building is occupied, daily coordination with the building facilities manager is required. All works affecting shared building systems (fire alarms, power, lifts, security) must be notified and agreed in advance.</p>

<p><strong>3.2 Existing Building & Services</strong></p>
<p>An asbestos R&D survey has been completed — ref: <em>[Enter ref]</em>. <em>[No ACMs identified / ACMs identified in the following locations — enter details]</em>. No work will disturb suspected ACMs without clearance.</p>
<p>Existing services within the refurbishment zone include: <em>[Enter — electrical circuits, heating/cooling, water, gas, data/telecoms, fire alarm/suppression]</em>. All services requiring isolation must be arranged with the facilities manager and confirmed by permit before works commence.</p>

<p><strong>3.3 Pre-Construction Information</strong></p>
<p>PCI including: asbestos R&D survey [ENTER REF], structural engineer's drawings for structural alterations [ENTER REF], existing M&E services survey [ENTER REF], fire strategy [ENTER REF], building regulations approval [ENTER REF].</p>`,

  section4: `<p><strong>4.1 Significant Site Risks</strong></p>
<table class="rte-table">
  <thead><tr><th>Hazard</th><th>Risk</th><th>Key Controls</th></tr></thead>
  <tbody>
    <tr><td>Asbestos — soft strip, drilling, cutting existing fabric</td><td>Asbestos fibre inhalation</td><td>R&amp;D survey, stop work if ACMs suspected, licensed contractor for notifiable works</td></tr>
    <tr><td>Structural alterations — new openings, beam removals</td><td>Structural collapse</td><td>Structural engineer's specification, temporary propping before removal, no deviation without sign-off</td></tr>
    <tr><td>Live services — electrical, gas, water</td><td>Electrocution, explosion, flooding</td><td>Permit to work, isolations confirmed before any work, test before touch</td></tr>
    <tr><td>Working at height — ceilings, high-level services, mezzanines</td><td>Falls from height</td><td>MEWP or podium steps preferred, ladders for access only, work at height plan</td></tr>
    <tr><td>Occupied building — interface with building users</td><td>Injury to occupants, theft, reputational damage</td><td>Daily liaison with FM, physical separation from occupied areas (hoarding), ID badges for all operatives, no access outside agreed areas</td></tr>
    <tr><td>Dust — plasterboard, MDF, silica</td><td>Respiratory disease</td><td>On-tool extraction, damping down, RPE, area sealed from occupied zones</td></tr>
    <tr><td>Fire — hot works, flammable finishes and materials</td><td>Fire in occupied building</td><td>Hot works permit, fire alarm isolation procedure, fire watch, fire extinguisher adjacent, flammables stored correctly</td></tr>
  </tbody>
</table>`,

  section5: `<p><strong>5.1 Key Personnel & Responsibilities</strong></p>
<table class="rte-table">
  <thead><tr><th>Role</th><th>Name</th><th>Contact</th></tr></thead>
  <tbody>
    <tr><td>Contract Manager</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>Site Manager / Supervisor</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>Building Facilities Manager (Client)</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>H&S Officer / AHS Consultant</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>First Aider</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>Permit to Work Coordinator</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
  </tbody>
</table>
<p><strong>5.2 Safety Management Approach</strong></p>
<p>Daily liaison with the building facilities manager ensures that all planned works, isolations and access restrictions are agreed before each day starts. A permit to work system governs all electrical isolations, hot works and structural alterations. The interface between the works zone and occupied areas is managed through physical hoarding, controlled access points and daily checks. All operatives carry ID badges and may only access agreed areas. Any unexpected discovery of ACMs results in immediate work stoppage.</p>
<p><strong>5.3 Welfare Arrangements</strong></p>
<p>Welfare facilities provided in accordance with CDM 2015 Schedule 2. [ENTER welfare location — note whether building facilities can be used or separate provision is required].</p>`
};


/* ================================================================
   STRUCTURAL STEELWORK
   Steel frame erection, fabrication and installation
   ================================================================ */
window.CPP_TEMPLATES['Structural Steelwork'] = {

  section2: `<p><strong>2.1 Description of Works</strong></p>
<p>The project comprises [ENTER — new steel frame erection / steel extensions / structural steel alterations / mezzanine installation] at [ENTER LOCATION]. The principal work packages include:</p>
<ul>
  <li>Foundation preparation and base plate installation</li>
  <li>Steel frame erection — columns, primary and secondary beams</li>
  <li>[ENTER — portal frame / multi-storey frame / mezzanine / steel extensions]</li>
  <li>Purlins, sheeting rails and bracing</li>
  <li>Metal deck flooring / roof deck (where applicable)</li>
  <li>Connections, bolt tightening and inspection</li>
</ul>
<p>All steelwork will be designed, fabricated and erected in accordance with BS EN 1993 (Eurocode 3), the structural engineer's specification, and the National Structural Steelwork Specification (NSSS). <em>[Add project-specific scope]</em></p>`,

  section3: `<p><strong>3.1 Permitted Working Hours</strong></p>
<p>Steel erection: Monday–Friday 07:30–17:30. Saturday by arrangement. Crane operations require advance notice to the Principal Contractor and may be subject to local authority approval for highway crane positions.</p>
<p>No erection works in winds exceeding the crane manufacturer's rated limit or Beaufort Scale Force 6 (approximately 25mph) — whichever is lower. Morning site inspection after adverse weather before works resume.</p>

<p><strong>3.2 Existing Structure & Ground Conditions</strong></p>
<p>Ground conditions and foundation design confirmed by structural engineer — ref: <em>[Enter ref]</em>. Base plates and holding-down bolts cast into foundations by others — checked and approved before steel delivery. Existing structure to be retained/tied into: <em>[Enter details or N/A]</em>.</p>

<p><strong>3.3 Pre-Construction Information</strong></p>
<p>PCI including: structural engineer's design and connection details [ENTER REF], ground investigation report [ENTER REF], crane position structural assessment [ENTER REF], planning permission [ENTER REF], building regulations approval [ENTER REF].</p>`,

  section4: `<p><strong>4.1 Significant Site Risks</strong></p>
<table class="rte-table">
  <thead><tr><th>Hazard</th><th>Risk</th><th>Key Controls</th></tr></thead>
  <tbody>
    <tr><td>Working at height — frame erection, metal deck installation</td><td>Fatal or serious fall</td><td>Fall arrest harnesses during erection before permanent edge protection in place, safety nets under deck installation, advance guard rail systems</td></tr>
    <tr><td>Crane lifts — structural steel members</td><td>Dropped load, crane overturning, structural collapse</td><td>Appointed person, LOLER lift plans for all lifts, exclusion zone, ground bearing confirmed, outrigger pads, trained slinger/banksman</td></tr>
    <tr><td>Structural instability — during erection before frame is complete</td><td>Partial or full collapse</td><td>Erection sequence follows structural engineer's approved scheme, temporary bracing installed as per design, not removed until frame is stable</td></tr>
    <tr><td>Hot works — welding, cutting, grinding</td><td>Fire, explosion, UV eye damage, fume inhalation</td><td>Hot works permit, fire watch, screens, welding fume RPE (minimum FFP3 + powered where confined), eye protection</td></tr>
    <tr><td>Adjacent public / highway — crane operations</td><td>Injury to public, traffic disruption</td><td>LA licence for crane on highway, banksman, traffic management, crane movement times agreed</td></tr>
    <tr><td>Manual handling — heavy connections, tools, plates</td><td>Musculoskeletal injury</td><td>Mechanical handling aids, two-person minimum for items over 20kg at height</td></tr>
  </tbody>
</table>`,

  section5: `<p><strong>5.1 Key Personnel & Responsibilities</strong></p>
<table class="rte-table">
  <thead><tr><th>Role</th><th>Name</th><th>Contact</th></tr></thead>
  <tbody>
    <tr><td>Contract Manager</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>Site Supervisor / Erection Foreman</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>Appointed Person (Lifting)</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>Structural Engineer</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>H&S Officer / AHS Consultant</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>First Aider</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
  </tbody>
</table>
<p><strong>5.2 Safety Management Approach</strong></p>
<p>Steel erection is one of the highest-risk phases of construction. An approved person is responsible for all lifting operations. Every lift has a lift plan reviewed before it commences. The erection sequence is followed precisely — no temporary bracing is removed until the structural engineer confirms the frame is stable at that stage. Fall arrest harnesses with appropriate anchor points are worn during erection until permanent edge protection is in place. Works are suspended in adverse wind conditions.</p>
<p><strong>5.3 Welfare Arrangements</strong></p>
<p>Welfare facilities provided in accordance with CDM 2015 Schedule 2. [ENTER welfare location and arrangements].</p>`
};


/* ================================================================
   HIGHWAYS & CIVIL WORKS
   Road works, drainage, utilities, public realm
   ================================================================ */
window.CPP_TEMPLATES['Highways & Civil Works'] = {

  section2: `<p><strong>2.1 Description of Works</strong></p>
<p>The project comprises [ENTER — highway improvement works / road resurfacing / drainage / public realm / utility installation / Section 278 / Section 38 / Section 104 works] at [ENTER LOCATION]. The principal work packages include:</p>
<ul>
  <li>[ENTER — carriageway reconstruction / resurfacing / footway works]</li>
  <li>[ENTER — surface water and foul drainage installation]</li>
  <li>[ENTER — kerbing, ironwork, road markings, signing]</li>
  <li>Traffic management installation, maintenance and removal</li>
  <li>Reinstatement and making good of all disturbed surfaces</li>
</ul>
<p>All highway works will be carried out in accordance with the Specification for Highway Works (Manual of Contract Documents for Highway Works — MCHW), the New Roads and Street Works Act 1991 (NRSWA), Chapter 8 Traffic Signs Manual, and local authority requirements. <em>[Add project-specific scope]</em></p>`,

  section3: `<p><strong>3.1 Permitted Working Hours</strong></p>
<p>Working hours are subject to local authority licence conditions: <em>[Enter — day works / overnight works / weekend working / school exclusion zones / market day restrictions]</em>.</p>
<p>All highway works require a Street Works licence / S278 agreement — ref: <em>[Enter ref]</em>. No works on the public highway without a valid licence and traffic management installed per the approved Chapter 8 scheme.</p>

<p><strong>3.2 Existing Services & Highway Infrastructure</strong></p>
<p>Utility records obtained from all utilities. A full CAT & Genny scan will be carried out before any breaking of the highway surface. Known services in the works zone: <em>[Enter — gas, electric, water, telecoms, drainage — depths where known]</em>.</p>
<p>All utility works will comply with NRSWA 1991 and the New Roads and Street Works (Qualifications of Supervisors and Operatives) Regulations 2009 (SROH). Operatives must hold current NRSWA cards for their relevant discipline.</p>

<p><strong>3.3 Pre-Construction Information</strong></p>
<p>PCI including: utility records and searches [ENTER REF], Chapter 8 traffic management scheme [ENTER REF], Section 278/38/104 agreement [ENTER REF], street works licence [ENTER REF], planning permission and conditions [ENTER REF].</p>`,

  section4: `<p><strong>4.1 Significant Site Risks</strong></p>
<table class="rte-table">
  <thead><tr><th>Hazard</th><th>Risk</th><th>Key Controls</th></tr></thead>
  <tbody>
    <tr><td>Live traffic — vehicles striking workers</td><td>Fatal or serious injury</td><td>Chapter 8 traffic management installed and maintained, safety zones, PPE (high-viz class 3), no working outside TM without approval</td></tr>
    <tr><td>Underground service strikes</td><td>Electrocution, explosion, flooding</td><td>CAT &amp; Genny scan, utility records, hand dig within 500mm, NRSWA trained operatives, permit to work</td></tr>
    <tr><td>Excavations in highway — collapse</td><td>Burial, injury</td><td>Temporary works design, shoring, no entry without assessment, inspected daily</td></tr>
    <tr><td>Plant and vehicle movements — public interface</td><td>Collision with pedestrians, cyclists</td><td>Traffic management, banksman, segregated pedestrian routes maintained, 5mph site limit</td></tr>
    <tr><td>Asphalt / hot materials — bitumen burns</td><td>Severe burns</td><td>PPE (heat-resistant gloves, gaiters), no standing downhill of delivery, COSHH for bitumen fumes, RPE</td></tr>
    <tr><td>Noise and vibration — breaking, compaction</td><td>Complaints, HAVS, hearing damage</td><td>Working hours per licence, HAV assessments, trigger times, job rotation, community notification</td></tr>
    <tr><td>Pedestrians and cyclists — diversion management</td><td>Injury to members of the public</td><td>Agreed pedestrian diversion routes, clear signage, tactile paving maintained, lighting after dark</td></tr>
  </tbody>
</table>`,

  section5: `<p><strong>5.1 Key Personnel & Responsibilities</strong></p>
<table class="rte-table">
  <thead><tr><th>Role</th><th>Name</th><th>Contact</th></tr></thead>
  <tbody>
    <tr><td>Contract Manager</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>Site Supervisor (NRSWA qualified)</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>Traffic Management Supervisor</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>H&S Officer / AHS Consultant</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>First Aider</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>Local Authority Street Works Contact</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
  </tbody>
</table>
<p><strong>5.2 Safety Management Approach</strong></p>
<p>Traffic management is installed, inspected and signed off before any operative enters the working zone on the public highway. No works commence without a valid street works licence. All operatives hold current NRSWA cards for their discipline. A CAT & Genny scan is completed before any breaking of the highway surface and results recorded. Works are coordinated daily with the local authority street works coordinator. Any deviation from the approved TM scheme requires prior approval.</p>
<p><strong>5.3 Welfare Arrangements</strong></p>
<p>Welfare facilities provided in accordance with CDM 2015 Schedule 2. For linear highway works, welfare provision is reviewed per work location. [ENTER welfare arrangements].</p>`
};


/* ================================================================
   PILING & FOUNDATIONS
   Driven, bored, CFA and specialist foundation works
   ================================================================ */
window.CPP_TEMPLATES['Piling & Foundations'] = {

  section2: `<p><strong>2.1 Description of Works</strong></p>
<p>The project comprises [ENTER — CFA piling / driven piling / bored piling / mini-piling / ground improvement / raft foundations / pad foundations] at [ENTER LOCATION]. The principal work packages include:</p>
<ul>
  <li>Setting out and establishment of pile positions</li>
  <li>[ENTER — CFA / driven / bored piling to structural engineer's design]</li>
  <li>Pile cap excavation, reinforcement and concrete</li>
  <li>Ground beams and blinding concrete</li>
  <li>Proof load testing and pile integrity testing (where specified)</li>
</ul>
<p>All piling works will be carried out in accordance with BS EN 1997 (Eurocode 7), the structural engineer's specification, and the Piling and Embedded Retaining Walls technical guidance. <em>[Add project-specific scope]</em></p>`,

  section3: `<p><strong>3.1 Permitted Working Hours</strong></p>
<p>Piling works can generate significant noise and vibration. Working hours: Monday–Friday 07:30–17:30. <em>[Check local authority planning conditions — piling hours are often specifically restricted]</em>.</p>
<p>Minimum mobilisation period for piling rig setup, welfare and compound: <em>[Enter]</em> days. No piling commences until the local authority and client have approved programme and method statement.</p>

<p><strong>3.2 Existing Services & Ground Conditions</strong></p>
<p>A full CAT & Genny scan and utility searches have been completed — ref: <em>[Enter ref]</em>. All services within the piling zone must be identified, located by potholing, and either diverted or confirmed at sufficient depth before any piling commences.</p>
<p>Ground investigation report — ref: <em>[Enter ref]</em>. Key findings: <em>[Enter — ground type, water table depth, contamination, obstructions, SPT results relevant to pile design]</em>.</p>
<p>Contaminated ground: <em>[Enter — contamination risk assessment completed / no contamination identified / controlled waste handling procedures required]</em>.</p>

<p><strong>3.3 Pre-Construction Information</strong></p>
<p>PCI including: ground investigation report [ENTER REF], piling design and specification [ENTER REF], utility searches and CAT results [ENTER REF], contamination risk assessment [ENTER REF if applicable], planning permission and conditions [ENTER REF].</p>`,

  section4: `<p><strong>4.1 Significant Site Risks</strong></p>
<table class="rte-table">
  <thead><tr><th>Hazard</th><th>Risk</th><th>Key Controls</th></tr></thead>
  <tbody>
    <tr><td>Underground service strikes during piling</td><td>Electrocution, explosion, flooding</td><td>Full utility searches, CAT &amp; Genny, potholing to confirm depth/location, hand dig near services, permit to work</td></tr>
    <tr><td>Piling rig overturning</td><td>Crush injury or fatality, structural damage</td><td>Ground bearing assessment before rig positioning, rig manufacturer's bearing pressure requirements, exclusion zone during operations</td></tr>
    <tr><td>Piling rig — working at height / moving parts</td><td>Falls, entanglement, struck-by</td><td>Exclusion zone equal to rig height, no access to exclusion zone during drilling/driving, trained and competent operators</td></tr>
    <tr><td>Contaminated spoil — arisings from piling</td><td>Skin/respiratory exposure, environmental pollution</td><td>COSHH assessment, PPE/RPE as specified, contaminated arisings segregated and disposed via licensed waste contractor</td></tr>
    <tr><td>Noise and vibration — driven piling</td><td>Hearing damage, HAVS, nuisance</td><td>Noise monitoring at site boundary, community notification, working hours per planning conditions, CFA preferred over driven where practicable</td></tr>
    <tr><td>Concrete works — cement burns</td><td>Dermatitis, chemical burns</td><td>Gloves, eye protection, welfare with running water, COSHH briefing for all concrete workers</td></tr>
    <tr><td>Excavations for pile caps</td><td>Collapse, falls</td><td>Temporary works design, shoring as required, edge protection, no unsupported entry</td></tr>
  </tbody>
</table>`,

  section5: `<p><strong>5.1 Key Personnel & Responsibilities</strong></p>
<table class="rte-table">
  <thead><tr><th>Role</th><th>Name</th><th>Contact</th></tr></thead>
  <tbody>
    <tr><td>Contract Manager</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>Piling Supervisor / Rig Operator</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>Structural / Geotechnical Engineer</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>H&S Officer / AHS Consultant</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
    <tr><td>First Aider</td><td contenteditable="true">Enter name</td><td contenteditable="true">Enter number</td></tr>
  </tbody>
</table>
<p><strong>5.2 Safety Management Approach</strong></p>
<p>No piling rig operates without a ground bearing assessment confirming the ground can support the rig's rated bearing pressure. An exclusion zone equal to the rig height is maintained at all times during drilling or driving operations. All service locations are confirmed by potholing before any piling in proximity to utilities. Contaminated arisings are segregated immediately and handled per the COSHH assessment. The structural engineer is notified of any ground conditions that differ from the GI report before piling continues.</p>
<p><strong>5.3 Welfare Arrangements</strong></p>
<p>Welfare facilities provided in accordance with CDM 2015 Schedule 2. Running water adjacent to concrete works for skin washing. [ENTER welfare location and arrangements].</p>`
};
