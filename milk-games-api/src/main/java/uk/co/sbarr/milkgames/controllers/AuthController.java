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
import javax.swing.text.html.FormSubmitEvent.MethodType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.oauth2.client.CommonOAuth2Provider;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.client.OAuth2AuthorizeRequest;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientManager;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientProvider;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientProviderBuilder;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.oauth2.client.web.OAuth2AuthorizedClientRepository;
import org.springframework.security.oauth2.core.endpoint.OAuth2AccessTokenResponse;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


@RestController
@RequestMapping(value = "/auth")
public class AuthController {


    private OAuth2AuthorizedClientService authorizedClientService;
    private OAuth2AuthorizedClientRepository clientRepository;

    @Autowired
    private OAuth2AuthorizedClientManager authorizedClientManager;

    private HttpClient httpClient;
    private ObjectMapper objectMapper;

    public AuthController(OAuth2AuthorizedClientService authorizedClientService,
            OAuth2AuthorizedClientRepository clientRepository) {
        this.authorizedClientService = authorizedClientService;
        this.clientRepository = clientRepository;

        this.httpClient = HttpClient.newBuilder().version(Version.HTTP_1_1).build();
        this.objectMapper = new ObjectMapper();
    }

    @RequestMapping("/callback")
    public ResponseEntity<Void> callback(Authentication authentication,
            HttpServletResponse response, HttpServletRequest request) throws IOException {
        var token = clientRepository.loadAuthorizedClient("discord", authentication, request)
                .getAccessToken();


        return ResponseEntity.ok().build();
    }



    // @RequestMapping(method = RequestMethod.POST)
    // public ResponseEntity<? extends Object> authenticate(@RequestBody String code) {
    //     // ClientRegistration registration =
    //     //         clientRegistrationRepository.findByRegistrationId("discord");

    //     // Map<String, String> body = new HashMap<>();
    //     // body.put("grant_type", registration.getAuthorizationGrantType().getValue());
    //     // body.put("code", code);
    //     // body.put("client_id", registration.getClientId());
    //     // body.put("client_secret", registration.getClientSecret());
    //     // body.put("redirect_uri", registration.getRedirectUri());

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


