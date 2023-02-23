import { useSelector } from "react-redux"

const loginUrl = 'http://localhost:3001/api/v1/user/login'

export async function LoginFetch() {
    const login = useSelector(state => state.login)
    try {
        const res = await fetch(loginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: login.email,
                password: login.password
            })
        })
        const data = await res.json()
        return console.log(data)
    } catch (err) {
        return console.log(err)
    }
}