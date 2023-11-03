// styled-components전용 공통 
export const fonts = {
  size18:18,
  size: 16,
  size14: 14,
  size12: 12,
  weight: 550,
  bold: 600,
  font: "NanumGothic",
  fontB: "NanumGothicBold",
  fontL: "NanumGothicLight",
}

export const breakpoints = {
  maxPc: 1920,
  pc : 1440,
  table : 1140,
  mo : 768,
  onlyMo: 450,
}

export const media = {
  onlyPc : `@media screen and (min-width:${breakpoints.table + 'px'})`,
  pc: `@media screen and (min-width:${breakpoints.mo-1 + 'px'})`,
  tab: `@media screen and (min-width:${breakpoints.mo + 'px'}) and (max-width: ${breakpoints.table-1 + 'px'})`,
  mo: `@media screen and (max-width:${breakpoints.mo-1 + 'px'})`,
  onlyMo: `@media screen and (max-width:${breakpoints.onlyMo-1 + 'px'})`,
} 

export const colors = {
  // Color 
  baseWhite: "#ffffff",
  baseBlack: "#000000",
  balck222: "#222222",
  whitef8f9fc: "#f8f9fc",
  // point
  green38a899:"#38a899",
  yellowf1cb45:"#f1cb45",
  blue327eea:"#327eea",
  redee8392c:"#e8392c",
  // bg Color 
  bgGreen113536: "#113536",
  // Text Color
  textColor:"#191f28",
  subTextColor:"#868686",
  // Line Color
  lineColor:"#dbdbdb",
}

// transition
export const transitions = {
  base: "all .3s",
}
