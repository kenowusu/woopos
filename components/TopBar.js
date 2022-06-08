import SearchIconSvg from '../public/icons/search.svg';



const TopBar = ()=>{
 return(
    <div className="topbar">
      
    

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



    <div className="topbar-new-order">
      <button>Something here</button>
    </div>

   </div>

 )

}



export default TopBar;