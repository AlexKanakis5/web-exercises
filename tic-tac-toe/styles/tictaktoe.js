let board_row_1 = document.getElementById('board_row_1');
let board_row_2 = document.getElementById('board_row_2');
let board_row_3 = document.getElementById('board_row_3');
let container = document.getElementById('container');
let board_container = document.getElementById('board_container');



let infoContainer = document.createElement('div');
infoContainer.classList.add('info-container');


let info = document.createElement('p');
info.classList.add('info');
info.textContent = 'Player 1 turn';
board_container.prepend(info);

let resetButton = document.createElement('button');
resetButton.classList.add('reset-button');
resetButton.textContent = 'Reset';
resetButton.addEventListener('click', resetBoard);


infoContainer.appendChild(info);
infoContainer.appendChild(resetButton);
board_container.prepend(infoContainer);




current_player = 1;

class ButtonConstructor {
    constructor() {
        this.board_square = document.createElement('button');
        this.board_square.classList.add('board_square');
        this.board_square.textContent = ''
        this.changed = false
        this.board_square.addEventListener('click', () => {

            if (!this.changed){
                if (current_player === 1) {
                    this.set_value_x();
                    current_player = 2;
                    this.board_square.style.color = 'blue';
                    update_text('Player 2 turn');
                } else {
                    this.set_value_o();
                    current_player = 1;
                    this.board_square.style.color = 'orange';
                    update_text('Player 1 turn');

                }
                this.changed = true

            }
            checkWin();
        });
    }

    set_value_x() {
        this.board_square.textContent = 'X'; // Update textContent on the button element
    }

    set_value_o() {
        this.board_square.textContent = 'O'; // Update textContent on the button element

    }

}

let button_array = []

for (let i = 0; i < 9; i++){
    button_array[i] = new ButtonConstructor();
}

for (let i = 0; i < 3; i++){
    board_row_1.appendChild(button_array[i].board_square);
    board_row_2.appendChild(button_array[i+3].board_square);
    board_row_3.appendChild(button_array[i+6].board_square);
}




function update_text(text){
    info.textContent = text;
}



function checkWin() {
    const win_combinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]             
    ];

    for (const combo of win_combinations) {
        const [a, b, c] = combo;
        if (
            button_array[a].board_square.textContent &&
            button_array[a].board_square.textContent === button_array[b].board_square.textContent &&
            button_array[a].board_square.textContent === button_array[c].board_square.textContent
        ) {
            update_text(`Player ${button_array[a].board_square.textContent === 'X' ? '1' : '2'} wins!`);
            disableBoard();
            return;
        }
    }
    
    if (button_array.every(button => button.changed)) {
        update_text('It\'s a draw!');
    }
}

function disableBoard() {
    button_array.forEach(button => button.board_square.disabled = true);
}


function resetBoard() {
    button_array.forEach(button => {
        button.board_square.textContent = '';
        button.board_square.disabled = false;
        button.changed = false;
        button.board_square.style.color = '';
    });
    current_player = 1;
    update_text('Player 1 turn');
}