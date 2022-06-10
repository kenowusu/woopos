import {v4 as uuid} from 'uuid';
import {useEffect, useState} from 'react';

import FoodIconSvg from '../public/icons/food.svg';
import api from '../wc/config';
const Category = ()=>{
    const [categories,setCategories] = useState([]) 

    const [foodItems,setFoodItems] = useState([
        1,2,3,
    ])
   

    const getCategories = async()=>{
     const getCats =   await api.get('products/categories');
    
     setCategories(getCats.data)
     
     console.log(getCats.data)
    }
    
    
   
    
    useEffect(()=>{
        getCategories()
    },[])

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

                    <button className="category-item" onClick={selectCategory}>
                        {/* /** category-item-img */}
                        <div className="category-item-img">
                            {/* if no image for category, show food svg icon */}
                           <FoodIconSvg/>
                        </div>
                        {/* /* category-item-img */}
                        <div className="category-item-text">
                            All Items
                        </div>
                    </button>

                   {categories.map((category)=>{
                    return(   
                    /********** category-item *******/
                    <button className="category-item" onClick={selectCategory} key={uuid()}>
                        {/* /** category-item-img */}
                        <div className="category-item-img">
                            {/* if no image for category, show food svg icon */}
                           {(category.image)? (<img src={category.image.src} alt="category img" />): <FoodIconSvg/>} 
                        </div>
                        {/* /* category-item-img */}
                        <div className="category-item-text">
                            {category.name}
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
            {/**************category-food**************/}


        </div>
    )
}


export default Category;