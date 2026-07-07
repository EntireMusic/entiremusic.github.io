const quackSound = new Audio('quack.mp3');
let quackTimeout;

// Функция для воспроизведения звука
function playQuack() {
    // Сбрасываем трек на начало, если он уже играет (чтобы крякало при каждом наведении)
    quackSound.currentTime = 0; 
    
    quackSound.play().catch(error => {
        console.log("Blocked by brouser:", error);
    });
}

const duckButton = document.getElementById('duckBtn');

// Наведение мыши
duckButton.addEventListener('mouseenter', () => {
    // Таймер 200 миллисекунд
    quackTimeout = setTimeout(() => {
        playQuack();
    }, 100); 
});

// Уход мыши
duckButton.addEventListener('mouseleave', () => {
    // Если мышка ушла раньше, отменяем таймер
    clearTimeout(quackTimeout);
});

// Клик
duckButton.addEventListener('click', () => {
    playQuack();
});
