import {combineReducers} from "redux";
import reduxResize from "./redux-resize";
import reduxComment from "./redux-comment";
import reduxCont from "./redux-cont";
const Reducers = combineReducers({
     reduxResize,
     reduxComment,
     reduxCont
})

export default Reducers
