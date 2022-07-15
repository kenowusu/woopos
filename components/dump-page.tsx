
            {/* *****************category-food************/}
            <div className="category-food-container">
                <div className="category-food">


                    {/* category-food-item */}
                    <div className="category-food-item-container">
                        
                        {foodItems.map((foodItem)=>{
                            return(
                                <div className="category-food-item category-food-item__select" key={uuid()}
                                 onClick={selectFoodItem}>

                                    <div className="category-food-img">
                                        <img src="https://img-global.cpcdn.com/recipes/5da646cc1c73a947/1200x630cq70/photo.jpg" alt="" />
                                    </div>
                                    <div className="category-food-name">Fried Rice</div>
                                    <div className="category-food-price">GHS 15.00</div>
                                    
                                    {/* category-food-option */}
                                    <div className="category-food-option">
                                        <div className="category-food-option-options"></div>
                                        <button className="category-food-option-btn">Add</button>
                                    </div>
                                    {/* category-food-option  ends */}
                                </div>    
                            )
                        })}

                        
                    
                    
                    
                    
                    </div>
                    {/* category-food-item ends */}



                </div>
            </div>
            {/**************category-food************* */}