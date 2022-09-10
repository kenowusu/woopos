import { HomeLayout } from "../layouts/HomeLayout"
import { MainMenu } from "../MainMenu"
import { MiddleLayoutTop } from "../MiddleLayoutTop";
import { MiddleLayoutCategory } from "../MiddleLayoutCategory";
import { FoodList } from "../FoodList";
import {OrderBar} from "../OrderBar";
import { FoodProvider } from "../contexts/foodContext";
import { CategoryFoodsContainer } from "../containers/CategoryFoodsContainer";
import { ReceiptPreview } from "../ReceiptPreview";

export const HomePage = ()=>{
    return(
        <>
        <FoodProvider>
          <script src="https://printjs-4de6.kxcdn.com/print.min.js"></script>
            <HomeLayout>
              <MainMenu/>
              <MiddleLayoutTop/>
              <MiddleLayoutCategory/>
              <CategoryFoodsContainer>
                <FoodList/>
              </CategoryFoodsContainer>
             
              <OrderBar/>
              <ReceiptPreview/>
            </HomeLayout>
        </FoodProvider>
        </>
    )
}