package uk.co.sbarr.milkgames.entities.relationships.pk;

import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonView;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import uk.co.sbarr.milkgames.entities.View;

@AllArgsConstructor
@Embeddable
public class MatchPK implements Serializable {
    private static final long serialVersionUID = 1l;

    private long tournamentId;

    @JsonView(View.Match.class)
    private long round;

    @JsonView(View.Match.class)
    private long matchNum;

    public MatchPK() {}
}
