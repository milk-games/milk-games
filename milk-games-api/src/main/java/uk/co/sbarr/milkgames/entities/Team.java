package uk.co.sbarr.milkgames.entities;

import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Getter
@Table(name = "teams")
public class Team {
    @Id
    private Long id;

}
