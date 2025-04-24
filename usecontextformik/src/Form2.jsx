import React, { useState  , useRef} from 'react'
import './form.css'
import {ErrorMessage, Field, Formik, Form} from 'formik'
import * as yup from 'yup'

const Form2 = () => {

    const boxRef = useRef(null)
    

    
   
    const initialValues={
      username:"",
      email:"",
      password:"",
      gender:"",
      country:"india"
    }
  const validate=yup.object({
    username:yup.string().min(3,"minimun 3 character required").required("field is requied"),
    email:yup.string().required("field is required"),
    password:yup.string().max(12,"you cannot enter more than 12 character").required("field is required"),
    gender:yup.string().required("field is required"),
    country:yup.string().required("field is required")




  })
  return (
    <>
    <div ref={boxRef} className='div-1'>
        <h1>Form</h1>   
        
           
    </div>


   
    <div className='form'>
    <Formik initialValues={initialValues}
    validationSchema={validate}
    onSubmit={(values , {resetForm}) => {
      let getdata=JSON.parse(localStorage.getItem("values")) || [];
      console.log( Array.isArray(getdata))
      if(!Array.isArray(getdata)){
        getdata=[getdata]
      }
      getdata.push(values)
      

         console.log(getdata)
      localStorage.setItem("values",JSON.stringify(getdata))
     resetForm();

    }} 
    >

    
    {({handleSubmit,handleBlur,handleChange,errors,touched,values})=>(
    <Form onSubmit={handleSubmit}>
      <div className='name'>
    <p><strong>Name</strong></p>
    <input type='text' name="username"
     onBlur={handleBlur} 
     onChange={handleChange} className={touched.username&&errors.username?"input-errors":""}
     value={values.username}
     placeholder={touched.username && errors.username?"* Field is required":"Enter the name"}/>
     {touched.username && errors.username && (
          <div className="error-msg">{ "! "+errors.username}</div>
        )}
    </div>

  <div className='Email'>
    <p><strong>Email</strong></p>
    <input type='Email' name="email"
    onBlur={handleBlur} onChange={handleChange}
    className={touched.email && errors.email?"input-errors":""}
    value={values.email}
    placeholder={touched.email && errors.email?"* Field is required":"Enter the name"}/>
  { touched.email && errors.email &&(<div className='error-msg'>{"! Please Enter Email "+errors.email}
    </div>)}
    </div>

   <div className='password'>
    <p><strong>Password</strong></p>
    <input type='password' name="password"
    onChange={handleChange} 
    onBlur={handleBlur}
    className={touched.password && errors.password?"input-errors":""}
    value={values.password}
    placeholder={touched.password && errors.password?"* Field is required":"Enter Password"}
     />
     {touched.password && errors.password &&(
      <div className='error-msg'>{"! Please Enter Correct Password "+errors.password }</div>
     )}
    
    </div>
    <div className='gender2'>
   <label htmlFor="gender"><strong>Select gender:</strong></label>
   <Field className='gender' type='radio' name='gender' value="male"/>Male
   <Field className='gender' type='radio' name='gender' value="female"/>female
   <ErrorMessage name='gender'  className='error' component="div"/>

   </div>
   <div className='country'>
   <p> <strong>Select Country:</strong></p>
   <Field as= 'select' name="country">
    
   <option value="pakistan">Pakistan</option>
   <option value="India">India</option>
   <option value="Srilanks">Srilanka</option>
   <option value="Afghanistan">Afghanistan</option>
   <option value="China">China</option>
   </Field>

   <ErrorMessage name='country' component="div" className='error'/>
   </div>
   <button type='submit' className='btn' value="submit">Submit</button>
   
   
   
    </Form> 
    )}
   
   </Formik>
    </div>
    
    </>
  )
}

export default Form2