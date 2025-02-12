document.addEventListener('DOMContentLoaded', function () {
  const langToggle = document.getElementById('lang-toggle');
  const elements = document.querySelectorAll('[data-es][data-en]'); // Seleccionamos solo los elementos con ambos atributos

  langToggle.addEventListener('click', function () {
    const isEnglish = langToggle.textContent === 'English';
    langToggle.textContent = isEnglish ? 'Español' : 'English';

    elements.forEach((el) => {
      el.textContent = isEnglish ? el.getAttribute('data-en') : el.getAttribute('data-es');
    });
  });
});
