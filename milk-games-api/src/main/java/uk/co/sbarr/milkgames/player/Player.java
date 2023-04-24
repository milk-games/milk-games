package uk.co.sbarr.milkgames.player;

import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Table(name = "players")
public class Player {
    @Id
    @Getter
    private Long id;
}
