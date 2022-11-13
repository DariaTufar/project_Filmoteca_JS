const lsTheme = 'FilmotekaTheme';
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', setTheme);
setThemeSwitcher();

function setThemeSwitcher() {
    if (localStorage.getItem(lsTheme))
        checkbox.checked = JSON.parse(localStorage.getItem(lsTheme));
    checkbox.dispatchEvent(new Event('change'));
}

function setTheme() {
    if (!document.body.classList.contains('dark', 'gallery__item-title--isDarkTheme') && checkbox.checked) {
        document.body.classList.add('dark', 'gallery__item-title--isDarkTheme');
    }
    if (document.body.classList.contains('dark', 'gallery__item-title--isDarkTheme') && !checkbox.checked) {
        document.body.classList.remove('dark', 'gallery__item-title--isDarkTheme');
    }

    localStorage.setItem(lsTheme, checkbox.checked);
}



// const checkbox = document.getElementById('checkbox');

// checkbox.addEventListener('change', () => {
//     document.body.classList.toggle('dark');
// })

