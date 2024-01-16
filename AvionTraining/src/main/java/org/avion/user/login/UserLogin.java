package org.avion.user.login;

// Import necessary packages

import java.util.Optional;

import org.avion.user.model.User;
import org.avion.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// Define the controller class
@CrossOrigin("*")
@RestController
// Map all requests starting with /login to this controller
@RequestMapping("/login")
public class UserLogin {

    // Autowire the UserRepository instance
    @Autowired
    private UserRepository userRepository;

    // Map POST requests starting with /login/authenticate to this method
    @CrossOrigin("*")
    @PostMapping("/authenticate")
    // This method takes a User object as input and returns a ResponseEntity object
    public ResponseEntity<String> authenticateUser(@RequestBody User loginRequest) {
        // Try to find a user with the given username in the database
        Optional<User> userOptional = userRepository.findByUsername(loginRequest.getUsername());

        // If a user was found
        if (userOptional.isPresent()) {
            // Get the user object
            User user = userOptional.get();

            // Compare the provided password with the stored password
            // Note: This is a very basic way of checking passwords and should not be used in production
            if (user.getPassword().equals(loginRequest.getPassword())) {
                // If the passwords match, return a success message
                return ResponseEntity.ok("Authentication successful");
            } else {
                // If the passwords don't match, return an error message
                return ResponseEntity.badRequest().body("Incorrect password");
            }
        } else {
            // If no user was found, return an error message
            return ResponseEntity.badRequest().body("User not found");
        }
    }
}
