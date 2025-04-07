const GET_ALL = "get-all";
const SEARCH = "search-text";

const initState = {
    text: "",
    countries: [],
}

const reducer = (state, action) => {
    switch(action.type) {
        case GET_ALL: 
            return {
                ...state,
                countries: action.payload
            }

        case SEARCH: {
            return {
                ...state,
                text: action.payload
            }
        }

        default : 
            return state
    }
}

const getAllActionCreator = (res) => ({type : GET_ALL, payload : res.data})
const getSearchActionCreator = (text) => ({type : SEARCH, payload : text})

export {initState, reducer, getAllActionCreator, getSearchActionCreator}