package uk.co.sbarr.milkgames.config;

import java.io.IOException;
import java.util.Enumeration;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.oauth2.client.OAuth2ClientProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.savedrequest.DefaultSavedRequest;
import org.springframework.security.web.savedrequest.HttpSessionRequestCache;
import org.springframework.security.web.savedrequest.SavedRequest;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import uk.co.sbarr.milkgames.entities.Player;
import uk.co.sbarr.milkgames.repositories.PlayerRepository;
import uk.co.sbarr.milkgames.security.CustomOAuth2UserService;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private PlayerRepository playerRepository;

    private final CustomOAuth2UserService userService;

    public SecurityConfig(PlayerRepository playerRepository, CustomOAuth2UserService userService) {
        this.playerRepository = playerRepository;
        this.userService = userService;
    }


    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests()
            .requestMatchers(HttpMethod.PATCH, "**").hasRole("ADMIN")
            .requestMatchers(HttpMethod.POST, "**").hasRole("ADMIN")
            .requestMatchers(HttpMethod.DELETE, "**").hasRole("ADMIN")
            .anyRequest().authenticated()
            .and()
            .oauth2Login(oauth2 -> oauth2
                .successHandler(authSuccessHandler(playerRepository))
                .failureHandler(authFailureHandler()))
            .oauth2Client().and().httpBasic();

        http.addFilter(corsFilter());
        http.csrf().disable();

        return http.build();
    }

    @Bean
    public AuthenticationSuccessHandler authSuccessHandler(PlayerRepository repository) {
        return new AuthenticationSuccessHandler() {
            @Override
            public void onAuthenticationSuccess(HttpServletRequest request,
                HttpServletResponse response, Authentication authentication)
                throws IOException, ServletException {

                HttpSession session = request.getSession();

                DefaultSavedRequest savedRequest =
                    (DefaultSavedRequest) session.getAttribute("SPRING_SECURITY_SAVED_REQUEST");

                response.sendRedirect(savedRequest.getRequestURL());
            }
        };
    }

    @Bean
    public AuthenticationFailureHandler authFailureHandler() {
        return new AuthenticationFailureHandler() {

            @Override
            public void onAuthenticationFailure(HttpServletRequest request,
                HttpServletResponse response, AuthenticationException exception)
                throws IOException, ServletException {

                response.sendRedirect("http://localhost:3000/auth?success=false");
            }
        };
    }


    public CorsFilter corsFilter() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.addAllowedOrigin("http://localhost:3000"); // Replace with the appropriate origin of your React frontend
        corsConfiguration.addAllowedHeader("*");
        corsConfiguration.addAllowedMethod("*");
        corsConfiguration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", corsConfiguration);

        return new CorsFilter(source);
    }
}
