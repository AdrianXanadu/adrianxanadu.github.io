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
    let second = inputNumber * parseFloat(unitSelect.value)
    
    
    
    document.getElementById("ns").innerHTML = (parseFloat(second) * 1000000000)
    document.getElementById("µs").innerHTML = (parseFloat(second) * 1000000)
    document.getElementById("ms").innerHTML = (parseFloat(second) * 10)
    document.getElementById("s").innerHTML = (parseFloat(second) * 1)
    document.getElementById("m").innerHTML = (parseFloat(second) / 60)
    document.getElementById("h").innerHTML = (parseFloat(second) / 3600)
    document.getElementById("d").innerHTML = (parseFloat(second) / 86400)
    document.getElementById("week").innerHTML = (parseFloat(second) / 432000)
}
