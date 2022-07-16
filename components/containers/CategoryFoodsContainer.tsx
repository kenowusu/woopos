import React,{useEffect, useContext} from "react"


import api from "../wc/config";
import { FoodContext } from "../contexts/foodContext";


export const CategoryFoodsContainer = ({children})=>{
  const {foods,setFoods} = useContext(FoodContext)
  
  const getFoods = async()=>{
    try{
    const response = await api.get('products');
     setFoods(response.data)
    }catch(e){
      console.log(e)
    }
  }

  useEffect(()=>{
   getFoods()
  },[])
    return(
      <>
        {React.Children.map(children,child=>{
          if(React.isValidElement(child)){
            return React.cloneElement(child,{foods});
          }
          
          return child;

        })}
      </>
    )
}