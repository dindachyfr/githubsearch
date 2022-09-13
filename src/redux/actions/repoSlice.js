import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import services from '../../config/services';

export const repoList = createAsyncThunk("repo/repoList", async (payload, cb) => {
    const data = await services.get(`users/${payload.username}/repos?per_page=${payload.limit}&page=${payload.page}`)
    if (data.status === 200) {
        // if (cb) cb(profile)
        return data
    }
})

export const repoDetail = createAsyncThunk("repo/repoDetail", async (payload, cb) => {
    const data = await services.get(`repos/${payload.username}/${payload.name}`)
    if (data.status === 200) {
        // if (cb) cb(profile)
        return data
    }
})

const repoSlice = createSlice({
    name: 'repo',
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
        [repoList.pending]: (state) => {
            state.loading = true;
        },
        [repoList.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload.data;
            state.error = null;
        },
        [repoList.rejected]: (state, action) => {
            state.loading = false;
            state.data = {};
            state.error = action.error.message;
        },

        [repoDetail.pending]: (state) => {
            state.detail = {
                loading: true
            }
        },
        [repoDetail.fulfilled]: (state, action) => {
            state.detail = {
                loading: false,
                data: action.payload.data,
                error: null
            }
        },
        [repoDetail.rejected]: (state, action) => {
            state.detail = {
                loading: false,
                data: {},
                error: action.error.message
            }
        },

    }
})

export default repoSlice.reducer