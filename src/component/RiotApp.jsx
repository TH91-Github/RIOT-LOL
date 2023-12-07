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
        TEST 중입니다.1
        <p>estsetsetsetsetsetsetsetse</p>
        <p>estsetsetsetsetsetsetsetse</p>
        <p>estsetsetsetsetsetsetsetse</p>
        <p>estsetsetsetsetsetsetsetse</p>
        <p>estsetsetsetsetsetsetsetse</p>
        <p>estsetsetsetsetsetsetsetse</p>
        <p>estsetsetsetsetsetsetsetse</p>
        <p>estsetsetsetsetsetsetsetse</p><p>estsetsetsetsetsetsetsetse</p>
        <p>estsetsetsetsetsetsetsetse</p>
        <p>estsetsetsetsetsetsetsetse</p>
        <p>estsetsetsetsetsetsetsetse</p>
        <p>estsetsetsetsetsetsetsetse</p>
        <p>estsetsetsetsetsetsetsetse</p>
        <p>estsetsetsetsetsetsetsetse</p>
        <p>estsetsetsetsetsetsetsetse</p>
        <TestBox>
          <div className="box">
            <p>estsetsetsetsetsetsetsetse</p>
            <p>estsetsetsetsetsetsetsetse</p>
            <p>estsetsetsetsetsetsetsetse</p>
            <p>estsetsetsetsetsetsetsetse</p>
            <p>estsetsetsetsetsetsetsetse</p>
            <p>estsetsetsetsetsetsetsetse</p>
            <p>estsetsetsetsetsetsetsetse</p>
            <p>estsetsetsetsetsetsetsetse</p>
            <p>estsetsetsetsetsetsetsetse</p>

          </div>
        </TestBox>  
        {/* <Outlet context={location} /> */}
      </div>
    </div>
  )
}
export default RiotMain;


const TestBox = styled.div`
height:100vh;
  .box {
    overflow: auto;
    width:100%;
    max-width:152px;
    height:100px;
    margin:0 auto;
    border:1px solid green;
    box-sizing:border-box;
  }
  background:black;
  color:#fff;
`;