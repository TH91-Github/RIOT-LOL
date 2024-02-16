import RiotApp from 'component/RiotApp';
import './App.css';
import { GlobalStyles } from './assets/styles/GlobalStyles';
import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [focusIn, setFocus] = useState(false);
  const [heightV, setHeightV] =useState(0);

  const isFocus = () => {
    // setFocus(true);
  }
  const outFocus = () => {
    // setFocus(false);
  }

  const fullHeight = useRef(0);
  useEffect(() => {
    const handleVisualViewportResize = () => {
      // aOS에서 키패드가 노출된 경우
      
          console.log(window.innerHeight)
          setHeightV(window.innerHeight);
      }
      
      fullHeight.current = window.innerHeight;
      visualViewport.addEventListener('resize', handleVisualViewportResize);
      
      return () => visualViewport.removeEventListener('resize', handleVisualViewportResize);
  }, [])

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
            {heightV}
        </BoxWrap1>
        <BoxWrap1 $borderColor="yellow">
          2번 박스
        </BoxWrap1>
        <BoxWrap1 $borderColor="pink">
          3번 박스
        </BoxWrap1>
        <BoxHeight className="btn-box" $height={heightV}>
          <button className="btn"> 충전이 곧 완료됩니다.</button>
        </BoxHeight>
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
    .btn-box {
      .btn{
       
      }
    }
  }
`;

const BoxWrap1 = styled.div`
  height:200px;
  border:1px solid ${props => props.$borderColor || 'green'};
`;

const BoxHeight = styled.div`
  position:fixed;
  top:0;
  left:0;
  width:100%;
  pointer-events : none;
  height:${props => `${props.$height}px` || `height:100svh`};
  .btn{
    position:absolute;
    left:0;
    bottom:0;
  }
`;