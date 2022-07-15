import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


//=================components=========================//
import LeftSidebar from '../components/MainMenu';
import TopBar from '../components/TopBar';
import OrderBar from '../components/OrderBar';
import Category from '../components/MiddleLayoutCategory';

/****************import *************/
import api from '../wc/config';
import { HomePage } from '../components/pages/HomePage';




const Home: NextPage = () => {








  return (

  <>
  <HomePage/>
  </>
  )
}

export default Home
