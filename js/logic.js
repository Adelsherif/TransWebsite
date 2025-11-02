document.querySelector('.menu').addEventListener('click' , () =>{
    document.querySelector('.secondSection').classList.toggle('tow')
})



// استيراد ملف lang.js
const buttons = document.querySelectorAll('.lang-btn');
const allElements = document.querySelectorAll('[data-key]');

// اللغة الافتراضية
let currentLang = 'en';

// دالة لتغيير اللغة
function setLanguage(lang) {
  currentLang = lang;
  allElements.forEach(el => {
    const key = el.getAttribute('data-key');
    el.textContent = translations[lang][key];
  });

  // احفظ اللغة في localStorage
  localStorage.setItem('lang', lang);

  //  تغيّر اتجاه النص
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
}

const languageSelect = document.getElementById('languageSelect');

languageSelect.addEventListener('change', function() {
  const selectedLang = this.value;
  setLanguage(selectedLang);
});


// عند تحميل الصفحة
const savedLang = localStorage.getItem('lang') || 'en';
setLanguage(savedLang);



  async function getAllProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data);
    
    renderProducts(data.products);
    
  }

  function renderProducts(products) {
    const container = document.getElementById("productsContainer");
    container.innerHTML = "";

    products.forEach(product => {
      const productEl = document.createElement("div");
      productEl.classList.add("product");

      productEl.innerHTML = `
        <img src="${product.images[0]}" alt="${product.title}" />
        <h3>${product.title}</h3>
        <p>${product.price} $</p>
      `;

      container.appendChild(productEl);
    });
  }

getAllProducts();
