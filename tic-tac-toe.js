document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll("#board div");
    const gameState = Array(9).fill(null); // Track the state of the game
    let currentPlayer = 'X'; // Start with player X

    squares.forEach((square, index) => {
        square.classList.add("square");

        // Add click event listener to each square
        square.addEventListener("click", function() {
            // Check if the square is already filled
            if (gameState[index] !== null) return; 

            // Update the square's content and class
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer); // Add class "X" or "O"
            gameState[index] = currentPlayer; // Update game state

            // Toggle the current player
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        });
    });
});
