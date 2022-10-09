import { createSlice } from "@reduxjs/toolkit";
import { getByFileName, getFiles } from "../../services/files";

const initialState = {
  files: [],
  isLoading: false,
  error: false
};

const filesSlice = createSlice({
  initialState,
  name: "files",
  reducers: {
    setFiles: (state, action) => {
        state.files = action.payload
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(getFiles.pending, (state) => {
        state.isLoading = true    
    })
    addCase(getFiles.fulfilled, (state, action) => {
        state.isLoading = false
        state.files = action.payload
        state.error = false
    })
    addCase(getFiles.rejected, (state) => {
        state.isLoading = false,
        state.error = true
    })

    addCase(getByFileName.pending, (state) => {
        state.isLoading = true    
    })
    addCase(getByFileName.fulfilled, (state, action) => {
        state.isLoading = false
        state.files = action.payload
        state.error = false
    })
    addCase(getByFileName.rejected, (state) => {
        state.isLoading = false,
        state.error = true
    })
  },
});

export const {
    setFiles,
} = filesSlice.actions

export const selectFiles = (state) => state.filesReducer
export default filesSlice.reducer
