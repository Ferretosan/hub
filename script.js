// Navigation functions
function navigateToAstragames() {
    window.location.href = 'https://astragames.ferretosan.com';
}

function navigateToMainWebsite() {
    window.location.href = 'https://ferretosan.com';
}

function showComingSoon(gameName) {
    window.location.href = 'https://blackjack.ferretosan.com';
}

function navigateToMusic() {
    window.location.href = 'https://music.ferretosan.com';
}

// Notification popup functionality
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('notification-popup');
    const toggleButton = document.getElementById('popup-toggle');
    const popupHeader = document.querySelector('.popup-header');
    
    // Toggle popup collapse/expand
    function togglePopup() {
        popup.classList.toggle('collapsed');
    }
    
    // Add click event to toggle button
    toggleButton.addEventListener('click', function(e) {
        e.stopPropagation();
        togglePopup();
    });
    
    // Add click event to header (excluding toggle button)
    popupHeader.addEventListener('click', function(e) {
        if (e.target !== toggleButton && !toggleButton.contains(e.target)) {
            togglePopup();
        }
    });
    
    // Auto-show popup on load
    setTimeout(() => {
        popup.style.opacity = '1';
    }, 500);
});