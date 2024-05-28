import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Divulgation from './pages/Divulgation'
import Login from './pages/Login'
import PasswordRecovery from './pages/PasswordRecovery'
import CreateAccout from './pages/CreateAccount'
import './App.css'

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Divulgation />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/createAccount' element={<CreateAccout />}/>
                <Route path='/passwordRecovery' element={   <PasswordRecovery />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
