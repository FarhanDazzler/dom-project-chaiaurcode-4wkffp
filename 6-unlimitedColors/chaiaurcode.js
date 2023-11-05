const start = document.getElementById('start');
const stop = document.getElementById('stop');

const randomColorGen = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
start.addEventListener('click', function () {
  intervalId = setInterval(startChangingColor, 1000);
});

const startChangingColor = function () {
  document.body.style.backgroundColor = randomColorGen();
};

const stopChangingColor = function () {
  clearInterval(intervalId);
};

document.querySelector('#stop').addEventListener('click', stopChangingColor);
