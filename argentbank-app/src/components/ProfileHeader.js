import argentBankLogo from "../assets/img/argentBankLogo.png"
import { NavLink } from "react-router-dom"

function ProfileHeader(props){
    const firstName = props.firstName
    return(
        <nav className="main-nav">
            <NavLink to='/' className="main-nav-logo">
                <img
                className="main-nav-logo-image"
                src={argentBankLogo}
                alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                <i style={{
                    'marginRight': '2rem',
                    'fontWeight': 'bold'
                    }} 
                    className="fa fa-user-circle">{firstName}
                    </i>
                <NavLink to='/' className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    log out
                </NavLink>
            </div>
        </nav>
    )
}

export default ProfileHeader