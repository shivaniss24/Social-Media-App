import React from 'react'
import "../styles.css"

const Login = ({ loginWithRedirect }) => {

    return (
        <div>
            <a onClick={() => loginWithRedirect()} className="login-button waves-effect waves-light btn-large deep-purple accent-2 left">Login</a>
            <span className='logo'>Connect</span>
        </div>
    )
}

export default Login