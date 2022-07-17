import React,{createContext,useEffect,useState} from 'react';

export const FoodContext = createContext();




export const FoodProvider = ({children})=>{
    const [foods,setFoods] = useState();
    const [orders,setOrders] = useState([]);
    const [orderChanged,setOrderChanged] = useState(0)


    const values  = {
        foods,
        setFoods,
        orders,
        setOrders,
        orderChanged,
        setOrderChanged
    }
    useEffect(()=>{
        setOrders([...orders])
        console.log('order from context')
    },[setOrderChanged])
    return(
        <FoodContext.Provider value={values}>
            {children}
        </FoodContext.Provider>
    )
}