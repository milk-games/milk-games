package uk.co.sbarr.milkgames.schemas.league;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import uk.co.sbarr.milkgames.schemas.validator.annotations.ArrayValidation;
import uk.co.sbarr.milkgames.schemas.validator.annotations.NotNull;
import uk.co.sbarr.milkgames.schemas.validator.annotations.NumberValidation;
import uk.co.sbarr.milkgames.schemas.validator.annotations.Validate;

@Getter
@Setter
@Validate
public class Team {
    @NotNull
    @ArrayValidation(minLength = 1)
    private List<Player> players;

    @JsonProperty(defaultValue = "0")
    @NumberValidation(min = 0)
    private int dragons;

    @JsonProperty(defaultValue = "0")
    @NumberValidation(min = 0)
    private int barons;

}
