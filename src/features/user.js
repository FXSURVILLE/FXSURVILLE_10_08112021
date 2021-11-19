import { createSlice } from '@reduxjs/toolkit'
 
const initialStateValue = { email: "", password: "" };

export const UserSlice = createSlice({
    // le nom du slice
    name: "user",
    // le state initial
    initialState: { value: initialStateValue},
    // reducers permet de définir les actions et le reducer
    reducers: {
        // l'action login
        login: (state, action) => {
        // met en valeur ce qu'on a du payload
            state.value = action.payload
        },
    },
})

export const {login} = UserSlice.actions

export default UserSlice.reducer


// import { useSelector } from "react-redux";
// const user = useSelector((state) => state.user.value)