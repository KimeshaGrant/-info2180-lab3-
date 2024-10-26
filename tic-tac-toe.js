document.addEventListener("DOMContentLoaded", function() {
    // Select all div elements inside the board
    const squares = document.querySelectorAll("#board div");
    let currentPlayer = "X";  // To track the current player (X or O)

    // Iterate over each square
    squares.forEach(square => {
        // Exercise 1: Add the 'square' class to each div inside the board
        square.classList.add("square");

        // Exercise 2: Add X or O when a square is clicked
        square.addEventListener("click", function() {
            if (!square.innerHTML) {  // Ensure the square is empty before allowing changes
                square.innerHTML = currentPlayer;  // Set current player's mark (X or O)
                square.classList.add(currentPlayer);  // Add the class for styling (X or O)
                currentPlayer = (currentPlayer === "X") ? "O" : "X";  // Switch turns
            }
        });

        // Exercise 3: Add event listener for mouse hover (mouseover)
        square.addEventListener("mouseover", function() {
            square.classList.add("hover");  // Add hover effect when mouse is over the square
        });

        // Remove hover effect when the mouse leaves the square
        square.addEventListener("mouseout", function() {
            square.classList.remove("hover");  // Remove hover effect when the mouse leaves
        });
    });
});
