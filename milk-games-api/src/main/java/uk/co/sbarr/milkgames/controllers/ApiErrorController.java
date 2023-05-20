package uk.co.sbarr.milkgames.controllers;

import java.io.IOException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping(value = "/")
public class ApiErrorController implements ErrorController {

    @Value("${WEB_URL}")
    private String webURL;

    @RequestMapping(value = "/error")
    public void handleError(HttpServletRequest request, HttpServletResponse response)
        throws IOException {
        String path = (String) request.getAttribute(RequestDispatcher.ERROR_REQUEST_URI);

        response.sendRedirect(webURL + path);
    }
}
