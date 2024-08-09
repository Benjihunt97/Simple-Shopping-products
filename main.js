const data = [
  {
    img: 'https://m.media-amazon.com/images/I/51miQX3hpGL._AC_UF894,1000_QL80_FMwebp_.jpg',
    name: 'Samsung Galaxy S10',
    currentPrice: '£159.99',
    oldPrice: '$259.99',
    categories: ['technology', 'phones'],
    onSale: true
  },
  {
    img: 'https://images.samsung.com/is/image/samsung/assets/uk/smartphones/galaxy-s24/buy/02_S24Series-Group-KV_MO_0527.jpg?imbypass=true',
    name: 'Samsung Galaxy S24',
    currentPrice: '£799.00',
    oldPrice: '',
    categories: ['technology', 'phones'],
    onSale: false
  },
  {
    img: 'https://www.musicmagpie.co.uk/store/spree/products/7270711/product/UI000000042113__Deep_Purple__1.jpg?20230118141234',
    name: 'iPhone 14 Pro Max',
    currentPrice: '£1099.00',
    oldPrice: '£1199.00',
    categories: ['technology', 'phones'],
    onSale: true
  },
  {
    img: 'https://www.musicmagpie.co.uk/store/spree/products/6586495/product/8887__Midnight__1.jpg?20220617051457',
    name: 'iPhone SE (2022)',
    currentPrice: '£349.00',
    oldPrice: '£399.00',
    categories: ['technology', 'phones'],
    onSale: true
  },
  {
    img: 'https://m.media-amazon.com/images/I/71hIfcIPyxS._AC_UF894,1000_QL80_.jpg',
    name: 'Samsung Galaxy S21',
    currentPrice: '£499.00',
    oldPrice: '£699.00',
    categories: ['technology', 'phones'],
    onSale: true
  },
  {
    img: 'https://m.media-amazon.com/images/I/61sFc2QyO4L._AC_UF894,1000_QL80_FMwebp_.jpg',
    name: 'iPhone 12 Silicone Case - Black',
    currentPrice: '£49.99',
    oldPrice: '',
    categories: ['accessories', 'cases'],
    onSale: false
  },
  {
    img: 'https://m.media-amazon.com/images/I/71MYrjHxvZL._AC_UF894,1000_QL80_FMwebp_.jpg',
    name: 'Samsung Galaxy S21 Ultra Protective Case',
    currentPrice: '£29.99',
    oldPrice: '£39.99',
    categories: ['accessories', 'cases'],
    onSale: true
  },
  {
    img: 'https://m.media-amazon.com/images/I/71vk1UJniHL._AC_UF894,1000_QL80_FMwebp_.jpg',
    name: 'iPhone 13 Screen Protector',
    currentPrice: '£12.99',
    oldPrice: '£19.99',
    categories: ['accessories', 'screen protectors'],
    onSale: true
  },
  {
    img: 'https://m.media-amazon.com/images/I/71r69Y7BSeL._AC_SL1500_.jpg',
    name: 'Samsung Galaxy S23 Screen Protector',
    currentPrice: '£14.99',
    oldPrice: '£24.99',
    categories: ['accessories', 'screen protectors'],
    onSale: true
  },
  {
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHXF3?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1601058495000',
    name: 'MagSafe Charger',
    currentPrice: '£39.00',
    oldPrice: '',
    categories: ['accessories', 'chargers'],
    onSale: false
  },
  {
    img: 'https://m.media-amazon.com/images/I/61VwGQqDg-L._AC_UF1000,1000_QL80_FMwebp_.jpg',
    name: 'Samsung Galaxy Buds Pro',
    currentPrice: '£129.00',
    oldPrice: '£199.00',
    categories: ['accessories', 'earphones'],
    onSale: true
  },
  {
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1591634795000',
    name: 'Apple AirPods Pro',
    currentPrice: '£249.00',
    oldPrice: '£279.00',
    categories: ['accessories', 'earphones'],
    onSale: true
  }
];


const productDisplay = document.getElementById('product-list');

