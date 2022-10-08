import Image from "next/image";



export const FoodItem = ({food,addToOrder,selectFoodVariant})=>{
    
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
                  value="78" onChange={selectFoodVariant}
                  >
                    <option value="4343" food_id="4343">10</option>
                    <option value="87678" food_id="87678">15</option>
                  </select>
                 </>
                }
            </div>

            {/* category-food-option */}
            <div className="food-item-option" style={{marginTop:"auto"}}>
                <button className="food-item-btn" food_id={food.id} 
                onClick={addToOrder}
                >Add</button>
            </div>
       
        </div>    
    )
}