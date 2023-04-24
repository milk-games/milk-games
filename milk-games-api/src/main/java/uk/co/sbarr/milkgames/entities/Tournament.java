package uk.co.sbarr.milkgames.entities;

import java.time.LocalDate;
import java.util.List;
import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Getter
@Table(name = "tournaments")
public class Tournament {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Season season;

    private String name;
    private String eliminationType;

    private int playerLimit;
    private int teamSize;

    private double prizePool;

    private LocalDate startDate;
    private LocalDate endDate;

    // @ManyToOne
    // private Game game;

    @ManyToMany
    @JoinTable(name = "tournament_player", joinColumns = @JoinColumn(name = "tournament_id"),
            inverseJoinColumns = @JoinColumn(name = "player_id"))
    private List<Player> players;

    public Tournament() {}

    public Tournament(String name, Season season) {
        this.name = name;
        this.season = season;
    }

    public Tournament(String name, Season season, String eliminationType, int playerLimit,
            int teamSize, double prizePool, LocalDate start, LocalDate end) {
        this.name = name;
        this.season = season;
        this.eliminationType = eliminationType;
        this.playerLimit = playerLimit;
        this.teamSize = teamSize;
        this.prizePool = prizePool;
        this.startDate = start;
        this.endDate = end;
    }
}
