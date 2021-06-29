import {
    FETCH_FILTER_ERROR,
    FETCH_FILTER_REQUEST,
    FETCH_FILTER_SUCCESS
} from "../constants/FilterConstants"

const initialState = {
    loading: false,
    characters: [],
    error: ""
}

const filterReducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FILTER_REQUEST:
            return {
                ...state, 
                loading: true
            }
        case FETCH_FILTER_SUCCESS:
            return {
                ...state,
                loading: false,
                characters: action.payload,
                error: ""
            }
        case FETCH_FILTER_ERROR:
            return {
                loading: false,
                characters: [],
                error: action.payload
            }
        default:
            return state;
    }
}

export default filterReducers