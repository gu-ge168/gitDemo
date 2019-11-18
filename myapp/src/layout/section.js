import React,{Component} from "react";
import {Icon,Row,Col} from 'antd';
import Home from "../routers/home";
import Category  from "../routers/category";
import Time from "../routers/time";
import Tag  from "../routers/tag";
import Check  from "../routers/check";
import About from "../routers/about";
import Message from "../routers/message";
import Artice from "../routers/article";
import Not404 from "../routers/not404"
import {Route,Switch,Link} from "react-router-dom";

export default class Section extends Component{

    render(){
       return <div className="container">
                <Row id="channel" className="con-top-bar">
                    <Col xs={10} sm={12} className="left-hint">
                        <Icon type="sound" theme="twoTone" title="温馨提示" />
                        <span className="hint-text" >欢迎来访~</span>
                    </Col>
                    <Col xs={14} sm={12}  className="right-user">
                        <span className="user-enrol">
                            <Icon type="user-add" title="注册图标"/>
                            <Link to={"/"}  title="注册用户" alt="注册">注册</Link> 
                        </span>
                        <span className="user-enter">
                            <Icon type="poweroff" title="登录图标"/>
                            <Link to={"/"}  title="登录用户" alt="登录">登录</Link>  
                        </span>
                    </Col>
                </Row>    
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/？s=:id" component={Check} />
                    <Route path="/artice" component={Artice} />
                    <Route path="/category" component={Category} />
                    <Route path="/date" component={Time} />
                    <Route path="/tag" component={Tag} />
                    <Route path="/about" component={About} />
                    <Route path="/message" component={Message} />
                    <Route  component={Not404} />
                </Switch>
           </div>
    }
}