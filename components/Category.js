import {useState} from 'react';

const Category = ()=>{

    const [categories,selectCategories] = useState([
        1,2,2,3,4,5,6,7
    ]) 

    const [foodItems,setFoodItems] = useState([
        1,2,3,4,5,6,7,3,4,5,2,5,2,
    ])



    /*******selects category on click**/
    const selectCategory = (e)=>{
        const target = e.target;
        target.classList.add('category-item__selected')
    }
    
    const selectFoodItem = (e)=>{
        const target = e.target;
        target.classList.add('category-food-item__selected')
    }
    return(
        <div className="category-container ">

            <div className="category-head-container">
                <div className="category-head">
                    <div className="category-head-one cursor-pointer">Choose Category</div>
                    <div className="category-head-two cursor-pointer">View All</div>
                </div>
            </div>
           
            {/* category-items-container */}
            <div className="category-items-container">
                <div className="category-items">

                    

                   {categories.map((category)=>{
                    return(   
                    /****** * category-item *******/
                    <button className="category-item" onClick={selectCategory}>
                        {/* /** category-item-img */}
                        <div className="category-item-img">
                            <img src="https://i0.wp.com/www.savourous.com/wp-content/uploads/2020/07/keto-banku.jpg" 
                            alt="category img" />
                        </div>
                        {/* /* category-item-img */}
                        <div className="category-item-text">
                            All Items
                        </div>
                    </button>
                    )
                   })}


                </div>
            </div>



            {/******************category-food************/}
            <div className="category-food-container">
                <div className="category-food">


                    {/* category-food-item */}
                    <div className="category-food-item-container">
                        
                        {foodItems.map((foodItem)=>{
                            return(
                                <div className="category-food-item category-food-item__select" onClick={selectFoodItem}>

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
            {/**************category-food**************/}


        </div>
    )
}


export default Category;