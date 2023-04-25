package uk.co.sbarr.milkgames.controllers;

import java.util.Optional;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.fasterxml.jackson.annotation.JsonView;
import uk.co.sbarr.milkgames.entities.Tournament;
import uk.co.sbarr.milkgames.entities.View;
import uk.co.sbarr.milkgames.repositories.TournamentRepository;

@RestController
@RequestMapping(value = "/tournament")
public class TournamentController {
    private TournamentRepository repository;

    public TournamentController(TournamentRepository repository) {
        this.repository = repository;
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
}
