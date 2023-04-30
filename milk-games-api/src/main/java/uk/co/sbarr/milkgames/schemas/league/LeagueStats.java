package uk.co.sbarr.milkgames.schemas.league;

import lombok.Getter;
import lombok.Setter;
import uk.co.sbarr.milkgames.schemas.Stats;
import uk.co.sbarr.milkgames.schemas.validator.annotations.NotNull;

@Getter
@Setter
public class LeagueStats extends Stats {
    @NotNull
    private Team blueTeam;

    @NotNull
    private Team redTeam;

}
