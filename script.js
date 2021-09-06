'use strict';

const btnNext = document.querySelector('.next');

const btnSubmit = document.querySelector('.submit-response');

const closeModal = document.querySelectorAll('.close-modal');

const tryAgain = document.querySelector('.tryagain');

const openModal = document.querySelector('.get');

const overlay = document.querySelector('.overlay');

const genderPrompt = document.querySelector('.genderprompt');

const birthdayPrompt = document.querySelector('.birthdayprompt');

const result = document.querySelector('.result');

const invalid = document.querySelector('.invalid');

const dayy = Number(document.querySelector('.day').value);
console.log(dayy);

const monthh = Number(document.querySelector('.month').value);

const yearr = Number(document.querySelector('.year').value);

let finalFemale = document.querySelector('.akan-name').textContent;

btnSubmit.addEventListener('click', function () {
  let checkbox = document.querySelector('.male');
  const dayy = Number(document.querySelector('.day').value);
  console.log(dayy);
  const monthh = Number(document.querySelector('.month').value);

  const yearr = Number(document.querySelector('.year').value);
  function dayofweek(y, m) {
    let t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
    y -= m < 3 ? 1 : 0;
    return Math.floor(
      (yearr + yearr / 4 - yearr / 100 + yearr / 400 + t[monthh - 1] + dayy) % 7
    );
  }

  let day = dayofweek(dayy, monthh, yearr);
  console.log(day);

  if (checkbox.checked === true) {
    switch (day) {
      case 0:
        document.querySelector('.akan-name').textContent = 'kwasi';
        break;
      case 1:
        document.querySelector('.akan-name').textContent = 'Kwadwo';
        break;
      case 2:
        document.querySelector('.akan-name').textContent = 'Kwabena';
      case 3:
        document.querySelector('.akan-name').textContent = 'Kwaku';
        break;
      case 4:
        document.querySelector('.akan-name').textContent = 'Yaw';
        break;
      case 5:
        document.querySelector('.akan-name').textContent = 'Kofi';
        break;
      case 6:
        document.querySelector('.akan-name').textContent = 'Kwame';
        break;

      default:
        break;
    }
  }
});

btnSubmit.addEventListener('click', function () {
  const dayy = Number(document.querySelector('.day').value);
  console.log(dayy);
  const monthh = Number(document.querySelector('.month').value);

  const yearr = Number(document.querySelector('.year').value);
  function dayofweek(y, m) {
    let t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
    y -= m < 3 ? 1 : 0;
    return Math.floor(
      (yearr + yearr / 4 - yearr / 100 + yearr / 400 + t[monthh - 1] + dayy) % 7
    );
  }

  let day = dayofweek(dayy, monthh, yearr);
  console.log(day);
  let checkbox = document.querySelector('.female');

  if (checkbox.checked === true) {
    switch (day) {
      case 0:
        document.querySelector('.akan-name').textContent = 'Akosua';
        break;
      case 1:
        document.querySelector('.akan-name').textContent = 'Adwoa';
        break;
      case 2:
        document.querySelector('.akan-name').textContent = 'Abenaa';
      case 3:
        document.querySelector('.akan-name').textContent = 'Akua';
        break;
      case 4:
        document.querySelector('.akan-name').textContent = 'Yaa';
        break;
      case 5:
        document.querySelector('.akan-name').textContent = 'Afua';
        break;
      case 6:
        document.querySelector('.akan-name').textContent = 'Ama';
        break;

      default:
        break;
    }
  }
});

overlay.addEventListener('click', function () {
  genderPrompt.classList.add('modal');
  overlay.classList.add('modal');
  birthdayPrompt.classList.add('modal');
  result.classList.add('modal');
});

openModal.addEventListener('click', function () {
  genderPrompt.classList.remove('modal');
  overlay.classList.remove('modal');
});

btnNext.addEventListener('click', function () {
  genderPrompt.classList.add('modal');
  birthdayPrompt.classList.remove('modal');
});

btnSubmit.addEventListener('click', function () {
  const day = Number(document.querySelector('.day').value);

  const month = Number(document.querySelector('.month').value);

  const year = Number(document.querySelector('.year').value);

  if (day > 31 || day < 1 || month > 12 || month < 1) {
    invalid.classList.remove('modal');
    console.log('checked');
  } else {
    birthdayPrompt.classList.add('modal');
    result.classList.remove('modal');
  }
});
tryAgain.addEventListener('click', function () {
  genderPrompt.classList.remove('modal');
  overlay.classList.remove('modal');
  birthdayPrompt.classList.add('modal');
  result.classList.add('modal');
  document.querySelector('.day').value = '';
  document.querySelector('.month').value = '';
  document.querySelector('.year').value = '';
  document.querySelector('.checkbox').checked === false;
  invalid.classList.add('modal');
});

for (let i = 0; i < closeModal.length; i++) {
  closeModal[i].addEventListener('click', function () {
    genderPrompt.classList.add('modal');
    overlay.classList.add('modal');
    birthdayPrompt.classList.add('modal');
    result.classList.add('modal');
    document.querySelector('.day').value = '';
    document.querySelector('.month').value = '';
    document.querySelector('.year').value = '';
    document.querySelector('.checkbox').checked === false;
    invalid.classList.add('modal');
  });
}
