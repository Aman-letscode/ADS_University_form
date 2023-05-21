import React from "react";
import { Form } from 'antd';
import '../styles/Teacher.css';

const Course = ()=>{

    const onFinishHandler = async (values)=>{
        console.log(values)
    }
    return (
       
         <div className = "form-container">
            <Form layout="vertical" onFinish={onFinishHandler} className="register-form">
                <h2 className="text-center">Course Details</h2>
                <Form.Item label = "Course ID:" name="course_id" >
                    <input type="number" className="input" required autocomplete="off"/>
                </Form.Item>
                <Form.Item label = "Title:" name="title" >
                    <input type="text" className="input" required autocomplete="off"/>
                </Form.Item>
                <Form.Item label = "Department Name:" name="department_name" >
                    <input type="number" className="input" required autocomplete="off"/>
                </Form.Item>
                <Form.Item label = "Credits:" name="credits" >
                    <input type="number" className="input" required autocomplete="off"/>
                </Form.Item>
                <button className="btn btn-primary" type="submit">Submit</button>
            </Form>
         </div>
       
    )
};

export default Course;