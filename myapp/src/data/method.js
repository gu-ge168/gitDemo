
function sortFlow(a,b){//浏览量排序，最大值排序
    const flow1 = a.flow;
    const flow2 = b.flow;
    return flow2 - flow1
}

function sortCommt(a,b){
    const comm1 = a.comments.length;
    const comm2 = b.comments.length;
    return comm2 - comm1
} 

function sortEnjoy(a,b){//喜欢量排序，最大值排序
    const enjoy1 = a.enjoy;
    const enjoy2 = b.enjoy;
    return enjoy2 - enjoy1
}


function sortTime(a,b){ //排序时间数据
    const  atime1 = a[0] + a[1];
    const  btime1 = b[0] + b[1];
    return btime1- atime1 

}

function timeList(array){
    var arr = array.map((item)=>{//截取时间字符串
        const str = item.time.match(/\d+/g)
        return str
    })
    return clear(arr).sort(sortTime)
}

function clear(arr){//去除重复的时间
    var r = [];
    for(var i = 0, l =  arr.length ; i < l; i++) {
    for(var j = i + 1; j < l; j++)
    if ( arr[i][0] ===  arr[j][0] &&  arr[i][1] ===  arr[j][1]) j = ++i;
        r.push( arr[i]);
    }
    return r;
}



function ifData(arr){//判断内容区那种列表数据
    let data = JSON.parse(window.localStorage.getItem('maindata'));
    const alen = arr[arr.length - 1] ;
    const reg = new RegExp("？s=","ig");
    const bool = reg.test(alen)
    if(alen !==""){
        if(arr[1] ==="category"){
            if(arr[2] === "technique"){
                if(alen === "technique"){
                    document.title ="技术杂谈/古歌";
                    return  cateData(data,alen);//技术杂谈
                }else{
                    document.title = alen +"/古歌";
                    return  typeData(data,alen);//返回符合type类型的数据
                }
            }else{
                if(alen === "life"){
                    document.title ="生活笔记/古歌";
                    return  cateData(data,alen);//生活笔记
                }else{
                    switch(alen){
                        case "notes":
                            document.title ="个人随笔/古歌";
                            break 
                        case "daily":
                            document.title ="个人日记/古歌";
                            break 
                        default :
                         document.title ="个人展示/古歌";
                    }
                }
                return []
            }

        }else if(arr[1] ==="date"){
            const str = arr[2] + "-" + alen
             document.title = str + "/古歌";
            return timeData(data,str);//时间数据     

        }else if(arr[1] ==="tag"){
            if(arr[3]){
                    const str = arr[2]+"/"+ arr[3];
                    document.title = str + "/古歌";
                  return   typeData(data,str);
            }else{
                document.title = alen + "/古歌";
                 return  typeData(data,alen);//返回符合tag标签数据
            }
        }else if(bool){
            const arr1 = alen.split("=");
            const alen1 = arr1[arr1.length - 1];
            document.title = alen1  + "/古歌";
            return checkData(data,alen1)
        }
    }else{
        document.title ="古歌/个人博客"
       return  data
    }
}



function timeData(obj,value){//返回符合时间要求的数据
    const  arr = [];
    const reg = new RegExp(value);
    obj.filter((item)=>{
       if(reg.test(item.time)){
           arr.push(item)
       }
       return arr
   })
   return arr;
}

function typeData(obj,value){//返回符合type类型或者返回标签类型的数据
    const  arr = [];
    const reg = new RegExp(value,"i");
    obj.filter((item)=>{
       if( reg.test(item.type) || reg.test(item.tag)){
           arr.push(item)
       }
       return arr
   })
   return arr;

}

function cateData(obj,value){//返回技术杂谈或者生活笔记类型数据
    const  arr = [];
    const reg = new RegExp(value,"i");
    obj.filter((item)=>{
       if( reg.test(item.type_url)){
           arr.push(item)
       }
       return arr
   })
   return arr;
}

function checkData(obj,value){
    const reg = new RegExp(value,"ig")
      const arr = [];
      obj.filter((item)=>{ 
          const bool= reg.test(item.tag + item.type+item.title+item.describe + item.content);
           if(bool){
            const title =  item.title.match(reg);
            const describe =  item.describe.match(reg);
            if(title !==null ){
              item.title = item.title.replace(reg,"<span style ='color:red' >"+ title[0] +"</span>")
            }
            if(describe !==null){
              item.describe = item.describe.replace(reg,"<span style ='color:red' >"+ describe[0] +"</span>") 
            } 
            arr.push(item) 
           }  
           return item
      }) 
      return arr
}

function fter(obj,value){
    const arr =[]
    const patt1 = new RegExp(value,"i");
    obj.filter((item)=>{
        if(patt1.test(item.type) || patt1.test(item.tag)){
            arr.push(item)
        }
        return arr
    })

    return arr.length
}

export {sortFlow,sortCommt,sortEnjoy,fter,timeList,ifData}