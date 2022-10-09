import {v4 as uuid} from 'uuid';
import { FoodItem } from "./FoodItem"
import { FoodSkeleton } from './skeleton/FoodSkeleton';

export const FoodList = ({
    foods=[],
    addToOrder,
    selectFoodVariant,
    selected,
    setSelected
})=>{


    return(
        <>
               
         <div className="food-list">
                <div className="">
                
                    <div className="food-list-container">
                        
                        {foods.length < 1 ? <FoodSkeleton/> 
                                :
                          foods.map((food)=>{
                            return(
                                <FoodItem 
                                    key={food.id} 
                                    food={food} 
                                    addToOrder={addToOrder}
                                    selectFoodVariant={selectFoodVariant}
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                            )
                        })}
                    </div>
                
                </div>
         </div>
       
        </>
    )
}