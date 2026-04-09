import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CourseList from "./components/CourseList";
import AddCourse from "./components/AddCourse";
import EditCourse from "./components/EditCourse";

import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/add" element={<AddCourse />} />
        <Route path="/edit/:id" element={<EditCourse />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App