import React, { useState } from "react";
import API from "./api";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const [form, setForm] = useState({
    courseName: "",
    instructor: "",
    category: "",
    duration: "",
    level: "",
    thumbnail: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/", form);
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 rounded-4">
        <h3 className="text-center mb-4 text-success fw-bold">
          ➕ Add New Course
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="row g-3">

            <div className="col-md-6">
              <input
                name="courseName"
                placeholder="Course Name"
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <input
                name="instructor"
                placeholder="Instructor"
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <input
                name="category"
                placeholder="Category"
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <input
                type="number"
                name="duration"
                placeholder="Duration (hrs)"
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <select
                name="level"
                className="form-select"
                onChange={handleChange}
              >
                <option value="">Select Level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>

            <div className="col-md-6">
              <input
                name="thumbnail"
                placeholder="Image URL"
                className="form-control"
                onChange={handleChange}
              />
            </div>

          </div>

          <button className="btn btn-success w-100 mt-4 fw-bold">
            Add Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;