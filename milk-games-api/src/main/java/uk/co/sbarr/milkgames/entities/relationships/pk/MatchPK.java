package uk.co.sbarr.milkgames.entities.relationships.pk;

import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonView;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import uk.co.sbarr.milkgames.entities.View;

@SuppressWarnings("unused")
@AllArgsConstructor
@Embeddable
public class MatchPK implements Serializable {
    private static final long serialVersionUID = 1l;

    private long tournamentId;

    @Getter
    @JsonView(View.Entity.class)
    private long round;

    @Getter
    @JsonView(View.Entity.class)
    private long matchNum;

    public MatchPK() {}
}
