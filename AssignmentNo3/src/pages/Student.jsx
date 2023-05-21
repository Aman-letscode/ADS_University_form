import React from "react";
import { Form } from 'antd';
import '../styles/Student.css';
import { Link } from "react-router-dom";
import axios from 'axios';

const Student = ()=>{

    const onFinishHandler = async (values)=>{
        console.log(values)
        axios.post("http://localhost:4000/student")
    }
    return (
       
         <div className = "form-container">
            <Form layout="vertical" onFinish={onFinishHandler} className="register-form">
                <h2 className="text-center">Student Login </h2>
                <Form.Item label = "PRN Number :" name="name" >
                    <input type="text" width={"500px"} className="input" required autocomplete="off"/>
                </Form.Item>
                <Form.Item label = "Name :" name="email" >
                    <input type="text" className="input" required autocomplete="off"/>
                </Form.Item>
                <Form.Item label = "Department Name :" name="email" >
                    <input type="text" className="input" required autocomplete="off"/>
                </Form.Item>
                <Form.Item label = "Instructor Id:" name="email" >
                    <input type="number" className="input" required autocomplete="off"/>
                </Form.Item>
                <Form.Item label = "Password :" name="password" >
                    <input type="password" className="input" required autocomplete="off" />
                </Form.Item>
                {/* <Link to="/login" className="m-2">Already User Logined </Link> */}
                <button className="btn btn-primary" type="submit">Register</button>
            </Form>
         </div>
       
    )
};

export default Student;