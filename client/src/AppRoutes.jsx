import { Routes, Route } from 'react-router-dom'
import Feed from './components/Feed'
import UserProfile from './components/UserProfile'
import useAuth from './hooks/useAuth'


function AppRoutes() {
    const { user }= useAuth()
    const {id, username} = user

    return (
        <Routes>
            <Route path='/' element={<Feed/>}></Route>
            <Route path='/profile' element={<UserProfile userId={id} username={username}/>}></Route>
            <Route path='/*' element={
                <div className='NotFound'>Page not found.</div>}>
            </Route>
        </Routes>
    )

}

export default AppRoutes