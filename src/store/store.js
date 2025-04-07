const GET_ALL = "get-all";

const initState = {
    countries: [],
}

const reducer = (state, action) => {
    switch(action.type) {
        case GET_ALL: 
            return {
                ...state,
                countries: action.payload
            }

        default : 
            return state
    }
}

const getAllActionCreator = (res) => ({type : GET_ALL, payload : res.data})

export {initState, reducer, getAllActionCreator}