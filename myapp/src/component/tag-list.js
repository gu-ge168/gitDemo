import React,{Component} from "react";
import {List} from 'antd';
import {Link} from "react-router-dom";
import { tag_list } from "../data/index-data";

export default class TagList extends Component{
    render(){
        return (
            <List
            className="widget tag-list"
            split={false}
                dataSource={tag_list}
                header={
                    <h3 className="widget-title tag-title">
                       热门标签
                    </h3>  
                }
                renderItem={item => (
                    <List.Item className="tag_text" >
                        <Link className="tag-name" to={"/tag/"+item.title}>
                            {item.title}
                            <span>({
                                
                                    item.num
                            })</span>
                        </Link>
                    </List.Item> 
                    )
                }
            />
        )
    }
}