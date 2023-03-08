import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../pages/home/Home'
import { About } from '../pages/about/About'

export const AppRoutes = () => {

    return(
        <Routes>
            <Route path='/home' element={<Home/>}/> 
            <Route path='/about' element={<About/>}/> 

            <Route path='*' element={<Navigate to='/home' />} />
        </Routes>
    )

}