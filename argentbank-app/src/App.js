import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import SignInPage from './pages/Sign-in';
import UserPage from './pages/UserPage';

function App() {
    return(
    <Router>
        <Header/>
        <Routes>
            <Route exact path='/' element={<Homepage/>}/>
            <Route path='/sign-in' element={<SignInPage/>}/>
            <Route path='/user' element={<UserPage/>}/>
        </Routes>
        <Footer/>
    </Router>
    )
}

export default App