import {useState} from 'react';

const Category = ()=>{

    const [categories,selectCategories] = useState([
        1,2,2,3,4,5,6,7
    ]) 



    /*******selects category on click**/
    const selectCategory = (e)=>{
        const target = e.target;
        e.target.classList.add('category-item__selected')
    }

    return(
        <div className="category-container ">

            <div className="category-head-container ">
                <div className="category-head">
                    <div className="category-head-one cursor-pointer">Choose Category</div>
                    <div className="category-head-two cursor-pointer">View All</div>
                </div>
            </div>
           
            {/* category-items-container */}
            <div className="category-items-container">
                <div className="category-items">

                    

                   {categories.map((category)=>{
                    return(   
                    /****** * category-item *******/
                    <button className="category-item" onClick={selectCategory}>
                        {/* /** category-item-img */}
                        <div className="category-item-img">
                            <img src="https://i0.wp.com/www.savourous.com/wp-content/uploads/2020/07/keto-banku.jpg" 
                            alt="category img" />
                        </div>
                        {/* /* category-item-img */}
                        <div className="category-item-text">
                            All Items
                        </div>
                    </button>
                    )
                   })}


                </div>
            </div>


        </div>
    )
}


export default Category;