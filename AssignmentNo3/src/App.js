import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from './pages/Student';
import Teacher from './pages/Teacher';
import Homepage from './pages/Homepage';
import Classroom from './pages/Classroom';
import Timeslot from './pages/Timeslot';
import Section from './pages/Section';
import Department from './pages/Department';
import Course from './pages/Course';
import Takes from './pages/Takes';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/studentlogin" element={<Student/>} />
      <Route path="/teacherlogin" element={<Teacher/>} />
      <Route path="/classroom" element={<Classroom/>} />
      <Route path="/timeslot" element={<Timeslot/>} />
      <Route path="/section" element={<Section/>} />
      <Route path="/department" element={<Department/>} />
      <Route path="/course" element={<Course/>} />
      <Route path="/takes" element={<Takes/>} />
      </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
