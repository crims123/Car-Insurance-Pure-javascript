// Crating Select Options for Years
const maxYear = new Date().getFullYear();
const minYear = maxYear - 20;
const years = document.querySelector('#anio');
for (i=maxYear; i >= minYear; i--) {
  let option = document.createElement('option');
  option.value = i;
  option.innerHTML = i;
	years.appendChild(option)
}

// Variables
const form = document.querySelector('#cotizar-seguro');
const brand = document.querySelector('#marca');
const membership = document.querySelector('input[name="tipo"]:checked');

// Event Listeners
form.addEventListener('submit', handleForm);

function handleForm (e) {
	e.preventDefault();
	console.log(brand.value)
	console.log(years.value)
	console.log(membership.value)
}

