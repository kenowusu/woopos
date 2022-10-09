import React,{useEffect,useState, useContext} from "react"


import api from "../wc/config";
import { FoodContext } from "../contexts/foodContext";


export const FoodContainer = ({children})=>{

  const [selected,setSelected] = useState(null);


  const {
    foods,
    setFoods,
    setFoodsClone,
    orders,
    setOrders,
    orderChanged,
    setOrderChanged,
    categoryId,
  } = useContext(FoodContext)

  
  
  const getFoods = async()=>{

    setFoods([])
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

  // select food variant 
  const selectFoodVariant = (e)=>{
     // get select item
     const target = e.target;
     // get selected option 
     const selectedOption = target[target.selectedIndex]

     //get id of selected option 
     const optionId = selectedOption.getAttribute('food_id')

     setSelected(optionId)
  }

  // add food to order
  const addToOrder=(e)=>{
    const target = e.target;
    const foodId = target.getAttribute('food_id');
    
    //check if simple or variant food 

    /******************if it is simple food ***************/
    if(!target.hasAttribute('is_variant')){

      // get food index 
      const foodIndex = foods.findIndex(item=> item.id == foodId);
      const currentFood = foods[foodIndex];
      
      // get simple food 
      let curOrder = {
        id: currentFood.id,
        quantity:1,
        name:currentFood.name,
        price:currentFood.regular_price,
        image: currentFood.images.length > 0 ? currentFood.images[0].src : '/images/no-image.jpg'
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
    
    /**************if is food variant  */
    else if(target.hasAttribute('is_variant')){
      const parentId = target.getAttribute('parent_id')
      const variantId = foodId
     
      const parentIndex = foods.findIndex(item=> item.id == parentId);
      const variations =  foods[parentIndex].product_variations
      const variantIndex = variations.findIndex(item=> item.id == variantId);


      const currentFood = variations[variantIndex]
 

      // get variant food
      let curOrder = {
        id: currentFood.id,
        quantity:1,
        name:foods[parentIndex].name,
        price:currentFood.regular_price,
        image: foods[parentIndex].images.length > 0 ? foods[parentIndex].images[0].src : '/images/no-image.jpg'
      }
      if(currentFood.on_sale){
        curOrder.price = currentFood.sale_price;
      }


            /******
     * check if food id is already in order 
     * if already in order increase quantity
     * */
     const orderIndex = orders.findIndex(item=> item.id == variantId);
     
     //if not found 
     if(orderIndex == -1){
     
      setOrders([...orders,curOrder])
     }else{

      //if found 
      orders[orderIndex].quantity += 1;
     }
     setOrderChanged(orderChanged+1);


    }
    
    return
    
 
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
            return React.cloneElement(child,
              {
                foods,
                addToOrder,
                selectFoodVariant,
                selected,
                setSelected
              });
          }
          
          return child;

        })}
      </>
    )
}