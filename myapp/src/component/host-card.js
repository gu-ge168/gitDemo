import React,{Component} from "react";
import {Card,Icon } from 'antd';
import {Link} from "react-router-dom";

export default class HostCard extends Component{

    render(){
        return <Card title={<h2>古盛鑫的名片</h2>} bordered={false} >
                <p>职业：Web前端开发工程师</p>
                <p>现居：广东省-茂名市</p>
                <p>工作室：待创建中</p>
                <p>Email：617559543@qq.com</p>
                <div>
                    <Link to="/about">
                    <Icon type="idcard" />  
                    </Link>
                    <span><Icon type="qq" /></span>
                    <span><Icon type="wechat" /></span>
                </div>
            </Card>
    }
}