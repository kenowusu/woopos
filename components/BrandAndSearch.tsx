
import { useContext, useState } from 'react';
import SearchIconSvg from '../public/icons/search.svg';
import { FoodContext } from './contexts/foodContext';


export const BrandAndSearch = ()=>{
  
  const [searchKey,setSearchKey] = useState('')
  const {foods,setFoods,foodsClone} = useContext(FoodContext)


  const searchFood = (e)=>{
   console.log(e.target.value)
   
   const foodResults = foods.filter((food)=>{
    setSearchKey(e.target.value)
    //  return food.name.toLowerCase().includes(searchKey.toLowerCase())})
     const regexSearchKey = new RegExp(`\^${searchKey.toLowerCase()}`) 
     return regexSearchKey.test(food.name.toLowerCase())})

     // if typing in search and search returning nothing
     if(searchKey.length > 0 && foodResults.length < 1){
      setFoods([])
      //if typing in search and search returned something
     }else if(searchKey.length > 0 && foodResults.length > 0){
      setFoods(foodResults)
      //if search cleared
     }else if(searchKey.length < 1){
      setFoods(foodsClone);
     }
  
     
     console.log(foodsClone)
     console.log(foodResults)
  }

 return(
    <div className="topbar">
      
    



     {/* topbar search */}
     <div className="topbar-search">

       <div className="topbar-search-container">

         <div className="search-icon-container">
           
            {/* search input field */}
            <input type="text" className="topbar-search-box" 
            placeholder="search Menu"
            // onChange={searchFood}
       
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



