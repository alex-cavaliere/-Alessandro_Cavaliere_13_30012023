import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { authSuccessful, authFailed, updateState, store, credentials } from "../store";
import { LoginFetch } from "../services/LoginFetch";
import { useSelector, useDispatch } from "react-redux";
import LoginHeader from '../components/LoginHeader';

const loginUrl = 'http://localhost:3001/api/v1/user/login'
export const userUrl = 'http://localhost:3001/api/v1/user/profile'

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
        dispatch(credentials({
            ...login,
            [name]: value
        }))
    }
    const UserAuth = (e) => {
        e.preventDefault()
        fetch(loginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: login.email,
                password: login.password
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data.body.token){
                localStorage.setItem('jwt', data.body.token)
                fetch(userUrl, {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer' + data.body.token
                    }
                })
                .then(res => res.json())
                .then(user => {
                    dispatch(authSuccessful(user.body))
                    onNavigate(`/user/${user.body.id}`)
                })
                return login
            }else{
                dispatch(authFailed())            
            }
        })
        .catch(err => {
            console.log(err)
            alert('identifiant incorrenct')
        })
    }
    console.log(login)
    return(
        <div className="login">
            <LoginHeader />
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
        </div>
    )
}

export default SignInPage