import React,{useEffect,useState, useContext} from "react"


import api from "../wc/config";
import { FoodContext } from "../contexts/foodContext";


export const CategoryFoodsContainer = ({children})=>{
  const {
    foods,
    setFoods,
    foodsClone,
    setFoodsClone,
    orders,
    setOrders,
    orderChanged,
    setOrderChanged,
    categoryId,
    setCategoryId,
  } = useContext(FoodContext)

  
  
  const getFoods = async()=>{
    if(categoryId != null){
      try{
        const params = {
          category : categoryId
       }
       const response = await api.get('products',params);
         setFoods(response.data)
         setFoodsClone([...response.data])
    
        }catch(e){
          console.log(e)
        }
    }
  }

  const addToOrder=(e)=>{
    const target = e.target;
    const foodId = target.getAttribute('food_id');
    
    const foodIndex = foods.findIndex(item=> item.id == foodId);
    const currentFood = foods[foodIndex];

    let curOrder = {
      id: currentFood.id,
      quantity:1,
      name:currentFood.name,
      price:currentFood.regular_price,
      image:currentFood.images[0].src
    }
    if(currentFood.on_sale){
      curOrder.price = currentFood.sale_price;
    }
    /******
     * check if food id is already in order 
     * if already in order increase quantity
     * */
     const orderIndex = orders.findIndex(item=> item.id == foodId);
     
     if(orderIndex == -1){
     
      setOrders([...orders,curOrder])
     }else{
      orders[orderIndex].quantity += 1;
     }
    
     setOrderChanged(orderChanged+1);
    
  
   
  }
  
  useEffect(()=>{
    setOrders([...orders])

    // //select print reciept button
    const button = document.querySelector('.orderbtn-btn');


    // //if orders are empty, disable the print receipt button 
    if(orders.length < 1){
      button.disabled = true;
      button.style.backgroundColor = "#a2a2a2";
    
    }else{
      //if orders not empty, re-enable it
      button.disabled = false;
      button.style.backgroundColor = "#ff5e00";
    }
  },[orderChanged])
  useEffect(()=>{
   getFoods()
  },[categoryId])
    return(
      <>
        {React.Children.map(children,child=>{
          if(React.isValidElement(child)){
            return React.cloneElement(child,{foods,addToOrder});
          }
          
          return child;

        })}
      </>
    )
}