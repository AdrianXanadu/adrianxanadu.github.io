// REGISTER EVENT FOR INPUT BOX + SELECT
var inputBox = document.getElementById("number")
var unitSelect = document.getElementById("unitSelect")

inputBox.addEventListener("input", updateTexts)
unitSelect.addEventListener("input", updateTexts)

// ADD COPY TO CLIPBOARD
document.querySelectorAll('.big-cube').forEach(item => {
    item.addEventListener('click', function (e) {
        var range = document.createRange()
        window.getSelection().removeAllRanges()
        if (e.target.className.split(' ')[0] == "big-cube") {
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

function updateTexts() {
    let inputText = inputBox.value
    let text
    
    switch (unitSelect.value) {
        case "text":
            text = inputText
            break
        case "binary":
            text = inputText.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('')
            break
        case "hex":
            text = convertHexToText(inputText)
            break
    }
    
    
    document.getElementById("text").innerHTML = text
    document.getElementById("binary").innerHTML = convertTextToBinary(text)
    document.getElementById("hex").innerHTML = convertTextToHex(text)
}

function convertTextToBinary(text) {
    
    let result = "";
    for (var i = 0; i < text.length; i++) {
        result += text[i].charCodeAt(0).toString(2) + " ";
    }
    return result
}



function convertHexToText(text) {
    let hex = text.toString()
    let str = ''
    for (let i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16))
    return str
}

function convertTextToHex(text) {
  let arr = []
  for (let i = 0, l = text.length; i < l; i ++) {
    let hex = Number(text.charCodeAt(i)).toString(16)
    arr.push(hex)
  }
  return arr.join('')
}

