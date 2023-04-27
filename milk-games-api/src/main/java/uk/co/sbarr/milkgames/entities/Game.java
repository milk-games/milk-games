package uk.co.sbarr.milkgames.entities;

import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "games")
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonView(View.Entity.class)
    private Long id;

    @JsonView(View.Entity.class)
    private String name;

    private String statsSchema;

    public Game(String name, String statsSchema) {
        this.name = name;
        this.statsSchema = statsSchema;
    }

    public Game() {}
}
