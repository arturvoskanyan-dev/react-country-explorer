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

export {countryReducer, getCountryActionCreator}