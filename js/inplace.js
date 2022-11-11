const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {
        const square2 = entry.target.querySelector(".square2")

        if (entry.isIntersecting) {

            entry.target.classList.add('square-animation');
            return;
        }
        else {
            entry.target.classList.remove('square-animation');
        }
    });
});

observer.observe(document.querySelector('.square'));


const observer2 = new IntersectionObserver(entries => {

    entries.forEach(entry => {
        const square2 = entry.target.querySelector(".square2")

        if (entry.isIntersecting) {

            entry.target.classList.add('square-animation2');
            return;
        }
        else {
            entry.target.classList.remove('square-animation2');
        }
    });
});

observer2.observe(document.querySelector('.square2'));

const observer3 = new IntersectionObserver(entries => {

    entries.forEach(entry => {
        const square2 = entry.target.querySelector(".fade-in-js")

        if (entry.isIntersecting) {

            entry.target.classList.add('square-animation2');
            return;
        }
        else {
            entry.target.classList.remove('square-animation2');
        }
    });
});

observer3.observe(document.querySelector('.fade-in-js'));
