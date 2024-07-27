# Bank CRM Platform

## Overview

The Bank CRM Platform is a comprehensive customer relationship management system designed for banks. It features a backend built with NestJS and a frontend developed using Next.js. The application provides tools for managing customer information, tracking interactions, and enhancing customer service.

## Project Structure

The project is organized into two main directories:
- `backend/`: Contains the NestJS backend application.
- `frontend/`: Contains the Next.js frontend application.

## Backend Setup (NestJS)

### Prerequisites

- Node.js (v20.12 or higher)
- PostgreSQL

### Installation

1. **Navigate to the Backend Directory:**
   ```bash
   cd backend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure the Database:**
   - Edit `src/app.module.ts` to set up your PostgreSQL database credentials.

4. **Run the Application:**
   ```bash
   npm run start:dev
   ```

   The backend will be available at `http://localhost:3000`.

### Database Setup

1. **Create a PostgreSQL Database:**
   ```sql
   CREATE DATABASE bank_crm;
   CREATE USER your_username WITH PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE bank_crm TO your_username;
   ```

2. **Ensure PostgreSQL is running on `localhost:5432`** or update `src/app.module.ts` to match your PostgreSQL instance settings.

## Frontend Setup (Next.js)

### Prerequisites

- Node.js (v20.12 or higher)

### Installation

1. **Navigate to the Frontend Directory:**
   ```bash
   cd frontend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Apollo Client:**
   - Edit `pages/_app.js` to ensure the Apollo Client configuration matches the backend GraphQL endpoint.

4. **Run the Application:**
   ```bash
   npm run dev
   ```

   The frontend will be available at `http://localhost:3000`.

## Common Commands

### Backend

- **Start the Backend Server:**
  ```bash
  cd backend
  npm run start:dev
  ```

- **Run Tests:**
  ```bash
  cd backend
  npm test
  ```

### Frontend

- **Start the Development Server:**
  ```bash
  cd frontend
  npm run dev
  ```

- **Build for Production:**
  ```bash
  cd frontend
  npm run build
  ```

- **Run Tests:**
  ```bash
  cd frontend
  npm test
  ```

## CI/CD

The project uses GitHub Actions for continuous integration and deployment. Ensure to configure the workflow file (`.github/workflows/ci.yml`) according to your needs.

## Contributing

1. **Fork the Repository:**
   - Click on "Fork" at the top right of this repository's GitHub page.

2. **Clone Your Fork:**
   ```bash
   git clone https://github.com/your-username/bank-crm-platform.git
   ```

3. **Create a Branch:**
   ```bash
   git checkout -b feature/your-feature
   ```

4. **Commit Your Changes:**
   ```bash
   git add .
   git commit -m "Add your commit message"
   ```

5. **Push to Your Fork:**
   ```bash
   git push origin feature/your-feature
   ```

6. **Create a Pull Request:**
   - Go to the original repository and create a pull request from your fork's branch.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.