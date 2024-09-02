import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getHomeMultiData = createAsyncThunk('home/getHomeMultiData', async () => {
    const res = await axios.get('http://123.207.32.32:8000/home/multidata');
    return res.data;
});

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        banners: [],
        recommends: [],
    },
    reducers: {
        changeBanners(state, { payload }) {
            state.banners = payload;
        },
        changeRecommends(state, { payload }) {
            state.recommends = payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(getHomeMultiData.fulfilled, (state, { payload }) => {
            console.log('请求成功');

            state.banners = payload.data.banner.list;
            state.recommends = payload.data.recommend.list;
        });
    },
});

export const { changeBanners, changeRecommends } = homeSlice.actions;

export default homeSlice.reducer;
