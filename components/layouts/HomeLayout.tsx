export const HomeLayout = ({children})=>{

    const [mainmenu,middlelayoutop,middlecategory,foodlist,orderbar,receiptpreview] = children || [];
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

                        <div >
                            <div>{middlecategory}</div>
                        </div>

                        <div style={{marginTop:"35px"}}>
                            <div>
                                {foodlist}
                            </div>
                        </div>

                    </div>

                </div>




                {/* right column */}
                <div className="homelayout-rightcol-container h-full">

                    <div className="flex h-full">
                        <div className="homelayout-rightcol h-full"
                        style={{
                            marginRight:'60px'
                        }}
                        >
                            {orderbar}
                        </div>

                        <div>
                        {receiptpreview}
                        </div>
                    </div>
                    
                </div>
               
         

            </div>
        </div>
    )
}