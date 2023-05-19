package uk.co.sbarr.milkgames.controllers;

import java.time.LocalDate;
import java.util.Optional;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.fasterxml.jackson.annotation.JsonView;
import uk.co.sbarr.milkgames.entities.Season;
import uk.co.sbarr.milkgames.entities.View;
import uk.co.sbarr.milkgames.repositories.SeasonRepository;

@RestController
@RequestMapping(value = "/api/season")
public class SeasonController {

    private SeasonRepository repository;

    public SeasonController(SeasonRepository repository) {
        this.repository = repository;
    }

    @RequestMapping
    @JsonView(View.Season.class)
    public ResponseEntity<Season> getCurrentSeason() {
        Optional<Season> optional = repository.findCurrentSeason(LocalDate.now());
        if (optional.isPresent()) {
            return ResponseEntity.ok(optional.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @RequestMapping(value = "/{id}")
    @JsonView(View.Season.class)
    public ResponseEntity<Season> getSeasonById(@PathVariable Long id) {
        Optional<Season> optionalSeason = repository.findById(id);
        if (optionalSeason.isPresent()) {
            return ResponseEntity.ok(optionalSeason.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
