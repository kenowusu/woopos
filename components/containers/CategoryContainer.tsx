/** import packages */
import React,{useEffect,useState, useContext} from "react"


/** my imports  */
import api from "../wc/config";
import { FoodContext } from "../contexts/foodContext";


/** use food context  */
export const CategoryContainer = ({children})=>{
  const {
    categories,
    setCategories
  } = useContext(FoodContext)

  
  
    /**Fetch food categories */
    const getFoodCategories = async()=>{
        const response =   await api.get('products/categories');
       
        setCategories(response.data)
    }
       

  
  /********* fetch food categories once on page load */
  useEffect(()=>{
    getFoodCategories()
    
  },[])
 
  
  /*==============container component return====  */
  return(
      <>
        {React.Children.map(children,child=>{
          if(React.isValidElement(child)){
            return React.cloneElement(child,{categories});
          }
          
          return child;

        })}
      </>
    )
}