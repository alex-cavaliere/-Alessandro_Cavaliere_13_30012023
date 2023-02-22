import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { authSuccessful, authFailed, updateState, store } from "../store";
import { LoginFetch } from "../services/LoginFetch";
import { useSelector, useDispatch } from "react-redux";

function SignInPage(){
    const onNavigate = useNavigate()
    const dispatch = useDispatch()
    const login = useSelector((state) => state.login)
    /*const token = LoginFetch({
        email: 'tony@stark.com', 
        password: 'password123'
    })
    if(!token.isLoading){
        console.log(token)
    }*/
    const handleInput = (e) => {
        const value = e.target.value
        let name = e.target.id
        if(name === 'username'){
            name = 'email'
        }
        dispatch(updateState({
            ...login,
            [name]: value
        }))
    }
    console.log(login)
    const UserAuth = (e) => {
  
        console.log(login)
        e.preventDefault()  
        onNavigate('/user')
    }
    return(
        <main style={{padding:'8rem'}} className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={UserAuth}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input onChange={handleInput} type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input onChange={handleInput} type="current-password" id="password" />
                    </div>
                    <div className="input-remember">
                        <label htmlFor="remember-me">Remember me</label>
                        <input type="checkbox" id="remember-me" />
                    </div>
                    <button className="sign-in-button">Sign In</button> 
                </form>
            </section>
        </main>
    )
}

export default SignInPage