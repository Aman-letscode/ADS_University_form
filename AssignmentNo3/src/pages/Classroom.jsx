import React from "react";
import { Form } from 'antd';
import '../styles/Student.css';

const Classroom = ()=>{

    const onFinishHandler = async (values)=>{
        console.log(values)
    }
    return (
       
         <div className = "form-container">
            <Form layout="vertical" onFinish={onFinishHandler} className="register-form">
                <h2 className="text-center">Classroom Details</h2>
                <Form.Item label = "Building :" name="building" >
                    <input type="number" width={"500px"} className="input" required autocomplete="off"/>
                </Form.Item>
                <Form.Item label = "Room Number" name="room_number" >
                    <input type="number" className="input" required autocomplete="off"/>
                </Form.Item>
                <Form.Item label = "Capacity :" name="capacity" >
                    <input type="number" className="input" required autocomplete="off"/>
                </Form.Item>
                <button className="btn btn-primary" type="submit">Submit</button>
            </Form>
         </div>
       
    )
};

export default Classroom;