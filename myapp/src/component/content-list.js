import React,{Component} from "react";
import {List} from 'antd';
import {connect} from "react-redux";
import {NavLink,Link,withRouter} from "react-router-dom";
import Like from "./like";
import {changeType} from "../reducers/action"
class ContentList extends Component{
    constructor(props){
      super(props)
      this.state={
        url:"#",
        page:1,
        loading:true
      }
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
      if(url !== path ){
        const arr = path.split("/");
        this.props.changeType(arr);
        this.setState({
          url:path,
          loading:false,
          page:1
        }) 
      }
    }
    
        render(){
         
          const {data} = this.props
          const {loading,page} = this.state
            return(
                <List
                className="content-list"
                itemLayout="vertical"
                loading = {loading}
                split={false}
                pagination={{
                  defaultCurrent:page,
                  showQuickJumper:true,
                  hideOnSinglePage:true,
                  pageSize: 10,
                  onChange:()=>{
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                  }
                }}
                dataSource={data}
                renderItem={item => (
             
                  <List.Item 
                  className="content-list-item"
                  
                  actions={
                    [
                      <span className="item-logo author"><i className="iconfont icon-yonghu"/>{item.author}</span>,
                      <span className="item-logo time"><i className="iconfont icon-shijian"/>{item.time}</span>,
                      <span className="item-logo flow"><i className="iconfont icon-liulan"/>{item.flow}</span>,
                      <span  className="item-logo comm"><Link className="title-color" to={"/artice/"+item.id} ><i className="iconfont icon-pinglunzu"/>{item.comments.length}评论</Link></span>,
                      <Like obj = {item}/>
                    ]
                  }
                  
                  >
                    <List.Item.Meta
                        title={
                          <div className="content-list-head">
                            <NavLink to={item.tag ? "/tag/"+ item.tag  : "/tag/" + item.type_url.split("/").pop() } className="content-type" >
                                  {
                                    item.tag? item.tag : item.type
                                  }
                            </NavLink>
                            <Link to={"/artice/"+item.id} className="content-title"  dangerouslySetInnerHTML={{__html:item.title}} ></Link>
                          </div>
                        }
                        description={
                            <p className="describe-box">
                              <Link className="describe-left wrap-pic" to={"/artice/"+item.id}><img className="describe-pic" src={item.images} alt={item.title}/></Link>
                              <span className="describe" dangerouslySetInnerHTML={{__html:item.describe}} />
                          </p>
                        }
                    />
                  </List.Item>
                )}
              />
            )
        }
}

const mapDispatchToProps = {changeType};
export default withRouter(connect((start) => (start.reduxCont),mapDispatchToProps)(ContentList)); 

