document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('click', () => {
            project.style.transform = 'scale(1.05)';
            setTimeout(() => project.style.transform = 'scale(1)', 200);
        });
    });
});

tsParticles.load("particles-js", {
  fullScreen: { enable: true, zIndex: 0 },
  particles: {
    number: { value: 60 },
    color: { value: ["#2980b9", "#1abc9c", "#f39c12"] },
    shape: { type: "circle" },
    opacity: { value: 0.6 },
    size: { value: { min: 1, max: 4 } },
    move: { enable: true, speed: 1.5, direction: "none", outMode: "bounce" },
    links: { enable: true, distance: 120, color: "#2980b9", opacity: 0.3, width: 1 }
  },
  interactivity: {
    events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: true, mode: "push" } }
  },
  detectRetina: true
});
