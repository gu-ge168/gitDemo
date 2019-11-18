const resize_true = "RESIZE_TRUE";


function resizeTrue(){
    return{
        type: resize_true
    }
} 

function checkChange(data){
    return{
        type: "CHECKDATA",
        data
    }
}
function changeType(arr){
    return{
        type: "ROUTERDATA",
        arr
    }
} 


export {resize_true};
export {resizeTrue,changeType,checkChange}