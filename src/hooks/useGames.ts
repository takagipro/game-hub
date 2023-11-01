import { useEffect, useState } from "react";
import gameService, { Game, GameResponse } from "../services/game-service";
import { CanceledError } from "../services/http-service";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const { request, cancel } = gameService.get<GameResponse>();

    setLoading(true);

    request
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
