import React from "react";
import { Form } from 'antd';
import '../styles/Teacher.css';

const Section = ()=>{

    const onFinishHandler = async (values)=>{
        console.log(values)
    }
    return (
       
         <div className = "form-container">
            <Form layout="vertical" onFinish={onFinishHandler} className="register-form">
                <h2 className="text-center">Section Details</h2>
                <Form.Item label = "Course ID:" name="course_id" >
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
                <Form.Item label = "Building :" name="building" >
                    <input type="number" className="input" required autocomplete="off" />
                </Form.Item>
                <Form.Item label = "Room Number:" name="room_nummber" >
                    <input type="number" className="input" required autocomplete="off" />
                </Form.Item>
                <Form.Item label = "Time Slot ID:" name="time_slot_id" >
                    <input type="number" className="input" required autocomplete="off" />
                </Form.Item>
                <button className="btn btn-primary" type="submit">Submit</button>
            </Form>
         </div>
       
    )
};

export default Section;