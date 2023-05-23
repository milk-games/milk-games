package uk.co.sbarr.milkgames.repositories;

import java.time.LocalDate;
import java.util.Optional;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import uk.co.sbarr.milkgames.entities.Season;
import java.util.List;

public interface SeasonRepository extends CrudRepository<Season, Long> {
    @Query("SELECT s FROM Season s WHERE s.startDate <= :today AND s.endDate >= :today")
    Optional<Season> findCurrentSeason(@Param("today") LocalDate today);
}


