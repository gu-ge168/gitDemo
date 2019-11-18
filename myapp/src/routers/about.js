import React,{Component} from "react";
import {Link} from "react-router-dom";
import { Card,Icon ,Avatar} from 'antd';
import {share}  from "../component/share";
import  Publish from "../component/publish-form";
import CommentList  from "../component/comment-list";
import {aboutData} from "../data/about-data";
export default class About extends Component{
     componentDidMount(){
        document.title ="关于博主/古歌";
     }
    render(){
       return <div id="about-pagewrapper" className="pagewrapper">
                <Card bordered={false}  title={<Link className="card-title" to="#">关于博主</Link>} extra={share}>                
                        <ul className="article-content">
                            <li>
                                <h2 className="">{aboutData.intro.title}</h2>
                                <p><Avatar className="protagonist-pic" src={aboutData.intro.headImage} /></p>
                                <p><span className="protagonist">{aboutData.intro.host}</span></p>
                                {
                                    aboutData.intro.describe.map((value,index)=>{
                                       return <p className="describe" key={index}>{value}</p>
                                    })
                                }
                            </li>
                            <li>
                                <h2 className="">{aboutData.skill.title}</h2>
                                <ul className="skills-table">
                                    {
                                        aboutData.skill.progress.map((value,index)=>{
                                            return   <li key={index}>
                                                        <div className="progress-describe">{value.name}</div>
                                                        <div className="progress">
                                                            <div style={{width:(value.degree),backgroundColor:(value.color)}} className="progress-color">
                                                                <span>{value.degree}</span>
                                                            </div>
                                                        </div>
                                                </li>
                                        })
                                    } 
                                </ul>
                            </li>
                            <li >
                                <h2>{aboutData.contact.title}</h2>
                                <p className="describe">个人微信账号</p>
                                <p className="describe">扫码或搜索：<span className="describe-number weChat-number" >{aboutData.contact.number}</span></p>
                                <p className="describe">联系博主、技术交流、商务合作，可添加好友</p>
                                <p className="describe describe-box"><Avatar shape='square' className="weChat-pic" src={aboutData.contact.weChat}/></p>
                                <p className="weChat-number">{aboutData.contact.number}</p>
                                <p >个人微信<span className="weChat-number weChat-add">扫一扫添加</span></p>
                            </li>

                            <li>
                                <h2>更多信息</h2>
                                <p>
                                    <Icon style={{color:"#F78585"}} className="more-log more-log-weibo"  type="weibo-circle" title="世迫之君步權" alt="Weibo" theme="filled" />
                                    <Icon style={{color:"#e74c3c"}}  className="more-log more-log-qq" type="qq-circle" title="617559543" alt="QQ" theme="filled" />
                                    <Icon style={{color:"#9F92FF"}}  className="more-log more-log-github" type="github" title="gu-ge168" alt="GitHub" theme="filled" />
                                    <Icon style={{color:"#00a67c"}}  className="more-log more-log-phone" type="phone" title="13244833823" alt="phone" theme="filled" /> 
                                </p>
                            </li>
                        </ul>
                    </Card>
                    <Publish/>
                    <CommentList />
                    
             </div>   
    }
}
