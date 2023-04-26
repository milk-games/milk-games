package uk.co.sbarr.milkgames.repositories;

import org.springframework.data.repository.CrudRepository;
import uk.co.sbarr.milkgames.entities.Match;
import uk.co.sbarr.milkgames.entities.relationships.pk.MatchPK;

public interface MatchRepository extends CrudRepository<Match, MatchPK> {

}
