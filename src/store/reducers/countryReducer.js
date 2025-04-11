import { API } from "../../components";

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
        API.getCountry(name).then((res) => dispatch(getCountryActionCreator(res.data)))
    }
}

export {countryReducer, getCountryThunk}