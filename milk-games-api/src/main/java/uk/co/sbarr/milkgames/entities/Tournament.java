package uk.co.sbarr.milkgames.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
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

    private int teamSize;
    private int teamLimit;

    private double prizePool;

    private LocalDate startDate;
    private LocalDate endDate;

    // @ManyToOne
    // private Game game;

    @ManyToMany
    @JoinTable(name = "tournament_players", joinColumns = @JoinColumn(name = "tournament_id"),
            inverseJoinColumns = @JoinColumn(name = "player_id"))
    private Set<Player> players = new HashSet<>();

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
}
