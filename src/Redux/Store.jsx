import { rootReducer } from "./Reducers";
import { createStore } from 'redux'

export const Store = createStore(rootReducer);
