package uk.co.sbarr.milkgames.config;

import java.io.IOException;

import static org.springframework.security.config.Customizer.withDefaults;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.security.web.savedrequest.DefaultSavedRequest;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.security.web.util.matcher.RequestMatcher;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;


@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Value("${WEB_URL}")
    private String webURL;

    @Value("${OAUTH2_ENABLED}")
    private boolean oauth2Enabled;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        if (!oauth2Enabled) {
            http.authorizeHttpRequests(authorize -> authorize.anyRequest().permitAll());
        } else {
            http
                .authorizeHttpRequests(authorize -> authorize
                    .requestMatchers(HttpMethod.GET, "/api/season**", "/api/season/**",
                        "/api/tournament**")
                    .permitAll()
                    .requestMatchers(HttpMethod.PATCH, "**").hasRole("ADMIN")
                    .requestMatchers(HttpMethod.POST, "**").hasRole("ADMIN")
                    .requestMatchers(HttpMethod.DELETE, "**").hasRole("ADMIN")
                    .anyRequest().authenticated())
                .oauth2Login(oauth2 -> oauth2
                    .successHandler(authSuccessHandler())
                    .failureHandler(authFailureHandler()))
                .oauth2Client(withDefaults());
        }

        RequestMatcher matcher = new AntPathRequestMatcher("/api/**");
        http.exceptionHandling().defaultAuthenticationEntryPointFor(
            new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED), matcher);

        http.addFilter(corsFilter());
        http.csrf().disable();

        return http.build();
    }

    @Bean
    public AuthenticationSuccessHandler authSuccessHandler() {
        return new AuthenticationSuccessHandler() {
            @Override
            public void onAuthenticationSuccess(HttpServletRequest request,
                HttpServletResponse response, Authentication authentication)
                throws IOException, ServletException {

                HttpSession session = request.getSession();

                DefaultSavedRequest savedRequest =
                    (DefaultSavedRequest) session.getAttribute("SPRING_SECURITY_SAVED_REQUEST");

                String redirect =
                    savedRequest.getHeaderValues("referer").get(0)
                        + savedRequest.getRequestURI().substring(1);

                response.sendRedirect(redirect);
            }
        };
    }

    @Bean
    public AuthenticationFailureHandler authFailureHandler() {
        return new AuthenticationFailureHandler() {

            @Override
            public void onAuthenticationFailure(HttpServletRequest request,
                HttpServletResponse response, AuthenticationException exception)
                throws IOException, ServletException {}
        };
    }


    public CorsFilter corsFilter() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.addAllowedOrigin(webURL);
        corsConfiguration.addAllowedHeader("*");
        corsConfiguration.addAllowedMethod("*");
        corsConfiguration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", corsConfiguration);

        return new CorsFilter(source);
    }
}
