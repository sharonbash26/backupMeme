'use strict'

let gElCanvas
let gCtx
function onInit() {
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
    renderMeme()
}

function renderMeme() {
    var imgs = getImgs()
    var strHTML = imgs.map(img => `
    <img src="imgs1/${img.id}.jpg" onclick="goToEditor(${img.id})">`)
    document.querySelector('.gallery').innerHTML = strHTML.join('')
}

var elTextEdit = document.getElementById("my-text");
elTextEdit.style.display = 'block'

elTextEdit.addEventListener("input", function () {
    var userText = elTextEdit.value

    drawCanvas(img, userText)
});
function goToEditor(imgId) {
    var elPart2 = document.querySelector(".part2")
    elPart2.style.display = "block"
    var elGallerySection = document.querySelector(".gallery")
    elGallerySection.style.display = "none"
    console.log(imgId)
    var canvas = document.getElementById("my-canvas")
    var ctx = canvas.getContext("2d")

    var img = new Image()
    img.src = "imgs1/" + imgId + ".jpg"

    img.onload = function () {
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img, 0, 0)
        ctx.fillStyle = "white"
        ctx.font = "50px Arial"


        var elTextEdit = document.getElementById("my-text")
        elTextEdit.style.display = 'block'
        elTextEdit.addEventListener("input", function () {
            var userText = elTextEdit.value

            drawCanvas(img, userText)
        });

    }
}

function drawCanvas(img, userText) {
    var canvas = document.getElementById("my-canvas")
    var ctx = canvas.getContext("2d")

    canvas.width = img.width
    canvas.height = img.height
    ctx.drawImage(img, 0, 0)

    ctx.fillStyle = "white"
    ctx.font = "50px Arial"
    ctx.fillText(userText, 50, 50)

}

function save() {

}

function downloadImg(elLink) {
    
    const imgContent = gElCanvas.toDataURL('image/jpeg') // image/jpeg the default format
    elLink.href = imgContent
}







function goBack() {
    var elPart2 = document.querySelector(".part2")
    elPart2.style.display = "none"
    var elGallerySection = document.querySelector(".gallery")
    elGallerySection.style.display = "block"
}
function onIncreaseFontSize() {
    var elText = document.getElementById("my-text")
    var fontSize = elText.style.fontSize
    var fontSizeNumric = parseFloat(fontSize)
    var elBtnIncrease = document.querySelector(".increaseFontSizeBtn")
    elBtnIncrease.addEventListener("click", () => {
        fontSizeNumric++
        elText.style.fontSize = fontSizeNumric + 'px'
        console.log('nu', fontSizeNumric)
    })
}

function onDecreaseFontSize() {
    console.log('d')
    var elText = document.getElementById("my-text")
    var fontSize = elText.style.fontSize
    var fontSizeNumric = parseFloat(fontSize)
    var elBtnIncrease = document.querySelector(".decreaseFontSizeBtn")
    elBtnIncrease.addEventListener("click", () => {
        fontSizeNumric--
        elText.style.fontSize = fontSizeNumric + 'px'
        console.log('nu', fontSizeNumric)
    })
}

function handleColorInput(selectColor) {
    console.log('sel', selectColor)
    var elText = document.getElementById("my-text")
    elText.style.color = selectColor

}

function changeText() {
    var elText = document.getElementById("my-text")
    var usersText = elText.value
    setLineTxt(usersText)

}
//update sharon 24.8 02:24 
