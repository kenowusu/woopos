import {v4 as uuid} from 'uuid';
import {useEffect, useState} from 'react';

import FoodIconSvg from '../public/icons/food.svg';
import api from '../wc/config';



export const MiddleLayoutCategory = ()=>{
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





        </div>
    )
}


