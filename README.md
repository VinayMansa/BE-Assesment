# BE-Assesment

This is a backend assessment project built with Node.js and Express, using PostgreSQL as the database.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- PostgreSQL

## Getting Started

### Clone the Repository

https://github.com/VinayMansa/BE-Assesment.git

### Install Dependencies

bash
npm install


### Database Setup

1. **Access to PostgreSQL**: Ensure you have access to the existing PostgreSQL database.

2. **Configure Database Connection**: Update your database connection string in your application configuration file (e.g., `config.js` or directly in your `server.js`) to connect to the existing database.

    connection string format:
   ```plaintext
   postgres://postgres:Vinzz@123@localhost:5432/BE-Task
   ```

### Running the Server

#### For Development

Use `nodemon` to automatically restart the server on file changes:

bash

The server will be running at `http://localhost:5000`.

## API Endpoints

- **POST /registrations**: Create a new registration.
- **GET /registrations/:id**: Retrieve a registration by ID.
- **PUT /registrations/:id**: Update a registration by ID.
- **DELETE /registrations/:id**: Delete a registration by ID.
npm run dev

