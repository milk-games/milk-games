package uk.co.sbarr.milkgames.schemas;

public class InvalidStatException extends Exception {

    public InvalidStatException() {
        super("Invalid Stat Exception");
    }

    public InvalidStatException(String message) {
        super(message);
    }

    public InvalidStatException(Stat stat) {
        super(generateMessage(stat));
    }

    public InvalidStatException(Stat stat, String reason, String... properties) {

        super(generateMessage(stat, reason, properties));
    }

    private static String generateMessage(Stat stat, String reason, String... properties) {
        String propertyString = "[" + String.join(", ", properties) + "]";
        String name = stat.getClass().getSimpleName();

        return "Invalid Stat (" + name + ": " + propertyString + ") reason: " + reason;
    }

    private static String generateMessage(Stat stat) {
        String name = stat.getClass().getSimpleName();
        return "Invalid Stat (" + name + ")";
    }
}
