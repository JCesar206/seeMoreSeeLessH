const buttons = document.querySelectorAll('.toggleBtn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.card');
    const extraInfo = card.querySelector('.extra-info');
    extraInfo.classList.toggle('mostrar');

    if (extraInfo.classList.contains('mostrar')) {
      button.textContent = '-';
    } else {
      button.textContent = '+';
    }
  });
});