import { colors, transitions } from "assets/styles/Variable";
import axios from "axios";
import Search from "component/common/Search";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";


const MainSearch = () => {
  const [mouseOn, setMouseOn] = useState(false);
   // // TEST
  // const loadAxios = useCallback(async () => {
  //   try {
  //     const res = await axios.get(``,);
  //     console.log(res)
  //     if(res.status === 200){
  //       console.log(res)
  //     }
  //   }catch(error){
  //     console.log(error);
  //   }
  // },[])

  // useEffect(() => {
  //   loadAxios();
  // }, [loadAxios]);
  return (
    <MainSearchWrap>
      <MainSearchInner>
        {/* 눈 모양 */}
        <EyeWrap className={mouseOn && "on"}>
          <EyeBox className="eye__box">
            <EyeL />
            <EyeR />
          </EyeBox>
          <EyeBox className="eye__box">
            <EyeL />
            <EyeR />
          </EyeBox>
        </EyeWrap>
        <UserSerach>
          <Search placeholder="소환사명" mouseAction={setMouseOn}/>
        </UserSerach>
      </MainSearchInner>
    </MainSearchWrap>
  )
}
export default MainSearch;

// styled
const MainSearchWrap = styled.div`
  height:100vh;
  background:#171717;
`;
const MainSearchInner = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  width:100%;
  height:100%;
`;

const UserSerach = styled.div`
  width:100%;
  max-width:600px;
`;

const EyeWrap = styled.div`
  display:flex;
  gap:80px;
  position:relative;
  padding: 32px 0;
  margin:50px auto;
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
`;
const EyeBox = styled.div`
  display:flex;
`;
const Eye = styled.span`
  display:inline-block;
  width: 80px;
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
const EyeL = styled(Eye)`
  transform: rotate(-45deg);
`; 
const EyeR = styled(Eye)`
  transform: rotate(45deg);
`;


