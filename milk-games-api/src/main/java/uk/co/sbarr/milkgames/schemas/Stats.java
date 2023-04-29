package uk.co.sbarr.milkgames.schemas;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonSubTypes.Type;
import uk.co.sbarr.milkgames.schemas.league.LeagueStats;
import uk.co.sbarr.milkgames.schemas.validator.SchemaValidator;

@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "type")
@JsonSubTypes({@Type(value = LeagueStats.class, name = "LeagueOfLegends")})
public abstract class Stats {

    public void validate() {
        try {
            new SchemaValidator(this).validate();
        } catch (IllegalArgumentException | IllegalAccessException e) {
            e.printStackTrace();
        }
    }
}
