import { useCallback, useEffect, useState } from "react";
import Search from "component/common/Search";
import styled from "styled-components";
import { colors, transitions } from "assets/styles/Variable";
import { LOL_API_SUMMONER } from "constants/ApiConfig";
import { loadAxios } from "utils/api";

  const TESTNAME ="게보린";

  const MainSearch = () => {
  const [mouseOn, setMouseOn] = useState(false);

  const loadData = useCallback(async () => {
    const res = await loadAxios(LOL_API_SUMMONER(TESTNAME));
    console.log(res.data)
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const searchResult = (e) => {
    console.log(e)
  }

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
        {/* 유저 검색 */}
        <UserSerach>
          <Search placeholder="소환사명" mouseAction={setMouseOn} propsEvent={searchResult}/>
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


