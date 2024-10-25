document.addEventListener("DOMContentLoaded", function() {
    // Select all div elements inside the board
    const squares = document.querySelectorAll("#board div");

    // Loop through each div and add the "square" class
    squares.forEach(square => {
        square.classList.add("square");
    });
});
