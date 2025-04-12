const GET_ALL = "get-all";
const GET_REGION = "get-region";

const getAllActionCreator = (res) => ({type : GET_ALL, payload : res.data})
const getRegionActionCreator = (res) => ({type : GET_REGION, payload : res.data})

export {GET_ALL, GET_REGION, getAllActionCreator, getRegionActionCreator}