const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]
const links = document.getElementsByTagName('ul')

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    links.classList.toggle('active')
})

//anjing