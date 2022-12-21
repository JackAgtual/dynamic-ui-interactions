const mainMenus = document.querySelectorAll('.main-menu-item');
mainMenus.forEach(mainMenu => {
    mainMenu.addEventListener('mouseover', () => {
        mainMenu.nextElementSibling.classList.remove('hidden')
    })

    mainMenu.addEventListener('mouseleave', () => {
        mainMenu.nextElementSibling.classList.add('hidden')
    })
})