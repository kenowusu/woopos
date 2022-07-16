import { HomeLayout } from "../layouts/HomeLayout"
import { MainMenu } from "../MainMenu"
import { MiddleLayoutTop } from "../MiddleLayoutTop";
import { MiddleLayoutCategory } from "../MiddleLayoutCategory";
import { FoodList } from "../FoodList";
import {OrderBar} from "../OrderBar";
import { FoodProvider } from "../contexts/foodContext";
import { CategoryFoodsContainer } from "../containers/CategoryFoodsContainer";

export const HomePage = ()=>{
    return(
        <>
        <FoodProvider>
            <HomeLayout>
              <MainMenu/>
              <MiddleLayoutTop/>
              <MiddleLayoutCategory/>
              <CategoryFoodsContainer>
                <FoodList/>
              </CategoryFoodsContainer>
             
              <OrderBar/>
            </HomeLayout>
        </FoodProvider>
        </>
    )
}