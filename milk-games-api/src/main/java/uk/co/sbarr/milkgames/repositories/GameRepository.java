package uk.co.sbarr.milkgames.repositories;

import org.springframework.data.repository.CrudRepository;
import uk.co.sbarr.milkgames.entities.Game;

public interface GameRepository extends CrudRepository<Game, Long> {

}
