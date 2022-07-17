import React,{useEffect,useState, useContext} from "react"


import api from "../wc/config";
import { FoodContext } from "../contexts/foodContext";


export const CategoryFoodsContainer = ({children})=>{
  const {
    foods,
    setFoods,
    orders,
    setOrders
  } = useContext(FoodContext)

  const [count,setCount] = useState(1)
  
  const getFoods = async()=>{
    try{
    const response = await api.get('products');
     setFoods(response.data)
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
    
     setCount(count+1);
    
  
   
  }
  
  useEffect(()=>{
    setOrders([...orders])
    console.log('orders was changed')
  },[count])
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