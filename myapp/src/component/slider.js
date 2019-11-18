import React,{Component} from "react";
import { Carousel,Icon } from 'antd';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {slider_data} from "../data/index-data";
class Slider extends Component {
    constructor(){
        super()
        this.state = {
            index:0,//设置图片下标初始值为第一张图片
        }
        this.play = this.play.bind(this)//绑定启用定时器
        this.clear = this.clear.bind(this)//绑定清除定时器  
    }
    componentDidMount(){ 
        this.play(); //首次渲染后，启用自动轮播
    }

    componentWillUnmount(){   
        this.clear();//组件移除后，清除定时器
    }

    play(){//启动自动轮播 设置定时器
        this.timer = setInterval(this.handleClick.bind(this),3000);  
    }

    clear(){//关闭轮播 清除定时器
        clearInterval(this.timer);
    }

    //左右箭头触发滚动
    handleClick(bool){ 
        //为ture时，才能执行轮播滚动 
        if(bool){//true 轮播图左方向移动
            const index = this.state.index <= 0? slider_data.length - 1 :                                                  this.state.index - 1 ;
            this.listClick(index);
        }else{
                //true 轮播图右方向移动
            const index = (this.state.index + 1) % slider_data.length;
                //滑动块的定位置
            this.listClick(index);
       
        }  
          
    }
    
    //下序列触发滚动
    listClick(index){  
        this.setState({
            index:index,//设置当前图片下标值     
        });
        //序列滑动块的移动位置
        const oleft = ((this.refs.tag.offsetWidth)
                      +((this.refs.dots.offsetWidth)*0.015))
                      *index;
        this.refs.tag.style.left = oleft +"px";
        this.refs.carousel.goTo(index,false);//轮播切换到指定面板
      
    }


    render(){
        
        return(
            <div ref="slider" style={{
                height: (this.props.height) + "px"
            }} onMouseEnter={this.clear} 
            onMouseLeave={this.play} id="slider" className='slider-container'>
                <Carousel  ref="carousel" dots="false"  className="slider-list" >
                    {slider_data.map((item,index)=>{
                            return  <Link to={"/artice/"+item.id} key={index} >
                                        <span className="slider-title">{item.title}</span>
                                        <img src={item.images} alt={item.title}/>
                                    </Link>
                        })  
                    }
                    
                </Carousel>
                <div style={{top:this.props.arrows_top}}  className="slider-arrows">
                    <Icon style={{fontSize:(this.props.arrows_size) + "px"}}  className="slider-btn" onClick={this.handleClick.bind(this,true)} type="left" />
                    <Icon style={{fontSize:(this.props.arrows_size) + "px"}}  className="slider-btn"  onClick={this.handleClick.bind(this,false)} type="right" />
                </div>
                <ul ref="dots" className="slider-dots">
                    {slider_data.map((item,index)=>{
                        return  <li ref="list" className="slider-dots-list" onClick={this.listClick.bind(this,index)} style={{
                                marginLeft:(( index>0 )? 1.5:0)+"%",
                               }} key={index} >
                                    <img  src={item.images} key={index} alt={item.title}/>
                                </li>
                        })   
                    }
                    <li className="slider-dots-tag" ref="tag" >
                        <div  style={{top:this.props.double_top}} className="double-box">
                            <Icon style={{fontSize:(this.props.double_size) + "px"}} type="double-left" />
                            <Icon style={{fontSize:(this.props.double_size) + "px"}} type="double-right" />
                        </div>
                    </li>  
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return state.reduxResize.resize_slider//变换slider style样式的数据集
}

export default connect(mapStateToProps)(Slider)