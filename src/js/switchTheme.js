const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme"
};

const refs = {
    body: document.querySelector('body'),
    input: document.querySelector('#theme-switch-toggle'),
};

refs.body.classList.add(Theme.LIGHT);
refs.input.addEventListener('change', themeToggleHandler);
document.addEventListener('DOMContentLoaded', getLocalStorageTheme);

function themeToggleHandler() {
    if (refs.input.checked) {
        localStorage.setItem('theme', Theme.DARK);
        refs.body.classList.replace (Theme.LIGHT, Theme.DARK);
    } else {
        localStorage.setItem('theme', Theme.LIGHT);
        refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    }
}

function getLocalStorageTheme() {
    const currentTheme = localStorage.getItem('theme');
  if (currentTheme === Theme.DARK) {
    refs.body.classList.replace (Theme.LIGHT, Theme.DARK);
    refs.input.checked = true;
  }
}

