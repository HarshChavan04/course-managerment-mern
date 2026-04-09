import React, { useEffect, useState } from "react";
import API from "./api";
import { useNavigate, useParams } from "react-router-dom";

const EditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    courseName: "",
    instructor: "",
    category: "",
    duration: "",
    level: "",
    thumbnail: ""
  });

  useEffect(() => {
    API.get(`/${id}`).then((res) => setForm(res.data));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.put(`/${id}`, form);
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 rounded-4">
        <h3 className="text-center mb-4 text-primary fw-bold">
          ✏️ Edit Course
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="row g-3">

            <div className="col-md-6">
              <input
                name="courseName"
                value={form.courseName}
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <input
                name="instructor"
                value={form.instructor}
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <input
                name="category"
                value={form.category}
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <input
                name="duration"
                value={form.duration}
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <select
                name="level"
                value={form.level}
                className="form-select"
                onChange={handleChange}
              >
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>

            <div className="col-md-6">
              <input
                name="thumbnail"
                value={form.thumbnail}
                className="form-control"
                onChange={handleChange}
              />
            </div>

          </div>

          <button className="btn btn-primary w-100 mt-4 fw-bold">
            Update Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCourse;