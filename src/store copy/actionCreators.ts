import axios from "axios";
import * as actionTypes from "./constants";

export const addNumberAction = (num: number) => ({
    type: actionTypes.ADD_NUMBERS,
    payload: num
})

export const subNumberAction = (num: number) => ({
    type: actionTypes.SUB_NUMBERS,
    payload: num
})

export const setBannerListAction = (bannerList: any) => ({
    type: actionTypes.SET_BANNER_LIST,
    payload: bannerList
})

export const setRecommendsListAction = (recommendsList: any) => ({
    type: actionTypes.SET_RECOMMENDS_LIST,
    payload: recommendsList
})

export const fetchHomeDataAction = () => {
    return (dispatch: any, getData: any) => {
        axios.get('http://123.207.32.32:8000/home/multidata').then((res: any) => {
            console.log('启动');

            const bannerList = res.data.data.banner.list;
            dispatch(setBannerListAction(bannerList))
           
            const recommedsList = res.data.data.recommend.list;
            dispatch(setRecommendsListAction(recommedsList))
            
        });
    }
}
