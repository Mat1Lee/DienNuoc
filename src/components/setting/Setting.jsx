import React from 'react'
import { useDispatch,useSelector } from "react-redux";
import { useFormik, formik } from 'formik'
import {CaiDatThoiGianAction} from '../../context/redux/actions/QuanLyDienNuocAction'
const Setting=(props)=> {

  const { useState } = React;
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      gio: '',
      phut: '',
    },
    onSubmit: values => {
      console.log(values)
      dispatch(CaiDatThoiGianAction(values))
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
         <fieldset className="w-full space-y-1 dark:text-gray-100">
        <label for="gio" className="block text-sm font-medium">Giờ</label>
        <div className="flex">
          <input onChange={formik.handleChange} value={formik.values.gio} type="number" name="gio" id="gio" className="flex flex-1 text-right border sm:text-sm rounded-l-md focus:ring-inset dark:border-gray-700 dark:text-gray-100 dark:bg-gray-800 focus:ring-violet-400" />

        </div>
      </fieldset>
      <fieldset className="w-full space-y-1 dark:text-gray-100">
        <label for="phut" className="block text-sm font-medium">Phút</label>
        <div className="flex">
          <input onChange={formik.handleChange} value={formik.values.phut} type="number" name="phut" id="phut" className="flex flex-1 text-right border sm:text-sm rounded-l-md focus:ring-inset dark:border-gray-700 dark:text-gray-100 dark:bg-gray-800 focus:ring-violet-400" />

        </div>
        
      </fieldset>
<div className="btn">
          <button type="submit">Xác Nhận</button>
        </div>
      </form>
     

    </div>
  )
}
export default Setting;