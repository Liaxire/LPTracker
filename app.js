function modifiyLPS(player, playerOp, op) {
    let intAmount = parseInt(playerOp.value);
    let newValue = parseInt(player.innerText);
    console.log(newValue);
    if (isNaN(intAmount) || isNaN(newValue)) {
        console.log("lol");
        return;
        console.log("hey");
    }
    if (op === "+") {
        newValue += intAmount;
    }
    else if (op === "-") {
        newValue -= intAmount;
        if (newValue < 0) {
            newValue = 0;
        }
    }
    player.innerText = newValue;
    playerOp.value = '';
}

const addPlayer1 = document.querySelector("#addPlayer1");
const addPlayer2 = document.querySelector("#addPlayer2");
const subPlayer1 = document.querySelector("#subPlayer1");
const subPlayer2 = document.querySelector("#subPlayer2");
const player1LPS = document.querySelector("#player1LPS");
const player2LPS = document.querySelector("#player2LPS");

document.querySelector("#addPlayer1 + button").addEventListener("click", () => modifiyLPS(player1LPS, addPlayer1, "+"));
document.querySelector("#addPlayer2 + button").addEventListener("click", () => modifiyLPS(player2LPS, addPlayer2, "+"));
document.querySelector("#subPlayer1 + button").addEventListener("click", () => modifiyLPS(player1LPS, subPlayer1, "-"));
document.querySelector("#subPlayer2 + button").addEventListener("click", () => modifiyLPS(player2LPS, subPlayer2, "-"));