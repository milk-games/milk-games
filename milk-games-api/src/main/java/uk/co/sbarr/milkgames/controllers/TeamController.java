package uk.co.sbarr.milkgames.controllers;

import java.util.Optional;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.fasterxml.jackson.annotation.JsonView;
import uk.co.sbarr.milkgames.entities.Team;
import uk.co.sbarr.milkgames.entities.View;
import uk.co.sbarr.milkgames.repositories.TeamRepository;

@RestController
@RequestMapping(value = "/team")
public class TeamController {
    private TeamRepository repository;

    public TeamController(TeamRepository repository) {
        this.repository = repository;
    }

    @RequestMapping(value = "/{id}")
    @JsonView(View.Team.class)
    public ResponseEntity<Team> getTeamById(@PathVariable Long id) {
        Optional<Team> optionalTeam = repository.findById(id);
        if (optionalTeam.isPresent()) {
            return ResponseEntity.ok(optionalTeam.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
