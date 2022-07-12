import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchAuth = createAsyncThunk("/fetchAuth", async (params) => {
    // const { data } = await axios.post("/auth/login", params)

    if (params.email === "anton.yefimov19@gmail.com" && params.password === "test123") {
        const data = {
            name: "Anton",
            email: "anton.yefimov19@gmail.com",
            password: "test123",
            token: "amogus"
        }
        return data
    }
})

export const fetchRegister = createAsyncThunk("/fetchRegister", async (params) => {
    const { data } = await axios.post("/auth/register", params)
    return data
})

export const fetchAuthMe = createAsyncThunk("/fetchAuthMe", async () => {
    // const { data } = await axios.get("/auth/me")

    const data = null
    return data
})

const initialState = {
    data: null,
    status: "loading"
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null
        }
    },
    extraReducers: {
        [fetchAuth.pending]: (state) => {
            state.status = "loading"
            state.data = null
        },
        [fetchAuth.fulfilled]: (state, action) => {
            state.status = "loaded"
            state.data = action.payload
        },
        [fetchAuth.rejected]: (state) => {
            state.status = "error"
            state.data = null
        },
        [fetchRegister.pending]: (state) => {
            state.status = "loading"
            state.data = null
        },
        [fetchRegister.fulfilled]: (state, action) => {
            state.status = "loaded"
            state.data = action.payload
        },
        [fetchRegister.rejected]: (state) => {
            state.status = "error"
            state.data = null
        },
        [fetchAuthMe.pending]: (state) => {
            state.status = "loading"
            state.data = null
        },
        [fetchAuthMe.fulfilled]: (state, action) => {
            state.status = "loaded"
            state.data = action.payload
        },
        [fetchAuthMe.rejected]: (state) => {
            state.status = "error"
            state.data = null
        },
    }
})

export const selectIsAuth = state => Boolean(state.auth.data)

export const { logout } = authSlice.actions

export const authReducer = authSlice.reducer