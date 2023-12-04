import { useState } from "react";
import { useDispatch } from "react-redux";
import { sSetUserData } from "store/store";
import { useNavigate } from "react-router-dom";
import { LOL_API_LEAGUE, LOL_API_MATYCH_ID, LOL_API_SUMMONER } from "constants/ApiConfig";
import { loadAxios } from "utils/api";
import Search from "component/common/Search";
import styled from "styled-components";
import Eye from "component/ettect/Eye";


function MainSearch () {
  const [mouseOn, setMouseOn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const loadData = async (searchName) => {
    setLoading(true);
    const upLoadData = {
      info : null,
      league : null,
      match : null,
      gameInfo : null
    }
    try {
      // 1차 유저 이름 검색 - 기본 정보
      const userInfo = await loadAxios(LOL_API_SUMMONER(searchName));
      upLoadData.info = userInfo.data;
      // 2차 유저 리그 정보
      const userLeague = await loadAxios(LOL_API_LEAGUE(userInfo.data.id));
      upLoadData.league = userLeague.data;
      // 3차 매치 정보
      const userMatchId = await loadAxios(LOL_API_MATYCH_ID(userInfo.data.puuid))
      upLoadData.match = userMatchId.data;
      dispatch(sSetUserData(upLoadData))
    
      setLoading(false);
      setError(false);
      console.log("소환사 검색 성공");
      navigate(`/summoners/kr/${upLoadData.info.name}-KR1`); // 페이지 이동
    }catch(error){
      console.log(error);
      setError(true);
    }
  };
  
  const searchResult = (e) => { // 검색을 받아온다 -> 유저 정보
    console.log(e);
    loadData(e);
  }
  return (
    <MainSearchWrap>
      <MainSearchInner>
        {/* 눈 모양 */}
        <Eye mouseOn={mouseOn} error={error}/>
        {/* 유저 검색 */}
        <UserSerach>
          <Search placeholder="소환사명" mouseAction={setMouseOn} propsEvent={searchResult} />
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


