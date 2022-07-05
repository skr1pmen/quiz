var block = document.getElementById('loginBlock');

function changeBgImg() {
    block.style.backgroundImage = "url(images/background_" + Math.floor(Math.random() * 4) + ".webp";
}

changeBgImg();

const code_room = document.getElementById('code_room');

function Codes() {
    code_room.innerHTML = "Комната #" + Math.floor(Math.random() * (9999 - 1000 + 1))
}

Codes();