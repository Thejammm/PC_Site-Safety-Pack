/* =================================================================
   snippetsramstemplates.js — RAMS Cover Page Templates
   AHS Compliance Consulting

   HOW TO USE:
   - Each entry in window.RAMS_TEMPLATES is a named trade/activity type
   - Select from the "— RAMS type —" dropdown and click 📋 Load RAMS
   - Sections 2-8 and 11-14 are populated from the template
   - Section 10 (Emergency Contacts) is always the same — filled from cpp-content.js

   HOW TO EDIT:
   - Open this file, find the trade type, edit the HTML string
   - To add a new trade: copy any block, rename the key, update content
   - Changes take effect on next page load — no rebuild needed

   CONTENT RULES (avoids the white-space/formatting issues):
   - No leading \n after opening backtick
   - Use <p>, <ul>, <li>, <table> — no raw newlines for spacing
   - Tables use class="rte-table" for consistent styling
   - All content is injected into a contenteditable div — fully editable in UI
   ================================================================= */
'use strict';

window.RAMS_TEMPLATES = window.RAMS_TEMPLATES || {};

/* ================================================================
   GROUNDWORKS
   Based on The Woodlands, Hessle — Prestons Construction Ltd
   ================================================================ */
window.RAMS_TEMPLATES['Groundworks'] = {

  section2: `<p><strong>2.1 Project Overview</strong></p>
<p>The project comprises the construction of a new build residential development. [CONTRACTOR NAME] has been appointed to undertake the groundworks and external works package within a live, Principal Contractor–controlled construction environment. The development includes multiple housing plots requiring coordinated substructure works, below-ground drainage, adoptable roads and sewers, and associated external finishes. Works will be carried out in a residential area adjacent to live highways, requiring controlled traffic management, phased sequencing, and close coordination with other trades to ensure safe, efficient delivery in line with the Construction Phase Plan and project programme.</p>
<p><strong>2.2 Location Overview</strong></p>
<p>The works are being undertaken at [ENTER SITE ADDRESS]. The site is situated within [ENTER — residential area / commercial development / greenfield site] and is accessed directly from [ENTER ACCESS ROUTE]. Construction activities will take place within a Principal Contractor–controlled site boundary, with defined access and egress points. Due to the proximity of [ENTER — existing properties / live traffic routes / utilities], careful management of deliveries, plant movements, noise, dust and public interface will be required throughout the duration of the works.</p>`,

  section3: `<p><strong>3.1 Specific to the Site</strong></p>
<p>The project is located [ENTER SITE DESCRIPTION — e.g. within an established residential area, with direct access from a live public highway]. The works are undertaken within a Principal Contractor–controlled site boundary where multiple trades will be operating concurrently. Due to the proximity of neighbouring properties and public interfaces, strict control of noise, dust, working hours and vehicle movements is required. A two-stage permit-to-work system applies to groundworks activities, including a Permit to Break Ground to identify underground services and a Permit to Excavate prior to commencement of excavation. Dewatering operations are subject to a controlled process and require a Permit to Discharge where applicable.</p>
<p><strong>3.2 Principal Contractor's Conditions</strong></p>
<p>[CONTRACTOR NAME] will operate under the direction and coordination of the Principal Contractor and will comply fully with the Construction Phase Plan (CPP), site inductions, permit systems and traffic management arrangements. All works will be planned, managed and monitored in accordance with CDM 2015 and the Principal Contractor's procedures. Daily coordination meetings will be attended where required to ensure safe sequencing of works, effective segregation of plant and pedestrians, and integration with other contractors. Any changes to scope, sequence or site conditions will be communicated to and agreed with the Principal Contractor prior to implementation.</p>
<p><strong>3.3 PPE Requirements</strong></p>
<p>As a minimum, all operatives will wear hard hats, high-visibility clothing and safety footwear compliant with relevant BS/EN standards. Additional PPE such as gloves, eye protection, hearing protection and respiratory protective equipment will be worn as required by task-specific risk assessments, COSHH assessments and exposure monitoring. Face-fit testing will be carried out where tight-fitting RPE is required. PPE compliance will be monitored daily by site supervision and any defective or non-compliant equipment will be replaced immediately.</p>
<p><strong>3.4 Site Rules &amp; Compliance</strong></p>
<p>All operatives and visitors must attend a site induction prior to commencing work and comply with the Principal Contractor's site rules at all times. This includes adherence to speed limits, traffic routes, exclusion zones, permit-to-work systems and designated welfare arrangements. Alcohol and drugs are strictly prohibited on site. Good housekeeping standards will be maintained to prevent slips, trips and fire risks. Any unsafe acts, unsafe conditions, near misses or incidents must be reported immediately to site management. Works will be carried out in accordance with approved RAMS, permits and relevant UK health and safety legislation.</p>
<p><strong>3.5 Site Access &amp; Delivery Requirements</strong></p>
<p>Site access will be via the designated entrance and will operate under the Principal Contractor's traffic management plan. All deliveries must be pre-booked and coordinated with site management to avoid congestion and conflict with other trades. Delivery drivers must report to the site office, receive instructions and comply with site rules before unloading. Banksmen will be used for reversing or manoeuvring within the site. Vehicles must adhere to the site speed limit and pedestrian and plant segregation must be maintained at all times.</p>`,

  section4: `<p><strong>4.1 Delivery &amp; Storage of Materials</strong></p>
<p>All deliveries will be pre-arranged and coordinated with the Principal Contractor to ensure safe access and avoid congestion within the site. Delivery vehicles will report to the designated site access point and follow the approved traffic management plan. Banksmen will be used for reversing or manoeuvring where required. Materials will be unloaded in designated laydown areas only and stored on firm, level ground to prevent instability. Hazardous substances such as fuels, oils and cement-based products will be stored in appropriately bunded or protected areas in accordance with COSHH requirements. Storage arrangements will ensure materials do not obstruct access routes, emergency exits or pedestrian walkways.</p>
<p><strong>4.2 Working Areas</strong></p>
<p>Working areas will be clearly defined, segregated and maintained in a safe condition throughout the duration of the works. Exclusion zones will be established around excavations, plant operations and lifting activities. Safe access and egress routes will be maintained at all times, with physical barriers and signage used where necessary to separate pedestrians from plant and vehicle movements. Daily inspections will be undertaken to ensure ground conditions remain suitable for plant operations and that housekeeping standards are maintained to minimise slips, trips and other hazards.</p>
<p><strong>4.3 Construction / Sequence of Works</strong></p>
<p>Included in the work package plan are the following works that will be undertaken and managed through a method statement and risk assessment:</p>
<ul>
  <li>Site Secure / Welfare Setup</li>
  <li>Earthworks and bulk excavation</li>
  <li>Surface Water Drainage</li>
  <li>Foul Water Drainage</li>
  <li>Road construction and S278 works</li>
  <li>Excavate foundations and concrete</li>
  <li>Masonry to DPC</li>
  <li>Ground Floor Slab</li>
  <li>Plot drainage, topsoils, drives and surfacing</li>
  <li>Main services and pits</li>
</ul>
<p><strong>4.4 Decanting of On-Site Plant &amp; Equipment</strong></p>
<p>The movement or decanting of plant and equipment within or from site will be carefully planned and supervised to prevent collisions, overturning or unauthorised access. Only trained and authorised operatives will operate plant. Prior to relocation, routes will be assessed to ensure ground stability, adequate clearance and segregation from pedestrians. Upon completion of the project, plant and equipment including site boxes and bowsers will be removed in a controlled manner. Any plant not required during the works will be removed as soon as practicable.</p>`,

  section5: `<p><strong>5.1 First Aid</strong></p>
<p>First aid arrangements will be provided in accordance with the Principal Contractor's Construction Phase Plan and the Health and Safety (First-Aid) Regulations 1981. The designated site first aider is [ENTER NAME AND CONTACT NUMBER]. First aid kits are located within the site welfare facilities and all operatives will be informed of their location during site induction. All accidents, injuries and near misses must be reported immediately and recorded in the site accident book. Emergency services will be contacted via 999 where required and the Principal Contractor informed without delay.</p>
<p><strong>5.2 Rescue Planning</strong></p>
<p>This rescue plan sets out the procedures to follow in the event of an emergency during groundworks or excavation operations, including ground collapse, entrapment, service strikes, or persons or plant falling into an excavation. In the event of an incident, the site manager or supervisor will take control, ensure the area is made safe, and contact the emergency services. The appointed person will meet the emergency responders at the site entrance and direct them to the incident. Operatives must not attempt any rescue that would put themselves or others at risk.</p>
<p>If a collapse or entrapment occurs, work must stop immediately, the area must be evacuated, and all plant and machinery in the vicinity shut down. No one should re-enter the excavation until its stability has been confirmed by a competent person. Where safe, first aid can be provided while waiting for emergency assistance, and all workers must be accounted for at the designated assembly point. Only trained and authorised personnel may carry out a rescue, and the safety of rescuers will always take priority.</p>
<p><strong>5.3 Records</strong></p>
<p>All accidents, incidents and near misses will be recorded and investigated where required. Any incident meeting RIDDOR criteria will be reported to the relevant enforcing authority. Emergency procedures will be reviewed periodically and following any incident.</p>`,

  section6: `<p><strong>6.1 Personnel On Site</strong></p>
<p>We anticipate the following personnel will be utilised on site. Between [ENTER NUMBER] operatives, trained and experienced, will be carrying out the works in the areas listed in Section 4. All operatives will be advised of the method in which the works are to be carried out and will attend the site induction.</p>
<p><strong>Site Supervisor</strong></p>
<p>The Site Supervisor is responsible for direct supervision of the workforce, ensuring that work is carried out safely, efficiently, and in accordance with approved RAMS and instructions from the Site Manager. Key duties include:</p>
<ul>
  <li>Delivering daily briefings and toolbox talks, and ensuring operatives fully understand their tasks and associated risks.</li>
  <li>Monitoring work areas to confirm that safe systems of work are followed and PPE requirements are met.</li>
  <li>Checking that permits to work, service drawings, and temporary works approvals are in place before starting activities.</li>
  <li>Maintaining site discipline, housekeeping, and segregation between plant, vehicles, and pedestrians.</li>
  <li>Inspecting excavations, lifting operations, and access equipment, and reporting any defects or unsafe conditions immediately.</li>
  <li>Stopping work if conditions become unsafe and escalating issues to the Site Manager.</li>
</ul>
<p><strong>Site Operatives</strong></p>
<p>Operatives are responsible for carrying out their work safely, following training, instructions, and the requirements of the site's RAMS and permit systems. They must take reasonable care of themselves and others who may be affected by their actions. Key duties include:</p>
<ul>
  <li>Attending site inductions, briefings, and toolbox talks, and working in accordance with the instructions provided.</li>
  <li>Reading and understanding the relevant RAMS before starting work, and asking for clarification where required.</li>
  <li>Using only approved tools, plant, and equipment, and conducting pre-use checks.</li>
  <li>Wearing and maintaining the correct PPE as specified for each task.</li>
  <li>Reporting any unsafe conditions, defects, or near misses immediately to the Supervisor.</li>
  <li>Following traffic management, exclusion zones, and service avoidance procedures at all times.</li>
</ul>`,

  section7: `<table class="rte-table">
  <thead><tr><th>Plant / Equipment</th><th>Typical Use / Description</th><th>Ownership</th></tr></thead>
  <tbody>
    <tr><td>21T Excavator</td><td>Heavy-duty tracked excavator for bulk excavation, drainage runs, and deep foundation works.</td><td>Hired</td></tr>
    <tr><td>13T Excavator</td><td>Tracked excavator for general excavation, service trenching, and loading operations.</td><td>Hired</td></tr>
    <tr><td>8T Excavator</td><td>Compact excavator used for restricted access areas, footings, and drainage installation.</td><td>Hired</td></tr>
    <tr><td>9T Dumper</td><td>Forward-tipping dumper for transporting excavated materials and stone across site.</td><td>Hired</td></tr>
    <tr><td>6T Dumper</td><td>Smaller dumper for use in tighter working zones or near plot works.</td><td>Hired</td></tr>
    <tr><td>Ride-On Roller</td><td>Vibratory roller used for road and plot base compaction of sub-base and binder course layers.</td><td>Hired</td></tr>
    <tr><td>Trench Roller</td><td>Remote-controlled roller for compacting confined excavations and narrow trenches.</td><td>Hired</td></tr>
    <tr><td>Vibrating Plate Compactor</td><td>Used for compacting granular materials, sub-bases, and small reinstatement areas.</td><td>Hired</td></tr>
    <tr><td>Laser Level</td><td>Rotating laser used for accurate level control during excavation, grading, and foundation works.</td><td>Hired</td></tr>
    <tr><td>CAT &amp; Genny Cable Locator</td><td>Used to locate underground services before excavation, in accordance with HSG47 guidance.</td><td>Hired</td></tr>
    <tr><td>Road Saw / Stihl Saw</td><td>Petrol-powered saw for cutting asphalt, concrete, kerbs and slabs prior to excavation or reinstatement.</td><td>Hired</td></tr>
    <tr><td>Water Bowser (Towable)</td><td>Used for dust suppression and supplying water for compaction works.</td><td>Hired</td></tr>
    <tr><td>Site Lighting Tower</td><td>Diesel-powered lighting tower for safe illumination during low-light working hours.</td><td>Hired</td></tr>
  </tbody>
</table>`,

  section8: `<table class="rte-table">
  <thead><tr><th>Training / Certification</th><th>Purpose / Description</th><th>Renewal Period</th></tr></thead>
  <tbody>
    <tr><td>CSCS Labourer / Skilled Worker Card</td><td>Proof of competency to work on construction sites; demonstrates health, safety, and environment knowledge.</td><td>5 Years</td></tr>
    <tr><td>CPCS / NPORS Plant Operation Tickets</td><td>Competence certification for plant operations (excavator, dumper, roller, telehandler).</td><td>5 Years (CPCS) / 3–5 Years (NPORS)</td></tr>
    <tr><td>Site Induction &amp; Toolbox Talks</td><td>Mandatory site-specific induction and regular briefings to communicate hazards, rules, and procedures.</td><td>Before Starting / Ongoing</td></tr>
    <tr><td>Manual Handling Training</td><td>Safe techniques for lifting, carrying, and handling loads to prevent musculoskeletal injuries.</td><td>Every 3 Years</td></tr>
    <tr><td>CAT &amp; Genny (Service Avoidance)</td><td>Training on cable and pipe locating equipment; mandatory before excavation (HSG47 compliance).</td><td>Every 3 Years</td></tr>
    <tr><td>Excavation Safety Awareness</td><td>Understanding excavation hazards, support systems, shoring, and safe access/egress procedures.</td><td>Every 3 Years</td></tr>
    <tr><td>Abrasive Wheels / Stihl Saw</td><td>Safe use of petrol disc cutters and abrasive wheels, including pre-use inspection and changing blades.</td><td>Every 3 Years</td></tr>
    <tr><td>Working at Height Awareness</td><td>Safe methods for accessing elevated areas, use of ladders, scaffolds, and fall prevention.</td><td>Every 3 Years</td></tr>
    <tr><td>Confined Space Awareness</td><td>Understanding of confined space risks, permit requirements, gas monitoring, and rescue procedures.</td><td>Every 3 Years</td></tr>
    <tr><td>Asbestos Awareness (Category A)</td><td>Recognising asbestos-containing materials and knowing emergency procedures for accidental exposure.</td><td>Annually</td></tr>
    <tr><td>Emergency First Aid at Work (EFAW)</td><td>Basic first aid training for immediate response to workplace injuries or medical emergencies.</td><td>Every 3 Years</td></tr>
    <tr><td>Fire Marshal / Fire Awareness</td><td>Fire prevention, use of extinguishers, and safe evacuation procedures.</td><td>Every 3 Years</td></tr>
    <tr><td>HAVS / Noise Awareness</td><td>Training on controlling vibration and noise exposure and early reporting of symptoms.</td><td>Every 3 Years</td></tr>
    <tr><td>Banksman / Vehicle Marshall</td><td>Safe guidance of vehicles and plant, maintaining segregation and visual communication on site.</td><td>Every 3 Years</td></tr>
    <tr><td>Face Fit Testing (RPE Users)</td><td>Ensures tight-fitting respiratory protective equipment fits the wearer properly.</td><td>Every 2 Years</td></tr>
  </tbody>
</table>`,

  section11: `<table class="rte-table">
  <thead><tr><th>Legislation / Standard / Guidance</th><th>Relevant Activity (Groundworks)</th></tr></thead>
  <tbody>
    <tr><td>Health and Safety at Work etc. Act 1974</td><td>Overall duty of care for all groundworks operations, ensuring safe systems of work, competent supervision, and training.</td></tr>
    <tr><td>Management of Health and Safety at Work Regulations 1999</td><td>Risk assessment, planning and monitoring of groundworks, coordination of contractors, and appointment of competent persons.</td></tr>
    <tr><td>Construction (Design and Management) Regulations 2015</td><td>Preparation and management of the Construction Phase Plan, RAMS, welfare, competence, and safe coordination of trades.</td></tr>
    <tr><td>HSG150 – Health and Safety in Construction (HSE)</td><td>Guidance on safe excavation, temporary works, plant and people interface, and traffic management during groundworks.</td></tr>
    <tr><td>HSG47 – Avoiding Danger from Underground Services (HSE)</td><td>Service detection, CAT &amp; Genny use, permit-to-dig procedures, and safe hand-digging practices near utilities.</td></tr>
    <tr><td>Confined Spaces Regulations 1997 &amp; ACoP L101</td><td>Deep excavation or manhole work requiring entry control, atmospheric testing, and rescue planning.</td></tr>
    <tr><td>Work at Height Regulations 2005</td><td>Controls for working near open excavations, edge protection, scaffolds, or ladders used in groundworks.</td></tr>
    <tr><td>BS 6031:2009 – Code of Practice for Earthworks</td><td>Best practice for excavation, filling, compaction, slope stability, and drainage in earthworks operations.</td></tr>
    <tr><td>BS 5975 – Temporary Works Procedures</td><td>Procedures for excavation support, shoring, and temporary stability; TWC/TWS roles and design checks.</td></tr>
    <tr><td>LOLER 1998 &amp; BS 7121 – Lifting Operations</td><td>Lifting of manhole rings, pipes, and materials; planning, lift plans, and equipment inspection.</td></tr>
    <tr><td>PUWER 1998</td><td>Safe use, inspection, and maintenance of plant and small tools including excavators, rollers, and saws.</td></tr>
    <tr><td>New Roads and Street Works Act 1991 (NRSWA)</td><td>Requirements for working in the highway including qualified operatives, noticing, and reinstatement standards.</td></tr>
    <tr><td>Traffic Signs Manual – Chapter 8</td><td>Traffic management layouts, temporary signage, and vehicle movement control for construction works.</td></tr>
    <tr><td>COSHH Regulations 2002 &amp; EH40</td><td>Control of hazardous substances including cement, dust, fuels, and silica during groundworks.</td></tr>
    <tr><td>Control of Noise at Work Regulations 2005</td><td>Noise control during cutting, compaction, and plant operation; hearing protection requirements.</td></tr>
    <tr><td>Control of Vibration at Work Regulations 2005</td><td>Managing hand-arm vibration exposure from breakers, compactors, and handheld tools.</td></tr>
    <tr><td>Manual Handling Operations Regulations 1992</td><td>Lifting and carrying of materials such as kerbs, covers, and rebar – risk assessment and team lifts.</td></tr>
    <tr><td>PPE at Work Regulations 1992 (as amended 2022)</td><td>Provision and use of PPE and RPE for excavation, cutting, and handling operations.</td></tr>
    <tr><td>Environmental Protection Act 1990 &amp; Waste Regulations</td><td>Waste segregation, transfer documentation, and duty of care for soil, rubble, and inert waste.</td></tr>
    <tr><td>Control of Asbestos Regulations 2012</td><td>Awareness and procedures for encountering asbestos-containing materials during excavation.</td></tr>
  </tbody>
</table>`,

  section12: `<table class="rte-table">
  <thead><tr><th>Substance</th><th>Use</th><th>Hazard</th><th>MSDS Location</th></tr></thead>
  <tbody>
    <tr><td>Tarmac (Bituminous Material)</td><td>Surfacing works — driveways, footpaths, access roads. Avoid skin contact and inhalation of fumes when hot.</td><td>Skin irritant, respiratory irritant (hot fumes)</td><td>Available on request</td></tr>
    <tr><td>Diesel Fuel</td><td>Refuelling site plant and equipment. Store in approved containers, use spill kits, and avoid ignition sources.</td><td>Flammable, skin/eye irritant, environmental hazard</td><td>Available on request</td></tr>
    <tr><td>Hydraulic / Engine Oil</td><td>Plant and vehicles for lubrication and hydraulic systems. Prevent environmental contamination and skin exposure.</td><td>Skin irritant, environmental hazard</td><td>Available on request</td></tr>
    <tr><td>Grease</td><td>Lubricating plant and machinery parts. Avoid prolonged skin contact and ensure good hygiene practices.</td><td>Skin irritant</td><td>Available on request</td></tr>
    <tr><td>Concrete (wet)</td><td>Foundation footings, flooring, substructures. Avoid contact with skin, eyes; wash off immediately.</td><td>Skin/eye burns (alkali), respiratory irritant (wet cement)</td><td>Available on request</td></tr>
    <tr><td>Silica Dust (concrete / masonry dry cutting)</td><td>Generated when cutting, grinding or drilling masonry. Avoid breathing in dust; use wet cutting or on-tool extraction.</td><td>Silicosis (irreversible lung disease) — carcinogenic</td><td>Available on request</td></tr>
    <tr><td>Line Marker Spray (Aerosol)</td><td>Marking excavations, service locations, and site layout. Flammable aerosol — use in ventilated areas.</td><td>Flammable, eye/skin irritant</td><td>Available on request</td></tr>
  </tbody>
</table>`,

  section13: `<table class="rte-table">
  <thead><tr><th>PPE Item</th><th>Standard (BS EN)</th><th>When Required</th></tr></thead>
  <tbody>
    <tr><td>Safety Helmet (Hard Hat)</td><td>BS EN 397</td><td>All times on site</td></tr>
    <tr><td>Safety Footwear</td><td>BS EN ISO 20345 (S3 minimum)</td><td>All times on site</td></tr>
    <tr><td>High Visibility Clothing</td><td>BS EN ISO 20471 (Class 2 minimum)</td><td>All times on site</td></tr>
    <tr><td>Protective Gloves</td><td>BS EN 388 (task-specific)</td><td>Manual handling, concrete, plant operations</td></tr>
    <tr><td>Eye Protection</td><td>BS EN 16321-1:2022</td><td>Cutting, grinding, drilling, concrete works</td></tr>
    <tr><td>Respiratory Protective Equipment</td><td>BS EN 149 (FFP3) or BS EN 140/143</td><td>Dusty operations, silica-generating works, wet concrete</td></tr>
    <tr><td>Hearing Protection</td><td>BS EN 352</td><td>When noise exceeds 80dB(A) — compaction, cutting, breaking</td></tr>
  </tbody>
</table>`,

  section14: `<table class="rte-table">
  <thead><tr><th>Method Statement</th><th>Associated With</th><th>Risk Assessment</th></tr></thead>
  <tbody>
    <tr><td>MS1 – Manual Handling</td><td>Associated with</td><td>RA1</td></tr>
    <tr><td>MS2 – PPE Requirements</td><td>Associated with</td><td>RA2</td></tr>
    <tr><td>MS3 – Disc Cutting / Abrasive Wheels</td><td>Associated with</td><td>RA3</td></tr>
    <tr><td>MS4 – Kerb, Edging &amp; Paving</td><td>Associated with</td><td>RA4</td></tr>
    <tr><td>MS5 – Use of Hand Tools &amp; Power Tools</td><td>Associated with</td><td>RA5</td></tr>
    <tr><td>MS6 – Vehicle &amp; Plant Safety</td><td>Associated with</td><td>RA6</td></tr>
    <tr><td>MS7 – Excavation &amp; Foundation Works</td><td>Associated with</td><td>RA7</td></tr>
    <tr><td>MS8 – Underground Services Avoidance</td><td>Associated with</td><td>RA8</td></tr>
    <tr><td>[Add additional MS]</td><td>Associated with</td><td>[RA ref]</td></tr>
  </tbody>
</table>`
};


