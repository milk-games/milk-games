package uk.co.sbarr.milkgames.entities;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Getter
@Table(name = "tournaments")
public class Tournament {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonView(View.Entity.class)
    private Long id;

    @ManyToOne
    @JsonView({View.Player.class, View.Tournament.class})
    private Season season;

    @JsonView(View.Entity.class)
    private String name;

    @JsonView(View.Entity.class)
    private String eliminationType;

    @JsonView(View.Entity.class)
    private int teamSize;

    @JsonView(View.Entity.class)
    private int teamLimit;

    @JsonView(View.Entity.class)
    private double prizePool;

    @JsonView(View.Entity.class)
    private LocalDate startDate;

    @JsonView(View.Entity.class)
    private LocalDate endDate;

    // @ManyToOne
    // private Game game;

    @OneToMany(mappedBy = "tournament")
    @JsonView({View.Season.class, View.Tournament.class})
    private Set<Team> teams = new HashSet<>();

    public Tournament() {}

    public Tournament(String name, Season season) {
        this.name = name;
        this.season = season;
    }

    public Tournament(String name, Season season, String eliminationType, int teamLimit,
            int teamSize, double prizePool, LocalDate start, LocalDate end) {
        this.name = name;
        this.season = season;
        this.eliminationType = eliminationType;
        this.teamLimit = teamLimit;
        this.teamSize = teamSize;
        this.prizePool = prizePool;
        this.startDate = start;
        this.endDate = end;
    }

    public Team createTeam(String name) throws Exception {
        if (teams.size() < teamLimit) {
            return new Team(name, this, teamSize);
        } else {
            throw new Exception("This tournament has reached the maximum number of teams");
        }
    }

    public void addTeam(Team team) throws Exception {
        if (teams.size() < teamLimit) {
            team.setMaxSize(teamSize);
            teams.add(team);
        } else {
            throw new Exception("This tournament has reached the maximum number of teams");
        }
    }


}
