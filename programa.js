function printar(color, brightness) {
    document.body.style.background = `hsl(${color}deg, 100%, ${brightness}%)`;
}

function alteraCor(event) {
    let x = event.x;
    let y = event.y;

    let w = window.innerWidth;
    let h = window.innerHeight;

    console.log("POS", event.x, "::", event.y);

    let cor = event.x / w * 360;
    let brilho = (h - event.y) / h * 100;

    printar(cor, brilho);
}

window.addEventListener("mousemove", alteraCor);