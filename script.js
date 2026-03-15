document.addEventListener('DOMContentLoaded', () => {
  const filterbuttons = document.querySelectorAll('.filter-btn');

  filterbuttons.forEach(button => {
    button.addEventListener('click', () => {
      filterbuttons.forEach((btn)=> { 
        btn.classList.remove('active'),
        btn.setAttribute('aria-pressed', 'false')
      });
      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');
    });
  });
});