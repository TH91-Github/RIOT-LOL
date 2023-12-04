import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Search from "component/common/Search";
import * as S from "component/pages/styled/SummonersStyled";
import { useEffect } from "react";

function Summoners () {
  const params = useParams();
  const user = useSelector((state) => state.userData ); // 소환사 정보
  console.log(user)

  // const loadData = async (searchName) => {
  //   setLoading(true);
  //   const upLoadData = {
  //     info : null,
  //     league : null,
  //     match : null,
  //     gameInfo : null
  //   }
  //   try {
  //     // 1차 유저 이름 검색 - 기본 정보
  //     const userInfo = await loadAxios(LOL_API_SUMMONER(searchName));
  //     upLoadData.info = userInfo.data;
  //     // 2차 유저 리그 정보
  //     const userLeague = await loadAxios(LOL_API_LEAGUE(userInfo.data.id));
  //     upLoadData.league = userLeague.data;
  //     // 3차 매치 정보
  //     const userMatchId = await loadAxios(LOL_API_MATYCH_ID(userInfo.data.puuid))
  //     upLoadData.match = userMatchId.data;
  //     dispatch(sSetUserData(upLoadData))
  //     setLoading(false);
  //     setError(false);
  //     console.log("소환사 검색 성공");
  //     navigate(`/summoners/kr/${upLoadData.info.name}-KR1`); // 페이지 이동
  //   }catch(error){
  //     console.log(error);
  //     setError(true);
  //   }
  // };

  useEffect(()=> { // 유저 정보가 없다면 불러오기

  },[user])

  const searchResult = (e) => { // 검색을 받아온다 -> 유저 정보
    console.log(e);
    // loadData(e);
  }

  return (
    <S.Summoners>
      <S.SummonersInner>
        {/* 검색 */}
        <div className="summoners__search">
          <Search className="inner" placeholder="플레이어 이름" propsEvent={searchResult} />
        </div>
        <div className="content">
          {/* 소환사 정보 */}
          <div className="user">

          </div>
          {/* 전적 */}
          <div className="games">
            <div className="games__type">
              <ul className="games__type__tab">
                <li className="games__type__tab-item">
                  <button type="button">전체</button>
                </li>
              </ul>
            </div>
            <div className="games__lists">
              <ul className="games__lists">
                <li className="games__lists-item">
                  <div>

                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </S.SummonersInner>
    </S.Summoners>
  )
}
export default Summoners;