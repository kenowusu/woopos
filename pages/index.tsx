import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



/****************import *************/
import api from '../components/wc/config';
import { HomePage } from '../components/pages/HomePage';


export async function getServerSideProps(context) {
  const cookies = context.req.cookies;

  if(!cookies.userauth && cookies.userauth != 'XKoFDBYHfr'){
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
      props: {}
    }
  }
  
  return {
    props: {}
  }

  
}



const Home: NextPage = () => {

  






  return (

  <>
  <HomePage/>
  </>
  )
}

export default Home
