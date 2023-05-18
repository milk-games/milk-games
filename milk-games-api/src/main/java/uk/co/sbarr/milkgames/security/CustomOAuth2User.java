package uk.co.sbarr.milkgames.security;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.core.user.OAuth2User;
import uk.co.sbarr.milkgames.entities.Player;


public class CustomOAuth2User implements OAuth2User {

    private OAuth2User oAuth2User;
    private Player player;

    public CustomOAuth2User(OAuth2User oAuth2User, Player player) {
        this.oAuth2User = oAuth2User;
        this.player = player;
    }

    @Override
    public Map<String, Object> getAttributes() {
        return oAuth2User.getAttributes();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> authorities = new ArrayList<>();

        player.getRoles()
            .forEach(role -> authorities.add(new SimpleGrantedAuthority(role.getRole())));
        return authorities;
    }

    @Override
    public String getName() {
        return oAuth2User.getName();
    }

}
