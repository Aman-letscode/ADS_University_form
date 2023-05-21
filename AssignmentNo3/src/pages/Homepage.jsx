import React from "react";
import {useNavigate} from 'react-router-dom';
import '../styles/Homepage.css';


const Homepage = ()=>{
    const navigate = useNavigate()
    const onSubmit = () => {
            return  navigate('/studentlogin')
     }
     const onSubmit2 = () => {
        return  navigate('/teacherlogin')
     }
     const onSubmit3 = () => {
      return  navigate('/classroom')
   }
   const onSubmit4 = () => {
      return  navigate('/timeslot')
   }
   const onSubmit5 = () => {
      return  navigate('/section')
   }
   const onSubmit6 = () => {
      return  navigate('/department')
   }
   const onSubmit7 = () => {
      return  navigate('/course')
   }
   const onSubmit8 = () => {
      return  navigate('/takes')
   }
    return (
       
         <div className="edit">
            <button className="btn style " onClick={onSubmit} type="submit">Student Login</button>

            <button className="btn style" onClick={onSubmit2} type="submit">Teacher Login</button>

            <button className="btn style" onClick={onSubmit3} type="submit">Classroom</button>

            <button className="btn style" onClick={onSubmit4} type="submit">Time-Slot</button>

            <button className="btn style" onClick={onSubmit5} type="submit">Section</button>
            
            <button className="btn style" onClick={onSubmit6} type="submit">Department</button>

            <button className="btn style" onClick={onSubmit7} type="submit">Course</button>

            <button className="btn style" onClick={onSubmit8} type="submit">Takes</button>
         </div>
       
    )
};

export default Homepage;