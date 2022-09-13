import React,{createContext,useEffect,useState} from 'react';

import {roundTo} from 'round-to';



export const FoodContext = createContext();




export const FoodProvider = ({children})=>{
    const [foods,setFoods] = useState();
    const [foodsClone,setFoodsClone] = useState([]);
    const [orders,setOrders] = useState([]);
    const [orderChanged,setOrderChanged] = useState(0);
    const [orderTotal,setOrderTotal] = useState(roundTo(0,2));
    const [customerAmount,setCustomerAmount] = useState(0);
    const [customerChange,setCustomerChange] = useState(0)

    const values  = {
        foods,
        setFoods,
        foodsClone,
        setFoodsClone,
        orders,
        setOrders,
        orderChanged,
        setOrderChanged,
        orderTotal,
        setOrderTotal,
        customerAmount,
        setCustomerAmount,
        customerChange,
        setCustomerChange
    }

    const calcOrderTotal = ()=>{
       let sumArr= [];
       orders.forEach(orderItem=>{
        let itemSum = orderItem.quantity * orderItem.price;
        sumArr.push(itemSum)
       })
       const sum = sumArr.reduce(function(a, b){
        return a + b;
    }, 0);
     setOrderTotal(sum)
    }
    useEffect(()=>{
        setOrders([...orders]);
        calcOrderTotal();
    },[orderChanged])
    return(
        <FoodContext.Provider value={values}>
            {children}
        </FoodContext.Provider>
    )
}