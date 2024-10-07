const darkModeToggle = document.getElementById('darkmode-toggle');

darkModeToggle.addEventListener('change', () => {
    // Ajoute ou retire la classe 'dark-mode' au body
    document.body.classList.toggle('dark-mode');
    document.querySelector('.card').classList.toggle('dark-mode');
    document.querySelector('.imgcard').classList.toggle('dark-mode');
    document.querySelector('.importimg').classList.toggle('dark-mode');
    document.querySelector('.exportimg').classList.toggle('dark-mode');
});