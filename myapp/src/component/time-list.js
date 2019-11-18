import React,{Component} from "react";
import {List} from 'antd';
import {Link} from "react-router-dom";
import {time_list} from "../data/index-data"
export default class TimeList extends Component{
    render(){
        return (
            <List
            className="widget time-list"

                split={false}
                dataSource={time_list}
                header={
                    <h3 className="widget-title time-title">
                      文章归档  
                    </h3>  
                }
                renderItem={item => (
                    <List.Item className="time_text" >
                        <Link to={"/date/"+item[0]+"/" + item[1]}>
                            {
                                (item[1].indexOf('0') === 0)? item[0] +"年"+item[1][1] +"月" :  item[0] +"年" + item[1] +"月"
                            }
                        </Link>
                    </List.Item> 
                    )
                }
            />
        )
    }
}