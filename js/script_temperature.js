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
    let celsius
    switch (unitSelect.value) {
        case "cel":
            celsius = inputNumber
            break
        case "fah":
            celsius = (inputNumber - 32) * 5/9
            break
        case "kel":
            celsius = inputNumber - 273.15
            break
        case "ran":
            celsius = (inputNumber - 491.67) * 5/9
            break
        case "del":
            celsius = 100 - inputNumber * 2/3
            break
        case "new":
            celsius = inputNumber * 100/33
            break
        case "rea":
            celsius = inputNumber * 5/4
            break
        case "rom":
            celsius = (inputNumber - 7.5) * 40/21
            break
    } 
    
    
    
    document.getElementById("cel").innerHTML = (parseFloat(celsius) * 1).toPrecision(4)
    document.getElementById("fah").innerHTML = (parseFloat(celsius) * 9/5 + 32).toPrecision(4)
    document.getElementById("kel").innerHTML = (parseFloat(celsius) + 273.15).toPrecision(4)
    document.getElementById("ran").innerHTML = ((parseFloat(celsius) + 273.15) * (9/5)).toPrecision(4)
    document.getElementById("del").innerHTML = ((100 - parseFloat(celsius)) * (3/2)).toPrecision(4)
    document.getElementById("new").innerHTML = (parseFloat(celsius) * 33/100).toPrecision(4)
    document.getElementById("rea").innerHTML = (parseFloat(celsius) * 4/5).toPrecision(4)
    document.getElementById("rom").innerHTML = (parseFloat(celsius) * 21/40 + 7.5).toPrecision(4)
}
