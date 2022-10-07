//Write the ActionCreator functions here
import axios from 'axios'
import * as types from './actionType'

export const getJobDataRequest = () => {
    return {
        type:types.GET_DATA_REQUEST
    }
}
export const getJobDataSuccess = (payload) => {
    return {
        type:types.GET_DATA_SUCCESS,payload
    }
}
export const getJobDataFailure = () => {
    return {
        type:types.GET_DATA_FAILURE
    }
}
export const getHomeDataRequest = () => {
    return {
        type:types.GET_HOME_LOAD_REQUEST
    }
}
export const getHomeDataSuccess = (payload) => {
    return {
        type:types.GET_HOME_LOAD_SUCCESS,payload
    }
}
export const getHomeDataFailure = () => {
    return {
        type:types.GET_HOME_LOAD_FAILURE
    }
}

export const gettingTheJobData = (payload) => (dispatch)=> {

    dispatch(getJobDataRequest())
    axios.get(`https://indeedprojectreact.herokuapp.com/jobdata/?q=${payload}`)
    .then((r) => dispatch(getJobDataSuccess(r.data)))
    .then((r) => (console.log(r.data)))
    .then((e) => dispatch(getJobDataFailure(e)))
}

export const gettingTheHomeLoadData = () => async (dispatch)=> {


    dispatch(getHomeDataRequest())
    await axios.get(`https://indeedprojectreact.herokuapp.com/jobdata`)
    .then((r) => dispatch(getHomeDataSuccess(r.data)))
    .then((r) => (console.log(r.data)))
    .then((e) => dispatch(getHomeDataFailure(e)))


}