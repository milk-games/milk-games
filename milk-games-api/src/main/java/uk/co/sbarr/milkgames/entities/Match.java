package uk.co.sbarr.milkgames.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.Table;
import lombok.Getter;
import uk.co.sbarr.milkgames.entities.relationships.pk.MatchPK;

@Entity
@Getter
@Table(name = "matches")
public class Match {

    @EmbeddedId
    @JsonProperty("details")
    @JsonView(View.Entity.class)
    private MatchPK id;

    @ManyToOne
    @JsonView(View.Match.class)
    @MapsId("tournamentId")
    private Tournament tournament;

    @ManyToOne
    @JsonView({View.Tournament.class, View.Match.class})
    private Team team1;

    @ManyToOne
    @JsonView({View.Tournament.class, View.Match.class})
    private Team team2;

    @JsonView(View.Entity.class)
    private long team1Points;

    @JsonView(View.Entity.class)
    private long team2Points;

    @JsonView({View.Tournament.class, View.Match.class})
    private long winningTeam;

    @JsonView(View.Entity.class)
    private boolean finished;

    @Column(columnDefinition = "json")
    @JsonView(View.Match.class)
    private String stats;

    public Match() {}

    public Match(Tournament tournament, int round, int matchNum) {
        this.id = new MatchPK(tournament.getId(), round, matchNum);
        this.tournament = tournament;
        this.finished = false;
    }

    public void setTeam1(Team team) {
        this.team1 = team;
    }

    public void setTeam2(Team team) {
        this.team2 = team;
    }

    public void setStats(String stats) {
        this.stats = stats;
    }
}
