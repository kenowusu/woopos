import Image from "next/image";



export const FoodItem = ({food,addToOrder})=>{
    
    return(
        <div className="category-food-item category-food-item__select"  >

            <div className="category-food-img">
            <Image src={food.images[0].src || "public/images/no-image.jpg"} width={204} height={120} />
            </div>
            <div className="category-food-name">{food.name}</div>
            <div className="category-food-price">GHS {food.on_sale ? food.sale_price :food.regular_price}</div>
            
            {/* category-food-option */}
            <div className="category-food-option" style={{marginTop:"auto"}}>
                <div className="category-food-option-options"></div>
                <button className="category-food-option-btn" food_id={food.id} onClick={addToOrder}>Add</button>
            </div>
            {/* category-food-option  ends */}
        </div>    
    )
}