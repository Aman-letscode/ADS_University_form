import React from "react";
import { Form } from 'antd';
import '../styles/Student.css';

const Department = ()=>{

    const onFinishHandler = async (values)=>{
        console.log(values)
    }
    return (
       
         <div className = "form-container">
            <Form layout="vertical" onFinish={onFinishHandler} className="register-form">
                <h2 className="text-center">Department Details</h2>
                <Form.Item label = "Department Name :" name="department_name" >
                    <input type="text" className="input" required autocomplete="off"/>
                </Form.Item>
                <Form.Item label = "Building :" name="building" >
                    <input type="number" width={"500px"} className="input" required autocomplete="off"/>
                </Form.Item>
                
                <Form.Item label = "Budget :" name="budget" >
                    <input type="number" className="input" required autocomplete="off"/>
                </Form.Item>
                <button className="btn btn-primary" type="submit">Submit</button>
            </Form>
         </div>
       
    )
};

export default Department;