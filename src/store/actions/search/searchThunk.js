import { searchCountriesAC, searchTextAC } from "./searchAction";

const searchThunk = (text) => (dispatch, getState) => {
    const {countries} = getState().countries;
    dispatch(searchTextAC(text))

    const found = countries.filter((country) => 
        country?.name?.common.toLowerCase().startsWith(text.toLowerCase())
    )
    dispatch(searchCountriesAC(found))
}

export default searchThunk;