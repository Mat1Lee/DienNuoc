
import StartFireBase from "../../../fireBase/FireBase-congig";
import { onValue, ref, set } from 'firebase/database'
const db = StartFireBase();
let refer = 'DienNuoc'
// const refer1 = ''
const ref2 = 'CaiDat'
const ref3 = 'HanMuc'
const dataref = [{
  date: 'Total/Thang1',

},
{
  date: 'Total/Thang2',

},
{
  date: 'Total/Thang3',

},
{
  date: 'Total/Thang4',

},
{
  date: 'Total/Thang5',

},

{
  date: 'Total/Thang7',

},

{
  date: 'Total/Thang8',

},
{
  date: 'Total/Thang9',

},
{
  date: 'Total/Thang10',

},
{
  date: 'Total/Thang11',

},
{
  date: 'Total/Thang12',

},


]
export const QuanLyDienNuocAction = () => {


  return async dispatch => {
    try {
      const dbRef = ref(db, refer);
      onValue(dbRef, (snapshot) => {
        let records = []
        snapshot.forEach((childSnapshot) => {
          let keyName = childSnapshot.key;
          let data = childSnapshot.val();

          records.push({ 'key': keyName, 'data': data })

          // console.log('records',records.key);
        },

        );

        dispatch({
          type: 'LAY_THONG_TIN_DN',
          dienNuoc: records
        })
      }

      )


    } catch (error) {

    }
  }
}
export const QuanLyDienNuocThangAction = () => {
const records = []

  return async dispatch => {
 try {
  dataref.map((refer1) => {
    
      const dbRef = ref(db, refer1.date);
      
      onValue(dbRef, (snapshot) => {
        
        snapshot.forEach((childSnapshot) => {
          let keyName = childSnapshot.key;
          let data = childSnapshot.val();
          // console.log(data)
          records.push({ 'key': keyName, 'data': data })

          
        },
         
        );
       

      }
 
      ) 
     
      console.log(records)
    } 
    
    )
  //   const dataBiding =[] 
   
  //  records?.map((data)=>{
   
  //     dataBiding.push({'name':data?.key , 'Dien':data.data.Dien , 'Nuoc':data.data.Nuoc})
  
  
  // })
  // console.log('records', dataBiding);
dispatch({
  type:'LAY_THONG_TIN_DN_M',
  dienNuoc: records
})



 } catch (error) {
  
 }
    
  }
  

}
export const CaiDatThoiGianAction = (values) => {
  return async dispatch => {
    try {



      set(ref(db, ref2), {
        gio: values.gio,
        phut: values.phut,

      });


    } catch (error) {

    }
  }
}
export const CaiDatVlaueAction = (values) => {
  console.log(values.hanMuc)
  return async dispatch => {
    try {



      set(ref(db, ref3), {
        HanMuc: values.hanMuc

      });


    } catch (error) {

    }
  }
}
export const DangNhapAction = (values)=>{

}
// export const CaiDatVlaueAction=(values)=>{
//   return async dispatch => {
//     try {
//       set(ref(db, ref3),{
//         HanMuc: values.hanMuc
//       });

//     } catch (error) {
      
//     }
//   }
// }
