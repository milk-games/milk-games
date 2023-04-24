package uk.co.sbarr.milkgames.tournament;

import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Table(name = "tournaments")
public class Tournament {
    @Id
    @Getter
    private Long id;
}
