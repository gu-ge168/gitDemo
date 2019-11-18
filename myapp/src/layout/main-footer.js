import React,{Component} from "react";
import {Layout} from "antd";
export default class MainFooter extends Component{
    render(){
        return (
            <Layout.Footer id="footer" style={{backgroundColor:"#333",color:"#aaa"}}>
                备案号：湘ICP备15014315号—1 版权所有：个人
            </Layout.Footer>
        );
    }
}