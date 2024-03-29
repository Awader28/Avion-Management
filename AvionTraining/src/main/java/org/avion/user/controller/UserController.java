package org.avion.user.controller;

// Import necessary packages
import java.util.List;
import java.util.Optional;

import org.avion.user.model.User;
import org.avion.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// Define the controller class
@CrossOrigin("*")
@RestController
@RequestMapping("/users") // Map requests to /users to this controller
public class UserController {

    // Autowire the UserRepository
    @Autowired
    private UserRepository userRepository;

    // Endpoint to get all users
    @CrossOrigin("*")
    @GetMapping("/all")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> allUsers = userRepository.findAll();
        return ResponseEntity.ok(allUsers);
    }

    // Endpoint to add a new user
    @CrossOrigin("*")
    @PostMapping("/add")
    public ResponseEntity<String> addUser(@RequestBody User user) {
        userRepository.save(user);
        return ResponseEntity.ok("User added successfully");
    }

    // Endpoint to get a user by ID
    @CrossOrigin("*")
    @GetMapping("/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable Long userId) {
        Optional<User> userOptional = userRepository.findById(userId);
        return userOptional.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    // Endpoint to update a user
    @CrossOrigin("*")
    @PutMapping("/update/{userId}")
    public ResponseEntity<String> updateUser(@PathVariable Long userId, @RequestBody User updatedUser) {
        Optional<User> existingUserOptional = userRepository.findById(userId);
        if (existingUserOptional.isPresent()) {
            User existingUser = existingUserOptional.get();
            existingUser.setUsername(updatedUser.getUsername());
            existingUser.setPassword(updatedUser.getPassword());
            existingUser.setRole(updatedUser.getRole());
            userRepository.save(existingUser);
            return ResponseEntity.ok("User Information updated successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Endpoint to delete a user
    @CrossOrigin("*")
    @DeleteMapping("/delete/{userId}")
    public ResponseEntity<String> deleteUser(@PathVariable Long userId) {
        if (userRepository.existsById(userId)) {
            userRepository.deleteById(userId);
            return ResponseEntity.ok("User deleted successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
