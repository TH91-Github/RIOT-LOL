import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { sSetMobileChk } from "store/store";
// import { loadAxios } from "utils/fetchAxios";
import { isMobile } from "utils/common.js"
const RiotMain = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  // Resize
  const handleReSize = useCallback(()=> {
    let moState = isMobile();
    dispatch(sSetMobileChk(moState))
  },[dispatch])

  useEffect(() => {
    handleReSize();
    window.addEventListener("resize", handleReSize);
    return () => {
      window.removeEventListener("resize", handleReSize);
    };
  }, [handleReSize]);

  return (
    <div className="th__wrap">
      <div className="container">
        <Outlet context={location} />
      </div>
    </div>
  )
}
export default RiotMain;