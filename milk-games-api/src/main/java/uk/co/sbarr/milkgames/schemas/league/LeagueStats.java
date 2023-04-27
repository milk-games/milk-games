package uk.co.sbarr.milkgames.schemas.league;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import uk.co.sbarr.milkgames.schemas.Stats;

@Getter
@Setter
public class LeagueStats extends Stats {
    @JsonProperty(required = true)
    private Team blueTeam;

    @JsonProperty(required = true)
    private Team redTeam;
}
