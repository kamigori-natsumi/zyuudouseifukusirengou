document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggleButton');
    const drawerMenu = document.getElementById('drawerMenu');

    toggleButton.addEventListener('click', function (event) {
        event.stopPropagation(); 
        drawerMenu.classList.toggle('open');
        toggleButton.classList.toggle('close');
    });

    const anchorLinks = document.querySelectorAll('a');
    for (let i = 0; i < anchorLinks.length; i++) {
        anchorLinks[i].addEventListener('click', function () {
            drawerMenu.classList.remove('open');
            toggleButton.classList.remove('close');
        });
    }

    document.addEventListener('click', function (event) {
        const targetElement = event.target;
        
        if (drawerMenu.classList.contains('open') && !drawerMenu.contains(targetElement) && targetElement !== toggleButton) {
            drawerMenu.classList.remove('open');
            toggleButton.classList.remove('close');
        }
    });
});