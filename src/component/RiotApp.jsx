import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { sSetDataAll, sSetMobileChk } from "store/store";
// import { loadAxios } from "utils/fetchAxios";
import { isMobile } from "utils/common.js"
const RiotMain = () => {
  // const [baseData, setBaseData] = useState('');
  const location = useLocation();
  const dispatch = useDispatch();

  // // 초기 데이터 변수 저장 및 store 저장
  // const loadData = useCallback(async () => {
  //   const res = await loadAxios("https://raw.githubusercontent.com/TH91-Github/Data_Storage/main/th-blog/data/data.json");
  //   setBaseData(res.data);
  //   console.log(res.data)
  //   dispatch(sSetDataAll(res.data));
  // }, [dispatch]);

  // useEffect(() => {
  //   loadData();
  // }, [loadData]);

  // Resize
  const handleReSize = useCallback(()=> {
    let moState = isMobile();
    dispatch(sSetMobileChk(moState))
  },[dispatch])

  useEffect(() => {
    handleReSize();
    window.addEventListener("resize", handleReSize);
    // window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleReSize);
      // window.removeEventListener("scroll", handleScroll);
    };
  }, [handleReSize]);

  // if(!baseData) return;

  return (
    <div className="th__wrap">
      <div className="container">
        <Outlet context={location} />
      </div>
    </div>
  )
}
export default RiotMain;