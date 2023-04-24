package uk.co.sbarr.milkgames.repositories;

import org.springframework.data.repository.CrudRepository;
import uk.co.sbarr.milkgames.entities.Tournament;

public interface TournamentRepository extends CrudRepository<Tournament, Long> {

}
