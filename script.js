// Detect mobile devices
function isMobile() {
    return /Mobi|Android|iPhone/i.test(navigator.userAgent);
}

// Simulate fixed background effect on mobile
function setMobileBackgroundEffect() {
    if (isMobile()) {
        const body = document.body;
        const background = document.querySelector('body');
        const content = document.querySelector('.content');

        // Listen for scroll events to simulate the fixed background
        window.addEventListener('scroll', function() {
            let scrollPosition = window.scrollY;
            // Apply the scroll effect to the background
            background.style.backgroundPosition = 'center ' + (scrollPosition * 0.5) + 'px';
        });
    }
}

// Call the function when the page loads
window.onload = setMobileBackgroundEffect;
