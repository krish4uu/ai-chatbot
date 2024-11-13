# AI ChatBot 👾

A modern chatbot application built with React and FastAPI, featuring a clean and minimal interface. The current implementation uses predefined responses.

## Tech Stack

### Frontend
- React
- Tailwind CSS
- Heroicons

### Backend
- Python 3.8+
- FastAPI
- Uvicorn
- CORS middleware

## Prerequisites
- Node.js (v14.0.0 or higher)
- npm or yarn
- Python 3.8 or higher
- pip (Python package manager)

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/krish4uu/ai-chatbot.git
cd ai-chatbot
```

### 2. Frontend Setup

Navigate to the frontend directory and install dependencies:

```bash
cd frontend
npm install

# Install Tailwind plugins
npm install -D tailwindcss postcss autoprefixer
````

### 3. Backend Setup

Navigate to the backend directory and set up a Python virtual environment:

```bash
cd backend

# Create virtual environment
python3 -m venv venv

# Activate virtual environment:

# On Windows:
venv\Scripts\activate

# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install fastapi uvicorn python-dotenv cors
```

## Running the Application

### 1. Start the Backend Server

From the backend directory with your virtual environment activated:

```bash
uvicorn main:app --reload
```

The backend server will start at `http://localhost:8000`

### 2. Start the Frontend Development Server

From the frontend directory:

```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`

## API Endpoints

The backend server provides the following endpoints:

- `GET /api/health`: Health check endpoint
- `POST /api/chat`: Chat endpoint
  - Request body: `{ "message": "string" }`
  - Response: `{ "response": "string" }`


### Modifying the Chat Response Logic

To customize the chatbot responses, edit the `responses.py` file in the backend directory. 

# Screenshots
## Desktop view
<img width="1440" alt="Screen Shot 2024-11-12 at 11 02 01 PM" src="https://github.com/user-attachments/assets/4cfc4bfd-0a1d-47d3-abf3-633a43e4cba3">
<img width="1440" alt="Screen Shot 2024-11-12 at 11 02 40 PM" src="https://github.com/user-attachments/assets/6be762dd-7eb0-475e-8018-ca91d7c7364e">

## Mobile view
<img width="214" alt="Screen Shot 2024-11-12 at 11 08 07 PM" src="https://github.com/user-attachments/assets/50836c94-06eb-4986-aa98-18c4c822263f">
<img width="214" alt="Screen Shot 2024-11-12 at 11 06 21 PM" src="https://github.com/user-attachments/assets/35afa508-25c5-4727-98e7-239c7310376c">






