import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
  article: articleReducer,
  filter: filterReducer,
});

export default rootReducer;
