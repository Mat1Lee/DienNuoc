import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { GIA_DIEN,GIA_NUOC } from "../../context/redux/types/QuanLyDienNuocTye";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = (props) => {

 console.log(props?.tableDta)
   
  const data1=[]
   
  props.tableDta?.map((data,index)=>{
    
    data1?.push({'name':data?.key , 'Total':(data?.data.Dien*GIA_DIEN)+(data?.data.Nuoc*GIA_NUOC)})
  
  
  })

 const renderPrice=()=>{
   let stt = [...data1].pop() 
      const last = data1[data1?.length - 2]
      const value = Number(stt?.Total/last?.Total).toFixed(2)*100
      // console.log(last);
    return  ({value,stt});
  }
  

  


 
//  console.log(value)
// const value = 40;
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Mức năng lượng tiêu thụ so với ngày trước</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <div className="cycleValue">
             <CircularProgressbar value={renderPrice().value} text={`${renderPrice().value}%`}  strokeWidth={5}/>
              
             
          </div>
         
          
        </div>
        <p className="title">Tổng số điện nước  </p>
        <p className="amount">{renderPrice().stt?.Total}</p>
        <p className="desc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit vitae sunt perferendis? Repudiandae, eos quas!
        </p>
        <div className="summary">
          
          
        </div>
      </div>
    </div>
  );
};

export default Featured;
