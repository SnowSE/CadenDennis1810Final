import { createLobby, currentlobbies, getLobbiesbyPlayerName } from "./lobbydomain.js";

export const CreateLobbyButton = () => {
  const playername = document.getElementById("PlayerName");
  const Inputbox = document.getElementById("Inputs");

  const NewLobbyButton = document.createElement("button");

  NewLobbyButton.textContent = "Create New Lobby";
  NewLobbyButton.classList.add("lobbybutton");

  Inputbox.appendChild(NewLobbyButton);

  NewLobbyButton.addEventListener("click", (e) => {
    createLobby(playername.value);
  })

  createLobby(playername.value);
  displayLobbies();
}

export const displayLobbies = () => {
  const lobbiesbox = document.getElementById("lobbybox");
  lobbiesbox.replaceChildren();

  currentlobbies.forEach((lobby) => {
    const Gametitle = document.createElement("Section");
    Gametitle.classList.add("label");
    Gametitle.textContent = `${lobby.playername}'s Game`;
    const PlayerCount = document.createElement("Section");
    PlayerCount.textContent = `${lobby.Playercount}/2`;
    PlayerCount.classList.add("label");
    const joinbutton = document.createElement("a");
    joinbutton.classList.add("button");
    joinbutton.textContent = "Join Game";
    joinbutton.setAttribute("href", "battleship.html");
    const Lobbybox = document.createElement("div");
    Lobbybox.appendChild(Gametitle);
    Lobbybox.appendChild(PlayerCount);
    Lobbybox.appendChild(joinbutton);
    lobbiesbox.appendChild(Lobbybox);
    Lobbybox.classList.add("Lobby");
    lobbiesbox.classList.add("lobbies");
  });
};

const playernamesearch = document.getElementById("LobbySearch");
playernamesearch.addEventListener("keypress", async (e) => {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();

  const lobbybox = document.getElementById("lobbybox");
  lobbybox.replaceChildren();

  getLobbiesbyPlayerName(playernamesearch.value);
  setLobbies(currentlobbies);
});

CreateLobbyButton();

if (currentlobbies !== undefined) {
  displayLobbies();
}
