import React,{createContext,useState} from 'react';

export const FoodContext = createContext();




export const FoodProvider = ({children})=>{
    const [foods,setFoods] = useState();
    const values  = {
        foods,
        setFoods
    }
    return(
        <FoodContext.Provider value={values}>
            {children}
        </FoodContext.Provider>
    )
}