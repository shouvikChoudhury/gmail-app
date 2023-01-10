import { createSlice } from '@reduxjs/toolkit'
export const mailslice = createSlice({
    name: 'mail',
    initialState: {
        isOpen: false,
        selectedMessage: null
    },
    reducers: {
        openCompose: (state) => {
            state.isOpen = true
        },
        closCompose: (state) => {
            state.isOpen = false
        },
        openMessage: (state, action) => {
            state.selectedMessage = action.payload
        }
    }
})

export const { openCompose, closCompose, openMessage } = mailslice.actions

export const selectIsOpen = (state) => state.mail.isOpen

export const selectMail = (state) => state.mail.selectedMessage

export default mailslice.reducer