// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 20 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particlesContainer.appendChild(particle);
    }
}

// Add keyboard shortcut listener
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.key.toLowerCase() === 'b') {
            event.preventDefault();
            window.location.href = 'https://classroom.google.com/';
            addToHistory("System", "Opened Google Classroom");
        }
        if (event.ctrlKey && event.key === '\\') {
            if (document.getElementById("adminHistoryContainer")) {
                const container = document.getElementById("adminHistoryContainer");
                if (container.style.display === "block") {
                    container.style.display = "none";
                    addToHistory("Admin", "Closed admin powers");
                    alert("Admin powers have been closed");
                }
            }
        }
    });
}

// Add smooth scroll behavior
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Initialize all common functionality
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    setupKeyboardShortcuts();
    setupSmoothScroll();
}); 