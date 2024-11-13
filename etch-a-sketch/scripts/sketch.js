let square_grid = document.getElementById('square_grid');
let create_grid_button = document.querySelector('#create_grid');
let grid_size_input = document.getElementById('type_grid_size');
let delete_grid_button = document.querySelector('#delete_grid');
let grid_size = 0

create_grid_button.addEventListener('click', () => {
    square_grid.innerHTML = '';
    grid_size = grid_size_input.value;
    if (grid_size > 100){
        alert("Grid size should not exceed 100");
        return;
    }
    create_grid(grid_size);

})


delete_grid_button.addEventListener('click', () =>{
    square_grid.style.border = '';
    square_grid.innerHTML = '';

})


function create_grid (grid_size){


    for (let j = 0; j < grid_size; j++){

        let new_row = document.createElement('div')
        new_row.classList.add('row');

        for (let i = 0; i < grid_size; i++){
            let square = document.createElement('div');
            square.classList.add('square');
    
            new_row.appendChild(square);
            

            square.addEventListener('mouseover', () => {
                let count = parseFloat(square.dataset.count) || 0;


                square.style.opacity = count;
                count += 0.1;
                square.dataset.count = count;
        

            })
    
        }

        square_grid.appendChild(new_row);

    
    }
    square_grid.style.width = grid_size * 16 + 'px';
    square_grid.style.border = '1px solid black'

}




