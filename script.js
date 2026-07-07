const quackSound = new Audio('quack.mp3');

// Play Quack sound
function playQuack() {
    // .catch() обязателен, чтобы отловить блокировку браузером
    quackSound.play().catch(error => {
        console.log("Blocked by browser:", error);
    });
}

// Привязываем воспроизведение к клику на кнопку
document.getElementById('duckBtn').addEventListener('click', () => {
    playNotification();
});
