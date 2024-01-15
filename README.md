# Avion: Hangar Management Application

## Overview

Welcome to the Avion Hangar Management App repository. Avion is a robust and user-friendly application designed for efficient tracking and management of flight data associated with hangars. It offers a comprehensive view of various flight details, empowering hangar operators to maintain and manage flight records seamlessly.

### Key Features:
- **Flight Data Visualization**: Avion enables users to view detailed data of all flights that have used their hangar. This includes:
  - Origin
  - Layover
  - Destination
  - Distance
  - Fuel Usage
  - Aircraft Model
  - In-Time and Out-Time
  
  All this information is presented in an easily navigable tabular format.

- **Data Management**: Users have the flexibility to update or delete individual flight records directly from the table. This functionality is enhanced with intuitive action buttons for a seamless experience.

- **Record Creation**: Alongside managing existing records, users can also add new flight records on the same page, ensuring a cohesive and uninterrupted workflow.

## Technologies Used
- **Backend**: Spring Boot
- **Database**: MySQL
- **Frontend**: React with Vite as the build tool
- **HTTP Client**: Axios Library

## Getting Started

### Prerequisites
- JDK 11 or later
- MySQL Server
- Node.js
- Spring Tool Suit 4 (For an Easier Setup)

### Installation
1. **Clone the Repository**:
   ```sh
   git clone https://github.com/[your-username]/avion.git
   ```
2. **Set up the Backend**:
   - Navigate to the backend directory.
   - Configure your MySQL database settings.
   - Run the Spring Boot application.

3. **Set up the Frontend**:
   - Navigate to the frontend directory.
   - Install dependencies:
     ```sh
     npm install
     ```
   - Start the React application:
     ```sh
     npm start
     ```

## Usage

Once the application is running, log in with your credentials. You will be presented with the dashboard displaying all flight records in your hangar. Use the action buttons to manage the flight data as per your requirements.

## Contributing

Contributions are what make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.



