import React, { useRef, useState } from 'react';
import * as SC from "assets/styles/AllStyled";
import styled from 'styled-components';
import { colors, fonts, transitions } from 'assets/styles/Variable';
import { SvgSearch } from 'assets/styles/SvgPath';

function Search({placeholder, btnText, propsEvent, mouseAction, ...props}){
  // console.log("Search Component!")
  const [isFocus, setIsFocus] = useState(false);
  const inputFocus = useRef();
  const [val, SetVal] = useState('');
  const focusIn = (e) => {
    setIsFocus(true);
  }
  const focusOut = (e) => {
    !val.length>0 && setIsFocus(false)
  }
  const inputChange = (e) => {
    const nameVal = e.target.value;
    SetVal(nameVal);
  }
  const onMouse = () => {
    mouseAction && mouseAction(true);
  }
  const offMouse = () => {
    mouseAction && mouseAction(false);
  }
  // User Name 1차 필터링 - 앞 뒤 공백 제거, 이름이 두 글자일 경우 사이에 공백 추가
  const userNameChk = () => { 
    let useName = val.trim();
    if(useName.length === 2) {
      useName = useName.charAt(0) +' '+useName.charAt(1);
    }
    return useName
  }
  const onSubmit = (e) => {
    e.preventDefault();
    const filterName = userNameChk();
    filterName === '' 
    ? inputFocus.current.focus()
    :
      propsEvent && propsEvent(filterName)
      SetVal('') // 초기화
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <SearchWrap 
          onMouseEnter={onMouse}
          onMouseLeave={offMouse}
          className={`search ${props.className ? props.className:''} ${isFocus?'focusOn':''}`}
          >
            <SearchInputBox>
              <SearchInput 
                id="search-input"
                className="search-input"
                ref={inputFocus}
                placeholder={placeholder !== undefined ? placeholder : "입력해주세요"} 
                value={val} 
                onFocus={(e) => focusIn(e)}
                onBlur={(e)=> focusOut(e)}
                onChange={(e)=>inputChange(e)}/>
                <SearchLabel className="search-label" htmlFor="search-input">Search</SearchLabel>
            </SearchInputBox>
            <SearchBtn 
              className="search-btn"
              onFocus={focusIn}
              onBlur={focusOut}
              onClick={onSubmit}>
              <SearChIcon className={val.length && 'on' }>
                <SvgSearch $bgcolor="transparent" $lineColor={isFocus ? colors.green : colors.baseBlack}/>
              </SearChIcon>
              <SC.Blind>{btnText !== undefined ? btnText : "검색"}</SC.Blind>
            </SearchBtn>
        </SearchWrap>
      </form>
    </>
  )
}
export default Search;

const SearchWrap = styled.div`
  display:flex;
  justify-content:space-between;
  position:relative;
  width:100%;
  height:50px;
  padding:0 25px;
  border-radius:25px;
  border:1px solid ${colors.baseWhite};
  box-shadow: 1px 2px 2px rgba(0,0,0,.3);
  background:#fff;
  transition:${transitions.base};
  &.focusOn {
    border-color:${colors.green};
    .search-input {
      padding-top:0;
      font-size:${fonts.size}px;
      & + label {
        top:-110%;
      }
    }
    .search-btn {
      &>span {
        transform: scale(1);
      }
    }
  }
  &:hover {
    border-color:${colors.yellow};
    .search-btn {
      &>span {
        transform: scale(1);
        &::before,&::after {
          border-color:${colors.yellow};
        }
        svg path {
          stroke:${colors.yellow};
        }
      }
    }
  }
  &.inner {
    height: 40px;
    padding:0 15px;
    border-radius:0;
    .search-input{
      padding: 0 0 0 10px;
      font-size:14px;
    }
    .search-label{
      display:none;
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
  color:${colors.textColor};
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
`;
const SearChIcon = styled.span`
  display:inline-block;
  position:relative;
  width:30px;
  height:30px;
  transition:${transitions.base};
  transform: scale(0);
  &::before, &::after {
    display:none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: '';
    z-index: -1;
    margin: -5%;
    border:1px solid ${colors.green};
    animation: clipMe 4s linear infinite;
  }
  &::before {
    animation-delay: -2s;
  }
  @keyframes clipMe {
    0%, 100% {
      clip: rect(0px, 33px, 1px, 0px);
    }
    25% {
      clip: rect(0px, 1px, 33px, 0px);
    }
    50% {
      clip: rect(32px, 33px, 33px, 0px);
    }
    75% {
      clip: rect(0px, 33px, 33px, 31px);
    }
  }
  &.on {
    &::before, &::after{
      display:block;
    }
  }
  
`;
