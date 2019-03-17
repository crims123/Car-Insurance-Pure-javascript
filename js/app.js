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