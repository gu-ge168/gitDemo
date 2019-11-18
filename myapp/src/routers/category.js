import React,{Component} from "react";
import {Layout,Row,Col} from 'antd';
import ContentList from "../component/content-list";
import {Route,Switch} from "react-router-dom";
import TimeList from "../component/time-list";
import LoveList from "../component/love-list";
import TagList from "../component/tag-list";
export default class Category extends Component{
    componentDidMount(){
        document.title ="古歌博客"
    }
    render(){
       return <Row id="homepage" className="main-content">
                <Col sm={17} className="content-left">
                    <Layout.Content>
                    <Switch>
                        <Route path="/category/:id" component={ContentList} />
                        <Route path="/category/life" component={ContentList} />
                        <Route path="/category/life/notes" component={ContentList} />
                        <Route path="/category/life/daily" component={ContentList} />
                        <Route path="/category/life/presatation" component={ContentList} />
                        <Route path="/category/technique" component={ContentList} />
                        <Route path="/category/technique/css3" component={ContentList} />
                        <Route path="/category/technique/html5" component={ContentList} />
                        <Route path="/category/technique/javaScript" component={ContentList} />
                        <Route path="/category/technique/jQuery" component={ContentList} />
                        <Route path="/category/technique/React" component={ContentList} />
                    </Switch>
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
