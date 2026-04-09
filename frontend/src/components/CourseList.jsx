import React, { useEffect, useState } from "react";
import API from "./api";
import { Link } from "react-router-dom";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");

  const getCourses = async () => {
    const res = await API.get("/");
    setCourses(res.data);
  };

  const deleteCourse = async (id) => {
    await API.delete(`/${id}`);
    getCourses();
  };

  useEffect(() => {
    getCourses();
  }, []);

  // FILTER LOGIC
  const filteredCourses = courses.filter((c) =>
    c.courseName?.toLowerCase().includes(search.toLowerCase()) ||
    c.instructor?.toLowerCase().includes(search.toLowerCase()) ||
    c.category?.toLowerCase().includes(search.toLowerCase()) ||
    c.level?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 fw-bold text-primary">
        📚 All Courses
      </h2>

      {/* SEARCH BAR */}
      <div className="row mb-4">
        <div className="col-md-6 mx-auto">
          <input
            type="text"
            placeholder="🔍 Search by name, instructor, category, level..."
            className="form-control shadow-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* COURSES */}
      <div className="row g-4">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((c) => (
            <div className="col-md-4" key={c._id}>
              <div className="card h-100 shadow-lg border-0 rounded-4">

                <img
                  src={c.thumbnail || "https://via.placeholder.com/150"}
                  alt="thumbnail"
                  className="card-img-top"
                  style={{ height: "180px", objectFit: "cover" }}
                />

                <div className="card-body d-flex flex-column">
                  <h5 className="fw-bold">{c.courseName}</h5>

                  <p className="text-muted mb-1">
                    👨‍🏫 {c.instructor}
                  </p>

                  <p className="mb-1">📂 {c.category}</p>
                  <p className="mb-1">⏱ {c.duration} hrs</p>

                  <span className="badge bg-info mb-3">
                    {c.level}
                  </span>

                  <div className="mt-auto d-flex justify-content-between">
                    <Link
                      to={`/edit/${c._id}`}
                      className="btn btn-outline-primary btn-sm"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => deleteCourse(c._id)}
                      className="btn btn-outline-danger btn-sm"
                    >
                      Delete
                    </button>
                  </div>

                </div>
              </div>
            </div>
          ))
        ) : (
          <h5 className="text-center text-muted">
            No courses found 
          </h5>
        )}
      </div>
    </div>
  );
};

export default CourseList;