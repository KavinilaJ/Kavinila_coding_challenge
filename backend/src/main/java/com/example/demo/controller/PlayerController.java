package com.example.demo.controller;

import com.example.demo.dto.PlayerDTO;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import com.example.demo.entity.Player;
import com.example.demo.service.PlayerService;
@CrossOrigin(origins = "http://localhost:3000") 
@RestController
@RequestMapping("/api/players")
public class PlayerController {

    @Autowired
    private PlayerService service;

    @GetMapping
    public List<Player> getAllPlayers(){
        return service.getAllPlayers();
    }

    @GetMapping("/{id}")
    public Player getPlayer(@PathVariable Long id){
        return service.getPlayerById(id);
    }

    @PostMapping
    public Player createPlayer(@Valid @RequestBody PlayerDTO dto){

        Player player = new Player();

        player.setPlayerName(dto.getPlayerName());
        player.setJerseyNumber(dto.getJerseyNumber());
        player.setRole(dto.getRole());
        player.setTotalMatches(dto.getTotalMatches());
        player.setTeamName(dto.getTeamName());
        player.setCountryState(dto.getCountryState());
        player.setDescription(dto.getDescription());

        return service.createPlayer(player);
    }

    @PutMapping("/{id}")
    public Player updatePlayer(@PathVariable Long id, @RequestBody Player player){
        return service.updatePlayer(id, player);
    }

    @DeleteMapping("/{id}")
    public String deletePlayer(@PathVariable Long id){
        service.deletePlayer(id);
        return "Player deleted successfully";
    }
}