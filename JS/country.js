const frag = document.getElementById("flags");
const query = new URLSearchParams(window.location.search);
const params = query.get("name");
const main = document.querySelector(".country-container");

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
    countryInfo = {
      name: item.name.common,
      nativeName: Object.values(item.name.nativeName)[0].common,
      population: item.population,
      region: item.region,
      subRegion: item.subregion,
      capital: item.capital,
      levelDomain: item.tld,
      currencies: Object.values(item.currencies)[0].name,
      languages: Object.values(item.languages),
      border: item.hasOwnProperty("borders")
        ? item.borders
        : ["Not found", "Not found", "Not found"],
    };
    elements += //Html
    `
      <article class="card countryInfo">
        <img
        class="card__flag"
        src="${item.flags.svg}"
        alt="bandera"
        />
        <div class="card__body">
        <h3 class="card__body__title">${countryInfo.name}</h3>
          <div class="country__left">
            <p class="card__body__info">Native Name: 
            <span class="info-js">${countryInfo.nativeName}</span>
            </p>
            <p class="card__body__info">Population: 
            <span class="info-js">${countryInfo.population}</span>
            </p>
            <p class="card__body__info">Region: 
            <span class="info-js">${countryInfo.region}</span>
            </p>
            <p class="card__body__info">Sub Region: 
            <span class="info-js">${countryInfo.subRegion}</span>
            </p>
            <p class="card__body__info">Capital: 
            <span class="info-js">${countryInfo.capital}</span>
            </p> 
            <br />
          </div> 

          <div class="country__right">
            <p class="card__body__info">Top Level Domain: 
            <span class="info-js">${countryInfo.levelDomain}</span>
            </p>
            <p class="card__body__info">Currencies: 
            <span class="info-js">${countryInfo.currencies}</span>
            </p>
            <p class="card__body__info">Languages: 
            <span class="info-js">${countryInfo.languages}</span>
            </p>
            <br>
          </div>

          <div class="border-countries-container">
            <h5 class="border-countries__title">Border Countries:</h5>
              <span class="border-countries__btn">${countryInfo.border[0]}</span>
              <span class="border-countries__btn">${countryInfo.border[1]}</span>
              <span class="border-countries__btn">${countryInfo.border[2]}</span>  
          </div>
          </div>
      </article>
    `;
  });
  main.innerHTML = elements;
};
fechData();
