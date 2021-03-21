
   // get Error  
   const searchData = city => {
    const url = `https://www.themealdb.com/api/json/v1/1/categories`;
    fetch(url)
        .then(response => response.json())
        .then(data =>console.log(data))
        .catch(Error => console.log('Your response is not find so try again', Error))
        const value=document.getElementById('city').value = "";
         }
  const searchBtn = document.getElementById('search_button');
  searchBtn.addEventListener('click', () => {
      const inputSearch = document.getElementById('city').value;
      searchData(inputSearch) ;
  })
 

  fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res => res.json())
    .then(data => getDisplay(data.categories))
    .catch(Error => console.log('Your response is not find so try again', Error))


function getDisplay(foods) {
    const divBox = document.getElementById('all-list')
    for (let i = 0; i < foods.length; i++) {
        const foodsList = foods[i];
        const divList = document.createElement('div');
        divList.id = 'foods-list';
        const foodsInfo = `
            <img src="${foodsList.strCategoryThumb}">
            <h3 id="name"> ${foodsList.strCategory}</h3> `
        divList.innerHTML = foodsInfo;
        divBox.appendChild(divList);
    }
    
}
function secondDisplay(categories) {
    const url = `https://www.themealdb.com/api/json/v1/1/categories.php`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            details(data.categories);
        })
}
function details(categories) {
    const description = document.getElementById('Description');

    for (let i = 0; i < categories.length; i++) {
        const element = categories[i];
        const post = document.createElement('p');
        post.id = 'post'
        const detailsInfo = `
            <p>${element.strCategory}</p>
            <p>${element.strCategoryDescription}</p>`
        post.innerHTML = detailsInfo;
        description.appendChild(post);
    }
}
//Second  API
// function details(categories) {
//     const description = document.getElementById('Description');
//     const categoriesName = categories.map(category => category.strCategory);

//     for (let i = 0; i < categoriesName.length; i++) {
//         const element = categoriesName[i];
//         const post = document.createElement('p');
//         post.id = 'post'
//         post.innerHTML = element;
//         description.appendChild(post);
//     }
// }
