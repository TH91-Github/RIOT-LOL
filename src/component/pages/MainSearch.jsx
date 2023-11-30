import { useCallback, useState } from "react";
import Search from "component/common/Search";
import styled from "styled-components";
import { colors, transitions } from "assets/styles/Variable";
import { LOL_API_SUMMONER } from "constants/ApiConfig";
import { loadAxios } from "utils/api";

  const MainSearch = () => {
  const [mouseOn, setMouseOn] = useState(false);
  const [error, setError] = useState(false);

  const API_KEY = process.env.REACT_APP_API_KEY;

  const loadData = useCallback(async (searchName) => {
    // const res = await loadAxios(LOL_API_SUMMONER(searchName));
    const res = await loadAxios(`https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/1lYtsnwkGp_0E2o1M6hZIj38IAxiXwFIdV_H0z1aLRDQ8w?api_key=${API_KEY}`);
    console.log(res.data)
  }, []);
  
  const searchResult = (e) => { // 검색을 받아온다 -> 유저 정보
    console.log(e)
    loadData(e)
  }
  
  return (
    <MainSearchWrap>
      <MainSearchInner>
        {/* 눈 모양 */}

        {/* <EyeWrap className={mouseOn && "on"}>
          <EyeBox className="eye__box">
            <EyeL />
            <EyeR />
          </EyeBox>
          <EyeBox className="eye__box">
            <EyeL />
            <EyeR />
          </EyeBox>
        </EyeWrap> */}
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


