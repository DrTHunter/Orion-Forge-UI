/**
 * Handles dark/light theme toggling for Orion Forge
 */
export class ThemeToggle {
  constructor() {
    this.themeToggleBtn = document.getElementById('themeToggle');
    this.init();
  }

  init() {
    // Set initial theme from localStorage or prefer-color-scheme
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');

    // Add event listener
    this.themeToggleBtn.addEventListener('click', () => this.toggleTheme());
  }

  toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
}
