const allCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(man => allCountry2(man))
}

const allCountry2 = name => {
    const containerCounties = document.getElementById('country-list');
    name.forEach(country => {
        console.log(country.cca2);
        const divCountries = document.createElement('div');
        divCountries.classList.add('country');
        divCountries.innerHTML = `
    <h2>Name: ${country.name.common} </h2>
    <p>capital:${country.capital ? country.capital[0] : 'no-capital'}</p>
        <button onclick="countryDetails('${country.cca2}')">Details</button>
    `;
        containerCounties.appendChild(divCountries)

    });

}

const countryDetails = code =>{
    const url =  `https://restcountries.com/v3.1/alpha/${code}`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountry(data[0]));
}

const displayCountry = country =>{
    console.log(country.flags)
    const divDisplay = document.getElementById('display');
    divDisplay.innerHTML=`
    <h1>Name : ${country.name.common} </h1>
    <img src="${country.flags.png}"/>
    `;
}
allCountry();