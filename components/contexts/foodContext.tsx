import React,{createContext,useEffect,useState} from 'react';

export const FoodContext = createContext();




export const FoodProvider = ({children})=>{
    const [foods,setFoods] = useState();
    const [orders,setOrders] = useState([]);
    const [orderChanged,setOrderChanged] = useState(0);
    const [orderTotal,setOrderTotal] = useState(0);


    const values  = {
        foods,
        setFoods,
        orders,
        setOrders,
        orderChanged,
        setOrderChanged,
        orderTotal,
        setOrderTotal,
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
        console.log('order from context')
    },[orderChanged])
    return(
        <FoodContext.Provider value={values}>
            {children}
        </FoodContext.Provider>
    )
}