let sliderEl = document.querySelector("#range");
let sliderValue = document.querySelector("#value");
let plus1 = document.querySelector("#plus");
let minus1 = document.querySelector("#minus");
let load = document.querySelector("#load");
let copyDiv = document.querySelector("#copy"); 

document.addEventListener('DOMContentLoaded', function() {
  generatePassword(parseInt(sliderEl.value, 10));
});

load.addEventListener('click', event => {
  generatePassword(parseInt(sliderEl.value, 10));
});

plus1.addEventListener("click", (event) => {
  let currentValue = parseInt(sliderEl.value, 10);

  if (currentValue < 29) {
    currentValue += 1;
  }

  sliderEl.value = currentValue;
  sliderValue.textContent = currentValue;
});

minus1.addEventListener("click", (event) => {
  let currentValue = parseInt(sliderEl.value, 10);

  if (currentValue > 1) {
    currentValue -= 1;
  }

  sliderEl.value = currentValue;
  sliderValue.textContent = currentValue;
});

sliderEl.addEventListener("input", (event) => {
  let tempSliderValue = event.target.value;
  sliderValue.textContent = tempSliderValue;
});

copyDiv.addEventListener("click", () => {
  const textToCopy = document.getElementById('value_show').innerText;

  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      console.log("Tekst skopiowany do schowka!");
      alert("Tekst skopiowany do schowka!");
    })
    .catch((err) => {
      console.error("Błąd przy kopiowaniu do schowka:", err);
      alert("Wystąpił błąd podczas kopiowania!");
    });
});

function generatePassword(password) {
  const MaleLitery = 'abcdefghijklmnopqrstuvwxyz';
  const DuzeLitery = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const Cyfry = '0123456789';
  const ZnakiSpecjalne = '!@#$%^&*()';
  
  let WszystkieZnaki = '';

  if (document.getElementById('useUppercase').checked) {
    WszystkieZnaki += DuzeLitery;
  }
  if (document.getElementById('useLowercase').checked) {
    WszystkieZnaki += MaleLitery;
  }
  if (document.getElementById('useNumbers').checked) {
    WszystkieZnaki += Cyfry;
  }
  if (document.getElementById('useSpecialChars').checked) {
    WszystkieZnaki += ZnakiSpecjalne;
  }

  if (WszystkieZnaki === '') {
    alert('Wybierz przynajmniej jeden typ znaków.');
    return;
  }

  let CiagZnakow = '';
  
  for (let i = 0; i < password; ++i) {
    CiagZnakow += WszystkieZnaki[Math.floor(Math.random() * WszystkieZnaki.length)];
  }

  document.getElementById('value_show').innerText = CiagZnakow;
}
