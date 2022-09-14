//** package imports */
import { useState,useEffect,useContext } from 'react';
import {v4 as uuid} from 'uuid';


//** my imports */
import api from './wc/config';
import { CategorySkeleton } from './skeleton/CategorySkeleton';
import FoodIconSvg from '../public/icons/food.svg'
import { FoodContext } from './contexts/foodContext';







export const FoodCategory = ({categories=[]})=>{
 /** use food context  */
 const {setFoods} = useContext(FoodContext)
//====================== component functions============================ */

     /**
      * Select Category function 
      * Function runs when a food category is clicked 
      * It gets category id and fetch foods based on the category id
      */
    const selectCategory = async(e)=>{
        
        // get all  buttons with class category-item
        const targets = document.querySelectorAll('button.category-item');
        
        // get  clicked button which fired click
        let target = e.target;


        targets.forEach(targetItem=>{
            //remove the category-item__selected class from all buttons 
            targetItem.classList.remove('category-item__selected')

            // add category-item__selected to target button
            target.classList.add('category-item__selected');
        })
        

        /*Make sure you get the id from the button tag
        *even if you clicked the content or the img inside the button
        */
        let categoryId;
        for(let i = 0;i<7;i++){
           if(target.classList.contains('category-item')){
             categoryId = target.getAttribute('category_id');
            break;
           }
           target = target.parentNode;
        }

    
        
        try{
            const params = {
               category : categoryId || undefined
            }
            const response = await api.get('products',params);

            //this is what causing the button outline error apparently
            setFoods(response.data)
           
        }
        catch(e){
            console.log(e)
        }
    
    }




    


    //===========================category component return =====================
    return(
        <div className="category-container">
            {/* category-items-container */}
            <div className="category-items-container">
                <div className="category-items">

                    {categories.length < 1 ? <CategorySkeleton/> :
                   <>
                    <button className="category-item category-item__selected" category_id ='dsf'onClick={selectCategory}>
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
                    <button className="category-item" category_id={category.id} onClick={selectCategory} key={uuid()}>
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
                    )})}
                  
                   
                   </>
                  }
                </div>
            </div>





        </div>
    )
}