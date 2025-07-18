(function () {
  const startUrl = 'https://6879163463f24f1fdca0cc4f.mockapi.io/colors';
  const checkbox = document.querySelectorAll('.filter input');
  const sort = document.querySelectorAll('.sort input');
  const sortValue = document.querySelector('.sort__button span');

  function buildSortUrl() {
    const sortChecked = document.querySelector('.sort input:checked');
    const comands = {
      'expensive': 'sortBy=price&order=desc',
      'cheap': 'sortBy=price&order=asc',
      'raiting': 'sortBy=raiting&order=desc',
      'date': 'sortBy=date&order=desc',
    };

    return comands[sortChecked.id];
  }

  function buildCheckedUrl(url) {
    const checkboxes = document.querySelectorAll('.filter input:checked');
    const params = [];

    checkboxes.forEach(item => {
      params.push(`${item.name}=true`);
    });

    return params.length ? `${url}?${params.join('&')}&${buildSortUrl()}` : `${url}?${buildSortUrl()}`;
  }


  function getRendering (url) {
    fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(products => {
      console.log(products);
      const container = document.getElementById('products');
      const catalogBlockCaption = document.querySelector('.catalog-block__caption span');
      catalogBlockCaption.textContent = products.length;
      container.innerHTML = '';

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
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      const container = document.getElementById('products');
      container.innerHTML = `<p class="error-message">Не удалось загрузить данные. Пожалуйста, попробуйте позже.</p>`;
    });
  }

  getRendering(buildCheckedUrl(startUrl));

  checkbox.forEach((item) => {
    item.addEventListener('change', () => {
      getRendering(buildCheckedUrl(startUrl));
    })
  })

  sort.forEach((item) => {
    item.addEventListener('change', () => {
      sortValue.textContent = item.dataset.name;
      getRendering(buildCheckedUrl(startUrl));
    })
  })
})();
