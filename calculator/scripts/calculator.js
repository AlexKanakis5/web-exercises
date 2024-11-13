// DECIMALS NOT WORKING

let buttons = document.querySelectorAll('.number_button');
let screen = document.getElementById('screen');
let clear_button = document.querySelector('.clear_button')
let current_text = '';
let calculation_result = 0;

clear_button.addEventListener('click', () => {
    current_text = '';
    screen.textContent = '';
    return
})


buttons.forEach(button => {
    button.addEventListener('click', () =>{

        if (button.textContent === '='){
            calculation_result = do_calculation(current_text);
            screen.textContent = calculation_result;
            current_text = calculation_result;
            calculation_result = 0;
            return;
        }
        
        current_text += button.textContent;
        screen.textContent = current_text;
    })
})



let do_calculation = function(current_text){

    if (current_text === ''){
        console.log("current text empty")
        return 0;
    }

    const tokens = current_text.split(/(\d+|\+|\-|\*|\/)/g).filter(token => token !== '');

    let result = parseInt(tokens[0]);

    for (let i = 1; i < tokens.length; i+=2){

        let operator = tokens[i];
        let current_number = parseInt(tokens[i + 1]);

        if (operator === '+'){
            result += current_number;
        }
        else if(operator === '-'){
            result -= current_number;
        }
        else if(operator === '/'){
            result /= current_number;
        }
        else if(operator === '*'){
            result *= current_number;
        }
        else{
            console.log('invalid_operator');
            return result
        }

    }


    return parseFloat(result.toFixed(4));;
}