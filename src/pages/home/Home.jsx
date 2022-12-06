import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { useDispatch,useSelector } from "react-redux";
import { GIA_DIEN,GIA_NUOC } from "../../context/redux/types/QuanLyDienNuocTye";
import { useEffect } from "react";
import { dataRemainingSelector } from "../../context/store/selector";
import { QuanLyDienNuocAction,QuanLyDienNuocThangAction } from "../../context/redux/actions/QuanLyDienNuocAction";
const Home = (props) => {
  const dispatch=  useDispatch();
  const {tableDataDefault,tableDataMonth} = useSelector(state=>state.QuanLyDienNuocReducer)
  // console.log('table',tableDataDefault);
  console.log('Month: ',tableDataMonth);
  useEffect(()=>{
    dispatch(QuanLyDienNuocAction())
    dispatch(QuanLyDienNuocThangAction())
  },[])
  const dataBiding =[] 
  //  console.log(records)
  tableDataDefault?.map((data)=>{
   
      dataBiding.push({'date':data?.key , 'Dien':data.data.Dien , 'Nuoc':data.data.Nuoc})
  
  
  })

  

  const xulyData=(myArray,chunk_size)=>{
    let results = [];

    while (myArray.length) {
        results.push(myArray.splice(0,chunk_size));
    }

    return results
  }
  const dataDefault = xulyData(dataBiding,30)
  // console.log('first',dataDefault) 
  const dataDienNuoc=[]
  // tableDataDefault?.map((data,index)=>{
  //   dataDienNuoc?.push({'date':data?.key , 'Total':(data?.data.ToTal.Dien*GIA_DIEN)+(data?.data.ToTal.Nuoc*GIA_NUOC)})
  // })

  // console.log('Home',dataDienNuoc)
 
  return (
    <div className="home">
     
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets row">
          
          <Widget className='col-md-6' props={tableDataMonth} type="order" />
        
        </div>
        <div className="charts">
          <Featured tableDta={tableDataMonth}/> 
          <Chart props={tableDataMonth} title="Last 6 Months (Nghìn Đồng)" aspect={2 / 1} />
         
        </div> 
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table data={dataDefault}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
