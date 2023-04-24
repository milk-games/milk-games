package uk.co.sbarr.milkgames.team;

import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Table(name = "teams")
public class Team {
    @Id
    @Getter
    private Long id;
}
