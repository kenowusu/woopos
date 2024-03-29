import {useState} from 'react';
import Cookies from 'universal-cookie';
import Image from 'next/image'
const cookies = new Cookies()

const cashierUsername = process.env.NEXT_PUBLIC_cashier_username;
const cashierPassword = process.env.NEXT_PUBLIC_cashier_password;



export const Login = ()=>{

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

  

    const login = (e)=>{
        e.preventDefault()

        if(username === cashierUsername && password === cashierPassword){

            //username and password is correct 
            //generate jwt and set cookie
            const btn = document.getElementById('auth-login-btn');
            btn.style.backgroundColor = "#fcdeea";
            cookies.set('userauth','XKoFDBYHfr')
            window.location.href = "/"
        }else{      
            setError("invalid username or password")   
        }
    }

    return(
        <div className="auth">
            <div className="w-full">
{/* 
                <div><Image src="/images/basilic_logo.png" width={263} height={133}/></div> */}
                <div className="auth-container w-full">
                    
                    <div className="auth-error">{error}</div>
                    <form className="auth-login-form w-full">
                        <div className="text">Welcome Back</div>

                        <div className="form-grp">
                            <input type="text"  placeholder="Enter username"
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}
                            />
                            <input type="password" placeholder="Enter password"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                        </div>
                        <div className="auth-login-submitbtn">
                            <input type="submit" value="Sign In" 
                            id="auth-login-btn"
                            onClick={login}
                            />
                        </div>
                    
                    </form>
                </div>
            
            
            </div>
        </div>
    )
}