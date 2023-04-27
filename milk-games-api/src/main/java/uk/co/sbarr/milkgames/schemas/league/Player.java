package uk.co.sbarr.milkgames.schemas.league;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Player {

    @JsonProperty(defaultValue = "0")
    private int kills;

    @JsonProperty(defaultValue = "0")
    private int deaths;

    @JsonProperty(defaultValue = "0")
    private int assists;

}
