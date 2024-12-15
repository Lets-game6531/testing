// Check if the device supports fixed background
function isMobileDevice() {
    return /Mobi|Android|iPhone/i.test(navigator.userAgent);
}

// Simulate background fixed effect on mobile
function fixBackgroundOnScroll() {
    if (isMobileDevice()) {
        const background = document.body;
        
        window.addEventListener('scroll', function() {
            let scrollPosition = window.scrollY;
            // Adjust the background position based on scroll
            background.style.backgroundPosition = 'center ' + (scrollPosition * 0.5) + 'px'; // Adjust speed (0.5) for a parallax effect
        });
    }
}

fixBackgroundOnScroll();
