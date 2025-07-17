(function () {
  fetch('https://6879163463f24f1fdca0cc4f.mockapi.io/colors')
  // fetch('https://6879163463f24f1fdca0cc4f.mockapi.io/colors?new=true')
  // сначала дешевые
  // fetch('https://6879163463f24f1fdca0cc4f.mockapi.io/colors?sortBy=price&order=asc')
  // сначала дорогие
  // fetch('https://6879163463f24f1fdca0cc4f.mockapi.io/colors?sortBy=price&order=desc')
  // Например, новинки + сортировка по убыванию цены:
  // fetch('https://6879163463f24f1fdca0cc4f.mockapi.io/colors?new=true&sortBy=price&order=desc')
  .then(response => response.json())
  .then(products => {
    console.log(products); // Выведет массив товаров
    const container = document.getElementById('products');
    const catalogBlockCaption = document.querySelector('.catalog-block__caption span');
    catalogBlockCaption.textContent = products.length;

    products.forEach(product => {
      container.innerHTML += `
        <div class="product__card" id="${product.id}">
          <div class="product__img">
            <img src="${product.image}" alt="${product.name}">
          </div>
          <a href="/" class="product__name">${product.name}</a>
          <div class="product__price-row">
            <p>${product.price} ₽</p>
            <button type="button">+</button>
          </div>
        </div>
      `;
    });
  });
})();
