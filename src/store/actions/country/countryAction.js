const GET_COUNTRY = "get-country";

const getCountryActionCreator = ([res]) => ({type : GET_COUNTRY, payload : res})

export {GET_COUNTRY, getCountryActionCreator}