package uk.co.sbarr.milkgames.schemas;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonSubTypes.Type;
import uk.co.sbarr.milkgames.schemas.league.LeagueStats;

@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "type")
@JsonSubTypes({@Type(value = LeagueStats.class, name = "LeagueOfLegends")})
public abstract class Stats {
}
