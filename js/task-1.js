/*
Функція оголошує два параметри:

products — об’єкт, у якому ключі містять назви товарів, а їхні значення — кількість цих товарів. Наприклад, { apples: 2, grapes: 4 }.
containerSize — число, максимальна кількість одиниць товарів, яку в себе може вмістити контейнер.

Функція має повернути результат перевірки, чи помістяться всі товари в контейнер. Тобто порахувати загальну кількість товарів в об’єкті products і повернути true, якщо вона менше або дорівнює containerSize, і false, якщо ні.

Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її викликів.

console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); // false
*/

/*          ------ Розвязок -------- 
    for in
    потрібно витягувати кожен елемент з словника і брати з нього значення цифру
    додавати до зміної всіє суми товарів 

     if
     і зробити первірку чи товарів більше чи менше за ромір коробки  

*/
/* 
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ["title", "author", "rating"]

const values = Object.values(book);
console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]

*/


function isEnoughCapacity(products, containerSize) {
    const quantities = Object.values(products);
    let totalQuantity = 0;
  
    for (let i in quantities) {
      totalQuantity += quantities[i];
    }
  
    return totalQuantity < containerSize;
  }
console.log(
    isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
  ); // true
  
  console.log(
    isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
  ); // false
  
  console.log(
    isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
  ); // true
  
  console.log(
    isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
  ); // false
  