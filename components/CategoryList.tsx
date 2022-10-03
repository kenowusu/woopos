//** package imports */
import { useState,useEffect,useContext } from 'react';
import {v4 as uuid} from 'uuid';


//** my imports */
import api from './wc/config';
import { CategorySkeleton } from './skeleton/CategorySkeleton';
import FoodIconSvg from '../public/icons/food.svg'
import { FoodContext } from './contexts/foodContext';







export const CategoryList = ({categories=[]})=>{
 /** use food context  */
 const {setCategoryId} = useContext(FoodContext)
//====================== component functions============================ */

     /**
      * runs when a food category is clicked 
      * It gets category id and fetch foods based on the category id
      */
    const selectCategory = async(e)=>{
        
        //set foods empty to get loading effect

        // get all  buttons with class category-item
        const previousSelectBtn = document.querySelector('.category-item.category-item__selected');
        
        // get  clicked button which fired click
        let target = e.target;

        
        // get exact clicked button
        for(let i = 0;i<7;i++){
            if(target.classList.contains('category-item')){
              //categoryId = target.getAttribute('category_id');
             break;
            }
            target = target.parentNode;
         }
         

       
        //get categoryId from target
        const categoryId = target.getAttribute('category_id')
        
        //remove highlight from previous selected button
    
        previousSelectBtn.classList.remove('category-item__selected')
     
        //add highlight to current selected button
        target.classList.add('category-item__selected')
        
        // return;
        //fetch foods based on new categoryId
        setCategoryId(categoryId)

    
    }




    


    //===========================category component return =====================
    return(
        <div className="category-container">
            {/* category-items-container */}
            <div className="category-items-container">
                <div className="category-items">

                    {categories.length < 1 ?  <CategorySkeleton/> :
                  
 

                   categories.map((category,index)=>{
                    let elementClass = (index === 0) ? "category-item category-item__selected" : "category-item";
                    return(   
                    /********** category-item *******/
                    
                    <button className={elementClass}  category_id={category.id} onClick={selectCategory} key={uuid()}>
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
                    )})
                  
                   
                 
                  }
                </div>
            </div>





        </div>
    )
}