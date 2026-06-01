// Nestly shared scripts
document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  var burger = document.querySelector('.hamburger');
  var menu = document.querySelector('.menu');
  if (burger && menu) {
    burger.addEventListener('click', function () { menu.classList.toggle('show'); });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      q.parentElement.classList.toggle('open');
    });
  });

  // Product thumbnail swap
  document.querySelectorAll('.pd-thumbs img').forEach(function (t) {
    t.addEventListener('click', function () {
      var main = document.querySelector('.pd-gallery .main');
      if (main) main.src = t.src;
      document.querySelectorAll('.pd-thumbs img').forEach(function (i) { i.classList.remove('active'); });
      t.classList.add('active');
    });
  });
});

// Pricing map used by checkout + buy links
var NESTLY_PRODUCTS = {
  complete: { name: 'Complete Kit (Bed + Bath + Cook)', price: 189 },
  bedding:  { name: 'Bedding Kit', price: 100 },
  kitchen:  { name: 'Kitchen Kit', price: 120 },
  bathroom: { name: 'Bathroom Kit', price: 50 }
};
