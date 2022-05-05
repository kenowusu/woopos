import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


//=================components=========================//
import LeftSidebar from '../components/LeftSidebar';

const Home: NextPage = () => {
  return (
    <div className="page-container h-full">

      <LeftSidebar/>
    </div>
  )
}

export default Home
