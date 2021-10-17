const frag = document.getElementById("flags");
const query = new URLSearchParams(window.location.search);
const params = query.get("name");
const main = document.querySelector(".main");

const fechData = async () => {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    const filterData = data.filter((item) => item.name.common === params);
    card(filterData);
  } catch (error) {
    console.log(error);
  }
};
const card = (data) => {
  let elements = "";
  data.forEach((item) => {
    elements += //Html
      `
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
    `;
  });
  main.innerHTML = elements;
};

fechData();
