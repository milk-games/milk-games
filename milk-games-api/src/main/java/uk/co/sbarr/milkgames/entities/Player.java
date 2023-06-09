package uk.co.sbarr.milkgames.entities;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@Table(name = "players")
public class Player {

    @Id
    @JsonView(View.Entity.class)
    private Long id;

    @Column(nullable = false)
    @JsonView(View.Entity.class)
    private String name;

    @ManyToMany(mappedBy = "players")
    @JsonView(View.Player.class)
    private Set<Team> teams = new HashSet<>();

    @ManyToMany(fetch = FetchType.EAGER)
    @JsonView(View.Player.class)
    private Set<Role> roles;

    // @OneToMany(mappedBy = "season")
    // @JsonView(View.Season.class)
    // private Set<SeasonPlayer> seasonPlayers = new HashSet<>();

    public Player() {}

    public Player(Long id, String name) {
        this.id = id;
        this.name = name;
        roles = new HashSet<>();
    }

    public void addRole(Role role) {
        this.roles.add(role);
    }
}
