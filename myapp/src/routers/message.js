import React,{Component} from "react";
import {Link} from "react-router-dom";
import { Card} from 'antd';
import {share}  from "../component/share";
import Publish from "../component/publish-form";
export default class Message extends Component{
    componentDidMount(){
        document.title ="给我留言/古歌";
    }
    render(){
       return <div id="message-pagewrapper" className="pagewrapper">
                <Card bordered={false}  title={<Link className="card-title" to="#">给我留言</Link>} extra={share}>
                    <Publish/>
                </Card>
       
       </div>
    }
}

