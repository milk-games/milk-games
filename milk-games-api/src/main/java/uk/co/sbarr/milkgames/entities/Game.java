package uk.co.sbarr.milkgames.entities;

import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Table(name = "games")
public class Game {
    @Id
    @Getter
    private Long id;
}
