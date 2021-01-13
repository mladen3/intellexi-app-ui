import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import createHashHistory from "history/createHashHistory";
import {connectRouter, routerMiddleware} from "connected-react-router";
import {reducers} from "./reducers";
import {watchEmployeesSaga} from "./employees/employees.saga";
import {watchAuthSaga} from "./auth/auth.saga";

let composeEnhancers = compose;
if (process.env.NODE_ENV !== "production") {
  composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const getUserConfirmation = (dialogKey: string, callback: (result: boolean) => void): void => {
  // use "message" as Symbol-based key
  const dialogTrigger = window[Symbol.for(dialogKey)];
  if (dialogTrigger) {
    // pass the callback to delegate// to the invoked dialog
    return dialogTrigger(callback);
  }
  // Fallback to allowing navigation
  callback(true);
};

const saga = createSagaMiddleware();
export const history = createHashHistory({getUserConfirmation});
const router = routerMiddleware(history);
const rootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  ...reducers
});

export const store = createStore(rootReducer(history), composeEnhancers(applyMiddleware(saga, router)));

saga.run(watchEmployeesSaga);
saga.run(watchAuthSaga);
