function plotWave() {
    var canvas = document.getElementById("wave") as HTMLCanvasElement;
    var ctx = canvas.getContext("2d");

    var width = ctx.canvas.width;
    var height = ctx.canvas.height;

    ctx.beginPath();

    var x = 0;
    var y = 0;
    var amplitude = 40;
    var frequency = 69;
    while (x < width) {
        y = height / 2 + amplitude * Math.sin(x / frequency);
        ctx.lineTo(x, y);
        x = x + 1;
    }
    ctx.lineTo(width, 0);
    ctx.lineTo(0, 0);
    ctx.lineTo(0, height);
    ctx.fillStyle = "#30BCED";
    ctx.fill();
}

function plotRiver() {
    var canvas = document.getElementById("river") as HTMLCanvasElement;
    var ctx = canvas.getContext("2d");

    var width = ctx.canvas.width;
    var height = ctx.canvas.height;

    ctx.beginPath();

    var x = 0;
    var y = 0;
    var amplitude = 20;
    var frequency = 35;
    while (y < height) {
        x = width / 2 + amplitude * Math.sin(y / frequency);
        ctx.lineTo(x - 100, y);
        y += 1;
    }

    var amplitude = 20;
    var frequency = 40;
    while (y > 0) {
        x = width / 2 + amplitude * Math.sin(y / frequency);
        ctx.lineTo(x + 100, y);
        y -= 1;
    }
    ctx.lineTo(0, 0);
    ctx.fillStyle = "#30BCED";
    ctx.fill();
}

function plotCanvas() {
    plotRiver();
    plotWave();
}

export default plotCanvas;