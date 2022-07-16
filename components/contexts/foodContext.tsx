import React,{createContext,useState} from 'react';

export const FoodContext = createContext();




export const FoodProvider = ({children})=>{
    const [foods,setFoods] = useState();
    const [orders,setOrders] = useState([]);


    const values  = {
        foods,
        setFoods,
        orders,
        setOrders
    }
    return(
        <FoodContext.Provider value={values}>
            {children}
        </FoodContext.Provider>
    )
}