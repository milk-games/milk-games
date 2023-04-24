package uk.co.sbarr.milkgames.entities;

import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Table(name = "tournaments")
public class Tournament {
    @Id
    @Getter
    private Long id;
}
