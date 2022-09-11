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
  } = useContext(FoodContext)

  
  
  const getFoods = async()=>{
    try{
    const response = await api.get('products');
     setFoods(response.data)
     setFoodsClone(response.data.slice(0))
    }catch(e){
      console.log(e)
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
    console.log('orders was changed')
  },[orderChanged])
  useEffect(()=>{
   getFoods()
  },[])
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