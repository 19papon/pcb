const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const emoji = document.getElementById('emoji');
const question = document.getElementById('question');
const videoSection = document.getElementById('videoSection');
const myVideo = document.getElementById('myVideo');

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
    question.innerHTML = "love you kanmani! 😘";
    
    document.getElementById('btnGroup').style.display = 'none';

    videoSection.style.display = 'block';
    myVideo.play();

    
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
});
