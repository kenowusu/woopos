import SearchIconSvg from '../public/icons/search.svg';



export const MiddleLayoutTop = ()=>{
 return(
    <div className="topbar">
      
    
     <div className='restaurant-name'>
        <span>Basilic</span>
     </div>





     {/* topbar search */}
     <div className="topbar-search">

       <div className="topbar-search-container">

         <div className="search-icon-container">
            <input type="text" className="topbar-search-box" placeholder="search recipe"/>
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



