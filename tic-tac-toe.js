document.addEventListener('DOMContentLoaded', function() {
    let currentPlayer = 'X';
    const squares = document.querySelectorAll('#board div');
    const status = document.getElementById('status');

    // Set the initial board layout by adding the 'square' class
    squares.forEach(square => {
        square.classList.add('square');
    });

    // Add event listeners for clicking squares
    squares.forEach(square => {
        square.addEventListener('click', function() {
            if (square.textContent === '') {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                checkWinner();
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });

        // Add hover effect
        square.addEventListener('mouseover', function() {
            square.classList.add('hover');
        });

        square.addEventListener('mouseout', function() {
            square.classList.remove('hover');
        });
    });

    // Check for a winner
    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
            [0, 4, 8], [2, 4, 6]              // Diagonals
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (
                squares[a].textContent &&
                squares[a].textContent === squares[b].textContent &&
                squares[a].textContent === squares[c].textContent
            ) {
                status.textContent = `Congratulations! ${squares[a].textContent} is the Winner!`;
                status.classList.add('you-won');
                return;
            }
        }
    }

    // Restart the game
    document.querySelector('.btn').addEventListener('click', function() {
        squares.forEach(square => {
            square.textContent = '';
            square.classList.remove('X', 'O');
        });
        status.textContent = 'Move your mouse over a square and click to play an X or an O.';
        status.classList.remove('you-won');
        currentPlayer = 'X';
    });
});
