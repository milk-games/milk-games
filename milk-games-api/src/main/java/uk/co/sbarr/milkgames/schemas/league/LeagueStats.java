package uk.co.sbarr.milkgames.schemas.league;

import lombok.Getter;
import lombok.Setter;
import uk.co.sbarr.milkgames.schemas.Stats;
import uk.co.sbarr.milkgames.schemas.validator.annotations.NotNull;
import uk.co.sbarr.milkgames.schemas.validator.annotations.NumberValidation;

@Getter
@Setter
public class LeagueStats extends Stats {
    @NotNull
    private Team blueTeam;

    @NotNull
    private Team redTeam;

    // @Override
    // public void validate() throws InvalidStatException {
    //     if (blueTeam == null || redTeam == null)
    //         throw new InvalidStatException(this, "Cannot be null", "blueTeam", "redTeam");

    //     blueTeam.validate();
    //     redTeam.validate();
    // }
}
