import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



/****************import *************/
import api from '../components/wc/config';
import { Login } from '../components/Login';




export async function getServerSideProps(context) {
  const cookies = context.req.cookies;

  if(cookies.userauth && cookies.userauth == 'XKoFDBYHfr'){
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
      props: {}
    }
  }
  
  return {
    props: {}
  }

  
}

const LoginPage: NextPage = () => {








  return (

  <>
    <Login/>
  </>
  )
}

export default LoginPage;
