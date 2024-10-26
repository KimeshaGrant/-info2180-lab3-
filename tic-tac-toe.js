document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div"); // Select all div elements in the board
    let currentPlayer = "X"; // Start with player X
    const winningCombinations = [
        [0, 1, 2], // Row 1
        [3, 4, 5], // Row 2
        [6, 7, 8], // Row 3
        [0, 3, 6], // Column 1
        [1, 4, 7], // Column 2
        [2, 5, 8], // Column 3
        [0, 4, 8], // Diagonal 1
        [2, 4, 6], // Diagonal 2
    ];
    let gameActive = true; // Track if the game is active

    // Loop through each square
    squares.forEach((square) => {
        square.classList.add("square");

        square.addEventListener("click", function () {
            if (!square.innerHTML && gameActive) { // Check if square is empty and game is active
                square.innerHTML = currentPlayer;
                square.classList.add(currentPlayer);
                checkWinner(); // Check for a winner after each move
                currentPlayer = currentPlayer === "X" ? "O" : "X"; // Switch turns
            }
        });

        square.addEventListener("mouseover", function () {
            square.classList.add("hover");
        });

        square.addEventListener("mouseout", function () {
            square.classList.remove("hover");
        });
    });

    // Check for winner
    function checkWinner() {
        let winner = null;
        console.log("Checking for winner...");

        winningCombinations.forEach((combo) => {
            const [a, b, c] = combo;
            console.log(`Checking combination: ${combo}`);

            if (
                squares[a].innerHTML !== "" &&
                squares[a].innerHTML === squares[b].innerHTML &&
                squares[a].innerHTML === squares[c].innerHTML
            ) {
                console.log(`We have a winner: ${squares[a].innerHTML}`);
                winner = squares[a].innerHTML;
            }
        });

        if (winner) {
            const status = document.getElementById("status");
            status.innerHTML = `Congratulations! ${winner} is the Winner!`;
            status.classList.add("you-won");
            console.log(`Updated status message with winner: ${winner}`);
            gameActive = false; // End the game
            disableSquares(); // Disable further moves
        } else {
            console.log("No winner yet.");
        }
    }

    // Disable all squares after a winner is found
    function disableSquares() {
        squares.forEach((square) => {
            square.style.pointerEvents = "none"; // Disable clicking on squares
        });
    }
});
