package uk.co.sbarr.milkgames.schemas.validator;

import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import uk.co.sbarr.milkgames.schemas.validator.annotations.SchemaValidation;
import uk.co.sbarr.milkgames.schemas.validator.annotations.Validate;

public class SchemaValidator {

    private String name;
    private Object object;


    public SchemaValidator(Object object) {
        this.name = name;
        this.object = object;
    }

    public void validate() throws IllegalArgumentException, IllegalAccessException {
        System.out.println("Validating " + object.getClass().getName());
        Field[] fields = object.getClass().getDeclaredFields();

        for (Field field : fields) {
            field.setAccessible(true);
            Object value = field.get(object);

            validateFields(field);
            if (value.getClass().isAnnotationPresent(Validate.class)) {
                new SchemaValidator(value).validate();
            }
        }
    }

    private void validateFields(Field field) {
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
                    boolean valid = method.validate(value, annotation);

                    // TODO: handle valid
                } catch (NoSuchMethodException e) {
                    System.err.println(field.getName()
                            + " cannot be validated as the validation annotation does not have a method");
                } catch (Exception e) {
                    System.err.println(e.getMessage());
                }
            }
        }
    }

    private boolean canValidate(Annotation annotation) {
        if (annotation.annotationType().isAnnotationPresent(SchemaValidation.class)) {
            return true;
        }
        return false;
    }
}
