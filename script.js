function scrollProjects(distance) {
    document.querySelector('.project-container').scrollBy({
        left: distance,
        behavior: 'smooth'
    });
}

// Toggle mobile menu
document.querySelector('.hamburger-menu').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('active');
});
function scrollProjects(direction) {
    const container = document.querySelector('.project-container');
    container.scrollBy({
        left: direction,
        behavior: 'smooth'
    });
}