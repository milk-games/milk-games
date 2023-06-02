FROM openjdk:17-jdk-slim

WORKDIR /usr/src/api

ARG JAR_FILE=*.jar
COPY ${JAR_FILE} ./app.jar

ENTRYPOINT [ "java", "-jar", "./app.jar" ]