/* ================================================================
   M&E / DUCTWORK
   Large-scale mechanical and electrical installation
   ================================================================ */
window.RAMS_TEMPLATES['M&E / Ductwork'] = {

  section2: `<p><strong>2.1 Project Overview</strong></p>
<p>The project comprises the installation of mechanical and electrical services within [ENTER BUILDING TYPE / LOCATION]. [CONTRACTOR NAME] has been appointed to undertake the [ENTER — ductwork / mechanical plant / electrical containment / pipework] installation works. Works will be carried out within [ENTER — occupied / vacant / partially occupied] premises requiring close coordination with other trades and the building facilities manager to ensure safe delivery.</p>
<p><strong>2.2 Location Overview</strong></p>
<p>The works are being undertaken at [ENTER SITE ADDRESS]. The building is [ENTER — occupied / vacant / multi-storey]. Access to the work areas is via [ENTER ACCESS ROUTE AND ANY RESTRICTIONS]. Due to the nature of the works within a building environment, strict controls on noise, dust, hot works and services isolations will be maintained throughout.</p>`,

  section3: `<p><strong>3.1 Specific to the Site</strong></p>
<p>The works are located within [ENTER BUILDING TYPE]. The building [is / is not] occupied during the works. Particular attention must be given to [ENTER — fire alarm isolations / asbestos risk / live services / occupied zones / out-of-hours restrictions]. A permit to work system is in operation for all electrical isolations, hot works, and confined space entry (plant rooms, ceiling voids).</p>
<p><strong>3.2 Principal Contractor's Conditions</strong></p>
<p>[CONTRACTOR NAME] will comply fully with the Principal Contractor's CPP, site inductions, permit systems and any out-of-hours arrangements. Daily coordination with the site manager and building facilities manager will be maintained. Changes to scope or programme will be agreed in advance.</p>
<p><strong>3.3 PPE Requirements</strong></p>
<p>Minimum PPE: hard hat (where applicable — overhead hazards), high-visibility vest, safety footwear. Task-specific PPE: cut-resistant gloves (ductwork / sheet metal), eye protection (drilling, grinding), hearing protection (noisy plant rooms), RPE (dusty void access, welding fumes — FFP3 or powered where in confined areas). Face-fit testing for all tight-fitting RPE users.</p>
<p><strong>3.4 Site Rules &amp; Compliance</strong></p>
<p>All operatives must attend site induction before commencing work. ID badges to be worn at all times in occupied buildings. Access restricted to agreed work areas only. Hot works permit required for all welding, brazing and grinding. Fire alarm isolation procedure to be followed and agreed with FM before isolating any detection zone. No work on live electrical circuits — lock-off and tag-off mandatory.</p>
<p><strong>3.5 Site Access &amp; Delivery Requirements</strong></p>
<p>All deliveries must be pre-booked with site management. Heavy plant and ductwork to be lifted to working level using approved hoisting arrangements — lift plans required for loads over [ENTER SWL]. Delivery routes and times agreed with building management to minimise disruption to occupants.</p>`,

  section4: `<p><strong>4.1 Delivery &amp; Storage of Materials</strong></p>
<p>Ductwork sections, pipework, and plant will be delivered to site in a planned sequence to avoid over-stocking. Materials will be stored in designated areas, clear of escape routes and occupied zones. Fragile or heavy items will be stored on firm, level ground with suitable dunnage. Flammable materials (sealants, adhesives) stored in ventilated, locked storage per COSHH requirements.</p>
<p><strong>4.2 Working Areas</strong></p>
<p>Working areas to be clearly defined. In occupied buildings, physical hoarding or screening will separate the works zone from occupied areas. Access to plant rooms, ceiling voids, and service risers to be controlled — permit required. Electrical and mechanical isolation notices displayed where services are made dead.</p>
<p><strong>4.3 Sequence of Works</strong></p>
<ul>
  <li>Review drawings and confirm duct routing / pipe routes with project engineer</li>
  <li>Coordinate isolations with FM / Principal Contractor</li>
  <li>Prefabricate ductwork sections on the ground where possible</li>
  <li>MEWP / podium steps for all work above 2m</li>
  <li>Install supporting brackets and hangers at manufacturer's recommended intervals</li>
  <li>Joint, seal and test in accordance with HVCA DW/144 or project specification</li>
  <li>Fire-stop all penetrations through compartment walls / floors</li>
  <li>Commission and hand over with test certificates</li>
</ul>
<p><strong>4.4 Decanting of On-Site Plant &amp; Equipment</strong></p>
<p>All plant and equipment will be removed progressively on completion of each area. Heavy plant and any hired equipment removed on completion. Waste materials removed from site via licensed waste contractor. Site left clean and clear to satisfaction of Principal Contractor.</p>`,

  section5: `<p><strong>5.1 First Aid</strong></p>
<p>First aid arrangements will be provided in accordance with the Principal Contractor's CPP. The designated first aider is [ENTER NAME AND NUMBER]. First aid kits located in [ENTER LOCATION]. All injuries to be reported and recorded in the site accident book immediately. 999 for emergencies.</p>
<p><strong>5.2 Emergency Procedures</strong></p>
<p>In the event of a fire or emergency in a building, activate the building's fire alarm system using the nearest call point. Evacuate via the designated escape routes to the muster point at [ENTER MUSTER POINT — confirm at induction]. In the event of an electrical incident, do not touch the casualty — isolate the supply first. In the event of a gas/fume incident, evacuate immediately, do not operate electrical switches, contact 999 and the gas emergency number (0800 111 999 for gas).</p>
<p>Permit to work for confined spaces (plant rooms, ceiling voids assessed as confined spaces) — rescue plan must be in place before entry. Rescue equipment to be available at the entry point.</p>
<p><strong>5.3 Records</strong></p>
<p>All accidents, incidents and near misses will be recorded. RIDDOR reportable incidents notified to HSE. Emergency procedures reviewed after any incident.</p>`,

  section6: `<p><strong>6.1 Personnel On Site</strong></p>
<p>[ENTER NUMBER] operatives will be carrying out the works. All are trained and competent for their assigned activities and will have attended the site induction before starting work.</p>
<p><strong>Site Supervisor / Foreman</strong></p>
<ul>
  <li>Supervise all installation activities and ensure compliance with approved RAMS</li>
  <li>Manage permit to work system — ensure permits are in place before each activity</li>
  <li>Coordinate with FM and Principal Contractor daily</li>
  <li>Check all working at height equipment and MEWP pre-use</li>
  <li>Stop work immediately if unsafe conditions are identified</li>
</ul>
<p><strong>Operatives</strong></p>
<ul>
  <li>Carry out works in accordance with approved drawings, specifications and RAMS</li>
  <li>Conduct pre-use checks on all tools, MEWPs and lifting accessories</li>
  <li>Wear correct PPE for the task — no shortcuts</li>
  <li>Report all defects, near misses and unsafe conditions immediately</li>
  <li>Follow all permit conditions — do not commence work without a valid permit</li>
</ul>`,

  section7: `<table class="rte-table">
  <thead><tr><th>Plant / Equipment</th><th>Use</th><th>Ownership</th></tr></thead>
  <tbody>
    <tr><td>MEWP (Scissor / Boom)</td><td>Working at height for ductwork and pipework installation above 2m</td><td>Hired</td></tr>
    <tr><td>Podium Steps / Tower Scaffold</td><td>Low-level access platform for installation works</td><td>Owned / Hired</td></tr>
    <tr><td>Duct Fabrication Tools (shears, folders, formers)</td><td>Sheet metal ductwork fabrication on site or in workshop</td><td>Owned</td></tr>
    <tr><td>Drill / Percussion Drill / Core Drill</td><td>Fixing brackets, creating service penetrations</td><td>Owned</td></tr>
    <tr><td>Angle Grinder</td><td>Cutting and grinding ductwork, pipe, and metalwork</td><td>Owned</td></tr>
    <tr><td>Welding / Brazing Equipment</td><td>Pipe jointing and metalwork connections — hot works permit required</td><td>Owned</td></tr>
    <tr><td>Lifting Gin Wheel / Rope Hoist</td><td>Manual lifting of ductwork sections to elevated positions</td><td>Hired</td></tr>
    <tr><td>Pipe Threading Machine</td><td>Preparing threaded pipe ends for mechanical connections</td><td>Owned</td></tr>
    <tr><td>Pressure Testing Equipment</td><td>Testing installed pipework and duct systems</td><td>Owned</td></tr>
    <tr><td>Power Tools (general)</td><td>Drilling, cutting, fastening — 110V or battery operated</td><td>Owned</td></tr>
  </tbody>
</table>`,

  section8: `<table class="rte-table">
  <thead><tr><th>Training / Certification</th><th>Purpose</th><th>Renewal</th></tr></thead>
  <tbody>
    <tr><td>CSCS Card</td><td>Proof of competency for trade on construction sites</td><td>5 Years</td></tr>
    <tr><td>IPAF (3a / 3b)</td><td>Operation of MEWPs — boom and scissor</td><td>5 Years</td></tr>
    <tr><td>PASMA</td><td>Erection and use of mobile access towers</td><td>5 Years</td></tr>
    <tr><td>Asbestos Awareness (Cat A)</td><td>Recognising ACMs before disturbing building fabric</td><td>Annually</td></tr>
    <tr><td>Manual Handling</td><td>Safe handling of ductwork sections, pipework, and plant</td><td>Every 3 Years</td></tr>
    <tr><td>Confined Space Awareness</td><td>Entry into plant rooms, ceiling voids, and service risers assessed as confined spaces</td><td>Every 3 Years</td></tr>
    <tr><td>Abrasive Wheels</td><td>Safe use of angle grinders and cutting discs</td><td>Every 3 Years</td></tr>
    <tr><td>Working at Height</td><td>Safe access, ladder use, fall prevention</td><td>Every 3 Years</td></tr>
    <tr><td>Hot Works (Welding / Brazing)</td><td>Safe use of welding and brazing equipment, fire prevention</td><td>Every 3 Years</td></tr>
    <tr><td>Emergency First Aid at Work</td><td>First response to workplace injuries</td><td>Every 3 Years</td></tr>
    <tr><td>HAVS / Noise Awareness</td><td>Controlling vibration and noise exposure from power tools</td><td>Every 3 Years</td></tr>
    <tr><td>Face Fit Testing (RPE)</td><td>Ensuring RPE fits correctly — welding fume, dust</td><td>Every 2 Years</td></tr>
  </tbody>
</table>`,

  section11: `<table class="rte-table">
  <thead><tr><th>Legislation / Standard / Guidance</th><th>Relevant Activity (M&amp;E / Ductwork)</th></tr></thead>
  <tbody>
    <tr><td>Health and Safety at Work etc. Act 1974</td><td>Overall duty of care for all M&amp;E installation operations.</td></tr>
    <tr><td>Management of Health and Safety at Work Regulations 1999</td><td>Risk assessment, planning and monitoring of installation works.</td></tr>
    <tr><td>Construction (Design and Management) Regulations 2015</td><td>RAMS, welfare, competence, and safe coordination of trades.</td></tr>
    <tr><td>Work at Height Regulations 2005</td><td>MEWP use, podium steps, ladders — all work above 2m.</td></tr>
    <tr><td>Confined Spaces Regulations 1997 &amp; ACoP L101</td><td>Entry into plant rooms, risers and ceiling voids assessed as confined spaces.</td></tr>
    <tr><td>Electricity at Work Regulations 1989</td><td>Isolation and safe working near live electrical services and distribution boards.</td></tr>
    <tr><td>LOLER 1998 &amp; BS 7121</td><td>Lifting operations — MEWP use, gin wheels, mechanical lifting accessories.</td></tr>
    <tr><td>PUWER 1998</td><td>Safe use, inspection and maintenance of all plant, tools and equipment.</td></tr>
    <tr><td>COSHH Regulations 2002</td><td>Control of welding fume, sealants, adhesives, refrigerants, and jointing compounds.</td></tr>
    <tr><td>Control of Noise at Work Regulations 2005</td><td>Noise from drilling, grinding and plant — hearing protection requirements.</td></tr>
    <tr><td>Control of Vibration at Work Regulations 2005</td><td>HAVS from power tools and compactors.</td></tr>
    <tr><td>Manual Handling Operations Regulations 1992</td><td>Lifting ductwork sections, plant, and heavy mechanical components.</td></tr>
    <tr><td>PPE at Work Regulations 1992 (as amended 2022)</td><td>Provision and use of PPE/RPE for all M&amp;E activities.</td></tr>
    <tr><td>Control of Asbestos Regulations 2012</td><td>Awareness before disturbing existing building fabric, pipe lagging, or insulation.</td></tr>
    <tr><td>Gas Safety (Installation and Use) Regulations 1998</td><td>Gas pipework installation and testing — Gas Safe registered engineers only.</td></tr>
    <tr><td>HVCA DW/144 – Ductwork Specification</td><td>Ductwork construction, jointing, and leak testing standards.</td></tr>
  </tbody>
</table>`,

  section12: `<table class="rte-table">
  <thead><tr><th>Substance</th><th>Use</th><th>Hazard</th><th>MSDS Location</th></tr></thead>
  <tbody>
    <tr><td>Welding Fume (mild steel / stainless)</td><td>Generated during welding and brazing of ductwork and pipe joints</td><td>Carcinogen — respiratory disease (Group 1 IARC). RPE mandatory — minimum FFP3 or powered air</td><td>Available on request</td></tr>
    <tr><td>Duct Sealant / Mastic</td><td>Sealing ductwork joints to DW/144 specification</td><td>Skin/eye irritant; some products contain solvents — ventilate work area</td><td>Available on request</td></tr>
    <tr><td>Thread Sealant / PTFE</td><td>Sealing pipe threaded joints</td><td>Low hazard — store correctly, avoid ingestion</td><td>Available on request</td></tr>
    <tr><td>Flux (brazing / soldering)</td><td>Preparation of copper pipe joints before brazing</td><td>Skin/eye corrosive; fumes irritant — ventilate, avoid breathing fumes</td><td>Available on request</td></tr>
    <tr><td>Refrigerant (F-gas) [if applicable]</td><td>HVAC/refrigeration system charging — F-Gas licence required</td><td>Asphyxiation risk in confined spaces; environmental hazard (GWP)</td><td>Available on request</td></tr>
    <tr><td>Lubricating Oil / Hydraulic Oil</td><td>Plant maintenance</td><td>Skin irritant; environmental hazard</td><td>Available on request</td></tr>
    <tr><td>Isopropyl Alcohol (cleaning agent)</td><td>Cleaning pipework/ductwork surfaces before jointing</td><td>Flammable; eye/skin irritant — no ignition sources during use</td><td>Available on request</td></tr>
  </tbody>
</table>`,

  section13: `<table class="rte-table">
  <thead><tr><th>PPE Item</th><th>Standard (BS EN)</th><th>When Required</th></tr></thead>
  <tbody>
    <tr><td>Safety Helmet</td><td>BS EN 397</td><td>Where overhead hazards exist — plant rooms, external works</td></tr>
    <tr><td>Safety Footwear</td><td>BS EN ISO 20345 (S3)</td><td>All times on site</td></tr>
    <tr><td>High Visibility Clothing</td><td>BS EN ISO 20471 (Class 2)</td><td>All times on construction sites and external works areas</td></tr>
    <tr><td>Cut-Resistant Gloves</td><td>BS EN 388 (Cut Level C minimum)</td><td>Handling sheet metal ductwork, duct flanges, and sharp edges</td></tr>
    <tr><td>Eye Protection</td><td>BS EN 16321-1:2022</td><td>Drilling, grinding, cutting, overhead work</td></tr>
    <tr><td>Hearing Protection</td><td>BS EN 352</td><td>When noise exceeds 80dB(A) — drilling in concrete, angle grinding</td></tr>
    <tr><td>Respiratory Protective Equipment (RPE)</td><td>BS EN 149 FFP3 / BS EN 12941 (TH3 powered) for welding fume</td><td>Welding, brazing, dusty activities, confined void access</td></tr>
    <tr><td>Welding Visor / Face Shield</td><td>BS EN 175</td><td>All welding and brazing operations</td></tr>
    <tr><td>Harness (fall arrest)</td><td>BS EN 361</td><td>Where edge protection cannot be provided at height on boom MEWP</td></tr>
  </tbody>
</table>`,

  section14: `<table class="rte-table">
  <thead><tr><th>Method Statement</th><th>Associated With</th><th>Risk Assessment</th></tr></thead>
  <tbody>
    <tr><td>MS1 – Manual Handling</td><td>Associated with</td><td>RA1</td></tr>
    <tr><td>MS2 – PPE Requirements</td><td>Associated with</td><td>RA2</td></tr>
    <tr><td>MS3 – Working at Height (MEWP)</td><td>Associated with</td><td>RA3</td></tr>
    <tr><td>MS4 – Ductwork Fabrication &amp; Installation</td><td>Associated with</td><td>RA4</td></tr>
    <tr><td>MS5 – Hot Works (Welding / Brazing)</td><td>Associated with</td><td>RA5</td></tr>
    <tr><td>MS6 – Electrical Isolation &amp; Permit to Work</td><td>Associated with</td><td>RA6</td></tr>
    <tr><td>MS7 – Mechanical Plant Installation</td><td>Associated with</td><td>RA7</td></tr>
    <tr><td>MS8 – Pipework Installation</td><td>Associated with</td><td>RA8</td></tr>
    <tr><td>[Add additional MS]</td><td>Associated with</td><td>[RA ref]</td></tr>
  </tbody>
</table>`
};


