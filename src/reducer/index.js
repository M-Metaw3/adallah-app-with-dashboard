import { combineReducers } from "redux";

import postreducer from "./postreducer";
import LawyerReducer from "./LawyerReducer";
import CitizenReducer from "./CitizenReducer";
import LocationReducer from "./LocationReducer";

  const reducers =combineReducers({post:postreducer,Lawyer:LawyerReducer,Citizen:CitizenReducer,Location:LocationReducer})


export default reducers
