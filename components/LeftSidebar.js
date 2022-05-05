

//==================import images=======================//
import UserAvatarImg from '../public/icons/avatar.svg'; 


const LeftSidebar = ()=>{



    return(
        <div className="leftSidebar">
            {/* leftSidebar-menucont */}
            <div className="leftSidebar-menucont">
                
                {/* leftSidebar-cashier */}
                <div className="leftSidebar-cashier">

                    <div className="icon"><UserAvatarImg/></div>
                   
                </div>
                
                {/* leftSidebar-menu */}
                <div className="">

                </div>

                {/* leftSidebar-controls */}
                <div className="leftSidebar-controls">

                </div>

            </div>
        </div>
    )
}




export default LeftSidebar;