import React,{Component} from "react";
import {Icon,Drawer} from 'antd';
import {NavLink} from "react-router-dom";
import  {headData} from "../data/head-data";
export default class MinMenu extends Component{
    constructor(){
        super()
        this.state={
            visible: false,
        }
    }
    showDrawer = () => {
        this.setState({
          visible: true,
        });
    };
    onClose = () => {
        this.setState({
          visible: false,
        });
    };


    render(){  
        return <div>
                <Icon type="appstore" onClick={this.showDrawer} />
                <Drawer
                        id="header-drawer-menu" 
                        placement="left"
                        width={150}
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                        >
                        <ul className="min-menu-list"  >
                            <li className="menu-item">
                                <NavLink  exact activeClassName="active-color"    to="/">首页</NavLink>
                            </li>
                            <li className="sub-item">
                                 <NavLink className="life" activeClassName="active-color"   to="/category/life"> 生活笔记 </NavLink>
                             
                                <ul className="sub-menu-list">
                                {
                                    headData.experience.map((item,key)=>{
                                        return   <li key = {key}><NavLink activeClassName="sub-active" to={item.url}>{item.type}</NavLink></li>
                                    })
                                }
                                </ul>
                           </li>
                            <li className="sub-item" > 
                                 <NavLink className="technique" activeClassName="active-color"    to="/category/technique"> 技术杂谈</NavLink> 
                                <ul className="sub-menu-list">
                                    {
                                    headData.skill.map((item,key)=>{
                                        return   <li key = {key}><NavLink activeClassName="sub-active" to={item.url}>{item.type}</NavLink></li>
                                    })
                                    }
                                </ul>
                            </li>  
                        <li className="menu-item">
                            <NavLink activeClassName="active-color"   to="/message">给我留言</NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink activeClassName="active-color"  to="/about">关于博主</NavLink>
                        </li>
                    </ul>
                </Drawer>
        </div>
    }
}