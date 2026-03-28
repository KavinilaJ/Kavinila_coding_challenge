package com.example.demo.repo;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entity.Player;

public interface PlayerRepository extends JpaRepository<Player, Long> {

}
