package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Player;
import com.example.demo.repo.PlayerRepository;

@Service
public class PlayerServiceImpl implements PlayerService {

    @Autowired
    private PlayerRepository repo;

    @Override
    public List<Player> getAllPlayers() {
        return repo.findAll();
    }

    @Override
    public Player getPlayerById(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Player not found"));
    }

    @Override
    public Player createPlayer(Player player) {
        return repo.save(player);
    }

    @Override
    public Player updatePlayer(Long id, Player player) {

        Player existing = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Player not found"));

        existing.setPlayerName(player.getPlayerName());
        existing.setJerseyNumber(player.getJerseyNumber());
        existing.setRole(player.getRole());
        existing.setTotalMatches(player.getTotalMatches());
        existing.setTeamName(player.getTeamName());
        existing.setCountryState(player.getCountryState());
        existing.setDescription(player.getDescription());

        return repo.save(existing);
    }

    @Override
    public void deletePlayer(Long id) {
        repo.deleteById(id);
    }
}