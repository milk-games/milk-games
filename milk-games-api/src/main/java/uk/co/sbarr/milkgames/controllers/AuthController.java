package uk.co.sbarr.milkgames.controllers;

import java.io.IOException;
import java.net.URI;
import java.net.URLEncoder;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.http.HttpClient.Version;
import java.net.http.HttpRequest.BodyPublishers;
import java.net.http.HttpResponse.BodyHandlers;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.security.oauth2.client.endpoint.DefaultAuthorizationCodeTokenResponseClient;
import org.springframework.security.oauth2.client.endpoint.OAuth2AuthorizationCodeGrantRequest;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.oauth2.client.web.OAuth2AuthorizedClientRepository;
import org.springframework.security.oauth2.core.OAuth2AccessToken;
import org.springframework.security.oauth2.core.endpoint.OAuth2AccessTokenResponse;
import org.springframework.security.oauth2.core.http.converter.OAuth2AccessTokenResponseHttpMessageConverter;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletResponse;


@RestController
@RequestMapping(value = "/auth")
public class AuthController {


    @Autowired
    private OAuth2AuthorizedClientService authorizedClientService;

    @Autowired
    private ClientRegistrationRepository clientRegistrationRepository;


    private HttpClient httpClient;
    private ObjectMapper objectMapper;

    public AuthController() {
        this.httpClient = HttpClient.newBuilder().version(Version.HTTP_1_1).build();
        this.objectMapper = new ObjectMapper();
    }

    @RequestMapping("/{provider}/callback")
    public ResponseEntity<String> callback(@PathVariable String provider,
            @RequestParam("code") String code, HttpServletResponse response) throws IOException {
        ClientRegistration registration =
                clientRegistrationRepository.findByRegistrationId("discord");

        Map<String, String> body = new HashMap<>();
        body.put("grant_type", registration.getAuthorizationGrantType().getValue());
        body.put("code", code);
        body.put("client_id", registration.getClientId());
        body.put("client_secret", registration.getClientSecret());
        body.put("redirect_uri", registration.getRedirectUri());



        HttpRequest request = buildRequest(registration.getProviderDetails().getTokenUri(), body);

        HttpResponse<String> httpResponse = sendRequest(request);

        if (httpResponse == null) {
            return ResponseEntity.internalServerError().build();
        }

        if (httpResponse.statusCode() != 200) {
            return ResponseEntity.status(httpResponse.statusCode()).body(httpResponse.body());
        }

        try {
            OAuth2AccessTokenResponse tokenResponse =
                    objectMapper.readValue(httpResponse.body(), OAuth2AccessTokenResponse.class);

            /**
             * "{
             * "access_token": "g5N42ON4WBNiZ7fROMjmEVxhdlHNCd", 
             * "expires_in": 604800, 
             * "refresh_token": "6O2i5NjYsLnOGtjRJOxgrAueUzaM3w", 
             * "scope": "identify", 
             * "token_type": "Bearer"
             * }"
             */

            String accessToken = tokenResponse.getAccessToken().getTokenValue();
            return ResponseEntity.ok(accessToken);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }



    // @RequestMapping(method = RequestMethod.POST)
    // public ResponseEntity<? extends Object> authenticate(@RequestBody String code) {
    //     // ClientRegistration registration =
    //     //         clientRegistrationRepository.findByRegistrationId("discord");

    // Map<String, String> body = new HashMap<>();
    // body.put("grant_type", registration.getAuthorizationGrantType().getValue());
    // body.put("code", code);
    // body.put("client_id", registration.getClientId());
    // body.put("client_secret", registration.getClientSecret());
    // body.put("redirect_uri", registration.getRedirectUri());

    //     // HttpRequest request = buildRequest(registration.getProviderDetails().getTokenUri(), body);

    //     // HttpResponse<String> response = sendRequest(request);


    //     // if (response == null) {
    //     //     return ResponseEntity.internalServerError().build();
    //     // }

    //     // if (response.statusCode() != 200) {
    //     //     return ResponseEntity.status(response.statusCode()).body(response.body());
    //     // }

    //     // try {
    //     //     OAuth2AccessTokenResponse tokenResponse =
    //     //             objectMapper.readValue(response.body(), OAuth2AccessTokenResponse.class);

    //     //     String accessToken = tokenResponse.getAccessToken().getTokenValue();
    //     //     return ResponseEntity.ok(accessToken);
    //     // } catch (Exception e) {
    //     //     return ResponseEntity.internalServerError().build();
    //     // }
    // }


    /* Helpers */
    private HttpRequest buildRequest(String url, Map<String, String> body) {
        HttpRequest.Builder httpRequestBuilder = HttpRequest.newBuilder();
        httpRequestBuilder.header("Content-Type", "application/x-www-form-urlencoded");
        httpRequestBuilder.header("X-Requested-With", "XMLHttpRequest");

        String form = body.entrySet().stream()
                .map(entry -> entry.getKey() + "="
                        + URLEncoder.encode(entry.getValue(), StandardCharsets.UTF_8))
                .collect(Collectors.joining("&"));

        return httpRequestBuilder.uri(URI.create(url)).POST(BodyPublishers.ofString(form)).build();
    }

    private HttpResponse<String> sendRequest(HttpRequest request) {
        try {
            return httpClient.send(request, BodyHandlers.ofString());
        } catch (Exception err) {
            System.err.println(err.getMessage());
            return null;
        }
    }
}


