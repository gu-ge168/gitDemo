import {resizeHeader,resizeSlider} from "../resize/resize-style";
import {resize_true} from "./action";
 const initialState = {
        resize_header:resizeHeader(),
        resize_slider:resizeSlider()
 }

function reduxResize(state = initialState,action){
    switch(action.type){
        case resize_true:
               return{
                    resize_header:resizeHeader(state.resize_header.size),
                    resize_slider:resizeSlider() 
                }
        default:
            return state;
    }
}
export default reduxResize;