import { API } from "../../components";

const SEARCH_COUNTRY = "search-country";

const initState = {
    searchCountries: []
}

const searchCountriesReducer = (state = initState, action) => {
    switch(action.type) {
        case SEARCH_COUNTRY: 
            return {
                ...state,
                searchCountries: action.payload
            }
        

        default: 
            return state 
    }
}

const getSearchCountryActionCreator = (res) => ({type : SEARCH_COUNTRY, payload : res})

const getSearchCountryThunk = (text) => {
    return (dispatch) => {
        API.searchCountry(text).then((res) => dispatch(getSearchCountryActionCreator(res.data)))
    }
}

export {searchCountriesReducer, getSearchCountryThunk, getSearchCountryActionCreator}