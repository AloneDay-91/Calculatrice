var OperationCalcul = undefined

const clearButton = document.querySelector('[data-all-clear]')
const output = document.querySelector('[data-output]')
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')

let premier = true

function appendNumber(number) {
    //console.info(number)
    if (premier) {
        output.innerText = number
        premier = false
    } else {
        output.innerText = output.innerText + number
    }
}

function chooseOperation(operation) {
    if (output.innerText.includes('x') || output.innerText.includes('+') || output.innerText.includes('-') || output.innerText.includes('/') || output.innerText.includes('%')) {
        calcul()
    }
    OperationCalcul = operation
    output.innerText = output.innerText.toString() + ' ' + operation + ' '
}

function clear() {
    output.innerText = ''
    OperationCalcul = undefined
}

function calcul() {
    if (output.innerText === '') return
    let split = output.innerHTML.split(OperationCalcul)

    let nombre1 = parseFloat(split[0])
    let nombre2 = parseFloat(split[1])

    if (isNaN(nombre1) || isNaN(nombre2)) return

    let moncalcul;

    switch (OperationCalcul) {
        case '+':
            moncalcul = nombre1 + nombre2
            break
        case '-':
            moncalcul = nombre1 - nombre2
            break
        case 'x':
            moncalcul = nombre1 * nombre2
            break
        case '/':
            moncalcul = nombre1 / nombre2
            break
        case '%':
            moncalcul = nombre1 / 100
            break
        default:
            return
    }

    output.innerText = moncalcul
    OperationCalcul = undefined
}

clearButton.addEventListener('click', () => {
    //console.info('effacer')
    clear()
})

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        //console.info(button.innerText)
        appendNumber(button.innerText)
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        chooseOperation(button.innerText)
    })
})

equalsButton.addEventListener('click', button => {
    calcul()
})