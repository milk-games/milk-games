package uk.co.sbarr.milkgames.repositories;

import java.util.List;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import uk.co.sbarr.milkgames.entities.Match;
import uk.co.sbarr.milkgames.entities.relationships.pk.MatchPK;

public interface MatchRepository extends CrudRepository<Match, MatchPK> {
    public List<Match> findAllByTournamentId(Long tournamentId);

    public List<Match> findAllByTournamentIdAndId_Round(long tournamentId, long round);

    public Optional<Match> findByTournamentIdAndId_RoundAndId_MatchNum(long tournamentId,
            long round, long matchNum);
}
