# 📝Assignment Submission Portal

## 📚 Overview

The Assignment Submission Portal is a full-stack web application built using Node.js, Express.js, MongoDB, and React. It facilitates efficient submission and management of assignments between users and administrators. Users can upload their tasks, and administrators can review, accept, or reject submissions.

## 🚀 Features
1. User Authentication: Secure registration and login for users and admins.<br>
2. Role-Based Access Control: Different permissions for users and admins.<br>
3. Assignment Management: Users can submit assignments. Admins can view, accept, or reject submitted assignments.<br>
4. API Endpoints: Comprehensive set of RESTful APIs to interact with the system.<br>
5. MongoDB Integration: Efficient storage and retrieval of user and assignment data.<br>

## 🛠️ Technologies Used
1. Backend: Node.js, Express.js, MongoDB, Mongoose<br>
2. Authentication: JWT<br>
3. Environment Variables: dotenv<br>
4. Testing: Postman

## 📂 Project Structure

```
.
├── config/
│   └── db.js                   # Database configuration and connection
├── controllers/
│   ├── authController.js       # Authentication logic
│   └── assignmentController.js # Assignment handling logic
├── middlewares/
│   └── auth.js                 # JWT authentication middleware
├── models/
│   ├── User.js                 # User model schema
│   └── Assignment.js           # Assignment model schema
├── routes/
│   ├── auth.js                 # Authentication routes
│   └── assignment.js           # Assignment-related routes
├── .env                        # Environment variables
├── server.js                   # Application entry point
├── README.md                   # Documentation
└── package.json                # Dependencies and scripts
```

## 📦 Installation and Setup

Follow these instructions to set up and run the project on local machine.

Prerequisites
1. Node.js 
2. MongoDB Atlas
3. Git

### Setup
1. Install dependencies:
   ```
   npm install
   ```
2. Create a .env file in the root directory:
   ```
   touch .env
   ```
3. Add the environment variables

4. Start the server:
   ```
   npm start
   ```
   The server will start on http://localhost:5000.

## 🛠️ API Endpoints

### Authentication Routes

| Endpoint                | Method | Description                       | Request Body                                                                                         |
|-------------------------|--------|-----------------------------------|------------------------------------------------------------------------------------------------------|
| `/api/auth/register`    | POST   | Register a new user or admin      | ```json { "name": "John Doe", "email": "johndoe@example.com", "password": "password123", "role": "user" } ``` |
| `/api/auth/login`       | POST   | Login an existing user or admin   | ```json { "email": "johndoe@example.com", "password": "password123" } ```                            |

### Assignment Routes

| Endpoint                           | Method | Description                          | Request Body                                                                                           |
|------------------------------------|--------|--------------------------------------|--------------------------------------------------------------------------------------------------------|
| `/api/assignments/upload`          | POST   | Upload a new assignment              | ```json { "task": "Build a REST API", "admin": "admin@example.com" } ```                                |
| `/api/assignments`                 | GET    | Get all assignments for an admin     | -                                                                                                      |
| `/api/assignments/:id/accept`      | POST   | Accept an assignment                 | -                                                                                                      |
| `/api/assignments/:id/reject`      | POST   | Reject an assignment                 | -                                                                                                      |
| `/api/assignments/admins`          | GET    | Retrieve a list of all admins        | -                                                                                                      |


## 🔒 Authentication
This project uses JWT for authentication. Users receive a token upon successful registration or login, which must be included in the x-auth-token header for all protected routes.

## 🗂️ Environment Variables
The following environment variables are required for the application to run:

MONGODB_URI: The URI to connect to MongoDB.
JWT_SECRET: Secret key for signing JWT tokens.

## Testing using Postman

### Register an Admin:
Method: POST
URL: http://localhost:5000/api/auth/register
```
{
    "name": "Admin1",
    "email": "admin1@example.com",
    "password": "password123",
    "role": "admin"
}
```
### Register an User:
Method: POST
URL: http://localhost:5000/api/auth/register
```
{
    "name": "User1",
    "email": "user1@example.com",
    "password": "password123",
    "role": "admin"
}
```
### Log in as User/Admin:
Set up your request to log in as a user:
Method: POST
URL: http://localhost:5000/api/auth/login
```
{
    "email": "user1@example.com",
    "password": "password123"
}
```
### Upload an Assignment:
Method: POST
URL: http://localhost:5000/api/assignments/upload<br>
Headers: Add a header for x-auth-token and paste the token you copied.
```
{
    "task": "Hello World",
    "admin": "admin1@example.com"
}
```
### View Assignments as Admin:
Method: GET
URL: http://localhost:5000/api/assignments<br>
Headers: Add a header for x-auth-token and paste the admin token.

### Accept an Assignment:
Method: POST
URL: http://localhost:5000/api/assignments/{id}/accept<br>
Headers: Add a header for x-auth-token and paste the admin token.

### Reject an Assignment:
Method: POST
URL: http://localhost:5000/api/assignments/{id}/reject <br>
Headers: Add a header for x-auth-token and paste the admin token.

![image](https://github.com/user-attachments/assets/3b33ded0-19d2-4710-b46c-069dc11afa1a)

## 👤 Role Management
Admin: Has access to review, accept, or reject assignments and manage users.
User: Can upload assignments and view their status.

## 📧 Contact
Email: raghavpareek48@gmail.com
Phone Number: 9772241194
