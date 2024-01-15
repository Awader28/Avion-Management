package org.avion.controller;

import java.util.List;
import java.util.Optional;

import org.avion.model.Avion;
import org.avion.repository.AvionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// Define the controller package
@CrossOrigin("*") // Allow cross-origin requests
@RestController // This class is a RESTful controller
@RequestMapping("/upi") // Map all HTTP requests to /upi
public class AvionController {

    // Autowire the AvionRepository instance
    @Autowired
    AvionRepository aRep;

    // Create a new flight
    @CrossOrigin("*") // Allow cross-origin requests
    @PostMapping("/avion") // Map POST requests to /avion
    public String createNewFlight(@RequestBody Avion av) { // The request body should be an Avion object
        aRep.save(av); // Save the Avion object in the repository
        return "Flight Job Created"; // Return a success message
    }

    // Get all flights
    @CrossOrigin("*") // Allow cross-origin requests
    @GetMapping("/avion/all") // Map GET requests to /avion/all
    public ResponseEntity<Iterable<Avion>> getAllFlights() { // Return an iterable of Avion objects
        Iterable<Avion> allFlights = aRep.findAll(); // Find all Avion objects in the repository

        // If there are any flights, return them with a status of OK
        // Otherwise, return a NOT_FOUND status
        if (allFlights.iterator().hasNext()) {
            return new ResponseEntity<>(allFlights, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Get flights by destination
    @CrossOrigin("*") // Allow cross-origin requests
    @GetMapping("/avion/destination") // Map GET requests to /avion/destination
    public ResponseEntity<List<Avion>> getFlightsByDestination(@RequestParam("fdestination") String fdestination) { // The request parameter should be a string representing the destination
        List<Avion> avions = aRep.findFlightByfdestination(fdestination); // Find all Avion objects with the specified destination in the repository

        // If there are any flights, return them with a status of OK
        // Otherwise, return a NOT_FOUND status
        if (avions.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(avions, HttpStatus.OK);
        }
    }

    // Update a flight
    @CrossOrigin("*") // Allow cross-origin requests
    @PutMapping("/avion/{fid}") // Map PUT requests to /avion/{fid}
    public ResponseEntity<String> updateFlight(@PathVariable Long fid, @RequestBody Avion updatedAvion) { // The path variable should be a long representing the ID of the flight, and the request body should be an Avion object
        Optional<Avion> existingAvionOptional = aRep.findById(fid); // Try to find the Avion object with the specified ID in the repository

        // If the flight exists, update its properties with the values from the updatedAvion object
        // Then save the updated Avion object in the repository
        // Finally, return a success message with a status of OK
        // If the flight does not exist, return a NOT_FOUND status
        if (existingAvionOptional.isPresent()) {
            Avion existingAvion = existingAvionOptional.get();
            existingAvion.setForigin(updatedAvion.getForigin());
            existingAvion.setFlayover(updatedAvion.getFlayover());
            existingAvion.setFdestination(updatedAvion.getFdestination());
            existingAvion.setFdistance(updatedAvion.getFdistance());
            existingAvion.setFfuel(updatedAvion.getFfuel());
            existingAvion.setFcraft(updatedAvion.getFcraft());
            existingAvion.setFintime(updatedAvion.getFintime());
            existingAvion.setFouttime(updatedAvion.getFouttime());

            aRep.save(existingAvion);

            return new ResponseEntity<>("Flight updated successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Flight not found", HttpStatus.NOT_FOUND);
        }
    }

    // Delete a flight
    @CrossOrigin("*") // Allow cross-origin requests
    @DeleteMapping("/avion/{fid}") // Map DELETE requests to /avion/{fid}
    public ResponseEntity<String> deleteFlight(@PathVariable Long fid) { // The path variable should be a long representing the ID of the flight
        Optional<Avion> existingAvionOptional = aRep.findById(fid); // Try to find the Avion object with the specified ID in the repository

        // If the flight exists, delete it from the repository
        // Then return a success message with a status of OK
        // If the flight does not exist, return a NOT_FOUND status
        if (existingAvionOptional.isPresent()) {
            aRep.deleteById(fid);
            return new ResponseEntity<>("Flight deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Flight not found", HttpStatus.NOT_FOUND);
        }
    }
}
