package uk.co.sbarr.milkgames.security;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import uk.co.sbarr.milkgames.entities.Player;
import uk.co.sbarr.milkgames.repositories.PlayerRepository;

@Service
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    @Autowired
    private PlayerRepository repository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User user = super.loadUser(userRequest);
        Long id = Long.parseLong(user.getAttribute("id"));
        Optional<Player> oPlayer = repository.findById(id);

        Player player;
        if (oPlayer.isPresent()) {
            player = oPlayer.get();
        } else {
            player = new Player(id, user.getName());
            repository.save(player);
        }

        return new CustomOAuth2User(user, player);
    }
}
