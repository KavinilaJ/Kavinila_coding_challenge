package com.example.demo.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Player;
import com.example.demo.service.PlayerService;

@RestController
@RequestMapping("/api/players")
public class PlayerController {

    @Autowired
    private PlayerService service;

    @GetMapping
    public List<Player> getAllPlayers() {
        return service.getAllPlayers();
    }

    @GetMapping("/{id}")
    public Player getPlayerById(@PathVariable Long id) {
        return service.getPlayerById(id);
    }

    @PostMapping
    public Player createPlayer(@RequestBody Player player) {
        return service.createPlayer(player);
    }

    @PutMapping("/{id}")
    public Player updatePlayer(@PathVariable Long id, @RequestBody Player player) {
        return service.updatePlayer(id, player);
    }

    @DeleteMapping("/{id}")
    public String deletePlayer(@PathVariable Long id) {
        service.deletePlayer(id);
        return "Player deleted successfully";
    }
}