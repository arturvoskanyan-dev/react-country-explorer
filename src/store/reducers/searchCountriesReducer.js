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


export {searchCountriesReducer, getSearchCountryActionCreator}