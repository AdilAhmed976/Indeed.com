// NOTE: use this store variable to create a store.

import { legacy_createStore,combineReducers,applyMiddleware,compose } from "redux";
import {reducer as AuthReducer} from './AuthReducer/reducer'
import {reducer as AppReducer} from './AppReducer/reducer'
import thunk from "redux-thunk";
import logger from "redux-logger";



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootReducer = combineReducers({AppReducer:AppReducer,user: AuthReducer})



export const store =  legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
//////////////////////////
// import { createStore, applyMiddleware } from "redux";

// // import rootReducer from "./root-reducer";






// export const store = createStore(rootReducer, applyMiddleware(...middleware));