import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../pages/home/Home'
import { Login } from '../pages/components/login/Login'
import { About } from '../pages/components/about/About'

export const AppRoutes = () => {

    return(
        <Routes>
            <Route path='/home' element={<Home/>}/> 
            <Route path='/login' element={<Login/>}/> 
            <Route path='/about' element={<About/>}/> 

            <Route path='*' element={<Navigate to='/home' />} />
        </Routes>
    )

}