var lobbies = [];

var hostname;

var playercount;

export var currentlobbies = lobbies;

export const setLobbies = (newLobbies) => (lobbies = newLobbies);

export const getLobbiesbyPlayerName = (HostName) => {
  lobbies.filter((l) => l.HostName === HostName);
};

export const createLobby = (playername) => {
  const lobby = [(hostname = playername), (playercount = 1)];
  lobbies.push(lobby);
};
