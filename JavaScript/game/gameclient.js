import { CollectHighScoresfromAPI } from "../api.js";

const BuildHeader = () => {
    const infobar = document.getElementById("infobar");
    infobar.replaceChildren();
    const PlayerTurn = document.createElement("p");
    if(Currentplayer === me)
    {
        Currentplayer = "You";
    }
    else{
        Currentplayer = "Opponent";
    }
    PlayerTurn.textContent = `Current Player's Turn: ${Currentplayer}`;

    const TurnSpace = document.createElement("p");
    TurnSpace.TextContent = `Turn Count: ${TurnCount}`;

    infobar.appendChild(PlayerTurn);
    infobar.appendChild(TurnSpace);
}



const CurrentHighScores = async () => {
    const Highscorelist = document.getElementById("HighScorelist");
    Highscorelist.replaceChildren();

    const Highscoreslist = await CollectHighScoresfromAPI();

    Highscoreslist.forEach(Highscore => {
        const HighScore = document.createElement("ol");
        HighScore.appendChild(Highscore);
        Highscorelist.appendChild(HighScore);
    });
}

// BuildHeader();
// await CurrentHighScores();