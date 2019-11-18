import React,{Component} from "react";
import {Row,Col,Menu,Dropdown} from 'antd';
import {NavLink} from "react-router-dom";
import  {headData} from "../data/head-data";
export default class MaxMenu extends Component{

    subItem(obj){
        return <Menu>{
                    obj.map((item,key)=>{
                        return   <Menu.Item key = {key}><NavLink activeClassName="sub-active"  to={item.url}>{item.type}</NavLink></Menu.Item>
                    })
                }
            </Menu>
    }
    render(){   
        return <Row>
                <Col className="menu-item"><NavLink exact activeClassName="active-color" to="/"> 首页 </NavLink></Col>
                <Col className="menu-submenu">
                    <Dropdown overlay={this.subItem(headData.experience)} placement="bottomCenter">
                        <NavLink className="life" activeClassName="active-color" to="/category/life"> 生活笔记 </NavLink>
                    </Dropdown>
                </Col>
                <Col  className="menu-submenu" >
                    <Dropdown overlay={this.subItem(headData.skill)} placement="bottomCenter">
                        <NavLink className="technique" activeClassName="active-color"  to="/category/technique"> 技术杂谈</NavLink>
                    </Dropdown>
                </Col>
                <Col className="menu-item"><NavLink activeClassName="active-color"  to="/message"> 给我留言 </NavLink></Col>
                <Col className="menu-item"><NavLink activeClassName="active-color" to="/about"> 关于博主 </NavLink></Col>
            </Row>
    }
}