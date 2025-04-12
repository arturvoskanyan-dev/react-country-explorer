import {GET_COUNTRY} from "../actions/country/countryAction"

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

export default countryReducer;