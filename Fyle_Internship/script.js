
function changeImage(imagePath, element) {
    document.getElementById('projectImage').src = imagePath;
    const items = document.querySelectorAll('.project-item');
    items.forEach(item => item.classList.remove('active'));
    element.classList.add('active');
}


document.addEventListener('DOMContentLoaded', function () {
    const dots = document.querySelectorAll('.dot');
    const serviceItems = document.querySelectorAll('.service-item');

    serviceItems.forEach((item, index) => {
        item.addEventListener('mouseover', () => {
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
        });
    });
});
