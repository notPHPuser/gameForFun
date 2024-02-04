var character = document.getElementById('character');
var block = document.getElementById('block');

function jump() {
  if (character.classList != 'animate') {
    character.classList.add('animate');
  }
  setTimeout(function () {
    character.classList.remove('animate');
  }, 500);
}

var lose = setInterval(function () {
  var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
  var blocklLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
  if (blocklLeft < 20 && blocklLeft > 0 && characterTop >= 130) {
    block.style.animation = 'none';
    block.style.display = 'none';
    alert('u lose.');
  }
}, 10);
