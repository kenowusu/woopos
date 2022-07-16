import {v4 as uuid} from 'uuid';
import { FoodItem } from "./FoodItem"

export const FoodList = ({foods})=>{


    return(
        <>
               
         <div className="category-food-container">
                <div className="category-food">
                
                    <div className="category-food-item-container">
                        
                        {foods && foods.map((food)=>{
                            return(
                                <FoodItem key={uuid()} food={food}/>
                            )
                        })}
                    </div>
                
                </div>
         </div>
       
        </>
    )
}