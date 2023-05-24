package uk.co.sbarr.milkgames.controllers;

import com.fasterxml.jackson.annotation.JsonView;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import uk.co.sbarr.milkgames.entities.Season;
import uk.co.sbarr.milkgames.entities.Tournament;
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

  @RequestMapping(value = "/{id}/tournaments")
  @JsonView(View.Tournament.class)
  public ResponseEntity<Set<Tournament>> getTournaments(@PathVariable long id) {
    Season season = getSeason(id);

    if (season == null) {
      return ResponseEntity.notFound().build();
    }

    return ResponseEntity.ok(season.getTournaments());
  }

  private Season getSeason(long id) {
    Optional<Season> optionalSeason = repository.findById(id);
    if (optionalSeason.isPresent()) {
      return optionalSeason.get();
    } else {
      return null;
    }
  }

  @RequestMapping(value = "/all")
  @JsonView(View.Season.class)
  public ResponseEntity<Iterable<Season>> getAllSeasons() {
    Iterable<Season> seasonsList = repository.findAll();
    return ResponseEntity.ok(seasonsList);
  }

  @PostMapping()
  public ResponseEntity<Object> postSeason(@RequestBody SeasonModel seasonModel) {
    Season savedSeason = repository.save(new Season(seasonModel.getName(), seasonModel.getStart(), seasonModel.getEnd()));
    return new ResponseEntity<Object>(savedSeason, HttpStatus.OK);

  }
}