const SEARCH_TEXT = "search-text";
const SEARCH_COUNTRIES = "search-countries"

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

const searchTextAC = (text) => ({type : SEARCH_TEXT, payload : text})
const searchCountriesAC = (countries) => ({type : SEARCH_COUNTRIES, payload : countries}) 

const searchThunk = (text) => (dispatch, getState) => {
    const {countries} = getState().countries;
    dispatch(searchTextAC(text))

    const found = countries.filter((country) => 
        country?.name?.common.toLowerCase().startsWith(text.toLowerCase())
    )
    dispatch(searchCountriesAC(found))
}

export {searchReducer, searchThunk}