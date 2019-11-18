function setStorage(obj,data){
    if(!window.localStorage){
        alert("浏览器不支持localstorage");
        return false;
    }else{
        const storage = window.localStorage;
        const commentStr = JSON.stringify(data);
        storage.setItem(obj,commentStr );
    }
}

function getStorage(obj){
     const storage = window.localStorage;
     const jsonstr = storage.getItem(obj)
     return JSON.parse(jsonstr)
}

export {getStorage,setStorage}