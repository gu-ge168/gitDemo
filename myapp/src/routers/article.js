import React,{Component} from "react";
import {Layout,Row,Col,Icon,Card} from 'antd';
import {Route,Switch,NavLink} from "react-router-dom";
import TimeList from "../component/time-list";
import Publish from "../component/publish-form";
import LoveList from "../component/love-list";
import TagList from "../component/tag-list";
export default class Artice extends Component{
    constructor(){
        super()
        this.state =({
            url:"#",
            data:{},
            comm:0,
        })
    }
    componentDidMount(){
        const path = this.props.location.pathname;
        this.getData(path,this.state.url);
      }
    componentWillReceiveProps(nextProps){
        const path = nextProps.location.pathname;
        this.getData(path,this.state.url);
    }
    getData(path,url){
        let data = JSON.parse(localStorage.getItem('maindata'));
        if(url !== path ){
            const alen = path.split("/").pop();
            const obj = data.filter((item)=>{
                        return alen === item.id 
                    })
            document.title = obj[0].title + "/古歌";    
            this.setState({
                url:path,
                data:obj[0],
                comm:obj[0].comments.length
            })  

        }
    }

    render(){
        const {data} = this.state;
        
        const reg = /"technique"$/i;
        const reg1 = /"life"$/i;
       return <Row id="homepage" className="main-content">
                <Col sm={17} className="content-left">
                    <Layout.Content>
                    <Switch>
                        <Route  path="/artice/:id"  >
                            <article className="article">
                                <div className="breadcrumbs">
                                        <NavLink  to="/"><Icon type="home" theme="filled" /></NavLink>
                                        <small>></small>
                                        {
                                            new RegExp("technique","ig").test(data.type_url)? <NavLink  to="/category/technique">技术杂谈</NavLink>:
                                            <NavLink  to="/category/life">生活笔记</NavLink>
                                        }
                                        <small>></small>
                                        {
                                            reg.test(data.type_url) && reg1.test(data.type_url) ? ""  : <NavLink to={data.tag ? "/tag/"+ data.tag : data.type_url +""} >
                                                        {
                                                            data.tag? data.tag : data.type
                                                        }
                                            </NavLink>
                                        }
                                        {
                                            reg.test(data.type_url) && reg1.test(data.type_url) ?  "" : <small>></small>
                                        }
                                        <span>{data.title}</span>
                                </div>
                            <Card  title={
                                <div className="article-header">
                                    <h4>{data.title}</h4>
                                    {
                                        new RegExp("technique","ig").test(data.type_url)? <span><Icon type="profile" /> <NavLink  to="/category/technique">技术杂谈</NavLink> </span>:
                                        <span><Icon type="profile" /> <NavLink  to="/category/life">生活笔记</NavLink></span>
                                    }
                                    <span className="item-logo author"><i className="iconfont icon-yonghu"/>{data.author}</span>
                                    <span className="item-logo time"><i className="iconfont icon-shijian"/>{data.time}</span>
                                    <span className="item-logo flow"><i className="iconfont icon-liulan"/>{data.flow}</span>
                                    <span  className="item-logo comm"><i className="iconfont icon-pinglunzu"/>{ 
                                            this.state.comm }评论</span>
                                    
                                </div>
                            } bordered={false}>
                                <div className="article-content" >
                                    <div dangerouslySetInnerHTML={{__html:data.content}}>

                                    </div>
                                </div>
                            </Card>
                            </article>
                            <Publish/>
                        </Route>
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
