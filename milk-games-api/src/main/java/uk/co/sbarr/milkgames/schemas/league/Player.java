package uk.co.sbarr.milkgames.schemas.league;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import uk.co.sbarr.milkgames.schemas.InvalidStatException;
import uk.co.sbarr.milkgames.schemas.Stat;

@Getter
@Setter
public class Player implements Stat {
    private String champion;

    @JsonProperty(defaultValue = "0")
    private int kills;

    @JsonProperty(defaultValue = "0")
    private int deaths;

    @JsonProperty(defaultValue = "0")
    private int assists;

    // @Override
    // public void validate() throws InvalidStatException {
    //     if (kills < 0 || deaths < 0 || assists < 0)
    //         throw new InvalidStatException(this, "Cannot be less than 0", "kills", "deaths",
    //                 "assists");

    //     if (champion == null || champion.isEmpty())
    //         throw new InvalidStatException(this, "Cannot be null", "champion");
    // }

}
