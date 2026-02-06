const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const emoji = document.getElementById('emoji');
const question = document.getElementById('question');

const youtubeURL = "https://youtube.com/shorts/mO659PD4Vk8?si=kjIyen-J1X1Of9hV";

function moveNoButton() {
    emoji.innerText = '😭'; 

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const padding = 20;
    const maxX = window.innerWidth - btnWidth - padding;
    const maxY = window.innerHeight - btnHeight - padding;

    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    noBtn.style.position = 'fixed';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); 
    moveNoButton();
});

yesBtn.addEventListener('click', () => {
    emoji.innerText = '🥰';
    question.innerHTML = "love you kanmani!";
    document.getElementById('btnGroup').style.display = 'none';

    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });

    setTimeout(() => {
        window.open(youtubeURL, "_blank");
    }, 3000);
});

function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.top = '-20px';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 15 + 15 + 'px';
    heart.style.animation = `fall ${Math.random() * 2 + 3}s linear forwards`;
    heart.style.color = '#ff4d6d';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

const style = document.createElement('style');
style.innerHTML = `@keyframes fall { to { transform: translateY(110vh) rotate(360deg); opacity: 0; } }`;
document.head.appendChild(style);

setInterval(createHeart, 400);

