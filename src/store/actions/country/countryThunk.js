import { getCountryActionCreator } from "./countryAction"
import { loaderAC } from "../loader/loaderAction"
import { API } from "../../../api/api"

const getCountryThunk = (name) => {
    return (dispatch) => {
        dispatch(loaderAC(true))
        API.getCountry(name).then((res) => {
            dispatch(getCountryActionCreator(res.data));
            dispatch(loaderAC(false));
        })
    }
}

export default getCountryThunk