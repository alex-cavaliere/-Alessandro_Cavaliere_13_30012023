import { useState } from "react"

const loginUrl = 'http://localhost:3001/api/v1/user/login'

export async function LoginFetch(credentials) {
    const [token, setToken] = useState()
    const [isLoading, setIsLoading] = useState(true)
    return await fetch(loginUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then((res) => {
        if(res.ok){
            return res.json()
        }
    })
    .then((data) => {
        setToken(data.body.token)
        console.log(token)
        setIsLoading(false)
    })
    .catch(error => console.log(error))
    }
