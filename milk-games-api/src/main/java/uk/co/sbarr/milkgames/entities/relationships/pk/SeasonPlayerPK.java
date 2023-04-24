package uk.co.sbarr.milkgames.entities.relationships.pk;

import java.io.Serializable;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@Embeddable
public class SeasonPlayerPK implements Serializable {
    private static final long serialVersionUID = 1l;

    private Long seasonId;
    private Long playerId;

    public SeasonPlayerPK() {}
}
