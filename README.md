# Library Management System
Developer assignment implementation with a Next.js frontend and .NET Core backend.

## Features
- Login / authentication
- Dashboard
- Book CRUD (create, read, update, delete)
- JSON mock database
- Dev / UAT / Prod frontend environment files
- Frontend-to-backend integration

## Demo login
- Email: `admin@library.com`
- Password: `admin123`

## Frontend
```bash
cd frontend
npm install
npm run dev
```
Open http://localhost:3000

## Backend
Requires .NET 8 SDK.
```bash
cd backend
dotnet restore
dotnet run
```
API: http://localhost:5000/api

## API endpoints
- POST `/api/auth/login`
- GET `/api/crud/books`
- GET `/api/crud/books/{id}`
- POST `/api/crud/books`
- PUT `/api/crud/books/{id}`
- DELETE `/api/crud/books/{id}`

## Note about Dapper + JSON
The assignment explicitly requests both `.NET Core + Dapper` and JSON files as mock database tables. Dapper is included as a backend dependency, while persistence is implemented through the required JSON mock tables because Dapper normally targets relational `IDbConnection` providers rather than JSON files.
