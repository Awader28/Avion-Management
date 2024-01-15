// Importing axios library which is used to make HTTP requests
import axios from "axios";

// Function to fetch all flight data from the server
export const flightDataList = () => {
    // Making a GET request to the server to fetch all flight data
    return axios.get('http://localhost:8080/upi/avion/all');
}

// Function to add a new flight to the server
export const addNewFlight = (flightData: any) => {
    // Making a POST request to the server to add a new flight
    return axios.post('http://localhost:8080/upi/avion', flightData);
};

// Function to retrieve a specific flight by its destination
export const getFlightByDestination = (fdestination: any) => {
    // Making a GET request to the server to fetch a specific flight by its destination
    return axios.get(`http://localhost:8080/avion/${fdestination}`);
};

// Function to update a specific flight
export const updateFlight = (
    fid: string,
    flightData: { forigin: string; flayover: string; fdestination: string; fdistance: string; ffuel: string; fcraft: string; fintime: string; fouttime: string; }) => {
    // Making a PUT request to the server to update a specific flight
    return axios.put(`http://localhost:8080/upi/avion/${fid}`, flightData);
};

// Function to delete a specific flight
export const deleteFlight = (fid: any) => {
    // Making a DELETE request to the server to delete a specific flight
    axios.delete(`http://localhost:8080/upi/avion/${fid}`);
};
