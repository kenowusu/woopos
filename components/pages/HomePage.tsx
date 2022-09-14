import { HomeLayout } from "../layouts/HomeLayout"
import { MainMenu } from "../MainMenu"
import { BrandAndSearch } from "../BrandAndSearch";
import { MiddleLayoutCategory } from "../MiddleLayoutCategory";
import { FoodList } from "../FoodList";
import {Order} from "../Order";
import { FoodProvider } from "../contexts/foodContext";
import { CategoryFoodsContainer } from "../containers/CategoryFoodsContainer";
import { Receipt } from "../Receipt";

export const HomePage = ()=>{
    return(
        <>
        <FoodProvider>
          {/* <script src="/js/app.js"></script> */}
          <script src="https://printjs-4de6.kxcdn.com/print.min.js"></script>
            <HomeLayout>
              <MainMenu/>
              <BrandAndSearch/>
              <MiddleLayoutCategory/>
              <CategoryFoodsContainer>
                <FoodList/>
              </CategoryFoodsContainer>
             
              <Order/>
              <Receipt/>
            </HomeLayout>
        </FoodProvider>
        </>
    )
}