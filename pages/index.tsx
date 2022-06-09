import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


//=================components=========================//
import LeftSidebar from '../components/LeftSidebar';
import TopBar from '../components/TopBar';
import OrderBar from '../components/OrderBar';
import Category from '../components/Category';

/****************import *************/
import api from '../wc/config';




const Home: NextPage = () => {








  return (
    <div className="page-container h-full">
      
      {/* page first row */}
      <div className="page-first-row">
        <div className="">
          <TopBar/>
        </div>
      </div>
      
      {/* page second row */}
      <div className="page-second-row">

        {/* page-second-row-left */}
        <div className="page-second-row-left">
          <LeftSidebar/>
        </div>
        
        {/* page-second-row-middle */}
        <div className="page-second-row-middle">
            <Category/>
        </div>

        {/* page-second-row-right */}
        <div className="page-second-row-right">
          <OrderBar/>
        </div>
      </div>
      

      
   </div>

  )
}

export default Home
