import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { sSetMobileChk } from "store/store";
import styled from "styled-components";
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
    <div className="wrap">
      <div className="container">
        TEST 중입니다.
        <TestBox>
          <p>tsetsetsetsetsetsetset</p>
          <p>tsetsetsetsetsetsetset</p>
          <p>tsetsetsetsetsetsetset</p>
          <p>tsetsetsetsetsetsetset</p>
          <p>tsetsetsetsetsetsetset</p>
          <p>tsetsetsetsetsetsetset</p>
          <p>tsetsetsetsetsetsetset</p>
          <p>tsetsetsetsetsetsetset</p>
          <p>tsetsetsetsetsetsetset</p>
          <p>tsetsetsetsetsetsetset</p>
        </TestBox>  
        {/* <Outlet context={location} /> */}
      </div>
    </div>
  )
}
export default RiotMain;


const TestBox = styled.div`
  overflow: auto;
  width:100%;
  max-width:300px;
  height:100px;
  margin:0 auto;
  border:1px solid red;
  box-sizing:border-box;
  
`;