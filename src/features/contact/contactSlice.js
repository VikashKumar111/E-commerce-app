import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { contactService } from "./contactService";



export const createQuery = createAsyncThunk(
  "contact/query",
  async (contactData,thunkAPI) => {
    try {
      return await contactService.postQuery(contactData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


const initialState = {
  contact: "",
  wishlist:[],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  error: null,
};

export const contactSlice = createSlice({
  name: "contact",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createQuery.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createQuery.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.contact = action.payload;
      })
      .addCase(createQuery.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error.message;
      })
  },
});

export default contactSlice.reducer;

