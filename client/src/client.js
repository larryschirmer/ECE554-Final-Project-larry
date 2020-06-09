let sock;

const writeEvent = (text) => {
  //<ul> element
  const parent = document.querySelector('#events');

  //<li> element
  const el = document.createElement('li');
  el.innerHTML = text;

  parent.appendChild(el);
};

//Chat Window
const onFormSubmitted = (e) => {
  e.preventDefault();

  const input = document.querySelector('#chat');
  const text = input.value;
  // input.value = "";

  sock.emit('message', text);
};

// Countdown Timer
// const startingTime = 10;

// const countdownElement = document.getElementById("countdown");
// setInterval(updateCountdown, 1000);

// const updateCountdown = () => {
//   let seconds = startingTime;

//   countdownElement.innerHTML = `00:${seconds}`;
//   startingTime--;
// };

// Display the inputted price
const bettingPrice = () => {
  const price = document.getElementById('price');
  price.addEventListener('keyup', (e) => {
    if (e.key === 13) {
      event.preventDefault();
      const input = document.querySelector('#price');
      // const text = input.value;

      sock.emit('turn', input);
    }
  });
};

const bettingPriceFrom = (e) => {
  e.preventDefault();
  const inputVal = document.querySelector('#price');

  sock.emit('message', inputVal.value);
};

//Display the selected betting amount
const addPriceButtonListeners = () => {
  ['add50', 'add500', 'add2000'].forEach((id) => {
    const button = document.getElementById(id);
    button.addEventListener('click', () => {
      sock.emit('turn', id);
    });
  });
};

const main = () => {
  writeEvent('Welcome to RT Gambling!');

  sock = io();
  sock.on('message', writeEvent);

  document.querySelector('#chat-form').addEventListener('submit', onFormSubmitted);
  document.querySelector('#betting-price-form').addEventListener('submit', bettingPriceFrom);

  addPriceButtonListeners();
  bettingPrice();
};

document.onreadystatechange = function () {
  if (document.readyState === 'complete') main();
};
