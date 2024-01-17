let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

function handleClick(index) {
    if (gameBoard[index] === "" && gameActive) {
        gameBoard[index] = currentPlayer;
        document.getElementById("board").children[index].textContent = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        updateStatus();
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const combo of winningCombinations) {
        const [a, b, c] = combo;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            document.getElementById("status").textContent = `Player ${gameBoard[a]} wins!`;
            gameActive = false;
            return;
        }
    }

    if (!gameBoard.includes("") && gameActive) {
        document.getElementById("status").textContent = "It's a draw!";
        gameActive = false;
    }
}

function updateStatus() {
    document.getElementById("status").textContent = `Player ${currentPlayer}'s turn`;
}

function newGame() {
    currentPlayer = Math.random() < 0.5 ? "X" : "O";
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;

    for (let i = 0; i < 9; i++) {
        document.getElementById("board").children[i].textContent = "";
    }

    updateStatus();
}

updateStatus();

