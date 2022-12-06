const InitializeState ={
  tableDataDefault :[],
  tableDataMonth:[],
  arrUser:[]

}

export const QuanLyDienNuocReducer =(state=InitializeState,action)=>{
  switch (action.type) {
    case 'LAY_THONG_TIN_DN':
      state.tableDataDefault=action.dienNuoc
       
      return {...state}
    case 'LAY_THONG_TIN_DN_M':
      state.tableDataMonth=action.dienNuoc
      
      return {...state}
  
    default:
      return {...state}
  }

}