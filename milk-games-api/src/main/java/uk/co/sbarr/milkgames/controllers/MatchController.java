package uk.co.sbarr.milkgames.controllers;


import java.util.Optional;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.fasterxml.jackson.annotation.JsonView;
import uk.co.sbarr.milkgames.entities.Match;
import uk.co.sbarr.milkgames.entities.View;
import uk.co.sbarr.milkgames.entities.relationships.pk.MatchPK;
import uk.co.sbarr.milkgames.repositories.MatchRepository;

@RestController
@RequestMapping("/tournament/{tournamentId}/matches")
public class MatchController {
    private MatchRepository matchRepository;

    public MatchController(MatchRepository repository) {
        this.matchRepository = repository;
    }

    @RequestMapping(value = "/{round}/{matchNum}")
    @JsonView(View.Match.class)
    public ResponseEntity<Match> getTournamentById(@PathVariable long tournamentId,
            @PathVariable long round, @PathVariable long matchNum) {
        System.out.println("Binging");
        Optional<Match> match =
                matchRepository.findById(new MatchPK(tournamentId, round, matchNum));
        if (match.isPresent()) {
            return ResponseEntity.ok(match.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
