import { createSlice } from "@reduxjs/toolkit";


export interface LeaveDTO {
    id: number
    type: string
    time_start: string
    time_end: string
    detail: string
    created_at: string
    updated_at: string
}

const leaveSlice = createSlice({
    name: "leave",
    initialState: {
        leave: [] as LeaveDTO[] | null,
    },
    reducers: {
        setLeave: (state, action) => {
            state.leave = action.payload;
        },
        addLeave: (state, action) => {
            state.leave?.push(action.payload);
        }
    },
});

export const { setLeave, addLeave } = leaveSlice.actions;
export default leaveSlice.reducer;
