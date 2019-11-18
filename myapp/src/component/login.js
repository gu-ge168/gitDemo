import React,{Component} from "react";
import { Form, Input, Button } from 'antd';
export default class Login extends Component{

    render(){
        return <div className="login-box">
        <Form className="login-form">
            <Form.Item>
                <span>用户名/邮箱</span>
                <Input
                placeholder="用户名/邮箱"
                />,
            
            </Form.Item>
            <Form.Item>
             <Input
                type="password"
                placeholder="密码"
                />,
            
            </Form.Item>
            <Form.Item>
           
            <Button type="primary" htmlType="submit" className="login-form-button">
                登录
            </Button>
           
            </Form.Item>
        </Form>
        </div>
    }
}
