const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = (countries) => {
    const countriesContainer = document.getElementById('all-countries')
    console.log(countries);
    countries.forEach(country => {
        const {name, capital, flags, area, region} = country;
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country')
        countryDiv.innerHTML = `
            <h4>Name : ${name.common}</h4>
            <p>Capital : ${capital ? capital : 'No Capital'}</p>
            <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `
        countriesContainer.appendChild(countryDiv)
    })
}

const loadCountryDetails = (code) => {    
// https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = (detail) => {
    const detailContainer = document.getElementById('country-details')
    console.log(detail);
    const {name, capital, flags, area, region} = detail;
    const detailDiv = document.createElement('div')
    detailDiv.classList.add('country')
    detailDiv.innerHTML = `
        <h4><img src="${flags.png}" alt=""></h4>
        <h4>Name : ${name.common}</h4>
        <p>Capital : ${capital ? capital : 'No Capital'}</p>
        <p>region : ${region ? region : 'No region'}</p>
        <p>area : ${area ? area : 'No area'}</p>
    `
    detailContainer.appendChild(detailDiv)
}

loadCountries()