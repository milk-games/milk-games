package uk.co.sbarr.milkgames.controllers;

import java.util.Optional;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.fasterxml.jackson.annotation.JsonView;
import uk.co.sbarr.milkgames.entities.Player;
import uk.co.sbarr.milkgames.entities.View;
import uk.co.sbarr.milkgames.repositories.PlayerRepository;
import uk.co.sbarr.milkgames.security.CustomOAuth2User;

@RestController
@RequestMapping(value = "/api/players")
public class PlayerController {

    private PlayerRepository repository;

    public PlayerController(PlayerRepository repository) {
        this.repository = repository;
    }

    @RequestMapping(value = "/@me")
    @JsonView(View.Player.class)
    public ResponseEntity<Player> getCurrentProfile(OAuth2AuthenticationToken token) {

        if (token == null || !(token.getPrincipal() instanceof CustomOAuth2User)) {
            return ResponseEntity.notFound().build();
        }

        CustomOAuth2User user = (CustomOAuth2User) token.getPrincipal();
        Long id = Long.parseLong(user.getAttribute("id"));

        Optional<Player> oPlayer = repository.findById(id);
        if (oPlayer.isPresent()) {
            return ResponseEntity.ok(oPlayer.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @RequestMapping
    @JsonView(View.Player.class)
    public ResponseEntity<Iterable<Player>> getAll() {
        return ResponseEntity.ok(repository.findAll());
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
