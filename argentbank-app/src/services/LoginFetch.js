import { useEffect, useState } from "react"

const loginUrl = 'http://localhost:3001/api/v1/user/login'

function LoginFetch(email, password) {
    const [token, setToken] = useState()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        async function fetchData(){
            return await fetch(loginUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            .then((res) => {
                if(res.ok){
                    return res.json()
                }
            })
            .then((data) => {
                setToken(data.body.token)
                setIsLoading(false)
            })
            .catch(error => console.log(error))
        }
        fetchData()
    },[])
    return { isLoading, token}
}

export default LoginFetch