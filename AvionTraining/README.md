# Avion Hangar Management App - Setup Guide

Welcome to the setup guide for Avion, a hangar management application. This document will walk you through the steps necessary to get Avion up and running on your system.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Backend Setup](#backend-setup)
3. [Frontend Setup](#frontend-setup)
4. [Database Setup](#database-setup)
5. [Running the Application](#running-the-application)

## Prerequisites
Before you begin, ensure you have the following installed on your system:
- JDK 11 or later
- MySQL Server
- Node.js

## Backend Setup
Avion's backend is built with Spring Boot. Follow these steps to set it up:

1. **Clone the Repository**:
   ```
   git clone https://github.com/[your-username]/avion.git
   ```
2. **Navigate to the Backend Directory**:
   ```
   cd avion/backend
   ```
3. **Configure MySQL Database**:
   - Start your MySQL server.
   - Create a new database named `avion_db`.
   - Update the `application.properties` file with your MySQL username and password.

4. **Build and Run the Backend**:
   - Use Maven to build the project:
     ```
     ./mvnw clean install
     ```
   - Run the Spring Boot application ( AvionHangarApplication.class ):
     ```
     ./mvnw spring-boot:run
     ```

## Frontend Setup
The frontend of Avion is developed using React. To set it up:

1. **Navigate to the Frontend Directory**:
   ```
   cd AvionTraining\bin\src\main\resources\frontend\avion
   ```
2. **Install Dependencies**:
   ```
   npm install
   ```

## Database Setup
Setting up the MySQL database is crucial for the application to function properly.

1. **Start MySQL Server**:
   - Ensure that MySQL server is up and running on your machine.

2. **Create Database and Tables**:
   - The Spring Boot application will automatically create the necessary tables and relationships once it's running and connected to the database.

## Running the Application

1. **Start the Backend Server**:
   - Ensure the backend server is running as mentioned in [Backend Setup](#backend-setup).

2. **Start the Frontend Application**:
   - In the frontend directory, start the React application:
     ```
     npm run dev
     ```
   - This will launch the application in your default web browser.

3. **Access the Application**:
   - The application will be accessible at `http://localhost:3000`.
   - Log in with your credentials to access the dashboard.

## Conclusion

You have successfully set up the Avion Hangar Management App on your system. If you encounter any issues, please refer to the troubleshooting section or contact the support team.
