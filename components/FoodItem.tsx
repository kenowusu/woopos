import Image from "next/image";



export const FoodItem = ({food,addToOrder})=>{
    
    return(
        <div className="food-item category-food-item__select"  >

            {/* food item group */}
            <div className="food-item-grp">
                <div className="food-item-img">
                <Image src={food.images.length > 0 ? food.images[0].src : "/images/no-image.jpg"} width={204} height={120} />
                </div>
                <div className="food-item-name">{food.name}</div>
                <div className="food-item-price">GHS {food.on_sale ? food.sale_price :food.regular_price}</div>    
            </div>

            {/* category-food-option */}
            <div className="food-item-option" style={{marginTop:"auto"}}>
                <button className="food-item-btn" food_id={food.id} onClick={addToOrder}>Add</button>
            </div>
       
        </div>    
    )
}