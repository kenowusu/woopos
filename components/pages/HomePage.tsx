import { HomeLayout } from "../layouts/HomeLayout"
import { MainMenu } from "../MainMenu"
import { MiddleLayoutTop } from "../MiddleLayoutTop";

export const HomePage = ()=>{
    return(
        <>
            <HomeLayout>
              <MainMenu/>
              <MiddleLayoutTop/>
            </HomeLayout>
        </>
    )
}