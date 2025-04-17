# Code Review

A simple code review web application built using React for the frontend and Express for the backend. It allows users to input JavaScript code and get automated reviews with suggestions for improvement.

## Features

- **Code Input**: Users can input their JavaScript code in a syntax-highlighted editor.
- **Code Review**: The application sends the code to an API, which provides feedback and suggestions for improvement.
- **Responsive UI**: The interface is fully responsive, designed to work seamlessly on both desktop and mobile devices.
- **Syntax Highlighting**: Code is highlighted using [Prism.js](https://prismjs.com/).
- **Real-time Review**: The review is displayed instantly after processing the code.

## Technologies Used

### Frontend

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for building modern web designs.
- **Vite**: Next-generation, fast, and optimized bundler for frontend applications.
- **Prism.js**: Lightweight, extensible syntax highlighter for code.
- **React Markdown**: Markdown component for rendering Markdown syntax.
- **Axios**: HTTP client for making API requests.
- **React Simple Code Editor**: A code editor component for React that supports syntax highlighting.
- **Remark GFM**: A plugin for supporting GitHub-flavored Markdown.

### Backend

- **Express.js**: A minimal and flexible Node.js web application framework.
- **@google/genai**: A package used to integrate Google's AI for generating code reviews.
- **dotenv**: Loads environment variables from a `.env` file into `process.env`.
- **CORS**: Provides a middleware to enable Cross-Origin Resource Sharing.

## Installation

To get started with the project, clone the repository and install the dependencies:

### Frontend

1. Navigate to the frontend folder:

```bash
cd frontend
```
2. Install frontend dependencies:

```bash
npm install
```
3. Run the frontend application:

```bash
npm run dev
```

### Backend

1. Navigate to the backend folder:

```bash
cd backend
```
2. Install frontend dependencies:

```bash
npm install
```
3. Create a .env file for sensitive data (like API keys) in the backend folder.
   
4. Run the backend application:

```bash
node server.js
```

This will start the backend server at http://localhost:5000, or another port you specify in the server.js file.

## Usage

### Frontend
Enter your JavaScript code into the code editor.

### Backend
The code is sent to the backend for processing, where it is reviewed by the AI and suggestions are generated.

### Review
Once the code is reviewed, the suggestions are displayed below the editor.

