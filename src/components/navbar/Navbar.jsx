import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { Form, useFormik } from 'formik'
import { CaiDatVlaueAction } from "../../context/redux/actions/QuanLyDienNuocAction";
const Navbar = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">



          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" onClick={() => setModalShow(true)} />
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            <div className="counter">1</div>
          </div>

          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          {/* <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;


function MyVerticallyCenteredModal(props) {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      hanMuc: '',
    },
   
  })

  return (

    <>
     
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Cài Đặt Hạn Mức Cảnh Báo
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Nhập Hạn Mức</h4>
            <input onChange={formik.handleChange} value={formik.values.hanMuc} type="number" name="hanMuc" id="hanMuc" />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={()=>{
              dispatch(CaiDatVlaueAction(formik.values))
            }} className='btn btn-primary'  type='submit'>
              Submit
            </Button>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal> 
      
    </>
  );
}

