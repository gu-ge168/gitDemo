import React,{Component} from "react";
import Publish from "./publish-form.js";

export default class Comment extends Component{
    constructor(){
        super()
        this.state={
            bool:false
        }
        this.handleClick =this.handleClick.bind(this)
    }
    handleClick(){
        this.setState({
            bool:true
        })
    }
    render(){
        
        return<div className="comment" >
                <div className="comment-premier">
                    <div className="commt-avatar">
                        <img src="  " alt=""/>
                    </div>
                    <div className="commt-warp">
                        <p className="commt-content" >
                            {this.props.text}
                        </p>
                        <div className="commt-actions">
                            <span className="commt-author">
                            {
                                this.props.url ? this.props.name : <a href="# " alt="">{this.props.name}</a>
                            }
                            </span>
                            <span className=" commt-datetime">2019-09-26 20:25</span>
                            <span  onClick={this.handleClick} className="commt-reply">回复</span>
                        </div>
                    </div>
                </div>
               {
                this.state.bool ?  <Publish  className="publish-children" /> : ""
               }  
            </div>
    }
}