import React,{Component} from "react";
import {Layout,Row,Col} from 'antd';
import ContentList from "../component/content-list";
import TimeList from "../component/time-list";
import LoveList from "../component/love-list";
import TagList from "../component/tag-list";
export default class Check extends Component{
    render(){
       return <Row id="homepage" className="main-content">
                <Col sm={17} className="content-left">
                    <Layout.Content>
                        <ContentList/>
                    </Layout.Content>
                </Col>
                <Col sm={7} className="content-right">
                    <Layout.Sider>
                      <TimeList />
                      <LoveList />
                      <TagList/>
                    </Layout.Sider>
                </Col>
            </Row> 
    }
}