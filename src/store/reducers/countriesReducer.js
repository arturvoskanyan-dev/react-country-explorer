import {GET_ALL, GET_REGION} from "../actions/countries/countriesAction"

const initState = {
    countries : []
}

const countriesReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_ALL:
            return {
                ...state,
                countries: action.payload
            }

        case GET_REGION: 
            return {
                ...state,
                countries: action.payload
            }

        default :
            return state
    }
}

export default countriesReducer;