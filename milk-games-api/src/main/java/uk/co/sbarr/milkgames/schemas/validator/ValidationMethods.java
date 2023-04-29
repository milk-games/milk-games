package uk.co.sbarr.milkgames.schemas.validator;

import java.lang.annotation.Annotation;
import java.util.Collection;
import java.util.List;
import uk.co.sbarr.milkgames.schemas.validator.annotations.ArrayValidation;
import uk.co.sbarr.milkgames.schemas.validator.annotations.NumberValidation;

public enum ValidationMethods {

    NotNull((value, annotation) -> value != null),

    Number((value, annotation) -> {
        NumberValidation validation = (NumberValidation) annotation;
        Number number = (Number) value;

        if (validation.max() != Double.MAX_VALUE && number.doubleValue() > validation.max())
            return false;

        if (validation.min() != Double.MIN_VALUE && number.doubleValue() < validation.min())
            return false;

        return true;
    }),

    Array((value, annotation) -> {
        ArrayValidation validation = (ArrayValidation) annotation;

        int length;

        if (value.getClass().isArray()) {
            length = java.lang.reflect.Array.getLength(value);
        } else if (value instanceof Collection) {
            Collection<?> collection = (Collection<?>) value;
            length = collection.size();
        } else {
            return false;
        }

        if (validation.minLength() > 0 && length < validation.minLength())
            return false;

        if (validation.maxLength() > 0 && length > validation.maxLength())
            return false;

        return true;
    });

    private final Validator validator;

    ValidationMethods(Validator validator) {
        this.validator = validator;
    }

    public boolean validate(Object value, Annotation annotation) {
        return validator.validate(value, annotation);
    }

    private interface Validator {
        boolean validate(Object value, Annotation annotation);
    }
};
