import React from "react";
import { Form } from 'antd';
import '../styles/Teacher.css';

const Takes = ()=>{

    const onFinishHandler = async (values)=>{
        console.log(values)
    }
    return (
       
         <div className = "form-container">
            <Form layout="vertical" onFinish={onFinishHandler} className="register-form">
                <h2 className="text-center">Takes Details</h2>
                <Form.Item label = "ID :" name="course_id" >
                    <input type="number" className="input" required autocomplete="off"/>
                </Form.Item>
                <Form.Item label = "Course ID" name="course_id" >
                    <input type="number" className="input" required autocomplete="off"/>
                </Form.Item>
                <Form.Item label = "Section ID" name="sec_id" >
                    <input type="number" className="input" required autocomplete="off"/>
                </Form.Item>
                <Form.Item label = "Semester:" name="semester" >
                    <input type="number" className="input" required autocomplete="off" />
                </Form.Item>
                <Form.Item label = "Year:" name="year" >
                    <input type="month" className="input" required autocomplete="off" />
                </Form.Item>
                <Form.Item label = "Grade:" name="grade" >
                    <input type="number" className="input" required autocomplete="off" />
                </Form.Item>
                <button className="btn btn-primary" type="submit">Submit</button>
            </Form>
         </div>
       
    )
};

export default Takes;