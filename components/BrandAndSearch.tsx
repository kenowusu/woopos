
import { useContext, useEffect, useState } from 'react';
import SearchIconSvg from '../public/icons/search.svg';
import { FoodContext } from './contexts/foodContext';


export const BrandAndSearch = ()=>{
  
  const [searchKey,setSearchKey] = useState('')
  const {foods,setFoods,foodsClone} = useContext(FoodContext)


  const searchFood = (e)=>{ 

    //if if search is empty, do nothing
    if(searchKey == " "){
      return
    }else{
       //search food list  and return the ones with similar names as the search key
     const foodResults = foods.filter((food)=>{
      return food.name.toLowerCase().includes(searchKey.toLowerCase())
     })
     
   
       //if typing in search and search returned something
       if(searchKey.length > 0 && searchKey !="" && foodResults.length > 0){
       setFoods(foodResults)

       //if search cleared
      }else if(!searchKey.length){
       setFoods(foodsClone);
    
      }



    }
  }

 
  useEffect(()=>{
    searchFood()
  },[searchKey])



 return(
    <div className="topbar">
  

     {/* topbar search */}
     <div className="topbar-search">

       <div className="topbar-search-container">

         <div className="search-icon-container">
           
            {/* search input field */}
            <input type="text" className="topbar-search-box" 
            placeholder="search Menu"
            onChange={(e)=>setSearchKey(e.target.value)}
       
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



