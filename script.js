let plane = document.querySelector('.plane');
let t = 0;

// Set turning points without
let start = {x: 0, y: 0};
let control1 = {x: 100, y: -50};
let control2 = {x: 300, y: 200};
let control3 = {x: 400, y: -300};
let control4 = {x: 400, y: 50};
let end = {x: 700, y: 0};

function getBezierPoint(t, start, control1, control2, control3, control4, end) {
  let x = Math.pow(1 - t, 5) * start.x +
          5 * Math.pow(1 - t, 4) * t * control1.x +
          10 * Math.pow(1 - t, 3) * Math.pow(t, 2) * control2.x +
          10 * Math.pow(1 - t, 2) * Math.pow(t, 3) * control3.x +
          5 * (1 - t) * Math.pow(t, 4) * control4.x +
          Math.pow(t, 5) * end.x;

  let y = Math.pow(1 - t, 5) * start.y +
          5 * Math.pow(1 - t, 4) * t * control1.y +
          10 * Math.pow(1 - t, 3) * Math.pow(t, 2) * control2.y +
          10 * Math.pow(1 - t, 2) * Math.pow(t, 3) * control3.y +
          5 * (1 - t) * Math.pow(t, 4) * control4.y +
          Math.pow(t, 5) * end.y;

  return {x: x, y: y};
}

function animate() {
  // Define the time step
  let dt = 0.00150;

  // Calculate the new coordinates for the plane
  let point = getBezierPoint(t, start, control1, control2, control3, control4, end);
  let x = point.x;
  let y = point.y;
  
  // Update aircraft position
  plane.style.transform = `translate(${x}px, ${y}px)`;

  t += dt;
  
  if (t >= 1) {
    t = 0;
  }
  
  // Animation again
  requestAnimationFrame(animate);
}

// Start animation
animate();


//You can add more points for the flight path