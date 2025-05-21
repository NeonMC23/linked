const canvas = document.getElementById("background-canvas");
const ctx = canvas.getContext("2d");

let leaves = [];
const leafCount = 40;
const colors = ["#aaff00", "#88ff44", "#ccff00", "#00ff88"];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

class Leaf {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 2 + 1;
    this.speedY = Math.random() * 1 + 0.5;
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  update() {
    this.y += this.speedY;
    if (this.y > canvas.height) this.reset();
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

for (let i = 0; i < leafCount; i++) {
  leaves.push(new Leaf());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let leaf of leaves) {
    leaf.update();
    leaf.draw();
  }
  requestAnimationFrame(animate);
}

animate();
