import {css3Data} from "./css3-data";
import {html5Data} from "./html5-data";
import {jqData} from "./jq-data";
import {jsData} from "./js-data";
import {reactData} from "./react-data";
import {sortCommt,sortEnjoy,timeList,fter} from "./method";

//数组数据
const technique_arr = css3Data.concat(html5Data,jqData,jsData,reactData);//技术杂谈数据
const all_data = technique_arr;//所有数据

window.localStorage.setItem('maindata', JSON.stringify(all_data));
let data = JSON.parse(window.localStorage.getItem('maindata'));

const love_data = data.sort(sortCommt).slice(0,10); //猜你喜欢数据
const slider_data = reactData.slice(0,5);//轮播图数据
const hot_data = data.sort(sortEnjoy).slice(0,5);//热门排行数据
const time_list = timeList(data);//时间列表数据


const tag_list =[//热门标签列表数据
            {
                title:"HTML/CSS",
                num:fter(data,"HTML/CSS")
            }
            ,
            {
                title:"css3",
                num:fter(data,"css3") 
            },
            {
                title:"html5",
                num:fter(data,"html5") 
            }
            ,
            {
                title:"javaScript",
                num:fter(data,"javaScript") 
            },
            {
                title:"jQuery",
                num:fter(data,"jQuery") 
            },
            {
                title:"React",
                num:fter(data,"React") 
            },
            {
                title:"技巧资源",
                num:fter(data,"技巧资源") 
            },
            {
                title:"前端资讯",
                num:fter(data,"前端资讯") 
            },
            {
                title:"前端开发",
                num:fter(data,"前端开发") 
            }
]


export {slider_data,hot_data,love_data,all_data,time_list,tag_list}    