import {ifData,sortFlow}  from "../data/method";

function reduxCont(state = {
    data:[]
},action){

    switch(action.type){ 
        case "ROUTERDATA" :
            return {
                data:ifData(action.arr).length > 0 ? ifData(action.arr).sort(sortFlow) :[]
            }          
        default:
            return state;
    }

}

export default reduxCont