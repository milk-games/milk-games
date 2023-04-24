package uk.co.sbarr.milkgames.repositories;

import org.springframework.data.repository.CrudRepository;
import uk.co.sbarr.milkgames.entities.relationships.SeasonPlayer;
import uk.co.sbarr.milkgames.entities.relationships.pk.SeasonPlayerPK;

public interface SeasonPlayerRepository extends CrudRepository<SeasonPlayer, SeasonPlayerPK> {

}
