//Get the needed object from HTML
const sections = document.querySelectorAll('section');
const focus = document.querySelector('.focus');

//Initialize options to animate the NavNar
const options = { threshold: 0.7 };

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        };

        if (entry.isIntersecting) { //Interpolates the gradients to determine the "focus" color
            focus.style.setProperty("height", `${directions.height}px`);
            focus.style.setProperty("width", `${directions.width}px`);
            focus.style.setProperty("top", `${directions.top}px`);
            focus.style.setProperty("left", `${directions.left}px`);
        }
    });
}

sections.forEach(section => {
    observer.observe(section);
});