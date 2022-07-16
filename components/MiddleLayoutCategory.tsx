import {v4 as uuid} from 'uuid';
import {useContext, useEffect, useState} from 'react';

import { CategorySkeleton } from './skeleton/CategorySkeleton';
import FoodIconSvg from '../public/icons/food.svg';
import api from './wc/config';
import { FoodContext } from './contexts/foodContext';
import { CategoryFoodsContainer } from './containers/CategoryFoodsContainer';

export const MiddleLayoutCategory = ()=>{
    
    const {setFoods} = useContext(FoodContext)  
    const [categories,setCategories] = useState() 
    

   

    const getFoodCategories = async()=>{
     const response =   await api.get('products/categories');
    
     setCategories(response.data)
    }
    


    /************
     * getFoodsByCategories
     */

    const selectCategory = (e)=>{
        
        const targets = document.querySelectorAll('button.category-item');
        let target = e.target;
        let categoryId;
        for(let i = 0;i<4;i++){
           if(target.classList.contains('category-item')){
             categoryId = target.getAttribute('category_id');
            break;
           }
           target = target.parentNode;
        }
        targets.forEach(targetItem=> targetItem.classList.remove('category-item__selected'))
        target.classList.add('category-item__selected');
        return categoryId;
    }
    const getFoodsByCategories = async(e)=>{
   
        const categoryId = selectCategory(e)
        
        try{
            const params = {
               category : categoryId || undefined
            }
            const response = await api.get('products',params);
            setFoods(response.data)
        }
        catch(e){
            console.log(e)
        }
    }
    
    
    

    useEffect(()=>{
        getFoodCategories()
    },[])


  
    return(
        <div className="category-container ">

         
            <CategoryFoodsContainer>
               
            </CategoryFoodsContainer>
            {/* category-items-container */}
            <div className="category-items-container">
                <div className="category-items">

                    {!categories && <CategorySkeleton/>}

                   { categories && <button className="category-item" onClick={getFoodsByCategories}>
                        {/* /** category-item-img */}
                        <div className="category-item-img">
                            {/* if no image for category, show food svg icon */}
                           <FoodIconSvg/>
                        </div>
                        {/* /* category-item-img */}
                        <div className="category-item-text">
                            All Items
                        </div>
                    </button>}

                   {categories && categories.map((category)=>{
                    return(   
                    /********** category-item *******/
                    <button className="category-item" category_id={category.id} onClick={getFoodsByCategories} key={uuid()}>
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
                    )}

                   )}


                </div>
            </div>





        </div>
    )
}


