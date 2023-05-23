package uk.co.sbarr.milkgames.controllers;

import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.fasterxml.jackson.annotation.JsonView;
import uk.co.sbarr.milkgames.entities.Season;
import uk.co.sbarr.milkgames.entities.View;
import uk.co.sbarr.milkgames.repositories.SeasonRepository;

@RestController
@RequestMapping(value = "/api/seasons")
public class SeasonsController {

    private SeasonRepository repository;

    public SeasonsController(SeasonRepository repository) {
        this.repository = repository;
    }

    @RequestMapping
    @JsonView(View.Season.class)
    public ResponseEntity<Iterable<Season>> getAllSeasons() {
        Iterable<Season> seasonsList = repository.findAll();
        return ResponseEntity.ok(seasonsList);

    }


}
