package uk.co.sbarr.milkgames.controllers;

import java.util.Optional;
import org.apache.catalina.connector.Response;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.fasterxml.jackson.annotation.JsonView;
import uk.co.sbarr.milkgames.entities.Season;
import uk.co.sbarr.milkgames.entities.Tournament;
import uk.co.sbarr.milkgames.entities.View;
import uk.co.sbarr.milkgames.repositories.SeasonRepository;
import uk.co.sbarr.milkgames.repositories.TournamentRepository;

@RestController
@RequestMapping(value = "/api/tournament")
public class TournamentController {
    private TournamentRepository repository;
    private SeasonRepository seasonRepository;

    public TournamentController(TournamentRepository repository,
        SeasonRepository seasonRepository) {

        this.repository = repository;
        this.seasonRepository = seasonRepository;
    }



    @RequestMapping(value = "/{id}")
    @JsonView(View.Tournament.class)
    public ResponseEntity<Tournament> getTournamentById(@PathVariable Long id) {
        Optional<Tournament> optionalTournament = repository.findById(id);
        if (optionalTournament.isPresent()) {
            return ResponseEntity.ok(optionalTournament.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    /* POST Methods */

    // @RequestMapping(value = "")

}
