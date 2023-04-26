package uk.co.sbarr.milkgames.entities;

import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.Table;
import uk.co.sbarr.milkgames.entities.relationships.pk.MatchPK;

@Entity
@Table(name = "matches")
public class Match {

    @EmbeddedId
    @JsonView(View.Entity.class)
    private MatchPK id;

    @ManyToOne
    @MapsId("tournamentId")
    @JsonView(View.Match.class)
    private Tournament tournament;

    @ManyToOne
    @JsonView(View.Match.class)
    private Team team_1;

    @ManyToOne
    @JsonView(View.Match.class)
    private Team team_2;

    public Match() {}

    public Match(Tournament tournament, int round, int matchNum) {
        this.id = new MatchPK(tournament.getId(), round, matchNum);
        this.tournament = tournament;
    }

    public void setTeam1(Team team) {
        this.team_1 = team;
    }

    public void setTeam2(Team team) {
        this.team_2 = team;
    }
}
