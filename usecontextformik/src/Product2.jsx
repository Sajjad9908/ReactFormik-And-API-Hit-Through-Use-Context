import React, { useContext, useEffect, useState } from 'react'
import { createProduct } from './ProductContext'

const Product2 = () => {
    const {product,loading}=useContext(createProduct)
    const [data,setData]=useState([])
    useEffect(()=>{
        setData(product)

    },[product])
    if(loading)return <h1>...Loading!</h1>
  return (
    <>
   <div className='divys'>
    <ul>
        {data.slice(0,6).map((value)=>(
        <li key={value.image}>{value.price}</li>
    

        ))}
    </ul>


   </div>
    </>
  )
}

export default Product2