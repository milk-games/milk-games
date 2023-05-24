package uk.co.sbarr.milkgames.controllers;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class SeasonModel {
    @JsonProperty("name")
    private String name;
    @JsonProperty("start")
    private LocalDate start;
    @JsonProperty("end")
    private LocalDate end;

    public SeasonModel() {
    }

    public SeasonModel(String name, LocalDate start, LocalDate end) {
        this.name = name;
        this.start = start;
        this.end = end;
    }
}
