document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");  // 1. Select all div elements in the board
    let currentPlayer = "X";  // 2. Start with player X
    const winningCombinations = [
        [0, 1, 2],  // Row 1
        [3, 4, 5],  // Row 2
        [6, 7, 8],  // Row 3
        [0, 3, 6],  // Column 1
        [1, 4, 7],  // Column 2
        [2, 5, 8],  // Column 3
        [0, 4, 8],  // Diagonal 1
        [2, 4, 6]   // Diagonal 2
    ];

    // 3. Reset game function
    function resetGame() {
        console.log("Resetting game...");  // Debugging output
        squares.forEach(square => {
            square.innerHTML = "";  // Clear the squares
            square.classList.remove("X", "O");  // Remove player classes
        });
        const status = document.getElementById("status");
        status.innerHTML = "Move your mouse over a square and click to play an X or an O.";  // Reset status message
        status.classList.remove("you-won");  // Remove winning class
        currentPlayer = "X";  // Reset current player
    }

    // 4. Add event listener to the New Game button
    document.querySelector(".btn").addEventListener("click", resetGame);

    // 5. Loop through each square
    squares.forEach(square => {
        square.classList.add("square");  // Add class for styling

        // 6. Add click event to squares
        square.addEventListener("click", function () {
            // Prevent changing a filled square
            if (!square.innerHTML) {  
                square.innerHTML = currentPlayer;  // Set current player symbol
                square.classList.add(currentPlayer);  // Add class for styling
                checkWinner();  // Check for a winner after each move
                currentPlayer = (currentPlayer === "X") ? "O" : "X";  // Switch turns
            }
        });

        square.addEventListener("mouseover", function () {
            square.classList.add("hover");  // Add hover effect
        });

        square.addEventListener("mouseout", function () {
            square.classList.remove("hover");  // Remove hover effect
        });
    });

    // 7. Check for winner
    function checkWinner() {
        let winner = null;
        console.log("Checking for winner...");

        winningCombinations.forEach(combo => {
            const [a, b, c] = combo;
            console.log(`Checking combination: ${combo}`);

            if (
                squares[a].innerHTML !== "" && 
                squares[a].innerHTML === squares[b].innerHTML && 
                squares[a].innerHTML === squares[c].innerHTML
            ) {
                console.log(`We have a winner: ${squares[a].innerHTML}`);
                winner = squares[a].innerHTML;  // Set winner
            }
        });

        if (winner) {
            const status = document.getElementById("status");
            status.innerHTML = `Congratulations! ${winner} is the Winner!`;  // Update status with winner
            status.classList.add("you-won");  // Add class to highlight win
            console.log(`Updated status message with winner: ${winner}`);
        } else if (Array.from(squares).every(square => square.innerHTML !== "")) {
            // Check for a draw
            const status = document.getElementById("status");
            status.innerHTML = "It's a Draw!";  // Update status for a draw
            console.log("Game ended in a draw.");
        } else {
            console.log("No winner yet.");
        }
    }
});
