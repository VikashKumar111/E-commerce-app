import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { blogService } from "./blogService";


export const getAllBlogs = createAsyncThunk(
    "blog/get",
    async (thunkAPI) => {
        try {
            return await blogService.getBlogs(); 
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)


const initialState = {
    blog:"",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
    error:null,
}


export const blogSlice = createSlice({
    name: "blog",
    initialState: initialState,
    reducers: {},
    extraReducers:
})