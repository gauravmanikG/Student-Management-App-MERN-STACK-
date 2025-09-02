# 📚 Student Management App

A **MERN stack application** (MongoDB, Express.js, React, Node.js) that helps manage students’ records easily.  
This app allows users to **add, view, edit, and delete** student details, with all data stored securely in **MongoDB Atlas**.

---

## 🚀 Features

- ➕ Add new students with details (name, class, roll number, etc.)  
- 📋 View all students in a clean UI  
- ✏️ Edit existing student details  
- 🗑️ Delete students from the database  
- 🌐 Data is stored and retrieved from **MongoDB Atlas**  
- ⚡ Backend powered by **Node.js + Express**  
- 🎨 Frontend built using **React**

---

## 🛠️ Tech Stack

- **Frontend:** React, Axios, CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas  
- **Version Control:** Git & GitHub  

---

## 📂 Project Structure

student-management-app/
│── backend/ # Node.js + Express server
│ ├── server.js
│ ├── routes/
│ ├── models/
│ └── controllers/
│
│── frontend/ # React frontend
│ ├── src/
│ └── public/
│
├── package.json
├── README.md

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/student-management-app.git
cd student-management-app

2️⃣ Setup Backend

cd backend
npm install

Create a .env file in the backend/ folder and add:

MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000


Run backend:

npm start

3️⃣ Setup Frontend
cd ../frontend
npm install
npm start

🌐 Usage

Open http://localhost:3000/
 for frontend

Backend runs on http://localhost:5000/

Add/Edit/Delete students, and changes will reflect instantly in MongoDB Atlas

🤝 Contributing

Contributions are welcome! Feel free to open issues and pull requests.

📜 License

This project is licensed under the MIT License.

