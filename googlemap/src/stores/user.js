import { createSlice } from "@reduxjs/toolkit";

// Stateの初期状態
const initialState = {
    name: '',
    email: '',
    LoginStatus: false,
    ErrorMessage:"",
    password: '',
    user:'',
};

// Sliceを生成する
const slice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setName: (state, action) => {
            return Object.assign({}, state, { name: action.payload })
        },
        clearName: state => {
            return Object.assign({}, state, { name: "" })
        },
        emailChanged: (state, action) =>{
            return Object.assign({}, state, { email: action.payload })
        },
        passwordChanged: (state, action) =>{
            return Object.assign({}, state, { password: action.payload })
        },
        setFireBaseData: (state, action) => {
            return Object.assign({}, state, { user: action.payload })
        },
        setLoginStatus: (state, action) => {
            return Object.assign({}, state, { LoginStatus: action.payload })
        },
        setErrorMessage: (state, action) => {
            return Object.assign({}, state, { ErrorMessage: action.payload })
        },
        resetLogin: state=> {
            return Object.assign({}, state, {email: "", password:""})
        },
        // etc...
    }
});

// Reducerをエクスポートする
export default slice.reducer;

// Action Creatorsをエクスポートする
export const { setName,
    clearName,
    emailChanged,
    passwordChanged,
    setFireBaseData,
    setLoginStatus,
    setErrorMessage,
    resetLogin,
} = slice.actions;