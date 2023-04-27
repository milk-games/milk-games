package uk.co.sbarr.milkgames;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import uk.co.sbarr.milkgames.entities.Player;
import uk.co.sbarr.milkgames.entities.Season;
import uk.co.sbarr.milkgames.entities.Team;
import uk.co.sbarr.milkgames.entities.Tournament;
import uk.co.sbarr.milkgames.entities.relationships.SeasonPlayer;
import uk.co.sbarr.milkgames.repositories.MatchRepository;
import uk.co.sbarr.milkgames.repositories.PlayerRepository;
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
    SeasonPlayerRepository seasonPlayerRepository;

    @Override
    public void run(String... args) throws Exception {
        Season season1 = new Season("Season 1");

        Player player1 = new Player("Player 1");
        Player player2 = new Player("Player 2");
        Player player3 = new Player("Player 3");
        Player player4 = new Player("Player 4");
        Player player5 = new Player("Player 5");
        Player player6 = new Player("Player 6");

        List<Player> players = Arrays.asList(player1, player2, player3, player4, player5, player6);
        // season1.getPlayers().addAll(players);

        playerRepository.saveAll(players);
        seasonRepository.save(season1);

        LocalDate now = LocalDate.now();
        Tournament tournament1 = new Tournament("Tournament 1", season1, "single", 4, 2, 0,
                now.plusDays(1), now.plusDays(2));

        tournamentRepository.save(tournament1);

        Team team1 = tournament1.createTeam("Team 1");
        Team team2 = tournament1.createTeam("Team 2");
        Team team3 = tournament1.createTeam("Team 3");

        team1.addPlayer(player1);
        team1.addPlayer(player2);

        team2.addPlayer(player3);
        team2.addPlayer(player4);

        team3.addPlayer(player5);
        team3.addPlayer(player6);

        teamRepository.save(team1);
        teamRepository.save(team2);
        teamRepository.save(team3);

        tournament1.addTeam(team1);
        tournament1.addTeam(team2);
        tournament1.addTeam(team3);

        tournamentRepository.save(tournament1);
        tournament1.initialiseBracket();
        tournament1.randomiseBracket();
        matchRepository.saveAll(tournament1.getMatches());
 
        seasonPlayerRepository.save(new SeasonPlayer(season1, player1));
        seasonPlayerRepository.save(new SeasonPlayer(season1, player2));
        seasonPlayerRepository.save(new SeasonPlayer(season1, player3));
        seasonPlayerRepository.save(new SeasonPlayer(season1, player4));
        seasonPlayerRepository.save(new SeasonPlayer(season1, player5));
        seasonPlayerRepository.save(new SeasonPlayer(season1, player6));
    }

}
