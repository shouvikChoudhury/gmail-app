import React from 'react'
import { useDispatch } from 'react-redux'
import "./css/login.css"
import { signIn } from './features/userslice'
import { authen, provider } from './Firebase'

const Login = () => {
    const dispatch = useDispatch()
    const loginHandler = (e) => {
        authen.signInWithPopup(provider).then(({ user }) => {
            dispatch(signIn({
                displayName: user.displayName,
                photoURL: user.photoURL,
                email: user.email
            }))
        }).catch(error => { alert(error) })
    }
    return (
        <div className='loginwrapper'>
            <div className='login'>
                <h1>Welcome to </h1>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Gmail2020.logo.png" alt="" />
                <button className='gmail_login' onClick={loginHandler}>Login with gmail</button>
            </div>
        </div>
    )
}

export default Login