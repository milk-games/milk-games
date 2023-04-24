package uk.co.sbarr.milkgames.entities;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
// import uk.co.sbarr.milkgames.entities.relationships.SeasonPlayer;

@Entity
@Getter
@Setter
@AllArgsConstructor
@Table(name = "players")
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    // @ManyToMany(mappedBy = "players")
    // private List<Tournament> tournaments;

    @ManyToMany(mappedBy = "players")
    private Set<Season> seasons = new HashSet<>();

    public Player() {}

    public Player(String name) {
        this.name = name;
    }
}
