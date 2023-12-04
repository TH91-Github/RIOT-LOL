const { breakpoints } = require("assets/styles/Variable");

export const isMobile = () => { // 모바일 사이즈 체크
  const wininnW = window.innerWidth;
  const scrollbarW = parseInt(wininnW - document.body.clientWidth);
  const winW = parseInt(wininnW - scrollbarW);
  let moChk = false;
  breakpoints.mo <= winW ? moChk = false
  : moChk = true;
  return moChk;
}
