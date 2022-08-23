//Write the ActionCreator functions here
import * as types from './actionTypes'
import axios from 'axios'


export const loginRequest = () => {
    return {
        type:types.LOGIN_REQUEST
    }
}
export const loginSuccess = (payload) => {
    return {
        type:types.LOGIN_SUCCESS,payload
    }
}
export const loginFailure = () => {
    return {
        type:types.LOGIN_FAILURE
    }
}

export const loginCheck = (payload) => (dispatch) => {

    dispatch(loginRequest())
   return axios({
        method:'post',
        url:'api/login',
        baseURL:'https://reqres.in',
        data:payload
    })
    .then((r) => dispatch(loginSuccess(r.data.token)))

}