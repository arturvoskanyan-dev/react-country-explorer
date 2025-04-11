import {createStore, combineReducers, applyMiddleware} from "redux"
import { textReducer } from "./reducers/textReducer";
import { countriesReducer } from "./reducers/countriesReducer";
import { countryReducer } from "./reducers/countryReducer";
import { searchCountriesReducer } from "./reducers/searchCountriesReducer";
import { thunk } from "redux-thunk";

const rootReducers = combineReducers({
    text: textReducer,
    countries: countriesReducer,
    country: countryReducer,
    searchCountries: searchCountriesReducer
})

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store