import { HomeLayout } from "../layouts/HomeLayout"
import { MainMenu } from "../MainMenu"
export const HomePage = ()=>{
    return(
        <>
            <HomeLayout>
              <MainMenu/>
              <div></div>
            </HomeLayout>
        </>
    )
}