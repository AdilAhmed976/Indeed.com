import * as types from "./actionTypes";

const initialState = {
  loading: false,
  currentUser: null,
  error: null,
  isAuth:false
  
};
// localStorage.setItem("loginData", JSON.stringify(initialState.isAuth))
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_START:
    case types.LOGIN_START:
    case types.LOGOUT_START:
    case types.GOOGLE_SIGN_IN_START:
    case types.FACEBOOK_SIGN_IN_START:
      return {
        ...state,
        loading: true,
      };
    case types.REGISTER_SUCCESS:
    case types.LOGIN_SUCCESS:
    case types.GOOGLE_SIGN_IN_SUCCESS:
    case types.FACEBOOK_SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth:true,
        currentUser: action.payload,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        isAuth:false
      };
    case types.SET_USER:
      return {
        ...state,
        isAuth:true,
        currentUser: action.payload,
      };
    case types.REGISTER_FAIL:
    case types.LOGIN_FAIL:
    case types.LOGOUT_FAIL:
    case types.GOOGLE_SIGN_IN_FAIL:
    case types.FACEBOOK_SIGN_IN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { reducer};
