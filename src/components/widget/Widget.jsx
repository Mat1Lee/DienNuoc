import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { GIA_DIEN,GIA_NUOC } from "../../context/redux/types/QuanLyDienNuocTye";

const Widget = ({ type,props }) => {
   console.log(props.data);
  // let data = props?.pop();
  // console.log(data);
  
   let amount =27
   let amount1 =10

  
  //  let data2 = ['345','565','3453','7','24','68','89']
   let data2 = [345,67,323,353,4456,3444];
  //in ra mảng gồm các phần tử đầu tiên là só chẵn

  // tách số thành chuổi
  // tạo hàm tìm kí tự trùng nhau

  const chechkNum=(string)=>{
    let count = 1;
      for(let i= 0;i<=string.length;i++){
      
      }
  }

 const result = data2.filter(item=> `${item}`.charAt(0)%2 === 0)
//  filter trả về một mảng gồm các phần tử thỏa mãn điều kiện 
 console.log(result);
  //temporary
 
  const diff = 20;

  // const amount = 200;

  // switch (type) {
  //   case "user":
  //     data = {
  //       title: "USERS",
  //       isMoney: false,
  //       link: "See all users",
  //       icon: (
  //         <PersonOutlinedIcon
  //           className="icon"
  //           style={{
  //             color: "crimson",
  //             backgroundColor: "rgba(255, 0, 0, 0.2)",
  //           }}
  //         />
  //       ),
  //     };
  //     break;
  //   case "order":
  //     data = {
  //       title: "Tiền Điện",
  //       isMoney: false,
        
  //       icon: (
  //         <ShoppingCartOutlinedIcon
  //           className="icon"
  //           style={{
  //             backgroundColor: "rgba(218, 165, 32, 0.2)",
  //             color: "goldenrod",
  //           }}
  //         />
  //       ),
  //     };
  //     break;
  //   case "earning":
  //     data = {
  //       title: "Tiền Nước",
  //       isMoney: true,
        
  //       // icon: (
  //       //   <MonetizationOnOutlinedIcon
  //       //     className="icon"
  //       //     style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
  //       //   />
  //       // ),
  //     };
  //     break;
  //   case "balance":
  //     data = {
  //       title: "BALANCE",
  //       isMoney: true,
  //       link: "See details",
  //       // icon: (
  //       //   <AccountBalanceWalletOutlinedIcon 
  //       //     className="icon"
  //       //     style={{
  //       //       backgroundColor: "rgba(128, 0, 128, 0.2)",
  //       //       color: "purple",
  //       //     }}
  //       //   />
  //       // ),
  //     };
  //     break;
  //   default:
  //     break;
  // }

  return (
    <>


    <div className="widget">
      <div className="left">
        <span className="title">Tiền Nước</span>
        <span className="counter">
          {amount*GIA_DIEN} VND
        </span>
        {/* <span className="link">{data.link}</span> */}
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {/* {data.icon} */}
      </div>
    </div>
    <div className="widget">
      <div className="right">
        <span className="title">Tiền Nước</span>
        <span className="counter">
          {amount1*GIA_NUOC} VND
        </span>
        {/* <span className="link">{data.link}</span> */}
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {/* {data.icon} */}
      </div>
    </div>
    </>
  );
};

export default Widget;
