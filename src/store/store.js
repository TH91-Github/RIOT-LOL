import { configureStore, createSlice } from '@reduxjs/toolkit'

const userData = createSlice({
  name: "Data Load",
  initialState: [],
  reducers: {
    sSetUserData(state, propsName){
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
    userData: userData.reducer,
    mobileChk: mobileChk.reducer,
  }
}) 

export const { sSetDataAll } = userData.actions;
export const { sSetMobileChk } = mobileChk.actions;