import {SEARCH_TEXT, SEARCH_COUNTRIES} from "../actions/search/searchAction"

const initState = {
    text: "",
    searchCountries: []
}

const searchReducer = (state = initState, action) => {
    switch(action.type) {
        case SEARCH_TEXT: 
            return {
                ...state,
                text: action.payload
            }

        case SEARCH_COUNTRIES:
            return {
                ...state,
                searchCountries: action.payload
            }

        default: 
            return state
    }
}

export default searchReducer;