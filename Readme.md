## Project Setup

### Prerequisites:

- **Docker:** Ensure Docker is installed and running on your system.
- **Node.js and npm:** Make sure you have Node.js and npm (or yarn) installed.

### Backend (NestJS)

1. **Clone the Repository:**

   ```bash
   git clone git@github.com:yurii2007/codegeeks-test-task.git
   ```

2. **Install dependencies:**

   ```bash
   cd backend
   npm i

   cd frontend
   npm i
   ```

3. **Start the Database Container:**

   ```bash
   cd backend
   docker-compose up
   ```

4. **Start the Application:**

   ```bash
   cd backend
   npm run start:dev
   ```

### Frontend (Next.js)

1. **Install Dependencies:**

   ```bash
   cd frontend
   npm i
   ```

2. **Start the Next.js Development Server:**

   ```bash
   cd frontend
   npm run dev
   ```
