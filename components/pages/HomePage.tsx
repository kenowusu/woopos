import { HomeLayout } from "../layouts/HomeLayout"
import { MainMenu } from "../MainMenu"
import { MiddleLayoutTop } from "../MiddleLayoutTop";
import { MiddleLayoutCategory } from "../MiddleLayoutCategory";
import { FoodList } from "../FoodList";


export const HomePage = ()=>{
    return(
        <>
            <HomeLayout>
              <MainMenu/>
              <MiddleLayoutTop/>
              <MiddleLayoutCategory/>
              <FoodList/>
            </HomeLayout>
        </>
    )
}