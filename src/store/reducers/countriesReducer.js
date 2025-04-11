import { API } from "../../components";

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

const getCountriesThunk = () => {
    return (dispatch) => {
        API.getAll().then((res) => dispatch(getAllActionCreator(res)))
    }
}

const getRegionThunk = (region) => {
    return (dispatch) => {
        API.getRegion(region).then((res) => dispatch(getRegionActionCreator(res)))
    }
}

export {countriesReducer, getCountriesThunk, getRegionActionCreator, getRegionThunk}