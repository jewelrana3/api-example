const allCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(man => allCountry2(man))
}

const allCountry2 = name => {
    const containerCounties = document.getElementById('country-list');
    name.forEach(country => {
        console.log(country.name.common);
        const divCountries = document.createElement('div');
        divCountries.classList.add('country');
        divCountries.innerHTML = `
    <h2>Name: ${country.name.common} </h2>
    <p>capital:${country.capital ? country.capital[0] : 'no-capital'}</p>
    
    `;
        containerCounties.appendChild(divCountries)

    });

}
allCountry();