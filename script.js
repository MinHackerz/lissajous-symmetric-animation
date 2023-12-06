const canvas = document.getElementById('lissajousCanvas');
const ctx = canvas.getContext('2d');

// Adjust canvas size
canvas.width = 1080; // Set to the desired width
canvas.height = 1920; // Set to the desired height

// Lissajous curve parameters
const a = 5; // Frequency of the first curve along the x-axis
const b = 4; // Frequency of the first curve along the y-axis
const c = 3; // Frequency of the second curve along the x-axis
const d = 2; // Frequency of the second curve along the y-axis

let radiusMultiplier = 0; // Initial value for radiusMultiplier

function draw(time) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();

  radiusMultiplier += 0.001; // Gradually increase the multiplier

  for (let t = 0; t <= Math.PI * 2; t += 0.01) {
    const x1 = canvas.width / 2 + 100 * radiusMultiplier * Math.sin(a * t + time);
    const y1 = canvas.height / 2 + 100 * radiusMultiplier * Math.sin(b * t + time);

    const x2 = canvas.width / 2 + 100 * radiusMultiplier * Math.sin(c * t - time);
    const y2 = canvas.height / 2 + 100 * radiusMultiplier * Math.sin(d * t - time);

    // Generate different colors for each symmetric curve
    const hue1 = (time * 20 + t * 100) % 360;
    const hue2 = (time * 15 + t * 100) % 360;

    ctx.strokeStyle = `hsl(${hue1}, 70%, 50%)`;
    ctx.lineTo(x1, y1);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = `hsl(${hue2}, 70%, 50%)`;
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  requestAnimationFrame((newTime) => draw(newTime * 0.001));
}

draw(0);
