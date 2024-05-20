ScrollReveal({ reset: true }).reveal('.escondido', { duration: 2300 });

const tooltipTriggers = document.querySelectorAll('.tooltip-trigger');

tooltipTriggers.forEach(trigger => {
  trigger.addEventListener('mouseover', () => {
    const tooltipText = trigger.nextElementSibling;
    tooltipText.style.display = 'block';
  });

  trigger.addEventListener('mouseout', () => {
    const tooltipText = trigger.nextElementSibling;
    tooltipText.style.display = 'none';
  });
});
