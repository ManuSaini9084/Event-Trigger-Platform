# Event Trigger Task

## Description
This is a full-stack application designed to handle event triggers with both frontend and backend components. The frontend is built with React.js, and the backend is deployed as serverless functions on Vercel.

### Features:
- **Frontend**: Real-time communication, dynamic event-triggered features.
- **Backend**: Handles event processing, message management, and more.
- **Deployment**: Deployed on Vercel for both frontend and backend with seamless integration.

---

## Table of Contents
- [Installation](#installation)
- [Frontend Deployment](#frontend-deployment)
- [Backend Deployment](#backend-deployment)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

---

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/event-trigger-task.git
    cd event-trigger-task
    ```

2. **Frontend**: Navigate to the frontend folder and install dependencies:
    ```bash
    cd frontend
    npm install
    ```

3. **Backend**: Navigate to the backend folder and install dependencies:
    ```bash
    cd backend
    npm install
    ```

4. **Run locally**: To run the project locally, follow these steps:

   - **Frontend**:
     ```bash
     cd frontend
     npm start
     ```

   - **Backend**:
     ```bash
     cd backend
     npm start
     ```

---

## Frontend Deployment

To deploy the frontend on **Vercel**:

1. Push your frontend code to GitHub/GitLab/Bitbucket.
2. Go to [Vercel](https://vercel.com), log in, and click "New Project."
3. Select the repository for the frontend.
4. Configure Vercel for React-based projects (Vercel auto-detects it).
5. Click **Deploy**. Vercel will deploy the frontend and give you a live URL.

---

## Backend Deployment

To deploy the backend on **Vercel**:

1. Push your backend code to GitHub/GitLab/Bitbucket.
2. Create a new project in Vercel and select the repository for the backend.
3. Ensure that your backend endpoints are under the `/api` directory (for serverless functions).
4. Set any necessary environment variables in the Vercel dashboard.
5. Click **Deploy**. Vercel will handle the deployment and give you a backend API URL.

---

## Environment Variables

Make sure to set the following environment variables on Vercel for both frontend and backend projects:

### Frontend:
- `REACT_APP_API_URL`: The base URL for the backend API.
- Any other specific keys needed for API integrations.

### Backend:
- `DATABASE_URL`: The URL for connecting to your database.
- `SECRET_KEY`: A secret key for authentication (if applicable).
- Any other necessary variables for backend services.

---

## Usage

1. Navigate to the deployed **Frontend URL** on Vercel to access the application.
2. The frontend will interact with the backend via API calls, displaying real-time data and handling events as needed.
3. Use the provided functionalities like message sending, event triggers, and viewing real-time updates.

---

## Technologies Used
- **Frontend**: React.js, Vercel
- **Backend**: Node.js, Express (deployed as serverless functions on Vercel)
- **Database**: MySQL (or any other database you are using)
- **Deployment**: Vercel
- **Version Control**: Git, GitHub/GitLab/Bitbucket

---

## Contributing

If you'd like to contribute to this project:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-branch`.
5. Open a pull request to merge your changes.

---
