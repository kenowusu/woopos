import type { NextPage } from 'next'
import Head from 'next/head'




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
  <Head>
    <link rel="icon" href="/images/favicon.ico" />
    <title>Login Basilic Pos</title>

  </Head>
    <Login/>
  </>
  )
}

export default LoginPage;
