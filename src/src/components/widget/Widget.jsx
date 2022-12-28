import "./widget.scss";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { giaSoDien,giaSoNuoc } from "../priceprovider/Priceprovider";
import { QuanLyDienNuocAction,QuanLyDienNuocThangAction,ActionsValue,HanMucAction } from "../../context/redux/action/QuanLyDnAction";
import { GIA_DIEN_1,GIA_NUOC1 } from "../../context/redux/types/AdminTypes";
const Widget = ({ props }) => {

 console.log(props)
  const lg = props.length
  console.log(lg);
 
    // let {tableDataDefault} = useSelector(state=>state.QuanLyDienNuocReducer);
const iTem = props[lg-2]   
// console.log(iem)
    
  
const tinhGiaTien =()=>{


 const lastItem = [...props].pop() // toan tu Spread
  console.log(lastItem);
const amount = giaSoDien(lastItem?.data.Dien);
  const amount1 =giaSoNuoc(lastItem?.data.Nuoc);
  const diff1 = Math.round((lastItem?.data.Dien)/(iTem?.data.Dien))*100

  return {amount,amount1,diff1}
}
  
// const diff1 = ;
  return (
    <>
     <div className="widget col-md-6">
      <div className="left">
        <span className="title">Tiền Điện(Nghìn VND)</span>
        <span className="counter">
          {/* {lastItem?.data.Dien*GIA_DIEN} VND */}
          {tinhGiaTien().amount} VND

        </span>
        {/* <span className="link">{data.link}</span> */}
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {tinhGiaTien().diff1} %
        </div>
        {/* {data.icon} */}
      </div>
    </div>
    <div className="widget col-md-6">
      <div className="right">
        <span className="title">Tiền Nước(Nghìn VND)</span>
        <span className="counter">
          {/* {lastItem?.data.Nuoc*GIA_NUOC} VND */}
          {tinhGiaTien().amount1} VND

        </span>
        {/* <span className="link">{data.link}</span> */}
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {tinhGiaTien().diff1} %
        </div>
        {/* {data.icon} */}
      </div>
    </div>
    </>
  );
};

export default Widget;
