import "./scss/main.scss";

const openMenuBtn = document.getElementById('open-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const fade = document.getElementById('fade');

const links = document.querySelectorAll('.navigation a');

openMenuBtn.addEventListener('click', () => {
    showMenu();
});

closeMenuBtn.addEventListener('click', () => {
    hideMenu();
})

const showMenu = () => {
    fade.style.display = 'block';

    openMenuBtn.classList.remove('shown');
    openMenuBtn.classList.add('hidden');
    closeMenuBtn.classList.remove('hidden');
    closeMenuBtn.classList.add('shown');
    
    document.querySelector('body').style.overflow = 'hidden';
}

const hideMenu = () => {
    fade.style.display = 'none';

    closeMenuBtn.classList.remove('shown');
    closeMenuBtn.classList.add('hidden');
    openMenuBtn.classList.remove('hidden');
    openMenuBtn.classList.add('shown');

    document.querySelector('body').style.overflow = 'auto';
}

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const sectionID = link.getAttribute('href');
        const section = document.querySelector(sectionID);

        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }

        hideMenu();
    });
});