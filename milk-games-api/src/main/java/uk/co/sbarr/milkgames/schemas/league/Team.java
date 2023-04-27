package uk.co.sbarr.milkgames.schemas.league;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import uk.co.sbarr.milkgames.schemas.Stat;

@Getter
@Setter
public class Team implements Stat {
    private List<Player> players;

    @JsonProperty(defaultValue = "0")
    private int dragons;

    @JsonProperty(defaultValue = "0")
    private int barons;

    // @Override
    // public void validate() throws InvalidStatException {
    //     if (dragons < 0 || barons < 0)
    //         throw new InvalidStatException(this, "Cannot be less than 0", "dragons", "barons");

    //     if (players.isEmpty())
    //         throw new InvalidStatException(this, "Cannot be empty", "players");

    //     Player[] players = this.players.toArray(new Player[this.players.size()]);
    //     for (Player player : players) {
    //         player.validate();
    //     }
    // }

}
