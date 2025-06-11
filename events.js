// stored html elements
let mario = document.querySelector(".mario");
let coin = document.querySelector(".coin");
let score = document.querySelector(".score");
let title = document.querySelector("h1");
let background = document.querySelector("body");
let jumpButton = document.querySelector(".jump");
let jumpDownButton = document.querySelector(".jump-down");
let changeColorButton = document.querySelector(".change-color");
let endGameButton = document.querySelector(".end-game");
let updateScoreButton = document.querySelector(".update-score");
let growButton = document.querySelector(".grow");


jumpButton.addEventListener("click", function() {
    mario.style.bottom = "120px";
    coin.style.display = "none";
});

jumpDownButton.addEventListener("click", function() {
    mario.style = "bottom: 35px";
});

changeColorButton.addEventListener("click", function() {
    background.style.backgroundColor = "springGreen"; // you can change the color to something different
});




/* 4. When end game button is clicked, the title of the page says game over. 

________._______ ("___", ________() {
    title.innerHTML = "Game over.";
});

*/
endGameButton.addEventListener("click", function() {
    title.innerHTML = "Game over.";
});

/* 5. When update score button is clicked, the counter score becomes "1" instead of 0. 

________._______ ("___", ________() {
    score.innerHTML = 1;
});

*/
updateScoreButton.addEventListener("click", function() {
    score.innerHTML = 1;
});

/* 6: When clicking the "Grow" button the Mario image gets bigger. Write the whole click handler! 

{
    mario.style.width = "200px";
}

*/
growButton.addEventListener("click", function() {
    mario.style.width = "200px";
});