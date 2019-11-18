import React,{Component} from "react";
import {Avatar,Input,Form ,Icon} from 'antd';
import {connect} from "react-redux";
import {faceData} from "../data/comment-data.js"
const { TextArea } = Input;
class Publish extends Component{
    constructor(){
        super()
        this.state ={
            data:[],
            smileBool:false//表情包开关
            ,userBool:false//用户信息栏开启
            ,hint:"请填写昵称和邮箱！"
        };
        this.smileClick = this.smileClick.bind(this)
        this.textFocus = this.textFocus.bind(this)
    }
    smileClick(){
        this.setState ({
            smileBool:!this.state.smileBool 
        })
    }

    textFocus(){
        this.setState ({
            userBool:true 
        })
    }
    render(){     
        return <div id="respond" className={this.props.className ? this.props.className : "publish" }>
                <Form>
                    <div  className="publish-title">
                        <span className="publish-user"><Avatar shape="square"  icon="user" /></span>
                        <span className="publish-author">发表我的评论</span>
                       {
                        this.props.className ? (<div className="cancel-right">取消评论</div>) : <div></div>
                       } 
                    </div>
                    <div className="publish-box">
                        <div  className="publish-text">
                            <Form.Item>
                                <TextArea placeholder="写点什么. . ." rows={2} onFocus={this.textFocus} />
                            </Form.Item>
                            <div className="publish-ctrl">
                                <span className="publish-smilie smilie-left" onClick={this.smileClick}><Icon className="face-smilie"  type="smile" />表情</span>
                                <div className="btn-right ">
                                    <span className="publish-error">{this.state.hint}</span>
                                    <Form.Item style={{display:"inline-block"}}> 
                                        <button className="publish-btn " ><i className="iconfont icon-tijiao"/>提交评论</button>
                                    </Form.Item>
                                </div>
                            </div>
                            <div   id="publish-smilies"   className="smilies-block" style={{display:this.state.smileBool? "inline-block" : "none"}}>                               
                                {faceData.src.map((item,index)=>{
                                        return <img data-simle={faceData.name[index]} title={faceData.title[index]} data-type="comment-simle" src={item} key={index} alt="表情图"/>
                                    })  
                                }
                            </div>                       
                        </div>
                        <div className="publish-comterinfo" style={{display:this.state.userBool? "inline-block" : "none"}} >
                                <h4  className="comterinfo-left">Hi，您需要填写昵称和邮箱！</h4>
                                <ul className="comterinfo-left">
                                    <li className="form-inline">
                                        <Form.Item className="input-inline">
                                        <Input ref="user" placeholder="用户名(name)"
                                            prefix={<Icon type="user" className="comterinfo-logo-color"  />}
                                        />
                                        </Form.Item>
                                        <span className="help-inline">用户名（必填）</span>
                                    </li>
                                    <li className="form-inline">
                                        <Form.Item className="input-inline"> 
                                            <Input ref="mall" placeholder="邮箱(Mail)" 
                                                prefix={<Icon className="comterinfo-logo-color" type="mail" theme="filled" />}
                                            />
                                        </Form.Item>
                                        <span className="help-inline">邮箱（必填）</span>
                                    </li>
                                    <li className="form-inline">
                                        <Form.Item className="input-inline"> 
                                            <Input ref="url"  placeholder="网址(URL)" prefix={
                                                <Icon type="api" className="comterinfo-logo-color"  />
                                            } />
                                        </Form.Item>
                                        <span className="help-inline">网址</span>
                                    </li>
                                </ul>
                        </div>   
                    </div>  
                </Form>
        </div>
    }
}

const mapStateToProps = (state)=>{
    return {
        commentData:state.reduxComment.commentData
    }
  }
export default connect(mapStateToProps)(Publish)
