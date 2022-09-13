import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import services from '../../config/services';

export const usersList = createAsyncThunk("user/usersList", async (payload, cb) => {
    const data = await services.get(`users/per_page=${payload.limit}&page=${payload.page}`)
    if (data.status === 200) {
        return data
    }
})

export const searchUser = createAsyncThunk("user/searchUser", async (payload, cb) => {
    const data = await services.get(`search/users?q=${payload.q}&per_page=${payload.limit}&page=${payload.page}`)
    if (data.status === 200) {
        // if (cb) cb(profile)
        return data
    }
})

export const oneUser = createAsyncThunk("user/oneUser", async (payload, cb) => {
    const data = await services.get(`users/${payload.username}`)
    if (data.status === 200) {
        return data
    }
})

const userSlice = createSlice({
    name: 'users',
    initialState: {
        loading: false,
        data: {},
        error: null,
        detail: {
            loading: false,
            data: {},
            error: null
        }
    },
    extraReducers: {
        [usersList.pending]: (state) => {
            state.loading = true;
        },
        [usersList.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload.data;
            state.error = null;
        },
        [usersList.rejected]: (state, action) => {
            state.loading = false;
            state.data = {};
            state.error = action.error.message;
        },


        [searchUser.pending]: (state) => {
            state.loading = true;
        },
        [searchUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload.data;
            state.error = null;
        },
        [searchUser.rejected]: (state, action) => {
            state.loading = false;
            state.data = {};
            state.error = action.error.message;
        },


        [oneUser.pending]: (state) => {
            state.detail = {
                loading: true
            }
        },
        [oneUser.fulfilled]: (state, action) => {
            state.detail = {
                loading: false,
                data: action.payload.data,
                error: null
            }
        },
        [oneUser.rejected]: (state, action) => {
            state.detail = {
                loading: false,
                data: {},
                error: action.error.message
            }
        },
    }
})

export default userSlice.reducer