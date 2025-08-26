import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: "", class: "", rollNo: "" });
  const [editingId, setEditingId] = useState(null);

  // Fetch all students
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/students");
      setStudents(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Add or Update student
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/api/students/${editingId}`, form);
        setEditingId(null);
      } else {
        await axios.post("http://localhost:5000/api/students", form);
      }
      setForm({ name: "", class: "", rollNo: "" });
      fetchStudents();
    } catch (err) {
      console.error(err);
    }
  };

  // Delete student
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/students/${id}`);
      fetchStudents();
    } catch (err) {
      console.error(err);
    }
  };

  // Edit student (fill form with data)
  const handleEdit = (student) => {
    setForm({
      name: student.name,
      class: student.class,
      rollNo: student.rollNo,
    });
    setEditingId(student._id);
  };

  return (
    <div style={{ margin: "30px", fontFamily: "Arial, sans-serif" }}>
      <h1>📚 Student Management (CRUD App)</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          marginBottom: "20px",
          padding: "15px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          width: "350px",
        }}
      >
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          style={{ display: "block", margin: "10px 0", padding: "8px", width: "100%" }}
        />
        <input
          type="text"
          placeholder="Class"
          value={form.class}
          onChange={(e) => setForm({ ...form, class: e.target.value })}
          required
          style={{ display: "block", margin: "10px 0", padding: "8px", width: "100%" }}
        />
        <input
          type="number"
          placeholder="Roll No"
          value={form.rollNo}
          onChange={(e) => setForm({ ...form, rollNo: e.target.value })}
          required
          style={{ display: "block", margin: "10px 0", padding: "8px", width: "100%" }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {editingId ? "Update Student" : "Add Student"}
        </button>
      </form>

      {/* Table */}
      <h2>All Students</h2>
      <table
        border="1"
        cellPadding="10"
        style={{ borderCollapse: "collapse", width: "100%", maxWidth: "700px" }}
      >
        <thead>
          <tr style={{ background: "#f2f2f2" }}>
            <th>Name</th>
            <th>Class</th>
            <th>Roll No</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No students found
              </td>
            </tr>
          ) : (
            students.map((s) => (
              <tr key={s._id}>
                <td>{s.name}</td>
                <td>{s.class}</td>
                <td>{s.rollNo}</td>
                <td>
                  <button
                    onClick={() => handleEdit(s)}
                    style={{
                      marginRight: "10px",
                      padding: "5px 10px",
                      background: "orange",
                      color: "white",
                      border: "none",
                      borderRadius: "3px",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(s._id)}
                    style={{
                      padding: "5px 10px",
                      background: "red",
                      color: "white",
                      border: "none",
                      borderRadius: "3px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
