import React,{Component} from "react";
import { List } from 'antd';
import Comment from "./comment";
const data =[{
    name:"hh",
    time:"",
    text:"sidiufuisiudf"
},{
    name:"hh",
    text:"sidiufuisiudf"
}]
export default class CommentList extends Component{
    render(){
        return <div id="postcomments" className="comments-box">
                <div className="comments-number">
                    <p >
                        <i className="iconfont icon-pinglunzu"/>
                        <b>(23)</b>
                        个小伙伴在吐槽 
                    </p>
                </div>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                    <List.Item>
                        <Comment name={item.name} text={item.text}  img={item.img} />
                    </List.Item>
                    )}
                />
        </div>
    }
}