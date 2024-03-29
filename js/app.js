// Crating Select Options for Years
const maxYear = new Date().getFullYear();
const minYear = maxYear - 20;
const years = document.querySelector("#anio");
for (i = maxYear; i >= minYear; i--) {
  let option = document.createElement("option");
  option.value = i;
  option.innerHTML = i;
  years.appendChild(option);
}

// Variables
const form = document.querySelector("#cotizar-seguro");
const brand = document.querySelector("#marca");
let membership = document.querySelector('input[name="tipo"]:checked').value;

// Event Listeners
form.addEventListener("submit", handleForm);

// Functions
function handleForm(e) {
  e.preventDefault();
  const interface = new Interface();
  if (brand.value === "" || years.value === "" || membership === "") {
    interface.showError("!Debes Completar Todos los Campos!");
  } else {
    console.log("datos correctos");
    const result = document.querySelector("#resultado div");
    if (result != null) {
      result.remove();
    }
    let membership = document.querySelector('input[name="tipo"]:checked').value;
    const insurance = new Insurance(brand.value, years.value, membership);
    const price = insurance.price(insurance);
    interface.showResult(insurance, price);
  }
}
class Interface {
  showError(message) {
    const div = document.createElement("div");
    div.classList.add("mensaje", "error");
    div.innerHTML = message;
    form.insertBefore(div, document.querySelector(".form-group"));
    setTimeout(function() {
      document.querySelector(".mensaje").remove();
    }, 2000);
  }

  showResult(insurance, price) {
    const result = document.querySelector("#resultado");
    switch (insurance.brand) {
      case "1":
        insurance.brand = "American";
        break;

      case "2":
        insurance.brand = "Asian";
        break;

      case "3":
        insurance.brand = "European";
        break;
    }
    switch (insurance.membership) {
      case "basico":
        insurance.membership = "Basic";
        break;

      case "completo":
        insurance.membership = "Full";
        break;
    }
    const div = document.createElement("div");
    div.innerHTML = `
			<p class="header">Resume:</p>
			<p>Brand: ${insurance.brand}</p>
			<p>Year: ${insurance.year}</p>
			<p>Membership: ${insurance.membership}</p>
			<p>Total: $ ${price}</p>
		`;
    document.querySelector("#cargando img").style = "display:block";
    setTimeout(function() {
      document.querySelector("#cargando img").style = "display:none";
      result.appendChild(div);
    }, 1500);
  }
}
class Insurance {
  constructor(brand, year, membership) {
    this.brand = brand;
    this.year = year;
    this.membership = membership;
  }

  price(insurance) {
    const base = 2000;
    let price;
    switch (insurance.brand) {
      case "1":
        price = base * 1.15;
        break;

      case "2":
        price = base * 1.05;
        break;

      case "3":
        price = base * 1.35;
        break;
    }
    const diference = new Date().getFullYear() - Number(insurance.year);
    const discount = diference * 0.03;
    price = price - price * discount;
    if (insurance.membership === "basico") {
      price = price + price * 0.3;
    }
    if (insurance.membership === "completo") {
      price = price + price * 0.5;
    }
    return price;
  }
}
