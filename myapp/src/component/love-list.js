import React,{Component} from "react";
import {List} from 'antd';
import {Link} from "react-router-dom";
import {love_data} from "../data/index-data"
export default class LoveList extends Component{
    render(){
        return (
            <List
            className="widget love-list"
                dataSource={love_data}
                header={
                    <h3 className="widget-title love-title">
                       猜你喜欢
                    </h3>  
                }
                renderItem={item => (
                    <List.Item className="love_text" >
                        <Link to={"/artice/"+item.id}>
                            <span className="muted text-img">
                                <img src={item.images} alt={item.title}/>
                            </span>
                            <span className="muted text-cont">
                                <p className="text">
                                    {
                                    item.title
                                    }
                                </p>
                                <p className="label">
                                    <span className="time">{item.time}</span>
                                    <span className="comm">{item.comments.length}评论</span>
                                </p>
                            </span>
                        </Link>
                    </List.Item> 
                    )
                }
            />
        )
    }
}