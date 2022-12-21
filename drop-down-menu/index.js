const hiddenClassName = 'hidden'

const mainMenus = document.querySelectorAll('.main-menu-item');
mainMenus.forEach(mainMenu => {
    mainMenu.addEventListener('mouseover', () => mainMenu.nextElementSibling.classList.remove(hiddenClassName))
    mainMenu.addEventListener('mouseleave', () => mainMenu.nextElementSibling.classList.add(hiddenClassName))
})

const subMenus = document.querySelectorAll('.sub-menu')
subMenus.forEach(subMenu => {
    subMenu.addEventListener('mouseover', () => subMenu.classList.remove(hiddenClassName))
    subMenu.addEventListener('mouseleave', () => subMenu.classList.add(hiddenClassName))
})