import axios from "axios"
import { FETCH_FILTER_ERROR, FETCH_FILTER_REQUEST, FETCH_FILTER_SUCCESS } from "../constants/FilterConstants"

const filterDataRequest = () => {
    return {
        type: FETCH_FILTER_REQUEST
    }
}

const filterDataSuccess = (character) => {
    return {
        type: FETCH_FILTER_SUCCESS,
        payload: character
    }
}

const filterDataError = (error) => {
    return {
        type: FETCH_FILTER_ERROR,
        payload: error
    }
}

const filter_data = (value) => {
    return (dispatch) => {
        dispatch(filterDataRequest())
        axios.get(`https://rickandmortyapi.com/api/character?name=${value}`)
            .then(response => {
                dispatch(filterDataSuccess([response.data]))
            }).catch(error => {
                dispatch(filterDataError("Character not found"))
                console.log(error);
            })
    }
}

export default filter_data