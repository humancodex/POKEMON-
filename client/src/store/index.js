import {applyMiddleware, createStore} from "redux";
import reducer from '../reducer/index'
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))
//thunk para hacer acciones con promesas 
export default store;