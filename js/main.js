// находим на странице элементы

const squareInput = document.querySelector('#square-input')
const squareRange = document.querySelector('#square-range')
const inputs = document.querySelectorAll('input')

const basePrice = 6000;
const totalPriceElement = document.querySelector('#total-price')

// радиокнопки
const radioType = document.querySelectorAll('input[name="type"]')
const radioBuilding = document.querySelectorAll('input[name="building"]')
const radioRooms = document.querySelectorAll('input[name="rooms"]')

// чекбоксы
const ceilings = document.querySelector('input[name="ceiling"]')
const walls = document.querySelectorAll('input[name="walls"]')
const floor = document.querySelector('input[name="floor"]')

// связываем range с текстовым полем
// слушаем событие input

squareRange.addEventListener('input', function () {
    squareInput.value = squareRange.value
})

// связываем текстовое поле с range
squareInput.addEventListener('input', function () {
    squareRange.value = squareInput.value
})

function calculate () {
    let totalPrice = basePrice * parseInt(squareInput.value)
    console.log(totalPrice);

    for (const radio of radioType) {
        if(radio.checked) {
            totalPrice = totalPrice * parseFloat(radio.value)
        }
    }

    for (const radio of radioBuilding) {
        if(radio.checked) {
            totalPrice = totalPrice * parseFloat(radio.value)
            
        }
    }

    for (const radio of radioRooms) {
        if(radio.checked) {
            totalPrice = totalPrice * parseFloat(radio.value)
        }
    }

    if (ceilings.checked) {
        totalPrice = totalPrice * parseFloat(ceilings.value);
    }

    if (walls.checked) {
        totalPrice = totalPrice * parseFloat(walls.value)
    }

    if (floor.checked) {
        totalPrice = totalPrice * parseFloat(floor.value)
    }

    const formatter = new Intl.NumberFormat('ru')

    totalPriceElement.innerText = formatter.format(totalPrice)
}
calculate()


for (const input of inputs) {
    input.addEventListener('input', function () {
        calculate()
    })
}