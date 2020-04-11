const fontSize = document.getElementById('font-size')
const sizesToConvert = document.getElementById('sizes-to-convert')
const calcButton = document.getElementById('calc-button')
const calcResults = document.getElementById('calc-results')
const form = document.querySelector('.container')

calcButton.addEventListener('click', () => {
    getCalculation()
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    getCalculation()
})

function getCalculation() {
    calcResults.innerHTML = ""
    if (fontSize.value && sizesToConvert.value) {
        const oneRem = (100 / fontSize.value) / 100
        console.log(sizesToConvert.value.split(','))
        sizesToConvert.value.split(',').forEach((size) => {
            let li = document.createElement('li')
            if (size == fontSize.value) {
                let result = document.createTextNode(`${size}px = ${parseInt(size) * oneRem}rem`)
                li.appendChild(result)
                let span = document.createElement('span')
                span.classList.add('bold')
                let base = document.createTextNode(' (Base)')
                span.appendChild(base)
                li.appendChild(span)
                calcResults.appendChild(li)
            } else {
                let result = document.createTextNode(`${size}px = ${parseInt(size) * oneRem}rem`)
                li.appendChild(result)
                calcResults.appendChild(li)
            }
        })
    } else {
        calcResults.innerHTML = "Enter a number please"
    }
}


// A really weird way using previousElementSibling
// calcButton.addEventListener('click', (e) => {
//     calcResults.innerHTML = ""
//     if (e.target.previousElementSibling.previousElementSibling.value) {
//         fontSizeNumber = e.target.previousElementSibling.previousElementSibling.value
//         oneRem = (100 / fontSizeNumber) / 100
//         convertListValues = e.target.previousElementSibling.value.split(",")
//         convertListValues.forEach((num) => {
//             console.log(parseInt(num) * oneRem)
//             let li = document.createElement('li')
//             let calc = document.createTextNode(parseInt(num) * oneRem)
//             li.appendChild(calc)
//             calcResults.appendChild(li)
//         })
//     } else {
//         calcResults.innerHTML = "Enter a number please"
//     }
// })
