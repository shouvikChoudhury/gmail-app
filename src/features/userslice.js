import { createSlice } from '@reduxjs/toolkit'
export const userslice = createSlice({
    name: 'user',
    initialState: {
        value: null
    },
    reducers: {
        signIn: (state, action) => {
            state.value = action.payload
        },
        signOut: (state) => {
            state.value = null
        }
    }
})

export const { signIn, signOut } = userslice.actions

export const selectUser = (state) => state.user.value

export default userslice.reducer