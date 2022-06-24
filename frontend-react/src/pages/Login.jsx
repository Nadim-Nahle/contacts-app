import React from "react";

const Login = () => {

    return(
        <div className="form-centre">
            <form className="signup-form">
            <div className="newform">
                <h1>Login Form</h1>
                <div className='txt_field'>

                    <label htmlFor="email">Email</label>
                    <input type='email' id='email-login' className='form-control' name='email' />

                    <label htmlFor="email">Password</label>
                    <input type='passowrd' id='password-login' className='form-control' name='email' />
                    <button className="signup-btn">Signup</button>
                </div>
            </div>
            
            </form>
        </div>
        
    )
}


export default Login;