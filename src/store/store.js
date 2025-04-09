const GET_ALL = "get-all";
const SEARCH = "search-text";
const GET_COUNTRY = "get-country";
const SEARCH_COUNTRY = "search-country";

const initState = {
    text: "",
    countries: [],
    country: {},
    searchCountries: []
}

const reducer = (state, action) => {
    switch(action.type) {
        case GET_ALL:
            return {
                ...state,
                countries: action.payload
            }

        case GET_COUNTRY: {
            return {
                ...state,
                country: action.payload
            }
        }

        case SEARCH: {
            return {
                ...state,
                text: action.payload
            }
        }

        case SEARCH_COUNTRY: {
            return {
                ...state,
                searchCountries: action.payload
            }
        }

        default : 
            return state
    }
}

const getAllActionCreator = (res) => ({type : GET_ALL, payload : res.data})
const getSearchActionCreator = (text) => ({type : SEARCH, payload : text})
const getCountryActionCreator = ([res]) => ({type : GET_COUNTRY, payload : res})
const getSearchCountryActionCreator = (res) => ({type : SEARCH_COUNTRY, payload : res})

export {initState, reducer, getAllActionCreator, getSearchActionCreator, getCountryActionCreator, getSearchCountryActionCreator}