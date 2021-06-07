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
    let meter = inputNumber * parseFloat(unitSelect.value)
    
    
    
    document.getElementById("nm").innerHTML = (parseFloat(meter) * 1000000000).toPrecision(4)
    document.getElementById("µm").innerHTML = (parseFloat(meter) * 1000000).toPrecision(4)
    document.getElementById("mm").innerHTML = (parseFloat(meter) * 1000).toPrecision(4)
    document.getElementById("cm").innerHTML = (parseFloat(meter) * 100).toPrecision(4)
    document.getElementById("dm").innerHTML = (parseFloat(meter) * 10).toPrecision(4)
    document.getElementById("m").innerHTML = (parseFloat(meter) * 1).toPrecision(4)
    // ----------------------------------------------------------------------
    document.getElementById("hm").innerHTML = (parseFloat(meter) / 100).toPrecision(4)
    document.getElementById("km").innerHTML = (parseFloat(meter) / 1000).toPrecision(4)
    // ----------------------------------------------------------------------
    document.getElementById("in").innerHTML = (parseFloat(meter) * 39.37).toPrecision(4)
    document.getElementById("ft").innerHTML = (parseFloat(meter) * 3.28).toPrecision(4)
    document.getElementById("yd").innerHTML = (parseFloat(meter) * 1.0936).toPrecision(4)
    // ----------------------------------------------------------------------
    document.getElementById("mi").innerHTML = (parseFloat(meter) / 1609.344).toPrecision(4)
}
