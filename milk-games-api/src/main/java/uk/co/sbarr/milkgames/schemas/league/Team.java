package uk.co.sbarr.milkgames.schemas.league;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonFilter;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Team {
    @JsonProperty(required = true)
    private List<Player> players;

    @JsonProperty(defaultValue = "0")
    private int dragons;

    @JsonProperty(defaultValue = "0")
    private int barons;
}
