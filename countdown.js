
function startCountdown() {
    const targetDate = new Date(Date.now() + 5000).getTime();
    const countdown = document.getElementById("countdown");
    const container = document.getElementById("container");

    const interval = setInterval(() => {
        const diff = targetDate - Date.now();

      if (diff <= 0) {
    countdown.innerHTML = "";
    clearInterval(interval);


    showJSButtons(container);
    mainBallStart();
    return;
}

        const s = Math.floor((diff / 1000) % 60);
        countdown.innerHTML = `${s}s`;
    }, 1000);
}



startCountdown();

/*  FALLING BALLS  */
function createFallingBalls(count = 120) {
    const container = document.getElementById("container");
    for (let i = 0; i < count; i++) {
        const ball = document.createElement("div");
        ball.className = "falling-ball";
        ball.style.left = Math.random() * 100 + "vw";
        ball.style.animationDuration = 3 + Math.random() * 4 + "s";
        ball.style.animationDelay = Math.random() * 5 + "s";
        container.appendChild(ball);
    }
}
createFallingBalls();

/*  MAIN BALL */
const mainBall = document.getElementById("mainBall");
function mainBallStart() {
    mainBall.style.display = "block";
    mainBall.addEventListener("animationend", () => {
        mainBall.style.display = "none";
        explodeBall();
    }, { once: true });
}

/* EXPLOSION  */
function explodeBall() {
    const container = document.getElementById("container");
    for (let i = 0; i < 60; i++) {
        const piece = document.createElement("div");
        piece.className = "piece";
        piece.style.left = "50%";
        piece.style.top = "50%";
        container.appendChild(piece);
        piece.animate(
            [
                { transform: "translate(0,0)", opacity: 1 },
                { transform: `translate(${(Math.random() - 0.5) * 600}px, ${Math.random() * 600}px)`, opacity: 0 }
            ],
            { duration: 1800, easing: "ease-out", fill: "forwards" }
        );
    }

    setTimeout(showText, 1800);
}
/*typewriter*/
/* SHOW TEXT */
function showText() {
    const text = document.getElementById("text");
    text.innerHTML = "";
    typewriter("HAPPY BIRTHDAY ✨", text);
}
function typewriter(msg, el) {
    let i = 0;
    const interval = setInterval(() => {
        el.innerHTML += msg[i];
        i++;

        if (i === msg.length) {
            clearInterval(interval);


            createTextBorderBalls(el);
        }
    }, 120);
}
/*  TEXT BORDER BALLS */
function createTextBorderBalls(el) {
    const container = document.getElementById("container");
    const rect = el.getBoundingClientRect();
    const gap = 18;

    // Top and Bottom
    for (let x = rect.left; x <= rect.right; x += gap) {
        spawnBorderBall(x, rect.top - 20, "outer");
        spawnBorderBall(x, rect.bottom + 10, "outer");
    }
    // Left and Right
    for (let y = rect.top; y <= rect.bottom; y += gap) {
        spawnBorderBall(rect.left - 20, y, "outer");
        spawnBorderBall(rect.right + 10, y, "outer");
    }
}

function spawnBorderBall(x, y, cls = "") {
    const b = document.createElement("div");
    b.className = "text-border-ball";
    if (cls) b.classList.add(cls);
    b.style.left = x + "px";
    b.style.top = y + "px";
    document.getElementById("container").appendChild(b);
}

/*JS BUTTONS AT BOTTOM AFTER COUNTDOWN */
function showJSButtons(container) {
    const box = document.createElement("div");
    box.id = "choiceButtons";
    box.style.position = "fixed";
    box.style.bottom = "30px";
    box.style.left = "50%";
    box.style.transform = "translateX(-50%)";
    box.style.display = "flex";
    box.style.gap = "25px";

    ["Page 1", "Page 2"].forEach((t, i) => {
        const btn = document.createElement("button");
        btn.textContent = t;

        btn.onclick = () => {
            window.location.href = i === 0 ? "page1.html" : "page2.html";
        };

        box.appendChild(btn);
    });


    container.appendChild(box);
}
