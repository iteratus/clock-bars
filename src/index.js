import './style.scss';

const elements = document.querySelectorAll('.clock > *');

const clock = () => {
  const date = new Date();

  const digits =
    `0${date.getHours()}`.slice(-2) +
    `0${date.getMinutes()}`.slice(-2) +
    `0${date.getSeconds()}`.slice(-2);

  elements.forEach((element, index) => {
    element.dataset.active = digits[index];
  });
};

setInterval(clock, 1000);
clock();
