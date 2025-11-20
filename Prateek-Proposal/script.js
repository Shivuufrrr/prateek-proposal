// Typing animation
let msg = "Prateek, will you be my boyfriend? 💘";
let i = 0;
let speed = 80;

function typing() {
    if (i < msg.length) {
        document.getElementById("typing-text").innerHTML += msg.charAt(i);
        i++;
        setTimeout(typing, speed);
    }
}
typing();

// No button moving like crazy
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", () => {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// YES button triggers popup + fireworks
document.getElementById("yesBtn").addEventListener("click", () => {
    document.getElementById("popup").style.display = "flex";
    startFireworks();
});

// Fireworks animation
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function startFireworks() {
    setInterval(() => {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        createFirework(x, y);
    }, 300);
}

function createFirework(x, y) {
    for (let i = 0; i < 40; i++) {
        particles.push({
            x: x,
            y: y,
            speedX: (Math.random() - 0.5) * 4,
            speedY: (Math.random() - 0.5) * 4,
            size: Math.random() * 4,
            life: 100
        });
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, index) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.life--;

        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (p.life <= 0) particles.splice(index, 1);
    });

    requestAnimationFrame(animate);
}
animate();
