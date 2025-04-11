import { API } from "../../components";
import { loaderAC } from "./loaderReducer";

const GET_COUNTRY = "get-country";

const initState = {
    country : {}
}

const countryReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_COUNTRY: 
            return {
                ...state,
                country: action.payload
            }
        

        default : 
            return state
    }
}

const getCountryActionCreator = ([res]) => ({type : GET_COUNTRY, payload : res})

const getCountryThunk = (name) => {
    return (dispatch) => {
        dispatch(loaderAC(true))
        API.getCountry(name).then((res) => {
            dispatch(getCountryActionCreator(res.data));
            dispatch(loaderAC(false));
        })
    }
}

export {countryReducer, getCountryThunk}