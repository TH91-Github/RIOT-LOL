import { configureStore, createSlice } from '@reduxjs/toolkit'

const allData = createSlice({
  name: "Data Load",
  initialState: [],
  reducers: {
    sSetDataAll(state, propsName){
      return state = propsName.payload;
    }
  }
})

const mobileChk = createSlice({ // mobile 체크
  name: "Mobile check",
  initialState: false,
  reducers: {
    sSetMobileChk(state, propsName){
      return state = propsName.payload;
    }
  }
})

export default configureStore({
  reducer: { 
    allData: allData.reducer,
    mobileChk: mobileChk.reducer,
  }
}) 

export const { sSetDataAll } = allData.actions;
export const { sSetMobileChk } = mobileChk.actions;