const categoriesList = document.querySelector('#categories');

const items = categoriesList.querySelectorAll('.item');

const numberOfCategories = items.length;
console.log(`Liczba kategorii: ${numberOfCategories}`);

items.forEach(item => {

  const headerText = item.querySelector('h2').textContent;
 
  const elementsCount = item.querySelectorAll('ul li').length;

  console.log(`Kategoria: ${headerText}`);
  console.log(`Liczba elementów: ${elementsCount}`);
});
