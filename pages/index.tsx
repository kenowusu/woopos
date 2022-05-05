import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


//=================components=========================//
import LeftSidebar from '../components/LeftSidebar';
import TopBar from '../components/TopBar';
import OrderBar from '../components/OrderBar';

const Home: NextPage = () => {
  return (
    <div className="page-container h-full">


     <div className="left">
      <LeftSidebar/>
     </div>


      <div className="middle">
        <TopBar/>
      </div>
      
      <div className="right">
       <OrderBar/>
      </div>

      
   </div>

  )
}

export default Home
