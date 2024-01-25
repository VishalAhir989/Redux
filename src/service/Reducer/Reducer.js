import { GETDOCDATAREJ, GETDOCDATAREQ, GETDOCDATARES } from "../Const"

const initialState  = {
    isLoading: false,
    isSignin: false,
    user: null,
    err: null,
    products: [],
    product: null,
    data: null
}

export const DataReducer = (state = initialState ,action) => {
    switch(action.type){
        case GETDOCDATAREQ:
            return{
                ...state,
                isloading: true
            }

        case GETDOCDATARES:
            return{
                ...state,
                isloading: false,
                products: action.payload,
                err: null
            }

        case GETDOCDATAREJ:
            return{
                ...state,
                err: true,
                isloading: false
            }

        default:
            return state
    }
}

export default DataReducer