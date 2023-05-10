package uk.co.sbarr.milkgames.entities;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import com.fasterxml.jackson.annotation.JsonView;
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
    @JsonView(View.Entity.class)
    private Long id;

    @Column(nullable = false)
    @JsonView(View.Entity.class)
    private String name;

    @JsonView(View.Entity.class)
    private LocalDate startDate;

    @JsonView(View.Entity.class)
    private LocalDate endDate;

    @OneToMany(mappedBy = "season", cascade = CascadeType.ALL)
    @OrderBy("startDate ASC")
    @JsonView(View.Season.class)
    private Set<Tournament> tournaments = new HashSet<>();

    @OneToMany(mappedBy = "season")
    @JsonView(View.Season.class)
    @OrderBy("points DESC")
    private Set<SeasonPlayer> seasonPlayers = new HashSet<>();

    public Season() {}

    public Season(String name, LocalDate start, LocalDate end) {
        this.name = name;
        this.startDate = start;
        this.endDate = end;
    }
}
