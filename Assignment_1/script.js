
const button = document.getElementById('colorChangeButton');

button.addEventListener('mouseenter', function() {
  document.body.style.background = 'linear-gradient(to right, #0072ff, #00c6ff)'; /* Gradient from blue to another shade */
});

button.addEventListener('mouseleave', function() {
  document.body.style.background = '#0072ff'; /* Revert back to the initial blue color */
});
