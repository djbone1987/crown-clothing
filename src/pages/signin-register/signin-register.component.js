import React from 'react';
import './signin-register.style.scss';
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SigninRegisterPage = () => (
    <div className='signin-register'>
    <SignIn />
        <SignUp />
    </div>
)

export default SigninRegisterPage;