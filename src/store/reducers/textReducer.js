const SEARCH = "search-text";

const initState = {
    text : ""
}

const textReducer = (state = initState, action) => {
    switch(action.type) {
        case SEARCH: 
            return {
                ...state,
                text: action.payload
            }


        default : 
            return state
    }
}

const getSearchActionCreator = (text) => ({type : SEARCH, payload : text})

export {textReducer, getSearchActionCreator}