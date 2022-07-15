export const HomeLayout = ({children})=>{

    const [mainmenu,middlelayoutop,middlecategory] = children || [];
    return(
        <div>
            <div className="homelayout">

                {/* three columns */}

                {/* left column */}
                <div className="homelayout-leftcol-container">
                    <div className="homelayout-leftcol">
                        {mainmenu}
                    </div>
                </div>





                 {/* middle column */}
                <div className="homelayout-midcol-container">
                    <div className="homelayout-midcol">
                      
                        <div className="h-full">
                            <div className="h-full">
                                {middlelayoutop}
                            </div>
                        </div>

                        <div>
                            <div>{middlecategory}</div>
                        </div>

                        <div>
                            <div></div>
                        </div>

                    </div>

                </div>




                {/* right column */}
                <div className="homelayout-rightcol-container">
                    <div className="homelayout-rightcol">
                        <h3></h3>
                    </div>
                </div>


            </div>
        </div>
    )
}