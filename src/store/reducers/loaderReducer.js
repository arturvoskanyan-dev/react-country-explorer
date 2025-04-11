const LOADER = "loader";

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

const loaderAC = (isValue) => ({type : LOADER, payload : isValue})

export {loaderAC, loaderReducer}