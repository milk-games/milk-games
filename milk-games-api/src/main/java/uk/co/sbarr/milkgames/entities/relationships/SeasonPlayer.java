package uk.co.sbarr.milkgames.entities.relationships;

import java.time.LocalDateTime;
import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;
import lombok.Getter;
import uk.co.sbarr.milkgames.entities.Match;
import uk.co.sbarr.milkgames.entities.Player;
import uk.co.sbarr.milkgames.entities.Season;
import uk.co.sbarr.milkgames.entities.Team;
import uk.co.sbarr.milkgames.entities.Tournament;
import uk.co.sbarr.milkgames.entities.View;
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
    @JsonView(View.Season.class)
    private Player player;

    @Column(columnDefinition = "INT DEFAULT 0")
    @JsonView(View.Entity.class)
    private int points;

    @JsonView(View.Entity.class)
    private int tournamentsPlayed;

    @JsonView(View.Entity.class)
    private int matchesPlayed;

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

    public int getTournamentsPlayed() {
        int count = 0;

        for (Team team : this.player.getTeams()) {
            if (team.getTournament().isFinished()) {
                count++;
            }
        }
        return count;
    }

    public int getMatchesPlayed() {
        int count = 0;

        for (Team team : this.player.getTeams()) {
            Tournament tournament = team.getTournament();

            for (Match match : tournament.getMatches()) {
                if (match.isFinished() && (match.getTeam1().getId() == team.getId()
                    || match.getTeam2().getId() == team.getId())) {
                    count++;
                }
            }
        }
        return count;
    }

}
