package uk.co.sbarr.milkgames.entities;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import uk.co.sbarr.milkgames.entities.relationships.SeasonPlayer;

@Entity
@Getter
@Setter
@AllArgsConstructor
@Table(name = "seasons")
public class Season {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @OneToMany(mappedBy = "season", cascade = CascadeType.ALL)
    private Set<Tournament> tournaments = new HashSet<>();

    @ManyToMany
    @JoinTable(name = "season_players", joinColumns = @JoinColumn(name = "season_id"),
            inverseJoinColumns = @JoinColumn(name = "player_id"))
    private Set<Player> players = new HashSet<>();

    public Season() {}

    public Season(String name) {
        this.name = name;
    }
}
