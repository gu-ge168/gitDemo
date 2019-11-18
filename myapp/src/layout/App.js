import React,{Component} from "react";
import {Layout,Input,Icon,BackTop} from "antd";
import MainHeader from "./main-header";
import Section from "./section"
import MainFooter from "./main-footer";
import {withRouter} from "react-router-dom";
import {all_data} from "../data/index-data";
const { Search }= Input;

 class App extends Component {
    constructor(){
        super()
        this.state={
          path:"#",
          beforeValue:"",
          searchBool:false,
        }
        this.handleClick= this.handleClick.bind(this);
        this.handleOut= this.handleOut.bind(this);
        this.valueChange = this.valueChange.bind(this);
      }
      componentWillReceiveProps(nextProps){
        const path = nextProps.location.pathname;
        if(this.state.path !== path){
           document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
      }
      handleClick(){
        this.setState(
          {
            searchBool:true
          }
        )
      }
      handleOut(){
            this.setState(
            {
              searchBool:false,
            })

      }

      ifValue(obj,value){
          const reg = new RegExp(value,"ig");
          const arr = [];
          obj.filter((item)=>{ 
            const bool= reg.test(item.tag + item.type+item.title+item.describe + item.content);
            if(bool){
              arr.push(item);
            }
            return item   
          }) 
          return arr
      }

      valueChange(value){
        if(this.state.beforeValue !== value){
           const arrData =  this.ifValue(all_data,value);
           if(arrData.length > 0){
              this.props.history.push("/？s=" + value); 
                this.setState(
                {
                  beforeValue:value,
                })
           }  
        }
      }

    render(){
        return (        
              <div id="wrapper"> 
                <MainHeader click={this.handleClick} />
                <Layout id="section" style={{width:"100%"}}>
                    <Section/>
                </Layout>
                <MainFooter/>
                <div id="search" onMouseLeave={this.handleOut} className="top-search"   style={{top:this.state.searchBool ? "0px" :"-92px"}}>
                    <Search ref="search" onSearch={this.valueChange}  className="search-text"   placeholder="搜索关键字" enterButton="搜索"/>
                </div>
                <BackTop target ={()=> window}  style={{bottom:"120px"}}>
                　　　　 <Icon id="to-top" type="to-top" />
　　            </BackTop>
              </div>       
        );
    }
}
export default withRouter(App); 