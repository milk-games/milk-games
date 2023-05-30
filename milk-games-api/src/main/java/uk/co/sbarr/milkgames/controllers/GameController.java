package uk.co.sbarr.milkgames.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import uk.co.sbarr.milkgames.entities.Game;
import uk.co.sbarr.milkgames.repositories.GameRepository;

@RestController
@RequestMapping(value = "/api/games")
public class GameController {

    private GameRepository repository;

    public GameController(GameRepository repository) {
        this.repository = repository;
    }

    @RequestMapping(value = "/")
    public ResponseEntity<Iterable<Game>> getAll() {
        return ResponseEntity.ok(repository.findAll());
    }

    @RequestMapping(value = "/:id")
    public ResponseEntity<Iterable<Game>> get(@PathVariable long id) {
        return ResponseEntity.ok(repository.findAll());
    }
}
