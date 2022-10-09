import Image from "next/image";



export const FoodItem = ({
    food,
    addToOrder,
    selectFoodVariant,
    selected,
    setSelected

})=>{
    
    return(
        <div className="food-item category-food-item__select"  >

            {/* food item group */}
       
            <div className="food-item-grp">
                <div className="food-item-img">
                <Image src={food.images.length > 0 ? food.images[0].src : "/images/no-image.jpg"} width={204} height={120} />
                </div>
                <div className="food-item-name">{food.name}</div>
                {!food.has_options &&<div className="food-item-price">GHS {food.on_sale ? food.sale_price :food.regular_price}</div>}

                {food.has_options &&
              
                 <>
                  <select  className="food-item-price"
                //   value={selected} 
                  onChange={selectFoodVariant}
                  >
                    {food.product_variations.map(food_variant=>{


                        return(
                            <option 
                                value={food_variant.id} 
                                key={food_variant.id}
                                food_id={food_variant.id}
                                
                            >GHS {food_variant.regular_price}</option>
                        )
                    })}
                   
                  </select>
                 </>
                }
            </div>

            {/* category-food-option */}
            
             {/* add button for simple foods */}
            {!food.has_options && 
                <>
                    <div className="food-item-option" style={{marginTop:"auto"}}>
                        <button 
                         className="food-item-btn"
                         food_id={food.id} 
                         onClick={addToOrder}
                      
                        >Add</button>
                    </div>
            </>
            }

            {/* add button for variant foods */}
            {food.has_options ?
                <>
            
                <div className="food-item-option" style={{marginTop:"auto"}}>
                    <button className="food-item-btn" 
                    food_id={selected || food.product_variations[0].id  } 
                    is_variant="1"
                    parent_id={food.id}
                    onClick={addToOrder}
                    >Add</button>
                </div>
                
                </>
                :""
               
            }
       
        </div>    
    )
}