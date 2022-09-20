import {v4 as uuid} from 'uuid';
import { FoodItem } from "./FoodItem"
import { FoodSkeleton } from './skeleton/FoodSkeleton';

export const FoodList = ({foods=[],addToOrder})=>{


    return(
        <>
               
         <div className="category-food-container">
                <div className="category-food">
                
                    <div className="category-food-item-container">
                        
                        {foods.length < 1 ? <FoodSkeleton/> 
                                :
                          foods.map((food)=>{
                            return(
                                <FoodItem key={food.id} food={food} addToOrder={addToOrder}/>
                            )
                        })}
                    </div>
                
                </div>
         </div>
       
        </>
    )
}