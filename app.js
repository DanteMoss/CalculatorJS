window.addEventListener('load', () => { //evento para escuchar cuando se carga el HTML
    const display = document.querySelector('.result');
    const KeypadButtons = document.getElementsByTagName('button');


    const KeypadButtonsArray = Array.from(KeypadButtons);


    KeypadButtonsArray.forEach( (button) => {
        button.addEventListener('click', () =>{
            calculadora(button, display)
        });
    })


    document.addEventListener("keydown", function(event) {
        if (event.key == 'Escape') {
            display.innerHTML = 0
        }
    })
})

//FUNCTIONS


function calculadora(button, display) {
    switch (button.innerHTML) {
        case 'C':
            borrar(display)
            break;
        case '=':
            calcular(display)
            break;
    
        default:
            actualizar(display, button)
            break;
    }
}

function calcular (display) {
     display.innerHTML = eval(display.innerHTML) //resuelve la operacion dentro del display 
}


function actualizar (display, button) {
    if (display.innerHTML == 0) {
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
}


function borrar(display) {
    display.innerHTML = 0
}




