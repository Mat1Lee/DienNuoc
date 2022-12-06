import React from 'react'
import './Loading.css'
import { useEffect,useState } from 'react'
import { DotLoader } from 'react-spinners'
export default function Loading() {
  const [loading,setLoading] = useState(true)

  useEffect(()=>{

    setTimeout(()=>{
      setLoading(false)

    },2000)

  },[])
  if (loading === true) {
    return (
      <div className="loading">
       <DotLoader color="#36d7b7" />
      </div>
    );
  } else {
    return (
      <>
        <div className="doneLoadingLeft" />
        <div className="doneLoadingLeft" />
        <div className="doneLoadingRight" />
      </>
    );
  }
}