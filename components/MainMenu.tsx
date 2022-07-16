import Link from 'next/link';

//==================import images=======================//
import LogoSvg from '../public/icons/logo.svg'; 
import HomeSvg from '../public/icons/home.svg';
import DashboardSvg from '../public/icons/dashboard.svg';
import SettingSvg from '../public/icons/settings.svg';
import LogoutSvg from '../public/icons/logout.svg';

export const MainMenu = ()=>{



    return(
       <div className='mainmenu-container'>
        <div className="mainmenu">

            <div className='mainmenu-logo'>
                <LogoSvg/>
            </div>

            <div className='mainmenu-menu'>

                <ul className='mainmenu-nav'>
                    <li  className='active'><Link href="/"><a><span className='img'><HomeSvg/></span><span className='text'>sdf</span></a></Link></li>
                    <li><Link href="#"><a><span className='img'><DashboardSvg/></span><span className='text'>sdf</span></a></Link></li>
                    <li><Link href="#"><a><span className='img'><SettingSvg/></span><span className='text'>sdf</span></a></Link></li>

                </ul>
            </div>

            <div className='mainmenu-logout'>
              <LogoutSvg/>
            </div>
            
        </div>
        
       </div>
    )
}




