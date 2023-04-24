package uk.co.sbarr.milkgames.season;

import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Table(name = "seasons")
public class Season {
    @Id
    @Getter
    private Long id;
}
