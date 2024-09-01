import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: "appSlice",
    initialState: {
        open: false,
        emails: [],
        selectedMail: null,
        SearchText:""
    },
    reducers: {
        setOpen: (state, action) => {
            state.open = action.payload;
        },
        setEmails: (state, action) => {
            state.emails = action.payload;
        },
        setselectedMail: (state, action) => {
            state.selectedMail = action.payload;
        },
        setSearchText:(state, action)=> {
            state.SearchText = action.payload
        }
    }
});

export const { setOpen, setEmails, setselectedMail, setSearchText } = appSlice.actions;
export default appSlice.reducer;