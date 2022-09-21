export const Login = ()=>{



    return(
        <div className="auth">
            <div className="w-full">

                <div className="auth-container w-full">
                    
                    <form className="auth-login-form w-full">
                        <div className="text">Welcome Back</div>

                        <div className="form-grp">
                            <input type="text"  placeholder="Enter username"/>
                            <input type="text" placeholder="Enter password"/>
                        </div>
                        <div className="auth-login-submitbtn">
                            <input type="submit" value="Sign In" />
                        </div>
                    
                    </form>
                </div>
            
            
            </div>
        </div>
    )
}