using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors();

var app = builder.Build();
app.UseCors(x => x.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod());

string filename = "HighScores.json";
List<HighScore> Highscores = new();
if (File.Exists(filename))
{
    var json = File.ReadAllText(filename);
    Highscores.AddRange(JsonSerializer.Deserialize<List<HighScore>>(json));
}

string playerfile = "Player.json";
List<Player> players = new();
if(File.Exists(playerfile))
{
    var json = File.ReadAllText(playerfile);
    players.AddRange(JsonSerializer.Deserialize<List<Player>>(json));
}

string LobbyFile = "Lobby.json";
List<Lobby> lobbies = new();
if(File.Exists(LobbyFile))
{
    var json = File.ReadAllText(LobbyFile);
    lobbies.AddRange(JsonSerializer.Deserialize<List<Lobby>>(json));
}


app.MapGet("/", () => "Hello World!");
app.MapGet("/Highscores", () => Highscores);
app.MapPost("/Highscores", (HighScore highscore) =>
{
    Highscores.Add(highscore);
    var json = JsonSerializer.Serialize(Highscores);
    File.WriteAllText(filename, json);
});
app.MapGet("/Game", () => players);
app.MapGet("/Lobby", () => lobbies);

app.Run();

public record HighScore(string name, int Shipsleft, int TurnCount);

public record Player(string name, int Shipsleft);

public record Lobby(string Player1name, int currentplayercount);
