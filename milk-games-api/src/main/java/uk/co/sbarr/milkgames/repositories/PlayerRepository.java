package uk.co.sbarr.milkgames.repositories;

import org.springframework.data.repository.CrudRepository;
import uk.co.sbarr.milkgames.entities.Player;

public interface PlayerRepository extends CrudRepository<Player, Long> {

}
