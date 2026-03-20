window.SNIPPETS = window.SNIPPETS || {};

window.SNIPPETS["RA Hazards"] = [

  //Prestons Risk Assessments for all 60 Methods of work - START - //

// RA1 – MS1 Manual Handling – Heavy/Awkward Lifting
{
  id: 'ms1-heavy-lifting-strain',
  title: 'RA1 – Manual Handling – Musculoskeletal injury from heavy/awkward loads',
  hazard: 'Musculoskeletal injury (back strain, sprain, hernia)',
  who: 'Employees; Labourers; Supervisors',
  how: 'Single-person lifts beyond capability; poor lifting technique; twisting whilst carrying; lifting from ground level',
  controls: 'Avoid manual lifting where reasonably practicable. Use mechanical aids such as trolleys or telehandlers. Assess load before lifting. Keep load close to body, bend knees not back, avoid twisting. Use team lifting for heavy or awkward loads.',
  action: 'Supervisor – All Operatives',
  init: 'high',
  resid: 'low',

  // hidden scoring
  initL: 'high',
  initS: 'medium',
  residL: 'low',
  residS: 'medium'
},
// RA2 – MS1 Manual Handling – Hand/Finger Crush
{
  id: 'ms1-hand-crush-injury',
  title: 'RA2 – Manual Handling – Crush injuries to hands and fingers',
  hazard: 'Crush injury to hands or fingers',
  who: 'Employees; Labourers',
  how: 'Hands trapped between materials during lifting or placing; uncontrolled lowering of load',
  controls: 'Wear suitable gloves. Keep hands clear of pinch points. Communicate clearly during team lifts. Lower loads in a controlled manner onto stable surfaces.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // hidden scoring
  initL: 'medium',
  initS: 'medium',
  residL: 'low',
  residS: 'medium'
},
// RA3 – MS1 Manual Handling – Slip/Trip While Carrying
{
  id: 'ms1-slip-trip-while-carrying',
  title: 'RA3 – Manual Handling – Slips or trips whilst carrying loads',
  hazard: 'Slip or trip whilst carrying materials',
  who: 'Employees; Contractors',
  how: 'Carrying loads across uneven ground; obstructed walkways; reduced visibility due to bulky loads',
  controls: 'Maintain good housekeeping. Keep access routes clear. Do not carry loads that obstruct vision. Wear suitable safety footwear. Plan route before lifting.',
  action: 'Supervisor – All Operatives',
  init: 'medium',
  resid: 'low',

  // hidden scoring
  initL: 'medium',
  initS: 'medium',
  residL: 'low',
  residS: 'medium'
},
// RA4 – MS1 Manual Handling – Repetitive Strain
{
  id: 'ms1-repetitive-strain',
  title: 'RA4 – Manual Handling – Repetitive strain and fatigue',
  hazard: 'Repetitive strain injury (RSI) and fatigue',
  who: 'Employees; Labourers',
  how: 'Repeated lifting of blocks, kerbs or bags of material without task rotation',
  controls: 'Rotate tasks between operatives. Plan work to reduce repetition. Use mechanical handling aids where possible. Encourage rest breaks and hydration.',
  action: 'Supervisor – Site Management',
  init: 'medium',
  resid: 'low',

  // hidden scoring
  initL: 'medium',
  initS: 'medium',
  residL: 'low',
  residS: 'medium'
}, 
// RA5 – MS1 Manual Handling – Team Lift Coordination
{
  id: 'ms1-team-lift-failure',
  title: 'RA5 – Manual Handling – Injury from uncoordinated team lifting',
  hazard: 'Injury due to uncoordinated team lift or dropped load',
  who: 'Employees; Labourers',
  how: 'Lack of communication during shared lift leading to sudden weight shift or dropped material',
  controls: 'Nominate one person to coordinate lift. Agree clear verbal commands before lifting. Lift and lower in unison. Stop immediately if unstable.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // hidden scoring
  initL: 'medium',
  initS: 'medium',
  residL: 'low',
  residS: 'medium'
}, 
// RA6 – MS2 PPE – Hand injury / cuts and abrasions
{
  id: 'ms2-hand-injury',
  title: 'RA6 – PPE – Hand injury from sharp edges, splinters or pinch points',
  hazard: 'Cuts, abrasions and hand injuries',
  who: 'Employees; Contractors',
  how: 'Handling materials with sharp edges; contact with rough aggregates; trapping fingers during handling or tool use',
  controls: 'Wear suitable task-specific gloves. Inspect gloves and replace if damaged. Maintain good housekeeping to remove sharp debris. Use mechanical aids where practicable to reduce hand contact with heavy/awkward loads.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',
  initL: 'medium',
  initS: 'medium',
  residL: 'low',
  residS: 'medium'
},
// RA7 – MS2 PPE – Skin exposure / dermatitis (cement, fuels, oils)
{
  id: 'ms2-dermatitis-skin-exposure',
  title: 'RA7 – PPE – Dermatitis from contact with cement, oils or fuels',
  hazard: 'Dermatitis or skin irritation from contact with substances',
  who: 'Employees; Contractors',
  how: 'Skin contact with wet cement, oils, fuels or contaminated materials; inadequate gloves or contaminated clothing',
  controls: 'Wear suitable gloves and coveralls for the task. Wash hands/skin promptly after contact and before eating. Replace contaminated clothing. Use barrier cream as a supplementary measure only. Provide welfare washing facilities and skin-care guidance.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',
  initL: 'medium',
  initS: 'medium',
  residL: 'low',
  residS: 'medium'
},
// RA8 – MS2 PPE – Face/skin injury from splashes (cement, chemicals)
{
  id: 'ms2-splash-face-eye',
  title: 'RA8 – PPE – Face and eye injury from splashes',
  hazard: 'Eye/face injury from splashes (wet cement, slurry, chemicals)',
  who: 'Employees; Contractors',
  how: 'Mixing/placing concrete or mortar; handling chemicals; splashes during cleaning/washout',
  controls: 'Wear eye protection as minimum and face protection where splash risk exists. Position materials to reduce splash. Provide eyewash on site and brief emergency actions. Keep lids/caps secured when not in use.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',
  initL: 'medium',
  initS: 'medium',
  residL: 'low',
  residS: 'medium'
},
// RA9 – MS2 PPE – High visibility / struck-by risk
{
  id: 'ms2-hi-vis-struck-by',
  title: 'RA9 – PPE – Struck-by risk due to poor visibility',
  hazard: 'Struck by moving plant or vehicles due to poor visibility',
  who: 'Employees; Contractors; Visitors',
  how: 'Operatives not wearing hi-vis in plant operating areas; low light conditions; poor segregation',
  controls: 'Hi-vis to be worn at all times in work areas. Maintain pedestrian/vehicle segregation and marked walkways. Use task lighting in poor visibility. Supervisors to monitor PPE compliance.',
  action: 'Supervisor – All Operatives',
  init: 'high',
  resid: 'low',
  initL: 'high',
  initS: 'medium',
  residL: 'low',
  residS: 'medium'
},
// RA10 – MS2 PPE – Respiratory exposure to silica/other dusts (RPE)
{
  id: 'ms2-rpe-dust-exposure',
  title: 'RA10 – PPE – Respiratory exposure to dust (RPE requirements)',
  hazard: 'Inhalation of dust including respirable crystalline silica (RCS)',
  who: 'Employees; Contractors',
  how: 'Cutting, grinding, drilling, sweeping or handling dry materials without suitable RPE; poor fit or incorrect mask type',
  controls: 'Use engineering controls first (wet cutting, on-tool extraction). Wear suitable RPE (FFP3 where required). Face-fit test for tight-fitting masks and maintain clean-shaven where required. Store RPE correctly and replace when damaged/soiled. Brief operatives on correct fitting and limitations.',
  action: 'Supervisor – Operatives',
  init: 'high',
  resid: 'medium',
  initL: 'high',
  initS: 'high',
  residL: 'low',
  residS: 'high'
},
// RA11 – MS2 PPE – Cold/heat exposure (weather-related PPE)
{
  id: 'ms2-weather-exposure',
  title: 'RA11 – PPE – Cold stress or heat stress due to weather exposure',
  hazard: 'Cold stress or heat stress',
  who: 'Employees; Contractors',
  how: 'Working outdoors in low temperatures, high winds, heavy rain or hot weather without suitable clothing and hydration',
  controls: 'Wear suitable weather PPE (layered clothing, waterproofs, sun protection as required). Plan work/rest cycles. Provide drinking water and encourage hydration. Suspend work where weather creates unsafe conditions (ice, lightning, extreme heat).',
  action: 'Supervisor – Site Management',
  init: 'medium',
  resid: 'low',
  initL: 'medium',
  initS: 'medium',
  residL: 'low',
  residS: 'medium'
},
// RA12 – MS2 PPE – Eye injury from UV/particles during outdoor works
{
  id: 'ms2-eye-uv-particles',
  title: 'RA12 – PPE – Eye injury from airborne particles or UV glare',
  hazard: 'Eye injury from airborne particles or UV glare',
  who: 'Employees; Contractors',
  how: 'Dust and debris during excavation/cutting; UV glare in bright conditions; failure to wear eye protection',
  controls: 'Wear suitable safety glasses as task requires. Use dust suppression where practicable. Consider tinted safety eyewear for glare where appropriate. Maintain exclusion zones during dusty operations.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',
  initL: 'medium',
  initS: 'medium',
  residL: 'low',
  residS: 'medium'
},
// RA13 – MS3 Manual Disc Cutting – Contact with rotating disc / cuts
{
  id: 'ms3-rotating-disc-cuts',
  title: 'RA13 – Manual Disc Cutting – Cuts from rotating disc',
  hazard: 'Cuts and lacerations from rotating disc/blade',
  who: 'Employees; Contractors',
  how: 'Hand or body contact with rotating disc; loss of control; guard removed; incorrect accessory fitted',
  controls: 'Use correct tool and disc for the material. Guards to remain fitted and functional. Pre-use checks completed and defects removed from service. Maintain two-handed grip and stable footing. Keep others clear of cutting area and secure workpiece.',
  action: 'Supervisor – Operatives',
  init: 'high',
  resid: 'medium',

  // Risk matrix (3x3): low=1, medium=2, high=3; score=L×S; 1–2=low, 3–4=medium, 6–9=high
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA14 – MS3 Manual Disc Cutting – Flying debris / eye injury
{
  id: 'ms3-flying-debris-eye-injury',
  title: 'RA14 – Manual Disc Cutting – Eye injury from flying debris',
  hazard: 'Eye injury from flying debris/particles',
  who: 'Employees; Contractors; Visitors',
  how: 'Fragments ejected from material or damaged disc; persons within exclusion zone without protection',
  controls: 'Establish exclusion zone and keep non-essential persons clear. Wear suitable eye protection (and face protection where required). Inspect discs before use and do not use damaged discs. Position body to avoid line of fire and use correct cutting technique.',
  action: 'Supervisor – Operatives',
  init: 'high',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=high(3) × Severity=medium(2) = 6 → HIGH
  initL: 'high',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA15 – MS3 Manual Disc Cutting – Dust inhalation (RCS) / respiratory harm
{
  id: 'ms3-dust-inhalation-rcs',
  title: 'RA15 – Manual Disc Cutting – Dust inhalation (RCS)',
  hazard: 'Inhalation of dust including respirable crystalline silica (RCS)',
  who: 'Employees; Contractors; Others nearby',
  how: 'Dry cutting concrete/blocks generating airborne dust; poor ventilation; incorrect or poorly fitted RPE',
  controls: 'Use wet cutting or on-tool extraction where practicable. Position cutting to reduce exposure to others. Wear suitable RPE (FFP3) and ensure face-fit testing for tight-fitting masks. Keep cutting time to minimum and maintain good ventilation.',
  action: 'Supervisor – Operatives',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA16 – MS3 Manual Disc Cutting – Noise exposure / hearing damage
{
  id: 'ms3-noise-exposure',
  title: 'RA16 – Manual Disc Cutting – Noise-induced hearing damage',
  hazard: 'Noise-induced hearing damage',
  who: 'Employees; Contractors',
  how: 'Exposure to high noise levels from cutting/grinding equipment without hearing protection or task planning',
  controls: 'Wear hearing protection where required. Limit exposure time through task rotation and planning. Maintain equipment to reduce noise. Keep others clear of the work area and brief operatives working nearby.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA17 – MS3 Manual Disc Cutting – Hand–arm vibration (HAVS)
{
  id: 'ms3-havs-exposure',
  title: 'RA17 – Manual Disc Cutting – Hand–arm vibration (HAVS)',
  hazard: 'Hand–arm vibration exposure (HAVS)',
  who: 'Employees; Contractors',
  how: 'Extended use of vibrating hand-held cutting tools; poor maintenance increasing vibration; lack of task rotation',
  controls: 'Select low-vibration tools where practicable. Maintain equipment and replace worn discs/accessories. Limit trigger time through task rotation and planning. Monitor symptoms and report early signs of HAVS.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA18 – MS4 Excavators – Struck by moving plant
{
  id: 'ms4-struck-by-plant',
  title: 'RA18 – Excavators – Struck by moving plant',
  hazard: 'Operative struck by moving excavator or slewing counterweight',
  who: 'Employees; Contractors; Visitors',
  how: 'Persons entering swing radius; poor segregation; reversing without banksman; restricted visibility',
  controls: 'Establish exclusion zones around operating plant. Use trained banksman for manoeuvres. Fit reversing alarms and beacons. Maintain pedestrian/vehicle segregation. Brief operatives at induction and toolbox talks.',
  action: 'Supervisor – Plant Operator',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA19 – MS4 Excavators – Overturning
{
  id: 'ms4-plant-overturn',
  title: 'RA19 – Excavators – Plant overturning',
  hazard: 'Excavator overturning due to unstable ground or overreach',
  who: 'Operator; Employees nearby',
  how: 'Operating too close to trench edge; poor ground bearing capacity; excessive reach or incorrect loading',
  controls: 'Assess ground conditions before operation. Maintain safe distance from excavation edges. Do not exceed load charts. Use mats or engineered support where required. Operators to be CPCS/NPORS trained.',
  action: 'Supervisor – Plant Operator',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA20 – MS4 Excavators – Contact with overhead services
{
  id: 'ms4-overhead-strike',
  title: 'RA20 – Excavators – Contact with overhead power lines',
  hazard: 'Electrocution from contact with overhead power lines',
  who: 'Operator; Employees; Public',
  how: 'Boom contacting overhead cables during lifting or slewing operations',
  controls: 'Identify and mark overhead services prior to works. Establish exclusion zones and goalposts in line with GS6. Brief operators on height restrictions. Use banksman where visibility is restricted.',
  action: 'Supervisor – Plant Operator',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA21 – MS4 Excavators – Service strike (underground)
{
  id: 'ms4-underground-service-strike',
  title: 'RA21 – Excavators – Underground service strike',
  hazard: 'Damage to underground services (gas, electric, water, telecom)',
  who: 'Employees; Contractors; Utility providers; Public',
  how: 'Failure to identify services before excavation; machine excavation directly over known services',
  controls: 'Obtain up-to-date service drawings. Complete CAT & Genny scan. Hand dig within tolerance zone. Use permit-to-dig system. Brief plant operators on marked routes.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA22 – MS4 Excavators – Falling objects from bucket
{
  id: 'ms4-falling-material',
  title: 'RA22 – Excavators – Falling material from bucket',
  hazard: 'Injury from falling materials during loading or slewing',
  who: 'Employees; Contractors',
  how: 'Overfilled bucket; sudden movement; persons working beneath suspended loads',
  controls: 'Do not overfill bucket. Keep persons clear of suspended loads. Maintain safe working radius. Brief operatives not to work under raised attachments. Use controlled movements.',
  action: 'Supervisor – Plant Operator',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  // NOTE: Although init is marked medium in UI, score still evaluates as HIGH.
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM (rounded visually to LOW only if you choose to adjust)
  residL: 'low',
  residS: 'high'
},
// RA23 – MS5 Dumpers – Struck by moving dumper
{
  id: 'ms5-struck-by-dumper',
  title: 'RA23 – Dumpers – Struck by moving dumper',
  hazard: 'Operative struck by moving dumper',
  who: 'Employees; Contractors; Visitors',
  how: 'Pedestrians entering vehicle routes; reversing without banksman; restricted visibility; poor segregation',
  controls: 'Implement traffic management plan. Establish pedestrian/vehicle segregation. Use trained banksman for reversing. Fit reversing alarms and flashing beacons. Brief all operatives during induction.',
  action: 'Supervisor – Dumper Operator',
  init: 'high',
  resid: 'medium',

  // Risk matrix (3x3)
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA24 – MS5 Dumpers – Overturning
{
  id: 'ms5-dumper-overturn',
  title: 'RA24 – Dumpers – Vehicle overturning',
  hazard: 'Dumper overturning on uneven ground or slopes',
  who: 'Operator; Employees nearby',
  how: 'Operating across slopes; excessive speed; uneven or soft ground; overloading',
  controls: 'Operate up and down slopes only. Do not exceed load capacity. Assess ground conditions before use. Wear seatbelt and ensure ROPS in place. Operators to be CPCS/NPORS certified.',
  action: 'Supervisor – Dumper Operator',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA25 – MS5 Dumpers – Falling from vehicle
{
  id: 'ms5-fall-from-dumper',
  title: 'RA25 – Dumpers – Fall from vehicle',
  hazard: 'Operator falling whilst mounting/dismounting vehicle',
  who: 'Operator',
  how: 'Climbing on/off without three points of contact; jumping from cab; slippery steps',
  controls: 'Maintain three points of contact when mounting/dismounting. Keep steps clean and free of mud. Do not jump from vehicle. Wear suitable footwear.',
  action: 'Supervisor – Dumper Operator',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA26 – MS5 Dumpers – Collision with structures/services
{
  id: 'ms5-collision-structures',
  title: 'RA26 – Dumpers – Collision with structures or services',
  hazard: 'Collision with fixed structures, excavation edges or underground services',
  who: 'Operator; Employees; Contractors',
  how: 'Poor route planning; working near excavation edges; failure to identify service routes',
  controls: 'Define vehicle routes clearly. Keep plant away from trench edges. Identify underground services prior to excavation. Use banksman in restricted areas.',
  action: 'Supervisor – Site Management',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA27 – MS5 Dumpers – Uncontrolled discharge / tipping hazard
{
  id: 'ms5-uncontrolled-discharge',
  title: 'RA27 – Dumpers – Uncontrolled discharge of load',
  hazard: 'Material falling during tipping operation',
  who: 'Employees; Contractors',
  how: 'Tipping on uneven ground; persons standing behind vehicle; overloading body',
  controls: 'Ensure level ground before tipping. Keep personnel clear of rear discharge area. Do not overload. Operate controls smoothly and under supervision where required.',
  action: 'Supervisor – Dumper Operator',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA28 – MS6 Vehicle Safety – Pedestrian struck by site vehicle
{
  id: 'ms6-pedestrian-struck-by-vehicle',
  title: 'RA28 – Vehicle Safety – Pedestrian struck by site vehicle',
  hazard: 'Pedestrian struck by moving vehicle/plant',
  who: 'Employees; Contractors; Visitors; Public (where applicable)',
  how: 'Pedestrians mixing with vehicles; poor segregation; vehicles reversing; poor visibility at access/egress points',
  controls: 'Implement Traffic Management Plan. Segregate pedestrians and vehicles using barriers and signed walkways. Use trained banksman for reversing and manoeuvres. Enforce site speed limits. Ensure all vehicles have working beacons, alarms and mirrors/cameras where fitted.',
  action: 'Site Supervisor – All Drivers',
  init: 'high',
  resid: 'medium',

  // Risk matrix (3x3)
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA29 – MS6 Vehicle Safety – Reversing collision
{
  id: 'ms6-reversing-collision',
  title: 'RA29 – Vehicle Safety – Collision during reversing',
  hazard: 'Collision with persons, plant or structures during reversing',
  who: 'Drivers; Employees; Contractors; Visitors',
  how: 'Reversing in congested areas; blind spots; lack of banksman; poor communication',
  controls: 'Avoid reversing where practicable (one-way routes). Where reversing is required use a trained banksman. Use agreed hand signals/radios. Maintain exclusion zones. Ensure alarms/cameras are functional and pre-use checks completed.',
  action: 'Supervisor – Drivers/Banksman',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA30 – MS6 Vehicle Safety – Vehicle/pedestrian interface at site entrance
{
  id: 'ms6-site-entrance-interface',
  title: 'RA30 – Vehicle Safety – Interface at site entrance/exit',
  hazard: 'Collision at site entrance/exit (vehicles, pedestrians, public traffic)',
  who: 'Employees; Contractors; Delivery drivers; Public',
  how: 'Vehicles entering/exiting onto public highway; poor visibility; uncontrolled gates; pedestrians crossing haul routes',
  controls: 'Use controlled gate access. Provide signage and cones where required. Use banksman for deliveries and turning movements. Maintain clear sight lines. Brief drivers on route and speed limits. Stop works if public interface becomes unsafe.',
  action: 'Site Supervisor – Banksman',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA31 – MS6 Vehicle Safety – Unsecured loads / falling materials from vehicles
{
  id: 'ms6-unsecured-loads',
  title: 'RA31 – Vehicle Safety – Falling materials from unsecured loads',
  hazard: 'Falling objects from vehicles (unsecured loads)',
  who: 'Employees; Contractors; Drivers; Public (if off-site)',
  how: 'Loads not secured; overfilled vehicles; movement over uneven ground causing spillage',
  controls: 'Secure loads appropriately before movement. Do not overload. Use sheeted loads where required. Maintain stable haul routes and remove debris. Keep pedestrians away from moving/loaded vehicles.',
  action: 'Supervisor – Drivers',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA32 – MS6 Vehicle Safety – Slips/trips around haul routes and loading areas
{
  id: 'ms6-slips-trips-haul-routes',
  title: 'RA32 – Vehicle Safety – Slips and trips around haul routes/loading areas',
  hazard: 'Slips, trips and falls in vehicle operating areas',
  who: 'Employees; Contractors; Visitors',
  how: 'Mud, uneven ground, debris and poor housekeeping near loading points and haul routes',
  controls: 'Maintain good housekeeping and clear walkways. Keep haul routes maintained and level where practicable. Use designated pedestrian routes and crossings. Provide lighting where required.',
  action: 'Supervisor – All Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA33 – MS6 Vehicle Safety – Driver fatigue / distraction
{
  id: 'ms6-driver-fatigue-distraction',
  title: 'RA33 – Vehicle Safety – Driver distraction or fatigue',
  hazard: 'Collision due to driver distraction or fatigue',
  who: 'Drivers; Employees; Contractors; Public',
  how: 'Long shifts, rushed deliveries, mobile phone use, poor concentration in busy work areas',
  controls: 'Brief drivers on site rules and routes. No mobile phone use while driving. Plan deliveries to avoid congestion. Enforce speed limits and rest breaks as required. Supervisors to monitor behaviour.',
  action: 'Site Management – Drivers',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA34 – MS7 Large Excavations – Collapse of excavation sides
{
  id: 'ms7-excavation-collapse',
  title: 'RA34 – Large Excavations – Collapse of excavation sides',
  hazard: 'Collapse of trench or excavation walls',
  who: 'Employees; Contractors; Visitors',
  how: 'Unsupported excavation; surcharge loading near edge; water ingress weakening ground stability',
  controls: 'Install trench support, trench box or batter back to safe angle. Keep spoil and plant minimum 1m from edge (or as engineered). Inspect excavations daily and after heavy rain. No entry into unsupported excavations.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA35 – MS7 Large Excavations – Fall into excavation
{
  id: 'ms7-fall-into-excavation',
  title: 'RA35 – Large Excavations – Fall into open excavation',
  hazard: 'Person falling into open excavation',
  who: 'Employees; Contractors; Visitors',
  how: 'Unprotected edges; poor lighting; working near edge without barriers',
  controls: 'Install edge protection or barriers. Provide secured ladder or steps for access/egress. Maintain good housekeeping and adequate lighting. Brief operatives during RAMS induction.',
  action: 'Supervisor – All Operatives',
  init: 'high',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM (display may show LOW if adjusted)
  residL: 'low',
  residS: 'high'
},
// RA36 – MS7 Large Excavations – Underground service strike
{
  id: 'ms7-service-strike',
  title: 'RA36 – Large Excavations – Underground service strike',
  hazard: 'Contact with underground services (gas, electric, water, telecom)',
  who: 'Employees; Contractors; Utility providers; Public',
  how: 'Failure to identify services before excavation; mechanical excavation over known routes',
  controls: 'Obtain up-to-date service drawings. Complete CAT & Genny scan by trained operative. Hand dig within tolerance zone. Implement permit-to-dig system. Brief plant operators on marked service routes.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA37 – MS7 Large Excavations – Plant interface within excavation area
{
  id: 'ms7-plant-interface',
  title: 'RA37 – Large Excavations – Plant/pedestrian interface',
  hazard: 'Operative struck by plant operating near excavation',
  who: 'Employees; Contractors',
  how: 'Working within plant operating radius; poor segregation; limited visibility',
  controls: 'Establish exclusion zones. Use trained banksman. Maintain clear communication between operator and groundworkers. No personnel within swing radius unless machine isolated.',
  action: 'Supervisor – Plant Operator',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA38 – MS7 Large Excavations – Water ingress / flooding
{
  id: 'ms7-water-ingress',
  title: 'RA38 – Large Excavations – Water ingress and flooding',
  hazard: 'Flooding or sudden water ingress into excavation',
  who: 'Employees; Contractors',
  how: 'Heavy rainfall; groundwater; burst services; inadequate dewatering',
  controls: 'Assess ground and water conditions before excavation. Provide sump and pump system where required. Monitor weather conditions. Inspect excavation after rainfall. Stop works if conditions become unsafe.',
  action: 'Supervisor – Site Management',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA39 – MS8 Underground Services – Electric cable strike
{
  id: 'ms8-electric-cable-strike',
  title: 'RA39 – Underground Services – Electric cable strike',
  hazard: 'Electric shock or electrocution from striking live cable',
  who: 'Employees; Contractors; Utility providers',
  how: 'Failure to identify live cables before excavation; mechanical digging directly over service route',
  controls: 'Obtain up-to-date service drawings. Complete CAT & Genny scan by trained operative. Hand dig trial holes to confirm location. Use insulated tools within tolerance zone. Implement permit-to-dig system.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Risk matrix (3x3)
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA40 – MS8 Underground Services – Gas main strike
{
  id: 'ms8-gas-main-strike',
  title: 'RA40 – Underground Services – Gas main strike',
  hazard: 'Explosion or fire from damaging gas main',
  who: 'Employees; Contractors; Public; Utility providers',
  how: 'Mechanical excavation over unconfirmed gas service; failure to verify depth and route',
  controls: 'Review gas service drawings. Conduct CAT & Genny scan. Hand dig to expose service. Maintain exclusion zone. Stop work immediately if gas smell detected and inform emergency services.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA41 – MS8 Underground Services – Water main strike
{
  id: 'ms8-water-main-strike',
  title: 'RA41 – Underground Services – Water main strike',
  hazard: 'Flooding and ground instability from damaged water main',
  who: 'Employees; Contractors',
  how: 'Excavation without confirming water main position; mechanical damage to pipe',
  controls: 'Confirm service drawings and scan before digging. Hand expose services. Keep plant clear of known routes. Monitor excavation stability if water ingress occurs.',
  action: 'Supervisor – Competent Person',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA42 – MS8 Underground Services – Service misidentification
{
  id: 'ms8-service-misidentification',
  title: 'RA42 – Underground Services – Incorrect identification of service',
  hazard: 'Assuming service is redundant or misidentifying utility type',
  who: 'Employees; Contractors',
  how: 'Inaccurate drawings; relying solely on visual inspection; failure to confirm with utility provider',
  controls: 'Do not assume service is redundant. Confirm with utility provider where unclear. Clearly mark identified services. Brief workforce on identified routes and depths.',
  action: 'Supervisor – Site Management',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA43 – MS8 Underground Services – Damage to telecom/data services
{
  id: 'ms8-telecom-damage',
  title: 'RA43 – Underground Services – Damage to telecom/data services',
  hazard: 'Damage to telecom/data services causing disruption',
  who: 'Employees; Contractors; Third parties',
  how: 'Failure to identify shallow buried cables; mechanical excavation without trial holes',
  controls: 'Complete CAT & Genny scan. Hand dig in tolerance zone. Clearly mark service route. Brief operators before excavation begins.',
  action: 'Supervisor – Competent Person',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA44 – MS9 Confined Spaces – Oxygen deficiency
{
  id: 'ms9-oxygen-deficiency',
  title: 'RA44 – Confined Spaces – Oxygen deficiency',
  hazard: 'Oxygen deficiency leading to unconsciousness or fatality',
  who: 'Employees; Contractors',
  how: 'Entry into confined space without atmosphere testing; displacement of oxygen by gases',
  controls: 'Avoid entry where possible. Implement confined space permit-to-work. Test atmosphere before and during entry using calibrated gas monitor. Provide forced ventilation where required. Rescue plan in place with trained personnel.',
  action: 'Supervisor – Confined Space Team',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA45 – MS9 Confined Spaces – Toxic gas exposure
{
  id: 'ms9-toxic-gas',
  title: 'RA45 – Confined Spaces – Toxic gas exposure',
  hazard: 'Exposure to toxic gases (H2S, methane, CO)',
  who: 'Employees; Contractors',
  how: 'Build-up of gases in chamber; failure to test atmosphere; inadequate ventilation',
  controls: 'Gas monitor testing before and during entry. Continuous monitoring where required. Forced ventilation system installed. Trained confined space operatives only. Emergency rescue plan in place.',
  action: 'Supervisor – Confined Space Team',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA46 – MS9 Confined Spaces – Flooding or sudden ingress
{
  id: 'ms9-flooding',
  title: 'RA46 – Confined Spaces – Flooding or sudden ingress',
  hazard: 'Sudden flooding of confined space',
  who: 'Employees; Contractors',
  how: 'Unexpected water release; heavy rainfall; damaged services; inadequate dewatering',
  controls: 'Assess risk before entry. Monitor weather conditions. Isolate services where possible. Provide emergency escape plan and standby operative at surface. Continuous supervision during entry.',
  action: 'Supervisor – Confined Space Team',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA47 – MS9 Confined Spaces – Rescue failure
{
  id: 'ms9-rescue-failure',
  title: 'RA47 – Confined Spaces – Inadequate rescue arrangements',
  hazard: 'Failure to rescue person in emergency',
  who: 'Employees; Contractors',
  how: 'No rescue equipment; untrained personnel; no standby operative; reliance on emergency services alone',
  controls: 'Rescue plan documented and briefed. Tripod and winch available where required. Trained rescue personnel on site. No entry without surface attendant. Emergency drill practiced.',
  action: 'Supervisor – Confined Space Team',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA48 – MS9 Confined Spaces – Slips/trips within confined space
{
  id: 'ms9-slips-trips',
  title: 'RA48 – Confined Spaces – Slips and trips inside confined space',
  hazard: 'Slips, trips or falls within confined area',
  who: 'Employees; Contractors',
  how: 'Wet surfaces; uneven footing; restricted movement; poor lighting',
  controls: 'Provide adequate lighting. Maintain good housekeeping. Wear suitable footwear. Control water ingress and keep surfaces as dry as practicable.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA48 – MS9 Confined Spaces – Slips/trips within confined space
{
  id: 'ms9-slips-trips',
  title: 'RA48 – Confined Spaces – Slips and trips inside confined space',
  hazard: 'Slips, trips or falls within confined area',
  who: 'Employees; Contractors',
  how: 'Wet surfaces; uneven footing; restricted movement; poor lighting',
  controls: 'Provide adequate lighting. Maintain good housekeeping. Wear suitable footwear. Control water ingress and keep surfaces as dry as practicable.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA50 – MS10 Trench Support – Incorrect installation
{
  id: 'ms10-incorrect-installation',
  title: 'RA50 – Trench Support – Incorrect installation of trench support',
  hazard: 'Instability caused by improper installation',
  who: 'Employees; Contractors',
  how: 'Untrained operatives installing system; inadequate bearing; failure to extend support to required depth',
  controls: 'Only trained operatives to install trench support. Follow manufacturer instructions. Supervision by competent person. Verify depth and alignment before entry.',
  action: 'Supervisor – Competent Person',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA51 – MS10 Trench Support – Struck by moving trench box during installation
{
  id: 'ms10-struck-by-trench-box',
  title: 'RA51 – Trench Support – Struck by trench box during installation',
  hazard: 'Crush injury from moving trench box',
  who: 'Employees; Contractors',
  how: 'Operatives standing within installation area; poor communication with plant operator',
  controls: 'Establish exclusion zone during lowering of trench box. Use trained banksman. Maintain clear communication between operator and groundworkers. No personnel beneath suspended load.',
  action: 'Supervisor – Plant Operator',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA52 – MS10 Trench Support – Entry into unsupported excavation
{
  id: 'ms10-unsupported-entry',
  title: 'RA52 – Trench Support – Entry into unsupported excavation',
  hazard: 'Burial or crush injury from unsupported trench',
  who: 'Employees; Contractors',
  how: 'Operatives entering trench before support installed; removal of support prematurely',
  controls: 'No entry into excavation until trench support installed and inspected. Supervisors to enforce safe system of work. Toolbox talk prior to works. Stop work if support compromised.',
  action: 'Supervisor – All Operatives',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA53 – MS10 Trench Support – Manual handling of support components
{
  id: 'ms10-manual-handling-support',
  title: 'RA53 – Trench Support – Manual handling of support components',
  hazard: 'Musculoskeletal injury during handling of trench box components',
  who: 'Employees; Contractors',
  how: 'Lifting heavy panels or braces without mechanical assistance',
  controls: 'Use plant or lifting equipment to move components. Team lifting where required. Follow manual handling guidance. Wear suitable gloves and PPE.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA54 – MS11 Drainage – Pipe collapse or trench failure
{
  id: 'ms11-trench-collapse-drainage',
  title: 'RA54 – Drainage Laying – Trench collapse during pipe installation',
  hazard: 'Collapse of trench during pipe laying',
  who: 'Employees; Contractors',
  how: 'Unsupported trench sides; surcharge from spoil/plant; vibration from nearby plant',
  controls: 'Install trench support or batter back to safe angle. Keep spoil away from trench edge. Daily inspection by competent person. No entry into unsupported excavation.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Risk matrix (3x3)
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA55 – MS11 Drainage – Struck by moving plant
{
  id: 'ms11-plant-interface',
  title: 'RA55 – Drainage Laying – Struck by plant during works',
  hazard: 'Operative struck by excavator or dumper',
  who: 'Employees; Contractors',
  how: 'Working within plant operating radius; poor communication with operator',
  controls: 'Establish exclusion zones. Use trained banksman. Clear communication between operator and groundworkers. No entry into swing radius unless plant isolated.',
  action: 'Supervisor – Plant Operator',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA56 – MS11 Drainage – Pipe handling and lifting injury
{
  id: 'ms11-pipe-lifting',
  title: 'RA56 – Drainage Laying – Injury during pipe lifting/placement',
  hazard: 'Crush or musculoskeletal injury from lifting pipes',
  who: 'Employees; Contractors',
  how: 'Manual handling of heavy pipes; incorrect lifting chains; poor positioning during placement',
  controls: 'Use mechanical lifting equipment and certified lifting accessories. Do not exceed SWL. Keep hands clear of pinch points. Use trained slinger/signaller. Team lift only where appropriate.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA57 – MS11 Drainage – Confined space entry into manhole
{
  id: 'ms11-confined-space-entry',
  title: 'RA57 – Drainage Laying – Entry into manhole/confined space',
  hazard: 'Asphyxiation or exposure to toxic gases',
  who: 'Employees; Contractors',
  how: 'Entering manhole without gas testing; inadequate ventilation; no rescue plan',
  controls: 'Implement confined space permit system. Gas monitoring before and during entry. Provide ventilation. Standby operative at surface. Rescue equipment available.',
  action: 'Supervisor – Confined Space Team',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA58 – MS11 Drainage – Slips and trips in trench
{
  id: 'ms11-slips-trips-trench',
  title: 'RA58 – Drainage Laying – Slips, trips or falls in trench',
  hazard: 'Slips or trips within excavation',
  who: 'Employees; Contractors',
  how: 'Uneven ground; wet surfaces; loose materials in trench',
  controls: 'Maintain good housekeeping. Provide safe access/egress. Keep trench as dry as practicable. Wear suitable footwear.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA58 – MS11 Drainage – Slips and trips in trench
{
  id: 'ms11-slips-trips-trench',
  title: 'RA58 – Drainage Laying – Slips, trips or falls in trench',
  hazard: 'Slips or trips within excavation',
  who: 'Employees; Contractors',
  how: 'Uneven ground; wet surfaces; loose materials in trench',
  controls: 'Maintain good housekeeping. Provide safe access/egress. Keep trench as dry as practicable. Wear suitable footwear.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA60 – MS12 Concrete Works – Formwork failure
{
  id: 'ms12-formwork-failure',
  title: 'RA60 – Concrete Works – Formwork collapse or failure',
  hazard: 'Collapse of formwork during pour',
  who: 'Employees; Contractors',
  how: 'Incorrect assembly; inadequate bracing; overloading during pour',
  controls: 'Formwork designed and inspected before pour. Installed by competent operatives. Check bracing and fixings. Do not overload. Supervisor to inspect prior to concrete placement.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA61 – MS12 Concrete Works – Struck by concrete wagon or pump
{
  id: 'ms12-vehicle-interface',
  title: 'RA61 – Concrete Works – Struck by concrete wagon or pump',
  hazard: 'Collision with delivery wagon or pump',
  who: 'Employees; Contractors; Drivers',
  how: 'Poor coordination during delivery; reversing without banksman; restricted access area',
  controls: 'Provide safe access for delivery wagons. Use trained banksman for manoeuvres. Establish exclusion zones around pump. Brief all operatives before delivery.',
  action: 'Supervisor – Banksman',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA62 – MS12 Concrete Works – Entanglement with vibrating poker / power float
{
  id: 'ms12-equipment-entanglement',
  title: 'RA62 – Concrete Works – Entanglement with vibrating equipment',
  hazard: 'Entanglement or injury from vibrating poker or power float',
  who: 'Employees; Contractors',
  how: 'Loose clothing; improper handling; lack of training',
  controls: 'Operatives trained in use of equipment. Wear close-fitting clothing. Inspect equipment before use. Isolate before maintenance.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA63 – MS12 Concrete Works – Slips on wet concrete surface
{
  id: 'ms12-slips-wet-concrete',
  title: 'RA63 – Concrete Works – Slips on wet concrete',
  hazard: 'Slip on wet or freshly poured concrete',
  who: 'Employees; Contractors',
  how: 'Walking across wet slab; poor housekeeping; inadequate exclusion of area',
  controls: 'Restrict access to poured area. Install barriers and signage. Maintain tidy working area. Provide safe access routes.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA64 – MS13 Setting Out – Struck by plant during surveying
{
  id: 'ms13-struck-by-plant',
  title: 'RA64 – Setting Out – Struck by moving plant during surveying',
  hazard: 'Operative struck by moving plant while setting out',
  who: 'Employees; Surveyors; Contractors',
  how: 'Working within active work zone; distracted while using level/total station; poor segregation from plant routes',
  controls: 'Coordinate setting out with site supervisor before entering work zone. Wear hi-vis at all times. Establish temporary exclusion zone if required. Maintain awareness of plant movements and use banksman where necessary.',
  action: 'Supervisor – Surveyor',
  init: 'high',
  resid: 'medium',

  // Risk matrix (3x3)
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA65 – MS13 Setting Out – Trip hazard from equipment
{
  id: 'ms13-trip-hazard-equipment',
  title: 'RA65 – Setting Out – Trip hazard from tripod and equipment',
  hazard: 'Trip hazard from tripod legs or equipment placement',
  who: 'Employees; Contractors; Visitors',
  how: 'Tripod positioned in walkway; uneven ground; poor housekeeping',
  controls: 'Position tripod away from main access routes. Keep area tidy. Clearly mark working area if required. Maintain awareness of ground conditions.',
  action: 'Supervisor – Surveyor',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA66 – MS13 Setting Out – Laser eye exposure
{
  id: 'ms13-laser-eye-exposure',
  title: 'RA66 – Setting Out – Eye exposure to laser beam',
  hazard: 'Eye injury from laser level beam',
  who: 'Employees; Contractors',
  how: 'Direct viewing of beam; misalignment at eye level; misuse of laser equipment',
  controls: 'Do not look directly into laser beam. Position laser below eye level where possible. Use laser safety glasses if specified. Brief operatives on correct use and hazards.',
  action: 'Supervisor – Surveyor',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA67 – MS13 Setting Out – Musculoskeletal strain
{
  id: 'ms13-manual-handling-equipment',
  title: 'RA67 – Setting Out – Musculoskeletal strain from carrying equipment',
  hazard: 'Manual handling injury when transporting survey equipment',
  who: 'Employees; Surveyors',
  how: 'Carrying tripod, laser or total station across uneven ground',
  controls: 'Use carrying cases provided. Avoid overreaching or twisting while lifting. Plan route before transport. Take breaks where required.',
  action: 'Supervisor – Surveyor',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA68 – MS14 Kerb Laying – Manual handling of kerbs
{
  id: 'ms14-manual-handling-kerbs',
  title: 'RA68 – Kerb Laying – Manual handling of kerbs',
  hazard: 'Musculoskeletal injury from lifting heavy kerbs',
  who: 'Employees; Contractors',
  how: 'Lifting or repositioning kerbs without mechanical aid; twisting while carrying; uneven ground',
  controls: 'Use mechanical kerb lifter or vacuum lifter wherever practicable. Team lift only where appropriate. Follow correct lifting technique. Rotate tasks to reduce fatigue.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix (3x3)
  // Initial: Likelihood=high(3) × Severity=medium(2) = 6 → HIGH
  initL: 'high',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA69 – MS14 Kerb Laying – Crush injury during placement
{
  id: 'ms14-crush-placement',
  title: 'RA69 – Kerb Laying – Crush injury during kerb placement',
  hazard: 'Crush injury to hands or feet during placement',
  who: 'Employees; Contractors',
  how: 'Hands or feet trapped between kerb and concrete bed; uncontrolled lowering of kerb',
  controls: 'Keep hands clear of pinch points. Use mechanical lifting aids. Wear safety boots and gloves. Maintain clear communication during placement.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA70 – MS14 Kerb Laying – Struck by plant during installation
{
  id: 'ms14-plant-interface',
  title: 'RA70 – Kerb Laying – Struck by plant during works',
  hazard: 'Operative struck by excavator or delivery vehicle',
  who: 'Employees; Contractors',
  how: 'Working near plant placing materials; reversing vehicles; poor segregation',
  controls: 'Establish exclusion zone around plant. Use trained banksman for manoeuvres. Maintain pedestrian/vehicle segregation. Brief operatives before works commence.',
  action: 'Supervisor – Plant Operator',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA71 – MS14 Kerb Laying – Cement burns from concrete bed/haunch
{
  id: 'ms14-cement-burns',
  title: 'RA71 – Kerb Laying – Cement burns from concrete contact',
  hazard: 'Skin irritation or burns from wet cement',
  who: 'Employees; Contractors',
  how: 'Handling wet concrete without gloves; kneeling in fresh bed or haunch',
  controls: 'Wear waterproof gloves and suitable PPE. Avoid direct skin contact. Wash contaminated skin immediately. Replace wet clothing.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA72 – MS14 Kerb Laying – Slips and trips on uneven ground
{
  id: 'ms14-slips-trips',
  title: 'RA72 – Kerb Laying – Slips and trips on uneven ground',
  hazard: 'Slip or trip on uneven formation or loose materials',
  who: 'Employees; Contractors; Visitors',
  how: 'Uneven ground; loose aggregates; poor housekeeping in work area',
  controls: 'Maintain tidy work area. Keep access routes clear. Provide safe pedestrian routes. Wear suitable safety footwear.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA73 – MS15 Roadworks – Vehicle strike from live traffic
{
  id: 'ms15-vehicle-strike-live-traffic',
  title: 'RA73 – Roadworks – Vehicle strike from live traffic',
  hazard: 'Operatives struck by passing vehicles',
  who: 'Employees; Contractors; Public',
  how: 'Working adjacent to live carriageway; inadequate traffic management; drivers not aware of works',
  controls: 'Implement approved Traffic Management Plan (Chapter 8). Install correct signage, cones and barriers. Maintain safe separation from live traffic. Use trained TM operatives where required. Stop works if TM becomes compromised.',
  action: 'Supervisor – TM Operatives',
  init: 'high',
  resid: 'medium',

  // Risk matrix (3x3)
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA74 – MS15 Roadworks – Poor visibility / night working
{
  id: 'ms15-poor-visibility',
  title: 'RA74 – Roadworks – Poor visibility during night/low light work',
  hazard: 'Collision or injury due to poor visibility',
  who: 'Employees; Contractors; Public',
  how: 'Low light conditions; inadequate lighting; insufficient reflective PPE/signage',
  controls: 'Provide adequate lighting towers where required. Ensure operatives wear Class 3 hi-vis. Ensure signage and cones are reflective and correctly positioned. Suspend work if visibility is insufficient.',
  action: 'Supervisor – Site Management',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA75 – MS15 Roadworks – Plant/pedestrian interface within works area
{
  id: 'ms15-plant-pedestrian-interface',
  title: 'RA75 – Roadworks – Plant/pedestrian interface within works area',
  hazard: 'Operative struck by plant operating within roadworks',
  who: 'Employees; Contractors',
  how: 'Plant manoeuvring in restricted area; pedestrians entering plant routes; reversing operations',
  controls: 'Segregate plant and pedestrians with barriers where practicable. Use trained banksman for reversing/manoeuvres. Maintain clear access routes. Brief workforce on site rules and exclusion zones.',
  action: 'Supervisor – Plant Operator',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA76 – MS15 Roadworks – Slips/trips on uneven carriageway/footway
{
  id: 'ms15-slips-trips-uneven-surface',
  title: 'RA76 – Roadworks – Slips and trips on uneven surfaces',
  hazard: 'Slips, trips and falls on uneven surfaces or temporary works',
  who: 'Employees; Contractors; Public (if interface)',
  how: 'Uneven surfaces; open excavations; trailing cables/hoses; poor housekeeping',
  controls: 'Maintain good housekeeping. Keep walkways clear. Provide ramps over plates/edges where required. Install barriers around hazards. Ensure adequate lighting.',
  action: 'Supervisor – All Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA77 – MS15 Roadworks – Burns from hot bitumen/asphalt materials
{
  id: 'ms15-burns-hot-materials',
  title: 'RA77 – Roadworks – Burns from hot bitumen/asphalt materials',
  hazard: 'Burns from contact with hot materials',
  who: 'Employees; Contractors',
  how: 'Handling hot asphalt/bitumen; splashes during laying; contact with hot surfaces',
  controls: 'Wear suitable PPE (long sleeves, gloves). Keep safe distance from laying operations. Use correct tools for spreading/handling. Brief operatives on burn risks and first aid arrangements.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA78 – MS16 Tarmacadam/Surfacing – Burns from hot asphalt/bitumen
{
  id: 'ms16-burns-hot-asphalt',
  title: 'RA78 – Tarmacadam/Surfacing – Burns from hot asphalt/bitumen',
  hazard: 'Burns from contact with hot asphalt/bitumen and plant surfaces',
  who: 'Employees; Contractors',
  how: 'Handling hot materials; splashes during laying; contact with hot screed/paver components',
  controls: 'Wear suitable PPE (long sleeves, gloves, eye protection). Maintain safe distance from paving operations. Use correct tools for spreading/handling. Brief operatives on burn risks and first aid arrangements.',
  action: 'Supervisor – Operatives',
  init: 'high',
  resid: 'medium',

  // Risk matrix (3x3)
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA79 – MS16 Tarmacadam/Surfacing – Plant/pedestrian interface (paver/roller)
{
  id: 'ms16-plant-interface',
  title: 'RA79 – Tarmacadam/Surfacing – Struck by plant during paving',
  hazard: 'Operative struck by paving plant (paver/roller/vehicles)',
  who: 'Employees; Contractors; Visitors',
  how: 'Working within operating radius; reversing movements; poor visibility/communication',
  controls: 'Segregate pedestrians from paving plant. Use trained banksman for reversing/manoeuvres. Establish exclusion zones and clear walkways. Brief all operatives before paving starts.',
  action: 'Supervisor – Banksman/Operators',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA80 – MS16 Tarmacadam/Surfacing – Exposure to fumes (bitumen/asphalt)
{
  id: 'ms16-fumes-exposure',
  title: 'RA80 – Tarmacadam/Surfacing – Exposure to asphalt/bitumen fumes',
  hazard: 'Inhalation of fumes and respiratory irritation',
  who: 'Employees; Contractors',
  how: 'Working close to hot asphalt/bitumen; poor ventilation in enclosed areas; prolonged exposure',
  controls: 'Position operatives upwind where practicable. Limit exposure duration via task rotation. Maintain plant to reduce fume generation. Use RPE where required by assessment.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA81 – MS16 Tarmacadam/Surfacing – Manual handling (rakes, lutes, bags)
{
  id: 'ms16-manual-handling',
  title: 'RA81 – Tarmacadam/Surfacing – Manual handling injuries',
  hazard: 'Musculoskeletal injury from manual handling and repetitive movements',
  who: 'Employees; Contractors',
  how: 'Handling rakes/lutes; moving materials; repetitive spreading and shovelling',
  controls: 'Plan work to reduce repetitive strain. Rotate tasks. Use mechanical aids where practicable. Brief operatives on correct technique and taking breaks.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA82 – MS16 Tarmacadam/Surfacing – Slips/trips on uneven or freshly laid surface
{
  id: 'ms16-slips-trips',
  title: 'RA82 – Tarmacadam/Surfacing – Slips and trips on uneven/fresh surfaces',
  hazard: 'Slips, trips and falls during surfacing operations',
  who: 'Employees; Contractors; Visitors',
  how: 'Uneven ground; loose aggregates; trailing hoses/cables; walking on freshly laid material',
  controls: 'Maintain good housekeeping. Keep hoses/cables routed safely. Use designated walkways. Restrict access to freshly laid areas and maintain clear signage.',
  action: 'Supervisor – All Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA83 – MS17 Road Plates – Crushing during lifting/positioning
{
  id: 'ms17-crush-lifting-plates',
  title: 'RA83 – Road Plates – Crushing injury during lifting/positioning',
  hazard: 'Crush injury from moving or lowering road plates',
  who: 'Employees; Contractors',
  how: 'Hands or feet trapped during positioning; standing within lifting zone; uncontrolled movement',
  controls: 'Use certified lifting chains/hooks and rated lifting points. Establish exclusion zone during lift. Use trained banksman. Keep hands clear of pinch points. Wear suitable PPE.',
  action: 'Supervisor – Slinger/Signaller',
  init: 'high',
  resid: 'medium',

  // Risk matrix (3x3)
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA84 – MS17 Road Plates – Plate movement under traffic
{
  id: 'ms17-plate-movement',
  title: 'RA84 – Road Plates – Movement of plate under traffic',
  hazard: 'Vehicle instability or collision due to unsecured plate',
  who: 'Employees; Contractors; Public',
  how: 'Improper installation; insufficient bearing; lack of pinning or edge support',
  controls: 'Install plates on compacted level base. Secure with pins or recess where required. Inspect regularly during use. Provide ramps/wedges to prevent rocking. Follow Traffic Management Plan.',
  action: 'Supervisor – Site Management',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA85 – MS17 Road Plates – Slips/trips at plate edges
{
  id: 'ms17-trip-edges',
  title: 'RA85 – Road Plates – Slips and trips at plate edges',
  hazard: 'Trip hazard at uneven plate edges or ramps',
  who: 'Employees; Contractors; Public',
  how: 'Raised edges; inadequate ramping; poor lighting',
  controls: 'Provide tapered ramps where required. Ensure edges are flush where possible. Install signage and lighting. Conduct regular inspections.',
  action: 'Supervisor – All Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA86 – MS17 Road Plates – Struck by live traffic during installation/removal
{
  id: 'ms17-live-traffic-interface',
  title: 'RA86 – Road Plates – Struck by traffic during installation/removal',
  hazard: 'Operatives struck by live traffic',
  who: 'Employees; Contractors; Public',
  how: 'Working in carriageway without adequate traffic control; poor visibility; vehicles failing to slow',
  controls: 'Implement approved Traffic Management Plan. Install cones, signage and barriers before works. Use trained traffic management operatives. Suspend works if TM compromised.',
  action: 'Supervisor – TM Operatives',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA87 – MS18 Lifting Operations – Dropped load
{
  id: 'ms18-dropped-load',
  title: 'RA87 – Lifting Operations – Dropped load',
  hazard: 'Dropped load causing crush injury or fatality',
  who: 'Employees; Contractors; Visitors; Public (if interface)',
  how: 'Incorrect slinging; overloading; equipment failure; poor communication',
  controls: 'Lift plan where required. Use certified lifting accessories with valid inspection records. Do not exceed SWL. Use trained slinger/signaller and lift supervisor. Establish exclusion zone and do not lift over persons. Conduct test lift before slewing.',
  action: 'Lift Supervisor – Slinger/Signaller',
  init: 'high',
  resid: 'medium',

  // Risk matrix (3x3)
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA88 – MS18 Lifting Operations – Failure of lifting accessories
{
  id: 'ms18-lifting-gear-failure',
  title: 'RA88 – Lifting Operations – Failure of lifting accessories',
  hazard: 'Failure of chains/slings/shackles causing load to fall',
  who: 'Employees; Contractors',
  how: 'Using damaged or uncertified lifting gear; incorrect selection; missing tags',
  controls: 'Only use lifting accessories with current LOLER inspections and clear identification. Pre-use visual inspection by competent person. Quarantine damaged gear immediately. Select correct accessory type and SWL for the load.',
  action: 'Lift Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA89 – MS18 Lifting Operations – Struck by swinging load
{
  id: 'ms18-swinging-load',
  title: 'RA89 – Lifting Operations – Struck by swinging load',
  hazard: 'Operatives struck by swinging or rotating load',
  who: 'Employees; Contractors',
  how: 'Wind effects; sudden slewing; poor control; no taglines',
  controls: 'Establish exclusion zone. Use taglines where suitable to control load. Lift slowly and smoothly. Monitor weather/wind and stop lifts if unsafe. Use trained slinger/signaller.',
  action: 'Lift Supervisor – Plant Operator',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA90 – MS18 Lifting Operations – Failure of ground conditions / outrigger stability
{
  id: 'ms18-ground-bearing-failure',
  title: 'RA90 – Lifting Operations – Ground bearing failure / instability',
  hazard: 'Plant/crane instability due to ground failure',
  who: 'Plant Operator; Employees nearby',
  how: 'Soft ground; inadequate mats; lifting too close to excavation edge; overloaded outriggers',
  controls: 'Assess ground bearing capacity. Use suitable mats/cribbing. Keep plant away from excavation edges. Follow lift plan and manufacturer load charts. Appointed Person to approve set-up.',
  action: 'Appointed Person – Lift Supervisor',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA91 – MS18 Lifting Operations – Poor communication / signalling error
{
  id: 'ms18-signalling-error',
  title: 'RA91 – Lifting Operations – Signalling/communication error',
  hazard: 'Incorrect signals leading to uncontrolled movement',
  who: 'Employees; Contractors',
  how: 'No designated slinger/signaller; conflicting instructions; poor visibility',
  controls: 'Designate trained slinger/signaller. Use agreed hand signals or radio communication. Stop lift if signals unclear. Use one person giving directions only.',
  action: 'Lift Supervisor – Slinger/Signaller',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA92 – MS19 Ride-on Roller – Struck by moving roller / pedestrian interface
{
  id: 'ms19-roller-struck-by',
  title: 'RA92 – Ride-on Roller – Struck by moving roller',
  hazard: 'Operative struck by moving ride-on roller',
  who: 'Employees; Contractors; Visitors',
  how: 'Pedestrians entering compaction area; poor segregation; restricted visibility during manoeuvres',
  controls: 'Segregate compaction area with barriers. Use trained banksman where visibility is restricted. Maintain exclusion zone around roller. Brief operatives before compaction begins.',
  action: 'Supervisor – Roller Operator',
  init: 'high',
  resid: 'medium',

  // Risk matrix (3x3)
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA93 – MS19 Ride-on Roller – Overturning on slopes/uneven ground
{
  id: 'ms19-roller-overturn',
  title: 'RA93 – Ride-on Roller – Overturning on slopes or uneven ground',
  hazard: 'Roller overturn leading to crush injury',
  who: 'Operator; Employees nearby',
  how: 'Operating across slopes; unstable/soft ground; operating near excavation edges; excessive speed',
  controls: 'Operate up and down slopes only. Avoid transverse travel. Assess ground conditions before operation. Keep safe distance from excavation edges. Ensure ROPS is in place and seatbelt worn.',
  action: 'Supervisor – Roller Operator',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA94 – MS19 Ride-on Roller – Whole body vibration (WBV)
{
  id: 'ms19-wbv-exposure',
  title: 'RA94 – Ride-on Roller – Whole body vibration (WBV)',
  hazard: 'Whole body vibration exposure',
  who: 'Roller Operator',
  how: 'Prolonged operation of roller; poor seat suspension; rough ground increasing vibration exposure',
  controls: 'Select appropriate roller to minimise WBV. Maintain seat/suspension. Limit exposure time and rotate tasks. Operate on prepared surfaces where practicable.',
  action: 'Supervisor – Operator',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA95 – MS19 Ride-on Roller – Contact with buried services during compaction
{
  id: 'ms19-service-damage-compaction',
  title: 'RA95 – Ride-on Roller – Damage to buried services during compaction',
  hazard: 'Damage to underground services causing electric shock, gas release or flooding',
  who: 'Employees; Contractors; Utility providers',
  how: 'Compacting over shallow or unprotected services; insufficient cover; unknown service routes',
  controls: 'Identify and mark service routes before compaction. Confirm minimum cover and protection. Use plates or bridging where required at crossings. Brief operator on exclusion zones and crossing points.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA96 – MS19 Ride-on Roller – Slips/trips during refuelling/maintenance
{
  id: 'ms19-refuelling-slips',
  title: 'RA96 – Ride-on Roller – Slips/trips and fire risk during refuelling',
  hazard: 'Slips/trips and fire risk from spills during refuelling',
  who: 'Operator; Employees nearby',
  how: 'Spilled diesel or oil; refuelling near ignition sources; poor housekeeping around refuelling area',
  controls: 'Refuel only in designated area with spill kit available. Use drip trays. Clean up spills immediately. No smoking/ignition sources. Store fuel correctly.',
  action: 'Supervisor – Operator',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA96 – MS19 Ride-on Roller – Slips/trips during refuelling/maintenance
{
  id: 'ms19-refuelling-slips',
  title: 'RA96 – Ride-on Roller – Slips/trips and fire risk during refuelling',
  hazard: 'Slips/trips and fire risk from spills during refuelling',
  who: 'Operator; Employees nearby',
  how: 'Spilled diesel or oil; refuelling near ignition sources; poor housekeeping around refuelling area',
  controls: 'Refuel only in designated area with spill kit available. Use drip trays. Clean up spills immediately. No smoking/ignition sources. Store fuel correctly.',
  action: 'Supervisor – Operator',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA97 – MS20 Remote Trench Roller – Struck by moving roller
{
  id: 'ms20-remote-roller-struck',
  title: 'RA97 – Remote Trench Roller – Struck by moving roller',
  hazard: 'Operative struck by pedestrian-controlled roller',
  who: 'Employees; Contractors',
  how: 'Standing within operating path; loss of control; distraction while operating',
  controls: 'Operate from safe position outside trench. Maintain clear line of sight. Keep all personnel clear of operating area. Use exclusion zones and brief workforce before use.',
  action: 'Supervisor – Operator',
  init: 'high',
  resid: 'medium',

  // Risk matrix (3x3)
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA98 – MS20 Remote Trench Roller – Trench collapse during compaction
{
  id: 'ms20-trench-collapse-compaction',
  title: 'RA98 – Remote Trench Roller – Trench collapse during compaction',
  hazard: 'Collapse of trench sides during compaction',
  who: 'Employees; Contractors',
  how: 'Operating roller too close to unsupported trench edge; surcharge loading; vibration affecting unstable ground',
  controls: 'Ensure trench support is installed where required. Keep roller away from unsupported edges. Assess ground stability before compaction. Stop works if signs of instability appear.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA99 – MS20 Remote Trench Roller – Whole body vibration exposure
{
  id: 'ms20-wbv-exposure',
  title: 'RA99 – Remote Trench Roller – Whole body vibration exposure',
  hazard: 'Operator exposure to vibration',
  who: 'Operator',
  how: 'Prolonged use of trench roller on uneven ground; extended shifts without rotation',
  controls: 'Limit exposure duration. Rotate tasks. Maintain equipment to manufacturer standards. Monitor vibration exposure where required.',
  action: 'Supervisor – Operator',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA100 – MS20 Remote Trench Roller – Service strike during compaction
{
  id: 'ms20-service-strike',
  title: 'RA100 – Remote Trench Roller – Damage to underground services',
  hazard: 'Damage to buried services during compaction',
  who: 'Employees; Contractors; Utility providers',
  how: 'Compacting over shallow services; inadequate identification; insufficient cover',
  controls: 'Confirm service locations before compaction. Ensure adequate cover/protection. Avoid direct compaction over known services. Brief operator on marked routes.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA101 – MS20 Remote Trench Roller – Slips/trips in trench area
{
  id: 'ms20-slips-trips',
  title: 'RA101 – Remote Trench Roller – Slips and trips in trench area',
  hazard: 'Slip, trip or fall within trench working area',
  who: 'Employees; Contractors',
  how: 'Uneven ground; loose aggregates; poor housekeeping; restricted movement within trench',
  controls: 'Maintain tidy trench environment. Provide safe access/egress. Keep materials stacked safely. Wear suitable footwear.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA101 – MS20 Remote Trench Roller – Slips/trips in trench area
{
  id: 'ms20-slips-trips',
  title: 'RA101 – Remote Trench Roller – Slips and trips in trench area',
  hazard: 'Slip, trip or fall within trench working area',
  who: 'Employees; Contractors',
  how: 'Uneven ground; loose aggregates; poor housekeeping; restricted movement within trench',
  controls: 'Maintain tidy trench environment. Provide safe access/egress. Keep materials stacked safely. Wear suitable footwear.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA102 – MS21 Cut-Off Saw – Contact with rotating blade
{
  id: 'ms21-blade-contact',
  title: 'RA102 – Cut-Off Saw – Contact with rotating blade',
  hazard: 'Severe cuts or amputation from rotating blade',
  who: 'Employees; Contractors',
  how: 'Loss of control; blade guard removed/damaged; kickback; incorrect cutting position',
  controls: 'Inspect saw and blade before use. Keep guards in place. Use correct blade for material. Maintain firm two-handed grip. Do not overreach. Only trained operatives to operate saw.',
  action: 'Supervisor – Operator',
  init: 'high',
  resid: 'medium',

  // Risk matrix (3x3)
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA103 – MS21 Cut-Off Saw – Silica dust exposure (RCS)
{
  id: 'ms21-rcs-exposure',
  title: 'RA103 – Cut-Off Saw – Respirable crystalline silica exposure',
  hazard: 'Respiratory illness from inhaling silica dust',
  who: 'Employees; Contractors; Persons nearby',
  how: 'Dry cutting concrete or masonry; poor dust suppression; inadequate RPE',
  controls: 'Use wet cutting/dust suppression system. Wear face-fit tested FFP3 RPE where required. Exclude non-essential personnel. Position upwind where practicable.',
  action: 'Supervisor – Operator',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA104 – MS21 Cut-Off Saw – Fire/explosion during refuelling
{
  id: 'ms21-fire-refuelling',
  title: 'RA104 – Cut-Off Saw – Fire or explosion during refuelling',
  hazard: 'Fire from petrol vapours or hot engine',
  who: 'Employees; Contractors',
  how: 'Refuelling near ignition source; refuelling hot engine; fuel spills not cleaned',
  controls: 'Refuel in designated ventilated area. Allow engine to cool before refuelling. Use drip tray and spill kit. No smoking or ignition sources nearby.',
  action: 'Supervisor – Operator',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA105 – MS21 Cut-Off Saw – Hand–arm vibration (HAVS)
{
  id: 'ms21-havs-exposure',
  title: 'RA105 – Cut-Off Saw – Hand–arm vibration exposure',
  hazard: 'HAVS from prolonged use of vibrating equipment',
  who: 'Operator',
  how: 'Extended use of saw; high vibration levels; lack of rotation',
  controls: 'Monitor exposure time. Rotate tasks. Maintain equipment. Brief operatives on HAVS awareness and reporting symptoms.',
  action: 'Supervisor – Operator',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA106 – MS21 Cut-Off Saw – Noise exposure
{
  id: 'ms21-noise-exposure',
  title: 'RA106 – Cut-Off Saw – Noise-induced hearing loss',
  hazard: 'Hearing damage from high noise levels',
  who: 'Operator; Persons nearby',
  how: 'Operating saw without hearing protection; prolonged exposure',
  controls: 'Wear suitable hearing protection. Limit exposure duration. Exclude non-essential personnel from cutting area.',
  action: 'Supervisor – Operator',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA107 – MS22 Power Tools – Electric shock
{
  id: 'ms22-electric-shock',
  title: 'RA107 – Power Tools – Electric shock from faulty equipment',
  hazard: 'Electric shock or electrocution',
  who: 'Employees; Contractors',
  how: 'Damaged cables; use of 240v tools on site; missing RCD protection; wet conditions',
  controls: 'Use 110v or battery tools where practicable. Inspect cables and plugs before use. Use RCD protection at all times. Do not use damaged equipment. Keep tools dry and away from standing water.',
  action: 'Supervisor – Operatives',
  init: 'high',
  resid: 'medium',

  // Risk matrix (3x3)
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA108 – MS22 Power Tools – Contact with moving parts/blades
{
  id: 'ms22-moving-parts',
  title: 'RA108 – Power Tools – Contact with moving parts or blades',
  hazard: 'Cuts or lacerations from rotating parts',
  who: 'Employees; Contractors',
  how: 'Incorrect use; guard removed; loss of control; distraction',
  controls: 'Keep guards in place. Use correct tool for task. Maintain firm grip and stable stance. Disconnect before changing blades or maintenance. Only trained operatives to use tools.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA109 – MS22 Power Tools – Flying debris / eye injury
{
  id: 'ms22-flying-debris',
  title: 'RA109 – Power Tools – Eye injury from flying debris',
  hazard: 'Eye injury from particles or fragments',
  who: 'Employees; Contractors; Persons nearby',
  how: 'Grinding/cutting without eye protection; failure to control debris; bystanders in close proximity',
  controls: 'Wear suitable eye protection. Use guards and extraction where applicable. Exclude non-essential personnel from immediate area. Inspect discs and attachments before use.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA110 – MS22 Power Tools – Hand–arm vibration (HAVS)
{
  id: 'ms22-havs',
  title: 'RA110 – Power Tools – Hand–arm vibration exposure',
  hazard: 'HAVS from prolonged tool use',
  who: 'Operatives',
  how: 'Extended use of vibrating equipment such as grinders or breakers; lack of rotation',
  controls: 'Monitor exposure time. Rotate tasks. Maintain tools to reduce vibration. Provide HAVS awareness training and health surveillance where required.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA111 – MS22 Power Tools – Noise exposure
{
  id: 'ms22-noise',
  title: 'RA111 – Power Tools – Noise-induced hearing loss',
  hazard: 'Hearing damage from power tool operation',
  who: 'Operatives; Persons nearby',
  how: 'Use of high-noise tools without hearing protection; prolonged exposure',
  controls: 'Wear suitable hearing protection. Limit duration of exposure. Maintain equipment. Display hearing protection signage where required.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA112 – MS23 Petrol Equipment – Fire during refuelling
{
  id: 'ms23-fire-refuelling',
  title: 'RA112 – Petrol Equipment – Fire during refuelling',
  hazard: 'Fire or explosion during refuelling',
  who: 'Employees; Contractors',
  how: 'Refuelling hot engine; ignition source nearby; fuel spill not cleaned',
  controls: 'Refuel only in designated ventilated area. Allow engine to cool before refuelling. Use approved fuel containers. No smoking or ignition sources. Clean spills immediately using spill kit.',
  action: 'Supervisor – Operatives',
  init: 'high',
  resid: 'medium',

  // Risk matrix (3x3)
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA112 – MS23 Petrol Equipment – Fire during refuelling
{
  id: 'ms23-fire-refuelling',
  title: 'RA112 – Petrol Equipment – Fire during refuelling',
  hazard: 'Fire or explosion during refuelling',
  who: 'Employees; Contractors',
  how: 'Refuelling hot engine; ignition source nearby; fuel spill not cleaned',
  controls: 'Refuel only in designated ventilated area. Allow engine to cool before refuelling. Use approved fuel containers. No smoking or ignition sources. Clean spills immediately using spill kit.',
  action: 'Supervisor – Operatives',
  init: 'high',
  resid: 'medium',

  // Risk matrix (3x3)
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA113 – MS23 Petrol Equipment – Inhalation of fumes in enclosed area
{
  id: 'ms23-fume-inhalation',
  title: 'RA113 – Petrol Equipment – Inhalation of exhaust fumes',
  hazard: 'Carbon monoxide poisoning from exhaust fumes',
  who: 'Employees; Contractors',
  how: 'Operating petrol equipment in poorly ventilated or confined spaces',
  controls: 'Do not operate petrol equipment in enclosed/confined spaces. Use electric/battery alternative where required. Ensure adequate ventilation. Brief operatives on CO risks.',
  action: 'Supervisor – Operatives',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA114 – MS23 Petrol Equipment – Hand–arm vibration
{
  id: 'ms23-havs',
  title: 'RA114 – Petrol Equipment – Hand–arm vibration exposure',
  hazard: 'HAVS from prolonged use of vibrating plant (e.g. wacker plate)',
  who: 'Operatives',
  how: 'Extended use without rotation; poorly maintained equipment; high vibration surfaces',
  controls: 'Monitor exposure time. Rotate tasks. Maintain equipment in good condition. Provide HAVS awareness training and health surveillance if required.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA115 – MS23 Petrol Equipment – Noise exposure
{
  id: 'ms23-noise',
  title: 'RA115 – Petrol Equipment – Noise-induced hearing loss',
  hazard: 'Hearing damage from high noise levels',
  who: 'Operatives; Persons nearby',
  how: 'Operating noisy petrol-driven equipment without hearing protection',
  controls: 'Wear suitable hearing protection. Limit exposure duration. Exclude non-essential personnel from immediate area. Maintain equipment.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA116 – MS23 Petrol Equipment – Fuel storage and environmental spill
{
  id: 'ms23-fuel-spill',
  title: 'RA116 – Petrol Equipment – Fuel spill/environmental contamination',
  hazard: 'Environmental contamination from fuel spill',
  who: 'Employees; Contractors; Environment',
  how: 'Improper storage; damaged container; overfilling; unsecured fuel area',
  controls: 'Store fuel in approved containers within designated area. Use bunding where required. Keep spill kit available. Train operatives in spill response procedure.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA117 – MS24 Backfilling – Collapse during backfill operations
{
  id: 'ms24-collapse-backfill',
  title: 'RA117 – Backfilling – Collapse during backfill operations',
  hazard: 'Collapse of excavation during backfilling',
  who: 'Employees; Contractors',
  how: 'Removing trench support too early; unstable trench sides; surcharge from plant/spoil',
  controls: 'Remove trench support progressively as backfill rises. Do not remove support prematurely. Keep plant and spoil away from trench edge. Competent person to inspect excavation condition.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Risk matrix (3x3)
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA118 – MS24 Backfilling – Struck by plant during compaction/backfill
{
  id: 'ms24-plant-interface',
  title: 'RA118 – Backfilling – Struck by plant during backfilling',
  hazard: 'Operative struck by excavator or compaction plant',
  who: 'Employees; Contractors',
  how: 'Working within plant operating radius; reversing plant; poor visibility',
  controls: 'Establish exclusion zones. Use trained banksman for manoeuvres. Maintain pedestrian/plant segregation. Brief operatives before works commence.',
  action: 'Supervisor – Plant Operator',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA119 – MS24 Backfilling – Damage to underground services
{
  id: 'ms24-service-damage',
  title: 'RA119 – Backfilling – Damage to underground services',
  hazard: 'Damage to buried services during backfilling/compaction',
  who: 'Employees; Contractors; Utility providers',
  how: 'Compacting directly over shallow services; inadequate surround material; failure to identify service routes',
  controls: 'Ensure services are correctly bedded and protected before backfilling. Confirm minimum cover depth. Use suitable surround material. Brief plant operators on service locations.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA120 – MS24 Backfilling – Manual handling of materials
{
  id: 'ms24-manual-handling',
  title: 'RA120 – Backfilling – Manual handling injuries',
  hazard: 'Musculoskeletal injury from handling materials or tools',
  who: 'Employees; Contractors',
  how: 'Lifting bags of material; repetitive shovelling; awkward posture in trench',
  controls: 'Use mechanical aids where practicable. Rotate tasks. Follow correct lifting technique. Brief operatives on manual handling guidance.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA121 – MS24 Backfilling – Slips and trips during reinstatement
{
  id: 'ms24-slips-trips',
  title: 'RA121 – Backfilling – Slips and trips during reinstatement',
  hazard: 'Slip or trip on uneven ground or loose materials',
  who: 'Employees; Contractors; Visitors',
  how: 'Uneven reinstated surfaces; loose aggregate; trailing tools/hoses',
  controls: 'Maintain good housekeeping. Keep access routes clear. Provide temporary pedestrian routes where required. Ensure adequate lighting.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA122 – MS25 Environmental – Fuel or oil spill
{
  id: 'ms25-fuel-oil-spill',
  title: 'RA122 – Environmental – Fuel or oil spill',
  hazard: 'Environmental contamination from fuel/oil spill',
  who: 'Employees; Contractors; Environment',
  how: 'Refuelling plant; damaged hoses; overfilling; plant leak',
  controls: 'Store fuel in designated bunded area. Keep spill kits available. Train operatives in spill response procedure. Stop work and contain spill immediately. Dispose of contaminated material via licensed carrier.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix (3x3)
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA123 – MS25 Environmental – Dust generation (silica/aggregate)
{
  id: 'ms25-dust-generation',
  title: 'RA123 – Environmental – Dust generation affecting workforce/public',
  hazard: 'Dust exposure and nuisance to neighbouring properties',
  who: 'Employees; Contractors; Public',
  how: 'Dry cutting; vehicle movements on dry ground; stockpiles exposed to wind',
  controls: 'Use water suppression where required. Damp down haul routes. Cover stockpiles. Position cutting activities away from public interface. Provide RPE where required.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA124 – MS25 Environmental – Noise nuisance to neighbours
{
  id: 'ms25-noise-nuisance',
  title: 'RA124 – Environmental – Excessive noise affecting neighbours',
  hazard: 'Noise nuisance and potential enforcement action',
  who: 'Public; Neighbouring properties',
  how: 'Prolonged use of noisy plant; working outside permitted hours; lack of communication with client/local authority',
  controls: 'Restrict noisy works to permitted hours. Maintain plant to reduce noise. Use acoustic barriers where required. Notify client if works likely to exceed normal limits.',
  action: 'Supervisor – Site Management',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA125 – MS25 Environmental – Silt runoff to drains/watercourses
{
  id: 'ms25-silt-runoff',
  title: 'RA125 – Environmental – Silt runoff to drainage systems',
  hazard: 'Pollution of watercourse or drainage system',
  who: 'Environment; Public; Client',
  how: 'Uncontrolled dewatering discharge; lack of silt socks or settlement control; heavy rainfall',
  controls: 'Use silt socks or settlement tanks for discharge. Route water to approved outfall. Inspect after rainfall. Stop discharge if contamination visible.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA126 – MS25 Environmental – Unexpected contamination encounter
{
  id: 'ms25-unexpected-contamination',
  title: 'RA126 – Environmental – Unexpected contaminated ground',
  hazard: 'Exposure to hazardous substances in contaminated soil',
  who: 'Employees; Contractors',
  how: 'Excavation encountering asbestos fragments, hydrocarbons or discoloured soils without prior identification',
  controls: 'Stop work immediately. Establish exclusion zone. Inform Site Manager. Arrange sampling and classification. Use appropriate PPE/RPE. Dispose via licensed waste carrier.',
  action: 'Supervisor – Site Management',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA127 – MS26 Lone Working – Medical emergency with no assistance
{
  id: 'ms26-medical-emergency',
  title: 'RA127 – Lone Working – Medical emergency without assistance',
  hazard: 'Delayed response to medical emergency',
  who: 'Lone Worker',
  how: 'Working alone without monitoring; sudden illness or injury; no immediate help available',
  controls: 'Avoid lone working where practicable. Implement check-in system (scheduled calls/visits). Ensure lone worker is medically fit. Provide emergency contact details and first aid kit. Establish escalation procedure.',
  action: 'Supervisor – Lone Worker',
  init: 'high',
  resid: 'medium',

  // Risk matrix (3x3)
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA128 – MS26 Lone Working – Assault or aggression from public
{
  id: 'ms26-aggression',
  title: 'RA128 – Lone Working – Aggression or assault from public',
  hazard: 'Verbal or physical assault',
  who: 'Lone Worker',
  how: 'Working in public areas; confrontation over road closures or site activities',
  controls: 'Avoid confrontation. Maintain professional conduct. Inform supervisor of high-risk areas. Work during daylight where practicable. Maintain communication device at all times.',
  action: 'Supervisor – Lone Worker',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA129 – MS26 Lone Working – Injury while operating equipment alone
{
  id: 'ms26-injury-equipment',
  title: 'RA129 – Lone Working – Injury while operating equipment alone',
  hazard: 'Injury from plant or tools without immediate assistance',
  who: 'Lone Worker',
  how: 'Operating machinery without supervision; entanglement or crush injury with no one nearby',
  controls: 'Do not operate high-risk plant alone. Ensure equipment suitable for solo use. Provide training. Maintain regular communication check-ins. Stop work if conditions unsafe.',
  action: 'Supervisor – Lone Worker',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA130 – MS26 Lone Working – Slips, trips and falls without support
{
  id: 'ms26-slips-trips',
  title: 'RA130 – Lone Working – Slips and trips without immediate assistance',
  hazard: 'Slip, trip or fall injury while working alone',
  who: 'Lone Worker',
  how: 'Uneven ground; poor lighting; isolated area',
  controls: 'Assess area before work. Ensure adequate lighting. Maintain good housekeeping. Carry communication device at all times.',
  action: 'Supervisor – Lone Worker',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA131 – MS26 Lone Working – Communication failure
{
  id: 'ms26-communication-failure',
  title: 'RA131 – Lone Working – Communication failure',
  hazard: 'Inability to summon assistance in emergency',
  who: 'Lone Worker',
  how: 'Mobile phone failure; poor signal; no defined check-in procedure',
  controls: 'Test communication devices before work. Establish check-in schedule. Provide backup communication method where possible. Escalation process clearly defined.',
  action: 'Supervisor – Lone Worker',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA132 – MS27 Visitors – Visitor unfamiliar with site hazards
{
  id: 'ms27-visitor-unaware-hazards',
  title: 'RA132 – Site Visitors – Visitor unfamiliar with site hazards',
  hazard: 'Visitor exposed to site hazards due to lack of awareness',
  who: 'Visitors; Clients; Inspectors',
  how: 'Visitor entering active work area without induction or supervision',
  controls: 'All visitors to report to site office. Provide site-specific induction. Issue required PPE. Visitors to be escorted at all times within work area.',
  action: 'Supervisor – Site Management',
  init: 'medium',
  resid: 'low',

  // Risk matrix (3x3)
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA133 – MS27 Visitors – Visitor struck by plant
{
  id: 'ms27-visitor-struck-plant',
  title: 'RA133 – Site Visitors – Visitor struck by plant',
  hazard: 'Visitor struck by moving plant',
  who: 'Visitors; Public',
  how: 'Visitor entering plant operating zone; lack of segregation; no escort',
  controls: 'Maintain plant/pedestrian segregation. Visitors to remain with escort at all times. High-visibility PPE mandatory. Stop plant movements if visitors entering work area.',
  action: 'Supervisor – Plant Operator',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA134 – MS27 Visitors – Falls into excavation/manhole
{
  id: 'ms27-visitor-fall-excavation',
  title: 'RA134 – Site Visitors – Fall into excavation or manhole',
  hazard: 'Fall into open excavation or chamber',
  who: 'Visitors; Public',
  how: 'Unprotected edges; removal of barriers; poor supervision',
  controls: 'Install barriers and edge protection around excavations. Keep covers secured. Visitors not permitted near open excavations. Escort to maintain safe route at all times.',
  action: 'Supervisor – Site Management',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA135 – MS27 Visitors – Exposure to dust/noise
{
  id: 'ms27-visitor-dust-noise',
  title: 'RA135 – Site Visitors – Exposure to dust or noise',
  hazard: 'Exposure to construction dust or high noise levels',
  who: 'Visitors; Public',
  how: 'Visitors entering active cutting or compaction area without PPE',
  controls: 'Issue appropriate PPE including hearing and eye protection where required. Restrict visitor access to high-risk areas. Suspend noisy works during visit if necessary.',
  action: 'Supervisor – Site Management',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA136 – MS27 Visitors – Public interface at site boundary
{
  id: 'ms27-public-interface',
  title: 'RA136 – Site Visitors – Public interface at site boundary',
  hazard: 'Public entering site or interacting with works',
  who: 'Public; Children; Pedestrians',
  how: 'Inadequate fencing; poor signage; open access points; curiosity',
  controls: 'Secure site boundary with fencing or barriers. Install warning signage. Lock gates when unattended. Regularly inspect perimeter. Maintain safe public diversion routes where required.',
  action: 'Supervisor – Site Management',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA137 – MS28 Emergency – Fire on site
{
  id: 'ms28-fire-on-site',
  title: 'RA137 – Emergency Procedure – Fire on site',
  hazard: 'Fire resulting in injury, burns or fatality',
  who: 'Employees; Contractors; Visitors; Public',
  how: 'Fuel ignition; hot works; electrical fault; arson; plant fire',
  controls: 'Maintain fire extinguishers on site and inspect regularly. No smoking policy enforced. Store fuel correctly. Brief workforce on fire evacuation procedure. Raise alarm immediately and contact emergency services.',
  action: 'Supervisor – All Operatives',
  init: 'high',
  resid: 'medium',

  // Risk matrix (3x3)
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA138 – MS28 Emergency – Gas service strike
{
  id: 'ms28-gas-strike',
  title: 'RA138 – Emergency Procedure – Gas service strike',
  hazard: 'Explosion or asphyxiation from damaged gas main',
  who: 'Employees; Contractors; Public',
  how: 'Excavation damaging live gas service',
  controls: 'Stop work immediately. Evacuate area. Do not use ignition sources. Establish exclusion zone. Contact gas emergency service. Supervisor to control site until declared safe.',
  action: 'Supervisor – Site Management',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA139 – MS28 Emergency – Electric cable strike
{
  id: 'ms28-electric-strike',
  title: 'RA139 – Emergency Procedure – Electric cable strike',
  hazard: 'Electric shock or electrocution following service strike',
  who: 'Employees; Contractors',
  how: 'Mechanical excavation damaging live electrical cable',
  controls: 'Stop work immediately. Do not approach damaged cable. Evacuate area and isolate plant. Contact electricity provider. Establish exclusion zone until declared safe.',
  action: 'Supervisor – Site Management',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA140 – MS28 Emergency – Excavation collapse with trapped person
{
  id: 'ms28-collapse-rescue',
  title: 'RA140 – Emergency Procedure – Excavation collapse rescue',
  hazard: 'Burial or crush injury due to trench collapse',
  who: 'Employees; Contractors',
  how: 'Trench collapse trapping operative',
  controls: 'Stop work immediately. Do not enter unsupported trench. Call emergency services. Implement rescue plan with trained personnel only. Supervisor to control scene and prevent secondary collapse.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA141 – MS28 Emergency – Serious injury / medical emergency
{
  id: 'ms28-serious-injury',
  title: 'RA141 – Emergency Procedure – Serious injury or medical emergency',
  hazard: 'Delayed treatment leading to worsening injury',
  who: 'Employees; Contractors; Visitors',
  how: 'Major injury on site; lack of immediate response; unclear emergency contact procedure',
  controls: 'Ensure trained first aider on site. Display emergency contact numbers. Provide stocked first aid kit. Stop work and make area safe. Call emergency services and guide them to location.',
  action: 'Supervisor – First Aider',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA142 – MS29 Site Security – Unauthorised access out of hours
{
  id: 'ms29-unauthorised-access',
  title: 'RA142 – Site Security – Unauthorised access out of hours',
  hazard: 'Unauthorised persons entering site',
  who: 'Public; Children; Trespassers',
  how: 'Inadequate fencing; gates left unlocked; poor boundary checks; remote site location',
  controls: 'Secure perimeter fencing installed and inspected regularly. Lock gates when site unattended. Display warning signage. Remove ladders and secure plant. Report breaches immediately.',
  action: 'Supervisor – Site Management',
  init: 'high',
  resid: 'medium',

  // Risk matrix (3x3)
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA143 – MS29 Site Security – Theft or vandalism of plant
{
  id: 'ms29-theft-vandalism',
  title: 'RA143 – Site Security – Theft or vandalism of plant/equipment',
  hazard: 'Damage, theft or misuse of plant',
  who: 'Employees; Public; Company',
  how: 'Plant left unsecured; keys left in ignition; poor lighting; remote access points',
  controls: 'Remove keys from plant when unattended. Use immobilisers and anti-theft devices. Store small plant in locked container. Install lighting where required.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA144 – MS29 Site Security – Plant misuse by intruder
{
  id: 'ms29-plant-misuse',
  title: 'RA144 – Site Security – Plant misuse by intruder',
  hazard: 'Injury caused by unauthorised use of plant',
  who: 'Public; Trespassers; Employees',
  how: 'Unauthorised person gaining access to plant; lack of isolation; unsecured controls',
  controls: 'Remove keys and isolate plant. Lower attachments to ground. Lock cabs. Install perimeter fencing. Conduct end-of-day security checks.',
  action: 'Supervisor – Site Management',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA145 – MS29 Site Security – Fire due to arson or stored materials
{
  id: 'ms29-arson-fire',
  title: 'RA145 – Site Security – Fire due to arson or stored materials',
  hazard: 'Fire caused by unauthorised ignition',
  who: 'Employees; Public; Neighbouring properties',
  how: 'Stored flammable materials; unsecured fuel storage; trespassers igniting materials',
  controls: 'Store flammable materials securely. Remove waste regularly. Secure fuel in approved containers. Lock site out of hours. Conduct daily housekeeping checks.',
  action: 'Supervisor – Site Management',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA146 – MS29 Site Security – Public injury due to unsecured hazards
{
  id: 'ms29-unsecured-hazards',
  title: 'RA146 – Site Security – Public injury from unsecured hazards',
  hazard: 'Injury to public from open excavations or materials',
  who: 'Public; Children; Trespassers',
  how: 'Excavations left open without barrier; materials stacked unsafely; poor end-of-day checks',
  controls: 'Install barriers around excavations. Secure or cover open manholes. Stack materials safely. Conduct end-of-day inspection and record security checks.',
  action: 'Supervisor – Site Management',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA146 – MS29 Site Security – Public injury due to unsecured hazards
{
  id: 'ms29-unsecured-hazards',
  title: 'RA146 – Site Security – Public injury from unsecured hazards',
  hazard: 'Injury to public from open excavations or materials',
  who: 'Public; Children; Trespassers',
  how: 'Excavations left open without barrier; materials stacked unsafely; poor end-of-day checks',
  controls: 'Install barriers around excavations. Secure or cover open manholes. Stack materials safely. Conduct end-of-day inspection and record security checks.',
  action: 'Supervisor – Site Management',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA148 – MS30 Site Visitors – Delivery vehicle reversing collision
{
  id: 'ms30-reversing-collision',
  title: 'RA148 – Site Visitors – Delivery vehicle reversing collision',
  hazard: 'Collision during reversing manoeuvre',
  who: 'Delivery Drivers; Employees; Public',
  how: 'Restricted access; blind spots; no banksman; poor communication',
  controls: 'Avoid reversing where possible. Use trained banksman and clear signals. Ensure reversing alarms and beacons operational. Maintain clear access route.',
  action: 'Supervisor – Banksman',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA149 – MS30 Site Visitors – Visitor entering unsafe area
{
  id: 'ms30-visitor-unsafe-area',
  title: 'RA149 – Site Visitors – Visitor entering unsafe area',
  hazard: 'Visitor exposed to active construction hazards',
  who: 'Inspectors; Clients; Visitors',
  how: 'Visitor walking into excavation area; entering plant zone without escort',
  controls: 'All visitors to sign in and receive induction. Visitors to be escorted at all times. Provide required PPE. Restrict access to high-risk areas.',
  action: 'Supervisor – Site Management',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA150 – MS30 Site Visitors – Slips/trips during visit
{
  id: 'ms30-visitor-slips-trips',
  title: 'RA150 – Site Visitors – Slips and trips during visit',
  hazard: 'Slip or trip on uneven ground',
  who: 'Visitors; Delivery Drivers; Inspectors',
  how: 'Uneven surfaces; loose materials; poor housekeeping; weather conditions',
  controls: 'Maintain tidy access routes. Provide safe pedestrian walkway. Brief visitors on ground conditions. Ensure suitable footwear worn.',
  action: 'Supervisor – All Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA151 – MS30 Site Visitors – Exposure to hazardous substances or noise
{
  id: 'ms30-visitor-exposure',
  title: 'RA151 – Site Visitors – Exposure to dust, noise or hazardous substances',
  hazard: 'Visitor exposure to construction-related hazards',
  who: 'Visitors; Inspectors; Delivery Drivers',
  how: 'Visiting during cutting, compaction or noisy operations without PPE',
  controls: 'Provide appropriate PPE (eye, hearing, RPE where required). Restrict access to high-risk activities. Suspend hazardous works during visit if necessary.',
  action: 'Supervisor – Site Management',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA152 – MS31 360 Excavator – Struck by slewing excavator
{
  id: 'ms31-struck-by-slewing',
  title: 'RA152 – 360 Excavator – Struck by slewing machine',
  hazard: 'Operative struck by excavator during slewing',
  who: 'Employees; Contractors; Visitors',
  how: 'Personnel entering swing radius; poor segregation; blind spots during rotation',
  controls: 'Establish exclusion zone around machine. Use trained banksman where required. Fit reversing alarm and beacon. No personnel within swing radius unless machine isolated.',
  action: 'Supervisor – Plant Operator',
  init: 'high',
  resid: 'medium',

  // Risk matrix (3x3)
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA153 – MS31 360 Excavator – Contact with overhead power lines
{
  id: 'ms31-overhead-lines',
  title: 'RA153 – 360 Excavator – Contact with overhead power lines',
  hazard: 'Electrocution from contact with overhead lines',
  who: 'Operator; Employees; Contractors',
  how: 'Operating within safe clearance distance; failure to identify overhead hazards',
  controls: 'Identify overhead lines before works. Maintain minimum clearance distances (GS6). Install goalposts where required. Brief operator during RAMS induction.',
  action: 'Supervisor – Plant Operator',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA154 – MS31 360 Excavator – Underground service strike
{
  id: 'ms31-service-strike',
  title: 'RA154 – 360 Excavator – Underground service strike',
  hazard: 'Damage to underground services (gas/electric/water)',
  who: 'Employees; Contractors; Utility providers; Public',
  how: 'Excavating without confirming service routes; mechanical excavation in tolerance zone',
  controls: 'Obtain service drawings. Conduct CAT & Genny scan. Hand dig trial holes in tolerance zone. Implement permit-to-dig system. Brief operator on marked services.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA155 – MS31 360 Excavator – Machine overturning
{
  id: 'ms31-overturn',
  title: 'RA155 – 360 Excavator – Machine overturning',
  hazard: 'Overturning due to unstable ground or overreach',
  who: 'Operator; Employees nearby',
  how: 'Operating too close to trench edge; overreaching; soft ground; excessive load',
  controls: 'Assess ground conditions before operation. Keep safe distance from excavation edges. Do not exceed load charts. Use seatbelt and ensure ROPS fitted.',
  action: 'Supervisor – Operator',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA156 – MS31 360 Excavator – Falling objects from bucket
{
  id: 'ms31-falling-objects',
  title: 'RA156 – 360 Excavator – Falling objects from bucket',
  hazard: 'Injury from falling material during loading',
  who: 'Employees; Contractors',
  how: 'Overfilled bucket; slewing with raised load; personnel standing beneath raised arm',
  controls: 'Do not overload bucket. Keep load low while slewing. Establish exclusion zone. Never allow personnel under suspended load.',
  action: 'Supervisor – Operator',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA157 – MS31 360 Excavator – Operator visibility / blind spots
{
  id: 'ms31-blind-spots',
  title: 'RA157 – 360 Excavator – Operator visibility and blind spots',
  hazard: 'Collision due to limited visibility',
  who: 'Employees; Contractors',
  how: 'Restricted line of sight; pedestrians entering blind area; poor site layout',
  controls: 'Use trained banksman when required. Ensure mirrors/cameras functional. Maintain clear site layout and pedestrian segregation. Brief workforce during induction.',
  action: 'Supervisor – Operator',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA158 – MS32 Block & Beam – Crush injury during beam placement
{
  id: 'ms32-crush-beam-placement',
  title: 'RA158 – Block & Beam – Crush injury during beam placement',
  hazard: 'Crush injury during placement of precast beams',
  who: 'Employees; Contractors',
  how: 'Hands trapped between beam and support; uncontrolled lowering; standing within lift zone',
  controls: 'Use certified lifting accessories and follow lift plan. Establish exclusion zone. Use trained slinger/signaller. Keep hands clear of pinch points. Do not stand beneath suspended load.',
  action: 'Supervisor – Slinger/Signaller',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA159 – MS32 Block & Beam – Collapse due to incorrect bearing
{
  id: 'ms32-incorrect-bearing',
  title: 'RA159 – Block & Beam – Collapse due to inadequate bearing',
  hazard: 'Structural instability due to incorrect beam seating',
  who: 'Employees; Contractors',
  how: 'Insufficient bearing length; damaged blockwork; incorrect installation sequence',
  controls: 'Verify bearing length as per design. Inspect supports before placement. Follow manufacturer installation sequence. Supervisor to check alignment and seating before loading.',
  action: 'Supervisor – Site Management',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA160 – MS32 Block & Beam – Fall through unprotected floor
{
  id: 'ms32-fall-through-floor',
  title: 'RA160 – Block & Beam – Fall through unprotected floor void',
  hazard: 'Fall from height through incomplete floor system',
  who: 'Employees; Contractors',
  how: 'Walking across incomplete floor; missing infill blocks; unprotected edges',
  controls: 'Install temporary edge protection. Do not walk on incomplete floor. Provide safe access routes. Cover or barrier openings immediately.',
  action: 'Supervisor – Operatives',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA161 – MS32 Block & Beam – Manual handling of infill blocks
{
  id: 'ms32-manual-handling-blocks',
  title: 'RA161 – Block & Beam – Manual handling of infill blocks',
  hazard: 'Musculoskeletal injury from repetitive lifting',
  who: 'Employees; Contractors',
  how: 'Lifting heavy concrete infill blocks repeatedly; poor posture; overreaching',
  controls: 'Rotate tasks. Use correct lifting technique. Stack materials close to work area. Provide manual handling briefing.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA162 – MS33 General Lifting – Failure of lifting equipment
{
  id: 'ms33-lifting-equipment-failure',
  title: 'RA162 – General Lifting – Failure of lifting equipment',
  hazard: 'Load falling due to lifting equipment failure',
  who: 'Employees; Contractors; Visitors',
  how: 'Defective chains, slings or lifting points; lack of inspection; incorrect SWL selection',
  controls: 'All lifting accessories to be LOLER inspected and in date. Check SWL before lift. Appointed Person to produce lift plan where required. Do not use damaged equipment.',
  action: 'Appointed Person – Supervisor',
  init: 'high',
  resid: 'medium',

  // Risk matrix (3x3)
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA163 – MS33 General Lifting – Struck by suspended load
{
  id: 'ms33-struck-by-load',
  title: 'RA163 – General Lifting – Struck by suspended load',
  hazard: 'Operative struck by suspended load',
  who: 'Employees; Contractors',
  how: 'Standing within lift zone; uncontrolled slewing; sudden load shift',
  controls: 'Establish exclusion zone around lift area. Use trained slinger/signaller. Use tag lines where required. Never stand beneath suspended load.',
  action: 'Lift Supervisor – Slinger',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA164 – MS33 General Lifting – Load instability / swinging load
{
  id: 'ms33-load-instability',
  title: 'RA164 – General Lifting – Load instability or uncontrolled swing',
  hazard: 'Load swinging causing impact or crush injury',
  who: 'Employees; Contractors',
  how: 'Wind conditions; poor attachment; sudden machine movement',
  controls: 'Assess weather conditions before lift. Secure load correctly. Use tag lines where required. Conduct test lift before full movement.',
  action: 'Lift Supervisor – Operator',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA165 – MS33 General Lifting – Ground failure under crane/plant
{
  id: 'ms33-ground-failure',
  title: 'RA165 – General Lifting – Ground failure under lifting plant',
  hazard: 'Overturning due to inadequate ground bearing capacity',
  who: 'Operator; Employees nearby',
  how: 'Soft ground; lack of outrigger mats; excessive load radius',
  controls: 'Assess ground bearing capacity before lift. Use suitable outrigger mats. Follow lift plan and load charts. Do not exceed rated capacity.',
  action: 'Appointed Person – Operator',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA166 – MS33 General Lifting – Poor communication during lift
{
  id: 'ms33-poor-communication',
  title: 'RA166 – General Lifting – Poor communication during lift',
  hazard: 'Collision or injury due to miscommunication',
  who: 'Operator; Slinger; Employees',
  how: 'Unclear hand signals; multiple instructions; lack of designated signaler',
  controls: 'Appoint single trained slinger/signaller. Use standard hand signals. Maintain clear line of sight. Stop lift if communication lost.',
  action: 'Lift Supervisor – Slinger',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA167 – MS34 Dewatering – Electrical shock from pump equipment
{
  id: 'ms34-electrical-shock',
  title: 'RA167 – Dewatering – Electrical shock from pump equipment',
  hazard: 'Electric shock from pump or power supply',
  who: 'Employees; Contractors',
  how: 'Damaged cables; water contact with live equipment; no RCD protection',
  controls: 'Use 110v supply with transformer and RCD protection. Inspect cables before use. Keep connections elevated and dry. Do not use damaged equipment.',
  action: 'Supervisor – Operatives',
  init: 'high',
  resid: 'medium',

  // Risk matrix (3x3)
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA168 – MS34 Dewatering – Trench instability due to water removal
{
  id: 'ms34-trench-instability',
  title: 'RA168 – Dewatering – Trench instability during pumping',
  hazard: 'Collapse due to change in ground stability',
  who: 'Employees; Contractors',
  how: 'Rapid removal of groundwater; undermining trench sides; inadequate support',
  controls: 'Install trench support before pumping. Monitor trench condition during dewatering. Do not enter unsupported excavation. Competent person to inspect regularly.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA169 – MS34 Dewatering – Discharge causing environmental pollution
{
  id: 'ms34-pollution-discharge',
  title: 'RA169 – Dewatering – Pollution from uncontrolled discharge',
  hazard: 'Silt or contaminated water entering drainage system',
  who: 'Environment; Public; Client',
  how: 'Discharge directly to drain without filtration; no silt socks; heavy rainfall',
  controls: 'Use silt socks or settlement tanks. Route discharge to approved outfall. Inspect water clarity before discharge. Stop pumping if contamination visible.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA170 – MS34 Dewatering – Trip hazards from hoses and cables
{
  id: 'ms34-trip-hoses',
  title: 'RA170 – Dewatering – Trips from hoses and cables',
  hazard: 'Slip or trip due to pump hoses and trailing cables',
  who: 'Employees; Contractors; Visitors',
  how: 'Hoses routed across walkways; poor housekeeping; low lighting',
  controls: 'Route hoses away from pedestrian routes. Secure cables and protect crossings. Maintain good housekeeping. Provide adequate lighting.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA171 – MS34 Dewatering – Contact with contaminated water
{
  id: 'ms34-contaminated-water',
  title: 'RA171 – Dewatering – Contact with contaminated water',
  hazard: 'Exposure to contaminated groundwater',
  who: 'Employees; Contractors',
  how: 'Handling pump intake in contaminated ground; splash during discharge',
  controls: 'Wear suitable gloves and waterproof PPE. Avoid direct contact. Wash hands before eating/drinking. Stop work if contamination suspected and inform supervisor.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA172 – MS35 Service Ducts – Damage to existing underground services
{
  id: 'ms35-service-strike',
  title: 'RA172 – Service Duct Installation – Damage to existing underground services',
  hazard: 'Service strike during trenching or duct installation',
  who: 'Employees; Contractors; Utility providers; Public',
  how: 'Failure to follow HSG47; mechanical excavation in tolerance zone; inaccurate drawings',
  controls: 'Obtain up-to-date utility drawings. Conduct CAT & Genny scan. Hand dig trial holes within tolerance zone. Implement permit-to-dig procedure.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Risk matrix (3x3)
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA173 – MS35 Service Ducts – Trench collapse during duct install
{
  id: 'ms35-trench-collapse',
  title: 'RA173 – Service Duct Installation – Trench collapse',
  hazard: 'Collapse of trench during duct laying',
  who: 'Employees; Contractors',
  how: 'Unsupported trench sides; removal of trench box too early; surcharge from spoil',
  controls: 'Install trench support where required. Keep spoil and plant away from edge. Competent person to inspect excavation daily and after weather events.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA174 – MS35 Service Ducts – Manual handling of duct lengths
{
  id: 'ms35-manual-handling-ducts',
  title: 'RA174 – Service Duct Installation – Manual handling of duct lengths',
  hazard: 'Musculoskeletal injury from lifting and positioning ducts',
  who: 'Employees; Contractors',
  how: 'Lifting long duct sections; awkward posture in trench; repetitive movement',
  controls: 'Use team lifts where required. Store ducts close to work area. Rotate tasks. Brief operatives on safe lifting technique.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA175 – MS35 Service Ducts – Collapse or damage during backfill
{
  id: 'ms35-duct-damage-backfill',
  title: 'RA175 – Service Duct Installation – Duct damage during backfill',
  hazard: 'Damage to ducting due to incorrect surround or compaction',
  who: 'Employees; Contractors; Utility providers',
  how: 'Compacting directly over duct; insufficient bedding; incorrect material used',
  controls: 'Install specified sand/selected surround before backfill. Maintain minimum cover depth. Brief plant operators on duct location.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA176 – MS35 Service Ducts – Trips and falls along trench line
{
  id: 'ms35-trips-falls',
  title: 'RA176 – Service Duct Installation – Trips and falls along trench line',
  hazard: 'Slip, trip or fall injury near open trench',
  who: 'Employees; Contractors; Visitors',
  how: 'Uneven ground; trailing ducts; poor lighting; unprotected trench edge',
  controls: 'Install edge protection where required. Maintain clear access routes. Provide adequate lighting. Keep materials stacked safely.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA177 – MS36 Bulk Excavation – Struck by plant during excavation
{
  id: 'ms36-struck-by-plant',
  title: 'RA177 – Bulk Excavation – Struck by plant during excavation',
  hazard: 'Operative struck by excavator or dozer',
  who: 'Employees; Contractors; Visitors',
  how: 'Personnel entering operating zone; poor segregation; blind spots during stripping works',
  controls: 'Establish plant exclusion zones. Use trained banksman where visibility restricted. Fit reversing alarms and beacons. Maintain pedestrian/plant segregation.',
  action: 'Supervisor – Plant Operator',
  init: 'high',
  resid: 'medium',

  // Risk matrix (3x3)
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA178 – MS36 Bulk Excavation – Excavation collapse or ground failure
{
  id: 'ms36-ground-failure',
  title: 'RA178 – Bulk Excavation – Ground failure or collapse',
  hazard: 'Collapse of excavation face or unstable ground',
  who: 'Employees; Contractors',
  how: 'Over-steep batters; soft ground; heavy rainfall; surcharge loading',
  controls: 'Excavate to safe batter angles. Assess ground conditions regularly. Keep plant and spoil away from edges. Stop work during adverse weather if stability compromised.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA179 – MS36 Bulk Excavation – Contact with underground services
{
  id: 'ms36-service-strike',
  title: 'RA179 – Bulk Excavation – Underground service strike',
  hazard: 'Damage to buried utilities during topsoil strip',
  who: 'Employees; Contractors; Public; Utility providers',
  how: 'Inadequate service identification prior to stripping; mechanical excavation over live services',
  controls: 'Obtain service drawings. Conduct CAT & Genny scan. Mark service routes clearly. Hand dig in tolerance zones. Implement permit-to-dig system.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA180 – MS36 Bulk Excavation – Plant overturning on uneven ground
{
  id: 'ms36-plant-overturn',
  title: 'RA180 – Bulk Excavation – Plant overturning',
  hazard: 'Machine overturning due to uneven or soft ground',
  who: 'Operator; Employees nearby',
  how: 'Operating on unstable ground; excessive side slope; overreaching during bulk dig',
  controls: 'Assess ground conditions before works. Operate within manufacturer limits. Avoid excessive side slopes. Use seatbelt and ensure ROPS fitted.',
  action: 'Supervisor – Operator',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA181 – MS36 Bulk Excavation – Dust generation during strip
{
  id: 'ms36-dust',
  title: 'RA181 – Bulk Excavation – Dust generation',
  hazard: 'Dust inhalation and nuisance to neighbouring properties',
  who: 'Employees; Contractors; Public',
  how: 'Dry stripping operations; vehicle movements on dry ground; exposed stockpiles',
  controls: 'Use water suppression where required. Damp down haul routes. Cover stockpiles. Provide RPE if required. Monitor weather conditions.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA182 – MS37 Live Highway – Operative struck by passing vehicle
{
  id: 'ms37-struck-by-traffic',
  title: 'RA182 – Working Adjacent to Live Highway – Operative struck by passing vehicle',
  hazard: 'Operative struck by moving traffic',
  who: 'Employees; Contractors',
  how: 'Working within live carriageway without adequate traffic management; distracted driver; inadequate barrier protection',
  controls: 'Implement approved traffic management plan in accordance with Chapter 8. Install cones, barriers and signage. Maintain safe working zone. All operatives to wear Class 3 high-visibility clothing.',
  action: 'Supervisor – Traffic Management Lead',
  init: 'high',
  resid: 'medium',

  // Risk matrix (3x3)
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA183 – MS37 Live Highway – Vehicle entering work zone
{
  id: 'ms37-vehicle-entering-zone',
  title: 'RA183 – Working Adjacent to Live Highway – Vehicle entering work zone',
  hazard: 'Vehicle breaching traffic management zone',
  who: 'Employees; Contractors; Public',
  how: 'Inadequate signage; poorly positioned barriers; driver error; high-speed traffic',
  controls: 'Set out traffic management in accordance with approved drawings. Regularly inspect cones and barriers. Use impact protection vehicle where required. Brief workforce on emergency escape routes.',
  action: 'Supervisor – Traffic Management Lead',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA184 – MS37 Live Highway – Collision during site vehicle access/egress
{
  id: 'ms37-site-access-collision',
  title: 'RA184 – Working Adjacent to Live Highway – Collision during site access/egress',
  hazard: 'Collision when plant or delivery vehicle enters/exits site',
  who: 'Employees; Delivery Drivers; Public',
  how: 'Poor visibility at access point; reversing into live traffic; no banksman',
  controls: 'Designate controlled access point. Use trained banksman for all vehicle movements. Install warning signage. Schedule deliveries outside peak hours where possible.',
  action: 'Supervisor – Banksman',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA185 – MS37 Live Highway – Pedestrian interface with works
{
  id: 'ms37-pedestrian-interface',
  title: 'RA185 – Working Adjacent to Live Highway – Pedestrian interface',
  hazard: 'Pedestrian entering work area',
  who: 'Public; Employees',
  how: 'Inadequate pedestrian diversion; unclear signage; barriers removed',
  controls: 'Provide clearly signed pedestrian diversion routes. Maintain barrier integrity. Inspect daily. Brief workforce to challenge unauthorised access.',
  action: 'Supervisor – Site Management',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA186 – MS37 Live Highway – Night working visibility risk
{
  id: 'ms37-night-visibility',
  title: 'RA186 – Working Adjacent to Live Highway – Reduced visibility (night works)',
  hazard: 'Reduced visibility leading to collision or injury',
  who: 'Employees; Contractors; Public',
  how: 'Poor lighting; inadequate reflective signage; driver visibility reduced',
  controls: 'Install adequate temporary lighting towers. Ensure reflective signage and cones are clean and visible. All operatives to wear high-visibility PPE. Regular inspection of lighting setup.',
  action: 'Supervisor – Traffic Management Lead',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=high(3) = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA187 – MS38 Edgings – Manual handling injuries
{
  id: 'ms38-manual-handling',
  title: 'RA187 – Installing Edgings – Manual handling injuries',
  hazard: 'Musculoskeletal injury from lifting/carrying edgings, kerbs, restraints and materials',
  who: 'Employees; Contractors',
  how: 'Handling heavy units repeatedly; twisting while lifting; carrying over uneven ground; poor stacking/positioning of materials leading to overreach',
  controls: 'Plan lifts and material drops to minimise carrying distance. Use mechanical kerb lifter/vacuum lifter where practicable. Team lift where mechanical aid not possible. Use correct lifting technique (no twisting, keep load close). Rotate tasks and take breaks to reduce fatigue. Stack materials on firm level ground at waist height where possible.',
  action: 'Supervisor – Operatives',
  init: 'high',
  resid: 'low',

  // Risk matrix (3x3)
  // Initial: Likelihood=high(3) × Severity=medium(2) = 6 → HIGH
  initL: 'high',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA188 – MS38 Edgings – Crush/trap injuries during placement
{
  id: 'ms38-crush-trap',
  title: 'RA188 – Installing Edgings – Crush/trap injuries during placement',
  hazard: 'Crushed fingers/toes during positioning/haunching of edging restraints',
  who: 'Employees; Contractors',
  how: 'Hands placed under unit while lowering; unit slips/rocks on unstable bed; use of pinch bars without control; poor communication during team lifts',
  controls: 'Use mechanical lifter where practicable. Keep hands clear of pinch points; use guide bars/handles rather than hands beneath units. Prepare stable concrete bed and avoid placing onto loose/uneven formation. Wear gloves and safety boots. Use clear communication (one person directing) during team lifts. Do not “fiddle” the unit while suspended/unstable—set down fully then adjust.',
  action: 'Supervisor – Operatives',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA189 – MS38 Edgings – Cement burns/dermatitis from concrete bed/haunch
{
  id: 'ms38-cement-burns',
  title: 'RA189 – Installing Edgings – Cement burns/dermatitis',
  hazard: 'Skin burns/dermatitis from wet cement and concrete splash',
  who: 'Employees; Contractors',
  how: 'Handling wet concrete/mortar without suitable gloves; kneeling/leaning into concrete bed; wet cement trapped against skin/clothing',
  controls: 'Wear waterproof gloves and long sleeves; cover exposed skin. Use kneeling boards/knee protection where needed. Avoid direct contact; use tools (trowels/shovels) not hands. Provide welfare/wash facilities; wash immediately if contaminated. Remove wet contaminated clothing promptly. Brief operatives on cement burn symptoms and first aid.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA190 – MS38 Edgings – Slips/trips and falls on uneven ground/work area
{
  id: 'ms38-slips-trips',
  title: 'RA190 – Installing Edgings – Slips/trips and falls',
  hazard: 'Slips/trips/falls on uneven formation, tools, materials and open edges',
  who: 'Employees; Contractors; Visitors',
  how: 'Uneven excavation line; loose Type 1/sand; trailing string lines/tools; stepping backwards while placing units; poor housekeeping',
  controls: 'Maintain tidy work area; keep tools/materials stacked neatly and away from walk routes. Establish clear pedestrian routes around the workface. Keep string lines visible and out of footpaths. Good lighting in poor visibility. Wear suitable safety boots. Brief operatives to avoid stepping backwards without checking footing.',
  action: 'Supervisor – All Operatives',
  init: 'medium',
  resid: 'low',

  // Risk matrix
  // Initial: Likelihood=medium(2) × Severity=medium(2) = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA191 – MS38 Edgings – Struck by plant/vehicles during deliveries or placement
{
  id: 'ms38-plant-interface',
  title: 'RA191 – Installing Edgings – Struck by plant/vehicles',
  hazard: 'Operatives struck by plant/vehicles delivering or positioning materials',
  who: 'Employees; Contractors; Delivery Drivers',
  how: 'Deliveries tipping near work area; excavator moving units; reversing movements; poor segregation and blind spots',
  controls: 'Set a designated delivery/unloading area on firm level ground. Use trained banksman for all reversing/tipping. Establish exclusion zone around plant and lifting operations. Maintain pedestrian/vehicle segregation. Brief delivery drivers on site rules; drivers remain in cab unless directed. Stop work if segregation is compromised.',
  action: 'Supervisor – Banksman/Operator',
  init: 'high',
  resid: 'medium',

  // Risk matrix
  // Initial: Likelihood=high(3) × Severity=high(3) = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: Likelihood=low(1) × Severity=high(3) = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA192 – MS40 Ground Slab – Manual handling of reinforcement/mesh
{
  id: 'ms40-manual-handling-mesh',
  title: 'RA192 – Ground-Bearing Slab – Manual handling of reinforcement/mesh',
  hazard: 'Musculoskeletal injury from lifting and positioning reinforcement mesh and materials',
  who: 'Employees; Contractors',
  how: 'Lifting large mesh sheets; awkward carrying; twisting while placing; repetitive handling of spacers and chairs',
  controls: 'Plan delivery and storage close to point of use. Use mechanical aids where practicable. Team lift mesh sheets. Maintain good posture and avoid twisting under load. Rotate tasks to reduce repetitive strain. Brief operatives on manual handling techniques.',
  action: 'Supervisor – Operatives',
  init: 'high',
  resid: 'low',

  // Initial: Likelihood=high(3) × Severity=medium(2) = 6 → HIGH
  initL: 'high',
  initS: 'medium',
  // Residual: Likelihood=low(1) × Severity=medium(2) = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA193 – MS40 Ground Slab – Trip/fall on reinforcement and uneven sub-base
{
  id: 'ms40-trip-rebar-subbase',
  title: 'RA193 – Ground-Bearing Slab – Trip/fall on reinforcement or uneven ground',
  hazard: 'Slip, trip or fall injury during preparation and pour',
  who: 'Employees; Contractors',
  how: 'Walking across loose mesh; uneven compacted formation; trailing hoses; stepping backwards while screeding',
  controls: 'Secure mesh on chairs before access. Maintain clear designated walk routes. Keep hoses routed away from access paths. Maintain good housekeeping. Provide adequate lighting in low visibility conditions.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Initial: 2×2 = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA194 – MS40 Ground Slab – Cement burns/dermatitis during pour
{
  id: 'ms40-cement-burns',
  title: 'RA194 – Ground-Bearing Slab – Cement burns/dermatitis',
  hazard: 'Skin burns from contact with wet concrete',
  who: 'Employees; Contractors',
  how: 'Handling wet concrete; kneeling in fresh pour; splashes to skin or eyes; contaminated clothing',
  controls: 'Wear waterproof gloves, long sleeves and eye protection. Use kneeling boards. Avoid direct skin contact. Wash immediately if exposed. Remove contaminated clothing. Provide welfare facilities and first aid provision.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Initial: 2×2 = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA195 – MS40 Ground Slab – Entanglement with vibrating poker/power float
{
  id: 'ms40-entanglement-equipment',
  title: 'RA195 – Ground-Bearing Slab – Entanglement with vibrating equipment',
  hazard: 'Injury from rotating/moving equipment (poker/power float)',
  who: 'Employees; Contractors',
  how: 'Loose clothing; contact with rotating blades; loss of control; working in confined slab area',
  controls: 'Only trained operatives to use vibrating equipment. Inspect equipment before use. Keep guards in place. Wear close-fitting clothing. Maintain firm footing and clear working area. Switch off before adjustments.',
  action: 'Supervisor – Competent Operator',
  init: 'high',
  resid: 'medium',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA196 – MS40 Ground Slab – Vehicle/plant interface during concrete delivery
{
  id: 'ms40-vehicle-interface',
  title: 'RA196 – Ground-Bearing Slab – Vehicle interface during concrete delivery',
  hazard: 'Operatives struck by concrete wagon or pump',
  who: 'Employees; Contractors; Delivery Drivers',
  how: 'Reversing wagon into position; poor visibility; operatives standing behind vehicle; congested pour area',
  controls: 'Use trained banksman for all reversing. Establish exclusion zone around delivery vehicle. Brief driver on site rules. Maintain clear access and egress routes. All operatives to wear high-visibility PPE.',
  action: 'Supervisor – Banksman',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA197 – MS41 Manhole Brickwork – Hazardous atmosphere in chamber
{
  id: 'ms41-hazardous-atmosphere',
  title: 'RA197 – Brickwork to Manholes – Hazardous atmosphere',
  hazard: 'Exposure to harmful gases or oxygen deficiency in chamber',
  who: 'Employees; Contractors',
  how: 'Entering chamber without gas testing; build-up of methane, hydrogen sulphide or low oxygen levels; inadequate ventilation',
  controls: 'Avoid entry where possible. Gas test before and during entry using calibrated monitor. Issue confined space permit where required. Provide forced ventilation. Ensure trained top man and rescue plan in place. Do not enter unsupported or untested chamber.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA198 – MS41 Manhole Brickwork – Fall into excavation/chamber
{
  id: 'ms41-fall-excavation',
  title: 'RA198 – Brickwork to Manholes – Fall into excavation or chamber',
  hazard: 'Fall from height into open excavation',
  who: 'Employees; Contractors; Visitors',
  how: 'Unprotected excavation edge; removal of cover slab; poor lighting; stepping backwards while laying bricks',
  controls: 'Install edge protection or barriers around excavation. Secure covers when not working. Provide safe ladder access extending 1m above landing. Maintain good housekeeping. Provide adequate lighting.',
  action: 'Supervisor – Operatives',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA199 – MS41 Manhole Brickwork – Collapse of excavation sides
{
  id: 'ms41-excavation-collapse',
  title: 'RA199 – Brickwork to Manholes – Excavation collapse',
  hazard: 'Collapse of excavation causing burial or crush injury',
  who: 'Employees; Contractors',
  how: 'Unsupported excavation; removal of trench box too early; surcharge from spoil or plant',
  controls: 'Install trench support or batter sides to safe angle. Keep spoil and plant at least 2m from edge unless engineered protection provided. Inspect excavation daily and after rainfall. Competent person sign-off before entry.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA200 – MS41 Manhole Brickwork – Manual handling of bricks/rings
{
  id: 'ms41-manual-handling',
  title: 'RA200 – Brickwork to Manholes – Manual handling injuries',
  hazard: 'Musculoskeletal injury from handling bricks, mortar and components',
  who: 'Employees; Contractors',
  how: 'Repetitive lifting of bricks; awkward posture in confined excavation; lifting cover slabs without mechanical aid',
  controls: 'Use mechanical lifting for heavy components (rings/slabs). Store materials close to work area. Rotate tasks. Maintain stable footing in excavation. Brief operatives on safe lifting techniques.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Initial: 2×2 = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA201 – MS41 Manhole Brickwork – Contact with wet cement/mortar
{
  id: 'ms41-cement-exposure',
  title: 'RA201 – Brickwork to Manholes – Cement exposure',
  hazard: 'Skin burns or dermatitis from cement/mortar',
  who: 'Employees; Contractors',
  how: 'Handling mortar with bare hands; kneeling in wet mix; splash to eyes or skin',
  controls: 'Wear suitable gloves and eye protection. Avoid direct contact with wet cement. Wash exposed skin immediately. Provide welfare and eye wash facilities. Remove contaminated clothing promptly.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Initial: 2×2 = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA202 – MS42 Brick/Blockwork – Collapse of unfinished wall
{
  id: 'ms42-wall-collapse',
  title: 'RA202 – Brick/Blockwork up to DPC – Collapse of unfinished wall',
  hazard: 'Unstable wall collapse causing crush injury',
  who: 'Employees; Contractors; Visitors',
  how: 'Wall built beyond safe lift height without restraint; high winds; inadequate bonding; premature loading before mortar cure',
  controls: 'Build to safe lift heights in accordance with guidance. Install temporary bracing where required. Do not load or backfill against wall until sufficient strength achieved. Monitor weather conditions (wind). Supervisor inspection before leaving incomplete work.',
  action: 'Supervisor – Operatives',
  init: 'high',
  resid: 'medium',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA203 – MS42 Brick/Blockwork – Manual handling injuries
{
  id: 'ms42-manual-handling',
  title: 'RA203 – Brick/Blockwork up to DPC – Manual handling injuries',
  hazard: 'Musculoskeletal injury from lifting bricks, blocks and mortar',
  who: 'Employees; Contractors',
  how: 'Repetitive lifting of blocks; twisting while laying; carrying materials over uneven ground; overreaching',
  controls: 'Plan material storage close to workface. Use mechanical aids for heavy blocks. Rotate tasks to reduce repetition. Use correct lifting technique. Keep work at comfortable working height where practicable.',
  action: 'Supervisor – Operatives',
  init: 'high',
  resid: 'low',

  // Initial: 3×2 = 6 → HIGH
  initL: 'high',
  initS: 'medium',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA204 – MS42 Brick/Blockwork – Falls while working at low level height
{
  id: 'ms42-low-level-fall',
  title: 'RA204 – Brick/Blockwork up to DPC – Fall from low level',
  hazard: 'Fall from working platform or foundation edge',
  who: 'Employees; Contractors',
  how: 'Standing on uneven foundations; stepping off edge; unstable working platform; poor housekeeping',
  controls: 'Ensure stable working platforms. Install edge protection where required. Maintain tidy working area. Do not stand on loose blocks/materials. Provide adequate lighting.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Initial: 2×2 = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA205 – MS42 Brick/Blockwork – Cement exposure and eye injury
{
  id: 'ms42-cement-exposure',
  title: 'RA205 – Brick/Blockwork up to DPC – Cement exposure',
  hazard: 'Skin burns, dermatitis or eye irritation from mortar',
  who: 'Employees; Contractors',
  how: 'Handling mortar without gloves; splashes during mixing; rubbing eyes with contaminated hands',
  controls: 'Wear gloves and eye protection. Avoid direct contact with wet mortar. Wash hands before eating/drinking. Provide welfare and eye wash facilities. Remove contaminated clothing promptly.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Initial: 2×2 = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA206 – MS42 Brick/Blockwork – Struck by plant during material delivery
{
  id: 'ms42-plant-interface',
  title: 'RA206 – Brick/Blockwork up to DPC – Struck by plant during deliveries',
  hazard: 'Operatives struck by delivery vehicle or forklift',
  who: 'Employees; Contractors; Delivery Drivers',
  how: 'Material deliveries entering work area; reversing without banksman; poor segregation',
  controls: 'Designate delivery area away from workface. Use trained banksman for reversing. Maintain plant/pedestrian segregation. All operatives to wear high-visibility PPE. Brief drivers on site rules.',
  action: 'Supervisor – Banksman',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA207 – MS43 Sub-base – Struck by plant during spreading/compaction
{
  id: 'ms43-struck-by-plant',
  title: 'RA207 – Sub-base Preparation – Struck by plant during spreading/compaction',
  hazard: 'Operative struck by excavator, dumper or roller',
  who: 'Employees; Contractors; Visitors',
  how: 'Personnel entering plant operating zone; reversing movements; poor segregation; blind spots during spreading and compaction',
  controls: 'Establish plant exclusion zones. Maintain clear pedestrian/plant segregation. Use trained banksman for reversing and restricted visibility. Fit reversing alarms and beacons. Brief workforce before works commence.',
  action: 'Supervisor – Plant Operator',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA208 – MS43 Sub-base – Hand–arm vibration from compaction equipment
{
  id: 'ms43-havs-compaction',
  title: 'RA208 – Sub-base Preparation – Hand–arm vibration exposure',
  hazard: 'HAVS from prolonged use of vibrating plate/rammer',
  who: 'Employees',
  how: 'Extended use of vibrating compaction equipment; lack of task rotation; poorly maintained plant',
  controls: 'Monitor exposure time in line with HAVS guidance. Rotate tasks. Maintain equipment in good condition. Provide HAVS awareness training and health surveillance where required.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Initial: 2×2 = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA209 – MS43 Sub-base – Dust inhalation during spreading
{
  id: 'ms43-dust-inhalation',
  title: 'RA209 – Sub-base Preparation – Dust inhalation',
  hazard: 'Respiratory irritation from airborne dust',
  who: 'Employees; Contractors; Public',
  how: 'Dry spreading of Type 1; vehicle movement on dry ground; windy conditions; lack of suppression',
  controls: 'Damp down materials and haul routes where required. Monitor weather conditions. Provide RPE where exposure cannot be controlled by other means. Position stockpiles away from public interface.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Initial: 2×2 = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA210 – MS43 Sub-base – Contact with underground services
{
  id: 'ms43-service-strike',
  title: 'RA210 – Sub-base Preparation – Underground service strike',
  hazard: 'Damage to buried services during formation reduction',
  who: 'Employees; Contractors; Public; Utility providers',
  how: 'Reducing levels without confirming service depths; mechanical excavation over live services',
  controls: 'Obtain up-to-date service drawings. Conduct CAT & Genny scan. Mark service routes clearly. Hand dig within tolerance zones. Implement permit-to-dig where required.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA211 – MS43 Sub-base – Slips/trips on uneven formation
{
  id: 'ms43-slips-trips',
  title: 'RA211 – Sub-base Preparation – Slips, trips and falls',
  hazard: 'Slip, trip or fall on uneven formation or loose aggregate',
  who: 'Employees; Contractors; Visitors',
  how: 'Walking over uneven compacted sub-base; loose materials; trailing tools/hoses; poor housekeeping',
  controls: 'Maintain tidy work area. Designate safe access routes. Remove loose debris regularly. Provide adequate lighting where visibility is reduced.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Initial: 2×2 = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA212 – MS44 Road Gully – Underground service strike
{
  id: 'ms44-service-strike',
  title: 'RA212 – Road Gully Installation – Underground service strike',
  hazard: 'Damage to underground services during excavation for gully pot/connection',
  who: 'Employees; Contractors; Utility providers; Public',
  how: 'Excavating without confirming service routes/depths; mechanical digging in tolerance zone; inaccurate drawings',
  controls: 'Obtain service drawings and scan using CAT & Genny by trained person. Mark routes clearly. Hand dig trial holes within tolerance zone. Permit-to-dig in place. Stop works if unknown service encountered.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA213 – MS44 Road Gully – Excavation collapse / falls into excavation
{
  id: 'ms44-excavation-collapse-fall',
  title: 'RA213 – Road Gully Installation – Excavation collapse / fall into excavation',
  hazard: 'Collapse of excavation or fall into open pit',
  who: 'Employees; Contractors; Visitors',
  how: 'Unsupported pit; poor ground conditions; spoil surcharge; inadequate edge protection',
  controls: 'Support excavation where required (trench box/shoring/battering). Keep spoil/plant back from edge. Install barriers/edge protection around pit. Provide safe access/egress (ladder secured). Competent person inspections daily and after weather events.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA214 – MS44 Road Gully – Crush injury during lifting/placing gully pot
{
  id: 'ms44-crush-lift',
  title: 'RA214 – Road Gully Installation – Crush injury during lifting/placing',
  hazard: 'Crush injury from gully pot/frame/cover during lifting or positioning',
  who: 'Employees; Contractors',
  how: 'Hands trapped during lowering; unstable load; standing in drop zone; incorrect slinging',
  controls: 'Use lift plan where required. Use certified lifting accessories and correct attachment points. Use trained slinger/signaller and banksman. Establish exclusion zone; no hands under suspended load; use pinch bars/guide handles to position.',
  action: 'Supervisor – Slinger/Signaller',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA215 – MS44 Road Gully – Wet cement exposure during bedding/surround
{
  id: 'ms44-cement-burns',
  title: 'RA215 – Road Gully Installation – Cement burns/dermatitis',
  hazard: 'Skin burns/dermatitis from wet concrete/mortar during bedding and surround',
  who: 'Employees; Contractors',
  how: 'Handling mortar/concrete without PPE; splashes to eyes/skin; kneeling in wet concrete',
  controls: 'Wear waterproof gloves, long sleeves and eye protection. Avoid direct contact. Wash skin immediately if contaminated. Provide welfare and eye wash. Remove contaminated clothing promptly.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Initial: 2×2 = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA216 – MS44 Road Gully – Traffic/vehicle interface (if in or near carriageway)
{
  id: 'ms44-traffic-interface',
  title: 'RA216 – Road Gully Installation – Traffic/vehicle interface',
  hazard: 'Operatives struck by traffic or site vehicles during works',
  who: 'Employees; Contractors; Public; Delivery Drivers',
  how: 'Working near live traffic; vehicles reversing for delivery; inadequate traffic management or signage',
  controls: 'Implement traffic management in accordance with approved plan/Chapter 8 where applicable. Use barriers and clear signage. Use trained banksman for deliveries and reversing. Maintain exclusion zones and safe pedestrian routes.',
  action: 'Supervisor – TM Lead/Banksman',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA217 – MS45 Hand Digging – Damage to live electrical cable
{
  id: 'ms45-electric-strike',
  title: 'RA217 – Hand Digging Around Services – Electric cable strike',
  hazard: 'Electric shock or electrocution from damaging live cable',
  who: 'Employees; Contractors',
  how: 'Using inappropriate tools; striking cable sheath; applying excessive force; failure to visually identify service before exposing',
  controls: 'Use insulated hand tools only. No picks or mechanical tools within tolerance zone. Expose service gradually and visually confirm route before continuing. Stop work immediately if service condition unclear. Supervisor oversight during exposure.',
  action: 'Supervisor – Operatives',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA218 – MS45 Hand Digging – Gas service damage
{
  id: 'ms45-gas-strike',
  title: 'RA218 – Hand Digging Around Services – Gas service damage',
  hazard: 'Gas leak leading to explosion or asphyxiation',
  who: 'Employees; Contractors; Public',
  how: 'Damaging gas main while exposing service; failure to follow safe digging procedures',
  controls: 'Confirm service location from drawings and CAT scan. Hand dig carefully within tolerance zone. Do not lever directly against pipe. If gas smell detected, stop work, evacuate area and contact emergency service immediately.',
  action: 'Supervisor – Site Management',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA219 – MS45 Hand Digging – Excavation collapse while exposing service
{
  id: 'ms45-excavation-collapse',
  title: 'RA219 – Hand Digging Around Services – Excavation collapse',
  hazard: 'Collapse of trench while exposing service',
  who: 'Employees; Contractors',
  how: 'Unsupported trench sides; undermining ground beneath service; surcharge from spoil close to edge',
  controls: 'Assess ground conditions before digging. Support trench where required. Keep spoil and tools away from edge. Do not undermine service supports. Competent person to inspect excavation regularly.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA220 – MS45 Hand Digging – Manual handling strain in confined trench
{
  id: 'ms45-manual-handling',
  title: 'RA220 – Hand Digging Around Services – Manual handling strain',
  hazard: 'Musculoskeletal injury from confined digging work',
  who: 'Employees; Contractors',
  how: 'Repetitive shovelling; awkward posture in trench; lifting spoil in confined space',
  controls: 'Rotate tasks to reduce repetitive strain. Use correct digging posture. Remove spoil frequently to prevent overreaching. Use buckets/mechanical removal where practicable.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Initial: 2×2 = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA221 – MS45 Hand Digging – Trip/fall into open excavation
{
  id: 'ms45-fall-excavation',
  title: 'RA221 – Hand Digging Around Services – Fall into excavation',
  hazard: 'Operative or third party falling into open trench',
  who: 'Employees; Contractors; Visitors',
  how: 'Unprotected trench edge; stepping backwards; poor housekeeping; inadequate lighting',
  controls: 'Install barriers where required. Maintain tidy excavation edge. Provide safe ladder access. Ensure adequate lighting. Brief workforce to maintain awareness when working near edge.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Initial: 2×2 = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA222 – MS46 Excavation – Excavation collapse / burial
{
  id: 'ms46-excavation-collapse',
  title: 'RA222 – Excavation and Trenching – Excavation collapse/burial',
  hazard: 'Collapse of trench walls leading to burial or crush injury',
  who: 'Employees; Contractors',
  how: 'Unsupported trench sides; poor ground conditions; surcharge from spoil/plant; vibration; heavy rainfall',
  controls: 'Install trench support (trench box/shoring) or batter sides to safe angle. Keep spoil and plant minimum 2m from edge unless engineered protection provided. Competent person inspection at start of shift and after weather events. Do not enter unsupported excavation.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA223 – MS46 Excavation – Fall into excavation
{
  id: 'ms46-fall-into-trench',
  title: 'RA223 – Excavation and Trenching – Fall into excavation',
  hazard: 'Operative or third party falling into open trench',
  who: 'Employees; Contractors; Visitors; Public',
  how: 'Unprotected trench edge; stepping backwards; poor lighting; removed barriers',
  controls: 'Install barriers/edge protection around excavation. Provide safe access/egress (secured ladder extending 1m above landing). Maintain good housekeeping. Provide adequate lighting.',
  action: 'Supervisor – Operatives',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA224 – MS46 Excavation – Underground service strike
{
  id: 'ms46-service-strike',
  title: 'RA224 – Excavation and Trenching – Underground service strike',
  hazard: 'Damage to buried utilities (gas/electric/water/comms)',
  who: 'Employees; Contractors; Public; Utility providers',
  how: 'Mechanical excavation without confirming service locations; inaccurate drawings; failure to follow safe digging practice',
  controls: 'Obtain up-to-date service drawings. Conduct CAT & Genny scan by trained person. Mark services clearly. Hand dig within tolerance zones. Implement permit-to-dig system.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA225 – MS46 Excavation – Struck by plant during trenching
{
  id: 'ms46-struck-by-plant',
  title: 'RA225 – Excavation and Trenching – Struck by plant',
  hazard: 'Operative struck by excavator, dumper or other plant',
  who: 'Employees; Contractors; Visitors',
  how: 'Entering swing radius; reversing movements; blind spots; poor segregation',
  controls: 'Establish plant exclusion zones. Use trained banksman where visibility restricted. Maintain pedestrian/plant segregation. Fit reversing alarms and beacons. Brief workforce before works commence.',
  action: 'Supervisor – Plant Operator',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA226 – MS46 Excavation – Water ingress / flooding
{
  id: 'ms46-water-ingress',
  title: 'RA226 – Excavation and Trenching – Water ingress/flooding',
  hazard: 'Flooding of excavation causing instability or drowning risk',
  who: 'Employees; Contractors',
  how: 'Heavy rainfall; groundwater; inadequate dewatering; blocked discharge routes',
  controls: 'Assess ground water conditions before excavation. Install appropriate dewatering system where required. Inspect during rainfall. Do not enter flooded excavation. Provide safe escape routes.',
  action: 'Supervisor – Competent Person',
  init: 'medium',
  resid: 'low',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM (controlled to medium due to inherent severity)
  residL: 'low',
  residS: 'high'
},
// RA227 – MS47 Drainage – Excavation collapse during pipe/manhole install
{
  id: 'ms47-excavation-collapse',
  title: 'RA227 – Drainage and Manhole Installation – Excavation collapse',
  hazard: 'Collapse of trench or manhole excavation causing burial/crush injury',
  who: 'Employees; Contractors',
  how: 'Unsupported trench; removal of trench box too early; spoil surcharge; wet/unstable ground',
  controls: 'Install trench support or batter to safe angle. Keep spoil/plant minimum 2m from edge unless engineered. Competent person inspection daily and after weather events. Do not enter unsupported excavation.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA228 – MS47 Drainage – Crush injury during lifting of pipes/rings
{
  id: 'ms47-crush-lifting',
  title: 'RA228 – Drainage and Manhole Installation – Crush injury during lifting',
  hazard: 'Crush injury from pipes, rings or cover slabs during lifting/positioning',
  who: 'Employees; Contractors',
  how: 'Hands under suspended load; unstable lift; incorrect slinging; standing in drop zone',
  controls: 'Lift plan where required. Use certified lifting accessories and correct lifting points. Trained slinger/signaller in attendance. Establish exclusion zone. No hands beneath suspended load; use guide tools.',
  action: 'Supervisor – Slinger/Signaller',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA229 – MS47 Drainage – Hazardous atmosphere in manhole
{
  id: 'ms47-hazardous-atmosphere',
  title: 'RA229 – Drainage and Manhole Installation – Hazardous atmosphere',
  hazard: 'Exposure to toxic gases or oxygen deficiency within manhole',
  who: 'Employees; Contractors',
  how: 'Entering chamber without gas testing; build-up of methane or hydrogen sulphide; poor ventilation',
  controls: 'Avoid entry where possible. Gas test before and during entry using calibrated monitor. Issue confined space permit where required. Provide forced ventilation and rescue plan. Trained top man present.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA230 – MS47 Drainage – Underground service strike
{
  id: 'ms47-service-strike',
  title: 'RA230 – Drainage and Manhole Installation – Underground service strike',
  hazard: 'Damage to buried utilities during trenching or connection',
  who: 'Employees; Contractors; Public; Utility providers',
  how: 'Mechanical excavation without confirming service routes; inaccurate drawings; failure to follow safe digging procedure',
  controls: 'Obtain service drawings. Conduct CAT & Genny scan. Mark services clearly. Hand dig within tolerance zone. Permit-to-dig system in place.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA231 – MS47 Drainage – Manual handling of pipes and fittings
{
  id: 'ms47-manual-handling',
  title: 'RA231 – Drainage and Manhole Installation – Manual handling injuries',
  hazard: 'Musculoskeletal injury from handling pipes, fittings and covers',
  who: 'Employees; Contractors',
  how: 'Repetitive lifting; awkward posture in trench; lifting heavy components without mechanical aid',
  controls: 'Use mechanical lifting where practicable. Team lift heavier components. Store materials close to workface. Rotate tasks. Brief operatives on safe lifting techniques.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Initial: 2×2 = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA232 – MS48 Service Duct Installation – Underground service strike
{
  id: 'ms48-service-strike',
  title: 'RA232 – Service Duct Installation – Underground service strike',
  hazard: 'Damage to existing buried utilities during trench excavation',
  who: 'Employees; Contractors; Utility providers; Public',
  how: 'Failure to follow HSG47; mechanical excavation in tolerance zone; inaccurate or outdated drawings',
  controls: 'Obtain up-to-date utility drawings. Conduct CAT & Genny scan by trained person. Mark service routes clearly. Hand dig within tolerance zone. Permit-to-dig procedure implemented. Stop work if unknown service encountered.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA233 – MS48 Service Duct Installation – Trench collapse
{
  id: 'ms48-trench-collapse',
  title: 'RA233 – Service Duct Installation – Trench collapse',
  hazard: 'Collapse of trench causing burial or crush injury',
  who: 'Employees; Contractors',
  how: 'Unsupported trench sides; removal of support too early; spoil surcharge; unstable ground conditions',
  controls: 'Install trench support or batter sides to safe angle. Keep spoil and plant minimum 2m from edge unless engineered protection provided. Competent person inspection at start of shift and after adverse weather.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA234 – MS48 Service Duct Installation – Manual handling of ducts
{
  id: 'ms48-manual-handling',
  title: 'RA234 – Service Duct Installation – Manual handling injuries',
  hazard: 'Musculoskeletal injury from lifting and positioning duct lengths',
  who: 'Employees; Contractors',
  how: 'Handling long duct sections; awkward posture in trench; repetitive movement; overreaching',
  controls: 'Use team lifts for long/heavy sections. Store ducts close to workface. Maintain stable footing. Rotate tasks to reduce strain. Brief operatives on safe lifting techniques.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Initial: 2×2 = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA235 – MS48 Service Duct Installation – Damage to ducts during backfill/compaction
{
  id: 'ms48-duct-damage',
  title: 'RA235 – Service Duct Installation – Duct damage during backfill',
  hazard: 'Damage to installed ducting due to incorrect surround or compaction',
  who: 'Employees; Contractors; Utility providers',
  how: 'Compaction directly over duct; insufficient sand surround; heavy plant over shallow cover',
  controls: 'Install specified bedding and surround material. Maintain minimum cover depth. Mark duct route clearly. Brief plant operators on duct locations before backfilling.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA236 – MS48 Service Duct Installation – Slips/trips along trench line
{
  id: 'ms48-slips-trips',
  title: 'RA236 – Service Duct Installation – Slips, trips and falls',
  hazard: 'Slip or trip injury along trench route',
  who: 'Employees; Contractors; Visitors',
  how: 'Uneven ground; trailing duct lengths; poor housekeeping; unprotected trench edge',
  controls: 'Maintain tidy work area. Install edge protection where required. Provide safe access routes. Ensure adequate lighting in low visibility conditions.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Initial: 2×2 = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA237 – MS49 Kerbing/Paving – Manual handling of kerbs and paving units
{
  id: 'ms49-manual-handling',
  title: 'RA237 – Kerbing, Edgings and Paving – Manual handling injuries',
  hazard: 'Musculoskeletal injury from lifting kerbs, flags and paving blocks',
  who: 'Employees; Contractors',
  how: 'Handling heavy units; repetitive lifting; twisting while placing; carrying over uneven ground',
  controls: 'Use mechanical kerb lifter/vacuum lifter where practicable. Team lift heavy units. Store materials close to workface. Rotate tasks. Brief operatives on correct lifting techniques.',
  action: 'Supervisor – Operatives',
  init: 'high',
  resid: 'low',

  // Initial: 3×2 = 6 → HIGH
  initL: 'high',
  initS: 'medium',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA238 – MS49 Kerbing/Paving – Crush injury during placement
{
  id: 'ms49-crush-placement',
  title: 'RA238 – Kerbing, Edgings and Paving – Crush injury during placement',
  hazard: 'Crushed fingers/toes when positioning units',
  who: 'Employees; Contractors',
  how: 'Hands placed beneath units; unstable bedding; uncontrolled lowering; poor communication during team lift',
  controls: 'Keep hands clear of pinch points. Use guide bars/handles where possible. Prepare stable bed before placement. Wear gloves and safety footwear. Use clear communication during team lifts.',
  action: 'Supervisor – Operatives',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA239 – MS49 Kerbing/Paving – Dust exposure from cutting
{
  id: 'ms49-dust-cutting',
  title: 'RA239 – Kerbing, Edgings and Paving – Dust inhalation during cutting',
  hazard: 'Respiratory exposure to silica dust during cutting operations',
  who: 'Employees; Contractors',
  how: 'Dry cutting with disc saw; inadequate dust suppression; poor RPE use',
  controls: 'Use wet cutting methods or on-tool extraction. Provide FFP3 RPE where required. Limit exposure duration. Brief operatives on dust risks (RCS awareness).',
  action: 'Supervisor – Operatives',
  init: 'high',
  resid: 'medium',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA240 – MS49 Kerbing/Paving – Hand–arm vibration from cutting/compaction tools
{
  id: 'ms49-havs',
  title: 'RA240 – Kerbing, Edgings and Paving – HAVS exposure',
  hazard: 'Hand–arm vibration from disc cutters and vibrating plates',
  who: 'Employees',
  how: 'Prolonged use of vibrating tools; lack of task rotation; poorly maintained equipment',
  controls: 'Monitor exposure times. Rotate tasks. Maintain equipment. Provide HAVS awareness and health surveillance where required.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Initial: 2×2 = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA241 – MS49 Kerbing/Paving – Vehicle/traffic interface during works
{
  id: 'ms49-traffic-interface',
  title: 'RA241 – Kerbing, Edgings and Paving – Vehicle/traffic interface',
  hazard: 'Operatives struck by site vehicles or passing traffic',
  who: 'Employees; Contractors; Public',
  how: 'Working adjacent to live carriageway; deliveries entering work area; inadequate segregation',
  controls: 'Implement traffic management plan where required. Use barriers and signage. Maintain pedestrian/vehicle segregation. Use trained banksman for deliveries and reversing movements.',
  action: 'Supervisor – Banksman/TM Lead',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA242 – MS50 Earthworks – Struck by plant during bulk earthworks
{
  id: 'ms50-struck-by-plant',
  title: 'RA242 – Earthworks Formation – Struck by plant',
  hazard: 'Operative struck by excavator, dozer, dumper or roller',
  who: 'Employees; Contractors; Visitors',
  how: 'Personnel entering operating zone; reversing movements; blind spots; poor segregation during bulk cut/fill operations',
  controls: 'Establish plant exclusion zones. Maintain pedestrian/plant segregation. Use trained banksman for reversing and restricted visibility. Fit reversing alarms and beacons. Brief workforce before works commence.',
  action: 'Supervisor – Plant Operator',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA243 – MS50 Earthworks – Ground instability / collapse
{
  id: 'ms50-ground-instability',
  title: 'RA243 – Earthworks Formation – Ground instability/collapse',
  hazard: 'Collapse of formation or slope causing burial or plant overturn',
  who: 'Employees; Contractors',
  how: 'Over-steep batters; poor soil conditions; excessive surcharge; heavy rainfall; vibration',
  controls: 'Excavate to safe batter angles. Assess soil type and ground conditions before works. Keep plant away from edge of slopes. Inspect after rainfall. Stop work if instability observed.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA244 – MS50 Earthworks – Plant overturning on uneven/soft ground
{
  id: 'ms50-plant-overturn',
  title: 'RA244 – Earthworks Formation – Plant overturning',
  hazard: 'Machine overturn due to unstable or uneven ground',
  who: 'Operator; Employees nearby',
  how: 'Operating on soft ground; excessive side slope; overreaching; inadequate compaction prior to trafficking',
  controls: 'Assess ground bearing capacity before plant access. Avoid excessive side slopes. Follow manufacturer operating limits. Use seatbelt and ensure ROPS fitted. Monitor ground conditions continuously.',
  action: 'Supervisor – Operator',
  init: 'high',
  resid: 'medium',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA245 – MS50 Earthworks – Dust generation during formation works
{
  id: 'ms50-dust',
  title: 'RA245 – Earthworks Formation – Dust generation',
  hazard: 'Respiratory irritation and nuisance dust',
  who: 'Employees; Contractors; Public',
  how: 'Dry cutting/filling operations; vehicle movements; exposed formation in dry weather',
  controls: 'Use water suppression where required. Damp down haul routes. Monitor weather conditions. Provide RPE if required. Position stockpiles away from public interface.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Initial: 2×2 = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA249 – MS51 Foundations – Cement burns during pour
{
  id: 'ms51-cement-burns',
  title: 'RA249 – Concrete Foundations & Ground Beams – Cement burns',
  hazard: 'Skin burns or dermatitis from wet concrete',
  who: 'Employees; Contractors',
  how: 'Direct contact with wet concrete; kneeling in pour; splashes to skin/eyes',
  controls: 'Wear waterproof gloves, long sleeves and eye protection. Avoid direct contact. Wash immediately if contaminated. Provide welfare and eye wash facilities.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Initial: 2×2 = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA250 – MS51 Foundations – Entanglement with vibrating poker/power tools
{
  id: 'ms51-entanglement',
  title: 'RA250 – Concrete Foundations & Ground Beams – Entanglement with equipment',
  hazard: 'Injury from rotating/moving concrete equipment',
  who: 'Employees; Contractors',
  how: 'Loose clothing; contact with vibrating poker; loss of control; poor footing in wet pour area',
  controls: 'Only trained operatives to operate equipment. Inspect before use. Wear close-fitting clothing. Maintain clear working area. Switch off before adjustments.',
  action: 'Supervisor – Competent Operator',
  init: 'high',
  resid: 'medium',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA251 – MS51 Foundations – Vehicle interface during concrete delivery
{
  id: 'ms51-vehicle-interface',
  title: 'RA251 – Concrete Foundations & Ground Beams – Vehicle interface',
  hazard: 'Operatives struck by concrete wagon or pump',
  who: 'Employees; Contractors; Delivery Drivers',
  how: 'Reversing vehicle into position; poor visibility; operatives standing in blind spots',
  controls: 'Use trained banksman for reversing. Establish exclusion zone around delivery vehicle and pump. Maintain clear access/egress routes. Brief driver on site rules.',
  action: 'Supervisor – Banksman',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA252 – MS52 Backfilling – Struck by plant during backfill
{
  id: 'ms52-struck-by-plant',
  title: 'RA252 – Backfilling & Reinstatement – Struck by plant',
  hazard: 'Operative struck by excavator, dumper or roller during backfill operations',
  who: 'Employees; Contractors; Visitors',
  how: 'Personnel entering swing radius; reversing movements; poor segregation during compaction',
  controls: 'Establish plant exclusion zones. Use trained banksman for reversing and restricted visibility. Maintain pedestrian/plant segregation. Brief workforce prior to commencement.',
  action: 'Supervisor – Plant Operator',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA253 – MS52 Backfilling – Damage to installed services
{
  id: 'ms52-service-damage',
  title: 'RA253 – Backfilling & Reinstatement – Damage to installed services',
  hazard: 'Damage to newly installed pipes/ducts during backfill and compaction',
  who: 'Employees; Contractors; Utility providers',
  how: 'Heavy compaction directly over services; insufficient surround material; plant trafficking over shallow cover',
  controls: 'Install specified bedding and surround material before backfill. Maintain minimum cover depth. Clearly mark service routes. Brief plant operators on service locations.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Initial: 2×3 = 6 → HIGH (due to severity)
  initL: 'medium',
  initS: 'high',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA254 – MS52 Backfilling – Excavation collapse during removal of support
{
  id: 'ms52-collapse-support-removal',
  title: 'RA254 – Backfilling & Reinstatement – Collapse during support removal',
  hazard: 'Collapse of trench during removal of trench box/shoring',
  who: 'Employees; Contractors',
  how: 'Premature removal of support; poor coordination between plant and groundworkers; unstable ground conditions',
  controls: 'Remove support progressively in line with backfill. Do not remove support ahead of fill level. Competent person supervision during removal. Stop work if instability observed.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA255 – MS52 Backfilling – Manual handling during reinstatement
{
  id: 'ms52-manual-handling',
  title: 'RA255 – Backfilling & Reinstatement – Manual handling injuries',
  hazard: 'Musculoskeletal injury from handling reinstatement materials (flags, tarmac, kerbs)',
  who: 'Employees; Contractors',
  how: 'Lifting paving slabs; carrying materials over uneven ground; repetitive movement',
  controls: 'Use mechanical lifting aids where practicable. Team lift heavy units. Store materials close to workface. Rotate tasks. Provide manual handling briefing.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Initial: 2×2 = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA256 – MS52 Backfilling – Hand–arm vibration from compaction equipment
{
  id: 'ms52-havs',
  title: 'RA256 – Backfilling & Reinstatement – HAVS exposure',
  hazard: 'Hand–arm vibration from plate compactor or rammer',
  who: 'Employees',
  how: 'Prolonged use of vibrating compaction equipment; inadequate task rotation',
  controls: 'Monitor exposure duration. Rotate tasks. Maintain equipment. Provide HAVS awareness and health surveillance where required.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Initial: 2×2 = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA257 – MS52 Backfilling – Traffic/public interface during reinstatement
{
  id: 'ms52-traffic-interface',
  title: 'RA257 – Backfilling & Reinstatement – Traffic/public interface',
  hazard: 'Operatives struck by passing vehicles or members of the public',
  who: 'Employees; Contractors; Public',
  how: 'Reinstatement works adjacent to live carriageway; inadequate traffic management; removal of barriers too early',
  controls: 'Implement approved traffic management plan. Maintain barriers and signage until reinstatement complete. Use trained banksman for deliveries. All operatives to wear high-visibility PPE.',
  action: 'Supervisor – TM Lead',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA261 – MS53 Dewatering – Hose whip / mechanical failure
{
  id: 'ms53-hose-failure',
  title: 'RA261 – Dewatering Operations – Hose failure/whip',
  hazard: 'Injury from pressurised hose detachment or mechanical failure',
  who: 'Employees; Contractors',
  how: 'Poor hose connections; damaged fittings; excessive pressure build-up',
  controls: 'Inspect hoses and fittings before use. Secure hose connections with clamps. Avoid kinks and sharp bends. Position hoses away from pedestrian routes.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Initial: 2×2 = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA262 – MS53 Dewatering – Environmental contamination
{
  id: 'ms53-environmental-contamination',
  title: 'RA262 – Dewatering Operations – Environmental contamination',
  hazard: 'Pollution of watercourse or drainage system',
  who: 'Environment; Public; Client',
  how: 'Discharging silt-laden or contaminated water into surface water drains without control',
  controls: 'Discharge to approved outfall only. Use settlement tanks or silt socks. Monitor discharge clarity. Stop works if contamination suspected. Follow Environmental Management Plan.',
  action: 'Supervisor – Environmental Lead',
  init: 'high',
  resid: 'medium',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA263 – MS53 Dewatering – Noise exposure from pumps
{
  id: 'ms53-noise',
  title: 'RA263 – Dewatering Operations – Noise exposure',
  hazard: 'Noise-induced hearing damage from pump operation',
  who: 'Employees; Contractors',
  how: 'Prolonged exposure to diesel or high-capacity pump units',
  controls: 'Position pumps away from working areas where possible. Use acoustic covers. Provide hearing protection if required. Limit exposure duration.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Initial: 2×2 = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA264 – MS54 Traffic Management – Operative struck by site vehicle
{
  id: 'ms54-struck-by-vehicle',
  title: 'RA264 – Traffic Management & Deliveries – Operative struck by vehicle',
  hazard: 'Operative struck by moving site vehicle or HGV',
  who: 'Employees; Contractors; Delivery Drivers',
  how: 'Reversing vehicles; blind spots; poor segregation between pedestrians and plant',
  controls: 'Implement Traffic Management Plan. Maintain segregated pedestrian routes. Use trained banksman for reversing. Fit reversing alarms and beacons. All operatives to wear high-visibility PPE.',
  action: 'Supervisor – Banksman',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA265 – MS54 Traffic Management – Public struck by vehicle
{
  id: 'ms54-public-struck',
  title: 'RA265 – Traffic Management & Deliveries – Public struck by vehicle',
  hazard: 'Member of public struck by vehicle at site interface',
  who: 'Public; Visitors',
  how: 'Inadequate barriers at site entrance; vehicles entering/exiting without control',
  controls: 'Secure site boundary. Install signage and barriers at access points. Control gate access. Use banksman when vehicles enter/exit site. Brief drivers on site speed limits.',
  action: 'Supervisor – Traffic Marshal',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA266 – MS54 Traffic Management – Vehicle overturn during manoeuvre
{
  id: 'ms54-vehicle-overturn',
  title: 'RA266 – Traffic Management & Deliveries – Vehicle overturn',
  hazard: 'Vehicle overturn due to unstable ground or poor manoeuvring',
  who: 'Delivery Drivers; Employees',
  how: 'Soft ground; uneven haul routes; overloading; tight turning radius',
  controls: 'Assess ground bearing capacity before deliveries. Maintain stable haul routes. Control delivery sizes. Provide clear turning areas. Brief drivers before entry.',
  action: 'Supervisor – Site Manager',
  init: 'high',
  resid: 'medium',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA267 – MS54 Traffic Management – Reversing collision
{
  id: 'ms54-reversing-collision',
  title: 'RA267 – Traffic Management & Deliveries – Reversing collision',
  hazard: 'Collision during reversing operations',
  who: 'Employees; Contractors; Delivery Drivers',
  how: 'No banksman; restricted visibility; pedestrian crossing vehicle route',
  controls: 'Avoid reversing where possible (one-way system). Where unavoidable, use trained banksman. Maintain clear exclusion zone. Stop pedestrian movement during manoeuvre.',
  action: 'Supervisor – Banksman',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA268 – MS54 Traffic Management – Delivery driver injury on site
{
  id: 'ms54-driver-injury',
  title: 'RA268 – Traffic Management & Deliveries – Delivery driver injury',
  hazard: 'Delivery driver injured while on site',
  who: 'Delivery Drivers',
  how: 'Driver exiting cab without PPE; entering live work zone; unfamiliar with site rules',
  controls: 'All drivers to report to site office. Issue site induction/briefing. Enforce mandatory PPE. Escort where necessary. Designate safe waiting areas.',
  action: 'Supervisor – Site Manager',
  init: 'medium',
  resid: 'low',

  // Initial: 2×2 = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA269 – MS54 Traffic Management – Poor visibility due to weather
{
  id: 'ms54-poor-visibility',
  title: 'RA269 – Traffic Management & Deliveries – Poor visibility',
  hazard: 'Collision risk due to fog, rain, darkness or glare',
  who: 'Employees; Contractors; Delivery Drivers',
  how: 'Reduced visibility on haul routes; inadequate lighting; glare from low sun',
  controls: 'Install temporary lighting where required. Suspend operations in extreme conditions. Reduce speed limits. Brief workforce and drivers on weather-related risks.',
  action: 'Supervisor – Site Manager',
  init: 'medium',
  resid: 'low',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA270 – MS54 Traffic Management – Site access obstruction causing emergency delay
{
  id: 'ms54-emergency-access',
  title: 'RA270 – Traffic Management & Deliveries – Obstructed emergency access',
  hazard: 'Blocked access preventing emergency response',
  who: 'Employees; Contractors; Public',
  how: 'Delivery vehicles parked in access routes; poor traffic planning',
  controls: 'Maintain clear emergency access routes at all times. Mark routes clearly. Brief delivery drivers on no-parking zones. Monitor access routes throughout shift.',
  action: 'Supervisor – Traffic Marshal',
  init: 'medium',
  resid: 'low',

  // Initial: 2×3 = 6 → HIGH (due to severity)
  initL: 'medium',
  initS: 'high',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA271 – MS55 Lifting – Load drop due to equipment failure
{
  id: 'ms55-load-drop',
  title: 'RA271 – Lifting Operations – Load drop from equipment failure',
  hazard: 'Dropped load due to failure of lifting equipment or accessories',
  who: 'Employees; Contractors; Visitors',
  how: 'Defective lifting chains/slings; incorrect SWL; damaged lifting points; lack of inspection',
  controls: 'All lifting accessories to be LOLER certified and inspected before use. Confirm SWL matches load weight. Use only designated lifting points. Appointed Person to approve lift plan where required.',
  action: 'Appointed Person – Lift Supervisor',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA272 – MS55 Lifting – Crush injury from suspended load
{
  id: 'ms55-crush-suspended',
  title: 'RA272 – Lifting Operations – Crush injury from suspended load',
  hazard: 'Crush injury from standing beneath or beside suspended load',
  who: 'Employees; Contractors',
  how: 'Personnel entering exclusion zone; uncontrolled slewing; poor communication between operator and slinger',
  controls: 'Establish exclusion zone around lift area. No personnel beneath suspended load. Use trained slinger/signaller. Maintain clear communication via agreed signals.',
  action: 'Lift Supervisor – Slinger',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA273 – MS55 Lifting – Overturn of crane/excavator during lift
{
  id: 'ms55-overturn',
  title: 'RA273 – Lifting Operations – Plant overturn during lift',
  hazard: 'Overturning of crane or excavator during lifting operation',
  who: 'Operator; Employees nearby',
  how: 'Exceeding load radius; poor ground bearing capacity; outrigger failure; side loading',
  controls: 'Confirm ground bearing capacity prior to lift. Use outrigger mats where required. Follow lift plan and manufacturer load charts. Do not exceed rated capacity.',
  action: 'Appointed Person – Operator',
  init: 'high',
  resid: 'medium',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA274 – MS55 Lifting – Struck by swinging load
{
  id: 'ms55-swinging-load',
  title: 'RA274 – Lifting Operations – Struck by swinging load',
  hazard: 'Impact from uncontrolled swinging load',
  who: 'Employees; Contractors',
  how: 'Wind conditions; rapid slewing; no tag lines; poor coordination',
  controls: 'Use tag lines where required. Monitor wind conditions. Maintain controlled slewing movements. Brief lift team before commencement.',
  action: 'Lift Supervisor – Operator',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA275 – MS55 Lifting – Failure to follow lift plan
{
  id: 'ms55-no-lift-plan',
  title: 'RA275 – Lifting Operations – Failure to follow lift plan',
  hazard: 'Unsafe lift due to absence or non-compliance with lift plan',
  who: 'Employees; Contractors',
  how: 'Improvised lifting; change in load weight; altered ground conditions; lack of supervision',
  controls: 'Appointed Person to prepare lift plan for complex lifts. Toolbox talk prior to lift. Any change requires reassessment. Supervisor to monitor compliance.',
  action: 'Appointed Person – Supervisor',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA276 – MS55 Lifting – Contact with overhead power lines
{
  id: 'ms55-overhead-lines',
  title: 'RA276 – Lifting Operations – Contact with overhead power lines',
  hazard: 'Electrocution due to plant or load contacting overhead lines',
  who: 'Operator; Employees; Public',
  how: 'Operating within unsafe clearance distance; failure to identify overhead services',
  controls: 'Survey site for overhead lines prior to lift. Maintain safe clearance distances per GS6. Install goalposts where required. Stop work if clearance cannot be maintained.',
  action: 'Supervisor – Operator',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA277 – MS55 Lifting – Equipment collision with structures
{
  id: 'ms55-collision-structure',
  title: 'RA277 – Lifting Operations – Collision with structure',
  hazard: 'Damage or injury from plant striking adjacent structure or excavation edge',
  who: 'Employees; Contractors',
  how: 'Restricted site space; misjudged slewing radius; poor planning of lift path',
  controls: 'Plan lift path in advance. Maintain clear operating zone. Use banksman to guide operator. Do not operate beyond machine limits.',
  action: 'Lift Supervisor – Operator',
  init: 'medium',
  resid: 'low',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA278 – MS55 Lifting – Manual handling during attachment change
{
  id: 'ms55-attachment-change',
  title: 'RA278 – Lifting Operations – Manual handling during attachment change',
  hazard: 'Injury while handling lifting chains or attachments',
  who: 'Employees; Contractors',
  how: 'Incorrect lifting of chains; pinch points; unstable attachment on ground',
  controls: 'Use mechanical assistance for heavy attachments. Wear gloves. Keep hands clear of pinch points. Ensure attachment stable before connection/disconnection.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Initial: 2×2 = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA279 – MS56 Trial Holes – Electric cable strike
{
  id: 'ms56-electric-strike',
  title: 'RA279 – Service Location Trial Holes – Electric cable strike',
  hazard: 'Electric shock or electrocution from damaging live cable',
  who: 'Employees; Contractors',
  how: 'Hand digging without confirming cable route; striking cable sheath; failure to visually identify service before exposure',
  controls: 'Obtain service drawings and complete CAT & Genny scan. Mark service routes clearly. Hand dig carefully using insulated tools only. Expose service gradually and visually confirm before continuing.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA280 – MS56 Trial Holes – Gas service damage
{
  id: 'ms56-gas-strike',
  title: 'RA280 – Service Location Trial Holes – Gas service damage',
  hazard: 'Gas leak leading to explosion or asphyxiation',
  who: 'Employees; Contractors; Public',
  how: 'Damaging gas main during trial excavation; levering directly against pipe',
  controls: 'Follow safe digging practice within tolerance zone. Do not use picks. If gas smell detected, stop work, evacuate area and contact emergency services immediately.',
  action: 'Supervisor – Site Management',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA281 – MS56 Trial Holes – Excavation collapse
{
  id: 'ms56-excavation-collapse',
  title: 'RA281 – Service Location Trial Holes – Excavation collapse',
  hazard: 'Collapse of trial hole causing burial or crush injury',
  who: 'Employees; Contractors',
  how: 'Unsupported trial pit; undermining ground beneath service; poor soil conditions',
  controls: 'Assess depth and soil type before digging. Support sides if depth or ground conditions require. Keep spoil away from edge. Competent person inspection before entry.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA282 – MS56 Trial Holes – Fall into open pit
{
  id: 'ms56-fall-into-pit',
  title: 'RA282 – Service Location Trial Holes – Fall into open pit',
  hazard: 'Operative or third party falling into trial hole',
  who: 'Employees; Contractors; Visitors; Public',
  how: 'Unprotected pit; stepping backwards; poor lighting; removed barriers',
  controls: 'Install barriers around open trial holes. Provide covers when unattended. Maintain good housekeeping. Ensure adequate lighting.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Initial: 2×2 = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA283 – MS56 Trial Holes – Manual handling during excavation
{
  id: 'ms56-manual-handling',
  title: 'RA283 – Service Location Trial Holes – Manual handling injuries',
  hazard: 'Musculoskeletal injury from hand excavation',
  who: 'Employees; Contractors',
  how: 'Repetitive shovelling; awkward posture in confined pit; lifting spoil buckets',
  controls: 'Rotate tasks. Use correct digging posture. Remove spoil regularly to prevent overreaching. Use buckets and mechanical removal where practicable.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Initial: 2×2 = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA284 – MS56 Trial Holes – Struck by plant in vicinity
{
  id: 'ms56-struck-by-plant',
  title: 'RA284 – Service Location Trial Holes – Struck by plant',
  hazard: 'Operative struck by nearby excavation plant',
  who: 'Employees; Contractors',
  how: 'Working within plant operating zone; poor segregation during trial hole excavation',
  controls: 'Maintain plant exclusion zones. Use banksman where plant working adjacent. Brief workforce on plant movements prior to start.',
  action: 'Supervisor – Plant Operator',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA285 – MS57 Contamination – Exposure to hazardous substances
{
  id: 'ms57-hazardous-exposure',
  title: 'RA285 – Unexpected Contamination – Exposure to hazardous substances',
  hazard: 'Inhalation or skin contact with contaminated soil/material',
  who: 'Employees; Contractors',
  how: 'Disturbing contaminated soil without controls; unknown chemical residues; contact with hydrocarbons or asbestos fragments',
  controls: 'Stop work immediately upon suspicion. Establish exclusion zone. Inform Site Manager. Wear appropriate PPE/RPE. Obtain specialist advice and sampling before recommencing.',
  action: 'Supervisor – Environmental Lead',
  init: 'high',
  resid: 'medium',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA286 – MS57 Contamination – Asbestos disturbance
{
  id: 'ms57-asbestos-disturbance',
  title: 'RA286 – Unexpected Contamination – Asbestos disturbance',
  hazard: 'Release of asbestos fibres',
  who: 'Employees; Contractors; Public',
  how: 'Disturbing asbestos-containing materials in made ground; breaking buried fragments during excavation',
  controls: 'Stop works immediately. Do not disturb material further. Establish controlled area. Arrange licensed asbestos contractor. Follow CAR procedures.',
  action: 'Site Manager – Environmental Specialist',
  init: 'high',
  resid: 'medium',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA287 – MS57 Contamination – Fire/explosion from hydrocarbons
{
  id: 'ms57-hydrocarbon-fire',
  title: 'RA287 – Unexpected Contamination – Fire/explosion risk',
  hazard: 'Ignition of flammable vapours from contaminated ground',
  who: 'Employees; Contractors; Public',
  how: 'Excavating contaminated soil containing fuel/oil; hot works nearby; ignition source present',
  controls: 'Stop works. Eliminate ignition sources. Establish exclusion zone. Gas monitor atmosphere if required. Inform Environmental Lead.',
  action: 'Supervisor – Site Manager',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA288 – MS57 Contamination – Environmental pollution
{
  id: 'ms57-environmental-pollution',
  title: 'RA288 – Unexpected Contamination – Environmental pollution',
  hazard: 'Spread of contaminated material to watercourse or drainage',
  who: 'Environment; Public; Client',
  how: 'Uncontrolled excavation; contaminated run-off entering surface water drains',
  controls: 'Segregate contaminated arisings. Cover stockpiles. Use bunding and silt control. Discharge only to approved outfall. Notify client/regulator if required.',
  action: 'Environmental Lead – Supervisor',
  init: 'high',
  resid: 'medium',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA289 – MS57 Contamination – Manual handling of hazardous waste
{
  id: 'ms57-manual-handling-waste',
  title: 'RA289 – Unexpected Contamination – Manual handling of hazardous waste',
  hazard: 'Musculoskeletal injury while handling contaminated materials',
  who: 'Employees; Contractors',
  how: 'Lifting contaminated soil bags; awkward posture; improper containment',
  controls: 'Use mechanical means where practicable. Use appropriate containers. Avoid overfilling bags. Rotate tasks. Provide manual handling briefing.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Initial: 2×2 = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA290 – MS57 Contamination – Lack of communication leading to uncontrolled exposure
{
  id: 'ms57-communication-failure',
  title: 'RA290 – Unexpected Contamination – Failure to communicate hazard',
  hazard: 'Continued work in contaminated area due to failure to report',
  who: 'Employees; Contractors',
  how: 'Operatives unaware of reporting process; supervisor not informed; work continuing without assessment',
  controls: 'Toolbox talk on contamination procedure. Stop-work authority granted to all staff. Clear escalation route to Site Manager and Environmental Lead.',
  action: 'Site Manager – Supervisor',
  init: 'high',
  resid: 'low',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA291 – MS57 Contamination – Incorrect waste disposal / legal breach
{
  id: 'ms57-duty-of-care',
  title: 'RA291 – Unexpected Contamination – Breach of waste duty of care',
  hazard: 'Legal breach and environmental harm due to improper disposal',
  who: 'Company; Environment; Public',
  how: 'Transporting contaminated waste without classification; using non-licensed carrier; incomplete documentation',
  controls: 'Classify waste before removal. Use licensed waste carrier only. Maintain duty of care paperwork. Keep records of transfer notes.',
  action: 'Environmental Lead – Site Manager',
  init: 'high',
  resid: 'low',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA292 – MS58 Confined Space – Oxygen deficiency
{
  id: 'ms58-oxygen-deficiency',
  title: 'RA292 – Confined Space Entry – Oxygen deficiency',
  hazard: 'Asphyxiation due to low oxygen levels',
  who: 'Entrants; Rescue personnel',
  how: 'Displacement of oxygen by gases; stagnant air; confined chamber without ventilation',
  controls: 'Avoid entry where possible. Gas test before and during entry using calibrated monitor. Provide continuous forced ventilation. Permit-to-work system in place. Trained top man in attendance.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA293 – MS58 Confined Space – Toxic gas exposure
{
  id: 'ms58-toxic-gas',
  title: 'RA293 – Confined Space Entry – Toxic gas exposure',
  hazard: 'Exposure to methane, hydrogen sulphide or other toxic gases',
  who: 'Entrants; Rescue personnel',
  how: 'Build-up of gases in sewer/manhole; inadequate testing; ventilation failure',
  controls: 'Continuous atmospheric monitoring. Gas monitor worn by entrant. Forced ventilation. Stop work and evacuate if alarm triggered.',
  action: 'Supervisor – Top Man',
  init: 'high',
  resid: 'medium',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA294 – MS58 Confined Space – Rescue failure
{
  id: 'ms58-rescue-failure',
  title: 'RA294 – Confined Space Entry – Rescue failure',
  hazard: 'Fatality due to inadequate rescue arrangements',
  who: 'Entrants; Rescue personnel',
  how: 'No rescue plan; untrained personnel attempting rescue; lack of retrieval system',
  controls: 'Rescue plan documented and briefed before entry. Tripod and winch retrieval system in place. Trained rescue personnel available. No lone entry permitted.',
  action: 'Supervisor – Confined Space Supervisor',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA295 – MS58 Confined Space – Drowning/flooding risk
{
  id: 'ms58-flooding',
  title: 'RA295 – Confined Space Entry – Flooding risk',
  hazard: 'Sudden ingress of water leading to drowning',
  who: 'Entrants',
  how: 'Unexpected flow; upstream discharge; pump failure during work',
  controls: 'Assess upstream conditions before entry. Isolate flows where possible. Continuous monitoring. Immediate evacuation procedure established.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'medium',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA296 – MS58 Confined Space – Fall into chamber during entry/exit
{
  id: 'ms58-fall-entry',
  title: 'RA296 – Confined Space Entry – Fall during entry/exit',
  hazard: 'Fall from height into chamber',
  who: 'Employees; Contractors',
  how: 'Unsecured ladder; wet rungs; poor footing; inadequate lighting',
  controls: 'Secure ladder extending 1m above landing. Maintain dry footing. Provide adequate lighting. Use fall protection where required.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Initial: 2×3 = 6 → HIGH (due to severity)
  initL: 'medium',
  initS: 'high',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA297 – MS58 Confined Space – Equipment failure (gas monitor / ventilation)
{
  id: 'ms58-equipment-failure',
  title: 'RA297 – Confined Space Entry – Equipment failure',
  hazard: 'Failure of gas monitor or ventilation system',
  who: 'Entrants; Rescue personnel',
  how: 'Uncalibrated monitor; battery failure; ventilation breakdown',
  controls: 'Calibrate gas monitor before use. Check battery levels. Inspect ventilation equipment. Abort entry if equipment fails.',
  action: 'Supervisor – Competent Person',
  init: 'high',
  resid: 'low',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA298 – MS58 Confined Space – Biological exposure
{
  id: 'ms58-biological',
  title: 'RA298 – Confined Space Entry – Biological hazard exposure',
  hazard: 'Exposure to sewage or biological contaminants',
  who: 'Entrants',
  how: 'Contact with contaminated water or surfaces; cuts/open wounds exposed',
  controls: 'Wear appropriate PPE (gloves, coveralls). Avoid direct contact. Cover cuts. Wash thoroughly after task. Provide welfare facilities.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Initial: 2×2 = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA299 – MS58 Confined Space – Communication failure
{
  id: 'ms58-communication-failure',
  title: 'RA299 – Confined Space Entry – Communication failure',
  hazard: 'Delayed emergency response due to communication breakdown',
  who: 'Entrants; Top Man; Rescue personnel',
  how: 'No communication system; noise; inattentive top man',
  controls: 'Maintain continuous communication between entrant and top man. No distractions for top man. Establish emergency signal procedure before entry.',
  action: 'Supervisor – Top Man',
  init: 'high',
  resid: 'low',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA300 – MS59 Setting Out – Struck by plant while surveying
{
  id: 'ms59-struck-by-plant',
  title: 'RA300 – Setting Out & Surveying – Struck by plant',
  hazard: 'Surveyor struck by moving plant or vehicle',
  who: 'Employees; Contractors',
  how: 'Working within active work zone; distracted while looking through instrument; plant reversing nearby',
  controls: 'Maintain segregation from plant operating zones. High-visibility PPE mandatory. Use banksman where surveying near active plant. Brief survey team on site traffic routes before work begins.',
  action: 'Supervisor – Survey Lead',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA301 – MS59 Setting Out – Fall into excavation
{
  id: 'ms59-fall-excavation',
  title: 'RA301 – Setting Out & Surveying – Fall into excavation',
  hazard: 'Fall from height into open trench or excavation',
  who: 'Employees; Contractors',
  how: 'Stepping backwards while sighting instrument; poor lighting; unprotected edge',
  controls: 'Maintain safe distance from excavation edges. Install barriers where required. Provide adequate lighting. Brief surveyors on hazard awareness before starting.',
  action: 'Supervisor – Survey Lead',
  init: 'high',
  resid: 'medium',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA302 – MS59 Setting Out – Trip hazard from survey equipment
{
  id: 'ms59-trip-equipment',
  title: 'RA302 – Setting Out & Surveying – Trip hazard from equipment',
  hazard: 'Slip or trip over tripod legs or survey equipment',
  who: 'Employees; Contractors; Visitors',
  how: 'Tripod placed in pedestrian route; poor housekeeping; trailing cables from data equipment',
  controls: 'Position tripod away from access routes where possible. Keep cables tidy. Maintain good housekeeping. Do not leave equipment unattended in walkways.',
  action: 'Survey Lead – Operatives',
  init: 'medium',
  resid: 'low',

  // Initial: 2×2 = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA302 – MS59 Setting Out – Trip hazard from survey equipment
{
  id: 'ms59-trip-equipment',
  title: 'RA302 – Setting Out & Surveying – Trip hazard from equipment',
  hazard: 'Slip or trip over tripod legs or survey equipment',
  who: 'Employees; Contractors; Visitors',
  how: 'Tripod placed in pedestrian route; poor housekeeping; trailing cables from data equipment',
  controls: 'Position tripod away from access routes where possible. Keep cables tidy. Maintain good housekeeping. Do not leave equipment unattended in walkways.',
  action: 'Survey Lead – Operatives',
  init: 'medium',
  resid: 'low',

  // Initial: 2×2 = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA304 – MS59 Setting Out – Reduced visibility / distraction risk
{
  id: 'ms59-reduced-awareness',
  title: 'RA304 – Setting Out & Surveying – Reduced situational awareness',
  hazard: 'Collision risk due to distraction while sighting instrument',
  who: 'Employees; Contractors',
  how: 'Surveyor focused through instrument; unaware of approaching plant or vehicles',
  controls: 'Surveyor to position self outside active plant routes where possible. Maintain constant communication with site supervisor. Suspend work if plant operations compromise safety.',
  action: 'Supervisor – Survey Lead',
  init: 'medium',
  resid: 'low',

  // Initial: 2×3 = 6 → HIGH (severity high if struck)
  initL: 'medium',
  initS: 'high',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA305 – MS60 Block & Beam – Crush injury during beam lifting
{
  id: 'ms60-crush-lifting',
  title: 'RA305 – Block & Beam Installation – Crush injury during beam lifting',
  hazard: 'Crush injury from precast beam during lifting/placement',
  who: 'Employees; Contractors',
  how: 'Hands trapped between beam and bearing; uncontrolled lowering; standing beneath suspended beam',
  controls: 'Use approved lift plan. Use certified lifting chains and designated lifting points. Establish exclusion zone. No hands beneath suspended load. Use guide bars to position beams.',
  action: 'Lift Supervisor – Operatives',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA306 – MS60 Block & Beam – Beam collapse due to inadequate bearing
{
  id: 'ms60-inadequate-bearing',
  title: 'RA306 – Block & Beam Installation – Beam collapse due to inadequate bearing',
  hazard: 'Structural failure due to insufficient bearing or incorrect installation',
  who: 'Employees; Contractors',
  how: 'Incorrect seating depth; debris on wall plate; incorrect spacing; loading before stability achieved',
  controls: 'Confirm minimum bearing in accordance with design. Clean bearing surfaces before placement. Supervisor inspection before loading. Follow manufacturer installation guidance.',
  action: 'Supervisor – Site Manager',
  init: 'high',
  resid: 'medium',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA307 – MS60 Block & Beam – Fall from height during installation
{
  id: 'ms60-fall-height',
  title: 'RA307 – Block & Beam Installation – Fall from height',
  hazard: 'Operative falling from unprotected floor edge or between beams',
  who: 'Employees; Contractors',
  how: 'Working at floor level without edge protection; stepping between unfilled beams; poor lighting',
  controls: 'Install edge protection around perimeter. Do not walk between unsupported beams. Install temporary boarding where required. Provide adequate lighting.',
  action: 'Supervisor – Operatives',
  init: 'high',
  resid: 'medium',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA308 – MS60 Block & Beam – Manual handling of infill blocks
{
  id: 'ms60-manual-handling',
  title: 'RA308 – Block & Beam Installation – Manual handling injury',
  hazard: 'Musculoskeletal injury from repetitive handling of infill blocks',
  who: 'Employees; Contractors',
  how: 'Repetitive lifting; awkward posture; overreaching between beams',
  controls: 'Store blocks close to workface. Rotate tasks. Use correct lifting technique. Avoid twisting under load. Take regular breaks.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Initial: 3×2 = 6 → HIGH
  initL: 'high',
  initS: 'medium',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA309 – MS60 Block & Beam – Struck by plant during beam delivery
{
  id: 'ms60-struck-by-plant',
  title: 'RA309 – Block & Beam Installation – Struck by delivery vehicle or crane',
  hazard: 'Operative struck during delivery or offloading of beams',
  who: 'Employees; Contractors; Delivery Drivers',
  how: 'Reversing vehicle; crane slewing; poor segregation in delivery zone',
  controls: 'Designate delivery area. Use trained banksman for reversing. Maintain exclusion zone during lifting. Brief drivers on site rules.',
  action: 'Supervisor – Banksman',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA310 – MS60 Block & Beam – Trip hazard between beams
{
  id: 'ms60-trip-between-beams',
  title: 'RA310 – Block & Beam Installation – Trip between beams',
  hazard: 'Trip or misstep between open beam spans',
  who: 'Employees; Contractors',
  how: 'Walking across partially installed floor; stepping into void between beams',
  controls: 'Install infill blocks progressively. Do not allow access to incomplete floor areas. Maintain good lighting. Brief operatives on safe movement.',
  action: 'Supervisor – Operatives',
  init: 'medium',
  resid: 'low',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA311 – MS60 Block & Beam – Falling objects during installation
{
  id: 'ms60-falling-objects',
  title: 'RA311 – Block & Beam Installation – Falling objects',
  hazard: 'Materials falling to lower level during installation',
  who: 'Employees; Contractors; Visitors',
  how: 'Dropped infill blocks; unsecured tools; working above open area',
  controls: 'Establish exclusion zone below working area. Secure tools. Do not stack materials near edges. Brief workforce on falling object risk.',
  action: 'Supervisor – Operatives',
  init: 'high',
  resid: 'medium',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA311 – MS60 Block & Beam – Falling objects during installation
{
  id: 'ms60-falling-objects',
  title: 'RA311 – Block & Beam Installation – Falling objects',
  hazard: 'Materials falling to lower level during installation',
  who: 'Employees; Contractors; Visitors',
  how: 'Dropped infill blocks; unsecured tools; working above open area',
  controls: 'Establish exclusion zone below working area. Secure tools. Do not stack materials near edges. Brief workforce on falling object risk.',
  action: 'Supervisor – Operatives',
  init: 'high',
  resid: 'medium',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA313 – MS61 Occupational Health – Heat stress
{
  id: 'ms61-heat-stress',
  title: 'RA313 – Occupational Health – Heat stress',
  hazard: 'Heat exhaustion or heat stroke',
  who: 'Employees; Contractors',
  how: 'High temperatures; heavy PPE; strenuous manual work',
  controls: 'Provide regular rest breaks. Ensure hydration. Monitor vulnerable workers. Adjust working hours during extreme heat.',
  action: 'Supervisor – Site Manager',
  init: 'high',
  resid: 'medium',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA314 – MS61 Occupational Health – Cold stress
{
  id: 'ms61-cold-stress',
  title: 'RA314 – Occupational Health – Cold stress',
  hazard: 'Hypothermia and cold-related illness',
  who: 'Employees; Contractors',
  how: 'Working in low temperatures with inadequate clothing or shelter',
  controls: 'Provide thermal PPE. Warm rest areas available. Rotate tasks. Monitor workers for signs of cold stress.',
  action: 'Supervisor – Site Manager',
  init: 'medium',
  resid: 'low',

  // Initial: 2×3 = 6 → HIGH
  initL: 'medium',
  initS: 'high',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA315 – MS61 Occupational Health – Fatigue
{
  id: 'ms61-fatigue',
  title: 'RA315 – Occupational Health – Fatigue',
  hazard: 'Reduced concentration leading to accidents',
  who: 'Employees; Contractors',
  how: 'Long working hours; repetitive tasks; inadequate rest; physically demanding work',
  controls: 'Monitor working hours. Enforce rest breaks. Rotate tasks. Encourage reporting of fatigue. Supervisor to monitor signs of reduced alertness.',
  action: 'Supervisor – Site Manager',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH (indirect accident risk)
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
// RA316 – MS61 Occupational Health – Mental stress
{
  id: 'ms61-mental-health',
  title: 'RA316 – Occupational Health – Mental stress',
  hazard: 'Stress, anxiety or reduced wellbeing affecting performance',
  who: 'Employees; Contractors',
  how: 'High workload; pressure; poor communication; personal factors',
  controls: 'Encourage open communication. Toolbox talks on mental wellbeing. Provide access to support services. Supervisor check-ins.',
  action: 'Site Manager – Supervisors',
  init: 'medium',
  resid: 'low',

  // Initial: 2×2 = 4 → MEDIUM
  initL: 'medium',
  initS: 'medium',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA317 – MS61 Occupational Health – Noise exposure (long-term)
{
  id: 'ms61-noise-exposure',
  title: 'RA317 – Occupational Health – Noise-induced hearing loss',
  hazard: 'Hearing damage from prolonged exposure to site noise',
  who: 'Employees; Contractors',
  how: 'Working near plant, compaction equipment or cutting tools',
  controls: 'Noise assessment carried out. Provide hearing protection. Enforce mandatory hearing zones. Limit exposure duration.',
  action: 'Supervisor – Operatives',
  init: 'high',
  resid: 'low',

  // Initial: 3×2 = 6 → HIGH (chronic impact)
  initL: 'high',
  initS: 'medium',
  // Residual: 1×2 = 2 → LOW
  residL: 'low',
  residS: 'medium'
},
// RA318 – MS61 Occupational Health – Hand–arm vibration (long-term)
{
  id: 'ms61-havs-longterm',
  title: 'RA318 – Occupational Health – HAVS (long-term)',
  hazard: 'Hand–arm vibration syndrome',
  who: 'Employees',
  how: 'Regular use of vibrating tools; exceeding exposure limits',
  controls: 'Monitor vibration exposure times. Rotate tasks. Maintain equipment. Provide health surveillance.',
  action: 'Supervisor – Site Manager',
  init: 'high',
  resid: 'medium',

  // Initial: 3×2 = 6 → HIGH
  initL: 'high',
  initS: 'medium',
  // Residual: 1×2 = 2 → LOW (if managed correctly)
  residL: 'low',
  residS: 'medium'
},
// RA319 – MS61 Occupational Health – Respiratory exposure (silica/dust)
{
  id: 'ms61-respiratory-exposure',
  title: 'RA319 – Occupational Health – Respiratory exposure (RCS)',
  hazard: 'Long-term lung disease from silica dust exposure',
  who: 'Employees; Contractors',
  how: 'Cutting concrete; dry sweeping; inadequate RPE use',
  controls: 'Use wet cutting or dust extraction. Provide FFP3 RPE. Avoid dry sweeping. Provide respiratory health surveillance.',
  action: 'Supervisor – Operatives',
  init: 'high',
  resid: 'medium',

  // Initial: 3×3 = 9 → HIGH (long-term fatal disease potential)
  initL: 'high',
  initS: 'high',
  // Residual: 1×3 = 3 → MEDIUM
  residL: 'low',
  residS: 'high'
},
    {
    id: 'work-at-height',
    title: 'Work at height (Installing Bracketry)',
    hazard: 'Falling Objects, head collision with fixed objects, e.g. steelwork, pipework, building structure etc.',
    who: 'MVL Employees; Other Trade contractors',
    how: 'Unfinished/Unfixed ductwork or bracketry whilst being installed potentially falling from height, whilst working at height clashing with objects',
    controls: 'Ensure operatives are provided with and wear always on site suitable hard hat protection and are aware of statutory requirements for use. Also use of mechanical lifting equipment and a wide working platform. Tools to be tethered whilst being used when working at height.',
    action: 'Supervisor – Operatives',
    init: 'medium',
    resid: 'low'
  },
   {
    id: 'RA01_Falls_From_Height',
    title: 'RA01 Falls from height (ladders)',
    hazard: 'Fall from height using ladders',
    who: 'Employees, 3rd parties',
    how: 'Working from/ascending ladders; overreaching; defective/incorrect ladder',
    controls: 'Use Grade 1 ladders in good condition; ladders are for access only; maintain 3 points of contact; set up to avoid overreach; foot when erecting and tie off; keep rungs clean; inspect/clean regularly.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'Ladder_Slipping',
    title: 'RA01 Ladder slipping',
    hazard: 'Ladder slip/slide at base',
    who: 'Employees, 3rd parties',
    how: 'Poor ground, wrong angle or insufficient tie/footing',
    controls: 'Firm, level ground; 1:4 angle (~75°); extend ≥1 m above step-off; secure/ tie by stiles; keep feet area clear; foot ladders only up to 5 m.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'Ladder_Rolling',
    title: 'RA01 Ladder rolling (platform ladders)',
    hazard: 'Platform ladder movement/rolling',
    who: 'Employees, 3rd parties',
    how: 'Brakes not applied; overreaching/overloading while in use',
    controls: 'Position ladder correctly; lock brakes before use; do not move ladder while occupied; avoid overreaching/overloading.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA02 — Materials storage on site  :contentReference[oaicite:6]{index=6}
  {
    id: 'RA02_Falling_Materials',
    title: 'RA02 Falling materials',
    hazard: 'Stored materials falling/collapsing',
    who: 'Employees, 3rd parties',
    how: 'Poor stacking/unstable pallets or cylindrical items; unsecured stockpiles',
    controls: 'Follow manufacturer stacking guidance; max two pallets high; wedge cylindrical items; supervisor inspections; secure storage areas and restrict access.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA02_Environmental_Contamination',
    title: 'RA02 Environmental contamination',
    hazard: 'Leaks/spills polluting land/water',
    who: 'Environment / All contractors',
    how: 'Improper storage of oils/chemicals; loss of containment',
    controls: 'Secure stores for hazardous substances; prevent unauthorised access; provide trays/plant nappies/bunds for containment.',
    action: 'Environmental Lead',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'RA02_Hazardous_Substances',
    title: 'RA02 Hazardous substances (COSHH)',
    hazard: 'Exposure to hazardous substances',
    who: 'Employees, 3rd parties',
    how: 'Poorly controlled chemicals/fuels; incompatible storage',
    controls: 'COSHH assessments available; clearly marked drums; store in purpose-made containers away from heat/ignition/incompatibles.',
    action: 'COSHH Coordinator',
    init: 'medium',
    resid: 'low'
  },

  // RA03 — Storage and use of LPG  :contentReference[oaicite:7]{index=7}
  {
    id: 'RA03_Explosion',
    title: 'RA03 Explosion (LPG)',
    hazard: 'Explosion of LPG',
    who: 'Employees, 3rd parties',
    how: 'Leaks/ignition; cylinders in unsuitable locations; faulty equipment',
    controls: 'Store cylinders in open-mesh lockable cage away from buildings/ignition; only in-use cylinders at workface; planned maintenance; isolate faulty sets; segregate empties in cage.',
    action: 'Permit-to-Work Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA03_Fire',
    title: 'RA03 Fire (LPG)',
    hazard: 'Fire from LPG storage/use',
    who: 'Employees, 3rd parties',
    how: 'Sparks/heat near LPG; hot work without controls; smoking',
    controls: 'Keep from flammables/ignition; hot-work permit and controls; post-job hot checks; signage/no-smoking enforced; see COSHH for firefighting media.',
    action: 'Permit-to-Work Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA03_Asphyxia',
    title: 'RA03 Asphyxia (LPG)',
    hazard: 'Asphyxiation from gas accumulation',
    who: 'Employees, 3rd parties',
    how: 'Poor ventilation allowing LPG build-up',
    controls: 'Provide adequate ventilation in use/storage; use gas detectors where ventilation is poor; mark escape routes.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA04 — Slinging of loads  :contentReference[oaicite:8]{index=8}
  {
    id: 'RA04_Falling_Objects',
    title: 'RA04 Falling objects (slinging)',
    hazard: 'Load or gear falling during lift',
    who: 'Employees, 3rd parties',
    how: 'Poor planning/inspection; slinging over people; defective kit',
    controls: 'Plan to minimise risk; never sling over people/plant; use maintained/inspected, certificated gear; trained operatives only.',
    action: 'Lift Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA04_Trapping_By_Load',
    title: 'RA04 Trapping by load',
    hazard: 'Crush/trap injuries from moving load',
    who: 'Employees, 3rd parties',
    how: 'Uncontrolled movement; sharp edges; loss of control',
    controls: 'Firm, level base for lifting appliance; protect sharp edges; use tag lines; wear appropriate PPE.',
    action: 'Lift Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA04_Electrocution',
    title: 'RA04 Electrocution (OH lines)',
    hazard: 'Contact with overhead power lines',
    who: 'Employees, 3rd parties',
    how: 'Lifting operations near OHL without controls',
    controls: 'Plan SSoW near OHL; obtain load data & compatible gear; apply GS6 controls and agreed safe distances.',
    action: 'Appointed Person (Lifting)',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA04_Damage_To_Equipment',
    title: 'RA04 Damage to equipment',
    hazard: 'Damage to lifting appliance/gear',
    who: 'Employees, 3rd parties',
    how: 'Using defective kit or operating in unsafe conditions',
    controls: 'Report defects immediately; remove from service; suspend work in adverse weather.',
    action: 'Lift Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA05 — Use of lifting equipment  :contentReference[oaicite:9]{index=9}
  {
    id: 'RA05_Falling_Objects',
    title: 'RA05 Falling objects (lifting equipment)',
    hazard: 'Dropped load during lifting operations',
    who: 'Employees, 3rd parties',
    how: 'Poor planning; uncertified equipment; untrained personnel',
    controls: 'Produce SSoW; case study for mobile crane lifts; use compliant/marked/certified/inspected equipment; trained personnel only.',
    action: 'Appointed Person (Lifting)',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA05_Crushing_Injuries',
    title: 'RA05 Crushing injuries',
    hazard: 'Crush injuries within lift zone',
    who: 'Employees, 3rd parties',
    how: 'Personnel in lift/exclusion zone',
    controls: 'Brief site; set and enforce exclusion zones; exclude non-essential personnel.',
    action: 'Lift Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA05_Electrocution',
    title: 'RA05 Electrocution (OHL)',
    hazard: 'Contact with overhead lines during lifting',
    who: 'Employees, 3rd parties',
    how: 'Operating near live OHL without controls',
    controls: 'No lifting near OHL without DNO consultation; agree diversion/distances/precautions; erect barriers/goalposts to GS6.',
    action: 'Appointed Person (Lifting)',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA05_Damage_To_Equipment',
    title: 'RA05 Damage to equipment',
    hazard: 'Plant/equipment damage through misuse/overload',
    who: 'Employees, 3rd parties',
    how: 'Exceeding capacities; untrained operation',
    controls: 'Do not exceed machine capability; trained operators only.',
    action: 'Lift Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA06_Lighting',
    title: 'RA06 Lighting (lifting ops)',
    hazard: 'Poor/insufficient lighting',
    who: 'Employees, 3rd parties',
    how: 'Inadequate illumination during lifting operations',
    controls: 'Provide adequate task lighting; use 110V only for temporaries; junction boxes installed by a trained, certified electrician.',
    action: 'Qualified Electrician',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA06_Collision_Vehicles_Structures_OHL',
    title: 'RA06 Collision with vehicles/structures/OHL',
    hazard: 'Vehicle/structure strike or overhead line contact',
    who: 'Employees, 3rd parties',
    how: 'Unplanned routes; poor escorting; inadequate separation distances',
    controls: 'Plan routes in advance; escort crane with competent banksman; protect OHL to owner’s safe distances; establish underground services; cordon gaps <600mm behind counterweight.',
    action: 'Appointed Person (Lifting)',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA06_Loss_Of_Load',
    title: 'RA06 Loss of load',
    hazard: 'Dropped or unstable load',
    who: 'Employees, 3rd parties',
    how: 'Unsuitable/uncertified equipment; poor inspection; untrained personnel',
    controls: 'Use adequate, certificated lifting gear; visual checks by slingers; trained/competent slingers and banksmen; cordon affected areas.',
    action: 'Lift Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA06_Overturning_Crush',
    title: 'RA06 Overturning / crush injuries',
    hazard: 'Plant overturning or crushing personnel',
    who: 'Employees, 3rd parties',
    how: 'Siting on weak/uneven ground; lifts without outriggers/pads',
    controls: 'Use certificated crane/excavator; trained operator; site on firm, level ground; outriggers fully extended with pads before lifting.',
    action: 'Lift Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA06_Poor_Visibility_Operator_Errors',
    title: 'RA06 Operator errors due to poor visibility',
    hazard: 'Miscommunication/misjudgement from restricted view',
    who: 'Employees, 3rd parties',
    how: 'Driver cannot see load/path',
    controls: 'Position competent banksmen in full view; use radios where required.',
    action: 'Lift Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA06_Adverse_Weather',
    title: 'RA06 Adverse weather',
    hazard: 'Unsafe lifting in high winds/adverse conditions',
    who: 'Employees, 3rd parties',
    how: 'Operating above manufacturer wind limits',
    controls: 'Apply LOLER and manufacturer wind limits; cease lifting above threshold.',
    action: 'Appointed Person (Lifting)',
    init: 'high',
    resid: 'low'
  },

  // RA07 — Use of abrasive wheels  :contentReference[oaicite:6]{index=6}
  {
    id: 'RA07_Wheels_Bursting',
    title: 'RA07 Wheels bursting',
    hazard: 'Abrasive/cut-off wheel burst',
    who: 'Employees, 3rd parties',
    how: 'Incorrect selection/speed; side-grinding; over-worn wheels',
    controls: 'Trained personnel to mount wheels; correct wheel for task and spindle speed; no side-grinding; do not stop wheels by pressure; run new wheels free for 1 minute with others clear; speed marked on wheel.',
    action: 'Supervisor',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'RA07_Electrocution',
    title: 'RA07 Electrocution',
    hazard: 'Electric shock from equipment',
    who: 'Employees, 3rd parties',
    how: 'Defective equipment, damaged leads, unsafe isolation',
    controls: 'Fit-for-purpose and tested equipment; pre-use inspections; disconnect from power after use.',
    action: 'Competent Person (Electrical)',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA07_Contact_With_Rotating_Wheel',
    title: 'RA07 Contact with rotating wheel',
    hazard: 'Contact with rotating abrasive wheel',
    who: 'Employees, 3rd parties',
    how: 'Hands/body enter danger zone; incorrect guards/rests',
    controls: 'Guards secured and in place; rests on pedestal grinders secured and close to wheel; isolate power before changing wheel.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA07_Eye_Injury_Flying_Particles',
    title: 'RA07 Eye injury from particles',
    hazard: 'Eye injury from flying particles',
    who: 'Employees, 3rd parties',
    how: 'Debris/projectiles during cutting/grinding',
    controls: 'Wear face shields during operations; use screens to protect others.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA07_Inhalation_Of_Dust',
    title: 'RA07 Inhalation of dust',
    hazard: 'Respirable dust inhalation',
    who: 'Employees, 3rd parties',
    how: 'Dust generated during cutting/grinding',
    controls: 'Use LEV and appropriate RPE where necessary.',
    action: 'Supervisor',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'RA07_Excessive_Noise',
    title: 'RA07 Excessive noise',
    hazard: 'Noise exposure',
    who: 'Employees, 3rd parties',
    how: 'High noise from abrasive wheel operations',
    controls: 'Wear hearing protection during abrasive wheel operations.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA07_Vibration_White_Finger',
    title: 'RA07 Vibration white finger',
    hazard: 'Hand–arm vibration (HAVS)',
    who: 'Employees, 3rd parties',
    how: 'Prolonged tool use exceeding daily limits',
    controls: 'Limit durations; regular breaks; do not exceed manufacturer recommendations; keep hands warm; report symptoms immediately.',
    action: 'Supervisor',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'RA07_Fire',
    title: 'RA07 Fire',
    hazard: 'Fire/ignition from sparks or equipment',
    who: 'Employees, 3rd parties',
    how: 'Sparks near combustibles; smouldering after work',
    controls: 'Provide relevant extinguishers; clear combustibles before work; hot-check area after finishing.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA08 — Forklift operations  :contentReference[oaicite:7]{index=7}
  {
    id: 'RA08_Operator_Error',
    title: 'RA08 Operator error (FLT)',
    hazard: 'Incorrect operation of forklift',
    who: 'Employees, 3rd parties',
    how: 'Untrained/unauthorised use of plant',
    controls: 'Only trained, competent, certified and authorised personnel to operate plant.',
    action: 'Plant Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA08_Overturning',
    title: 'RA08 Overturning (FLT)',
    hazard: 'Forklift overturning',
    who: 'Employees, 3rd parties',
    how: 'Excess speed; obstructions; inclines; poor load position',
    controls: 'Drive to conditions and site speed limit; avoid sudden braking/impacts/inclines; carry loads low; cross obstacles slowly/diagonally; never use one fork arm.',
    action: 'Plant Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA08_Overloading_Loss_Of_Load',
    title: 'RA08 Overloading / loss of load',
    hazard: 'Load dropped or unstable on forks',
    who: 'Employees, 3rd parties',
    how: 'Exceeding SWL; poor stacking; uneven load distribution',
    controls: 'Never exceed SWL or counterweight truck; avoid unsafe stack heights; distribute weight on both forks; do not travel with unsecured load.',
    action: 'Plant Supervisor',
    init: 'high',
    resid: 'medium'
  },
  {
    id: 'RA08_Collision',
    title: 'RA08 Collision (FLT)',
    hazard: 'Collision with vehicles/structures/pedestrians',
    who: 'Employees, 3rd parties',
    how: 'Poor control/clearances/visibility',
    controls: 'Operate in a controlled manner; keep safe braking distance (~3 truck lengths); maintain fork heel ~100mm above ground and tips ~50mm above heel; ensure clearances; travel in reverse if vision obscured or use Banksman.',
    action: 'Plant Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA08_Floor_Failure',
    title: 'RA08 Floor failure (FLT)',
    hazard: 'Floor/bridge plate collapse',
    who: 'Employees, 3rd parties',
    how: 'Driving over inadequately supported plates',
    controls: 'Verify plates are secured and will support truck weight prior to crossing.',
    action: 'Plant Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA08_Explosions_Fire',
    title: 'RA08 Explosions & fire (FLT)',
    hazard: 'Fire from defects/fuel leaks',
    who: 'Employees, 3rd parties',
    how: 'Poor maintenance; leaking fuel lines',
    controls: 'Pre-use checks; ensure truck is fit for use; report defects immediately.',
    action: 'Plant Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA08_Other_Personnel',
    title: 'RA08 Other personnel (FLT)',
    hazard: 'Pedestrian struck/trapped by FLT',
    who: 'Employees, 3rd parties',
    how: 'Pedestrians in FLT operating area; lack of awareness',
    controls: 'Ensure personnel awareness; ensure motion indicators work; drive slowly around pedestrians; never trap a person without an escape route.',
    action: 'Plant Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA08_Trapping',
    title: 'RA08 Trapping (FLT)',
    hazard: 'Trapping in/around mast/forks',
    who: 'Employees, 3rd parties',
    how: 'Limbs placed between uprights/cross-members or under forks',
    controls: 'Keep within confines of truck; no limbs between mast components; no one to stand/walk beneath forks.',
    action: 'Plant Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA09 — Manual handling  :contentReference[oaicite:8]{index=8}
  {
    id: 'RA09_Heavy_Loads',
    title: 'RA09 Lifting/pulling/pushing heavy loads',
    hazard: 'Musculoskeletal injury from handling heavy/awkward loads',
    who: 'Employees, 3rd parties',
    how: 'Single-person lifts beyond capability; poor technique',
    controls: 'Use mechanical aids where possible; if lifting manually, keep back straight, knees bent, look ahead, lift with legs; seek assistance if too heavy/awkward.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA09_Slips_Trips_Falls',
    title: 'RA09 Slips/trips/falls',
    hazard: 'Slips, trips and falls during handling',
    who: 'Employees, 3rd parties',
    how: 'Obstructed routes; poor housekeeping; poor lighting',
    controls: 'Plan route; remove obstacles; ensure safe access/egress and adequate lighting; maintain housekeeping.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA09_Cuts_Sharp_Edges',
    title: 'RA09 Cuts from sharp edges',
    hazard: 'Hand lacerations from sharp materials',
    who: 'Employees, 3rd parties',
    how: 'Handling sharp/abrasive objects',
    controls: 'Wear suitable gloves for handling tasks.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA09_Repetitive_Movements',
    title: 'RA09 Repetitive movements',
    hazard: 'Musculoskeletal disorders from repetitive tasks',
    who: 'Employees, 3rd parties',
    how: 'Prolonged repetitive handling without breaks',
    controls: 'Rotate tasks; take regular breaks; use mechanical aids where possible.',
    action: 'Supervisor',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'RA11_Noise',
    title: 'RA11 Noise (compressors/breakers)',
    hazard: 'Excessive noise exposure',
    who: 'Employees, 3rd parties',
    how: 'High noise from compressor and breaker operation',
    controls: 'Assess impact; apply engineering controls (silencers/barriers); set HPZs/signage; provide hearing protection of correct SNR.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA11_Vibration',
    title: 'RA11 Vibration (compressors/breakers)',
    hazard: 'Hand–arm vibration (HAVS)',
    who: 'Employees, 3rd parties',
    how: 'Prolonged breaker use; blunt tools; cold conditions',
    controls: 'Follow manufacturer exposure times; job rotation/breaks; maintain tools/sharpen cutters; keep hands warm; report symptoms.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA11_Eye_Injury',
    title: 'RA11 Eye injury (flying particles)',
    hazard: 'Eye injury from flying particles',
    who: 'Employees, 3rd parties',
    how: 'Projectiles during breaking operations',
    controls: 'Wear impact-resistant goggles; set exclusion zones; use screens where third parties could be affected.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA11_Asphyxiation',
    title: 'RA11 Asphyxiation',
    hazard: 'Build-up of exhaust gases/oil mist',
    who: 'Employees, 3rd parties',
    how: 'Inadequate ventilation during operation',
    controls: 'Ensure adequate ventilation; if not achievable cease work and contact H&S; monitor atmosphere where necessary.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA11_Struck_By_Hose',
    title: 'RA11 Struck by hose',
    hazard: 'Hose whip/injury',
    who: 'Employees, 3rd parties',
    how: 'Hose failure or coupling separation',
    controls: 'Fit safety straps to all hoses; inspect before use; replace damaged hoses/couplings.',
    action: 'Supervisor',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'RA11_Explosion',
    title: 'RA11 Explosion',
    hazard: 'Compressor failure/explosion',
    who: 'Employees, 3rd parties',
    how: 'Defects or lack of thorough examination',
    controls: 'Maintain current statutory examinations/certification; remove from service if faults suspected.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA12 — Portable electrical equipment  :contentReference[oaicite:6]{index=6}
  {
    id: 'RA12_Operator_Error',
    title: 'RA12 Operator error',
    hazard: 'Incorrect use of electrical equipment',
    who: 'Employees, 3rd parties',
    how: 'Incompetent use of portable tools',
    controls: 'Restrict to competent users; brief correct use and limits.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA12_Electrocution',
    title: 'RA12 Electrocution',
    hazard: 'Electric shock',
    who: 'Employees, 3rd parties',
    how: 'Damaged equipment, failed PAT, wet conditions',
    controls: 'Use only PAT-tested equipment; pre-use checks; only competent persons repair; keep equipment clean/dry; avoid damp surfaces.',
    action: 'Competent Person (Electrical)',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA12_Slips_Trips_Falls',
    title: 'RA12 Slips, trips & falls',
    hazard: 'Trips from cables/leads',
    who: 'Employees, 3rd parties',
    how: 'Trailing, overstretched or damaged cables',
    controls: 'Route cables tidily away from walkways/edges/heat; disconnect/store correctly after use.',
    action: 'Supervisor',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'RA12_Flying_Particles',
    title: 'RA12 Flying particles',
    hazard: 'Eye injury from projectiles',
    who: 'Employees, 3rd parties',
    how: 'Cutting/grinding with portable tools',
    controls: 'Wear safety glasses/face visor; deploy screens to protect others.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA12_Noise',
    title: 'RA12 Noise',
    hazard: 'Hearing damage',
    who: 'Employees, 3rd parties',
    how: 'High noise from power tools',
    controls: 'Provide hearing protection; display mandatory signage in noisy areas.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA12_Vibration',
    title: 'RA12 Vibration',
    hazard: 'Hand–arm vibration (HAVS)',
    who: 'Employees, 3rd parties',
    how: 'Vibrating electrical tools used for long periods',
    controls: 'Take regular breaks/rotate tasks; keep hands warm; report issues promptly.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA13 — Joinery  :contentReference[oaicite:7]{index=7}
  {
    id: 'RA13_Contact_Entanglement',
    title: 'RA13 Plant contact/entanglement',
    hazard: 'Contact with moving plant/entanglement',
    who: 'Employees, 3rd parties',
    how: 'Loose clothing/hands near moving parts; no isolation',
    controls: 'Authorised operators only; keep clothing clear; use push sticks; isolate power when finished.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA13_Slips_Trips_Sprains',
    title: 'RA13 Slips/trips & sprains',
    hazard: 'Slips/trips and strains',
    who: 'Employees, 3rd parties',
    how: 'Waste causing obstructions; poor lighting',
    controls: 'Remove waste promptly; ensure good lighting.',
    action: 'Supervisor',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'RA13_Fire',
    title: 'RA13 Fire',
    hazard: 'Fire during joinery operations',
    who: 'Employees, 3rd parties',
    how: 'Accumulation of wood/dust; ignition sources',
    controls: 'Do not allow wood to accumulate; ensure suitable extinguishers available.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA13_Noise',
    title: 'RA13 Noise',
    hazard: 'Noise exposure',
    who: 'Employees, 3rd parties',
    how: 'Use of saws/plant (e.g., cross-cut saw)',
    controls: 'Wear hearing protection when operating saws; warn others in vicinity.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA13_HAVS',
    title: 'RA13 Hand–arm vibration',
    hazard: 'HAVS from powered tools',
    who: 'Employees, 3rd parties',
    how: 'Prolonged use of vibrating tools',
    controls: 'Minimise exposure via job rotation and regular breaks.',
    action: 'Supervisor',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'RA13_Hazardous_Substances',
    title: 'RA13 Hazardous substances',
    hazard: 'Exposure to hazardous substances',
    who: 'Employees, 3rd parties',
    how: 'Use/storage of adhesives, finishes, solvents',
    controls: 'Read relevant COSHH; store substances correctly when not in use.',
    action: 'COSHH Coordinator',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA13_Flying_Particles',
    title: 'RA13 Flying particles',
    hazard: 'Eye injury from particles',
    who: 'Employees, 3rd parties',
    how: 'Cutting/machining with guards not set',
    controls: 'Set guards correctly; wear appropriate PPE.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA13_Dust',
    title: 'RA13 Dust',
    hazard: 'Respirable dust exposure',
    who: 'Employees, 3rd parties',
    how: 'Timber cutting/sanding generating dust',
    controls: 'Keep area clean; use suitable RPE for dusty processes; use LEV; be mindful of others nearby.',
    action: 'Supervisor',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'RA13_Lifting_Operations',
    title: 'RA13 Lifting operations',
    hazard: 'Lifting activities in workshop',
    who: 'Employees, 3rd parties',
    how: 'Using untested/unsuitable lifting gear',
    controls: 'Use tested equipment with SWL indicated; ensure suitability for task.',
    action: 'Lift Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA13_Manual_Handling',
    title: 'RA13 Manual handling',
    hazard: 'Handling of timber/components',
    who: 'Employees, 3rd parties',
    how: 'Carrying heavy/awkward timber; poor storage',
    controls: 'Wear suitable gloves; store timber in racks by size (larger lengths mid-height).',
    action: 'Supervisor',
    init: 'medium',
    resid: 'low'
  },

  // RA14 — Disposal of waste materials  :contentReference[oaicite:8]{index=8}
  {
    id: 'RA14_Fires',
    title: 'RA14 Fires (waste)',
    hazard: 'Fires during waste storage/disposal',
    who: 'Employees, 3rd parties',
    how: 'Uncontrolled build-up; poor storage; ignition sources',
    controls: 'Provide secure skips; remove build-up regularly; no waste fires on site; provide suitable extinguishers for the waste type.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA14_Toxins_Contamination',
    title: 'RA14 Toxins/contamination',
    hazard: 'Environmental/health contamination',
    who: 'Employees, 3rd parties',
    how: 'Incorrect disposal; unregistered carriers; poor segregation',
    controls: 'Follow manufacturer/local authority instructions; use registered carriers with transfer notes; label containers; comply with COSHH for storage/disposal; handle asbestos per method statements.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA15 — Confined Spaces  :contentReference[oaicite:9]{index=9}
  {
    id: 'RA15_Falls_From_Height',
    title: 'RA15 Falls from height',
    hazard: 'Falls when entering/exiting confined space',
    who: 'Employees, 3rd parties',
    how: 'Access/egress via openings/steps without safeguards',
    controls: 'Use tripod, safety line and harness for entry/exit; place warning signage.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA15_Falling_Objects',
    title: 'RA15 Falling objects',
    hazard: 'Objects falling into the space',
    who: 'Employees, 3rd parties',
    how: 'Tools/materials lowered or dropped',
    controls: 'Lower tools before personnel; set barriers to prevent entry and falling materials.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA15_Explosions',
    title: 'RA15 Explosions',
    hazard: 'Ignition within confined space',
    who: 'Employees, 3rd parties',
    how: 'Flammable atmospheres; unsuitable equipment',
    controls: 'Monitor atmosphere; use approved electrical equipment; prohibit naked flames; ensure all operatives are CS trained.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA15_Poor_Light',
    title: 'RA15 Poor light',
    hazard: 'Insufficient lighting',
    who: 'Employees, 3rd parties',
    how: 'Low light levels in/around the space',
    controls: 'Use intrinsically safe lighting appropriate to zone.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA15_Asphyxiation',
    title: 'RA15 Asphyxiation',
    hazard: 'Oxygen deficiency/contaminants',
    who: 'Employees, 3rd parties',
    how: 'Poor ventilation; dust/fumes accumulation',
    controls: 'Monitor with gas meter; provide ventilation; keep BA available; use dust extraction where needed.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA15_Trapped_Personnel',
    title: 'RA15 Personnel becoming trapped',
    hazard: 'Entrapment in the confined space',
    who: 'Employees, 3rd parties',
    how: 'Obstructed exits; no comms/emergency plan',
    controls: 'Set reporting procedure and rescue plan; keep exits clear at all times.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA15_Disease',
    title: 'RA15 Disease',
    hazard: 'Biological/chemical exposure',
    who: 'Employees, 3rd parties',
    how: 'Contact with hazardous substances in space',
    controls: 'Apply relevant COSHH protective measures and hygiene controls.',
    action: 'COSHH Coordinator',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA16_Striking_Of_Overhead_Lines',
    title: 'RA16 Striking of overhead lines',
    hazard: 'Contact with overhead power lines',
    who: 'Employees, 3rd parties',
    how: 'Plant/loads entering the danger zone of live overhead conductors',
    controls: 'Avoid work beneath lines where possible; agree diversion/safe distances with the electricity company; erect solid goalposts/high-visibility barriers to GS6; fit height restrictors to plant; check ground for hidden gradients that could defeat restrictors; brief all personnel; assume services are live.',
    action: 'Permit-to-Work Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA17 — Existing Underground Services  :contentReference[oaicite:6]{index=6}
  {
    id: 'RA17_Striking_Underground_Services',
    title: 'RA17 Striking underground services',
    hazard: 'Service strike (flooding/electrocution/explosion/fire)',
    who: 'Employees, 3rd parties',
    how: 'Excavation or ground works in proximity to existing utilities',
    controls: 'Obtain utility records; CAT & Genny to trace/mark services; look for surface clues; hand-dig trial holes to prove positions; mark lines; design/support excavations around services; assume services live; stop work and notify utility if struck; careful backfill to avoid voids/shifting.',
    action: 'Permit-to-Dig Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA17_Explosion',
    title: 'RA17 Explosion (identifying services)',
    hazard: 'Explosion during service identification',
    who: 'Employees, 3rd parties',
    how: 'Ignition sources near gases/vapours in poorly ventilated areas',
    controls: 'Ventilate; exclude naked flames; enforce no-smoking; use intrinsically safe equipment.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA17_YW_Easement',
    title: 'RA17 YW easement protection',
    hazard: 'Damage to high-pressure water main easement',
    who: 'Employees, 3rd parties',
    how: 'Uncontrolled works within easement (loading/excavation/vibration)',
    controls: 'Fence and sign easement; create gateways only where roads are planned; no drainage/road works until YW inspection; no point loadings, heavy vibration, deep excavations or piling without permit.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA18 — Excavations  :contentReference[oaicite:7]{index=7}
  {
    id: 'RA18_Striking_Underground_Services',
    title: 'RA18 Striking underground services',
    hazard: 'Service strike in excavation',
    who: 'Employees, 3rd parties',
    how: 'Excavating in areas with live buried utilities',
    controls: 'Assume services live; follow HSG47; CAT scans; stop work and contact utility if struck; careful reinstatement around services.',
    action: 'Permit-to-Dig Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA18_Collapse_Of_Excavation',
    title: 'RA18 Collapse of excavation',
    hazard: 'Excavation wall/edge failure',
    who: 'Employees, 3rd parties',
    how: 'Unstable ground, inadequate support or adverse conditions',
    controls: 'Assess ground before/during/after; competent inspections each shift/after events; install trench sheets/drag boxes per method; competent supervision for install/alter/remove; stop work if unsafe.',
    action: 'Temporary Works Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA18_Undermining_Structures',
    title: 'RA18 Undermining nearby structures',
    hazard: 'Loss of support to nearby foundations/scaffolds',
    who: 'Employees, 3rd parties',
    how: 'Excavating adjacent to structures without assessment/support',
    controls: 'Survey foundations; seek structural engineering advice; provide temporary support where required before digging.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA18_Falls_Into_Excavations',
    title: 'RA18 Materials/people/plant falling into excavations',
    hazard: 'Falls and dropped objects into open excavations',
    who: 'Employees, 3rd parties',
    how: 'Unprotected edges, spoil too close, unsecured buckets',
    controls: 'Keep spoil/materials away from edges; barrier and sign edges; check and secure buckets/attachments.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA18_Falls_From_Ladder',
    title: 'RA18 Falls from ladder (access to excavation)',
    hazard: 'Fall during access/egress',
    who: 'Employees, 3rd parties',
    how: 'Unsecured/defective ladders or poor footing',
    controls: 'Good condition; secure/tie; extend ~1 m above landing; firm level base; regular checks.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA19 — Use of Excavators  :contentReference[oaicite:8]{index=8}
  {
    id: 'RA19_People_Struck_By_Plant',
    title: 'RA19 People struck by plant/boom',
    hazard: 'Collision with excavator/boom',
    who: 'Employees, 3rd parties',
    how: 'Poor visibility, congested workface, proximity of personnel',
    controls: 'Use banksman where vision is impaired; segregate pedestrians; licensed operators only; flashing beacons; mandatory hi-vis.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA19_Striking_Of_Overhead_Lines',
    title: 'RA19 Striking of overhead lines',
    hazard: 'Contact with overhead power lines',
    who: 'Employees, 3rd parties',
    how: 'Excavator working beneath/near live conductors',
    controls: 'Avoid where practicable; agree safe distances/diversions; GS6 goalposts; height restrictors; check ground gradients.',
    action: 'Permit-to-Work Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA19_Falling_Objects',
    title: 'RA19 Falling objects (attachments/loads)',
    hazard: 'Dropped loads/attachments',
    who: 'Employees, 3rd parties',
    how: 'Working within operating radius or under suspended loads; quick-hitch issues',
    controls: 'Exclude persons from radius; verify bucket/attachments; no tampering with quick hitch; daily and weekly inspections.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA19_Plant_Overturning',
    title: 'RA19 Plant overturning',
    hazard: 'Loss of stability/rollover',
    who: 'Employees, 3rd parties',
    how: 'Working across gradients, undercutting faces, adverse ground',
    controls: 'Tracks/wheels at 90° to face; control gradients; prevent overhangs; inspect excavations/spoil especially after weather.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA19_Plant_Falling_Into_Excavation',
    title: 'RA19 Plant falling into excavation',
    hazard: 'Plant over-running into excavation',
    who: 'Employees, 3rd parties',
    how: 'Insufficient edge protection/stop blocks',
    controls: 'Provide stop blocks/visible barriers; fence edges; maintain high visibility of excavation limits.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA19_Falling_From_Excavator',
    title: 'RA19 Falling from excavator',
    hazard: 'Fall while accessing/egressing the cab',
    who: 'Employees, 3rd parties',
    how: 'Mud/debris on steps; uneven ground',
    controls: 'Keep steps/access clean; check ground before dismounting.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA20 — Works on Highway  :contentReference[oaicite:9]{index=9}
  {
    id: 'RA20_Traffic_Accidents',
    title: 'RA20 Traffic accidents',
    hazard: 'Collisions involving site traffic/public traffic',
    who: 'Employees, 3rd parties',
    how: 'Working on live carriageways; inadequate TM/controls',
    controls: 'Notify Local Highways Authority; authorisation prior to works; install/maintain TM to Chapter 8; keep carriageway and access/egress clear; plant on highway to have beacon/reverse alarm/signage; highway operators to hold valid UK driving licence.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA20_Contamination_Of_Carriageway',
    title: 'RA20 Contamination of the carriageway',
    hazard: 'Slippery/contaminated road surface',
    who: 'Employees, 3rd parties',
    how: 'Mud/spoil/oils tracked or spilled onto road',
    controls: 'Regular checks and prompt clearing by Site Foreman; follow COSHH; inspect TM for compliance with NRSWA/Chapter 8.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA20_Struck_By_Traffic',
    title: 'RA20 Struck by traffic',
    hazard: 'Operatives hit by passing vehicles',
    who: 'Employees, 3rd parties',
    how: 'Working outside safety zones or with inadequate TM',
    controls: 'Wear hi-vis; work within coned safety zones sized per Chapter 8; stop work if TM inadequate; ensure clear and adequate signage/speed control.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA20_Injury_To_Members_Of_The_Public',
    title: 'RA20 Injury to members of the public',
    hazard: 'Public exposed to site hazards',
    who: 'Employees, 3rd parties',
    how: 'Uncontrolled pedestrian access to work area',
    controls: 'Exclude public from work area; maintain pedestrian segregation compliant with Chapter 8 at all times.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA20_Adverse_Weather',
    title: 'RA20 Adverse weather',
    hazard: 'Reduced visibility/exposure to cold/wet',
    who: 'Employees, 3rd parties',
    how: 'Fog, rain, cold affecting safety and visibility',
    controls: 'Wear appropriate PPE; assess visibility during fog; adjust or pause works if unsafe.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA20_Slips_Trips_Falls',
    title: 'RA20 Slips, trips and falls',
    hazard: 'Trips on debris/materials',
    who: 'Employees, 3rd parties',
    how: 'Poor housekeeping in highway work area',
    controls: 'Keep areas clear; store materials neatly; maintain good housekeeping.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
    {
    id: 'RA21_Struck_By_Plant',
    title: 'RA21 Struck by plant',
    hazard: 'Collision with site vehicles/plant',
    who: 'Employees, 3rd parties',
    how: 'Mixed vehicle/pedestrian routes; poor control of movements',
    controls: 'Segregate vehicle and pedestrian routes; provide footways and signage; drivers to report to site; control with designated banksman; banksman to use recognised signals and wear hi-vis.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA21_Reversing',
    title: 'RA21 Reversing',
    hazard: 'Reversing vehicle incidents',
    who: 'Employees, 3rd parties',
    how: 'Restricted visibility during reversing',
    controls: 'Minimise reversing; keep personnel clear; provide guide markings; always use a banksman; ensure beacons/alarms/cameras working.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA21_Vehicles_Overturning',
    title: 'RA21 Vehicles overturning',
    hazard: 'Loss of stability/rollover',
    who: 'Employees, 3rd parties',
    how: 'Soft/uneven ground; poor driving practices',
    controls: 'Keep traffic areas firm and level; drive with care; mark/barrier hazards such as excavations.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA21_Falling_Materials',
    title: 'RA21 Falling materials',
    hazard: 'Materials falling during loading/unloading',
    who: 'Employees, 3rd parties',
    how: 'Working near offload points; unsecured loads',
    controls: 'Designate offload zone; keep personnel clear; ensure no objects can fall from equipment onto those below.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA22 — Work on Contaminated Land  :contentReference[oaicite:7]{index=7}:contentReference[oaicite:8]{index=8}
  {
    id: 'RA22_Contact_With_Hazardous_Contaminants_In_Soils',
    title: 'RA22 Contact with hazardous contaminants in soils',
    hazard: 'Exposure to contaminants in ground',
    who: 'Employees, 3rd parties',
    how: 'Working on contaminated sites without adequate controls',
    controls: 'Obtain soil analysis; produce SSoW and COSHH assessments; provide decontamination arrangements; brief all personnel on controls.',
    action: 'COSHH Coordinator',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA22_Skin_Absorption',
    title: 'RA22 Skin absorption',
    hazard: 'Dermal uptake of contaminants',
    who: 'Employees, 3rd parties',
    how: 'Contact with contaminated soils/materials',
    controls: 'Provide correct PPE; launder clothing before reuse; nitrile gloves until contaminated clothing removed; no work clothing taken home; maintain hygiene; line work area to reduce spoil contact; provide first aid/welfare.',
    action: 'COSHH Coordinator',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA22_Skin_Penetration',
    title: 'RA22 Skin penetration',
    hazard: 'Puncture wounds contaminated by soils',
    who: 'Employees, 3rd parties',
    how: 'Sharps/debris in contaminated ground',
    controls: 'Clean and dress wounds immediately; if exposure or symptoms per COSHH occur, seek medical attention.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA22_Ingestion',
    title: 'RA22 Ingestion',
    hazard: 'Ingestion of contaminants',
    who: 'Employees, 3rd parties',
    how: 'Poor hygiene during/after work',
    controls: 'No eating/drinking/smoking before washing with antibacterial wash and fresh water; no contaminated clothing taken off site.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA22_Inhalation',
    title: 'RA22 Inhalation',
    hazard: 'Inhalation of contaminated dusts/vapours',
    who: 'Employees, 3rd parties',
    how: 'Dust generation during excavation/handling',
    controls: 'Provide suitable RPE to match contaminant/type; damp down to suppress dust.',
    action: 'COSHH Coordinator',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA22_Asphyxiation_Gassing',
    title: 'RA22 Asphyxiation/gassing',
    hazard: 'Atmospheric hazards in excavations/spaces',
    who: 'Employees, 3rd parties',
    how: 'Gas build-up; oxygen deficiency',
    controls: 'Use gas monitors; provide suitable RPE; restrict confined space entry to trained essential personnel; have escape equipment.',
    action: 'Confined Space Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA22_Fire_Explosion',
    title: 'RA22 Fire/explosion',
    hazard: 'Ignition of flammable contaminants',
    who: 'Employees, 3rd parties',
    how: 'Smoking/ignition sources near contamination',
    controls: 'Enforce no-smoking; exclude combustibles/reactives; eliminate ignition sources; provide firefighting facilities and emergency procedures.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA23 — Excavators used for lifting  :contentReference[oaicite:9]{index=9}
  {
    id: 'RA23_Dropping_Of_Load',
    title: 'RA23 Dropping of load',
    hazard: 'Dropped load during lifting by excavator',
    who: 'Employees, 3rd parties',
    how: 'Unsuitable machine/gear; exceeding SWL; poor slinging',
    controls: 'Use excavator designed/fitted for lifting with check valves & sling points; hold current test/exam certificates; never exceed SWL; display SWL table; competent slingers only; never slew over personnel/vehicles/huts.',
    action: 'Appointed Person (Lifting)',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA23_Boom_Striking_OH_Cables',
    title: 'RA23 Boom striking O/H cables',
    hazard: 'Contact with overhead power lines',
    who: 'Employees, 3rd parties',
    how: 'Lifting near live OHL',
    controls: 'Do not lift where OHL present without control; consult DNO; agree diversions/safe distances/precautions to GS6.',
    action: 'Permit-to-Work Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA23_Persons_Struck_By_Boom',
    title: 'RA23 Persons struck by boom',
    hazard: 'Impact with excavator parts',
    who: 'Employees, 3rd parties',
    how: 'Working within operating radius; poor exclusion',
    controls: 'Exclude persons from operating radius; use banksman for all lifting; competent operators; wear head protection and hi-vis.',
    action: 'Lift Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA23_Overturning',
    title: 'RA23 Overturning',
    hazard: 'Loss of stability/rollover while lifting',
    who: 'Employees, 3rd parties',
    how: 'Exceeding capacity; poor ground; wrong boom orientation',
    controls: 'Do not exceed SWL; operate on firm/level base; lift with boom parallel to tracks/wheels; competent supervision for stability.',
    action: 'Lift Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA24 — Work in live sewers  :contentReference[oaicite:10]{index=10}
  {
    id: 'RA24_Disease',
    title: 'RA24 Disease',
    hazard: 'Biological exposure (e.g., Leptospirosis)',
    who: 'Employees, 3rd parties',
    how: 'Contact with sewage/contaminated water',
    controls: 'Brief on Leptospirosis; seek GP advice if ill; provide high-standard welfare; suitable PPE; cover cuts; record injuries; clean contaminated equipment on site; do not take contaminated clothing home.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA24_Toxic_Fumes',
    title: 'RA24 Toxic fumes',
    hazard: 'Harmful gases in sewers',
    who: 'Employees, 3rd parties',
    how: 'Disturbance of sludge releasing gases',
    controls: 'Use gas detector before/during works; ventilate; act on readings.',
    action: 'Confined Space Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA24_Confined_Spaces',
    title: 'RA24 Confined spaces',
    hazard: 'Confined space entry risks',
    who: 'Employees, 3rd parties',
    how: 'Entry into sewers',
    controls: 'Only trained/competent operatives; read/understand confined space RA; permit & rescue plan in place.',
    action: 'Confined Space Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA25 — Work near water  :contentReference[oaicite:11]{index=11}
  {
    id: 'RA25_Drowning',
    title: 'RA25 Drowning',
    hazard: 'Fall into water leading to drowning',
    who: 'Employees, 3rd parties',
    how: 'Working near unprotected water edge; tides/weather',
    controls: 'Erect/maintain physical barriers; check tides and weather; provide lifebuoy/line and brief operatives; CPR-trained first aider present; establish emergency procedures and reliable comms.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA25_Disease',
    title: 'RA25 Disease',
    hazard: 'Waterborne disease (e.g., Leptospirosis)',
    who: 'Employees, 3rd parties',
    how: 'Immersion/contact with untreated water',
    controls: 'Maintain strict hygiene; provide leptospirosis info; monitor for flu-like symptoms; escort to hospital if symptomatic and inform staff of risk.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA25_Plant_Entering_Water',
    title: 'RA25 Plant entering water',
    hazard: 'Plant driven over bank/edge',
    who: 'Employees, 3rd parties',
    how: 'Poor edge definition; inadequate barriers',
    controls: 'Erect adequate barriers; highlight edge of bank; prevent plant approaching edge.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA25_Inadequate_Lighting',
    title: 'RA25 Inadequate lighting',
    hazard: 'Poor visibility near water',
    who: 'Employees, 3rd parties',
    how: 'Work during darkness/poor weather',
    controls: 'Provide sufficient lighting to illuminate water edge and for search; use during poor light/visibility.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
    {
    id: 'RA26_Respirable_Crystalline_Silica',
    title: 'RA26 Respirable crystalline silica (RCS)',
    hazard: 'Inhalation of RCS leading to silicosis/COPD',
    who: 'Employees, 3rd parties',
    how: 'Cutting/grinding/handling of concrete, masonry and stone generating fine dust',
    controls: 'Plan to eliminate/reduce dust; wet-cut or use on-tool extraction; local exhaust ventilation where feasible; provide/mandate FFP3/P3 RPE; face-fit testing and clean-shaven policy; monitor vs WEL; housekeeping to prevent re-suspension.',
    action: 'COSHH Coordinator',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA26_Nuisance_Dust_Visibility',
    title: 'RA26 Nuisance dust & visibility',
    hazard: 'Reduced visibility and irritation from general dust',
    who: 'Employees, 3rd parties',
    how: 'Dry sweeping, trafficking of dusty areas, wind-blown fines',
    controls: 'Damp down; avoid dry sweeping; vacuum/LEV preferred; wheel washing and sheeting; schedule dusty tasks away from public; barrier and sign.',
    action: 'Supervisor',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'RA26_Eye_Skin_Irritation',
    title: 'RA26 Eye/skin irritation',
    hazard: 'Irritation from alkaline cement dust and fines',
    who: 'Employees, 3rd parties',
    how: 'Direct contact or airborne dust into eyes/onto skin',
    controls: 'Safety eyewear/face shields; gloves appropriate to cement; wash facilities; no rubbing of eyes; prompt decontamination.',
    action: 'Supervisor',
    init: 'medium',
    resid: 'low'
  },

  // RA27 — Vermin  :contentReference[oaicite:6]{index=6}
  {
    id: 'RA27_Disease_From_Vermin',
    title: 'RA27 Disease from vermin',
    hazard: 'Leptospirosis/Weil’s and other zoonoses',
    who: 'Employees, 3rd parties',
    how: 'Exposure to urine/faeces or bites from rats/vermin on site',
    controls: 'Engage licensed pest control; restrict food waste; wear gloves; cover cuts; strict hygiene before eating/drinking/smoking; brief symptoms and reporting.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA27_Bites_Stings_Allergy',
    title: 'RA27 Bites, stings & allergy',
    hazard: 'Allergic reaction or infection from bites/stings',
    who: 'Employees, 3rd parties',
    how: 'Contact with nests or disturbed vermin/insects',
    controls: 'Avoid known nests; barrier/sign; first aid on site; seek medical help for reactions; consider tetanus up to date.',
    action: 'Supervisor',
    init: 'medium',
    resid: 'low'
  },

  // RA28 — Use of ride-on rollers  :contentReference[oaicite:7]{index=7}
  {
    id: 'RA28_Overturning_Roller',
    title: 'RA28 Overturning (roller)',
    hazard: 'Loss of stability/rollover of ride-on roller',
    who: 'Employees, 3rd parties',
    how: 'Crossing excessive slopes, soft edges, operating near excavations',
    controls: 'Use ROPS and wear seat belt; operate up/down slopes (avoid traversing); assess ground/support; keep away from edges/voids; banksman where vision restricted.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA28_Struck_By_Roller',
    title: 'RA28 Struck by roller',
    hazard: 'Pedestrian struck by moving roller',
    who: 'Employees, 3rd parties',
    how: 'Poor segregation and reversing in confined areas',
    controls: 'Segregate with barriers; set exclusion zones at ends of runs; reversing alarm/beacon functional; use banksman where required.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA28_Noise_WBV',
    title: 'RA28 Noise & WBV (roller)',
    hazard: 'Hearing damage and whole-body vibration',
    who: 'Employees, 3rd parties',
    how: 'Prolonged roller operation on rough surfaces',
    controls: 'Hearing protection; plan durations/rotation; select appropriate machine; maintain surfaces to reduce vibration.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA29 — Wheeled loader excavators  :contentReference[oaicite:8]{index=8}
  {
    id: 'RA29_Struck_By_Plant_Loader',
    title: 'RA29 Struck by plant (loader)',
    hazard: 'Collision with wheeled loader/excavator',
    who: 'Employees, 3rd parties',
    how: 'Blind spots, tight workfaces, poor segregation',
    controls: 'Appoint banksman; define plant/pedestrian segregation; hi-vis mandatory; working beacons/alarms; competent/authorised operators only.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA29_Falling_Material_From_Bucket',
    title: 'RA29 Falling material from bucket (loader)',
    hazard: 'Material or attachment falling',
    who: 'Employees, 3rd parties',
    how: 'Overfilled bucket; people under load; unsecured attachments',
    controls: 'Exclude persons from radius; do not pass loads over people; verify quick-hitch/attachments; routine pre-use and weekly checks.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA29_Overturning_Loader',
    title: 'RA29 Overturning (loader)',
    hazard: 'Machine rollover/loss of stability',
    who: 'Employees, 3rd parties',
    how: 'Operating on steep/uneven ground; edges/voids',
    controls: 'Assess ground and gradients; maintain safe margins from edges; use stop blocks; avoid sudden turns on slopes.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA29_Striking_Overhead_Lines',
    title: 'RA29 Striking overhead lines (loader)',
    hazard: 'Contact with OHL with loader/attachments',
    who: 'Employees, 3rd parties',
    how: 'Working beneath/near live conductors',
    controls: 'Avoid where practicable; GS6 goalposts; agree safe distances/diversions with DNO; height restrictors; assume lines live.',
    action: 'Permit-to-Work Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA30 — Open-cab dumpers  :contentReference[oaicite:9]{index=9}
  {
    id: 'RA30_Overturning_Dumper',
    title: 'RA30 Overturning (dumper)',
    hazard: 'Dumper rollover/loss of stability',
    who: 'Employees, 3rd parties',
    how: 'Side slopes, soft verges, tipping near edges',
    controls: 'ROPS/seat belt used at all times; keep routes level/compacted; tip on level ground; stop blocks near edges; avoid sharp turns on slopes.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA30_Struck_By_Dumper',
    title: 'RA30 Struck by dumper',
    hazard: 'Pedestrian struck by dumper (especially during reversing)',
    who: 'Employees, 3rd parties',
    how: 'Restricted visibility; congested access',
    controls: 'One-way systems; banksman in tight areas; enforce speed limit; keep walkways segregated and signed.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA30_Loading_Tipping_Risks',
    title: 'RA30 Loading/tipping risks (dumper)',
    hazard: 'Injury from loading/tipping operations',
    who: 'Employees, 3rd parties',
    how: 'Operator remaining seated under excavator bucket; unstable ground at tip',
    controls: 'No person seated during loading; exclusion around loading zone; tip only on level, inspected ground; clear communications with excavator operator.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA31_Overturning_Mixer',
    title: 'RA31 Overturning (mixer)',
    hazard: 'Mixer overturning',
    who: 'Employees, 3rd parties',
    how: 'Mixer positioned on poor ground or moved over unsuitable routes',
    controls: 'Position on level, well consolidated ground away from traffic; plan routes to avoid excavations/poor terrain; secure large mixers to towing plant with correct tow bar/locators; move at low speed.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA31_Entrapment_Mixer',
    title: 'RA31 Entrapment (mixer)',
    hazard: 'Entrapment in rotating parts',
    who: 'Employees, 3rd parties',
    how: 'Hands/head/feet inside drum or under engine cover; cleaning while rotating',
    controls: 'No hands/head/feet in rotating drum/engine area; close guards immediately after start/stop; never work on mixer while rotating; clean with plenty of water/bricks; never insert held items into rotating drum; use banksman for reversing.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA31_Concrete_Splashes',
    title: 'RA31 Concrete splashes (mixer)',
    hazard: 'Cement/concrete splashes to eyes/skin',
    who: 'Employees, 3rd parties',
    how: 'Standing too close to discharge; inadequate PPE/welfare',
    controls: 'Wear gloves/overalls/goggles; stand clear during discharge; provide washing/drying facilities; follow COSHH assessment; eyewash available.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA32 — Concrete placing (skips)  :contentReference[oaicite:6]{index=6}
  {
    id: 'RA32_Falling_Moving_Objects_Skip',
    title: 'RA32 Falling/moving objects (skip)',
    hazard: 'Operatives struck by falling/moving objects',
    who: 'Employees, 3rd parties',
    how: 'Defective lifting gear/skip; poor positioning of crane; inadequate inspection',
    controls: 'Daily “competent person” inspections of skips/lifting gear/crane; remove defective kit; use only certificated gear; position crane on level, consolidated ground with good visibility.',
    action: 'Lift Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA32_Overspill_Skip',
    title: 'RA32 Overspill (skip)',
    hazard: 'Operatives struck by overspill',
    who: 'Employees, 3rd parties',
    how: 'Overfilled skip or faulty discharge mechanism',
    controls: 'Lift away from people/buildings/public; inspect discharge gear; do not overfill; remove concrete residue after each continuous use.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA32_Struck_By_Skip',
    title: 'RA32 Struck by skip',
    hazard: 'Hit by suspended/landing skip',
    who: 'Employees, 3rd parties',
    how: 'Poorly controlled lifting/egress routes',
    controls: 'Trained banksman to direct all lifts; provide and maintain safe egress routes; hard hats & hi-vis for all involved in skip operations.',
    action: 'Lift Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA33 — Concrete finishing  :contentReference[oaicite:7]{index=7}
  {
    id: 'RA33_Concrete_Burns_Finishing',
    title: 'RA33 Concrete burns (finishing)',
    hazard: 'Chemical burns from wet concrete',
    who: 'Employees, 3rd parties',
    how: 'Direct skin contact/kneeling on fresh concrete; no hygiene',
    controls: 'Wear gloves/impervious footwear; do not kneel/sit on wet concrete; provide wash/eyewash; brief COSHH; launder contaminated clothing before reuse; rinse skin/eyes immediately after contact.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA33_Lifting_Over_Finishers',
    title: 'RA33 Lifting over finishers (finishing)',
    hazard: 'Operatives struck by lifting operations',
    who: 'Employees, 3rd parties',
    how: 'Slewing over finishing area without control',
    controls: 'No lifting over finishers; use banksman when plant slews near finishing works/formwork.',
    action: 'Lift Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA33_Falls_From_Height_Finishing',
    title: 'RA33 Falls from height (finishing)',
    hazard: 'Falls at slab edges/formwork',
    who: 'Employees, 3rd parties',
    how: 'Insufficient operatives; removal of temporary elements; inadequate edge protection',
    controls: 'Provide adequate labour especially in high winds; finishers must not remove any temporary structural elements; provide edge protection per legislation.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA34 — Use of Road Planers  :contentReference[oaicite:8]{index=8}
  {
    id: 'RA34_Noise_Dust_Planer',
    title: 'RA34 Noise & dust (planer)',
    hazard: 'Hearing damage and dust inhalation',
    who: 'Employees, 3rd parties',
    how: 'Planing operations generating noise and dust',
    controls: 'Wear ear defenders; safety glasses & dust masks where required; damp the drum to control dust.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA34_Struck_By_Vehicles_Planer',
    title: 'RA34 Struck by vehicles (planer)',
    hazard: 'Impact with vehicles',
    who: 'Employees, 3rd parties',
    how: 'People within slewing/track area or traffic interface',
    controls: 'Hi-vis clothing; rotating beacons/reverse alarms; set exclusion zones; check no-one is under/near conveyor or running gear before moving.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA34_Entanglement_Planer',
    title: 'RA34 Entanglement (planer)',
    hazard: 'Entanglement with rotating/moving parts',
    who: 'Employees, 3rd parties',
    how: 'Loose clothing/unguarded parts; working near milling drum',
    controls: 'No loose clothing; guards in place; do not place limbs near drum; no modifying/removing guards without written permission; follow SSoW for pick replacement.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA34_Traffic_Accidents_Planer',
    title: 'RA34 Traffic accidents (planer)',
    hazard: 'Collisions with public traffic',
    who: 'Employees, 3rd parties',
    how: 'Inadequate TM on highway',
    controls: 'Maintain highway exclusion zone to Chapter 8/NRSWA; controlled access/egress; use banksman; stop work if TM inadequate; contact PC/Head Office.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA34_Overturning_Planer',
    title: 'RA34 Overturning (planer)',
    hazard: 'Planer rollover/loss of stability',
    who: 'Employees, 3rd parties',
    how: 'Back-tracking on planed areas; severe camber; ground hazards',
    controls: 'Keep speed low on planed surfaces; be aware of stopping distance/elevator position; keep area free of hazards; drive to capability (350 planers higher risk).',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA34_Fire_Explosion_Planer',
    title: 'RA34 Fire/explosion (planer)',
    hazard: 'Ignition from services/flammables',
    who: 'Employees, 3rd parties',
    how: 'Unidentified underground services or low OHL',
    controls: 'Identify services; stop work near low OHL and contact PC.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA34_Falling_Objects_Planer',
    title: 'RA34 Falling objects (planer)',
    hazard: 'Falling material from elevator/loading area',
    who: 'Employees, 3rd parties',
    how: 'Personnel within conveyor/truck loading zone',
    controls: 'Keep elevator and truck loading area free from personnel and the public.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA34_Slips_Trips_Planer',
    title: 'RA34 Slips/trips (planer)',
    hazard: 'Trips on planed surfaces',
    who: 'Employees, 3rd parties',
    how: 'Uneven/stepped finished surface',
    controls: 'Ensure operatives are aware of planed areas.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA34_Vibration_Planer',
    title: 'RA34 Vibration (planer)',
    hazard: 'Hand–arm vibration exposure',
    who: 'Employees, 3rd parties',
    how: 'Use of planing tools with worn picks/excess depth',
    controls: 'Use correct picks/depths; maintain tools regularly; keep hands warm; stop and report if vibration excessive.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA35 — Use of pavers  :contentReference[oaicite:9]{index=9}
  {
    id: 'RA35_Plant_Collision_Paver',
    title: 'RA35 Plant collision (paver)',
    hazard: 'Collision with operatives/vehicles',
    who: 'Employees, 3rd parties',
    how: 'Working near paver during loading/unloading; poor awareness',
    controls: 'Competent operators only; operatives stand clear at all times; wear hi-vis; banksman in heavily trafficked/pedestrian areas and when crossing highways; always board from rear using handholds; operator never leaves controls while moving.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA35_Trapped_Between_Vehicle_And_Paver',
    title: 'RA35 Trapped between delivery vehicle/paver',
    hazard: 'Entrapment between vehicles',
    who: 'Employees, 3rd parties',
    how: 'Uncontrolled reversing and access to hopper area',
    controls: 'All reversing with banksman; no access in front of hopper until all movements stop.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA35_Overturning_Paver',
    title: 'RA35 Overturning (paver)',
    hazard: 'Paver overturn/instability',
    who: 'Employees, 3rd parties',
    how: 'Working near ditches/soft verges; gradients',
    controls: 'Supervisors to verify integrity of area; keep plant/vehicles clear of dykes/ditches (esp. after rain); select correct gear before gradients.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA35_Entrapment_Moving_Parts_Paver',
    title: 'RA35 Entrapment in moving parts (paver)',
    hazard: 'Entrapment during clearing/maintenance',
    who: 'Employees, 3rd parties',
    how: 'Working on plant while running; guards removed',
    controls: 'Shut down before clearing/maintenance; only competent persons to maintain; follow approved procedures.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA35_Hot_Parts_Substances_Paver',
    title: 'RA35 Hot parts/substances (paver)',
    hazard: 'Burns from hot plant/products',
    who: 'Employees, 3rd parties',
    how: 'Contact with burner/exhaust/hot bitumen',
    controls: 'Isolate hot parts; mark with signage; allow to cool before maintenance/repair; never leave unattended with burners operating.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA35_Tipper_Rear_Door',
    title: 'RA35 Contact with tipper rear door',
    hazard: 'Impact from rear door',
    who: 'Employees, 3rd parties',
    how: 'Unsecured tipper door during approach',
    controls: 'Secure door and attach safety chain before approaching.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
   {
    id: 'RA36_Overturning_Plant_Load_Unload',
    title: 'RA36 Overturning (plant loading/unloading)',
    hazard: 'Plant overturning during loading/unloading',
    who: 'Employees, 3rd parties',
    how: 'Uneven/soft ground; uncontrolled manoeuvres on ramps or low loader',
    controls: 'Clear non-essential personnel; level, well-consolidated approaches; competent banksman; trained operators only; controlled movements on/off trailer.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA36_Overturning_Entering_Leaving_Site',
    title: 'RA36 Overturning (entering/leaving site)',
    hazard: 'Vehicle overturning on site approach',
    who: 'Employees, 3rd parties',
    how: 'Poor access routes; soft verges; camber/gradients',
    controls: 'Driver reports to supervisor; use firm, level, well-consolidated routes; adjust route if conditions deteriorate.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA36_Inadequately_Secured_Load',
    title: 'RA36 Inadequately secured load',
    hazard: 'Load shift/loss in transit',
    who: 'Employees, 3rd parties',
    how: 'Uneven distribution; damaged or insufficient chains',
    controls: 'Evenly distribute load; secure with tested chains; remove damaged chains; secure all loose items; clean mud/debris before leaving site.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA36_Vehicle_Defects',
    title: 'RA36 Vehicle defects',
    hazard: 'Mechanical failure leading to incident',
    who: 'Employees, 3rd parties',
    how: 'Lack of checks; defects not reported',
    controls: 'Pre-journey checks each time; record and report defects; remove unserviceable vehicles/trailers from use.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA36_Driver_Fatigue_Illness',
    title: 'RA36 Driver fatigue/illness',
    hazard: 'Loss of control due to fatigue or illness',
    who: 'Employees, 3rd parties',
    how: 'Exceeding hours; continuing when unwell',
    controls: 'Do not exceed recommended driving hours; stop and report if fatigued/distressed or after any incident.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA38 — Use of Dozer  :contentReference[oaicite:5]{index=5}
  {
    id: 'RA38_Struck_By_Plant_Dozer',
    title: 'RA38 Struck by plant (dozer)',
    hazard: 'Collision with moving dozer',
    who: 'Employees, 3rd parties',
    how: 'Poor segregation; blind spots during manoeuvres',
    controls: 'Exclude workers with barriers/exclusion zones; licensed operators only; fit beacons and white-noise alarms; mandatory hi-vis.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA38_Plant_Overturning_Dozer',
    title: 'RA38 Overturning (dozer)',
    hazard: 'Dozer rollover/loss of stability',
    who: 'Employees, 3rd parties',
    how: 'Working across gradients; undercutting faces; unstable spoil',
    controls: 'Tracks at 90° to workface; avoid overhangs; inspect excavations/spoil especially after adverse weather; control gradients.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA38_Dozer_Into_Excavation',
    title: 'RA38 Plant entering excavation (dozer)',
    hazard: 'Dozer over-running into void',
    who: 'Employees, 3rd parties',
    how: 'No stop blocks; poor edge visibility',
    controls: 'Install stop blocks/visible barriers; fence edges; keep excavation limits highly visible.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA38_Falls_From_Dozer',
    title: 'RA38 Falls from dozer',
    hazard: 'Fall during access/egress',
    who: 'Employees, 3rd parties',
    how: 'Mud/debris on steps; uneven ground at cab',
    controls: 'Keep steps/handholds clean; confirm ground condition before stepping down.',
    action: 'Supervisor',
    init: 'medium',
    resid: 'low'
  },

  // RA39 — Operation of Tipper  :contentReference[oaicite:6]{index=6}
  {
    id: 'RA39_Contact_With_Personnel_Tipper',
    title: 'RA39 Contact with site personnel (tipper)',
    hazard: 'People struck by tipper (esp. reversing)',
    who: 'Employees, 3rd parties',
    how: 'Restricted visibility; uncontrolled reversing; pedestrians in route',
    controls: 'Minimise reversing; functional alarms/cameras/lights; banksman with agreed signals; segregate pedestrians; obey site routes/rules; never mount/dismount moving vehicle; keep clear front/rear when tipping.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA39_Tipper_Entering_Excavation',
    title: 'RA39 Tipper entering excavation',
    hazard: 'Vehicle over-running into excavation',
    who: 'Employees, 3rd parties',
    how: 'No stop blocks or fencing',
    controls: 'Provide stop blocks; fence and mark excavation edges; maintain visibility.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA39_Trapped_Between_Body_Chassis',
    title: 'RA39 Trapped between body and chassis (tipper)',
    hazard: 'Crush injury during tipping/maintenance',
    who: 'Employees, 3rd parties',
    how: 'Entering pinch points while body raised',
    controls: 'Never enter space between body and chassis in operation; follow lock-out/isolation for maintenance.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA39_Maintenance_Failure_Tipping',
    title: 'RA39 Maintenance failure during tipping',
    hazard: 'Mechanical failure causing incident',
    who: 'Employees, 3rd parties',
    how: 'Poorly maintained plant; lack of checks',
    controls: 'Maintain per manufacturer; daily operator checks recorded; remove unsafe plant from use.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA39_Falling_Materials_Tipper',
    title: 'RA39 Falling materials (tipper)',
    hazard: 'Impact from tailgate/load during tip',
    who: 'Employees, 3rd parties',
    how: 'Unreleased/loose tailgate; overfilled or uneven load',
    controls: 'Spread/load evenly and sheet; release/lock tailgate correctly; confirm body fully empty after tipping.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA39_Load_Sticking_Tipper',
    title: 'RA39 Load sticking (tipper)',
    hazard: 'Instability/secondary tip due to stuck load',
    who: 'Employees, 3rd parties',
    how: 'Driving to free load; repeated tipping attempts',
    controls: 'Do not drive to free stuck load; lower body and free safely before re-raising; ensure empty before moving off.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA39_Striking_Overhead_Lines_Tipper',
    title: 'RA39 Striking overhead lines (tipper)',
    hazard: 'Contact with overhead power lines',
    who: 'Employees, 3rd parties',
    how: 'Tipping beneath/near live OHL',
    controls: 'Erect solid goalposts/visible barriers at GS6 distances; do not tip under OHL unless a specific RAMS is in place.',
    action: 'Permit-to-Work Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA41 — Vibration  :contentReference[oaicite:7]{index=7}
  {
    id: 'RA41_Duration_Of_Exposure',
    title: 'RA41 Duration of exposure (vibration)',
    hazard: 'HAVS from excessive daily trigger times',
    who: 'Employees, 3rd parties',
    how: 'Long continuous use of vibrating tools/machinery',
    controls: 'Limit durations; schedule breaks; rotate tasks; maintain steady workload; follow exposure guidance.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA41_Incorrect_Tool_Usage',
    title: 'RA41 Incorrect tool usage (vibration)',
    hazard: 'Elevated vibration due to wrong tool/condition',
    who: 'Employees, 3rd parties',
    how: 'Using blunt/unsuitable tools; poor maintenance',
    controls: 'Select correct tool; maintain/repair promptly; report issues to supervisor; replace blunt cutters; keep equipment in good order.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA41_Cold_Weather_Effects',
    title: 'RA41 Cold weather effects (vibration)',
    hazard: 'Worsening HAVS symptoms in cold',
    who: 'Employees, 3rd parties',
    how: 'Reduced blood flow while using vibrating tools',
    controls: 'Keep hands warm; wear gloves/appropriate clothing; brief smokers on increased risk; follow site HAVS guidance.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA42_Falls_From_Open_Edges',
    title: 'RA42 Falls from open edges',
    hazard: 'Falls from height at unprotected edges/openings',
    who: 'Employees, 3rd parties',
    how: 'Working near slab edges, voids or leading edges without suitable edge protection',
    controls: 'Provide compliant edge protection/guardrails; install toe boards and covers for openings; inspect barriers each shift and after events; prevent removal without authorisation.',
    action: 'Temporary Works Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA42_Falls_From_Ladders',
    title: 'RA42 Falls from ladders',
    hazard: 'Falls while ascending/descending ladders',
    who: 'Employees, 3rd parties',
    how: 'Incorrect ladder selection/angle; unsecured ladders; overreaching',
    controls: 'Use industrial grade ladders; 1:4 angle; extend ≥1 m above landing; tie by stiles; maintain 3 points of contact; ladders for access/short duration only; foot up to 5 m.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA42_Ladder_Slip_Roll',
    title: 'RA42 Ladder slip/roll',
    hazard: 'Ladder slipping or rolling during use',
    who: 'Employees, 3rd parties',
    how: 'Smooth/contaminated surfaces; castors/brakes not applied on platform ladders',
    controls: 'Firm, level, clean base; anti-slip feet; lock platform ladder brakes; do not move ladders while occupied; avoid side loading/overreach.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA42_Falling_Objects_From_Height',
    title: 'RA42 Falling objects from height',
    hazard: 'People struck by falling tools/materials',
    who: 'Employees, 3rd parties',
    how: 'Unsecured tools/materials at height; no exclusion below',
    controls: 'Tool lanyards; toe boards; debris nets/chutes; set and maintain exclusion zones; wear head protection.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA42_Fragile_Surfaces',
    title: 'RA42 Fragile surfaces (roofs)',
    hazard: 'Falls through fragile roof materials',
    who: 'Employees, 3rd parties',
    how: 'Access across rooflights/corrugated sheets without protection',
    controls: 'Avoid access where possible; use crawl boards and fall prevention (MEWP/guarded platforms); clearly mark fragile zones; rescue plan.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA42_MEWP_Scaffold_Risks',
    title: 'RA42 MEWP/scaffold risks',
    hazard: 'Entrapment/overturning/collapse using access equipment',
    who: 'Employees, 3rd parties',
    how: 'Incorrect set-up; overload; soft ground; uninspected towers',
    controls: 'Competent erection/inspection; use outriggers/levelling; observe SWL; daily pre-use and statutory inspections; exclude public/pedestrians; emergency lowering procedure.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA42_Adverse_Weather_WAH',
    title: 'RA42 Adverse weather (WAH)',
    hazard: 'Falls/exposure due to wind/rain/ice',
    who: 'Employees, 3rd parties',
    how: 'Slippery surfaces and wind loading at height',
    controls: 'Assess conditions; postpone in high winds/ice; keep platforms clear and non-slip; suitable footwear and clothing.',
    action: 'Supervisor',
    init: 'medium',
    resid: 'low'
  },

  // RA43 — Cutting concrete/tarmac (road cutting)
  {
    id: 'RA43_Traffic_Accidents_Road_Cutting',
    title: 'RA43 Traffic accidents (road cutting)',
    hazard: 'Collision with public or site traffic',
    who: 'Employees, 3rd parties',
    how: 'Road cutting within live carriageway without adequate traffic management',
    controls: 'Chapter 8/NRSWA compliant TM; cones/signs/barriers; trained TM operatives; safe access/egress; banksman; stop work if TM inadequate.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA43_Dust_Fumes_Road_Cutting',
    title: 'RA43 Dust/fumes (road cutting)',
    hazard: 'Respirable dust and exhaust exposure (incl. RCS when cutting concrete)',
    who: 'Employees, 3rd parties',
    how: 'Dry cutting tarmac/concrete; engine exhaust near workface',
    controls: 'Wet cutting/on-tool extraction; FFP3/P3 RPE with face-fit; position to avoid exhaust; monitor vs WEL; screen to protect public; housekeeping to prevent re-suspension.',
    action: 'COSHH Coordinator',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA43_Flying_Particles_Road_Cutting',
    title: 'RA43 Flying particles (road cutting)',
    hazard: 'Eye/face injury from projectiles',
    who: 'Employees, 3rd parties',
    how: 'Cutting debris ejected from blade',
    controls: 'Impact eye/face protection; exclusion zone/screens; correct blade selection and condition; correct cutting technique.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA43_Cuts_Kickback_Road_Saw',
    title: 'RA43 Cuts/kickback (road saw/Stihl)',
    hazard: 'Laceration from blade or kickback',
    who: 'Employees, 3rd parties',
    how: 'Incorrect grip/body position; poor maintenance/guarding',
    controls: 'Two-handed grip; correct stance; guards in place; trained/competent operators; pre-use checks; no body alignment with blade.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA43_Fire_Refuelling_Road_Cutting',
    title: 'RA43 Fire during refuelling (road cutting)',
    hazard: 'Ignition of petrol/flammables',
    who: 'Employees, 3rd parties',
    how: 'Hot refuelling; spills; nearby ignition sources',
    controls: 'Refuel in designated area with drip tray; cool before refuelling; control ignition sources; spill kit; replace caps immediately; store fuel correctly.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA43_Public_Exposure_Road_Cutting',
    title: 'RA43 Injury to members of the public (road cutting)',
    hazard: 'Public exposed to cutting operations',
    who: 'Employees, 3rd parties',
    how: 'Uncontrolled pedestrian access to work area',
    controls: 'Barrier and sign work area; maintain pedestrian routes; marshal crossings; stop work if segregation is compromised.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA43_Environmental_Runoff_Slurry',
    title: 'RA43 Environmental runoff (slurry)',
    hazard: 'Pollution from slurry/water run-off',
    who: 'Employees, 3rd parties',
    how: 'Wet cutting water and fines entering drains/land',
    controls: 'Capture/contain slurry; block or protect drains; dispose as per local requirements/COSHH; prevent spread beyond site.',
    action: 'Environmental Lead',
    init: 'medium',
    resid: 'low'
  },

  // RA44 — Use of Rammax (remote trench compactor)
  {
    id: 'RA44_Overturning_Rammax',
    title: 'RA44 Overturning (rammax)',
    hazard: 'Remote compactor overturning in/near trench',
    who: 'Employees, 3rd parties',
    how: 'Operating on steep/undercut faces; soft edges; excessive lift thickness',
    controls: 'Assess trench width/depth and lift thickness; operate from safe position; keep away from edges/voids; retrieval plan; stop blocks and barriers as required.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA44_Runover_Entrapment_Rammax',
    title: 'RA44 Run-over/entrapment (rammax)',
    hazard: 'Operative struck or trapped by unit',
    who: 'Employees, 3rd parties',
    how: 'Poor exclusion; entering trench during operation',
    controls: 'Exclusion zone; never enter trench while operating; remote operator to maintain line-of-sight; emergency stop available and tested.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA44_Loss_Of_Control_Signal',
    title: 'RA44 Loss of control/signal (rammax)',
    hazard: 'Uncontrolled movement due to signal loss/fault',
    who: 'Employees, 3rd parties',
    how: 'Radio failure/interference; control unit fault',
    controls: 'Pre-use function checks; test E-stop; maintain safe standoff; keep receiver/controls within spec range; stop work on malfunction.',
    action: 'Supervisor',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'RA44_Vibration_Noise_Rammax',
    title: 'RA44 Vibration & noise (rammax)',
    hazard: 'Noise exposure and ground vibration effects',
    who: 'Employees, 3rd parties',
    how: 'Prolonged operation near personnel/structures/services',
    controls: 'Hearing protection; maintain distances to sensitive structures/services; monitor for effects; rotate tasks as needed.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA44_Fuel_Fire_Rammax',
    title: 'RA44 Fuel/fire (rammax)',
    hazard: 'Ignition during refuelling/storage',
    who: 'Employees, 3rd parties',
    how: 'Spills; hot surfaces; poor storage',
    controls: 'Refuel in designated area with spill control; cool before refuelling; store fuel correctly; keep extinguishers to hand; clean spills.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },

  // RA45 — Contact with chemicals (general COSHH)
  {
    id: 'RA45_Skin_Eye_Contact',
    title: 'RA45 Skin/eye contact (chemicals)',
    hazard: 'Chemical burns/dermatitis/eye injury',
    who: 'Employees, 3rd parties',
    how: 'Handling, decanting or splash to unprotected skin/eyes',
    controls: 'COSHH assessment/SDS available; task-specific PPE (gloves/eye/face); eyewash; hygiene and welfare in place; launder or dispose of contaminated clothing.',
    action: 'COSHH Coordinator',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA45_Inhalation_Exposure',
    title: 'RA45 Inhalation exposure (chemicals)',
    hazard: 'Respiratory irritation/toxicity',
    who: 'Employees, 3rd parties',
    how: 'Vapours/mists/dusts during use/mixing',
    controls: 'Ventilation/LEV; correct RPE to APF required; face-fit and clean-shaven policy; monitor vs WEL; minimise decanting/spray where possible.',
    action: 'COSHH Coordinator',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA45_Ingestion_Poor_Hygiene',
    title: 'RA45 Ingestion (poor hygiene)',
    hazard: 'Illness from ingestion/hand-to-mouth transfer',
    who: 'Employees, 3rd parties',
    how: 'Eating/drinking/smoking with contaminated hands or PPE',
    controls: 'No eating/drinking/smoking in work area; wash hands with appropriate cleanser before breaks; dedicated clean areas for welfare.',
    action: 'Supervisor',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'RA45_Fire_Explosion_Chemicals',
    title: 'RA45 Fire/explosion (chemicals)',
    hazard: 'Ignition of flammable substances',
    who: 'Employees, 3rd parties',
    how: 'Static/sparks/naked flames near flammables',
    controls: 'Eliminate ignition sources; bond/ground during decanting; use correct extinguishers; hot-work permits where required; store away from heat.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA45_Incompatible_Storage',
    title: 'RA45 Incompatible storage',
    hazard: 'Violent reactions from incompatibles',
    who: 'Employees, 3rd parties',
    how: 'Acids stored with alkalis/oxidisers; poor segregation',
    controls: 'Store per SDS compatibility; dedicated COSHH store; label/segregate; secure from unauthorised access; secondary containment.',
    action: 'COSHH Coordinator',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'RA45_Spill_Environmental_Contamination',
    title: 'RA45 Spill/environmental contamination',
    hazard: 'Pollution to land/water/drains',
    who: 'Employees, 3rd parties',
    how: 'Leaks/spills during storage, use or transport',
    controls: 'Spill kits and trained users; bunds/plant nappies; protect/cover drains; waste disposal via licensed carrier with transfer notes.',
    action: 'Environmental Lead',
    init: 'high',
    resid: 'low'
  },
  
  {
    id: 'cuts-metal',
    title: 'Cuts from bare edges of metal',
    hazard: 'Cuts from bare edges of metal.',
    who: 'MVL Employees',
    how: 'Carrying or install of sheet metal/spiral wound ductwork',
    controls: 'Cut 5 resistance gloves are mandatory and to be worn always; these will also protect from cuts when handling ductwork. Long sleeves/gauntlets to be worn whilst carrying or installing ductwork with ‘bare edges’.',
    action: 'Supervisor / Luke Watson',
    init: 'low',
    resid: 'low'
  },
   {
    id: "GENERAL_Slips_On_Wet_Ground",
    title: "Slips on wet ground",
    hazard: "Slipping on wet surfaces",
    who: "Employees, 3rd parties",
    how: "Rainwater, overspill or hose/plant washdown leaving floors/ground wet",
    controls: "Good drainage; regular sweeping/drying; grit mats in welfare areas; restrict traffic until dry; footwear with slip-resistant soles.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Slips_On_Mud",
    title: "Slips on mud",
    hazard: "Slipping on mud build-up",
    who: "Employees, 3rd parties",
    how: "Trafficked plant routes and excavations causing mud transfer",
    controls: "Hardstanding where possible; wheel wash and tracking control; regular brushing of walkways; segregate pedestrian routes.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Slips_Due_To_Ice_Frost",
    title: "Slips due to ice/frost",
    hazard: "Loss of footing in freezing conditions",
    who: "Employees, 3rd parties",
    how: "Frost/ice on approaches, welfare routes or scaffold boards",
    controls: "Grit/salt in cold weather; early inspections; reroute if untreated; display weather alerts; non-slip coverings where required.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Trips_From_Debris",
    title: "Trips from debris",
    hazard: "Tripping over waste or stored materials",
    who: "Employees, 3rd parties",
    how: "Poor housekeeping or unplanned storage blocking walkways",
    controls: "Planned material zones; skip rotation; remove waste daily; enforce clean-as-you-go policy.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Trips_From_Trailing_Cables",
    title: "Trips from trailing cables",
    hazard: "Trailing cables/hoses creating trip hazard",
    who: "Employees, 3rd parties",
    how: "Temporary electrics or hoses routed across walkways",
    controls: "Route overhead or at perimeter; cable ramps/mats; remove when not in use; regular inspections.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Trips_From_Uneven_Ground",
    title: "Trips from uneven ground",
    hazard: "Changes in level or potholes",
    who: "Employees, 3rd parties",
    how: "Ruts left by plant, subsidence or poorly maintained ground",
    controls: "Grade and compact routes; sign/cordon temporary defects; use firm pedestrian walkways.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Trips_From_Poor_Lighting",
    title: "Trips from poor lighting",
    hazard: "Slips/trips due to insufficient illumination",
    who: "Employees, 3rd parties",
    how: "Night work or shaded areas without lighting",
    controls: "Task and route lighting; check illumination before shift; maintain lamps and cabling.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Obstructed_Access_Egress",
    title: "Obstructed access/egress",
    hazard: "Entrapment or delay in emergency exit",
    who: "Employees, 3rd parties",
    how: "Tools/materials blocking escape routes and stair towers",
    controls: "Keep fire routes clear; daily route inspections; signage to keep clear; enforce storage rules.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Slurry_And_Contamination_Underfoot",
    title: "Slurry/contamination underfoot",
    hazard: "Slips from slurry or fines on surfaces",
    who: "Employees, 3rd parties",
    how: "Concrete washout or wet cutting runoff spreading underfoot",
    controls: "Contain washout; direct cutting water to containment; prevent tracking contamination beyond work area.",
    action: "Environmental Lead",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Inadequate_Footwear",
    title: "Inadequate footwear",
    hazard: "Loss of footing due to unsuitable boots",
    who: "Employees, 3rd parties",
    how: "Smooth sole or worn tread in wet/muddy/sloped ground conditions",
    controls: "Safety footwear with slip-resistant sole; monitor wear; replace when tread degraded.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Poor_Housekeeping",
    title: "Poor housekeeping (general)",
    hazard: "General slip/trip risk from uncontrolled debris",
    who: "Employees, 3rd parties",
    how: "Messy workface from poor supervision and no clean-as-you-go",
    controls: "Housekeeping policy; end-of-shift checks; supervisor sign-off; disciplinary escalation for non-compliance.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Spoil_And_Material_Left_On_Walkways",
    title: "Spoil/material left on walkways",
    hazard: "Trips from spilled loads/surplus aggregates",
    who: "Employees, 3rd parties",
    how: "Tracked or spilled material from plant onto walkways",
    controls: "Regular brushing; designated loading/spoil zones; edge boards to contain spill; sweep immediately after spill.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Time_Pressure_Production_Bias",
    title: "Time pressure / production bias",
    hazard: "Rushing work leading to unsafe acts and missed checks",
    who: "Employees, 3rd parties",
    how: "Deadline pressure or bonus incentives causing shortcuts and skipped controls",
    controls: "Plan realistic durations; separate safety from productivity incentives; brief ‘right first time’; supervisor to pace works; stop-work authority respected.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Complacency_Normalisation_Of_Deviation",
    title: "Complacency / normalisation of deviation",
    hazard: "Unsafe practices becoming ‘the norm’ over time",
    who: "Employees, 3rd parties",
    how: "Repeated success without incident causing risk underestimation",
    controls: "Leadership safety tours; rotate tasks; periodic RAMS refresh; targeted toolbox talks after observations; reward hazard reporting, not output.",
    action: "H&S Lead",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Poor_Communication_Language_Barriers",
    title: "Poor communication / language barriers",
    hazard: "Misunderstanding critical instructions or signals",
    who: "Employees, 3rd parties",
    how: "Mixed-language crews; hand signals not standardised; noisy environments",
    controls: "Use visual method statements and pictograms; multilingual briefings; standard hand signals; confirm-understanding checks (teach-back); radios where needed.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Distraction_Mobile_Phones",
    title: "Distraction (mobile phones & devices)",
    hazard: "Loss of situational awareness around plant/edges",
    who: "Employees, 3rd parties",
    how: "Phone use in red zones; music earbuds masking alarms",
    controls: "Red-zone phone ban; approved comms only; dedicated safe phone areas; enforce no-earbuds policy; supervisor spot checks.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Fatigue_Long_Hours",
    title: "Fatigue / long hours",
    hazard: "Slower reactions and poor decisions due to fatigue",
    who: "Employees, 3rd parties",
    how: "Night shifts, extended shifts, insufficient breaks or travel time",
    controls: "Shift limits and minimum rest; fatigue self-check at start; rota planning; extra supervision on nights; micro-breaks for safety-critical tasks.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Stress_Mental_Health",
    title: "Stress & mental health",
    hazard: "Impaired judgment, errors, or absenteeism",
    who: "Employees, 3rd parties",
    how: "Personal stress, workload, bullying, or traumatic events",
    controls: "Mental Health First Aiders; confidential EAP; workload reviews; private welfare space; signpost support; non-punitive reporting culture.",
    action: "HR Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Substance_Impairment_Drugs_Alcohol",
    title: "Substance impairment (drugs & alcohol)",
    hazard: "Reduced coordination and judgment on site",
    who: "Employees, 3rd parties",
    how: "Arriving unfit for work; misuse of prescription meds",
    controls: "Fit-for-work/D&A policy; testing per contract; education on prescription declarations; immediate removal from safety-critical tasks if suspected.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Shortcutting_Risk_Taking",
    title: "Shortcutting / risk-taking",
    hazard: "Bypassing guards, PPE or permit steps",
    who: "Employees, 3rd parties",
    how: "‘Get it done’ culture; perceived hassle with permits/PPE",
    controls: "Make the safe way the easy way (tools to hand, pre-staged PPE); measured permit turnaround; recognise safe behaviours; intervene early.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Authority_Gradient_Cant_Speak_Up",
    title: "Authority gradient / can’t speak up",
    hazard: "Workers do not challenge unsafe instructions",
    who: "Employees, 3rd parties",
    how: "Power distance; fear of blame; new starters or agency staff",
    controls: "Explicit stop-work authority; anonymous reporting; supervisors model ‘thank you for stopping’ responses; buddy mentors for new/young workers.",
    action: "H&S Lead",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Bystander_Effect_Diffusion",
    title: "Bystander effect / diffusion of responsibility",
    hazard: "Nobody intervenes when seeing unsafe acts",
    who: "Employees, 3rd parties",
    how: "Crowded workface; unclear ownership of risk",
    controls: "Allocate task owners in briefings; dynamic risk assessment (point-of-work); encourage ‘name it, stop it, make it safe’; track positive interventions.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Lone_Working_Psychological_Risk",
    title: "Lone working (psychological risk)",
    hazard: "Reduced help-seeking and degraded situational awareness",
    who: "Employees, 3rd parties",
    how: "Working isolated or out-of-hours without support",
    controls: "Check-in schedule; lone worker devices; escalation tree; restrict high-risk tasks when alone; ensure welfare and lighting are adequate.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Bullying_Harassment",
    title: "Bullying & harassment",
    hazard: "Intimidation leading to silence and unsafe compliance",
    who: "Employees, 3rd parties",
    how: "Abusive behaviour from peers or supervisors",
    controls: "Zero-tolerance policy; confidential reporting; swift investigation; leadership standards; refresher briefings on respectful sites.",
    action: "HR Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Cognitive_Overload_Multitasking",
    title: "Cognitive overload / multitasking",
    hazard: "Error-prone work due to excessive task switching",
    who: "Employees, 3rd parties",
    how: "High information load; alarms, radios and paperwork while operating",
    controls: "Assign a spotter or banksman; simplify paperwork at point-of-work; pause rule for critical steps; quiet zone for planning/permits.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Damaged_Cables",
    title: "Damaged or deteriorated cables",
    hazard: "Electric shock or arcing from damaged insulation",
    who: "Employees, 3rd parties",
    how: "Trailing leads crushed by plant or worn through on edges",
    controls: "110V site systems; armoured or HO7RN-F leads; weekly visual checks; replace immediately if damaged.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Improvised_Connections",
    title: "Improvised or makeshift electrical connections",
    hazard: "Shock or fire from unsafe terminations",
    who: "Employees, 3rd parties",
    how: "Unapproved adaptors, taped joints or unauthorised repairs",
    controls: "No re-wiring/DIY repairs on site; only competent electricians; use approved connectors; remove unsafe items immediately.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Overloading_Circuits",
    title: "Overloading of circuits",
    hazard: "Fire or equipment failure",
    who: "Employees, 3rd parties",
    how: "Multiple items powered from a single outlet or spider block",
    controls: "Load management; distribute circuits; use site DBs not domestic boards; check max ratings.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Portable_Lighting_Failure",
    title: "Portable lighting failure",
    hazard: "Sudden loss of illumination causing slips/falls",
    who: "Employees, 3rd parties",
    how: "Temporary lighting not secured or not rated for environment",
    controls: "Use 110V lighting; secure fittings; inspect daily; provide backup lighting for high-risk zones.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Insufficient_Lighting",
    title: "Insufficient lighting for safe work",
    hazard: "Trips or misjudgement in low light",
    who: "Employees, 3rd parties",
    how: "Shadowing, night works, scaffold voids",
    controls: "Lux-level checks; task lighting; tower lighting for access routes; reposition if shadows form.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Contact_With_Live_Parts",
    title: "Contact with live parts",
    hazard: "Electric shock or burns",
    who: "Employees, 3rd parties",
    how: "Live terminals or open DBs exposed during work",
    controls: "Lockable DBs; covers closed and labelled; no energised work by non-electrical staff; test-before-touch.",
    action: "Qualified Electrician",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Water_Ingress_Electrics",
    title: "Water ingress affecting electrics",
    hazard: "Short circuit or shock",
    who: "Employees, 3rd parties",
    how: "Outdoor cables/connectors in wet conditions without IP rating",
    controls: "Use rated IP connectors; elevate off ground; protect from rain/washdown; routine inspections after storms.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Temp_Cables_As_Trip_Hazard",
    title: "Temporary cables creating trip hazard",
    hazard: "Fall due to cable routing",
    who: "Employees, 3rd parties",
    how: "Cables across footpaths or scaffold boards",
    controls: "Overhead routing or cable ramps; fixed runs; remove decommissioned lines; daily housekeeping check.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Incorrect_Voltage",
    title: "Incorrect voltage selection",
    hazard: "Shock severity increased",
    who: "Employees, 3rd parties",
    how: "Use of 230V tools where 110V required",
    controls: "Mandatory 110V on site; transformers positioned off the ground; check plant/tool rating pre-issue.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Unauthorised_Alteration",
    title: "Unauthorised alteration to electrical setup",
    hazard: "Non-compliant temporary system",
    who: "Employees, 3rd parties",
    how: "Workers moving panels, boards or transformers",
    controls: "Only electricians may relocate or alter; permit for changes; isolation before movement; label tamper seals.",
    action: "Qualified Electrician",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Damaged_Lighting_Columns",
    title: "Damaged lighting columns/towers",
    hazard: "Instability or collapse",
    who: "Employees, 3rd parties",
    how: "Vehicle strike or poor foundation/base",
    controls: "Inspect stability; barrier protection near traffic; reposition if soft ground; take out of service if damaged.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Public_Entering_Work_Area",
    title: "Public entering the work area",
    hazard: "Members of the public exposed to live construction hazards",
    who: "Employees, 3rd parties",
    how: "Inadequate fencing/signage allowing public to walk into workface",
    controls: "Secure perimeter; Chapter 8 or HERAS fencing as required; signage and monitored access points; stop work if boundary breached.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Trespass_Children",
    title: "Child trespass / curiosity risk",
    hazard: "Children accessing plant or hazardous areas",
    who: "Employees, 3rd parties",
    how: "Attractive hazards (plant, stacks, ladders) left unsecured out of hours",
    controls: "Remove keys and immobilise plant; lock compounds; inspect perimeter at close of play; remove ladders/ramps.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Uncontrolled_Public_Pedestrian_Routes",
    title: "Uncontrolled public pedestrian routes",
    hazard: "Collision or contact between public and site plant",
    who: "Employees, 3rd parties",
    how: "Shared footpaths or inadequate segregation",
    controls: "Dedicated safe walkways with barrier; signing/marshalling; physical separation from vehicles; shorter haul routes to reduce interface.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Public_Struck_By_Material",
    title: "Public struck by materials",
    hazard: "Falling or projected debris leaving site boundary",
    who: "Employees, 3rd parties",
    how: "Cutting, planing or lifting operations close to perimeter",
    controls: "Secondary containment (debris netting, screens); exclusion zones; schedule high-risk work outside public peak times.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Perimeter_Fence_Failure",
    title: "Perimeter fence failure",
    hazard: "Unauthorised entry through damaged or moved fencing",
    who: "Employees, 3rd parties",
    how: "Wind damage, vehicle strike or deliberate removal",
    controls: "Daily fence inspections; brace in exposed areas; repair immediately; rapid escalation if breach found.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Shared_Access_With_Public",
    title: "Shared access with public / residents",
    hazard: "Conflict at gates/driveways",
    who: "Employees, 3rd parties",
    how: "Resident/retail access shared with deliveries/plant",
    controls: "Banksman on all interfaces; timed deliveries; liaison with residents/businesses; visibility splays maintained.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Aggression_From_Public",
    title: "Aggression or confrontation from public",
    hazard: "Escalation leading to unsafe decisions or harm",
    who: "Employees, 3rd parties",
    how: "Intimidation over noise, access, delays or perceived nuisance",
    controls: "De-escalation training; no retaliation; escalate to site manager; safe retreat policy; signage clarifying works.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Theft_Arson",
    title: "Theft / arson risk",
    hazard: "Loss of plant/materials or fire damage affecting safety",
    who: "Employees, 3rd parties",
    how: "Unsecured site or opportunistic access",
    controls: "Lock/immobilise plant; secure fuel store; CCTV/lighting; asset logs; out-of-hours patrol or alarms.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Media_Filming_Reputational_Risk",
    title: "Media / filming / reputational risk",
    hazard: "Filmed unsafe conditions leading to regulatory action",
    who: "Employees, 3rd parties",
    how: "Public video recording hazardous behaviours",
    controls: "Model safe behaviours; immediate correction; inspectors briefed; visual standards maintained.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Open_Gates_And_Uncontrolled_Access",
    title: "Open gates and uncontrolled access",
    hazard: "Public or delivery vehicles entering unsafely",
    who: "Employees, 3rd parties",
    how: "Gate left open or unattended, especially during breaks",
    controls: "Gatekeeping protocol; banksman present whenever open; close when unsupervised; signage visible externally.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Heat_Stress",
    title: "Heat stress",
    hazard: "Heat exhaustion/dehydration reducing performance and safety",
    who: "Employees, 3rd parties",
    how: "High temperatures, heavy PPE and direct sun during physical tasks",
    controls: "Hydration plan; shaded rest areas; task rotation; lighter PPE where permissible; early/late working windows; monitor for symptoms.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Cold_Stress",
    title: "Cold stress",
    hazard: "Hypothermia/cold injury impacting judgment and dexterity",
    who: "Employees, 3rd parties",
    how: "Low temperatures, wind chill, wet clothing",
    controls: "Thermal layered clothing; waterproofs; heated welfare; warm-up breaks; gloves to maintain dexterity; monitor for shivering/confusion.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_High_Winds",
    title: "High winds",
    hazard: "Loss of control of materials/plant; collapse of temporary items",
    who: "Employees, 3rd parties",
    how: "Wind loading on sheets, barriers, loads and MEWPs",
    controls: "Check wind thresholds for cranes/MEWPs; secure sheeting/barriers; stop lifts above limits; remove/secure loose materials.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Lightning_Risk",
    title: "Lightning risk",
    hazard: "Electrocution from nearby strikes",
    who: "Employees, 3rd parties",
    how: "Working on exposed sites, scaffolds, MEWPs or with long metallic items",
    controls: "Suspend exposed work during electrical storms; retreat to safe shelters/vehicles; isolate cranes/MEWPs; no handling of long metal sections.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_UV_Exposure",
    title: "UV exposure",
    hazard: "Sunburn/skin cancer and glare-induced errors",
    who: "Employees, 3rd parties",
    how: "Extended outdoor work without protection",
    controls: "Long sleeves/neck protection; SPF 30+; shade breaks; sunglasses meeting EN spec; brief on early signs of sun damage.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Flooding_Surface_Water",
    title: "Flooding / surface water",
    hazard: "Drowning/vehicle loss of control and service ingress",
    who: "Employees, 3rd parties",
    how: "Heavy rain/blocked drains causing fast accumulation",
    controls: "Drainage management; protect/cover pits; barriers around inundated areas; stop plant entering flood water; pumps and silt control ready.",
    action: "Environmental Lead",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Storm_Damage_Flying_Debris",
    title: "Storm damage / flying debris",
    hazard: "Impact from unsecured materials",
    who: "Employees, 3rd parties",
    how: "Wind lifts unsecured boards, tins, barriers or signage",
    controls: "End-of-shift tie-down checks; remove lightweight stock to secure stores; brace fencing/signs; postpone exposed tasks.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Fog_Low_Visibility",
    title: "Fog / low visibility",
    hazard: "Vehicle/person collisions due to poor sight lines",
    who: "Employees, 3rd parties",
    how: "Fog/rain/dusk reduces visibility on routes and workfaces",
    controls: "Enhance route/task lighting; reduce speeds; add banksmen on interfaces; pause high-risk movements until visibility improves.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Soft_Ground_Bearing_Capacity",
    title: "Soft ground / bearing capacity loss",
    hazard: "Plant bogging/overturning; collapse at edges",
    who: "Employees, 3rd parties",
    how: "Rain saturates subgrade or undermines edges",
    controls: "Assess ground daily; install mats/stone up routes; increase stand-off from edges; restrict axle loads; engineer review if in doubt.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Drought_Dust_Air_Quality",
    title: "Drought dust / air quality",
    hazard: "Respiratory irritation and reduced visibility",
    who: "Employees, 3rd parties",
    how: "Dry spells causing dust from haul roads and stockpiles",
    controls: "Damping/water bowsers; on-tool extraction; sheeting of loads; RPE where needed; speed control on haul routes.",
    action: "Environmental Lead",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Temporary_Works_Weather_Instability",
    title: "Temporary works weather instability",
    hazard: "Movement or collapse of scaffold/formwork/barriers",
    who: "Employees, 3rd parties",
    how: "Wind/rain affects ties, foundations and bracing",
    controls: "Inspections after weather events; verify ties/anchors; engineer approval before re-use; increase ballast/bracing where required.",
    action: "Temporary Works Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Silt_Runoff_Pollution",
    title: "Silt runoff / pollution",
    hazard: "Environmental contamination of drains/watercourses",
    who: "Employees, 3rd parties",
    how: "Heavy rain mobilises fines from stockpiles and works",
    controls: "Silt fencing/booms; settlement tanks; cover stockpiles; protect drains; inspect after storms; dispose arisings correctly.",
    action: "Environmental Lead",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Uninspected_Temporary_Works",
    title: "Uninspected temporary works",
    hazard: "Failure/collapse due to missing design check or sign-off",
    who: "Employees, 3rd parties",
    how: "Scaffold/formwork/shoring erected but not inspected or tagged",
    controls: "TWC/TWS process; inspection before first use; tagging system; only authorised handover into service.",
    action: "Temporary Works Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Inadequate_Design_Capacity",
    title: "Inadequate design capacity",
    hazard: "Structure overloaded beyond design limit",
    who: "Employees, 3rd parties",
    how: "Incorrect ties, load paths or bracing; unverified capacity",
    controls: "TWC-approved design; design brief and calcs; no modifications without consent; control of imposed loads.",
    action: "Temporary Works Coordinator",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Unauthorised_Modification",
    title: "Unauthorised modification or removal",
    hazard: "Loss of stability after alteration",
    who: "Employees, 3rd parties",
    how: "Operatives remove braces/boards to “make work easier”",
    controls: "No alterations unless authorised by TWC/TWS; signage; inspection after change; training on critical members.",
    action: "Temporary Works Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Improper_Foundations_Bearing",
    title: "Improper foundations/bearing",
    hazard: "Settlement or rotation at base",
    who: "Employees, 3rd parties",
    how: "Scaffold/hoarding/tower placed on soft or unverified ground",
    controls: "Ground bearing assessment; mats or footings; engineered base; reinspect after rainfall.",
    action: "Temporary Works Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Wind_Loading_Stability",
    title: "Wind loading / stability failure",
    hazard: "Collapse in high winds",
    who: "Employees, 3rd parties",
    how: "Sheeted scaffold/hoarding without wind calcs or tie checks",
    controls: "Design wind class; additional ties/bracing; trigger criteria for suspension of work during storms; re-check after weather.",
    action: "Temporary Works Coordinator",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Incorrect_Ties_Anchors",
    title: "Incorrect ties or anchors",
    hazard: "Tie failure leading to collapse",
    who: "Employees, 3rd parties",
    how: "Wrong anchors or poor fixing into masonry/frame",
    controls: "Correct anchor spec; pull tests; competent installers; inspection and recordkeeping.",
    action: "Temporary Works Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Collision_From_Plant",
    title: "Plant collision with temporary works",
    hazard: "Impact leading to collapse or partial failure",
    who: "Employees, 3rd parties",
    how: "Dumpers, MEWPs, or deliveries striking structure",
    controls: "Physical barriers; no-go zones; banksman near edges; high-visibility bases and toe protection.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Poor_Assembly_Competence",
    title: "Poor assembly competence",
    hazard: "Structural weakness from incorrect assembly",
    who: "Employees, 3rd parties",
    how: "Unqualified or unbriefed installers",
    controls: "Competent erection team; supervision; manufacturer guidance followed; toolbox brief before assembly.",
    action: "Temporary Works Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Premature_Loading",
    title: "Premature loading",
    hazard: "Collapse from loading before full strength achieved",
    who: "Employees, 3rd parties",
    how: "Formwork struck early / scaffold loaded before sign-off",
    controls: "Hold points before loading; curing/strength verification; signage restricting access; TWC release only.",
    action: "Temporary Works Coordinator",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Overloading_From_Materials",
    title: "Overloading from stored materials",
    hazard: "Decking/platform collapse",
    who: "Employees, 3rd parties",
    how: "Materials stacked on temporary structure beyond SWL",
    controls: "Clear SWL signage; spot checks; limit pallets/loads; no progressive stockpiling.",
    action: "Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Poor_Inspection_Monitoring",
    title: "Poor inspection & monitoring",
    hazard: "Progressive deterioration going unnoticed",
    who: "Employees, 3rd parties",
    how: "Weather, vibration, poor fit-up or loosening of fixings",
    controls: "Planned inspection frequency; visual check after each event; log records; escalation to TWC if movement seen.",
    action: "Temporary Works Supervisor",
    init: "high",
    resid: "low"
  },
  {
    id: "GENERAL_Unauthorised_Access_On_Temporary_Works",
    title: "Unauthorised access on temporary works",
    hazard: "Falls or collapse from mis-use of structure",
    who: "Employees, 3rd parties",
    how: "Members of public or unbriefed workers climbing/using structure",
    controls: "Lockable access; signage; remove ladders/rungs; barrier system; out-of-hours security checks.",
    action: "Site Manager",
    init: "high",
    resid: "low"
  },
  {
    id: 'hearing-noise',
    title: 'Noise affecting hearing',
    hazard: 'Noises affecting hearing',
    who: 'MVL Employees',
    how: 'Use of power tools and whilst installing ductwork',
    controls: 'Operatives are provided with ear defenders for use whilst using power tools producing noises over 80db and are mandatory when the ELV is above 87db whilst installing.',
    action: 'Supervisor / Luke Watson',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'hand-tools',
    title: 'Injury from powered hand tools',
    hazard: 'Injury from the use of powered hand tools, drills, jigsaws, grinders etc.',
    who: 'MVL Employees',
    how: 'Whilst installing ductwork hand drills used for joining spiral joints, jigsaws to cut ductwork into required sections',
    controls: 'When using this equipment eye protection/impact glasses (BSEN166) plus ear protection whilst using this equipment. Follow individual risk assessment & HAVS sheet for each type of equipment as detailed below. Ensure all equipment is inspected and meets statutory requirements for small power tools (PAT tests).',
    action: 'Supervisor / Luke Watson',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'manual-handling',
    title: 'Injury from moving and lifting',
    hazard: 'Injury from moving and lifting – offloading deliveries of ductwork, metal fabrication',
    who: 'MVL Employees',
    how: 'When moving ductwork/plant to working area or offloading from vehicles. Lifting duct through riser opening',
    controls: 'Ductwork deliveries in transit van under 20kg sections. Ensure operatives are trained in correct methods of manual handling.',
    action: 'Supervisor – Operatives',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'falling-height',
    title: 'Falling from working at heights',
    hazard: 'Falling from working at heights, either Scaffolds or Stepladders',
    who: 'MVL Employees',
    how: 'Whilst working at height falling from working platform as ductwork sections can be big and awkward to install',
    controls: 'Ensure operatives are trained in the safe use of access equipment (PASMA/IPAF) and that the equipment used is maintained, safe for use and free from defects. Make sure working platform allows free movement to allow duct install. Whilst working at height exclusion zones to be placed around MEWP or mobile tower. Tools to be tethered whilst being used when working at height. Stepladders are only to be used as a last resort and require director authorisation.',
    action: 'Supervisor – Trained Operatives',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'dust-inhalation',
    title: 'Breathing problems from dust',
    hazard: 'Breathing problems via inhaling dust',
    who: 'MVL Employees',
    how: 'When drilling into slab for bracketry / general dusty environment',
    controls: 'Whilst drilling operatives to use vac attachments on SDS drills to stop dust at source. FFP3 dust mask also provided. Any operative wearing dust masks to be face fit tested.',
    action: 'Supervisor',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'sealant',
    title: 'Use of duct sealant (Mastic)',
    hazard: 'Use of duct sealant (Mastic)',
    who: 'MVL Employees',
    how: 'Whilst sealing ductwork mastic coming into contact with skin/eyes',
    controls: 'Ensure operatives are aware of the hazards attached to the property and supply details of preventative/emergency measures. All operatives will be working alongside manufacturer’s COSHH sheet provided.',
    action: 'Supervisor / Luke Watson',
    init: 'low',
    resid: 'low'
  },
  {
    id: 'waste-materials',
    title: 'Waste materials management',
    hazard: 'Waste Materials causing environmental damage/personal injury',
    who: 'Environment / All contractors',
    how: 'Scrap ductwork, offcuts left on site',
    controls: 'All redundant/waste metal is always to be either disposed of in our specific bins provided on site or removed from site by ourselves (waste carriers license). PPE to be used whilst handling waste materials.',
    action: 'Supervisor',
    init: 'low',
    resid: 'low'
  },
  {
    id: 'work-at-height',
    title: 'Work at height (general)',
    hazard: 'Falls from height (ladders, roofs, leading edges, scaffolds).',
    who: 'MVL employees; other trades; public',
    how: 'Working above ground/through fragile materials; unprotected edges.',
    controls: 'Avoid if practicable; plan & supervise; select correct access (tower, scaffold, MEWP) with edge protection; prevent falls (collective protection first); inspect platforms/ladders; competent users; rescue plan.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'fragile-roofs-leading-edges',
    title: 'Fragile roofs / leading edges',
    hazard: 'Falls through fragile materials or off roof edges.',
    who: 'Roof workers; others nearby',
    how: 'Walking/working on fragile sheets; openings; roof lights.',
    controls: 'Avoid access if possible; demarcate; use platform staging, covers and edge protection; fall restraint/AR where required; trained persons only; weather checks.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'slips-trips',
    title: 'Slips, trips & falls (same level)',
    hazard: 'Slips/trips on uneven, wet or obstructed surfaces.',
    who: 'All site personnel; visitors',
    how: 'Poor housekeeping; trailing leads; mud/wet; uneven ground.',
    controls: 'Plan routes; good housekeeping; suitable lighting; cable management; grit/clean spillages; keep access/egress clear; sensible footwear.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'manual-handling',
    title: 'Manual handling',
    hazard: 'MSD injuries from lifting/carrying/pushing/pulling.',
    who: 'MVL employees',
    how: 'Handling heavy/awkward items; poor posture or twisting.',
    controls: 'Avoid where possible; use mechanical aids; team lifts; plan route; reduce load size; training; rotate tasks.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'silica-dust-rcs',
    title: 'Construction dust (RCS/silica)',
    hazard: 'Respirable crystalline silica causing lung disease.',
    who: 'Cutting/drilling crews; nearby trades',
    how: 'Cutting/grinding concrete/stone; dry sweeping.',
    controls: 'COSHH: wet cutting or on-tool LEV; task-matched RPE (fit-tested); enclosure/segregation; housekeeping (no dry sweeping); health surveillance where required.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'medium'
  },
  {
    id: 'noise',
    title: 'Noise exposure',
    hazard: 'Noise-induced hearing loss/tinnitus.',
    who: 'Tool operators; nearby workers',
    how: 'Powered tools/plant; impact processes.',
    controls: 'Eliminate/substitute; quieter tools; time/distance; barriers; hearing protection programme per CNAWR; information & training; health surveillance where indicated.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'havs',
    title: 'Hand–arm vibration (HAVS)',
    hazard: 'Vascular/nerve damage from vibration.',
    who: 'Operatives using vibrating tools',
    how: 'Breakers/grinders/drills/compactors.',
    controls: 'Plan to avoid; low-vibration tools/consumables; trigger-time limits vs EAV/ELV; maintenance; warm/dry hands; job rotation; health surveillance.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'asbestos-suspect',
    title: 'Asbestos – suspect/encounter',
    hazard: 'Exposure to asbestos fibres.',
    who: 'All trades; building occupants',
    how: 'Disturbing ACMs during refurbishment/demolition.',
    controls: 'Check survey/refurb-demo info; stop work if suspect; follow Asbestos Essentials; only trained staff for non-licensed tasks; licensed contractor where required; control/contain, notify where applicable; waste via licensed route.',
    action: 'Site Manager – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'excavations',
    title: 'Excavations',
    hazard: 'Collapse, falls into, falling materials, services strike.',
    who: 'Groundworkers; plant ops; public',
    how: 'Unsupported sides; poor access; service hits.',
    controls: 'Plan; shore/batter/box; daily inspections by competent person; barriers & edge protection; safe access/egress; spoil set-back; locate/mark services (plans + CAT & Genny) per HSG47.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'medium'
  },
  {
    id: 'underground-services',
    title: 'Underground services (HSG47)',
    hazard: 'Strike to electric/gas/water/telecoms.',
    who: 'Groundworkers; plant ops',
    how: 'Excavation without proper locate/identify.',
    controls: 'Plan; utility plans; survey & mark; safe digging technique; permit to dig; supervision; isolation/consents if needed; maintain separation distances.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'site-traffic',
    title: 'Plant & site traffic',
    hazard: 'People struck by vehicles/plant.',
    who: 'All site personnel; visitors; public',
    how: 'Mixed routes; reversing; blind spots.',
    controls: 'Safe site, safe vehicle, safe driver: segregate pedestrians/vehicles; one-way systems; banksman only where unavoidable; reversing aids; speed control; exclusion zones; competent operators.',
    action: 'Site Manager – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'mewp',
    title: 'MEWPs',
    hazard: 'Falls, overturning, entrapment/crushing.',
    who: 'MEWP operators; spotters',
    how: 'Incorrect selection/setup; overhead obstructions; terrain.',
    controls: 'Select suitable MEWP; ground assessment; entrapment controls; edge protection; harness per manufacturer; exclusion zones; trained/competent; pre-use checks.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'scaffolding',
    title: 'Scaffolds / edge protection',
    hazard: 'Falls from platforms or during erection/alteration.',
    who: 'Scaffolders; users',
    how: 'Missing guardrails/toe boards; unsafe methods.',
    controls: 'Erect/alter/dismantle by competent scaffolders following NASC SG4; inspections; complete guardrails/toe boards; safe access; user pre-use checks.',
    action: 'Scaffolding Contractor – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'electricity-temp',
    title: 'Temporary electrics',
    hazard: 'Electric shock, burns, fire.',
    who: 'All trades; public',
    how: 'Damaged cables/leads; wet conditions; incorrect protection.',
    controls: 'Design & install to HSG141; 110V CTE where practicable; RCDs; IP-rated equipment; cable management; inspections/testing; competent electricians.',
    action: 'Site Manager – Electrical Contractor',
    init: 'high', resid: 'low'
  },
  {
    id: 'hot-works',
    title: 'Hot works (fire risk)',
    hazard: 'Ignition causing fire; burns; fumes.',
    who: 'Welders; roofers; nearby trades; public',
    how: 'Sparks/heat near combustibles; inadequate fire watch.',
    controls: 'Eliminate or control by permit-to-work; clear/cover combustibles; fire watch during and after (per HSG168); extinguishers/alarms; local extraction for fumes.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'confined-spaces',
    title: 'Confined spaces',
    hazard: 'Toxic/flammable atmosphere; oxygen deficiency; engulfment.',
    who: 'Entrants; standby',
    how: 'Tanks, voids, manholes, ducts.',
    controls: 'Avoid entry where possible; permit; testing/monitoring; isolation; ventilation; rescue plan & equipment; trained/competent entrants & attendant.',
    action: 'Permit Issuer – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'cement-dermatitis',
    title: 'Cement / wet concrete (dermatitis & burns)',
    hazard: 'Skin irritation/alkali burns; chromium VI sensitisation.',
    who: 'Concrete/mortar workers',
    how: 'Skin contact with wet cement/concrete.',
    controls: 'COSHH: avoid contact; impervious gloves/sleeves; barrier creams aren’t PPE; wash facilities; clean contaminated clothing; training; first aid for cement burns.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'isocyanates',
    title: 'Isocyanates (PU paints/foams) – spraying',
    hazard: 'Occupational asthma/respiratory irritation; skin/eye effects.',
    who: 'Sprayers; nearby trades',
    how: 'Aerosol/mist generation during spraying.',
    controls: 'COSHH: avoid or use low-isocyanate products; enclosure/LEV; air-fed RPE where required; skin/eye protection; exclusion zones; health surveillance for asthma.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'medium'
  },
  {
    id: 'duct-handling-sharp-edges',
    title: 'Sheet metal handling (sharp edges)',
    hazard: 'Lacerations from sharp duct edges, coil & coil-type fittings.',
    who: 'Duct fitters; mates; delivery crews',
    how: 'Manual handling of unprotected edges; handling without cut-resistant gloves.',
    controls: 'Gloves with cut protection; sleeves; deburr where practicable; use stillages & edge protectors; safe storage & segregation; mechanical aids for packs.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'overhead-lift-duct-sections',
    title: 'Lifting & presenting duct overhead',
    hazard: 'Crush/strain injuries; dropped loads; pinch points.',
    who: 'Fitters; spotters; others below',
    how: 'Lifting with genie lifts/chain blocks; fingers in flange pinch points.',
    controls: 'Plan lift; rated lifting aids; exclusion zone; tag-lines; hands-clear policy at mating flanges; competent banksman; good comms.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'supports-hangers',
    title: 'Supports & hangers (overhead drilling/anchoring)',
    hazard: 'Falling objects; silica dust; eye injuries.',
    who: 'Fitters; nearby trades',
    how: 'Overhead drilling into concrete/steel; incorrect anchor selection or torque.',
    controls: 'Select anchors per design/manufacturer; torque to spec; proof test where required; manage dust (on-tool extraction/wet methods); eye/face protection; keep below area clear.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'pat-fixings',
    title: 'Cartridge-operated fixings (if used)',
    hazard: 'Penetrating injury; ricochet; noise.',
    who: 'Trained fixers; anyone nearby',
    how: 'Using PAT tools for brackets into steel/concrete.',
    controls: 'Trained/authorised users only; correct cartridge & fastener; never carry loaded; misfire procedure; hearing/eye protection; controlled storage of cartridges; exclusion zone.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'ladder-wa-h-balancing',
    title: 'Working at height (fixing/balancing)',
    hazard: 'Falls from steps/ladders/platforms.',
    who: 'Fitters; commissioning engineers',
    how: 'Short-duration fixings; taking readings at terminals; three-point contact lost.',
    controls: 'Avoid WAH where possible; use MEWP/tower if >short duration or two-handed work; ladder only for light, short tasks on suitable footing; pre-use checks; do not overreach.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'mewp-duct-install',
    title: 'MEWP use for duct install',
    hazard: 'Entrapment; overturning; fall from platform.',
    who: 'Operators; spotters',
    how: 'Operating near ceilings/steel; obstructed travel; unsuitable ground.',
    controls: 'Select right MEWP; ground assessment; entrapment controls; harness per manufacturer (boom types); keep within SWL; exclusion zones; trained/competent; pre-use checks.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'sealants-adhesives',
    title: 'Sealants/adhesives & cleaners (COSHH)',
    hazard: 'Solvent vapours; skin/eye irritation; fire/explosion.',
    who: 'Duct installers; cleaners',
    how: 'Applying solvent-containing mastics/cleaners; poor ventilation; ignition sources.',
    controls: 'Check SDS & COSHH; use low-VOC where possible; ventilation/LEV; no ignition sources; flammables stored per rules; gloves/eye protection; hygiene/wash-ups.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'mineral-wool-insulation',
    title: 'Duct insulation (mineral wool)',
    hazard: 'Respiratory/skin/eye irritation from fibres.',
    who: 'Laggers; fitters nearby',
    how: 'Cutting/handling mineral wool; airborne fibres in enclosed areas.',
    controls: 'Minimise disturbance; sharp knives not power tools; damping/clean-as-you-go; RPE where needed; long sleeves/gloves/goggles; welfare for washing; waste double-bagged.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'pressure-testing-ducts',
    title: 'Duct leakage/pressure testing',
    hazard: 'Stored energy release; end caps/blanking plates ejecting; noise.',
    who: 'Commissioning team; others nearby',
    how: 'Pressurising test sections; failure of blanks/temporary joints; overpressure.',
    controls: 'Written test plan; rated blanks & restraints; controlled area; calibrated gauges; step-up pressurisation; remote stand-clear during hold; depressurise before adjustments.',
    action: 'Commissioning Engineer – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'commissioning-balancing',
    title: 'Air balancing & setting to work',
    hazard: 'Falls (access), noise, contact with moving plant.',
    who: 'Commissioning engineers; fitters',
    how: 'Accessing terminals high level; starting/stopping AHUs/fans.',
    controls: 'Follow CIBSE/BSRIA procedures; isolate before access to moving parts; confirm guards; measured control of fan speeds; secure access equipment; keep tools tethered aloft.',
    action: 'Commissioning Engineer – Supervisor',
    init: 'medium', resid: 'low'
  },
  {
    id: 'fire-dampers-access',
    title: 'Fire/smoke dampers – install & access',
    hazard: 'Compromised fire strategy; inaccessible test points.',
    who: 'Installers; future maintenance teams',
    how: 'Incorrect orientation/clearances; no access for testing/reset.',
    controls: 'Install per design/manufacturer; provide compliant access doors; maintain clearances; coordinate fire stopping; label/records; do not obstruct with services.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'duct-cleanliness-tr19',
    title: 'Duct cleanliness & protection (TR19 / DW144)',
    hazard: 'Contamination of new systems; hygiene risks.',
    who: 'Installers; building users',
    how: 'Open duct ends; debris ingress during install/fit-out.',
    controls: 'Cap/seal duct ends in storage & install; keep internal surfaces clean; provide access doors as required; clean pre-commissioning where specified; avoid cross-contamination on tie-ins.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'rcs-from-drilling',
    title: 'Silica dust (RCS) from drilling/chasing',
    hazard: 'Lung disease incl. silicosis, COPD, cancer.',
    who: 'Drillers; nearby trades',
    how: 'Dry coring/drilling concrete/brick without controls.',
    controls: 'On-tool extraction or wet methods; task-matched RPE; segregate/enclose; housekeeping (no dry sweeping); health surveillance where indicated.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'medium'
  },
  {
    id: 'noise-havs-tools',
    title: 'Noise & HAVS – cutting, drilling, grinding',
    hazard: 'Hearing damage; hand-arm vibration syndrome.',
    who: 'Installers; others nearby',
    how: 'Powered cutting/drilling/grinding; prolonged trigger time.',
    controls: 'Quieter/lower-vibration tools & consumables; time limits vs EAV/ELV; maintenance; gloves for grip/warmth; rotate tasks; hearing protection programme & signage.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'ttm-setup-live-carriageway',
    title: 'TTM set-up on live carriageway (Red Book/Chap 8)',
    hazard: 'Traffic striking workers/plant; wrong layout causing collisions.',
    who: 'Groundworkers; traffic marshals; road users; pedestrians',
    how: 'Poor signing/lighting/guarding; inadequate tapers; wrong lane closures.',
    controls: 'Plan to Red Book & TSM Ch.8; approved TM layout/drawing; trained/qualified TM operatives (NRSWA O1/S1 or NHSS 12D as applicable); install in correct sequence; inspection & maintenance of signs; remove when not needed.',
    action: 'Traffic Management Contractor – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'pedestrian-management-footway',
    title: 'Pedestrian management / footway closures',
    hazard: 'Public struck by vehicles or falls into works; inaccessible routes.',
    who: 'Members of the public incl. disabled users; workers',
    how: 'Insufficient guarding/width; ramps too steep; poor lighting or diversions.',
    controls: 'Pedestrian routes min widths; ramps/kerb drops; tactile/accessible provision; safe crossings; guard rails; lighting at night; clear diversion signing; keep routes clear & slip-free.',
    action: 'Site Manager – TM Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'hsg47-locate-detect',
    title: 'Underground services (HSG47)',
    hazard: 'Electric shock/burns, gas release, flooding, telecoms damage.',
    who: 'Groundworkers; plant ops; public nearby',
    how: 'Excavating without plan/locate/confirm; incorrect hand-digging.',
    controls: 'Obtain & review up-to-date plans; mark routes; CAT & Genny (and GPR where needed); permit-to-dig; trial holes; isolate where possible; hand-dig near expected services; maintain separation; supervise.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'permit-schemes-nrswa',
    title: 'Street works permits / notices (NRSWA/Permit schemes)',
    hazard: 'Uncoordinated works causing congestion & unsafe set-ups.',
    who: 'Public; workers; road users',
    how: 'Working without permit/permission; non-compliant conditions.',
    controls: 'Obtain permits/permissions; comply with permit conditions & times; coordinate with HA & utilities; display site info; record inspections; reinstate within timescales.',
    action: 'Site Manager – Permit Coordinator',
    init: 'medium', resid: 'low'
  },
  {
    id: 'excavation-highway',
    title: 'Excavations in carriageway/footway',
    hazard: 'Trench collapse; falls into excavation; struck by falling materials.',
    who: 'Groundworkers; pedestrians; road users',
    how: 'Unsupported sides; spoil too close; inadequate barriers.',
    controls: 'Plan support (shoring/boxes) or batter; competent person daily checks; edge protection/barriers; safe access/egress (ladders at correct spacing); spoil set-back; inspections after rain/traffic vibration.',
    action: 'Supervisor – Competent Person',
    init: 'high', resid: 'medium'
  },
  {
    id: 'road-plates',
    title: 'Road plates over openings',
    hazard: 'Vehicle/pedestrian accidents from plate movement or deflection.',
    who: 'Road users; pedestrians; workers',
    how: 'Underrated plates; inadequate fixings/anti-skid; high approach speeds.',
    controls: 'Engineer selection & rating; secure/anchor; anti-skid; manage approach speeds (signs, limits, ramps) or recess plates; inspect & maintain; noise damping where needed.',
    action: 'Site Manager – TM Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'portable-signals-shuttle',
    title: 'Portable signals / shuttle working',
    hazard: 'Head-on collisions / rear-end shunts / pedestrian conflicts.',
    who: 'Road users; pedestrians; workers',
    how: 'Incorrect signal spacing/positioning; poor intergreens; sighting issues.',
    controls: 'Use approved portable signals; set up per design; correct tapers & head siting; timing/intergreens set; test & monitor flows; provide pedestrian phases where required.',
    action: 'Traffic Management Contractor – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'public-interface',
    title: 'Public interface & site security',
    hazard: 'Members of public entering work area or contacting hazards.',
    who: 'Public; vulnerable users; workers',
    how: 'Inadequate barriers/info; material storage in public route.',
    controls: 'Robust barriers/guarding; clear signage & contact board; secure materials/plant; marshal at accesses; keep footways/driveways serviceable or provide alternatives.',
    action: 'Site Manager – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'plant-interface-highway',
    title: 'Plant & deliveries in live highway',
    hazard: 'People struck by moving plant/vehicles.',
    who: 'Workers; public; drivers',
    how: 'Reversing; poor segregation; blind spots; uncontrolled access.',
    controls: 'Defined access/egress; banksman where unavoidable; reversing aids; exclusion zones; one-way systems; brief drivers; schedule deliveries off-peak; cleanse road as needed.',
    action: 'Site Manager – Traffic Marshal',
    init: 'high', resid: 'low'
  },
  {
    id: 'night-work-lighting-fatigue',
    title: 'Night work: lighting & fatigue',
    hazard: 'Poor visibility leading to collisions; fatigue-related errors.',
    who: 'Workers; road users; public',
    how: 'Insufficient lighting/glare; extended shifts; circadian disruption.',
    controls: 'Task & route lighting without glare to traffic; reflective PPE; noise controls for residents; fatigue plan (shifts/breaks/fit-for-work); night TM checks.',
    action: 'Site Manager – TM Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'confined-spaces-highway',
    title: 'Confined spaces (manholes/ducts)',
    hazard: 'Toxic/flammable atmospheres; oxygen deficiency; engulfment.',
    who: 'Entrants; standby',
    how: 'Entry to chambers/culverts without controls.',
    controls: 'Avoid entry if possible; permit system; atmosphere testing/monitoring; isolation; ventilation; rescue plan & equipment; trained entrants & attendant.',
    action: 'Permit Issuer – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'bitumen-hot-works-reinstatement',
    title: 'Bitumen/asphalt reinstatement (hot works)',
    hazard: 'Burns; fire; fume exposure.',
    who: 'Pavers; groundworkers; public near site',
    how: 'Handling hot materials; ignition near combustibles.',
    controls: 'Hot-work procedures; PPE incl. heat-resistant gloves/face/arms; control ignition sources; safe storage; local extraction/ventilation; fire extinguishers; first aid for burns.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'rcs-breaking-cutting',
    title: 'Breaking/cutting in highway (RCS, noise, HAVS)',
    hazard: 'Silica dust inhalation; hearing damage; vibration injury.',
    who: 'Groundworkers; nearby public',
    how: 'Dry cutting/breaking with discs; prolonged trigger time.',
    controls: 'Wet cutting or on-tool extraction; task-matched RPE; noise controls & hearing protection; low-vibration tools; trigger-time limits vs EAV/ELV; housekeeping (no dry sweeping).',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'medium'
  },
  {
    id: 'service-strike-emergency',
    title: 'Service strike – emergency actions',
    hazard: 'Fire/explosion/electrocution; gas release; flooding.',
    who: 'Workers; public; emergency responders',
    how: 'Damage to LV/HV, gas, water or comms while excavating.',
    controls: 'STOP work; evacuate & cordon; call emergency numbers & DNO/gas transporter; remove ignition sources; briefed response plan; incident reporting & investigation; review controls before restart.',
    action: 'Supervisor – Site Manager',
    init: 'high', resid: 'low'
  },
  {
    id: 'weather-winter-heat',
    title: 'Weather – winter/heat/rain on highways',
    hazard: 'Slips; loss of control; heat stress/hypothermia.',
    who: 'Workers; public on diverted routes',
    how: 'Ice/snow/rain on routes; hot weather; poor visibility.',
    controls: 'Gritting & anti-slip; keep drainage clear; adjust TM for visibility; shade/water/rest in heat; cold-weather PPE; stop in severe conditions.',
    action: 'Site Manager – Supervisor',
    init: 'medium', resid: 'low'
  },
  {
    id: 'glass-handling-glazing',
    title: 'Glass handling & glazing',
    hazard: 'Cuts/lacerations; glass breakage; dropped panes.',
    who: 'Installers; helpers; public below',
    how: 'Manually moving panes/IGUs; poor stacking; no edge protection.',
    controls: 'Use A-frames/stillages & rated suction lifters; cut-resistant gloves/sleeves; edge protection; exclusion zone below; store/transport upright; team lifts & manual-handling plan.',
    action: 'Supervisor – Installers',
    init: 'high', resid: 'low'
  },
  {
    id: 'remove-existing-frames',
    title: 'Removal of existing frames & sashes',
    hazard: 'Falling glass/materials; sharp edges; unexpected services.',
    who: 'Installers; public in vicinity',
    how: 'Uncontrolled release when cutting out frames; debris dropping externally.',
    controls: 'De-glaze first; tape/film panes before cuts; protective sheeting & debris nets; control zone below; methodical cut sequence; check for services/alarms to frames.',
    action: 'Supervisor – Installers',
    init: 'high', resid: 'low'
  },
  {
    id: 'work-at-height-window-install',
    title: 'Work at height for installs',
    hazard: 'Falls from ladders/towers/MEWPs; dropped tools.',
    who: 'Installers; public below',
    how: 'Overreaching from ladders; two-hand tasks on ladders; poor footing.',
    controls: 'Ladders only for short, light tasks; use tower/MEWP for two-hand fitting; pre-use checks; secure footing; tool lanyards aloft; keep below area cordoned.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'scaffolds-access-edges',
    title: 'Scaffolds/edge protection (upper floors)',
    hazard: 'Falls from platforms/edges.',
    who: 'Installers; other trades',
    how: 'Missing guardrails/toe boards; moving frames through openings.',
    controls: 'Provide suitable working platforms with full guardrails; internal/external edge protection at openings; trained users; inspections and handover.',
    action: 'Principal Contractor – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'temporary-works-propping-lintels',
    title: 'Temporary works (propping for lintels/openings)',
    hazard: 'Partial collapse; falling masonry.',
    who: 'Installers; other trades; public',
    how: 'Cutting out supports without design/permits.',
    controls: 'Temporary works design/brief; competent install of props/needles; permit to load; inspection records; exclusion zones; follow designer limits/sequence.',
    action: 'Site Manager – Temporary Works Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'wood-dust-joinery',
    title: 'Wood dust (cutting/trimming on site)',
    hazard: 'Asthma; cancer risk (hardwood); irritation.',
    who: 'Joiners; nearby trades',
    how: 'Cutting/sanding timber/MDF without LEV or RPE.',
    controls: 'On-tool extraction/LEV; vacuum (H-class) not sweeping; task-matched RPE; keep below WELs; health surveillance where indicated; housekeeping.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'saws-puwer',
    title: 'Mitre/circular saws (PUWER)',
    hazard: 'Contact with blade; kickback; ejection.',
    who: 'Joiners; others nearby',
    how: 'Defeated guards; poor support; wrong blades.',
    controls: 'Guards in place/functional; correct blade for material; stable work support; push-sticks/holds; trained/authorized users; regular checks & isolation for blade changes.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'nail-guns',
    title: 'Nail guns (1st/2nd fix)',
    hazard: 'Penetrating injury; ricochet; eye injury; noise.',
    who: 'Users; nearby trades',
    how: 'Contact-trip firing; defeating safety; poor line-of-fire control.',
    controls: 'Prefer sequential trigger; eye/face & hearing protection; no mods; secure work; clear line-of-fire; training and misfire procedure; store/isolated when not in use.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'silica-reveals',
    title: 'Silica dust (raking reveals/chases)',
    hazard: 'RCS inhalation (silicosis/COPD/cancer).',
    who: 'Joiners; others nearby',
    how: 'Dry cutting/grinding masonry for frames/packers/fixings.',
    controls: 'Wet cutting or on-tool extraction; task-matched RPE; enclosure/segregation; avoid dry sweeping (use class H vac); health surveillance where required.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'medium'
  },
  {
    id: 'adhesives-foams',
    title: 'PU foams/adhesives & cleaners (COSHH)',
    hazard: 'Isocyanate/solvent vapours; skin/eye irritation; flammability.',
    who: 'Installers; others nearby',
    how: 'Using expanding foam/sealants/cleaners in poorly ventilated areas.',
    controls: 'Check SDS; ventilation/LEV; no ignition sources; suitable gloves/eye protection; low-VOC/low-MDI where possible; safe storage & waste.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'noise-havs-joinery',
    title: 'Noise & HAVS (portable tools)',
    hazard: 'Hearing damage; hand–arm vibration.',
    who: 'Tool users; others nearby',
    how: 'Repeated cutting/sanding/fixing with powered tools.',
    controls: 'Quieter/low-vibration kit & consumables; trigger-time limits vs EAV/ELV; maintenance/sharp blades; hearing protection programme; task rotation; warm/dry hands.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'occupied-premises',
    title: 'Occupied premises / public interface',
    hazard: 'Public entering work area; slips; falling objects.',
    who: 'Building users; visitors; installers',
    how: 'Working through openings/routes; inadequate segregation.',
    controls: 'Barriers/lock-off rooms; signed diversions; manage escape routes/alarms; tidy leads; timed noisy/dusty works; info to occupants; DBS rules where applicable.',
    action: 'Site Manager – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'fire-safety-small-works',
    title: 'Fire safety during small works',
    hazard: 'Ignition/spread; blocked escape routes.',
    who: 'Installers; occupants',
    how: 'Hot air guns for paint; adhesives/solvents; blocking exits.',
    controls: 'Fire risk assessment; keep exits clear; control ignition sources; hot-work permit where needed; extinguishers; housekeeping; out-of-hours checks if required.',
    action: 'Site Manager – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'asbestos-suspect-refurb',
    title: 'Asbestos – suspect during refurb',
    hazard: 'Fibre exposure from ACMs.',
    who: 'Joiners; occupants',
    how: 'Disturbing ACMs (e.g., soffits, panels, textured coatings) when replacing frames.',
    controls: 'Refurb/demolition survey before disturbance; stop if suspect found; follow Asbestos Essentials for non-licensed tasks; licensed contractor where required; waste via licensed route.',
    action: 'Client/PC – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'lead-paint-older-premises',
    title: 'Lead in old paint (pre-1980s)',
    hazard: 'Lead dust/fume exposure.',
    who: 'Joiners; building users (especially children)',
    how: 'Dry sanding/heat guns when stripping frames/doors.',
    controls: 'Avoid full strip; wet-abrasive/score & overcoat; control dust/fume; hygiene/wash-ups; suitable RPE; waste handling; consider CLAW requirements if significant exposure.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'manual-handling-frames-doors',
    title: 'Manual handling of frames & doors',
    hazard: 'MSD strains; crush/pinch injuries.',
    who: 'Installers',
    how: 'Carrying awkward/heavy units; twisting in stairwells.',
    controls: 'Team lifts; route planning; handles/suction aids; mechanical aids where possible; break down to manageable components; rotate tasks.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  /* ---------- BAM: mapped to BAM Life Saving Rules ---------- */
  {
    id: 'bam-wah',
    title: 'BAM – Working at height',
    hazard: 'Falls from ladders/platforms/leading edges; dropped objects.',
    who: 'Site operatives; others below',
    how: 'Two-hand tasks from ladders; incomplete edge protection; unsecured tools.',
    controls: 'Plan to avoid; use MEWP/tower/scaffold with full edge protection; tie-off when required; tool tethering; pre-use & formal inspections; clear drop zones; stop if conditions change.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'bam-lifting',
    title: 'BAM – Lifting operations & suspended loads',
    hazard: 'Crush/struck-by from load swing or failure.',
    who: 'Slingers/signallers; riggers; all near lift zone',
    how: 'Standing under/near suspended load; wrong accessories; poor comms.',
    controls: 'Lift plan & competent AP/SSS; exclusion zones; rated kit & inspections; tag-lines; single point of command; weather/ground checks; no one under loads.',
    action: 'Appointed Person – Slinger/Signaller',
    init: 'high', resid: 'low'
  },
  {
    id: 'bam-veh-ped',
    title: 'BAM – Vehicles & pedestrians (exclusion zones)',
    hazard: 'People struck by plant/vehicles.',
    who: 'All personnel; visitors',
    how: 'Mixed routes; reversing; blind spots; crossing active work areas.',
    controls: 'Segregated routes; banksman only where unavoidable; one-way systems; speed limits; marked EZ/fatal zones; briefed drivers; lighting & signage.',
    action: 'Site Manager – Traffic Marshal',
    init: 'high', resid: 'low'
  },
  {
    id: 'bam-dropped-objects',
    title: 'BAM – Falling/dropped objects',
    hazard: 'Injury from materials/tools falling from height.',
    who: 'Workers below; public at boundary',
    how: 'Unsecured tools/materials; poor housekeeping on platforms.',
    controls: 'Tool lanyards; toe boards/brick guards/debris nets; sealed containers; exclusion/drop zones; housekeeping; controlled lifts; inspect fixings.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'bam-energised',
    title: 'BAM – Work on/near energised lines',
    hazard: 'Electric shock/arc flash; burns; fire.',
    who: 'Electricians; M&E; other trades nearby',
    how: 'Work on/near live systems; defeated isolation or covers.',
    controls: 'Plan and isolate (LOTO); prove dead; barriers/insulation; competent persons; live work only by exception under control; suitable PPE; permits & testing.',
    action: 'Electrical Supervisor – Authorised Persons',
    init: 'high', resid: 'low'
  },

  /* ---------- Wates: aligned to Visual Standards & Zero Harm themes ---------- */
  {
    id: 'wates-scaffold',
    title: 'Wates – Scaffold management (SG4/TG20)',
    hazard: 'Falls from incomplete scaffolds; falling materials to public/workers.',
    who: 'Scaffolders; users; public',
    how: 'Partial handovers; missing guardrails/toe boards; poor access.',
    controls: 'Design & handover; SG4/TG20 compliance; double guardrails/toe boards; stair access with gates; exclusion/fatal zones; brick guards/fans; 7-day & after-event inspections.',
    action: 'Scaffold Contractor – Temp Works/Site Manager',
    init: 'high', resid: 'low'
  },
  {
    id: 'wates-public-protection',
    title: 'Wates – Public protection & segregation',
    hazard: 'Members of public entering works; struck-by or falls into works.',
    who: 'Public; visitors; workers',
    how: 'Inadequate barriers/routes; working over occupied areas.',
    controls: 'Robust barriers & signage; protected walkways; timed noisy/dusty works; debris control; banksman at interfaces; info boards; housekeeping on access/egress.',
    action: 'Site Manager – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'wates-wah-mewps',
    title: 'Wates – WAH & MEWPs for façade/fit-out',
    hazard: 'Falls, entrapment, dropped tools.',
    who: 'MEWP operators; trades aloft; ground workers',
    how: 'Unsuitable machine/ground; overreaching; no drop-zone.',
    controls: 'Select suitable MEWP; ground assessment; entrapment control; harness per manufacturer (booms); tool tethering; defined drop/exclusion zones; pre-use checks.',
    action: 'Supervisor – MEWP Operator',
    init: 'high', resid: 'low'
  },
  {
    id: 'wates-lifting-plant',
    title: 'Wates – Lifting of frames/plant',
    hazard: 'Load drop; crush/pinch injuries.',
    who: 'Slingers; fitters; nearby trades',
    how: 'Incorrect slinging; no EZ; conflicting activities.',
    controls: 'Lift plan; competent slinger/signaller; EZ & briefed interfaces; rated accessories; weather stop rules; clear line-of-fire; tag-lines where needed.',
    action: 'Appointed Person – Slinger/Signaller',
    init: 'high', resid: 'low'
  },

  /* ---------- SES Engineering Services (M&E contractor risk profile) ---------- */
  {
    id: 'ses-energised-work',
    title: 'SES – Energised systems / electrical isolation',
    hazard: 'Electric shock/arc flash; burns; secondary fire.',
    who: 'Electricians; commissioning; other trades nearby',
    how: 'Work on live or not-proved-dead circuits; temporary supplies.',
    controls: 'Permit/LOTO; prove dead; insulated tools & barriers; competent authorised persons; live work only by exception; arc-rated PPE where required; test & re-energise controls.',
    action: 'Electrical Supervisor – AP/Competent Person',
    init: 'high', resid: 'low'
  },
  {
    id: 'ses-hot-works',
    title: 'SES – Hot works (braze/weld/cut)',
    hazard: 'Ignition, fire/smoke; burns; fumes.',
    who: 'M&E installers; others nearby',
    how: 'Brazing near combustibles; poor fire watch.',
    controls: 'Hot-work permit; clear/cover combustibles; extinguishers; LEV/ventilation; fire watch during & after; gas management; atmosphere tests where needed.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'ses-mewp-wah',
    title: 'SES – MEWPs & WAH for services install',
    hazard: 'Falls/entrapment; dropped tools.',
    who: 'MEWP users; installers; people below',
    how: 'Two-hand tasks from steps; overhead obstructions; unsuitable reach.',
    controls: 'Use MEWP/tower for two-hand tasks; select correct machine; entrapment controls; tool lanyards; defined drop zones; inspections/pre-use checks.',
    action: 'Supervisor – MEWP Operator',
    init: 'high', resid: 'low'
  },
  {
    id: 'ses-lifting-m-and-e',
    title: 'SES – Lifting/positioning M&E plant',
    hazard: 'Crush/pinch; dropped loads; line-of-fire.',
    who: 'Rigging team; nearby trades',
    how: 'Tight spaces; fingers at pinch points; ad-hoc lifts.',
    controls: 'Method statement & lift plan; competent slinger/signaller; rated gantries/chain blocks; hands-clear policy; EZ; comms; proof tests on fixings where needed.',
    action: 'Appointed Person – Slinger/Signaller',
    init: 'high', resid: 'low'
  },
  {
    id: 'srm-people-plant',
    title: 'SRM – People & plant interface',
    hazard: 'People struck by moving plant/vehicles.',
    who: 'All site personnel; visitors; public',
    how: 'Mixed routes; reversing; blind spots; inadequate EZ.',
    controls: 'Apply hierarchy (eliminate→PPE); segregated routes; marked exclusion/restricted zones; competent marshals; 270° surround vision cameras where specified; telehandlers with LMI; dumpers/rollers with ROPS up; quick hitches per SRM rules.',
    action: 'Site Manager – Traffic Marshal',
    init: 'high', resid: 'low'
  },
  {
    id: 'srm-lifting-ops',
    title: 'SRM – Lifting operations',
    hazard: 'Dropped/swinging loads; crush/pinch.',
    who: 'Slingers/signallers; riggers; anyone near lift zone',
    how: 'Unplanned lifts; wrong accessories; people under loads.',
    controls: 'Lift Plan + Schedule of Lifts; competent AP/SSS; exclusion zones; tag-lines; weather/ground checks; review/accept plan before start; anti-collision rules for tower cranes where applicable.',
    action: 'Appointed Person – Slinger/Signaller',
    init: 'high', resid: 'low'
  },
  {
    id: 'srm-excavators-telehandlers',
    title: 'SRM – Excavators/telehandlers/dumpers',
    hazard: 'Struck-by; overturn; attachment failure.',
    who: 'Plant ops; groundworkers; nearby trades',
    how: 'Improper hitches; poor stability; lowered ROPS.',
    controls: 'Excavators: only fully manual or fully automatic quick hitches (no semi-auto); spill kits on machines; telehandlers with longitudinal load-moment control; dumpers/rollers ROPS up; follow people/plant interface controls.',
    action: 'Plant Supervisor – Operators',
    init: 'high', resid: 'low'
  },
  {
    id: 'srm-hole-void',
    title: 'SRM – Temporary hole/void protection',
    hazard: 'Falls through openings; cover failure.',
    who: 'All trades; public near boundaries',
    how: 'Unrated/loose covers; no inspections; unclear SWL.',
    controls: 'Design with SWL & slip/trip risks; TW design if >200×200mm (when not proprietary); daily checks + weekly formal inspection; mark SWL on covers; written handover; control removal/reinstatement via RAMS.',
    action: 'TW Supervisor – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'srm-tethering',
    title: 'SRM – Tool & material tethering',
    hazard: 'Falling objects from height.',
    who: 'Workers below; public',
    how: 'Untethered tools near edges/openings.',
    controls: 'Tether tools/materials when within 2 m of edges/openings or potential >2 m fall; chin straps or tethered helmets where risk persists; CE/UKCA-marked tethers with SWL; alternative controls if tethering not possible.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'srm-storage-handling',
    title: 'SRM – Materials storage/handling',
    hazard: 'Collapse/roll; cuts; weather movement.',
    who: 'All trades; delivery crews',
    how: 'Glazing panels unrestrained; tubular stock rolling; wind uplift.',
    controls: 'Strap glazing panels on stillages/crates; tubular stock on purpose-built racking; stop blocks for round items; weigh-down/exposed-area controls; avoid manual handling where possible.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'srm-access-lighting-housekeeping',
    title: 'SRM – Access, lighting & housekeeping',
    hazard: 'Slips/trips/poor visibility.',
    who: 'All personnel; visitors',
    how: 'Obstructed routes; dark work areas; debris.',
    controls: 'Define/demarcate routes; suitable task/emergency lighting; inspect temporary electrics (3-monthly) and emergency lighting; strict housekeeping—suspend works if unacceptable.',
    action: 'Site Manager – All trades',
    init: 'medium', resid: 'low'
  },
  {
    id: 'kier-vehicles-plant',
    title: 'Kier – Vehicles, plant & equipment',
    hazard: 'People struck; equipment failure; poor competence.',
    who: 'Operators; pedestrians; public',
    how: 'Unsuitable/poorly maintained kit; untrained users.',
    controls: 'Select/operate/maintain per Kier standard; defined inspections & maintenance; verify operator competence; manage interfaces and segregation; monitor & review performance.',
    action: 'Plant Manager – Site Manager',
    init: 'high', resid: 'low'
  },
  {
    id: 'kier-lifting-ops',
    title: 'Kier – Lifting operations (SHEMS-STD-GR-045)',
    hazard: 'Dropped load; crush/pinch; line-of-fire.',
    who: 'Rigging team; nearby trades',
    how: 'Unplanned lifts; wrong accessories; poor comms.',
    controls: 'Plan by competent AP; Permit-to-Lift where required; exclude under-load access; trained slinger/signaller; inspect accessories; control proximity/oversail; supervise & brief.',
    action: 'Appointed Person – Slinger/Signaller',
    init: 'high', resid: 'low'
  },
  {
    id: 'kier-mewp',
    title: 'Kier – MEWPs (link to Lifting Ops standard)',
    hazard: 'Entrapment; overturning; falls; dropped tools.',
    who: 'Operators; spotters; people below',
    how: 'Unsuitable machine/ground; overreach; no EZ.',
    controls: 'Follow Vehicles/Plant standard and apply Lifting Ops standard to powered access; ground assessment; pre-use checks; entrapment controls; harness per manufacturer; define drop/exclusion zones; competent operators.',
    action: 'Supervisor – MEWP Operator',
    init: 'high', resid: 'low'
  },
  {
    id: 'kier-wah-ladders',
    title: 'Kier – Working at height (ladders/steps)',
    hazard: 'Falls from ladders/steps.',
    who: 'All trades using steps/ladders',
    how: 'Two-hand tasks from ladder; wrong angle; unsecured bases.',
    controls: 'Use ladders only for short, light tasks; correct inclination & securing; protect access points; use tower/MEWP for two-hand tasks; inspections; trained users per Kier ladder standard.',
    action: 'Supervisor – Users',
    init: 'high', resid: 'low'
  },
  {
    id: 'kier-temp-works',
    title: 'Kier – Temporary works & crane planning',
    hazard: 'Structural instability; collapse; over-sail/proximity.',
    who: 'TW/craning teams; all on site; public',
    how: 'Inadequate design/permits; unverified foundations; poor interfaces.',
    controls: 'Apply Kier TW standard (SHEMS-STD-GR-048) and foundations minimums; appoint TW roles; permit/plan lifts; address proximity, zoning & over-sail; use BS 7121; competent supervision.',
    action: 'TW Supervisor – Appointed Person',
    init: 'high', resid: 'low'
  },
  {
    id: 'kier-public-interface',
    title: 'Kier – Public interface & wellbeing',
    hazard: 'Public entering work areas; collisions; poor comms.',
    who: 'Public/visitors; workforce',
    how: 'Inadequate barriers/routes; night conditions; unclear info.',
    controls: 'Robust guarding & signage; accessible routes; lighting at night; community info boards; align with ISO 45001 IMS and Kier HSW policy commitments.',
    action: 'Site Manager – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'crest-public-interface',
    title: 'Crest – Public interface on housing developments',
    hazard: 'Members of public entering work areas; slips/struck-by.',
    who: 'Residents/visitors; site operatives',
    how: 'Open routes through plots; school runs; shared access.',
    controls: 'Robust barriers & signed diversions; secure plot/compound boundaries; timed deliveries off-peak; housekeeping to keep footways clear; info boards/briefings to residents.',
    action: 'Site Manager – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'crest-scaffolds-plot',
    title: 'Crest – Scaffolds/WAH on plots',
    hazard: 'Falls from platforms/leading edges; dropped objects.',
    who: 'Trades aloft; ground personnel; public outside hoarding',
    how: 'Incomplete guardrails; working through window/roof openings.',
    controls: 'TG20/SG4 compliant scaffold; internal/external edge protection; gated access; tool lanyards; handover and 7-day/after-event inspections; drop zones where required.',
    action: 'Scaffold Contractor – Site Manager',
    init: 'high', resid: 'low'
  },
  {
    id: 'crest-excavations-services',
    title: 'Crest – Excavations & services (plots/streets)',
    hazard: 'Collapse; falls into trench; service strikes.',
    who: 'Groundworkers; other trades; public',
    how: 'Unsupported sides; unmarked utilities; poor guarding.',
    controls: 'Plan: shore/batter/box; daily competent inspections; permit-to-dig; plans + CAT/Genny; trial holes; barriers/edge protection; safe access; spoil set-back.',
    action: 'Supervisor – Competent Person',
    init: 'high', resid: 'medium'
  },
  {
    id: 'crest-temp-electrics-fire',
    title: 'Crest – Temporary electrics & fire prevention (fit-out)',
    hazard: 'Shock/burns; fire from overloading/ignition sources.',
    who: 'All trades; residents adjacent',
    how: 'Damaged leads; ad-hoc heaters/chargers; hot works nearby.',
    controls: '110 V CTE or RCD-protected circuits; IP-rated kit; inspection/testing; clear combustibles; hot-work permit when needed; extinguishers; keep exits clear.',
    action: 'Electrical Supervisor – Site Manager',
    init: 'high', resid: 'low'
  },
  {
    id: 'crest-silica-block-cutting',
    title: 'Crest – Silica dust (block cutting/chasing)',
    hazard: 'RCS inhalation; long-term lung disease.',
    who: 'Bricklayers; joiners; M&E; others nearby',
    how: 'Dry cutting/grinding masonry; dry sweeping.',
    controls: 'Wet cutting or on-tool LEV; task-matched RPE; segregate/enclose; H-class vac (no dry sweeping); health surveillance where indicated.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'medium'
  },
  {
    id: 'crest-wood-dust',
    title: 'Crest – Wood dust (timber/MDF on plots)',
    hazard: 'Asthma; nasal cancer (hardwoods); irritation.',
    who: 'Joiners; nearby trades',
    how: 'Cutting/sanding without extraction; poor housekeeping.',
    controls: 'On-tool extraction/LEV; H-class vac; suitable RPE; minimise on-plot cutting; health surveillance if required; clean-as-you-go.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'crest-traffic-deliveries',
    title: 'Crest – Site traffic & deliveries (estates)',
    hazard: 'People struck by vehicles/plant.',
    who: 'Workers; residents; visitors; drivers',
    how: 'Mixed pedestrian/vehicle routes; reversing in plots.',
    controls: 'Segregated routes; banksman where unavoidable; timed slots; speed limits; one-way systems; brief drivers; lighting/signage.',
    action: 'Site Manager – Traffic Marshal',
    init: 'high', resid: 'low'
  },
  {
    id: 'harrison-wah-mewp',
    title: 'Harrison – Working at height / MEWPs & towers',
    hazard: 'Falls/entrapment; dropped tools.',
    who: 'Joiners/fitters; others below',
    how: 'Two-hand tasks from ladders; unsuitable machine/ground.',
    controls: 'Use tower/MEWP for two-hand tasks; ladder only for short, light tasks; pre-use checks; entrapment controls; harness per manufacturer (booms); tool lanyards; exclusion/drop zones.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'harrison-asbestos-suspect',
    title: 'Harrison – Asbestos suspect during refurb',
    hazard: 'Fibre exposure from ACMs.',
    who: 'All trades; occupants',
    how: 'Disturbing ACMs in soffits/boards/finishes.',
    controls: 'Refurb/demolition survey before disturbance; stop if suspect; follow Asbestos Essentials for non-licensed tasks; licensed contractor where required; licensed waste route.',
    action: 'Client/PC – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'harrison-noise-havs',
    title: 'Harrison – Noise & HAVS (portable tools)',
    hazard: 'Hearing damage; hand–arm vibration.',
    who: 'Tool users; others nearby',
    how: 'Repeated cutting/drilling/grinding; long trigger times.',
    controls: 'Quieter/low-vibration kit; trigger-time limits vs EAV/ELV; maintenance/sharp blades; hearing protection programme; task rotation; warm/dry hands.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'harrison-dust-management',
    title: 'Harrison – Dust (silica/wood) control',
    hazard: 'Respiratory disease; sensitisation.',
    who: 'Trades generating dust; nearby workers/public',
    how: 'Dry cutting/chasing/sanding; sweeping.',
    controls: 'On-tool LEV or wet methods; RPE to task; H-class vac; enclosure/segregation; housekeeping; health surveillance where required.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'medium'
  },
  {
    id: 'harrison-manual-handling',
    title: 'Harrison – Manual handling (frames/units)',
    hazard: 'MSD injuries; crush/pinch.',
    who: 'Installers; mates',
    how: 'Carrying awkward/heavy items; twisting in stairwells.',
    controls: 'Team lifts; route planning; handles/suction aids; mechanical aids where possible; break down components; rotate tasks; training.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'harrison-temporary-electrics',
    title: 'Harrison – Temporary electrics & portable tools',
    hazard: 'Electric shock; fire.',
    who: 'All trades',
    how: 'Damaged leads; incorrect voltage; wet conditions.',
    controls: '110 V CTE or RCDs; IP-rated kit; visual checks & PAT as required; cable management; keep dry; isolate before maintenance; trained users.',
    action: 'Electrical Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'msc-coshh-dust',
    title: 'Morgan Sindall – COSHH: construction dust',
    hazard: 'RCS/wood/MDF dust exposure; long-term lung disease.',
    who: 'Operatives; nearby trades; cleaners',
    how: 'Dry cutting/sanding; poor extraction; dry sweeping.',
    controls: 'On-tool LEV or wet methods; H/M-class extraction only; no disposable RPE – minimum APF 20, face-fit, daily fit checks; clean-shaven or positive-pressure set; H-class vac (no dry sweeping); health surveillance if required.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'medium'
  },
  {
    id: 'msc-wrrr-clocs',
    title: 'Morgan Sindall – Work-related road risk (CLOCS/FORS)',
    hazard: 'People struck by vehicles; vulnerable road user collisions.',
    who: 'Drivers; cyclists; pedestrians; marshals',
    how: 'Uncontrolled routes; poor driver competence/comms.',
    controls: 'Follow CLOCS; FORS-compliant fleet; route/booking control; progressive driver training incl. VRU awareness; site access rules briefed; audits and non-conformance actions.',
    action: 'Site Manager – Logistics',
    init: 'high', resid: 'low'
  },
  {
    id: 'msc-public-interface',
    title: 'Morgan Sindall – Public interface (occupied estates/schools)',
    hazard: 'Public entering works; struck-by; slips/trips.',
    who: 'Residents; pupils; visitors; workers',
    how: 'Shared access; deliveries at peak times; inadequate barriers.',
    controls: 'Robust barriers & signed diversions; timed deliveries (avoid peaks); brief drivers; spotless housekeeping to keep routes clear; community info boards.',
    action: 'Site Manager – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'msc-plant-traffic',
    title: 'Morgan Sindall – Plant & site traffic',
    hazard: 'People/plant interface incidents.',
    who: 'All personnel; visitors',
    how: 'Mixed routes; reversing; poor visibility.',
    controls: 'Segregation and EZs; banksman only where unavoidable; speed limits & one-way; lighting/signage; camera/aids where specified; enforce routes in lift/traffic plans.',
    action: 'Site Manager – Traffic Marshal',
    init: 'high', resid: 'low'
  },
  {
    id: 'bb-wah',
    title: 'Balfour – Working at height',
    hazard: 'Falls; dropped objects.',
    who: 'Trades aloft; people below',
    how: 'Incomplete edge protection; overreach; untethered tools.',
    controls: 'Prevent falls first; tools tethered; defined drop/exclusion zones; inspections (pre-use/7-day/after-event).',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'bb-utilities-avoidance',
    title: 'Balfour – Electricity & utility avoidance',
    hazard: 'Shock/arc; gas/water strikes.',
    who: 'Groundworkers; M&E; public',
    how: 'Unlocated services; unauthorised work near live.',
    controls: 'Competent persons; identify/protect; authorised permit to work; locate/mark; isolation where possible.',
    action: 'Supervisor – AP/Competent Person',
    init: 'high', resid: 'low'
  },
  {
    id: 'bb-people-plant',
    title: 'Balfour – People & plant interface',
    hazard: 'People struck by plant/vehicles.',
    who: 'All on site; visitors',
    how: 'Mixed routes; blind spots.',
    controls: 'Segregation with red/amber zones; competent identifiable operators/marshals; plant standards checked.',
    action: 'Site Manager – Traffic Marshal',
    init: 'high', resid: 'low'
  },
  {
    id: 'bb-lifting',
    title: 'Balfour – Lifting operations',
    hazard: 'Dropped/swinging loads; crush.',
    who: 'Rigging team; others nearby',
    how: 'Unplanned lift; wrong accessories; poor comms.',
    controls: 'Appointed Person; lift plan & EZ; thorough examination/inspection; tag-lines; weather/ground checks.',
    action: 'AP – Slinger/Signaller',
    init: 'high', resid: 'low'
  },
  {
    id: 'bb-excavations',
    title: 'Balfour – Excavations',
    hazard: 'Collapse; falls into; services.',
    who: 'Groundworkers; public',
    how: 'Unsupported sides; unguarded edges.',
    controls: 'Design out entry; edge protection; support or batter; daily competent inspections.',
    action: 'Supervisor – Competent Person',
    init: 'high', resid: 'medium'
  },
  {
    id: 'bb-driving',
    title: 'Balfour – Driving for work',
    hazard: 'Collisions/fatigue.',
    who: 'Drivers; public',
    how: 'Distraction; tired driving.',
    controls: 'No hand-held devices; fatigue management; permit/licence checks; route planning.',
    action: 'Logistics – Drivers',
    init: 'medium', resid: 'low'
  },
  {
    id: 'isg-electrical-permit',
    title: 'ISG – Electrical work/energisation (PTW)',
    hazard: 'Shock/arc; burns; fire.',
    who: 'Electricians; commissioning; others nearby',
    how: 'Working on/near live; energising incomplete systems.',
    controls: 'Permit to Work aligned to ESSoW; prove dead; inspect/test before energisation; competent authorised persons; isolation & lock-off; suitable PPE.',
    action: 'Electrical Supervisor – AP',
    init: 'high', resid: 'low'
  },
  {
    id: 'isg-portables-pat',
    title: 'ISG – Portable tools/leads (inspection & test)',
    hazard: 'Electric shock; burns; secondary fire.',
    who: 'All tool users',
    how: 'Damaged leads; out-of-date tests.',
    controls: 'Visual checks before use; inspected/tested prior to first use & at defined intervals (typ. 3-monthly on construction); defective kit quarantined.',
    action: 'Supervisor – Operatives',
    init: 'medium', resid: 'low'
  },
  {
    id: 'isg-5point-ppe',
    title: 'ISG – Site rules & 5-point PPE',
    hazard: 'Head/eye/hand injuries; poor visibility.',
    who: 'All site personnel; visitors',
    how: 'Non-compliance with basic PPE/site rules.',
    controls: 'Enforce 5-point PPE (hard hat, eye protection, hi-vis, gloves, safety boots) and local rules; brief at induction; monitor and correct.',
    action: 'Site Manager – All trades',
    init: 'medium', resid: 'low'
  },
  {
    id: 'isg-lifting-mewp-generic',
    title: 'ISG – WAH/MEWPs & lifting interface',
    hazard: 'Falls/entrapment; dropped loads.',
    who: 'MEWP users; rigging team; others below',
    how: 'Wrong machine/ground; unplanned lifts near access.',
    controls: 'Select suitable MEWP; pre-use checks; entrapment controls; plan lifts with EZ; single point of command; tool tethering aloft.',
    action: 'Supervisor – Operators',
    init: 'high', resid: 'low'
  },
  {
    id: 'lor-people-plant',
    title: 'Laing O’Rourke – People & plant interface (FSR)',
    hazard: 'People struck by plant/vehicles.',
    who: 'All site personnel; public',
    how: 'Mixed routes; blind spots; poor zoning.',
    controls: 'Define/mark EZ & restricted zones; segregation; competent marshals; compliant plant; monitor effectiveness of critical controls.',
    action: 'Site Manager – Plant Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'lor-wah',
    title: 'Laing O’Rourke – Working at height (FSR)',
    hazard: 'Falls from height; dropped objects.',
    who: 'Trades aloft; others below',
    how: 'Missing guardrails; two-hand tasks from ladders.',
    controls: 'Avoid/engineer out; towers/MEWPs/scaffolds with full guarding; tether tools; inspections; monitor FSR controls.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'lor-cranes-lifting',
    title: 'Laing O’Rourke – Cranes & lifting (FSR)',
    hazard: 'Crush/swing; load drop.',
    who: 'Rigging teams; nearby trades',
    how: 'Unplanned lift; proximity conflicts.',
    controls: 'Lift plan & acceptance; competent AP/SSS; EZ & comms; anti-collision where applicable; inspections of accessories.',
    action: 'AP – Slinger/Signaller',
    init: 'high', resid: 'low'
  },
  {
    id: 'lor-temp-works-voids',
    title: 'Laing O’Rourke – Temporary works & void protection',
    hazard: 'Collapse; falls through openings.',
    who: 'All trades; public at boundary',
    how: 'Unrated/loose covers; un-designed temporary works.',
    controls: 'TW design/brief; rated covers with SWL marked; inspections/handovers; control removal/reinstatement.',
    action: 'TW Supervisor – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'lor-confined-spaces',
    title: 'Laing O’Rourke – Confined spaces (FSR)',
    hazard: 'Toxic/flammable atmospheres; O₂ deficiency.',
    who: 'Entrants; standby',
    how: 'Entry without testing/permits; poor rescue prep.',
    controls: 'Permit; test/monitor atmospheres; isolation/ventilation; trained entrants & attendant; rescue plan & kit.',
    action: 'Permit Issuer – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'lor-electricity',
    title: 'Laing O’Rourke – Electrical isolations (FSR)',
    hazard: 'Shock/arc flash.',
    who: 'Electricians; commissioning; nearby trades',
    how: 'Work on not-proved-dead systems; bypassed isolations.',
    controls: 'LOTO; prove dead; insulated barriers/tools; authorised persons; live work by exception.',
    action: 'Electrical Supervisor – AP',
    init: 'high', resid: 'low'
  },
  {
    id: 'wd-all-safe-wah',
    title: 'Willmott Dixon – All Safe: working at height',
    hazard: 'Falls; dropped objects.',
    who: 'Trades aloft; others below',
    how: 'Ladders for two-hand tasks; incomplete guarding.',
    controls: 'Hierarchy of control; tower/MEWP/scaffold with full guardrails; gated access; tool lanyards; handover and periodic inspections.',
    action: 'Supervisor – Operatives',
    init: 'high', resid: 'low'
  },
  {
    id: 'wd-public-interface',
    title: 'Willmott Dixon – Public interface on live premises',
    hazard: 'Public entering work; struck-by; trips.',
    who: 'Occupants; visitors; workforce',
    how: 'Shared routes; unclear segregation; poor info.',
    controls: 'Barriers & signage; accessible diversions; timed noisy/dusty works; housekeeping; info boards & briefings.',
    action: 'Site Manager – Supervisor',
    init: 'high', resid: 'low'
  },
  {
    id: 'wd-fire-policy-reg38',
    title: 'Willmott Dixon – Fire safety & Regulation 38',
    hazard: 'Ignition/spread; non-compliant handover.',
    who: 'Workers; future occupants',
    how: 'Hot works; wrong products; poor records.',
    controls: 'Follow Fire Safety Requirements Policy; mandatory Fire Compliance Book; record products/competence; hot-work permits; maintain clear escapes.',
    action: 'Site Manager – Fire Marshal',
    init: 'high', resid: 'low'
  },
  {
    id: 'wd-excavations-services',
    title: 'Willmott Dixon – Excavations & services',
    hazard: 'Collapse; service strikes; falls.',
    who: 'Groundworkers; public',
    how: 'Unsupported sides; unmarked utilities; inadequate guarding.',
    controls: 'Shore/batter/box; CAT & Genny; permits; edge protection; safe access; daily inspections.',
    action: 'Supervisor – Competent Person',
    init: 'high', resid: 'medium'
  },
 {
    id: 'excavation-collapse',
    title: 'Excavation and trench collapse',
    hazard: 'Collapse of excavation sides, falling into excavations',
    who: 'Groundworkers; Other site operatives; Visitors',
    how: 'Excavation sides giving way, operatives working at bottom of trench or near edge exposed to collapse/fall hazards',
    controls: 'All excavations to be designed and supported by a competent person. Use trench boxes, shoring or benching where required. Daily inspections by a competent person recorded in excavation register. Edge protection to be installed. No plant/vehicles within exclusion zones without banksman authorisation.',
    action: 'Site Manager / Competent Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'services-strike',
    title: 'Contact with underground or overhead services',
    hazard: 'Striking buried services (gas, electric, water) or overhead power lines',
    who: 'Groundworkers; Plant operators; Public',
    how: 'Excavator bucket, hand tools or plant coming into contact with services leading to electrocution, fire, flooding or explosion',
    controls: 'Carry out service scans and review utility drawings before digging. Mark service routes on ground. Use CAT & Genny prior to breaking ground. Hand-dig trial holes to confirm locations. Maintain safe clearance distances from overhead power lines. Exclusion zones and permit-to-dig system in place.',
    action: 'Site Manager / Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'plant-movement',
    title: 'Plant and vehicle movements',
    hazard: 'Collision between moving plant and people or structures',
    who: 'Groundworkers; Other contractors; Visitors',
    how: 'Dumpers, excavators or delivery vehicles striking pedestrians or site assets',
    controls: 'Segregated vehicle and pedestrian routes with clear signage. Trained and authorised operators only. Reversing alarms and flashing beacons on all plant. Use of trained banksman during reversing/working in tight areas. High-visibility PPE mandatory in all plant zones.',
    action: 'Plant Operators / Banksman / Site Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'ground-contamination',
    title: 'Exposure to contaminated ground',
    hazard: 'Health risks from contaminated soils, chemicals, asbestos containing materials',
    who: 'Groundworkers; Environmental contractors',
    how: 'Excavation disturbing contaminated material leading to inhalation, skin contact or ingestion',
    controls: 'Site investigation reports to be reviewed before works. Where contamination is present, COSHH assessments to be followed. Suitable PPE (gloves, masks, coveralls) to be worn. Dust suppression measures (damping down). Segregation of contaminated spoil and safe disposal via licensed waste carriers.',
    action: 'Site Manager / Environmental Specialist',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'manual-handling-groundworks',
    title: 'Manual handling of heavy materials',
    hazard: 'Musculoskeletal injuries from lifting kerbs, manhole covers, shuttering panels',
    who: 'Groundworkers',
    how: 'Lifting/carrying awkward heavy materials causing strains or back injury',
    controls: 'Mechanical lifting aids (kerb lifters, vacuum lifters, lifting chains) to be used. Team lifting for heavy items. Manual handling training provided. Breaks to be scheduled for repetitive tasks. Materials stored as close to point of use as possible.',
    action: 'Supervisor / Operatives',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'slips-trips-groundworks',
    title: 'Slips, trips and falls on uneven ground',
    hazard: 'Injury from falls on debris, mud or uneven surfaces',
    who: 'Groundworkers; All contractors',
    how: 'Uneven surfaces, wet ground, trailing cables, discarded materials',
    controls: 'Maintain good housekeeping standards. Clear walkways of debris and spoil. Use anti-slip matting or stone fill on particularly muddy routes. Adequate lighting for work areas. Mandatory safety boots with midsole protection.',
    action: 'Supervisor / All Operatives',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'excavation-collapse',
    title: 'Excavation and trench collapse',
    hazard: 'Collapse of excavation sides, falling into excavations',
    who: 'Groundworkers; Other site operatives; Visitors',
    how: 'Excavation sides giving way, operatives working at bottom of trench or near edge exposed to collapse/fall hazards',
    controls: 'Design risk assessments under CDM 2015 to eliminate deep excavations where practicable. Temporary works designed by competent engineer. Use trench boxes, hydraulic shoring or battering/stepping of sides. Daily inspections by a competent person with findings recorded. Exclusion zones with barriers/fencing to prevent unauthorised access. Plant routes designed away from edge loading. Permit-to-dig system in place with Principal Contractor oversight.',
    action: 'Principal Contractor / Site Manager / Temporary Works Coordinator',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'services-strike',
    title: 'Contact with underground or overhead services',
    hazard: 'Striking buried services (gas, electric, water) or overhead power lines',
    who: 'Groundworkers; Plant operators; Public',
    how: 'Excavator bucket, hand tools or plant coming into contact with services leading to electrocution, fire, flooding or explosion',
    controls: 'Pre-construction information gathered under CDM 2015 to identify service locations. Utility plans reviewed and confirmed on site. CAT & Genny scans by trained operators with results recorded. Permit-to-dig system authorised by Site Manager. Trial holes dug to prove service positions. Safe clearance zones marked and barriers erected. Exclusion zones for overhead lines established in line with HSE GS6. Toolbox talks and clear briefing of all operatives before breaking ground.',
    action: 'Principal Contractor / Supervisor / Trained Operatives',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'plant-movement',
    title: 'Plant and vehicle movements',
    hazard: 'Collision between moving plant and people or structures',
    who: 'Groundworkers; Other contractors; Visitors',
    how: 'Dumpers, excavators or delivery vehicles striking pedestrians or site assets',
    controls: 'Construction Phase Plan (CDM 2015) to include traffic management plan designed by competent person. Segregated vehicle and pedestrian routes with barriers and signage. Appointed traffic marshal to coordinate deliveries. Only trained, authorised CPCS operators permitted. Plant fitted with mirrors, cameras, audible reversing alarms and flashing beacons. All workers briefed on site traffic rules at induction. High-visibility clothing mandatory. Stop–Go systems for shared access points.',
    action: 'Principal Contractor / Traffic Marshal / Plant Operators',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'ground-contamination',
    title: 'Exposure to contaminated ground',
    hazard: 'Health risks from contaminated soils, chemicals, asbestos containing materials',
    who: 'Groundworkers; Environmental contractors',
    how: 'Excavation disturbing contaminated material leading to inhalation, skin contact or ingestion',
    controls: 'Site investigation reports included within Pre-Construction Information pack under CDM 2015. Contamination management plan developed. COSHH assessments carried out and communicated. Segregation of hazardous spoil into designated skips. Damping down or mist suppression to control dust. Only trained operatives with appropriate PPE (coveralls, gloves, RPE) permitted to handle. Emergency wash stations available. Licensed waste carriers used for disposal with duty of care transfer notes.',
    action: 'Principal Contractor / Environmental Specialist / Supervisor',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'manual-handling-groundworks',
    title: 'Manual handling of heavy materials',
    hazard: 'Musculoskeletal injuries from lifting kerbs, manhole covers, shuttering panels',
    who: 'Groundworkers',
    how: 'Lifting/carrying awkward heavy materials causing strains or back injury',
    controls: 'CDM 2015 requires designers to avoid manual handling by specifying pre-cast lifting points and mechanical handling solutions. Use mechanical lifting aids (kerb lifters, vacuum lifters, mechanical grabs). Team lifting as a last resort with operatives trained in safe technique. Work planned to minimise double handling. Materials delivered as close to point of use as possible. Regular health surveillance for musculoskeletal issues.',
    action: 'Principal Designer (design stage) / Site Manager / Supervisor',
    init: 'medium',
    resid: 'low'
  },
    {
    id: 'excavation-collapse',
    title: 'Excavation and trench collapse',
    hazard: 'Collapse of excavation sides, falling into excavations',
    who: 'Groundworkers; Other site operatives; Visitors',
    how: 'Excavation sides giving way, operatives working at bottom of trench or near edge exposed to collapse/fall hazards',
    controls: 'Temporary works designed by a competent engineer under CDM 2015 duties. Use trench boxes, hydraulic shoring, or battered sides. Daily inspections by a competent person recorded in excavation register. Exclusion barriers and signage around open excavations. No plant/vehicles within 2m of edge without engineered protection. Permit-to-dig system authorised by Site Manager. Emergency rescue plan in place.',
    action: 'Principal Contractor / Temporary Works Coordinator / Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'services-strike',
    title: 'Contact with underground or overhead services',
    hazard: 'Striking buried services (gas, electric, water) or overhead power lines',
    who: 'Groundworkers; Plant operators; Public',
    how: 'Excavator bucket, hand tools or plant coming into contact with services leading to electrocution, fire, flooding or explosion',
    controls: 'Pre-construction information to include utility survey. CAT & Genny scans carried out by trained operators. Service drawings marked up and briefed. Trial holes hand-dug to confirm locations. Permit-to-dig system enforced. Overhead power lines avoided by exclusion zones in line with HSE GS6. Clear markings and protective covers for identified services. Toolbox talks before excavation.',
    action: 'Principal Contractor / Supervisor / Trained Operatives',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'plant-movement',
    title: 'Plant and vehicle movements',
    hazard: 'Collision between moving plant and people or structures',
    who: 'Groundworkers; Other contractors; Visitors',
    how: 'Dumpers, excavators or delivery vehicles striking pedestrians or site assets',
    controls: 'Traffic management plan included in Construction Phase Plan. Segregated vehicle and pedestrian routes with barriers. Trained traffic marshals in high-risk zones. Plant fitted with mirrors, cameras, reversing alarms, and flashing beacons. Banksman used for reversing and tight manoeuvres. Induction and toolbox talks covering traffic routes. Hi-vis PPE mandatory. One-way systems implemented where possible.',
    action: 'Principal Contractor / Traffic Marshal / Plant Operators',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'ground-contamination',
    title: 'Exposure to contaminated ground',
    hazard: 'Health risks from contaminated soils, chemicals, asbestos containing materials',
    who: 'Groundworkers; Environmental contractors',
    how: 'Excavation disturbing contaminated material leading to inhalation, skin contact or ingestion',
    controls: 'Site investigation included in Pre-Construction Information pack. Contamination management plan agreed before works. COSHH assessments completed. Segregation of contaminated spoil with covered skips. Dust suppression via damping down. PPE (coveralls, gloves, FFP3 RPE) issued and enforced. Licensed waste carriers used. Decontamination/wash stations available. Workers briefed on emergency procedures.',
    action: 'Principal Contractor / Environmental Specialist / Supervisor',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'manual-handling',
    title: 'Manual handling of heavy materials',
    hazard: 'Musculoskeletal injuries from lifting kerbs, manhole covers, shuttering panels',
    who: 'Groundworkers',
    how: 'Lifting/carrying awkward heavy materials causing strains or back injury',
    controls: 'Designers to specify mechanical lifting solutions where possible. Kerb lifters, vacuum lifters, and mechanical grabs used. Team lifting only as last resort with trained operatives. Manual handling training included in induction. Materials delivered close to workface. Rotation of tasks to reduce repetitive strain. Regular health surveillance in place.',
    action: 'Principal Designer / Site Manager / Supervisor',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'slips-trips-falls',
    title: 'Slips, trips and falls on uneven ground',
    hazard: 'Injury from falls on debris, mud or uneven surfaces',
    who: 'Groundworkers; All contractors; Visitors',
    how: 'Uneven surfaces, wet ground, trailing cables, discarded materials',
    controls: 'Good housekeeping included in Construction Phase Plan. Spoil and debris cleared daily. Temporary stone haul roads or walkways installed. Adequate task lighting. Site inductions highlight hazards. Safety boots with midsole protection mandatory. Designated storage areas for tools and cables. Emergency routes kept clear.',
    action: 'Supervisor / All Operatives',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'noise-vibration',
    title: 'Noise and vibration exposure',
    hazard: 'Hearing loss or HAVS from plant and hand tools',
    who: 'Groundworkers; Plant operators',
    how: 'Use of breakers, compactors, piling rigs and plant causing high noise/vibration',
    controls: 'Noise/vibration assessments undertaken. Quieter equipment selected where practicable. Mandatory hearing protection zones established. Rotation of tasks to reduce exposure. HAVS monitoring in place. Health surveillance for operatives using vibrating tools. Toolbox talks on HAVS awareness. Tools serviced regularly.',
    action: 'Supervisor / Site Manager',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'dust-control',
    title: 'Exposure to construction dust',
    hazard: 'Respiratory issues from silica dust, concrete cutting, soil disturbance',
    who: 'Groundworkers; All operatives',
    how: 'Dry cutting, drilling, or excavation generating airborne dust',
    controls: 'Dust suppression by water sprays/mist. On-tool extraction for cutting and drilling. FFP3 masks provided and face fit tested. Work planned to minimise dry cutting. Dust exposure levels monitored. Work areas segregated from public/other trades. Regular cleaning of welfare facilities to prevent cross-contamination.',
    action: 'Supervisor / Operatives',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'confined-space',
    title: 'Work in confined spaces',
    hazard: 'Oxygen deficiency, toxic gases, fire, or flooding',
    who: 'Groundworkers; Specialist contractors',
    how: 'Manhole entry, culverts or service ducts posing confined space risks',
    controls: 'Confined space assessment carried out. Permit-to-work system enforced. Only trained and authorised operatives permitted. Gas monitoring prior to and during entry. Ventilation provided. Rescue plan and emergency equipment in place. Communications maintained with top man. Continuous supervision required.',
    action: 'Site Manager / Confined Space Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'lifting-operations',
    title: 'Lifting operations with cranes or excavators',
    hazard: 'Dropped loads or equipment failure',
    who: 'Groundworkers; Lifting team; Other operatives nearby',
    how: 'Failure of lifting accessories, poor signalling, or loads striking operatives',
    controls: 'Lifting plan prepared by Appointed Person. All lifts carried out by CPCS-certified operators. Banksman and slinger-signallers trained and authorised. Lifting accessories inspected and certified. Exclusion zones enforced. Loads secured and kept clear of personnel. Weather monitored for wind risk.',
    action: 'Appointed Person / Crane Supervisor / Plant Operator',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'working-near-water',
    title: 'Groundworks near water bodies',
    hazard: 'Drowning, slips, water ingress',
    who: 'Groundworkers; Visitors',
    how: 'Works adjacent to ponds, rivers, drainage channels',
    controls: 'Safe access routes established. Edge protection and barriers installed. Buoyancy aids available. Rescue plan in place. Pumps installed to manage water ingress. Permit-to-work where risk of flooding. Toolbox talks on water risks. Lifejackets worn if working within 2m of edge.',
    action: 'Site Manager / Supervisor',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'weather-conditions',
    title: 'Adverse weather conditions',
    hazard: 'Heat stress, cold stress, high winds',
    who: 'Groundworkers; All operatives',
    how: 'Exposure to heat, cold or strong winds affecting safe working',
    controls: 'Weather monitored daily. Works postponed in high winds when using cranes or MEWPs. Cold weather gear and heated welfare available. Sun protection and hydration provided in hot weather. Rest breaks scheduled. Emergency plans for lightning or storms.',
    action: 'Site Manager / Supervisor',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'public-interface',
    title: 'Working adjacent to public areas',
    hazard: 'Injury to public from site activities',
    who: 'General public; Visitors',
    how: 'Plant movement, falling objects, dust or noise escaping site boundary',
    controls: 'Site hoarding and fencing installed. Controlled access gates with security. Deliveries scheduled outside peak public hours. Signage erected. Noise and dust suppressed. Banksman at gate during deliveries. Public kept informed through Principal Contractor communication.',
    action: 'Principal Contractor / Site Manager',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'temporary-works-failure',
    title: 'Failure of temporary works',
    hazard: 'Collapse of shoring, scaffolds, formwork',
    who: 'Groundworkers; Other contractors',
    how: 'Improperly designed or installed temporary works giving way',
    controls: 'Temporary works designed and checked by qualified engineer. Inspections before use. Works carried out by trained operatives. Competent Temporary Works Coordinator appointed. Records maintained. Regular monitoring during construction. Load limits clearly marked.',
    action: 'Temporary Works Coordinator / Site Manager',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'hand-arm-vibration',
    title: 'Exposure to hand-arm vibration',
    hazard: 'HAVS or white finger from vibrating tools',
    who: 'Groundworkers',
    how: 'Prolonged use of breakers, compactors, drills',
    controls: 'HAVS assessment undertaken. Trigger times monitored and controlled. Rotation of tasks. Low-vibration tools used where possible. Gloves issued for comfort (not protection). Health surveillance undertaken. Operatives trained to recognise early symptoms.',
    action: 'Supervisor / Site Manager',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'lighting-failure',
    title: 'Poor site lighting',
    hazard: 'Trips, falls or plant collisions due to low visibility',
    who: 'Groundworkers; All contractors',
    how: 'Insufficient lighting in excavation, access routes, or work areas',
    controls: 'Task lighting and floodlights installed. Emergency lighting where required. Lighting checked daily. Temporary cables routed safely. Lighting plan included in site logistics. Toolbox talks to report lighting defects promptly.',
    action: 'Supervisor / Electrician',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'hot-works',
    title: 'Hot works on site',
    hazard: 'Fire, burns, inhalation of fumes',
    who: 'Groundworkers; Welders; Nearby operatives',
    how: 'Cutting, grinding, or welding near combustible materials',
    controls: 'Hot works permit system enforced. Fire extinguishers available at point of work. Fire watch during and after works. Combustibles cleared or shielded. RPE provided where fumes generated. Trained operatives only. Fire alarm and evacuation plan briefed.',
    action: 'Site Manager / Hot Works Operatives',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'site-security',
    title: 'Unauthorised access',
    hazard: 'Injury to trespassers, theft of plant/materials',
    who: 'Public; Children; Workers',
    how: 'Unsupervised entry into construction site',
    controls: 'Perimeter hoarding and locked gates installed. Security patrols and CCTV in place. Clear signage warning of dangers. Plant secured and immobilised. Materials stored safely. Out-of-hours emergency contacts displayed. Access control system for workers.',
    action: 'Principal Contractor / Site Security',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'emergency-response',
    title: 'Emergency preparedness',
    hazard: 'Delayed response to accidents, fire or service strikes',
    who: 'All workers; Public',
    how: 'Inadequate planning or equipment for emergencies',
    controls: 'Emergency procedures included in Construction Phase Plan. Site fire points clearly marked. First aiders appointed and trained. Spill kits and fire extinguishers at key locations. Emergency contacts posted. Drills carried out and recorded. Liaison with emergency services for high-risk activities.',
    action: 'Principal Contractor / Site Manager',
    init: 'high',
    resid: 'low'
  },
  {
    id: 'slips-trips-groundworks',
    title: 'Slips, trips and falls on uneven ground',
    hazard: 'Injury from falls on debris, mud or uneven surfaces',
    who: 'Groundworkers; All contractors; Visitors',
    how: 'Uneven surfaces, wet ground, trailing cables, discarded materials',
    controls: 'Good housekeeping included in Construction Phase Plan. Daily site inspections by Supervisor. Spoil and materials cleared to designated areas. Stone haul roads or temporary walkways installed in high traffic zones. Adequate task lighting at all times. Operatives issued with safety boots with midsole protection. Site induction highlights slip/trip risks. Emergency routes to remain clear at all times.',
    action: 'Supervisor / All Operatives',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'noise-vibration-groundworks',
    title: 'Noise and vibration exposure',
    hazard: 'Hearing loss or HAVS from plant and hand tools',
    who: 'Groundworkers; Plant operators',
    how: 'Use of breakers, compactors, piling rigs and plant causing high noise/vibration',
    controls: 'Noise/vibration risk assessment completed and results shared with workforce. Planning of work to reduce exposure (quieter equipment, off-site fabrication). Use of low-vibration tools and regular maintenance. Hearing protection zones established. Rotation of operatives to limit HAVS exposure. Health surveillance under Control of Vibration at Work Regs. Training provided on safe tool use and recognition of HAVS symptoms. Compliance monitored by Site Manager under CDM duties.',
    action: 'Supervisor / Site Manager',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'noise-vibration-groundworks',
    title: 'Noise and vibration exposure',
    hazard: 'Hearing loss or HAVS from plant and hand tools',
    who: 'Groundworkers; Plant operators',
    how: 'Use of breakers, compactors, piling rigs and plant causing high noise/vibration',
    controls: 'Noise/vibration assessments carried out. Hearing protection zones established. Mandatory ear defenders where exposure exceeds limits. Rotation of tasks to reduce exposure. HAVS monitoring and health surveillance in line with company policy. Tools maintained to reduce vibration.',
    action: 'Supervisor / Site Manager',
    init: 'medium',
    resid: 'low'
  },
  {
    id: 'wd-plant-traffic',
    title: 'Willmott Dixon – Vehicles/plant management',
    hazard: 'People struck by moving vehicles/plant.',
    who: 'All personnel; visitors',
    how: 'Mixed routes; reversing; poor competence.',
    controls: 'Segregation; route design; banksman only where unavoidable; competence & maintenance; monitoring.',
    action: 'Plant Manager – Site Manager',
    init: 'high', resid: 'low'
  }

];

/* UK construction hazard snippet library (vanilla JS) */
window.hazardSnippets = [
    {
    id: 'work-at-height',
    title: 'Work at height (Installing Bracketry)',
    hazard: 'Falling Objects, head collision with fixed objects, e.g. steelwork, pipework, building structure etc.',
    who: 'MVL Employees; Other Trade contractors',
    how: 'Unfinished/Unfixed ductwork or bracketry whilst being installed potentially falling from height, whilst working at height clashing with objects',
    controls: 'Ensure operatives are provided with and wear always on site suitable hard hat protection and are aware of statutory requirements for use. Also use of mechanical lifting equipment and a wide working platform. Tools to be tethered whilst being used when working at height.',
    action: 'Supervisor – Operatives',
    init: 'medium',
    resid: 'low'
  },
   {
    id: 'RA01_Falls_From_Height',
    title: 'RA01 Falls from height (ladders)',
    hazard: 'Fall from height using ladders',
    who: 'Employees, 3rd parties',
    how: 'Working from/ascending ladders; overreaching; defective/incorrect ladder',
    controls: 'Use Grade 1 ladders in good condition; ladders are for access only; maintain 3 points of contact; set up to avoid overreach; foot when erecting and tie off; keep rungs clean; inspect/clean regularly.',
    action: 'Supervisor',
    init: 'high',
    resid: 'low'
  },
   {
    id: 'cuts-metal',
    title: 'Cuts from bare edges of metal',
    hazard: 'Cuts from bare edges of metal.',
    who: 'MVL Employees',
    how: 'Carrying or install of sheet metal/spiral wound ductwork',
    controls: 'Cut 5 resistance gloves are mandatory and to be worn always; these will also protect from cuts when handling ductwork. Long sleeves/gauntlets to be worn whilst carrying or installing ductwork with \'bare edges\'.',
    action: 'Supervisor / Luke Watson',
    init: 'low',
    resid: 'low'
  },
   {
    id: 'hearing-noise',
    title: 'Noise affecting hearing',
    hazard: 'Noises affecting hearing',
    who: 'MVL Employees',
    how: 'Use of power tools and whilst installing ductwork',
    controls: 'Operatives are provided with ear defenders for use whilst using power tools producing noises over 80db and are mandatory when the ELV is above 87db whilst installing.',
    action: 'Supervisor / Luke Watson',
    init: 'medium',
    resid: 'low'
  }

];
console.log('✅ RA snippets loaded:', window.SNIPPETS["RA Hazards"] ? window.SNIPPETS["RA Hazards"].length : 0, 'snippets');