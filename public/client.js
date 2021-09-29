console.log('Client-side code running');

const button = document.getElementById('convert');
button.addEventListener('click', function(e) {
  fetch('http://localhost:9000/download');
});
