import React, { useState } from 'react';
import * as SC from "component/common/styled/AllStyled";
import styled from 'styled-components';
import { colors, transitions } from 'assets/styles/Variable';

const SearchWrap = styled.div`
  display:flex;
  width:100%;
  border-radius:5px;
  box-shadow: 0 5px 10px rgba(203,210,222,.5);
  &:hover {
    .search-input {
      border:1px solid ${colors.yellowf5b800};
    }
    .search-btn {
      background: ${colors.yellowf5b800};
    }
  }
`;
const SearchInput = styled.input`
  display:inline-block;
  width:calc(100% - 30px);
  padding:5px 10px;
  border-top-left-radius:5px;
  border-bottom-left-radius:5px;
  border:1px solid transparent;
  background:${colors.baseWhite};
  transition: ${transitions.base};
  outline:none;
  &:focus {
    border:1px solid ${colors.blue685ef8};
  }
`;
const SearchBtn = styled(SC.Button)`
  width: 50px;
  height: 40px;
  border-top-right-radius:5px;
  border-bottom-right-radius:5px;
  background: ${colors.green3cb062};
  color: ${colors.baseWhite};
  transition: ${transitions.base};
  outline:none;
  &:focus {
    background: ${colors.blue685ef8};
  }
`;
function Search({placeholder, btnText, propsEvent}){
  const [val, SetVal] = useState('');
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
    <SearchWrap className="search">
      <SearchInput 
        className="search-input"
        placeholder={placeholder !== undefined ? placeholder : "입력해주세요"} 
        value={val} 
        onChange={(e)=>inputChange(e)} 
        onKeyUp={keyUp} />
      <SearchBtn 
        className="search-btn" 
        onClick={buttonClick}
        onKeyUp={keyUp} >
        <span>
          {btnText !== undefined ? btnText : "검색"}
        </span>
      </SearchBtn>
    </SearchWrap>
  )
}
export default Search;