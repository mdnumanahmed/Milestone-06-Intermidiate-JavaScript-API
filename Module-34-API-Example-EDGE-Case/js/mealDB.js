
const loadMeals = (searchText) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = (meals) => {
    // step-1: get container from the DOM
    const mealsContainer = document.getElementById('meals-container')

    // clear all previous search results data
    mealsContainer.innerHTML = ''
    meals.forEach(meal => {
        console.log(meal);
        // destructuring properties from the object
        const {idMeal, strMealThumb, strMeal, strInstructions} = meal
        
        // step-2: create child for each element
        const mealBox = document.createElement('div')
        mealBox.classList.add('col')

        // step-3: set dynamic content of the child
        mealBox.innerHTML = `
        <div class="card">
            <img src="${strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${strMeal}</h5>
                <p class="card-text">${
                    strInstructions.length > 80 ? strInstructions.slice(0,80) : strInstructions
                }</p>
            </div>
            <div class="card-footer text-center">
                <button onclick="loadDetailModal(${idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#detailModal">
                Show Details
                </button>
            </div>
        </div>
        `
        // step-4: appendChild to the container
        mealsContainer.appendChild(mealBox)
    })
}

// search field value get and call loadMeals()
/* 
১। search functionality যোগ করতে বাটনের মধ্যে onclick="searchMeal()" দিতে হবে।
২। search বাটনে ক্লিক করলে input field থেকে ভ্যালু নিতে হবে।
৩। dynamic ডাটা লোড করার জন্য loadMeals(searchText) ফাংশন কল করে প্যারামিটারে input field এর ভ্যালু পাঠিয়ে দিতে হবে।  
*/
const searchMeal = () =>{
    const searchField = document.getElementById('searchField')
    const searchText = searchField.value 
    searchField.value = ''
    loadMeals(searchText)
}


/* 
Create dynamic url based on click and display modal
১। ডাইনামিকভাবে কার্ডে ডাটা ডিসপ্লে করার সময় modal trigger button যোগ করতে হবে।
২। modal trigger button এর onclick এ ফাংশন কল করার সময় প্যারামিটারে আইডি দিয়ে ডাইনামিক ডাটা লোড করতে হবে।
template string এর ভিতরে onclick এ কোন ফাংশনে ডাইনামিকভাবে আর্গুমেন্ট পাঠানোর সময় ‘ ‘ সিঙ্গেল কোট দিতে হয়, যদি ভ্যালু string থাকে। আর number হলে ‘ ‘  কোটেশন দিতে হয় না।

৩। DOM থেকে ইলিমেন্ট ধরে ডাটা সেট করে দিতে হবে।

*/

// Load Meal Detail using fetch() api
/* const loadDetailModal = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetailModal(data.meals[0]))
     .catch(error => {
        console.log(error);
     })
} */

// Load Meal Detail using async await 
/* 
handle fetch error, use try catch and async await
function এর প্যারামিটারের আগে async দিতে হবে
function এর ভিতরে asynchronous task এর আগে ‍await ব্যবহার করতে হবে।
try{} ব্লকে function এর task গুলো থাকবে আর catch(error){} ব্লকে error হ্যান্ডেল করা হবে। 
*/
const loadDetailModal = async(mealId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    try{
        const res = await fetch(url)
        const data = await res.json()
        displayDetailModal(data.meals[0])
    }catch(error){
        console.log(error);
    }
}

const displayDetailModal = mealDetail => {
    const {strMealThumb, strMeal, strInstructions, strCategory, strArea} = mealDetail
    const modalTitle = document.getElementById('detailModalLabel')
    modalTitle.innerText = strMeal
    const modalContent = document.getElementById('detailModalContent')
    modalContent.innerHTML = `
        <div class="card">
            <img src="${strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${strMeal}</h5>
                <p class="card-text">Category : ${strCategory ? strCategory : 'No Category' }</p>
                <p class="card-text">Area : ${strArea ? strArea : 'No Area' }</p>
                <p class="card-text">${
                    strInstructions.length > 160 ? strInstructions : 'No Description'
                }</p>
            </div>
        </div>
    `
}

loadMeals('pasta')

{

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s={food}` 
}