/* ================================================================
   SCAFFOLDING
   ================================================================ */
window.RAMS_TEMPLATES['Scaffolding'] = {

  section2: `<p><strong>2.1 Project Overview</strong></p>
<p>The project comprises the erection, inspection, adaptation and dismantling of [ENTER — independent tied scaffold / birdcage / system scaffold / shrink wrap scaffold] at [ENTER LOCATION] to facilitate [ENTER — roofing / cladding / external maintenance / other]. [CONTRACTOR NAME] has been appointed as the scaffolding contractor. All scaffold will be designed and erected to TG20:21 or a bespoke structural design where required.</p>
<p><strong>2.2 Location Overview</strong></p>
<p>The scaffold is to be erected at [ENTER SITE ADDRESS]. The scaffold [is / is not] over a public highway. The building is [ENTER — residential / commercial / industrial / listed structure]. [ENTER any specific constraints — height, proximity to overhead lines, ground conditions, restricted access].</p>`,

  section3: `<p><strong>3.1 Specific to the Site</strong></p>
<p>[ENTER site-specific conditions — e.g. scaffold over public footpath requiring LA licence; proximity to overhead power lines with confirmed safe distance; ground bearing conditions; building tie point locations and capacities confirmed by structural engineer; any party wall or neighbour considerations].</p>
<p><strong>3.2 Principal Contractor's Conditions</strong></p>
<p>[CONTRACTOR NAME] will comply with the Principal Contractor's CPP and site rules. The scaffold appointed person will be available throughout the standing period and will ensure weekly inspections are completed, recorded and the scaffold tag is current. Any adaptation to the scaffold will be carried out only by CISRS-trained operatives and re-inspected before re-handing over.</p>
<p><strong>3.3 PPE Requirements</strong></p>
<p>Minimum PPE: safety helmet, hi-visibility vest, safety footwear (S3). During erection and dismantling: fall arrest harness with appropriate lanyards and anchor points where advance guard rail cannot be maintained. Gloves for handling tubes, couplers and boards. Eye protection where drilling or mechanical fixing is required.</p>
<p><strong>3.4 Site Rules &amp; Compliance</strong></p>
<p>All CISRS-trained scaffold operatives must hold current cards. No scaffold erected, adapted or dismantled without a competent person in charge. Scaffold tag to be green before any person accesses the scaffold for work. Any red-tagged scaffold must not be used and the defect reported immediately. Exclusion zone maintained at ground level during erection and dismantling at all times.</p>
<p><strong>3.5 Delivery &amp; Access</strong></p>
<p>Scaffold tubes and fittings will be delivered to site and unloaded in designated areas. All scaffold materials to be checked on delivery and any defective items rejected. Loading bays to be clearly marked with SWL. Delivery vehicles to follow site traffic management plan. Materials to be passed up using gin wheel or mechanically — do not throw or drop materials.</p>`,

  section4: `<p><strong>4.1 Delivery &amp; Storage of Materials</strong></p>
<p>All scaffold materials delivered in pre-planned lifts. Tubes, boards, and fittings stored on firm, level ground in designated laydown areas. Materials not to be stored under erected scaffold unless in a protected loading bay. Boards stacked on edge to prevent tripping hazards.</p>
<p><strong>4.2 Working Areas</strong></p>
<p>Exclusion zone of [ENTER — distance equal to scaffold height] to be maintained during erection and dismantling. Scaffold footprint to be clearly marked at ground level. Loading bay access controlled — no unauthorised personnel during loading operations.</p>
<p><strong>4.3 Sequence of Works</strong></p>
<ul>
  <li>Confirm scaffold design / TG20:21 compliance sheet and ground bearing suitability</li>
  <li>Install sole plates on all standards — never erect directly on soft ground</li>
  <li>Erect scaffold in accordance with approved design — install ties as scaffold rises</li>
  <li>Install double guard rails and toe boards to all working platforms</li>
  <li>Install ladder access at designated points — secure top and bottom</li>
  <li>First inspection on completion — appoint competent person</li>
  <li>Issue green scaffold tag and handover certificate before use</li>
  <li>Weekly inspection and after adverse weather — record on scaffold register</li>
  <li>Dismantle in controlled sequence — do not remove ties before decking is removed</li>
</ul>
<p><strong>4.4 Decanting of Plant &amp; Equipment</strong></p>
<p>All scaffold materials to be recovered and removed from site following dismantling. Area to be left clean and tidy. Any waste materials removed via licensed carrier.</p>`,

  section5: `<p><strong>5.1 First Aid</strong></p>
<p>The designated first aider is [ENTER NAME AND NUMBER]. First aid kit in [ENTER LOCATION]. All injuries reported and recorded in site accident book immediately. 999 for emergencies.</p>
<p><strong>5.2 Emergency Procedures</strong></p>
<p>In the event of a scaffold-related incident (collapse, operative fall, person struck by falling material): activate emergency services via 999. Preserve the scene — do not enter the collapsed area. Site supervisor to take control, account for all personnel, and notify the Principal Contractor and appointed person immediately. No work to resume until the scene is made safe and the cause identified by a competent person.</p>
<p>In the event of adverse weather: scaffold inspected before re-use after any storm or high wind event. If wind speed exceeds [ENTER — Beaufort Scale Force 6, approx 25mph / manufacturer's limit]: erection and dismantling suspended immediately.</p>
<p><strong>5.3 Records</strong></p>
<p>Scaffold register maintained on site. All inspections recorded. RIDDOR reportable incidents notified to HSE. Emergency procedures reviewed after any incident.</p>`,

  section6: `<p><strong>6.1 Personnel On Site</strong></p>
<p>[ENTER NUMBER] scaffold operatives will carry out the works. All hold current CISRS cards for their grade. Works supervised by a CISRS Advanced Scaffolder or Supervisor.</p>
<p><strong>Appointed Person</strong></p>
<ul>
  <li>Overall responsibility for the scaffold throughout its standing period</li>
  <li>Ensure scaffold is inspected weekly and after adverse weather</li>
  <li>Review and approve all adaptations before they are carried out</li>
  <li>Issue and sign handover certificates</li>
  <li>Report structural defects to the design authority</li>
</ul>
<p><strong>Scaffold Operatives</strong></p>
<ul>
  <li>Erect and dismantle in accordance with design and TG20:21</li>
  <li>Use advance guard rail technique wherever practicable during erection</li>
  <li>Wear fall arrest harness where advance guard rail is not practicable</li>
  <li>Report all defects and unsafe conditions immediately</li>
  <li>Never adapt or alter scaffold without authorisation from appointed person</li>
</ul>`,

  section7: `<table class="rte-table">
  <thead><tr><th>Equipment</th><th>Use</th><th>Ownership</th></tr></thead>
  <tbody>
    <tr><td>Scaffold tubes (48.3mm)</td><td>Standards, ledgers, transoms, braces</td><td>Owned</td></tr>
    <tr><td>Swivel and right-angle couplers</td><td>Connecting scaffold tubes</td><td>Owned</td></tr>
    <tr><td>Putlog couplers</td><td>Connecting transoms to ledgers</td><td>Owned</td></tr>
    <tr><td>Base plates / sole plates</td><td>Load distribution on ground surface</td><td>Owned</td></tr>
    <tr><td>Hop-up brackets</td><td>Platform extensions at working level</td><td>Owned</td></tr>
    <tr><td>Scaffold boards (BS 2482)</td><td>Working platforms and toe boards</td><td>Owned</td></tr>
    <tr><td>Gin wheel / material hoist</td><td>Raising scaffold materials and equipment to height</td><td>Owned / Hired</td></tr>
    <tr><td>Anchors / wall ties</td><td>Tying scaffold to building structure per design</td><td>Owned</td></tr>
    <tr><td>Debris nets / fans</td><td>Catching falling materials over public areas</td><td>Owned / Hired</td></tr>
    <tr><td>Scaffold ladder access</td><td>Designated access/egress to scaffold lifts</td><td>Owned</td></tr>
    <tr><td>Fall arrest harnesses &amp; lanyards</td><td>Personal fall protection during erection/dismantling where advance guardrail not practicable</td><td>Owned</td></tr>
  </tbody>
</table>`,

  section8: `<table class="rte-table">
  <thead><tr><th>Training / Certification</th><th>Purpose</th><th>Renewal</th></tr></thead>
  <tbody>
    <tr><td>CISRS Part 1 / Part 2 / Advanced / Supervisor Card</td><td>Proof of scaffolding competency at the appropriate grade</td><td>5 Years (renewal via CISRS CPD)</td></tr>
    <tr><td>CSCS Card</td><td>General construction site competency</td><td>5 Years</td></tr>
    <tr><td>Working at Height</td><td>Fall prevention, harness use, ladder safety</td><td>Every 3 Years</td></tr>
    <tr><td>Manual Handling</td><td>Safe handling of scaffold tubes, boards and fittings</td><td>Every 3 Years</td></tr>
    <tr><td>Asbestos Awareness (Cat A)</td><td>Awareness of ACMs before working on/near existing buildings</td><td>Annually</td></tr>
    <tr><td>Emergency First Aid at Work</td><td>First response to workplace injuries</td><td>Every 3 Years</td></tr>
    <tr><td>Fire Awareness</td><td>Fire prevention and evacuation procedures</td><td>Every 3 Years</td></tr>
    <tr><td>Scaffold Inspection (Appointed Person)</td><td>Competency to carry out statutory scaffold inspections</td><td>Per CISRS scheme</td></tr>
  </tbody>
</table>`,

  section11: `<table class="rte-table">
  <thead><tr><th>Legislation / Standard / Guidance</th><th>Relevant Activity (Scaffolding)</th></tr></thead>
  <tbody>
    <tr><td>Health and Safety at Work etc. Act 1974</td><td>Overall duty of care for all scaffolding operations.</td></tr>
    <tr><td>Construction (Design and Management) Regulations 2015</td><td>RAMS, CPP, safe management of scaffolding works.</td></tr>
    <tr><td>Work at Height Regulations 2005</td><td>Planning, supervision and safe execution of all scaffold erection, use and dismantling.</td></tr>
    <tr><td>Management of Health and Safety at Work Regulations 1999</td><td>Risk assessment and monitoring of scaffold operations.</td></tr>
    <tr><td>LOLER 1998</td><td>Inspection and examination of gin wheels, hoists, and lifting accessories used with scaffold.</td></tr>
    <tr><td>PUWER 1998</td><td>Safe use and inspection of all plant, tools and equipment.</td></tr>
    <tr><td>TG20:21 – NASC Technical Guidance</td><td>Design standard for tube and fitting scaffolding — compliance sheets and load tables.</td></tr>
    <tr><td>SG4:22 – NASC Safety Guidance</td><td>Preventing falls during erection and dismantling — advance guard rail method, harness use.</td></tr>
    <tr><td>BS EN 12811 – Temporary Works Equipment</td><td>European standard for performance requirements for access and working scaffolding.</td></tr>
    <tr><td>BS EN 74 – Couplers for Scaffolding</td><td>Specification for right-angle, swivel and putlog couplers.</td></tr>
    <tr><td>BS 1139 – Metal Scaffolding</td><td>Specification for tubes used in tube and fitting scaffold.</td></tr>
    <tr><td>BS 2482 – Timber Scaffold Boards</td><td>Specification for scaffold boards used as working platforms.</td></tr>
    <tr><td>Manual Handling Operations Regulations 1992</td><td>Handling scaffold tubes, boards, and heavy components.</td></tr>
    <tr><td>PPE at Work Regulations 1992 (as amended 2022)</td><td>Provision of helmets, harnesses, gloves, and footwear for scaffold operatives.</td></tr>
  </tbody>
</table>`,

  section12: `<table class="rte-table">
  <thead><tr><th>Substance</th><th>Use</th><th>Hazard</th><th>MSDS Location</th></tr></thead>
  <tbody>
    <tr><td>Thread Cutting Oil</td><td>Lubrication when cutting or forming scaffold tube threads</td><td>Skin irritant — gloves required</td><td>Available on request</td></tr>
    <tr><td>Rust Inhibitor / Metal Treatment</td><td>Treating scaffold tubes before storage</td><td>Skin/eye irritant</td><td>Available on request</td></tr>
    <tr><td>Diesel Fuel</td><td>Refuelling any diesel-powered plant or lighting towers</td><td>Flammable — store in approved containers, spill kit available</td><td>Available on request</td></tr>
  </tbody>
</table>`,

  section13: `<table class="rte-table">
  <thead><tr><th>PPE Item</th><th>Standard (BS EN)</th><th>When Required</th></tr></thead>
  <tbody>
    <tr><td>Safety Helmet</td><td>BS EN 397</td><td>All times on site</td></tr>
    <tr><td>Safety Footwear</td><td>BS EN ISO 20345 (S3)</td><td>All times on site</td></tr>
    <tr><td>High Visibility Clothing</td><td>BS EN ISO 20471 (Class 2)</td><td>All times on site</td></tr>
    <tr><td>Gloves (general handling)</td><td>BS EN 388</td><td>Handling scaffold tubes, boards, and couplers</td></tr>
    <tr><td>Fall Arrest Harness &amp; Lanyard</td><td>BS EN 361 / BS EN 354</td><td>Erection and dismantling where advance guard rail is not practicable</td></tr>
    <tr><td>Eye Protection</td><td>BS EN 16321-1:2022</td><td>Drilling, mechanical fixing, cutting operations</td></tr>
    <tr><td>Hearing Protection</td><td>BS EN 352</td><td>Where noisy operations cannot be isolated — angle grinder, percussion drill</td></tr>
  </tbody>
</table>`,

  section14: `<table class="rte-table">
  <thead><tr><th>Method Statement</th><th>Associated With</th><th>Risk Assessment</th></tr></thead>
  <tbody>
    <tr><td>MS1 – Manual Handling</td><td>Associated with</td><td>RA1</td></tr>
    <tr><td>MS2 – PPE Requirements</td><td>Associated with</td><td>RA2</td></tr>
    <tr><td>MS3 – Scaffold Erection</td><td>Associated with</td><td>RA3</td></tr>
    <tr><td>MS4 – Scaffold Dismantling</td><td>Associated with</td><td>RA4</td></tr>
    <tr><td>MS5 – Scaffold Inspection &amp; Handover</td><td>Associated with</td><td>RA5</td></tr>
    <tr><td>MS6 – Working at Height (General)</td><td>Associated with</td><td>RA6</td></tr>
    <tr><td>[Add additional MS]</td><td>Associated with</td><td>[RA ref]</td></tr>
  </tbody>
</table>`
};


