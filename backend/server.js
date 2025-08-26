const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(
    "mongodb+srv://gauravmanik371:calJRwrN7irRYJzs@crud-db.piaqang.mongodb.net/grvdatabase?retryWrites=true&w=majority&appName=CRUD-db"
  )
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// Student Schema
const studentSchema = new mongoose.Schema({
  name: String,
  class: String,
  rollNo: Number,
});

const Student = mongoose.model("grvcollection", studentSchema);

// Routes
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Get all students
app.get("/api/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// Add student
app.post("/api/students", async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.json(student);
});

// Update student
app.put("/api/students/:id", async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(student);
});

// Delete student
app.delete("/api/students/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Student deleted" });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
