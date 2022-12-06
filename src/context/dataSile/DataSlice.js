import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import StartFireBase from "../../../fireBase/FireBase-congig";
import {onValue, ref} from 'firebase/database'

const db= StartFireBase()
export const dataDienNuoc = createSlice({
  name:'dataDienNuoc',
  initialState:{ status: 'idle', DienNuoc: [] },
  reducers:{
    QuanLyDienNuoc:(state,action)=>{
      const newState =[]
      newState.push(action.payload)
      return {...newState}
    }
  },
  extraReducers:(builder)=>{
    builder
    .addCase(fetchData.pending, (state)=>{
      state.status = 'loading'
    })
    .adCase(fetchData.rejected,(state)=>{
      state.status = 'false'
    })
    .addCase(fetchData.fulfilled,(state,action)=>{
      state.DienNuoc =action.payload;
      state.status = 'idle'
    })
  }
})
const {reducer:dienNuocReducer} = dataDienNuoc
export default dienNuocReducer
export const fetchData =  createAsyncThunk('data/fetchData',
async ()=>{
let records =[]
    const dbRef = ref(db, 'DienNuoc');
     onValue(dbRef, (snapshot)=>{
    
    snapshot.forEach((childSnapshot)=>{
      let keyName = childSnapshot.key;
      let data = childSnapshot.val();
      records.push({'key':keyName,'data':data})
     
    })
     
  })
 return records
 
 
})