package org.avion;

// Import necessary package

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// Define the main Spring Boot application class
@SpringBootApplication
public class AvionHangarApplication {

    // The main method where the application starts
    public static void main(String[] args) {
        // Run the Spring Boot application
        SpringApplication.run(AvionHangarApplication.class, args);
        // Print a message to the console
        System.out.println("Sky is the only limit");
    }

}
