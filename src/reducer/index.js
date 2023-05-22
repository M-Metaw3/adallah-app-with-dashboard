import { combineReducers } from "redux";

import postreducer from "./postreducer";
import LawyerReducer from "./LawyerReducer";

  const reducers =combineReducers({post:postreducer,Lawyer:LawyerReducer})


export default reducers
