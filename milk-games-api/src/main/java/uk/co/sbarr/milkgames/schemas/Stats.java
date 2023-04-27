package uk.co.sbarr.milkgames.schemas;

import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonSubTypes.Type;
import uk.co.sbarr.milkgames.schemas.annotations.NotNull;
import uk.co.sbarr.milkgames.schemas.league.LeagueStats;

@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "type")
@JsonSubTypes({@Type(value = LeagueStats.class, name = "LeagueOfLegends")})
public abstract class Stats {

    public void validate() throws InvalidStatException {
        System.out.println("Validating " + this.getClass().getName());
        Field[] fields = this.getClass().getDeclaredFields();
        for (Field field : fields) {
            System.out.println(field.getName());
            Annotation[] annotations = field.getDeclaredAnnotations();

            for (Annotation annotation : annotations) {
                if (annotation.annotationType() == NotNull.class) {
                    System.out.println("CLASS");
                }
            }
        }
    }
}
