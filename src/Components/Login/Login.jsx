import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css"
const Login = () => {
    const login = (e) => {
        e.preventDefault();

    }
    const register = (e) => {
        e.preventDefault();

    }
    return (
        <div className="login">
            <Link to='/'>
                <img src="https://img.etimg.com/thumb/msid-59738992,width-640,resizemode-4,imgsize-25499/amazon.jpg" alt="logo" className="login__logo" />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email" />
                    <h5>Password</h5>
                    <input type="password" />
                    <button onClick={login} type='submit' className='login__signInButton'>Sign In</button>
                </form>

                <p>by signing-in you agree to our terms and conditions</p>
                <button onClick={regiser} className='login__registerButton'>Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login;