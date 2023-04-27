package uk.co.sbarr.milkgames.entities;

import java.util.HashSet;
import java.util.Set;
import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "teams")
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonView(View.Entity.class)
    private Long id;

    @ManyToOne
    @JsonView({View.Player.class})
    private Tournament tournament;

    @Column(nullable = false)
    @JsonView(View.Entity.class)
    private String name;

    @JsonView(View.Entity.class)
    private int maxSize;

    @ManyToMany
    @JoinTable(name = "team_players", joinColumns = @JoinColumn(name = "team_id"),
            inverseJoinColumns = @JoinColumn(name = "player_id"))
    @JsonView({View.Season.class, View.Tournament.class, View.Match.class})
    private Set<Player> players = new HashSet<>();

    public Team() {}

    public Team(String name, Tournament tournament) {
        this.name = name;
        this.tournament = tournament;
        this.maxSize = 1;
    }

    public Team(String name, Tournament tournament, int maxSize) {
        this.name = name;
        this.tournament = tournament;
        this.maxSize = maxSize;
    }


    public void addPlayer(Player player) throws Exception {
        if (players.size() < maxSize) {
            players.add(player);
        } else {
            throw new Exception("This team has reached it's limit");
        }
    }

    public void removePlayer(Player player) throws Exception {
        if (players.contains(player)) {
            players.remove(player);
        } else {
            throw new Exception("The player is not part of this team and cannot be removed");
        }
    }
}