// product card component
const productCard = (img, name, currentPrice, oldPrice, sale) => {
            return `
                <div class="product-card grid gap-4 p-3 shadow-md rounded-md relative overflow-hidden">
                    <p class="${sale ? 'block' : 'hidden'} bg-red-500 text-white font-semibold absolute -rotate-45 top-2 -left-10 py-2 px-14 shadow-sm shadow-red-800 z-50">SALE</p>
                    <img class="min-h-[275px] max-h-[275px] mx-auto object-cover sm:scale-[.75]" src="${img}" alt="${name}">
                    <div class="grid">
                        <h2 class="title font-semibold text-sm max-w-[30ch]">${name}</h2>
                        <h3 class="font-bold text-2xl text-sky-600">${currentPrice} <span class="${oldPrice === '' ? 'hidden' : ''}line-through text-gray-400 text-sm">${oldPrice}</span></h3>
                        
                        <button class="favourite-product size-9 rounded-full border border-neutral-900 rounded-full ml-auto grid place-items-center text-base -translate-y-full">
                            <i class="fa fa-heart-o"></i>
                        </button>
                        
                        <div class="flex gap-2">
                            <button class="add-to-cart-btn rounded-md py-2 border border-neutral-900 text-sm flex-1">
                                Add to cart
                            </button>
                            <button class="buy-now-btn rounded-md py-2 border border-neutral-900 text-sm flex-1">
                                Buy now
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }

// Render the products
const renderProducts = (filteredData = data) => {
            productDisplay.innerHTML = filteredData.map(product => 
                productCard(product.img, product.name, product.currentPrice, product.oldPrice, product.onSale)
            ).join('');
        }

// Initial render
renderProducts();

// Search filter for the products
const search = document.getElementById('search-input');

const searchProducts = (value) => {
  const productCards = document.querySelectorAll('.product-card');
              
  productCards.forEach(card => {
    const title = card.querySelector('.title').textContent.toUpperCase();
    card.style.display = title.includes(value) ? '' : 'none';
  });
}

search.addEventListener('input', () => {
  const searchValue = search.value.toUpperCase();
    searchProducts(searchValue);
});

// Favourite a product 
const favouriteProduct = document.querySelectorAll('.favourite-product');
  favouriteProduct.forEach(fav => {
    fav.addEventListener('click', () => {
      const icon = fav.querySelector('i');
      icon.classList.toggle('text-red-600');
                
      if (icon.classList.contains('fa-heart-o')) {
        icon.classList.remove('fa-heart-o');
        icon.classList.add('fa-heart');
      } else {
        icon.classList.add('fa-heart-o');
        icon.classList.remove('fa-heart');
      }
    });
  });

 // Filter and sort products
const minPrice = document.getElementById('min-price');
const maxPrice = document.getElementById('max-price');
const sort = document.getElementById('sort');
const apply = document.getElementById('apply');
const clear = document.getElementById('clear');

const filterAndSortProducts = () => {
  let min = parseFloat(minPrice.value) || 0;
  let max = parseFloat(maxPrice.value) || Infinity;
  let sortOption = sort.value;

  let filteredProducts = data.filter(product => {
      let currentPrice = parseFloat(product.currentPrice.replace('£', ''));
      return currentPrice >= min && currentPrice <= max;
  });
            
  switch (sortOption) {
    case 'price-inc':
      filteredProducts.sort((a, b) => parseFloat(a.currentPrice.replace('£', '')) - parseFloat(b.currentPrice.replace('£', '')));
      break;
    case 'price-dec':
      filteredProducts.sort((a, b) => parseFloat(b.currentPrice.replace('£', '')) - parseFloat(a.currentPrice.replace('£', '')));
      break;
    case 'a-z':
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'z-a':
      filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
      break;
    default:
      // No sorting
      break;
  }


  renderProducts(filteredProducts);
}

apply.addEventListener('click', filterAndSortProducts);

clear.addEventListener('click', () => {
  minPrice.value = '';
  maxPrice.value = '';
  sort.value = 'default';
  renderProducts();
});
