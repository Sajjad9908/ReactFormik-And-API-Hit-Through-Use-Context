import React, {createContext, useEffect, useState } from 'react'
export const createProduct=createContext();


export const ProductContext = ({children}) => {
    const [product,setProduct]=useState([])
    const [loading,setLoading]=useState(true)
 useEffect(()=>{

 
    const getvalue=async()=>{
    try {
       const get_item=localStorage.getItem("product")
       const parseddata=get_item?JSON.parse(get_item):[]
       if (parseddata.length>0){
        setProduct(parseddata)
        setLoading(false)
        return;
       }
        const responce= await fetch("https://fakestoreapi.com/products ")
        if(!responce.ok){
            throw new Error(`error due to loading ${responce.status} `)
        }
        const result=await responce.json()
        localStorage.setItem("product",JSON.stringify(result))
        setProduct(result)
        
    } catch (error) {
        console.log("error occpured",error)
    }
    }
getvalue()
 },[])

  return (
   <createProduct.Provider value={{product,loading}}>
    {children}
   </createProduct.Provider>
  )
}

export default ProductContext
