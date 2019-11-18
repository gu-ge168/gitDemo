import React,{Component} from "react";
import {Icon} from 'antd';
export default class Like extends Component{
        constructor(){
            super()
            this.state =({
                value:0,
            })
            this.handleClick= this.handleClick.bind(this);
        }
        componentDidMount(){
          this.refs.span.onselectstart = function(){return false;}
            this.setState({
                value:this.props.obj.enjoy
            })
        }
        handleClick(){
            const num = this.state.value + 1;
            this.setState({
                value:num
            }) 
        }
        render(){
            const {value} = this.state
            return(
                <span ref="span"  onClick={this.handleClick}  className="muted enjoy-box">
                    <Icon type="heart" />
                        <b className="count">{value}</b>
                        喜欢
                </span>
            )
        }
}