package uk.co.sbarr.milkgames.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@Table(name = "seasons")
public class Season {
    @Id
    @Getter
    private Long id;

    private String name;
}
