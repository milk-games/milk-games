package uk.co.sbarr.milkgames.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import uk.co.sbarr.milkgames.entities.Season;
import uk.co.sbarr.milkgames.entities.Tournament;

public interface TournamentRepository extends CrudRepository<Tournament, Long> {
    public Page<Tournament> findAllBySeasonId(Pageable pageable, Long seasonId);
}
