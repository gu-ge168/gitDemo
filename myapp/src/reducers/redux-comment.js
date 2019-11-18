import {getStorage,setStorage} from "../localStorage/storage";

const formData =[]
setStorage("comment",formData)

const initialState ={
        commentData: getStorage("comment")
}
function reduxComment(state = initialState,action){
    switch(action.type){
        default:
            return state;
    }
}

export default reduxComment