/* ================================================================
   JOINERY / CARPENTRY
   ================================================================ */
window.RAMS_TEMPLATES['Joinery'] = {
  section2: `<p><strong>2.1 Project Overview</strong></p>
<p>The project comprises joinery and carpentry works for [ENTER — new build residential / commercial refurbishment] at [ENTER LOCATION]. [CONTRACTOR NAME] has been appointed to undertake [ENTER specific activities — first fix / second fix / timber frame / staircase / roofing]. Works will be carried out in coordination with other trades within a Principal Contractor–controlled site.</p>
<p><strong>2.2 Location Overview</strong></p>
<p>The works are at [ENTER SITE ADDRESS]. The site is [ENTER — new build / existing occupied building / partially occupied]. Access via [ENTER]. [ENTER any specific constraints — occupied during works, access restrictions, asbestos in existing building].</p>`,
  section3: `<p><strong>3.1 Site-Specific Conditions</strong></p>
<p>[ENTER — occupied building considerations; noise restrictions; dust controls required; structural constraints; existing services to protect]. Works to be coordinated daily with site manager regarding programme, interface with other trades, and access to work areas.</p>
<p><strong>3.2 Principal Contractor's Conditions</strong></p>
<p>[CONTRACTOR NAME] will comply with the CPP, site inductions, permit systems and programme. All structural variations must be agreed with the structural engineer and Principal Contractor before implementation. Daily programme coordination to ensure safe interface with other trades.</p>
<p><strong>3.3 PPE Requirements</strong></p>
<p>Hard hat (overhead hazards and during structural frame works), hi-vis, safety footwear (S3). Task-specific: cut-resistant gloves (power tools, sharp timber), eye protection (sawing, nailing, drilling), dust mask FFP2 minimum (wood dust), hearing protection (saws, nail guns exceeding 80dB). Face-fit testing for FFP3 users.</p>
<p><strong>3.4 Site Rules &amp; Compliance</strong></p>
<p>Site induction mandatory. Compliance with structural engineer's specification — no substitutions without approval. No temporary propping removed without written engineer confirmation. All working at height to follow Work at Height Regulations. Dust extraction mandatory for all routing, sawing and sanding.</p>
<p><strong>3.5 Delivery &amp; Access</strong></p>
<p>Timber deliveries coordinated with site management — telehandler / crane for large sections and roof trusses. Materials stored off ground on dunnage, protected from moisture. Delivery vehicles to follow traffic management plan.</p>`,
  section4: `<p><strong>4.1 Delivery &amp; Storage</strong></p>
<p>Timber and materials delivered in planned sequence. Stored on firm level ground, off the ground on dunnage, and protected from rain. Heavy panels and beams to be off-loaded by telehandler or crane — lift plan required for items over [ENTER SWL].</p>
<p><strong>4.2 Working Areas</strong></p>
<p>Working areas clearly defined. Edge protection installed at every floor level and stairwell before work commences at that level. Dust screens in occupied areas. Tool storage secured overnight.</p>
<p><strong>4.3 Sequence of Works</strong></p>
<ul>
  <li>First fix carpentry — structural timbers, joist hangers, studwork</li>
  <li>Roof structure / truss installation — lift plan for crane operations</li>
  <li>Temporary bracing installed as frame rises — not removed without engineer approval</li>
  <li>Staircase installation — edge protection maintained until stairs are handed over</li>
  <li>Second fix — door linings, skirtings, architraves, ironmongery</li>
  <li>Flooring installation</li>
</ul>
<p><strong>4.4 Decanting of Plant &amp; Equipment</strong></p>
<p>All plant, tools and waste materials removed on completion of each work package. Site left clean and tidy. Waste timber removed via licensed carrier.</p>`,
  section5: `<p><strong>5.1 First Aid</strong></p>
<p>Designated first aider: [ENTER NAME AND NUMBER]. First aid kit at [ENTER LOCATION]. All injuries reported and recorded immediately. 999 for emergencies.</p>
<p><strong>5.2 Emergency Procedures</strong></p>
<p>In the event of a structural collapse or fall: call 999 immediately. Preserve the scene. Site supervisor to take control and account for all personnel. Notify Principal Contractor immediately. No temporary works to be removed or structure disturbed until a competent person has assessed stability.</p>
<p><strong>5.3 Records</strong></p>
<p>All accidents, near misses and incidents recorded. RIDDOR reportable events notified to HSE. Procedures reviewed following any incident.</p>`,
  section6: `<p><strong>6.1 Personnel On Site</strong></p>
<p>[ENTER NUMBER] operatives. All experienced and competent for their assigned tasks. Site supervised by a qualified site manager / leading hand.</p>
<ul>
  <li>Deliver briefings — ensure operatives understand the structural sequence and temporary works requirements</li>
  <li>Inspect working at height equipment daily</li>
  <li>Ensure dust extraction is in use at all times for applicable operations</li>
  <li>Confirm no temporary propping is removed without engineer sign-off</li>
  <li>Stop work if structural stability is in doubt</li>
</ul>`,
  section7: `<table class="rte-table">
  <thead><tr><th>Plant / Equipment</th><th>Use</th><th>Ownership</th></tr></thead>
  <tbody>
    <tr><td>Circular Saw / Table Saw</td><td>Cutting timber to length — on-tool extraction essential</td><td>Owned</td></tr>
    <tr><td>Mitre Saw / Chop Saw</td><td>Accurate cross-cutting of timber sections</td><td>Owned</td></tr>
    <tr><td>Router</td><td>Cutting rebates, grooves and profiles — extraction essential</td><td>Owned</td></tr>
    <tr><td>Nail Gun (first fix / framing)</td><td>Fixing structural timbers and studwork</td><td>Owned</td></tr>
    <tr><td>Nail Gun (second fix / brad)</td><td>Fixing skirtings, architraves, and trim</td><td>Owned</td></tr>
    <tr><td>Drill / Impact Driver</td><td>Fixing structural bolts, screws, and ironmongery</td><td>Owned</td></tr>
    <tr><td>Jigsaw / Reciprocating Saw</td><td>Cutting complex shapes and notching</td><td>Owned</td></tr>
    <tr><td>Dust Extraction Unit (industrial)</td><td>Capturing wood dust at source — mandatory for routing, sawing, sanding</td><td>Owned</td></tr>
    <tr><td>Telehandler / Crane (for truss / beam lifts)</td><td>Lifting roof trusses and heavy structural members — lift plan required</td><td>Hired</td></tr>
    <tr><td>MEWP / Podium Steps</td><td>Working at height for ceiling and high-level joinery</td><td>Hired</td></tr>
  </tbody>
</table>`,
  section8: `<table class="rte-table">
  <thead><tr><th>Training / Certification</th><th>Purpose</th><th>Renewal</th></tr></thead>
  <tbody>
    <tr><td>CSCS Card (Joiner / Carpenter)</td><td>Proof of competency for carpentry trade</td><td>5 Years</td></tr>
    <tr><td>Manual Handling</td><td>Safe handling of heavy timber sections, panels, and ironmongery</td><td>Every 3 Years</td></tr>
    <tr><td>Working at Height</td><td>Scaffold towers, MEWP, ladders, fall prevention</td><td>Every 3 Years</td></tr>
    <tr><td>Wood Dust / Respiratory Awareness</td><td>Controlling wood dust exposure — silica in MDF, hardwoods (carcinogen)</td><td>Every 3 Years</td></tr>
    <tr><td>Abrasive Wheels</td><td>Safe use of circular saws, mitre saws and angle grinders</td><td>Every 3 Years</td></tr>
    <tr><td>Asbestos Awareness (Cat A)</td><td>Recognising ACMs in existing buildings before disturbing</td><td>Annually</td></tr>
    <tr><td>IPAF (3a / 3b)</td><td>Operation of MEWP — boom and scissor (if required)</td><td>5 Years</td></tr>
    <tr><td>CPCS / NPORS (Telehandler)</td><td>Operation of telehandler for material lifts</td><td>5 Years</td></tr>
    <tr><td>Slingers &amp; Signallers</td><td>Banksman / slinger for crane-lifted timber sections and roof trusses</td><td>Every 3 Years</td></tr>
    <tr><td>Emergency First Aid at Work</td><td>First response to workplace injuries</td><td>Every 3 Years</td></tr>
    <tr><td>HAVS / Noise Awareness</td><td>Controlling vibration and noise from power tools and nail guns</td><td>Every 3 Years</td></tr>
  </tbody>
</table>`,
  section11: `<table class="rte-table">
  <thead><tr><th>Legislation / Standard / Guidance</th><th>Relevant Activity (Joinery)</th></tr></thead>
  <tbody>
    <tr><td>Health and Safety at Work etc. Act 1974</td><td>Overall duty of care for all carpentry operations.</td></tr>
    <tr><td>Construction (Design and Management) Regulations 2015</td><td>RAMS, CPP, safe management of joinery works.</td></tr>
    <tr><td>Work at Height Regulations 2005</td><td>All work above 2m — frame erection, roof works, high-level second fix.</td></tr>
    <tr><td>PUWER 1998</td><td>Safe use, guarding and inspection of all powered woodworking machinery.</td></tr>
    <tr><td>LOLER 1998</td><td>Crane and telehandler lifts for roof trusses and structural beams.</td></tr>
    <tr><td>Manual Handling Operations Regulations 1992</td><td>Lifting and carrying timber sections, panels, and ironmongery.</td></tr>
    <tr><td>COSHH Regulations 2002 &amp; EH40</td><td>Wood dust (carcinogen — hardwood/softwood), MDF dust, adhesives, sealants.</td></tr>
    <tr><td>Control of Noise at Work Regulations 2005</td><td>Nail guns, circular saws — HAV/noise assessments required.</td></tr>
    <tr><td>Control of Vibration at Work Regulations 2005</td><td>HAVS from nail guns, routers, and reciprocating saws.</td></tr>
    <tr><td>PPE at Work Regulations 1992 (as amended 2022)</td><td>Provision and use of PPE/RPE for all carpentry activities.</td></tr>
    <tr><td>Control of Asbestos Regulations 2012</td><td>Awareness before disturbing existing building fabric in refurbishment works.</td></tr>
    <tr><td>BS 5975 – Temporary Works</td><td>Temporary bracing and propping during frame erection.</td></tr>
  </tbody>
</table>`,
  section12: `<table class="rte-table">
  <thead><tr><th>Substance</th><th>Use</th><th>Hazard</th><th>MSDS Location</th></tr></thead>
  <tbody>
    <tr><td>Wood Dust (hardwood)</td><td>Generated by sawing, routing, and sanding — hardwoods classified as carcinogen</td><td>Nasal cancer, respiratory disease — on-tool extraction essential, FFP2 minimum RPE</td><td>N/A (process-generated)</td></tr>
    <tr><td>Wood Dust (softwood / MDF)</td><td>Generated by sawing, routing, and sanding — MDF contains formaldehyde binder</td><td>Respiratory irritant; MDF fumes irritant — extraction and RPE required</td><td>N/A (process-generated)</td></tr>
    <tr><td>Wood Adhesive / PVA</td><td>Bonding timber joints and sheet materials</td><td>Low hazard — avoid prolonged skin contact, ensure ventilation</td><td>Available on request</td></tr>
    <tr><td>Wood Preservative / Stain</td><td>Treating external timber for weather protection</td><td>Skin/eye irritant; solvent-based products flammable — ventilate, avoid ignition</td><td>Available on request</td></tr>
    <tr><td>Expanding Foam</td><td>Filling gaps around door frames and window linings</td><td>Eye/skin irritant when uncured; isocyanate content — avoid prolonged exposure</td><td>Available on request</td></tr>
  </tbody>
</table>`,
  section13: `<table class="rte-table">
  <thead><tr><th>PPE Item</th><th>Standard (BS EN)</th><th>When Required</th></tr></thead>
  <tbody>
    <tr><td>Safety Helmet</td><td>BS EN 397</td><td>During frame erection, roof works, and overhead hazards</td></tr>
    <tr><td>Safety Footwear</td><td>BS EN ISO 20345 (S3)</td><td>All times on site</td></tr>
    <tr><td>High Visibility Clothing</td><td>BS EN ISO 20471 (Class 2)</td><td>All times on construction sites</td></tr>
    <tr><td>Cut-Resistant Gloves</td><td>BS EN 388</td><td>Power tool use, handling sheet materials with sharp edges</td></tr>
    <tr><td>Eye Protection</td><td>BS EN 16321-1:2022</td><td>Sawing, nailing, drilling, routing</td></tr>
    <tr><td>Dust Mask (RPE)</td><td>BS EN 149 FFP2 minimum — FFP3 for hardwood/MDF</td><td>All sawing, routing, sanding and drilling of timber</td></tr>
    <tr><td>Hearing Protection</td><td>BS EN 352</td><td>Nail guns, circular saws, routers above 80dB(A)</td></tr>
    <tr><td>Fall Arrest Harness</td><td>BS EN 361</td><td>Frame erection and roof works before permanent edge protection is in place</td></tr>
  </tbody>
</table>`,
  section14: `<table class="rte-table">
  <thead><tr><th>Method Statement</th><th>Associated With</th><th>Risk Assessment</th></tr></thead>
  <tbody>
    <tr><td>MS1 – Manual Handling</td><td>Associated with</td><td>RA1</td></tr>
    <tr><td>MS2 – PPE Requirements</td><td>Associated with</td><td>RA2</td></tr>
    <tr><td>MS3 – First Fix Carpentry</td><td>Associated with</td><td>RA3</td></tr>
    <tr><td>MS4 – Roof Structure / Truss Installation</td><td>Associated with</td><td>RA4</td></tr>
    <tr><td>MS5 – Second Fix Carpentry</td><td>Associated with</td><td>RA5</td></tr>
    <tr><td>MS6 – Working at Height</td><td>Associated with</td><td>RA6</td></tr>
    <tr><td>[Add additional MS]</td><td>Associated with</td><td>[RA ref]</td></tr>
  </tbody>
</table>`
};


