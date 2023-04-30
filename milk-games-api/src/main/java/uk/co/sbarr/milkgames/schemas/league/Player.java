package uk.co.sbarr.milkgames.schemas.league;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import uk.co.sbarr.milkgames.schemas.validator.annotations.NotNull;
import uk.co.sbarr.milkgames.schemas.validator.annotations.NumberValidation;
import uk.co.sbarr.milkgames.schemas.validator.annotations.Validate;

@Getter
@Setter
@Validate
public class Player {
    @NotNull
    private String champion;

    @JsonProperty(defaultValue = "0")
    @NumberValidation(min = 0)
    private int kills;

    @JsonProperty(defaultValue = "0")
    @NumberValidation(min = 0)
    private int deaths;

    @JsonProperty(defaultValue = "0")
    @NumberValidation(min = 0)
    private int assists;
}
