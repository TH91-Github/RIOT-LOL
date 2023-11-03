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

export const ranDom = (_max, name) => { // 랜덤 값 (최대 값, 이름지정_랜덤 값) 
  let newId =  Math.floor(_max === undefined
    ? Math.random() * 2000
    : Math.random() * Number(_max + 1)
  );
  if(name !== undefined ) newId = `${name}_${newId}`;
  return newId;
}

export const regExpChk = (val) => {
  //eslint-disable-next-line
  const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi; // 띄어쓰기 허용 /[ \
  if(regExp.test(val)){
    alert("특수문자를 입력할 수 없습니다")
    val = val.substring( 0 , val.length - 1 );
  }
  return val;
}

// etc 
export const TextChange = (text) => {
  if(!text) return;
  let textLine = text.replaceAll(/\n/g, "<br />");
  let resultText = textLine.replaceAll("className","class");
  return resultText;
}

export function TextBr (text) {  // br 태그 삽입
  if(!text) return;
  const brTag ="<br />";
  // 변경 값을 \n 으로 하고 css : white-spase: pre-wrap; 사용 가능
  const brChange = text.replaceAll(/(<br>|<br\/>|<br \/>|<\/br>|\r|\n)/gi, brTag).split(brTag);
  const newBr = brChange.filter(item => item.length > 0); // 공백 배열 요소 제거
  return newBr.reduce((prevText, currentText) => {
    return <>{prevText} <br />{currentText.trim()}</>
  })
}