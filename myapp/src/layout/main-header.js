import React,{Component} from "react";
import {Layout,Row,Col,Icon} from 'antd';
import MaxMenu from "../component/max-menu";
import MinMenu from "../component/min-menu";
import {connect} from "react-redux";
import {addEvent,detachEvent} from "../compatible/compatibility";
import {resizeTrue} from "../reducers/action";

class MainHeader extends Component{
    componentDidMount(){
        addEvent(window,"resize",this.props.resizeTrue)//设置监听窗口 ，改变样式
    }
    
    componentWillUnmount(){
        detachEvent(window,"resize",this.props.resizeTrue);//清除监听窗口
    }
    render(){ 
        return <Layout.Header  id="header">
                    <Row  className="header-wrap">
                        <Col xs={5}  sm={3} className="header-left-title header-left-menu"> 
                            
                            {
                               this.props.bool? <h1>古歌个人博客 </h1> : <MinMenu />
                            }
                            
                        </Col>
                        <Col  xs={14} sm={20}  className="
                        header-content-title header-middle-menu"> 
                        {
                            this.props.bool? <MaxMenu /> :  <h1 style={{textAlign:'center'}}>古歌个人博客 </h1>
                        }
                           
                        </Col>

                        <Col xs={5} sm={1}  className="header-right-search">
                            <Icon onClick={this.props.click} type="search" title="搜索" alt="搜索图标"/>
                        </Col>
                    </Row>
 
                </Layout.Header> 
                
    }   
    
}

function mapStateToProps(state){
    return {
        bool:state.reduxResize.resize_header.bool
    }
};

const mapDispatchToProps = {resizeTrue};

export default connect(mapStateToProps,mapDispatchToProps)(MainHeader)
