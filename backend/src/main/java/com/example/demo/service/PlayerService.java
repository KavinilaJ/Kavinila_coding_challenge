package com.example.demo.service;


import java.util.List;
import com.example.demo.entity.Player;

public interface PlayerService {

    List<Player> getAllPlayers();

    Player getPlayerById(Long id);

    Player createPlayer(Player player);

    Player updatePlayer(Long id, Player player);

    void deletePlayer(Long id);
}