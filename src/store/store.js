import {createStore, combineReducers, applyMiddleware} from "redux"
import { countriesReducer } from "./reducers/countriesReducer";
import { countryReducer } from "./reducers/countryReducer";
import { loaderReducer } from "./reducers/loaderReducer";
import { searchReducer } from "./reducers/searchReducer";
import { thunk } from "redux-thunk";

const rootReducers = combineReducers({
    countries: countriesReducer,
    country: countryReducer,
    searchCountries: searchReducer,
    loader: loaderReducer
})

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store