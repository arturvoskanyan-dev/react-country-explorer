import {getAllActionCreator, getRegionActionCreator} from "./countriesAction"
import { loaderAC } from "../loader/loaderAction"
import { API } from "../../../api/api"

const getCountriesThunk = () => {
    return (dispatch) => {
        dispatch(loaderAC(true))
        API.getAll().then((res) => {
            dispatch(getAllActionCreator(res));  
            dispatch(loaderAC(false))
        })
    }
}

const getRegionThunk = (region) => {
    return (dispatch) => {
        API.getRegion(region).then((res) => dispatch(getRegionActionCreator(res)))
    }
}

export {getCountriesThunk, getRegionThunk}