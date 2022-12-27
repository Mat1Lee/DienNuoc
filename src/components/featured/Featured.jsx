import "./featured.scss";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { CircularProgressbar } from "react-circular-progressbar";
import { GIA_DIEN_1,GIA_NUOC1 } from "../../context/redux/types/AdminTypes";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { QuanLyDienNuocThangAction,ValueNowAction,ActionsStatus,HanMucAction } from "../../context/redux/action/QuanLyDnAction";
import { useDispatch,useSelector } from "react-redux";
import { useEffect,useState } from "react";
const Featured = (props) => {
  console.log(props)
  const dispatch = useDispatch();
  const {dataNow,hanMuc} = useSelector(state=>state.QuanLyDienNuocReducer)
  console.log('data',hanMuc)
  const [state,setState]=useState(false)
  useEffect(()=>{
      dispatch(ValueNowAction())
      dispatch(HanMucAction())
      // 
      
  },[])
  const handleClick =() =>{
    setState(!state)
  dispatch(ActionsStatus(true))
  console.log('state', state)
  }
  


const value1 = dataNow?.Dien + dataNow?.Nuoc

const price =  dataNow?.Dien*GIA_DIEN_1 + dataNow?.Nuoc*GIA_NUOC1
const num = Math.round((value1/hanMuc)*100)
const changeTt=()=>{
  if(num>=100){
    return <>
    <p style={{color:'red'}}>Giá trị vượt mức cảnh báo</p></>
  }
  
  let title =''
  if(num>100) title='()'
  else title ='(Giá trị đang ở dưới mức cảnh báo)'
  return title
}
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Số điện, nước hôm nay</h1>
        <RestartAltIcon onClick={()=>{
          handleClick()
        }} fontSize="small" style={{cursor:'pointer'}} />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={num} text={`${num}%`} strokeWidth={5} />
        </div>
        <p className="title"> {changeTt()}</p>
        <p>Thành Tiền: </p>
        <p className="amount">{price} Nghìn Đồng</p>
        <p className="desc">
         
        </p>
        <div className="summary">
         
          <div className="item">
            <div className="itemTitle">Số điện</div>
            <div className="itemResult positive">
              {/* <KeyboardArrowUpOutlinedIcon fontSize="small"/> */}
              <div className="resultAmount">{dataNow?.Dien}</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Số nước</div>
            <div className="itemResult positive">
              {/* <KeyboardArrowUpOutlinedIcon fontSize="small"/> */}
              <div className="resultAmount">{dataNow?.Nuoc}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
