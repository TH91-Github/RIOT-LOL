import React, { useState } from 'react';
import * as SC from "component/common/styled/AllStyled";
import styled from 'styled-components';
import { colors, fonts, transitions } from 'assets/styles/Variable';
import { SvgSearch } from 'assets/styles/SvgPath';

function Search({placeholder, btnText, propsEvent}){
  const [isFocus, setIsFocus] = useState(false);
  const [val, SetVal] = useState('');

  const focusIn = (e) => {
    setIsFocus(true)
  }
  const focusOut = (e) => {
    if(val.length>0){
      console.log("있네")
    }else{
      console.log("없네")
      setIsFocus(false);
    }
  }
  const inputChange = (e) => {
    SetVal(e.target.value)
  }
  const buttonClick = () => {
    propsEvent && propsEvent(val)
    SetVal(''); // 초기화
  }
  const keyUp = (e) => {
    e.key === 'Enter' && buttonClick();
  }
  return (
    <SearchWrap className={'search ' + (isFocus?'focusOn':'')}>
      {isFocus}
      <SearchInputBox>
        <SearchInput 
          id="search-input"
          className="search-input"
          placeholder={placeholder !== undefined ? placeholder : "입력해주세요"} 
          value={val} 
          onFocus={(e) => focusIn(e)}
          onBlur={(e)=> focusOut(e)}
          onChange={(e)=>inputChange(e)} 
          onKeyUp={keyUp} />
          <SearchLabel htmlFor="search-input">Search</SearchLabel>
      </SearchInputBox>
      <SearchBtn 
        className="search-btn"
        onFocus={focusIn}
        onBlur={focusOut}
        onClick={buttonClick}
        onKeyUp={keyUp}>
        <SearChIcon className={isFocus && 'focusOn' }>
          <SvgSearch $bgcolor="transparent" $lineColor={isFocus ? colors.green38a899 : colors.baseBlack}/>
        </SearChIcon>
        <SC.Blind>{btnText !== undefined ? btnText : "검색"}</SC.Blind>
      </SearchBtn>
    </SearchWrap>
  )
}
export default Search;

const test = false;
const SearchWrap = styled.div`
  display:flex;
  justify-content:space-between;
  position:relative;
  width:100%;
  height:50px;
  padding:0 25px;
  border-radius:25px;
  border:1px solid ${colors.baseWhite};
  box-shadow: 0 2px 2px rgba(0,0,0,.3);
  transition:${transitions.base};
  &.focusOn {
    border-color:${colors.green38a899};
    .search-input {
      padding-top:0;
      font-size:${fonts.size}px;
      & + label {
        top:-110%;
      }
    }
    .search-btn {
      .border:1px solid ${colors.green38a899};
    }
  }
  &:hover {
    border-color:${colors.yellowf1cb45};
    svg path {
      stroke:${colors.yellowf1cb45};
    }
  }
`;
const SearchInputBox = styled.div`
  overflow:hidden;
  position:relative;
  flex-grow:1;
`;
const SearchLabel = styled.label`
  position:absolute;
  top:4px;
  left:10px;
  transition:${transitions.base};
`;
const SearchInput = styled.input`
  width:100%;
  height:100%;
  padding:25px 0 0 10px;
  font-size:${fonts.size12}px;
  color:${colors.subTextColor};
  transition:${transitions.base};
  border:none;
  outline:0;
`;
const SearchBtn = styled(SC.Button)`
  display:flex;
  align-items:center;
  padding-left:5px;
  outline:0;
  transition:${transitions.base};
  &:focus {
    &>span {
      animation: focusOn 10s ease infinite;
    }
    @keyframes  {
      0%{background-position:97% 0%}
      50%{background-position:4% 100%}
      100%{background-position:97% 0%}
    }
  }
`;
const SearChIcon = styled.span`
  display:inline-block;
  width:30px;
  height:30px;
  transition:${transitions.base};

  &::before, &::after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: '';
    z-index: -1;
    margin: -5%;
    border:3px solid rgba(105, 202, 98, 0.5);
    animation: clipMe 8s linear infinite;
  }
  &::before {
    animation-delay: -4s;
  }
  @keyframes clipMe {
    0%, 100% {
      clip: rect(0px, 30px, 2px, 0px);
    }
    25% {
      clip: rect(0px, 2px, 30px, 0px);
    }
    50% {
      clip: rect(28px, 30px, 28px, 0px);
    }
    75% {
      clip: rect(0px, 30px, 30px, 28px);
    }
  }



  transform: scale(0);
  &.focusOn {
    transform: scale(1);
  }
`;
