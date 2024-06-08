// Get references to the close button and menu toggle checkbox
const closeBtn = document.getElementById('close-btn');
const menuToggle = document.getElementById('menu-toggle');

// Add event listener to close button
closeBtn.addEventListener('click', function() {
    // Uncheck the menu toggle checkbox
    menuToggle.checked = false;
    // Focus back to the menu toggle checkbox after closing the menu
    menuToggle.focus();
});

// Add event listener to close button to manage focus
closeBtn.addEventListener('focus', function() {
    // Ensure the close button is always visible when it receives focus
    this.scrollIntoView();
});
