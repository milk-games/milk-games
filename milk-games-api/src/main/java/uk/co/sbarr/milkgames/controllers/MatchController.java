package uk.co.sbarr.milkgames.controllers;


import java.net.URL;
import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.jsonschema.JsonSerializableSchema;
import uk.co.sbarr.milkgames.entities.Match;
import uk.co.sbarr.milkgames.entities.View;
import uk.co.sbarr.milkgames.entities.relationships.pk.MatchPK;
import uk.co.sbarr.milkgames.repositories.MatchRepository;
import uk.co.sbarr.milkgames.schemas.InvalidStatException;
import uk.co.sbarr.milkgames.schemas.Stats;

@RestController
@RequestMapping("/tournament/{tournamentId}/matches")
public class MatchController {
    private ObjectMapper objectMapper;

    private MatchRepository matchRepository;

    public MatchController(MatchRepository repository) {
        this.matchRepository = repository;
        this.objectMapper = new ObjectMapper();
    }

    @RequestMapping
    @JsonView(View.Match.class)
    public ResponseEntity<List<Match>> getTournamntMatches(@PathVariable long tournamentId) {
        List<Match> matches = matchRepository.findAllByTournamentId(tournamentId);
        return ResponseEntity.ok(matches);
    }

    @RequestMapping(params = {"round"})
    @JsonView(View.Match.class)
    public ResponseEntity<List<Match>> getTournamentRoudnMatches(@PathVariable long tournamentId,
            long round) {
        List<Match> matches = matchRepository.findAllByTournamentIdAndId_Round(tournamentId, round);
        return ResponseEntity.ok(matches);
    }

    @RequestMapping(params = {"round", "match"})
    @JsonView(View.Match.class)
    public ResponseEntity<Match> getTournamentRoundMatch(@PathVariable long tournamentId,
            long round, long match) {
        Optional<Match> optionalMatch =
                matchRepository.findById(new MatchPK(tournamentId, round, match));
        if (optionalMatch.isPresent()) {
            return ResponseEntity.ok(optionalMatch.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @RequestMapping(value = "/stats", method = RequestMethod.POST, params = {"round", "match"})
    public ResponseEntity<String> setMatchStats(@PathVariable long tournamentId, long round,
            long match, @RequestBody Stats stats) throws JsonProcessingException {
        try {
            stats.validate();
        } catch (InvalidStatException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }

        Optional<Match> optionalMatch = matchRepository
                .findByTournamentIdAndId_RoundAndId_MatchNum(tournamentId, round, match);
        if (optionalMatch.isPresent()) {
            String json = objectMapper.writeValueAsString(stats);
            System.out.println(json);

            Match m = optionalMatch.get();
            m.setStats(json);

            matchRepository.save(m);

            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
