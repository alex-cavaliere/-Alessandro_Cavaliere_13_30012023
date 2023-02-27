import { useDispatch, useSelector } from "react-redux"
import { userUrl } from "./Sign-in"
import { authSuccessful, authFailed, updateState } from "../store";
import ProfileHeader from "../components/ProfileHeader";

function UserPage(){
    const token = localStorage.getItem('jwt')
    const dispatch = useDispatch()
    const userData = useSelector((state) => state.login)
    if(token){
        fetch(userUrl, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer' + token
            }
        })
        .then(res => res.json())
        .then(userData => dispatch(authSuccessful(userData.body)))
    }
    if(userData.isAuth){
        console.log(userData)
        return(
            <div className="userpage">
                <ProfileHeader firstName={userData.firstName}/>
                <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br />{userData.firstName + ' ' + userData.lastName}</h1>
                    <button className="edit-button">Edit Name</button>
                </div>
                <h2 className="sr-only">Accounts</h2>
                <section className="account">
                    <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                </main>
            </div>
        )
    }
}

export default UserPage