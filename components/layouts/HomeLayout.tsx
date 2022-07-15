export const HomeLayout = ({children})=>{

    const [mainmenu] = children || [];
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
                      
                        <div>
                            <div><h1>yeah top</h1></div>
                        </div>

                        <div>
                            <div><h1>yeah top</h1></div>
                        </div>

                        <div>
                            <div><h1>yeah top</h1></div>
                        </div>

                    </div>

                </div>




                {/* right column */}
                <div className="homelayout-rightcol-container">
                    <div className="homelayout-rightcol">
                        <h3>Heading three</h3>
                    </div>
                </div>


            </div>
        </div>
    )
}