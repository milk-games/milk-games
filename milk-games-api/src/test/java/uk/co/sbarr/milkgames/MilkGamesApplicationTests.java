package uk.co.sbarr.milkgames;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowire;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import jakarta.transaction.Transactional;
import uk.co.sbarr.milkgames.entities.Player;
import uk.co.sbarr.milkgames.entities.Season;
import uk.co.sbarr.milkgames.entities.Tournament;
import uk.co.sbarr.milkgames.entities.relationships.SeasonPlayer;
import uk.co.sbarr.milkgames.entities.relationships.pk.SeasonPlayerPK;
import uk.co.sbarr.milkgames.repositories.PlayerRepository;
import uk.co.sbarr.milkgames.repositories.SeasonPlayerRepository;
import uk.co.sbarr.milkgames.repositories.SeasonRepository;
import uk.co.sbarr.milkgames.repositories.TournamentRepository;

@SpringBootTest
class MilkGamesApplicationTests {

    @Autowired
    private SeasonRepository seasonRepository;

    @Autowired
    private PlayerRepository playerRepository;

    @Autowired
    private TournamentRepository tournamentRepository;

    @Autowired
    private SeasonPlayerRepository seasonPlayerRepository;

    @Test
    public void seasonPlayerTest() {
        Season season1 = new Season("Season 1");
        Season season2 = new Season("Season 2");
        seasonRepository.save(season1);
        seasonRepository.save(season2);

        Player player1 = new Player("Player 1");
        Player player2 = new Player("Player 2");
        playerRepository.save(player1);
        playerRepository.save(player2);

        season1.getPlayers().add(player1);
        season2.getPlayers().add(player2);
        seasonRepository.save(season1);
        seasonRepository.save(season2);

        SeasonPlayer seasonPlayer12 = new SeasonPlayer(season1, player2, 10);
        SeasonPlayer seasonPlayer21 = new SeasonPlayer(season2, player1, 5);

        seasonPlayerRepository.save(seasonPlayer12);
        seasonPlayerRepository.save(seasonPlayer21);

        assertEquals(0,
                seasonPlayerRepository.findById(new SeasonPlayerPK(1l, 1l)).get().getPoints());
        assertEquals(10,
                seasonPlayerRepository.findById(new SeasonPlayerPK(1l, 2l)).get().getPoints());
        assertEquals(5,
                seasonPlayerRepository.findById(new SeasonPlayerPK(2l, 1l)).get().getPoints());
        assertEquals(0,
                seasonPlayerRepository.findById(new SeasonPlayerPK(2l, 2l)).get().getPoints());
    }
}
