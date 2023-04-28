package uk.co.sbarr.milkgames.schemas.validator;

import java.lang.annotation.Annotation;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import uk.co.sbarr.milkgames.schemas.Stat;
import uk.co.sbarr.milkgames.schemas.validator.annotations.NumberValidation;
import uk.co.sbarr.milkgames.schemas.validator.annotations.SchemaValidation;

public class SchemaValidator {

    private Object object;

    public SchemaValidator(Object object) {
        this.object = object;
    }

    public void validate() {
        System.out.println("Validating " + object.getClass().getName());
        Field[] fields = object.getClass().getDeclaredFields();

        for (Field field : fields) {
            checkAnnotations(field);
            if (Stat.class.isAssignableFrom(field.getClass())) {

            }
        }
    }

    private boolean validateField(Field field, ValidationMethods method, Annotation annotation)
            throws IllegalArgumentException, IllegalAccessException {
        field.setAccessible(true);
        switch (method) {
            case NotNull:
                return field.get(object) != null;
            case Number:
                NumberValidation validationAnnotation = (NumberValidation) annotation;
                Number value = (Number) field.get(object);
                double min = validationAnnotation.min();
                double max = validationAnnotation.max();

                System.out.println("min: " + min);
                System.out.println("max: " + max);

                return true;
            default:
                return true;
        }
    }

    private Object getAnnotationValue(Annotation annotation, String fieldName) {
        try {
            Method method = annotation.annotationType().getDeclaredMethod(fieldName);
            System.out.println("bing");
            double value = (Double) method.invoke(method);

            return value;
        } catch (NoSuchMethodException | SecurityException | IllegalAccessException
                | IllegalArgumentException | InvocationTargetException e) {
            System.err.println(e.getMessage());
            return null;
        }
    }

    private void checkAnnotations(Field field) {
        Annotation[] annotations = field.getDeclaredAnnotations();
        for (Annotation annotation : annotations) {
            if (canValidate(annotation)) {
                try {
                    Method annotationMethod =
                            annotation.annotationType().getDeclaredMethod("method");
                    ValidationMethods method =
                            (ValidationMethods) annotationMethod.invoke(annotation);

                    validateField(field, method, annotation);
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
        Annotation[] annotations = annotation.annotationType().getDeclaredAnnotations();

        if (annotation.annotationType().isAnnotationPresent(SchemaValidation.class)) {
            return true;
        }

        for (Annotation a : annotations) {
            Class<? extends Annotation> type = a.annotationType();
            if (!type.equals(Retention.class) || !type.equals(Target.class)) {
                if (a.annotationType().isAnnotationPresent(SchemaValidation.class)) {
                    return true;
                } else {
                    return canValidate(a);
                }
            }
        }

        return false;
    }
}
