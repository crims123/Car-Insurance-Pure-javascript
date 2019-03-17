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

// Functions
function handleForm (e) {
	e.preventDefault();
	const interface = new Interface();
	console.log(interface)
	if (brand.value === "" || years.value === "" || membership.value === "") {
		interface.showError('!Debes Completar Todos los Campos!');
	}
	else {
		console.log('datos correctos')
	}
	
}

function Interface () {

}
// We add showError like a prototype
Interface.prototype.showError = function (message) {
	const div = document.createElement('div');
	div.classList.add('mensaje', 'error');
	div.innerHTML = message;
	form.insertBefore(div, document.querySelector('.form-group'))
	setTimeout(function() {
		document.querySelector('.mensaje').remove()
	}, 2000 )
}