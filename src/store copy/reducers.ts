import { ADD_NUMBERS, SET_BANNER_LIST, SET_RECOMMENDS_LIST, SUB_NUMBERS } from "./constants";

const initialState = {
    counter: 100,
    bannerList: [],
    recommendsList: []
}

const reducers = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_NUMBERS:
            return {...state, counter: state.counter + action.payload};
    
        case SUB_NUMBERS:
            return {...state, counter: state.counter - action.payload}

        case SET_BANNER_LIST:
            return {...state, bannerList: action.payload}
            
        case SET_RECOMMENDS_LIST:
            return {...state, recommendsList: action.payload}
        default:
            return state;
    }
}

export default reducers;