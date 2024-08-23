import { combineReducers } from "redux"

const exampleReducer = (state = {}, action) => {
    console.log(action);
    
    switch (action.type) {
        case 'EXAMPLE_ACTION':
            return { ...state, example: action.payload }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    example: exampleReducer
})

export default rootReducer