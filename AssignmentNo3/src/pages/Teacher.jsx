import React from "react";
import { Form } from 'antd';
import '../styles/Teacher.css';

const Teacher = ()=>{

    const onFinishHandler = async (values)=>{
        console.log(values)
    }
    return (
       
         <div className = "form-container">
            <Form layout="vertical" onFinish={onFinishHandler} className="register-form">
                <h2 className="text-center">Teacher Login</h2>
                <Form.Item label = "Name :" name="email" >
                    <input type="text" className="input" required autocomplete="off"/>
                </Form.Item>
                <Form.Item label = "Department Name :" name="email" >
                    <input type="text" className="input" required autocomplete="off"/>
                </Form.Item>
                <Form.Item label = "Password :" name="password" >
                    <input type="password" className="input" required autocomplete="off" />
                </Form.Item>
                <button className="btn btn-primary" type="submit">Register</button>
            </Form>
         </div>
       
    )
};

export default Teacher;