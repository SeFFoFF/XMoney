import React from "react"
import { Page } from "../Page"
import { useDispatch, useSelector } from "react-redux"
import { logout, selectIsAuth } from "../../redux/slices/authSlice"
import { Navigate } from "react-router-dom"

export const Home = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(selectIsAuth)

    const onLogout = () => {
        dispatch(logout())
        window.localStorage.removeItem("token")
    }

    if (!isAuth) {
        return <Navigate to="/login"/>
    }

    return (
        <Page>
            {
                isAuth &&
                <div>
                    <h2>Welcome to Home page!</h2>
                    <button onClick={onLogout}>Log out</button>
                </div>
            }
        </Page>
    )
}