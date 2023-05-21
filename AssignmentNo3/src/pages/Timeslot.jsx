import React from "react";
import { Form } from 'antd';
import '../styles/Teacher.css';

const Timeslot = ()=>{

    const onFinishHandler = async (values)=>{
        console.log(values)
    }
    return (
       
         <div className = "form-container">
            <Form layout="vertical" onFinish={onFinishHandler} className="register-form">
                <h2 className="text-center">Time Slot</h2>
                <Form.Item label = "Time Slot ID :" name="time_slot_id" >
                    <input type="number" className="input" required autocomplete="off"/>
                </Form.Item>
                <Form.Item label = "Day :" name="day" >
                    <input type="date" className="input" required autocomplete="off"/>
                </Form.Item>
                <Form.Item label = "Start Time:" name="start_time" >
                    <input type="time" className="input" required autocomplete="off" />
                </Form.Item>
                <Form.Item label = "End Time:" name="end_time" >
                    <input type="time" className="input" required autocomplete="off" />
                </Form.Item>
                <button className="btn btn-primary" type="submit">Submit</button>
            </Form>
         </div>
       
    )
};

export default Timeslot;