package uk.co.sbarr.milkgames.controllers;

import java.util.Optional;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.fasterxml.jackson.annotation.JsonView;
import uk.co.sbarr.milkgames.entities.Player;
import uk.co.sbarr.milkgames.entities.View;
import uk.co.sbarr.milkgames.repositories.PlayerRepository;

@RestController
@RequestMapping(value = "/player")
public class PlayerController {

    private PlayerRepository repository;

    public PlayerController(PlayerRepository repository) {
        this.repository = repository;
    }

    @RequestMapping(value = "/{id}")
    @JsonView(View.Player.class)
    public ResponseEntity<Player> getSeasonById(@PathVariable Long id) {
        Optional<Player> oPlayer = repository.findById(id);
        if (oPlayer.isPresent()) {
            return ResponseEntity.ok(oPlayer.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
