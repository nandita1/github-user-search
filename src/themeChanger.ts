const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

const changeTheme = (isDarkPreferred: boolean) => {
    if(isDarkPreferred) {
        document.body.className = 'dark'
    } else {
        document.body.className = ''
    }
}

darkModeMediaQuery.addEventListener('change', (e) => {
    changeTheme(e.matches);
});

changeTheme(darkModeMediaQuery.matches)

const darkThemeToggler = document.getElementById('toggle-dark-theme')
darkThemeToggler?.addEventListener('click', () => {
    changeTheme(true)
})

const lightThemeToggler = document.getElementById('toggle-light-theme')
lightThemeToggler?.addEventListener('click', () => {
    changeTheme(false)
})