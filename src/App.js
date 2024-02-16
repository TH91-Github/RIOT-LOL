import RiotApp from 'component/RiotApp';
import './App.css';
import { GlobalStyles } from './assets/styles/GlobalStyles';
import styled from 'styled-components';
import { useState } from 'react';

function App() {
  const [focusIn, setFocus] = useState(false);

  const isFocus = () => {
    setFocus(true);
  }
  const outFocus = () => {
    setFocus(false);
  }

  return (
    <div className="App">
      <GlobalStyles />
      {/* <RiotApp /> */}

      <Wrap className={focusIn ? 'focus': ''}>
        <BoxWrap1>
          <input 
            type="text" 
            onFocus={()=>isFocus()}
            onBlur={()=>outFocus()}
            className="input" />
        </BoxWrap1>
        <BoxWrap1 $borderColor="yellow">
          2번 박스
        </BoxWrap1>
        <BoxWrap1 $borderColor="pink">
          3번 박스
        </BoxWrap1>
        <div>
          <button className="btn"> 충전이 곧 완료됩니다.</button>
        </div>
      </Wrap>
    </div>
  );
}

export default App;

const Wrap = styled.div`
  display:flex;
  flex-direction:column;
  position:relative;
  width:300px;
  height:100vh;
  margin:0 auto;
  border:1px solid red;
  text-align:center;
  .input {
    height:30px;
    margin:50px auto 0;
  }
  .btn {
    width:100%;
    height:50px;
    background:#000;
    color:#fff;
  }
  &.focus {
    .btn {
      position:fixed;
      bottom:0;
      left:0;
    }
  }
`;

const BoxWrap1 = styled.div`
  height:200px;
  border:1px solid ${props => props.$borderColor || 'green'};
`;