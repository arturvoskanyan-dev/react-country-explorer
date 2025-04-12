import {LOADER} from "../actions/loader/loaderAction"

const initState = {
    loader: false
}

const loaderReducer = (state = initState, action) => {
    switch(action.type) {
        case LOADER:
            return {
                ...state,
                loader: action.payload
            }
        default: 
            return state
    }
}

export default loaderReducer;