import './style.css';

const elements = document.querySelectorAll(".clock > *");

const clock = () => {
    const date = new Date();

    const digets = [
        ...("0" + date.getHours()).slice(-2).split(""),
        ...("0" + date.getMinutes()).slice(-2).split(""),
        ...("0" + date.getSeconds()).slice(-2).split("")
    ];

    elements.forEach((element, index) => {
        element.dataset.active = digets[index];
    });
};

setInterval(clock, 1000);
clock();
