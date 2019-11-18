function  addEvent(obj,ev,fn){
    if(obj.attachEvent){//针对IE浏览器
    obj.attachEvent('on'+ev,fn)
        
    }else{
    //针对FF与chrome
    obj.addEventListener(ev,fn,false)
        
    }
}

function  detachEvent(obj,ev,fn){
    if(obj.detachEvent){//针对IE浏览器
      obj.detachEvent('on'+ev,fn)
    }else{
    //针对FF与chrome
    obj.removeEventlistener(ev,fn,false)
        
    }
}


export  {addEvent,detachEvent}