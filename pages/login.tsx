import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



/****************import *************/
import api from '../components/wc/config';
import { Login } from '../components/Login';




const LoginPage: NextPage = () => {








  return (

  <>
    <Login/>
  </>
  )
}

export default LoginPage;
