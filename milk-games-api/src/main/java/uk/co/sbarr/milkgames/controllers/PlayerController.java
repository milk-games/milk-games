package uk.co.sbarr.milkgames.controllers;

import java.security.Principal;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.fasterxml.jackson.annotation.JsonView;
import uk.co.sbarr.milkgames.entities.Player;
import uk.co.sbarr.milkgames.entities.View;
import uk.co.sbarr.milkgames.repositories.PlayerRepository;
import uk.co.sbarr.milkgames.security.CustomOAuth2User;
import uk.co.sbarr.milkgames.security.CustomOAuth2UserService;

@RestController
@RequestMapping(value = "/player")
public class PlayerController {

    private PlayerRepository repository;

    public PlayerController(PlayerRepository repository) {
        this.repository = repository;
    }

    @RequestMapping(value = "/@me")
    @JsonView(View.Player.class)
    public ResponseEntity<Player> getCurrentProfile(OAuth2AuthenticationToken token) {

        if (!(token.getPrincipal() instanceof CustomOAuth2User)) {
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
