import React,{Component} from "react";
import Slider from "./slider";
import Like from "./like";
import {Link} from "react-router-dom";
import {hot_data} from "../data/index-data";
export default class SliderHot extends Component {
    render(){
        return(
            <div id="slider-hot">
                <Slider/> 
                <div className="hot-wrap">
                  <h2 className="hot-list-title" >热门排行</h2>
                      <ul className="hot-list-cont">
                        {
                         hot_data.map((item,key)=>{
                            return  <li className="hot-list-item" key={key}>  
                                            <Like obj = {item}/>
                                            <span className={`${"label label-"+(key + 1)}`}>{key + 1}</span>
                                            <Link to={"/artice/"+item.id} >{item.title}</Link>  
                                    </li>
                            }) 
                        }    
                     </ul>
                </div>
            </div>

        )
    }
}