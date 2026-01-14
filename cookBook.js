const recipe = document.querySelector('.recipe');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(data => {
        const meal = data.meals[0];
        recipe.innerHTML = `
            <h2>${meal.strMeal}</h2><br>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/><br> 
            <h3>Instructions:</h3><br> 
            <p>${meal.strInstructions}</p><br> 

            <h3>Ingredients:</h3><br> 
            <ul>
            ${getIngredients(meal).map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            `;
    })
    .catch(error => {
        recipe.innerHTML = `<p>Failed to fetch recipe. Please try again.</p>`;
        console.error('Error fetching recipe:', error);
    });
});
function getIngredients(meal) {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient) {
            ingredients.push(`${measure} ${ingredient}`);
        }   
    }
    return ingredients;
}
