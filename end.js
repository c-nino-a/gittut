const btnSave=document.getElementById("savescoreBtn");
const user=document.getElementById("username");
const mostRecentScore=localStorage.getItem("mostRecentScore");
const finalScore=document.getElementById("finalScore");

finalScore.innerText=mostRecentScore;
const highscores= JSON.parse(localStorage.getItem("highscores")) || [];
const MAX_HIGH_SCORES=5;
user.addEventListener("keyup", ()=>{
	btnSave.disabled=!username.value;
});

saveHighScore =e=>{
	e.preventDefault();

const score ={
	score: mostRecentScore,
	name: user.value
}
highscores.push(score);
highscores.sort((a,b)=> b.score-a.score);
highscores.splice(5);
localStorage.setItem("highscores",JSON.stringify(highscores));
window.location.assign("/");

}

