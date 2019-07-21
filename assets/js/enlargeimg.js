function resize(direction) {
  var delta = 100 * direction;

  var element = document.getElementById('img');
  var positionInfo = element.getBoundingClientRect();

  element.style.width = positionInfo.width+delta+'px';
  element.style.height = positionInfo.height+delta+'px';
}