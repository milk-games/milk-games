package uk.co.sbarr.milkgames.schemas.validator;

import java.lang.annotation.Annotation;
import java.util.Collection;
import uk.co.sbarr.milkgames.schemas.validator.annotations.ArrayValidation;
import uk.co.sbarr.milkgames.schemas.validator.annotations.NumberValidation;
import uk.co.sbarr.milkgames.schemas.validator.annotations.Validate;

public enum ValidationMethods {

    NotNull((value, annotation) -> value != null ? null : "value must not be null"),

    Number((value, annotation) -> {
        NumberValidation validation = (NumberValidation) annotation;
        Number number = (Number) value;

        if (validation.max() != Double.MAX_VALUE && number.doubleValue() > validation.max())
            return "value cannot be greater than " + validation.max();

        if (validation.min() != Double.MIN_VALUE && number.doubleValue() < validation.min())
            return "value cannot be less than " + validation.min();

        return null;
    }),

    Array((value, annotation) -> {
        ArrayValidation validation = (ArrayValidation) annotation;

        int length;

        if (value == null)
            return "array must not be null";

        if (value.getClass().isArray()) {
            length = java.lang.reflect.Array.getLength(value);



        } else if (value instanceof Collection) {
            Collection<?> collection = (Collection<?>) value;
            length = collection.size();

            for (Object element : collection) {
                if (element.getClass().isAnnotationPresent(Validate.class)) {
                    try {
                        return new SchemaValidator(element).validate();
                    } catch (IllegalArgumentException e) {
                        System.err.println("Array Validator:");
                        System.err.println("\t" + e.getMessage());
                    } catch (IllegalAccessException e) {
                        System.err.println("Array Validator:");
                        System.err.println("\t" + e.getMessage());
                    }
                }
            }
        } else {
            return "value must be an array";
        }

        if (validation.minLength() > 0 && length < validation.minLength())
            return "does not meet minimum length [" + validation.minLength()
                    + "] requirements, actual " + length;

        if (validation.maxLength() > 0 && length > validation.maxLength())
            return "does not meet max length [" + validation.maxLength() + "] requirements, actual "
                    + length;



        return null;
    });

    private final Validator validator;

    ValidationMethods(Validator validator) {
        this.validator = validator;
    }

    public String validate(Object value, Annotation annotation) {
        return validator.validate(value, annotation);
    }

    private interface Validator {
        String validate(Object value, Annotation annotation);
    }
};
