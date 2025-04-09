const GET_ALL = "get-all";
const GET_REGION = "get-region";

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

const getAllActionCreator = (res) => ({type : GET_ALL, payload : res.data})
const getRegionActionCreator = (res) => ({type : GET_REGION, payload : res.data})

export {countriesReducer, getAllActionCreator, getRegionActionCreator}