// REGISTER EVENT FOR INPUT BOX + SELECT
var inputBox = document.getElementById("number")
var unitSelect = document.getElementById("unitSelect")

inputBox.addEventListener("input", updateNumbers)
unitSelect.addEventListener("input", updateNumbers)

// ADD COPY TO CLIPBOARD
document.querySelectorAll('.cube').forEach(item => {
    item.addEventListener('click', function (e) {
        var range = document.createRange()
        window.getSelection().removeAllRanges()
        if (e.target.className.split(' ')[0] == "cube") {
            range.selectNode(document.getElementById(e.target.childNodes[1].id))
            window.getSelection().addRange(range)
        } else {
            range.selectNode(document.getElementById(e.target.parentElement.childNodes[1].id))
            window.getSelection().addRange(range)
        }
        document.execCommand("copy")
        window.getSelection().removeAllRanges()
  })
})

function updateNumbers() {
    let inputNumber = parseFloat(inputBox.value)
    let squaremeter = inputNumber * parseFloat(unitSelect.value)
    
    document.getElementById("mm²").innerHTML = (parseFloat(squaremeter) * 1000000).toPrecision(4)
    document.getElementById("cm²").innerHTML = (parseFloat(squaremeter) * 10000).toPrecision(4)
    document.getElementById("dm²").innerHTML = (parseFloat(squaremeter) * 100).toPrecision(4)
    document.getElementById("m²").innerHTML = (parseFloat(squaremeter) * 1).toPrecision(4)
    
    document.getElementById("ar").innerHTML = (parseFloat(squaremeter) / 100).toPrecision(4)
    document.getElementById("ha").innerHTML = (parseFloat(squaremeter) / 10000).toPrecision(4)
    document.getElementById("km²").innerHTML = (parseFloat(squaremeter) / 1000000).toPrecision(4)
    
    document.getElementById("in²").innerHTML = (parseFloat(squaremeter) * 1550.003).toPrecision(4)
    document.getElementById("ft²").innerHTML = (parseFloat(squaremeter) * 1.0936).toPrecision(4)
    document.getElementById("yd²").innerHTML = (parseFloat(squaremeter) * 10.76391).toPrecision(4)
    document.getElementById("mi²").innerHTML = (parseFloat(squaremeter) * 2589988).toPrecision(4)
}
