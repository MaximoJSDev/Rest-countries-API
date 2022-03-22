const form = document.getElementById("form");
const input = document.getElementById("input");
const selectRegion = document.querySelector("select");
const main = document.querySelector(".main");

const formClient = (data) => {
  form.addEventListener("keyup", (e) => {
    e.preventDefault();
    const inputValue = input.value.toLowerCase();
    const inputFilter = data.filter((item) => {
      const letterApi = item.name.common.toLowerCase();
      if (letterApi.indexOf(inputValue) !== -1) {
        return item;
      }
    });
    cards(inputFilter);
  });
};
const filter = (data) => {
  const query = selectRegion.value;
  if (query === "") cards(data);
  else {
    const arrayFilter = data.filter((item) => item.region === query);
    cards(arrayFilter);
  }
};

const fechData = async () => {
  input.focus()
  try {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    formClient(data)
    filter(data);
    selectRegion.addEventListener("change", () => filter(data));
  } catch (error) {
    console.log(error);
  }
};
const cards = (data) => {
  let elements = "";
  if (data.length == 0) {
    elements += `<h3>No results</h3>`;
  }
  data.forEach((item) => {
    elements += //Html
    `
    <a href="country.html?name=${item.name.common}">
      <article class="card">
        <img
        class="card__flag"
        src="${item.flags.svg}"
        alt="bandera"
        />
        <div class="card__body">
          <h3 class="card__body__title">${item.name.common}</h3>
          <p class="card__body__info">Population: 
          <span class="info-js">${item.population}</span>
          </p>
          <p class="card__body__info">Region: 
          <span class="info-js">${item.region}</span>
          </p>
          <p class="card__body__info">Capital: 
          <span class="info-js">${item.capital}</span>
          </p>
        </div>
      </article>
    </a>
    `;
  });
  main.innerHTML = elements;
};
fechData();
