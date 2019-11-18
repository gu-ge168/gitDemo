import React,{Component} from "react";
import {Layout,Row,Col} from 'antd';
import  SliderHot  from "../component/slider-hot";
import ContentList from "../component/content-list";
import TimeList from "../component/time-list";
import LoveList from "../component/love-list";
import HostCard from "../component/host-card";
import TagList from "../component/tag-list";
export default class Home extends Component{
    render(){
       return <Row id="homepage" className="main-content">
                <Col sm={17} className="content-left">
                    <Layout.Content>
                        <SliderHot /> 
                        <ContentList/>
                    </Layout.Content>
                </Col>
                <Col sm={7} className="content-right">
                    <Layout.Sider>
                        <HostCard/>   
                        <TimeList />
                        <LoveList />
                        <TagList />
                    </Layout.Sider>
                </Col>
            </Row> 
    }
}
