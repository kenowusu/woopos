
import { useContext, useState } from 'react';
import SearchIconSvg from '../public/icons/search.svg';
import { FoodContext } from './contexts/foodContext';


export const MiddleLayoutTop = ()=>{
  
  const [searchKey,setSearchKey] = useState('')
  const {foods,setFoods,foodsClone} = useContext(FoodContext)


  const searchFood = (e)=>{
   console.log(e.target.value)
   
   const foodResults = foods.filter((food)=>{
    setSearchKey(e.target.value)
    //  return food.name.toLowerCase().includes(searchKey.toLowerCase())})
     const regexSearchKey = new RegExp(`\^${searchKey.toLowerCase()}`) 
     return regexSearchKey.test(food.name.toLowerCase())})
     foodResults.length> 0 ? setFoods(foodResults) : setFoods(foodsClone);
     
     console.log(foodsClone)
     console.log(foodResults)
  }

 return(
    <div className="topbar">
      
    
     <div className='restaurant-name'>
        <span>Basilic</span>
     </div>





     {/* topbar search */}
     <div className="topbar-search">

       <div className="topbar-search-container">

         <div className="search-icon-container">
           
            {/* search input field */}
            <input type="text" className="topbar-search-box" 
            placeholder="search recipe"
            onChange={searchFood}
       
            />

            <div className="topbar-search-icon">
              <SearchIconSvg/>
            </div>
          </div>
       </div>
       
     </div>
     {/* topbar search */}




   </div>

 )

}



