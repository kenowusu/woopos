import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



/****************import *************/
import api from '../components/wc/config';
import { HomePage } from '../components/pages/HomePage';




const Home: NextPage = () => {








  return (

  <>
  <HomePage/>
  </>
  )
}

export default Home
