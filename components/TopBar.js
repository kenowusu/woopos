import SearchIconSvg from '../public/icons/search.svg';



const TopBar = ()=>{
 return(
    <div className="topbar">
      
    


     <div className="topbar-search">
        <input type="text" className="topbar-search-box" placeholder="search recipe"/>
        <div className="topbar-search-icon">
          <SearchIconSvg/>
        </div>
     </div>

   </div>

 )

}



export default TopBar;