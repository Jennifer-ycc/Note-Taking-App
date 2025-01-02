# Notes Taking App

A web application for creating, storing, and managing notes with a clean and simple interface. This app supports user authentication (login/signup) and integrates with MongoDB for backend storage.

---

## Features

- **Create Notes**: Add new notes with a title and content.
- **View Notes**: Fetch and display all saved notes from the database.
- **Edit Notes**: Update existing notes (future feature).
- **Delete Notes**: Remove notes from the database (future feature).
- **User Authentication**: Signup and login functionality.

---

## Technology Stack

### Frontend:
- HTML5, CSS3, JavaScript
- AJAX/Fetch API for backend communication

### Backend:
- Node.js with Express.js
- MongoDB with Mongoose

---

## Installation

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory and add the following:
```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/notesApp?retryWrites=true&w=majority
PORT=3000
```

### 3. Start the Application
```bash
node index.js
```
The app will run at `http://localhost:3000`.

---

## File Structure

```
.
├── public
│   ├── style.css          # Frontend styles
│   ├── script.js          # Frontend logic
├── pages
│   ├── index.html         # Home page
│   ├── login.html         # Login page
│   ├── signup.html        # Signup page
├── index.js               # Backend server
├── .env                   # Environment variables
├── package.json           # Dependencies and scripts
└── README.md              # Documentation
```

---

## API Endpoints

### **Notes Endpoints**
1. **Create Note**
   - URL: `/api/notes`
   - Method: `POST`
   - Body:
     ```json
     {
       "title": "Sample Title",
       "content": "Sample Content"
     }
     ```
   - Response: Created note object

2. **Fetch All Notes**
   - URL: `/api/notes`
   - Method: `GET`
   - Response: Array of all notes

---

## Future Enhancements

- Implement user-specific notes (associate notes with users).
- Add functionality to edit and delete notes.
- Enhance UI/UX with frameworks like React or Vue.js.
- Deploy the app to a cloud platform (e.g., Heroku or Vercel).

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contribution

Contributions are welcome! Feel free to fork the repository and submit a pull request.
