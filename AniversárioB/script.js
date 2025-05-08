const carta = document.getElementById('carta');
const heartsContainer = document.getElementById('hearts-container');

if (carta) {
    carta.addEventListener('click', () => {
        carta.classList.toggle('aberta');

        if (carta.classList.contains('aberta')) {
            for (let i = 0; i < 10; i++) {
                createHeart();
            }
        }
    });
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // posição aleatória dentro da largura da carta
    const leftPosition = Math.random() * 100;
    heart.style.left = `${leftPosition}%`;
    heart.style.animationDuration = `${5 + Math.random()}s`;

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}
