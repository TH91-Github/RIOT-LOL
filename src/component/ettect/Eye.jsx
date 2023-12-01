import { colors, transitions } from "assets/styles/Variable";
import styled from "styled-components";

function Eye ({mouseOn, error}) {
  // console.log("Eye Component !")
  return (
    <EyeWrap className={`${mouseOn ? "on" : ''} ${error ? "error" : ''}`}>
      <EyeBox className="eye__box">
        <EyeL className="left"/>
        <EyeR className="right"/>
      </EyeBox>
      <EyeBox className="eye__box">
        <EyeL className="left"/>
        <EyeR className="right"/>
      </EyeBox>
    </EyeWrap>
  )
}
export default Eye;


const EyeWrap = styled.div`
  display:flex;
  gap:80px;
  position:relative;
  padding: 32px 0;
  margin:0 auto 50px;
  &.on {
    .eye__box {
      & > * {
        background: ${colors.yellow};
        &::before {
          border-right: 16px solid ${colors.yellow};
        }
        &::after {
          border-left: 16px solid ${colors.yellow};
        }
      }
    }
  }
  &.error {
    .eye__box {
      position:relative;
      &>span {
        position:absolute;
        top: 50%;
        left: 50%;
        background: ${colors.red};
        &.left {
          transform: translate(-50%, -50%) rotate(-45deg);
          &::before, &::after {
            border-color:${colors.red};
          }
        }
        &.right {
          transform: translate(-50%, -50%) rotate(45deg);
          &::before, &::after {
            border-color:${colors.red};
          }
        }
      }
    }
  }
`;
const EyeBox = styled.div`
  display:flex;
  width:160px;
`;
const EyeBase = styled.span`
  display:inline-block;
  width: 50%;
  height: 32px;
  background: ${colors.green};
  position: relative;
  transition:${transitions.base};
  &::before, &::after {
    position: absolute;
    content: "";
    top: 0;
    width: 0;
    height: 0;
    border-top: 16px solid transparent;
    border-bottom: 16px solid transparent;
    transition:${transitions.base};
  }
  &::before {
    left: -15px;
    border-right: 16px solid ${colors.green};
  }
  &:after {
    right: -15px;
    border-left: 16px solid ${colors.green};
  }
`;
const EyeL = styled(EyeBase)`
  transform: rotate(-45deg);
`; 
const EyeR = styled(EyeBase)`
  transform: rotate(45deg);
`;
