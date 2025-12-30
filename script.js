document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach(section => observer.observe(section));
});


// for the budget: 
document.addEventListener('DOMContentLoaded', () => {
  const budgetBars = document.querySelectorAll('.fill');

  const budgetObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const percent = entry.target.getAttribute('data-percent');
          entry.target.style.width = percent + '%';
        }
      });
    },
    { threshold: 0.4 }
  );

  budgetBars.forEach(bar => budgetObserver.observe(bar));
});
