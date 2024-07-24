document.addEventListener('DOMContentLoaded', () => {
    const resumeSections = document.querySelectorAll('#resume section');
    window.addEventListener('scroll', () => {
        resumeSections.forEach(section => {
            const sectionPosition = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            if (sectionPosition < screenPosition) {
                section.classList.add('visible');
            }
        });
    });
});
