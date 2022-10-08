import Head from 'next/head';


/****my imports ****/
import { HomeLayout } from "../layouts/HomeLayout"
import { MainMenu } from "../MainMenu"
import { BrandAndSearch } from "../BrandAndSearch";
import { FoodList } from "../FoodList";
import {Order} from "../Order";
import { FoodProvider } from "../contexts/foodContext";
import { FoodContainer} from "../containers/FoodContainer";
import { Receipt } from "../Receipt";
import { CategoryContainer } from "../containers/CategoryContainer";
import { CategoryList } from "../CategoryList";




export const HomePage = ()=>{
    return(
        <>
        <Head>
          <link rel="icon" href="/images/favicon.ico" />
          <title>Basilic Pos</title>
        </Head>
        <FoodProvider>
          {/* comment out this script to disable service worker */}
          {/* <script src="/js/app.js" defer></script> */}
          <script src="https://printjs-4de6.kxcdn.com/print.min.js" defer></script>
            <HomeLayout>
              <MainMenu/>
              <BrandAndSearch/>

              
              <CategoryContainer>
                  <CategoryList/>
              </CategoryContainer>

              <FoodContainer>
                <FoodList/>
              </FoodContainer>
             
              <Order/>
              <Receipt/>
            </HomeLayout>
        </FoodProvider>
        </>
    )
}