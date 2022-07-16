export const FoodItem = ({food,key})=>{
    return(
        <div className="category-food-item category-food-item__select" key={key}
         >

            <div className="category-food-img">
                <img src="https://img-global.cpcdn.com/recipes/5da646cc1c73a947/1200x630cq70/photo.jpg" alt="" />
            </div>
            <div className="category-food-name">Fried Rice with Grilled Chicken with extra toppings</div>
            <div className="category-food-price">GHS 15.00</div>
            
            {/* category-food-option */}
            <div className="category-food-option">
                <div className="category-food-option-options"></div>
                <button className="category-food-option-btn">Add</button>
            </div>
            {/* category-food-option  ends */}
        </div>    
    )
}