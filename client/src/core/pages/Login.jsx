import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAuth, fetchRegister, selectIsAuth } from "../../redux/slices/authSlice"
import { Navigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Page } from "../Page"
import { ToastContainer, toast } from "react-toastify"
import { Input } from "../../components"
import "react-toastify/dist/ReactToastify.css"
import "../../assets/css/login.css"

export const Login = () => {
    const [isLogin, setIsLogin] = useState(true)

    const { register, handleSubmit, formState: { errors } } = useForm()

    const isAuth = useSelector(selectIsAuth)
    const dispatch = useDispatch()

    if (isAuth) return <Navigate to="/"/>

    const emailRules = {
        required: "Email is required",
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address"
        },
        minLength: {
            value: 3,
            message: "At least 3 characters"
        },
        maxLength: {
            value: 35,
            message: "No more than 35 characters"
        }
    }

    const passwordRules = {
        required: "Password is required",
        minLength: {
            value: 3,
            message: "At least 3 characters"
        },
        maxLength: {
            value: 35,
            message: "No more than 35 characters"
        }
    }

    const toastOptions = {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    }

    const onSubmit = async (values) => {
        let data

        if (isLogin) data = await dispatch(fetchAuth(values))
        else data = await dispatch(fetchRegister(values))

        if (isLogin && !data.payload)
            return toast.error("There was a problem with your request", toastOptions)
        else if (!isLogin && !data.payload)
            return toast.error("There was a problem with your request", toastOptions)

        if (data.payload.token && data.payload) window.localStorage.setItem("token", data.payload.token)
    }

    return (
        <Page>
            <div className="login-page">

                <form onSubmit={handleSubmit(onSubmit)} className="login-page__form">
                    <Input
                        className="login-page__form-input"
                        type="text"
                        placeholder="Email"
                        name="email"
                        register={register}
                        rules={emailRules}
                        errors={errors}
                    />

                    <Input
                        className="login-page__form-input"
                        type="password"
                        placeholder="Password"
                        name="password"
                        register={register}
                        rules={passwordRules}
                        errors={errors}
                    />

                    <button className="login-page__form-button" type="submit">
                        {
                            isLogin ? "Log In" : "Registration"
                        }
                    </button>

                    <p onClick={() => setIsLogin(!isLogin)} className="login-page__form-switcher">
                        {
                            isLogin ? "Don't have an account yet?" : "Have an account? Log In"
                        }
                    </p>
                </form>

                <ToastContainer />
            </div>
        </Page>
    )
}