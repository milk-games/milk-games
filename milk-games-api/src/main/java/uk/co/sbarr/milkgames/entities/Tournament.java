package uk.co.sbarr.milkgames.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;
import lombok.Getter;
import uk.co.sbarr.milkgames.entities.relationships.pk.MatchPK;

@Entity
@Getter
@Table(name = "tournaments")
public class Tournament {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonView(View.Entity.class)
    private Long id;

    @ManyToOne
    @JsonView({View.Player.class, View.Tournament.class, View.Match.class})
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

    // @OneToMany(mappedBy = "tournament")
    // @JsonView(View.Tournament.class)
    // @MapKeyJoinColumn(name = "id")
    private Map<MatchPK, Match> matches = new HashMap<>();
    // private Set<Match> matches = new HashSet<>();

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

    public void initialiseBracket() {

        int exponent = (int) Math.ceil(Math.log(teams.size()) / Math.log(2));
        teamLimit = (int) Math.pow(2, exponent);

        // TODO: different implementation for different elimination styles
        int numRounds = (int) (Math.log(teamLimit) / Math.log(2));

        for (int round = 1; round <= numRounds; round++) {
            int numMatches = (teamLimit / 2) / round;
            for (int matchNum = 1; matchNum <= numMatches; matchNum++) {
                Match match = new Match(this, round, matchNum);
                matches.put(match.getId(), match);
            }
        }
    }

    public void randomiseBracket() {
        int numMatches = (teamLimit / 2);

        List<Team> teams = new ArrayList<>(this.teams);
        Collections.shuffle(teams);
        Iterator<Team> teamIterator = teams.iterator();

        int byes = teamLimit - teams.size();
        int matchesPerBye = numMatches / byes; 

        for (int i = 1; i <= numMatches; i++) {
            MatchPK key = new MatchPK(id, 1, i);
            Match match = matches.get(key);

            match.setTeam1(teamIterator.next());
            if (i % matchesPerBye == 0 && i < byes * matchesPerBye) {
                match.setTeam2(null);
            } else {
                match.setTeam2(teamIterator.next());
            }
        }
        
    }
}
