// NOTE: use this store variable to create a store.

import { legacy_createStore,combineReducers,applyMiddleware,compose } from "redux";
import {reducer as AuthReducer} from './AuthReducer/reducer'
import {reducer as AppReducer} from './AppReducer/reducer'
import thunk from "redux-thunk";
import logger from "redux-logger";



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootReducer = combineReducers({AppReducer:AppReducer,user: AuthReducer})

const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

export const store =  legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(...middleware)))
