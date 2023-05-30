package uk.co.sbarr.milkgames;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import uk.co.sbarr.milkgames.entities.Game;
import uk.co.sbarr.milkgames.entities.Player;
import uk.co.sbarr.milkgames.entities.Role;
import uk.co.sbarr.milkgames.entities.Season;
import uk.co.sbarr.milkgames.entities.Team;
import uk.co.sbarr.milkgames.entities.Tournament;
import uk.co.sbarr.milkgames.entities.relationships.SeasonPlayer;
import uk.co.sbarr.milkgames.repositories.GameRepository;
import uk.co.sbarr.milkgames.repositories.MatchRepository;
import uk.co.sbarr.milkgames.repositories.PlayerRepository;
import uk.co.sbarr.milkgames.repositories.RoleRepository;
import uk.co.sbarr.milkgames.repositories.SeasonPlayerRepository;
import uk.co.sbarr.milkgames.repositories.SeasonRepository;
import uk.co.sbarr.milkgames.repositories.TeamRepository;
import uk.co.sbarr.milkgames.repositories.TournamentRepository;

@Component
public class Seeder implements CommandLineRunner {

    @Autowired
    PlayerRepository playerRepository;

    @Autowired
    SeasonRepository seasonRepository;

    @Autowired
    TournamentRepository tournamentRepository;

    @Autowired
    MatchRepository matchRepository;

    @Autowired
    TeamRepository teamRepository;

    @Autowired
    GameRepository gameRepository;

    @Autowired
    SeasonPlayerRepository seasonPlayerRepository;

    @Autowired
    RoleRepository roleRepository;

    @Override
    public void run(String... args) throws Exception {

        LocalDateTime datetime = LocalDateTime.now();
        LocalDate date = LocalDate.now();
        Season season1 = new Season("Season 1", date.minusMonths(1), date.plusMonths(5));

        Role adminRole = new Role("ADMIN");
        Role moderatorRole = new Role("MODERATOR");
        Role testRole = new Role("TEST");

        roleRepository.save(adminRole);
        roleRepository.save(moderatorRole);
        roleRepository.save(testRole);

        Player player1 = new Player(1l, "Player 1");
        Player player2 = new Player(2l, "Player 2");
        Player player3 = new Player(3l, "Player 3");
        Player player4 = new Player(4l, "Player 4");
        Player player5 = new Player(5l, "Player 5");
        Player player6 = new Player(6l, "Player 6");

        Player scott = new Player(114853810215583753l, "Sgodd");
        Player joe = new Player(135046110484889600l, "Kalekdan");

        scott.addRole(adminRole);
        joe.addRole(adminRole);

        player1.addRole(adminRole);

        List<Player> players =
            Arrays.asList(player1, player2, player3, player4, player5, player6, scott, joe);
        // season1.getPlayers().addAll(players);

        playerRepository.saveAll(players);
        seasonRepository.save(season1);

        Game game1 = new Game("League of Legends",
            "https://www.leagueoflegends.com/static/twitter-fafabb053dd48811ea554fe63188cc1a.jpg");
        Game game2 = new Game("Valorant",
            "https://i0.wp.com/theallapps.com/wp-content/uploads/VALORANT_JETT_Duotoned-1024x576.jpg?resize=1024%2C576");
        gameRepository.save(game1);
        gameRepository.save(game2);

        Tournament tournament1 = new Tournament("Tournament 1", season1, "single", game1, 8, 2, 0,
            datetime.plusDays(1));
        Tournament tournament2 = new Tournament("Tournament 2", season1, "single", game1, 4, 2, 0,
            datetime.minusDays(1));
        Tournament tournament3 = new Tournament("Tournament 3", season1, "single", game1, 4, 2, 0,
            datetime.plusDays(5).plusHours(2));

        tournamentRepository.save(tournament1);
        tournamentRepository.save(tournament2);
        tournamentRepository.save(tournament3);

        Team team1 = tournament1.createTeam("Team 1");
        Team team2 = tournament1.createTeam("Team 2");
        Team team3 = tournament1.createTeam("Team 3");
        Team team4 = tournament1.createTeam("Team 4");
        Team team5 = tournament1.createTeam("Team 5");
        Team team7 = tournament1.createTeam("Team 7");

        team1.addPlayer(player1);
        team1.addPlayer(player2);

        team2.addPlayer(player3);
        team2.addPlayer(player4);

        team3.addPlayer(player5);
        team3.addPlayer(player6);

        teamRepository.save(team1);
        teamRepository.save(team2);
        teamRepository.save(team3);
        teamRepository.save(team4);
        teamRepository.save(team5);
        teamRepository.save(team7);

        tournament1.addTeam(team1);
        tournament1.addTeam(team2);
        tournament1.addTeam(team3);
        tournament1.addTeam(team4);
        tournament1.addTeam(team5);
        tournament1.addTeam(team7);

        tournamentRepository.save(tournament1);
        tournament1.initialiseBracket();
        tournament1.randomiseBracket();
        matchRepository.saveAll(tournament1.getMatches());

        seasonPlayerRepository.save(new SeasonPlayer(season1, player1));
        seasonPlayerRepository.save(new SeasonPlayer(season1, player2));
        seasonPlayerRepository.save(new SeasonPlayer(season1, player3, 5));
        seasonPlayerRepository.save(new SeasonPlayer(season1, player4, 10));
        seasonPlayerRepository.save(new SeasonPlayer(season1, player5));
        seasonPlayerRepository.save(new SeasonPlayer(season1, player6));
    }

}
