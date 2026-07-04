/* Shared list of the CERT Basic Training reference sections.
   base = filename stem; the deck is <base>.pptx and (when provided) <base>.pdf.
   Used by reference.html (card grid) and viewer.html (in-site viewer). */
const REF_SECTIONS = [
  { n:1, name:"Disaster Preparedness",          base:"section_01_unit_1_ppt_508", icon:"🏠" },
  { n:2, name:"Fire Safety & Utility Controls", base:"section_02_unit_2_ppt_508", icon:"🔥" },
  { n:3, name:"Disaster Medical Ops — Part 1",  base:"section_03_unit_3_ppt_508", icon:"🏥" },
  { n:4, name:"Disaster Medical Ops — Part 2",  base:"section_04_unit_4_ppt_508", icon:"🩺" },
  { n:5, name:"Light Search & Rescue",          base:"section_05_unit_5_ppt_508", icon:"🔍" },
  { n:6, name:"CERT Organization",              base:"section_06_unit_6_ppt_508", icon:"🗂️" },
  { n:7, name:"Disaster Psychology",            base:"section_07_unit_7_ppt_508", icon:"🧠" },
  { n:8, name:"Terrorism & CERT",               base:"section_08_unit_8_ppt_508", icon:"💥" },
];
