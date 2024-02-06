document.addEventListener('DOMContentLoaded', () => {
    // Access the checkbox for theme toggling
    const themeToggleCheckbox = document.getElementById('theme-toggle');
    
    // Check if a theme preference is saved in localStorage and apply it
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        
        // If the current theme is dark, check the toggle switch
        if (currentTheme === 'dark') {
            themeToggleCheckbox.checked = true;
        }
    }
    
    // Listen for changes on the toggle checkbox to switch themes
    themeToggleCheckbox.addEventListener('change', () => {
        let theme = 'light'; // Default to light theme
        
        // If the toggle is checked, switch to dark theme
        if (themeToggleCheckbox.checked) {
            theme = 'dark';
        }
        
        // Apply the selected theme to the document
        document.documentElement.setAttribute('data-theme', theme);
        
        // Save the selected theme preference to localStorage
        localStorage.setItem('theme', theme);
    });
});