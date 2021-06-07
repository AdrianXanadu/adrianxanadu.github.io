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
    let cubicmetre = inputNumber * parseFloat(unitSelect.value)
    
    
    document.getElementById("ml").innerHTML = (parseFloat(cubicmetre) * 1000000).toPrecision(4)
    document.getElementById("l").innerHTML = (parseFloat(cubicmetre) * 1000).toPrecision(4)
    document.getElementById("hl").innerHTML = (parseFloat(cubicmetre) * 1).toPrecision(4)
    document.getElementById("mm³").innerHTML = (parseFloat(cubicmetre) * 1000000000).toPrecision(4)
    document.getElementById("cm³").innerHTML = (parseFloat(cubicmetre) * 1000000).toPrecision(4)
    document.getElementById("dm³").innerHTML = (parseFloat(cubicmetre) * 1000).toPrecision(4)
    document.getElementById("m³").innerHTML = (parseFloat(cubicmetre) * 1).toPrecision(4)
    document.getElementById("km³").innerHTML = (parseFloat(cubicmetre) / 1000000000).toPrecision(4)
    
    document.getElementById("in³").innerHTML = (parseFloat(cubicmetre) * 61023.744).toPrecision(4)
    document.getElementById("gal").innerHTML = (parseFloat(cubicmetre) * 219.96925).toPrecision(4)
    document.getElementById("pt").innerHTML = (parseFloat(cubicmetre) * 1759.7540 ).toPrecision(4)
}
