import React,{Component} from "react";
import {Link} from "react-router-dom";
import { Button } from 'antd';
export default class Not404 extends Component{
    render(){
        return <div id="not404">
                <img src={require("../data/images/not.jpg")}  alt=""/>
                <Button size="large" className="not-btn" >
                    <Link to={"/"} >返回首页</Link> 
                </Button>
        </div>
    }
}