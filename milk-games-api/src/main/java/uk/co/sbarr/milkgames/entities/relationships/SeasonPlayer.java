package uk.co.sbarr.milkgames.entities.relationships;

import jakarta.persistence.*;
import lombok.Getter;
import uk.co.sbarr.milkgames.entities.Player;
import uk.co.sbarr.milkgames.entities.Season;
import uk.co.sbarr.milkgames.entities.relationships.pk.SeasonPlayerPK;

@Entity
@Getter
@Table(name = "season_players")
public class SeasonPlayer {

    @EmbeddedId
    private SeasonPlayerPK id;

    @ManyToOne
    @MapsId("seasonId")
    @JoinColumn(name = "season_id")
    private Season season;

    @ManyToOne
    @MapsId("playerId")
    @JoinColumn(name = "player_id")
    private Player player;

    @Column(columnDefinition = "INT DEFAULT 0")
    private int points;

    public SeasonPlayer() {}

    public SeasonPlayer(Season season, Player player) {
        this.id = new SeasonPlayerPK(season.getId(), player.getId());
        this.season = season;
        this.player = player;
        this.points = 0;
    }

    public SeasonPlayer(Season season, Player player, int points) {
        this.id = new SeasonPlayerPK(season.getId(), player.getId());
        this.season = season;
        this.player = player;
        this.points = points;
    }

}
