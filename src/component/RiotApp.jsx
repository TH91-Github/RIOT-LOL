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
        <TestWrap>
          <div className="test">
            <span>testsetset</span>
            <span>testsetset</span>
            <span>testsetset</span>
            <span>testsetset</span>
            <span>testsetset</span>
            <span>testsetset</span>
            <span>testsetset</span>
            <span>testsetset</span>
            <span>testsetset</span>
          </div>
        </TestWrap>
        <Outlet context={location} />
      </div>
    </div>
  )
}
export default RiotMain;

const TestWrap = styled.div`
  overflow-y:hidden;
  overflow-x:auto;
  position:absolute;
  top:50px;
  left:50%;
  transform: translateX(-50%);
  width:300px;
  height:30px;
  background:#999;
  border:1px solid red;

  &::-webkit-scrollbar-track {
    border-radius: 3px;
    background-color: black;
  }
  &::-webkit-scrollbar {
    width: 10px;
    height:5px;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: red;
  }

  .test {
    display:flex;
    gap:10px;
    align-items:center;
    height:100%;
    &> span{
      padding:0 10px;
      border:1px solid green;
      border-radius:10px;
    }
  }
`;