/* =================================================================
   POPULATE FUNCTION & TOOLBAR WIRING
   Same pattern as cpp-content.js — reads window.RAMS_TEMPLATES,
   fills each RAMS section's snippet-editor in one click.
   ================================================================= */

/* Map section number → snippet-editor element ID */
const RAMS_SECTION_MAP = {
  section2:  'snippetEditor-section2',
  section3:  'snippetEditor-section3',
  section4:  'snippetEditor-section4',
  section5:  'snippetEditor-section5',
  section6:  'snippetEditor-section6',
  section7:  'snippetEditor-section7',
  section8:  'snippetEditor-section8',
  section11: 'snippetEditor-section11',
  section12: 'snippetEditor-section12',
  section13: 'snippetEditor-section13',
  section14: 'snippetEditor-section14',
};

function buildRAMSTemplateDropdown() {
  const sel = document.getElementById('ramsTemplateSelect');
  if (!sel) return;
  sel.innerHTML = '<option value="">— RAMS type —</option>';
  if (!window.RAMS_TEMPLATES) return;
  Object.keys(window.RAMS_TEMPLATES).forEach(key => {
    const opt = document.createElement('option');
    opt.value = key;
    opt.textContent = key;
    sel.appendChild(opt);
  });
}

function populateRAMSTemplate() {
  const sel = document.getElementById('ramsTemplateSelect');
  const key = sel ? sel.value : null;
  if (!key) { alert('Please select a RAMS type from the dropdown first.'); sel && sel.focus(); return; }

  const template = window.RAMS_TEMPLATES && window.RAMS_TEMPLATES[key];
  if (!template) return;

  // Check if any sections already have content
  const ramsTab = document.getElementById('tab-rams');
  const editors = ramsTab ? ramsTab.querySelectorAll('.snippet-editor') : [];
  const hasContent = Array.from(editors).some(ed => ed.textContent.trim().length > 10);

  if (hasContent) {
    if (!confirm(`Load "${key}" RAMS template?\n\nSome sections already have content.\nClick OK to overwrite ALL sections, or Cancel to abort.`)) return;
  }

  let filled = 0;
  Object.entries(RAMS_SECTION_MAP).forEach(([sectionKey, editorId]) => {
    const html = template[sectionKey];
    const el   = document.getElementById(editorId);
    if (el && html) {
      el.innerHTML = html;
      filled++;
    }
  });

  // Switch to RAMS tab
  const ramsBtn = document.querySelector('.tab-button[data-tab="tab-rams"]');
  if (ramsBtn) ramsBtn.click();

  if (typeof showStatus === 'function') {
    showStatus(`✅ RAMS populated with "${key}" template — ${filled} sections filled. Edit any section directly.`, 'success', 4000);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Build dropdown after all scripts loaded
  setTimeout(buildRAMSTemplateDropdown, 150);

  const btn = document.getElementById('btnPopulateRAMS');
  if (btn) btn.addEventListener('click', populateRAMSTemplate);
});
