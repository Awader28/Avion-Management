package org.avion.controller;

import java.util.List;
import java.util.Optional;

import org.avion.model.Avion;
import org.avion.repository.AvionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/upi")
public class AvionController {
	
	@Autowired
	AvionRepository aRep;
	
	@PostMapping("/avion")
	public String createNewFlight(@RequestBody Avion av) {
		aRep.save(av);
		return "Flight Job Created";
	}
	@GetMapping("/avion/all")
	public ResponseEntity<Iterable<Avion>> getAllFlights() {
	    Iterable<Avion> allFlights = aRep.findAll();
	    
	    if (allFlights.iterator().hasNext()) {
	        return new ResponseEntity<>(allFlights, HttpStatus.OK);
	    } else {
	        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	}
	
	@GetMapping("/avion/destination")
	public ResponseEntity<List<Avion>> getFlightsByDestination(@RequestParam("fdestination")String fdestination){
		List<Avion> avions=aRep.findFlightByfdestination(fdestination);
		
		if(avions.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		else {
			return new ResponseEntity<>(avions,HttpStatus.OK);
		}
	}
	@PutMapping("/avion/{fid}")
	public ResponseEntity<String> updateFlight(@PathVariable Long fid, @RequestBody Avion updatedAvion) {
	    Optional<Avion> existingAvionOptional = aRep.findById(fid);

	    if (existingAvionOptional.isPresent()) {
	        Avion existingAvion = existingAvionOptional.get();
	        // Update the properties of the existing flight with the values from updatedAvion
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
	@DeleteMapping("/avion/{fid}")
	public ResponseEntity<String> deleteFlight(@PathVariable Long fid) {
	    Optional<Avion> existingAvionOptional = aRep.findById(fid);

	    if (existingAvionOptional.isPresent()) {
	        aRep.deleteById(fid);
	        return new ResponseEntity<>("Flight deleted successfully", HttpStatus.OK);
	    } else {
	        return new ResponseEntity<>("Flight not found", HttpStatus.NOT_FOUND);
	    }
	}

}
