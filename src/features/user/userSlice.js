import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const registerUser = createAsyncThunk("auth/register", async (thunkAPI) => {
    try {
        
    } catch (error) {
        
    }
})

const initialState = {
    user: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message:""
}

export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase()
    }
})