// NOTE: use this store variable to create a store.

import { legacy_createStore,combineReducers,applyMiddleware,compose } from "redux";
import {reducer as AuthReducer} from './AuthReducer/reducer'
import {reducer as AppReducer} from './AppReducer/reducer'
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootReducer = combineReducers({AppReducer:AppReducer, AuthReducer: AuthReducer})

export const store =  legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

