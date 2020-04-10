const fontSize = document.getElementById('font-size')
const sizesToConvert = document.getElementById('sizes-to-convert')
const calcButton = document.getElementById('calc-button')
const calcResults = document.getElementById('calc-results')

calcButton.addEventListener('click', (e) => {
    calcResults.innerHTML = ""
    if (fontSize.value) {
        const oneRem = (100 / fontSize.value) / 100        
        sizesToConvert.value.split(',').forEach((size) => {
            let li = document.createElement('li')
            let result = document.createTextNode(parseInt(size) * oneRem)
            li.appendChild(result)
            calcResults.appendChild(li)
        })
    } else {
        calcResults.innerHTML = "Enter a number please"
    }
})




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
