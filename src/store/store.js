import {createStore, combineReducers} from "redux"
import { textReducer } from "./reducers/textReducer";
import { countriesReducer } from "./reducers/countriesReducer";
import { countryReducer } from "./reducers/countryReducer";
import { searchCountriesReducer } from "./reducers/searchCountriesReducer";

const rootReducers = combineReducers({
    text: textReducer,
    countries: countriesReducer,
    country: countryReducer,
    searchCountries: searchCountriesReducer
})

const store = createStore(rootReducers);

export default store