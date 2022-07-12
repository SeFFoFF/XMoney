import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { Home, Login } from "./core/pages"
import { useDispatch, useSelector } from "react-redux"
import { fetchAuthMe, selectIsAuth } from "./redux/slices/authSlice"
import "../src/assets/css/base.css"

function App() {
    const dispatch = useDispatch()
    const isAuth = useSelector(selectIsAuth)

    useEffect(() => {
        dispatch(fetchAuthMe())
    }, [])
    
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </div>
    )
}

export default App