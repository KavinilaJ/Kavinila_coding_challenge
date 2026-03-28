import React, { useEffect, useState } from "react";
import { getPlayers, deletePlayer } from "../services/playerService";
import { useNavigate } from "react-router-dom";

function PlayerList() {

  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadPlayers();
  }, []);

  const loadPlayers = async () => {
    const res = await getPlayers();
    setPlayers(res.data);
  };

  const handleDelete = async (id) => {
    await deletePlayer(id);
    loadPlayers();
  };

  return (
    <div>

      <button className="btn btn-primary mb-3"
        onClick={() => navigate("/add")}>
        Add Player
      </button>

      <table className="table table-bordered text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Jersey</th>
            <th>Role</th>
            <th>Team</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {players.map((p) => (
            <tr key={p.playerId}>
              <td>{p.playerId}</td>
              <td>{p.playerName}</td>
              <td>{p.jerseyNumber}</td>
              <td>{p.role}</td>
              <td>{p.teamName}</td>

              <td>
                <button className="btn btn-warning me-2"
                  onClick={() => navigate(`/edit/${p.playerId}`)}>
                  Edit
                </button>

                <button className="btn btn-danger"
                  onClick={() => handleDelete(p.playerId)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default PlayerList;