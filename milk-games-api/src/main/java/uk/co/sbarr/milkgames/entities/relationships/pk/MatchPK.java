package uk.co.sbarr.milkgames.entities.relationships.pk;

import java.io.Serializable;
import java.util.UUID;
import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.Embeddable;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import uk.co.sbarr.milkgames.entities.View;

@AllArgsConstructor
@Embeddable
public class MatchPK implements Serializable {
    private static final long serialVersionUID = 1l;

    @JsonView(View.Entity.class)
    private long tournamentId;

    @JsonView(View.Entity.class)
    private long round;

    @JsonView(View.Entity.class)
    private long matchNum;

    public MatchPK() {}
}
