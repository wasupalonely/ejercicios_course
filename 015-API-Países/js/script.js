const inputEl = document.querySelector("#nombre-pais");
const searchBtnEl = document.querySelector(".btnBusqueda");
const result = document.querySelector(".resultado");

async function getResults() {
  let countryName = inputEl.value.trim();
  
  if (countryName.length === 0) {
    result.innerHTML = '<h3>El campo no puede estar vacío.</h3>';
    return;
  }
  
  try {
    result.innerHTML = '<h2 class="loading">Cargando Resultados...</h2>';
    let lotchUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    let response = await fetch(lotchUrl);
    
    if (!response.ok) {
      throw new Error('No se encontraron datos para el país ingresado.');
    }
    
    let data = await response.json();
    
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error('No se encontraron datos para el país ingresado.');
    }
    
    let countryData = data[0];
    
    result.innerHTML = `
      <img src="${countryData.flags.svg}" class="flag-img">
      <h3>${countryData.name.common}</h3>
      <div class="wrapper">
        <div class="data-wrapper">
          <h4>Capital:</h4>
          <span>${countryData.capital[0]}</span>
        </div>
      </div>
      <div class="wrapper">
        <div class="data-wrapper">
          <h4>Continente:</h4>
          <span>${countryData.continents[0]}</span>
        </div>
      </div>
      <div class="wrapper">
        <div class="data-wrapper">
          <h4>Población:</h4>
          <span>${countryData.population}</span>
        </div>
      </div>
      <div class="wrapper">
        <div class="data-wrapper">
          <h4>Moneda:</h4>
          <span>${countryData.currencies[Object.keys(countryData.currencies)[0]].name} ${Object.keys(countryData.currencies)[0]}</span>
        </div>
      </div>
      <div class="wrapper">
        <div class="data-wrapper">
          <h4>Idioma:</h4>
          <span>${Object.values(countryData.languages).join(', ')}</span>
        </div>
      </div>
    `;
    
  } catch (error) {
    result.innerHTML = `<h3>${error.message}</h3>`;
  }
}

searchBtnEl.addEventListener('click', getResults);
