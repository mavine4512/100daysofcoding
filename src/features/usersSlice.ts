import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from './actionCreator';
import { ProcessingStatus } from "../interface/enums";

interface InitialState {
    list: any[];
    status: ProcessingStatus ;
}

const initialState: InitialState = {
        list: [],
        status: ProcessingStatus.IDLE,
    }

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state) => {
            state.status = ProcessingStatus.PENDING;
        });
        builder.addCase(getUsers.fulfilled, (state,action) => {
            // state.list.push(action.payload)
            // using fetch, no need to ude push but if it was axios we must use push function.
            state.list = action.payload;
            state.status = ProcessingStatus.SUCCEEDED;
        });
        builder.addCase(getUsers.rejected, (state) => {
            state.status = ProcessingStatus.FAILED;
        });
    }
})

export default usersSlice.reducer;

export const selectList = ( state: { users: InitialState } ) => state.users.list;
