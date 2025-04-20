const slider = document.getElementById('asaSlider');
const selectedScore = document.getElementById('selectedScore');

slider.addEventListener('input', () => {
  selectedScore.textContent = slider.value;
});