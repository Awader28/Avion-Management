package org.avion.repository;

import java.util.List;

import org.avion.model.Avion;
import org.springframework.data.repository.CrudRepository;

public interface AvionRepository extends CrudRepository<Avion, Long> {
	List<Avion> findFlightByfdestination(String fdestination);
}
