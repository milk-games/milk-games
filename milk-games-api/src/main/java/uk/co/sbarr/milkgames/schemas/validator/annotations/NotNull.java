package uk.co.sbarr.milkgames.schemas.validator.annotations;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import uk.co.sbarr.milkgames.schemas.validator.ValidationMethods;

@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@SchemaValidation
public @interface NotNull {
    ValidationMethods method() default ValidationMethods.NotNull;
}
