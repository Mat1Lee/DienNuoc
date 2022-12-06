import React from 'react'
import './Register.css'
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
const  Registor=()=> {

  const{useState}=React;
  let dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      password: '',
    },
    onSubmit: values => {
      console.log(values)
      // dispatch(DangNhapAction(values))
    },
  });
  const[eye,seteye]=useState(true);
const[pass,setpass]=useState("password");

var sectionStyle = {
  backgroundPosition: 'center', backgrondSize: 'cover',
  backgroundBlendMode: 'multiply',
  backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZdPq7O2yFXA7nsg_tCG44f8UXM2XshLau0w&usqp=CAU)"
};
  
  const Eye=()=>{
        if(pass=="password"){
        setpass("text");
        seteye(false);
        }else{
        setpass("password");
        seteye(true);
        }
        }; 
  return (
    <div>
      
      <div className="w-full dark:bg-gray-500" style={sectionStyle}>
        <div className="container">
            <div className="card">
                <div className="form">
                    <div className="left-side">
                        
                    </div>

                    <div className="right-side">
                        

                        <div className="hello">
                            <h2>Hello Again!</h2>
                            <h4>Welcome back you have been missed! </h4>
                        </div>

                        <form onSubmit={formik.handleSubmit}>

                            <div className="input_text">
                                <input  type="text" placeholder="Enter UserName" onChange={formik.handleChange} name="taiKhoan" value={formik.values.taiKhoan} />
                                
                            </div>
                            <div className="input_text">
                                <input  type={pass}placeholder="Enter Password" onChange={formik.handleChange} name="password" value={formik.values.password} />
                                <i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye" }`}></i>
                            </div>
                            <div className="recovery">
                                <p>Recovery Password</p>
                            </div>
                            <div className="btn">
                                <button type="submit">Sign in</button>
                            </div>

                        </form>

                        <hr />
                        <div className="or">
                            <p>or signin with</p>
                        </div>
                        <div className="boxes">
                            <span><img src="https://imgur.com/XnY9cKl.png" /></span>
                            <span><img src="https://imgur.com/ODlSChL.png" /></span>
                            <span><img src="https://imgur.com/mPBRdQt.png" /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </div>
  )
}
export default Registor;
 