package uk.co.sbarr.milkgames.schemas.validator;

import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import uk.co.sbarr.milkgames.schemas.validator.annotations.SchemaValidation;
import uk.co.sbarr.milkgames.schemas.validator.annotations.Validate;

public class SchemaValidator {

    private Object object;

    public SchemaValidator(Object object) {
        this.object = object;
    }

    public String validate() throws IllegalArgumentException, IllegalAccessException {
        Field[] fields = object.getClass().getDeclaredFields();

        String validationMessage = null;

        for (Field field : fields) {
            field.setAccessible(true);
            Object value = field.get(object);

            String validation = validateField(field);
            if (validation != null)
                return field.getName() + ": " + validation;
            if (value.getClass().isAnnotationPresent(Validate.class)) {
                validationMessage = new SchemaValidator(value).validate();
            }
        }

        return validationMessage;
    }

    private String validateField(Field field) {
        Annotation[] annotations = field.getDeclaredAnnotations();
        for (Annotation annotation : annotations) {
            if (canValidate(annotation)) {
                try {
                    Method annotationMethod =
                            annotation.annotationType().getDeclaredMethod("method");
                    ValidationMethods method =
                            (ValidationMethods) annotationMethod.invoke(annotation);
                    field.setAccessible(true);
                    Object value = field.get(object);
                    String validation = method.validate(value, annotation);

                    if (validation != null)
                        return validation;
                } catch (NoSuchMethodException e) {
                    System.err.println(field.getName()
                            + " cannot be validated as the validation annotation does not have a method");
                    return "Unexpected validation Error";
                } catch (Exception e) {
                    System.err.println(e.getMessage());
                    return "Unexpected validation error";
                }
            }
        }

        return null;
    }

    private boolean canValidate(Annotation annotation) {
        if (annotation.annotationType().isAnnotationPresent(SchemaValidation.class)) {
            return true;
        }
        return false;
    }
}
