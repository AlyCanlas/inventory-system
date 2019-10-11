package hau.edu.ph.ObprogL.repository;

import hau.edu.ph.ObprogL.model.ComputerHardware;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ComputerHardwareRepository extends JpaRepository<ComputerHardware, Integer> {
}
