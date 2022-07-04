var block = document.getElementById('loginBlock');

function changeBgImg() {
    block.style.backgroundImage = "url(images/background_" + Math.floor(Math.random() * 4) + ".webp";
}

changeBgImg();