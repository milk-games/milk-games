package uk.co.sbarr.milkgames.config;

import java.util.Arrays;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class ApiConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedOriginPatterns("*").allowedMethods("*")
                        .allowedHeaders("*").allowedOrigins("*");
            }
        };
    }

    //     @Bean
    //     public CorsFilter corsFilter() {
    //         CorsConfiguration config = new CorsConfiguration();
    //         config.setAllowedOrigins(Arrays.asList("*"));
    //         config.setAllowedMethods(Arrays.asList("*"));
    //         config.setAllowedHeaders(Arrays.asList("*"));

    //         UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    //         source.registerCorsConfiguration("/**", config);

    //         return new CorsFilter(source);
    //     }
}


