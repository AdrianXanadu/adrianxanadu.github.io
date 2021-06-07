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
    let gram = inputNumber * parseFloat(unitSelect.value)
    
    
    
    document.getElementById("ng").innerHTML = (parseFloat(gram) * 1000000000).toPrecision(4)
    document.getElementById("µg").innerHTML = (parseFloat(gram) * 1000000).toPrecision(4)
    document.getElementById("mg").innerHTML = (parseFloat(gram) * 1000).toPrecision(4)
    document.getElementById("g").innerHTML = (parseFloat(gram) * 1).toPrecision(4)
    document.getElementById("dag").innerHTML = (parseFloat(gram) / 10).toPrecision(4)
    document.getElementById("kg").innerHTML = (parseFloat(gram) / 1000).toPrecision(4)
    document.getElementById("t").innerHTML = (parseFloat(gram) / 1000000).toPrecision(4)
    document.getElementById("lb").innerHTML = (parseFloat(gram) / 453.5924).toPrecision(4)
    document.getElementById("oz").innerHTML = (parseFloat(gram) / 28.34952).toPrecision(4)
    document.getElementById("st").innerHTML = (parseFloat(gram) / 6350.293).toPrecision(4)
}
