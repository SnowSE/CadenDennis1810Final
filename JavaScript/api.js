const apiAddress = "http://localhost:5289";

export const SaveHighScore = async (Playername, Shipsleft, TurnCount) => {
  const body = {
    name: Playername,
    shipsleft: Shipsleft,
    turncount: TurnCount,
  };
  await fetch(`${apiAddress}/Highscores`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export const CollectHighScoresfromAPI = async () => {
  const response = await fetch(`${apiAddress}/Highscores`, {
    method: "GET",
  });
  return response.json();
};

export const CollectPlayersfromAPI = async () => {
  const response = await fetch(`${apiAddress}/Game`, {
    method: "GET",
  });
  return response.json();
};

export const CollectLobbiesfromAPI = async () => {
  const response = await fetch(`${apiAddress}/Lobbies`, {
    method: "GET",
  });
  return response.json();
};
