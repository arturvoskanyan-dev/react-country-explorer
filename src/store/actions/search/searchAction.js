const SEARCH_TEXT = "search-text";
const SEARCH_COUNTRIES = "search-countries";

const searchTextAC = (text) => ({type : SEARCH_TEXT, payload : text})
const searchCountriesAC = (countries) => ({type : SEARCH_COUNTRIES, payload : countries}) 

export {SEARCH_TEXT, SEARCH_COUNTRIES, searchTextAC, searchCountriesAC}