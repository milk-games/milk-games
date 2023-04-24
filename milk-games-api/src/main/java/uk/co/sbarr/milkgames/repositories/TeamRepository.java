package uk.co.sbarr.milkgames.repositories;

import org.springframework.data.repository.CrudRepository;
import uk.co.sbarr.milkgames.entities.Team;

public interface TeamRepository extends CrudRepository<Team, Long> {

}
