const mealData = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => mealSideData(data.meals))
}

const mealSideData = meals => {
    // console.log(meal)
    // step 1 : container element
    const mealContainer = document.getElementById('main-day');
    mealContainer.innerText = '';
    meals.forEach(meal => {
        console.log(meal)
        // step 2: 
        const divBer = document.createElement('div');
        divBer.classList.add('col')
        //  step 3:innerHtml
        divBer.innerHTML = `
    <div class="card h-100">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <button onclick="mealDetails(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealModal">
      Details
    </button>
      </div>
  </div>
    `;
        // step 4:appenchild
        mealContainer.appendChild(divBer)
    });
}

const buttonSerch = () => {
    const inputField = document.getElementById('input-serch').value;
    console.log(inputField);

    mealData(inputField)
}
const mealDetails = idMeal =>{
    const url = ` https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))
    // console.log(idMeal)
}

const displayMealDetails = meal =>{
    document.getElementById('mealModalSide').innerText = meal.strMeal;
    const bodyImg = document.getElementById('mealModalBody');
    bodyImg.innerHTML=`
        <img class="img-fluid w-50" src="${meal.strMealThumb}">
    `
}
mealData('rice');