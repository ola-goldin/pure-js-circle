
 const item = document.getElementById("piece");
// piece object
const piece = (function() {
  let el = null;
  const init = function(el) {
    this.el = el;
  };
  const moveDelta = function(dx, dy) {
    const pos = this.el.getBoundingClientRect();
    this.el.style.left = `${pos.left + dx}px`;
    this.el.style.top = `${pos.top + dy}px`;
  };
  return {
    init,
    moveDelta
  };
})();

function handleClick(ev) {
  piece.moveDelta(parseInt(this.dataset.dx), parseInt(this.dataset.dy));
}

function setRandomMovement(){
  setResetBtn();
  document.getElementById("random").addEventListener('click', evt=>{
    let xy = getRandomPosition(item);
    item.style.top = xy[0] + 'px';
    item.style.left = xy[1] + 'px';
  });
}

function setStyle(color){
 item.style.backgroundColor = color;
 item.onmouseenter = function(){
  item.style.cssText = `background: transparent; border: 1px solid ${color};`;
};
item.onmouseleave = function(){
  item.style.cssText = `background: ${color}; border: nine;`;
};
}

function setColor(){
window.fetch('http://dataservice.accuweather.com/currentconditions/v1/215854?apikey=GenwdR1gGdGLJJJA8cMbSEYJboRGlFqh')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      response.json().then(function(res) {
        const {Temperature} = res[0];
         if(Temperature.Metric.Value <0 && Temperature.Metric.Value >11){
          setStyle('blue')
         }
         else if(Temperature.Metric.Value <=11 && Temperature.Metric.Value <=20){
          setStyle('green')
          }
        
         else if(Temperature.Metric.Value >=21 && Temperature.Metric.Value <=30){
          setStyle('yellow')
         }
      
         else if (Temperature.Metric.Value >30){
          setStyle('red')
         }
         
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
 
}

function getRandomPosition(element) {
	var x = document.body.offsetHeight-element.clientHeight;
	var y = document.body.offsetWidth-element.clientWidth;
	var randomX = Math.floor((Math.random()*x)+50);
	var randomY = Math.floor((Math.random()*y)+50);
	return [randomX,randomY];
}

function setResetBtn(){
  document.getElementById("reset").addEventListener('click', evt=>{
    item.style.cssText = "top: 100px;left: 50%;"
  });
}

function init() {
  const $btnUp = document.getElementById("btn-up");
  const $btnRight = document.getElementById("btn-right");
  const $btnDown = document.getElementById("btn-down");
  const $btnLeft = document.getElementById("btn-left");
 
  $btnUp.dataset.dx =  $btnRight.dataset.dy = $btnDown.dataset.dx =  $btnLeft.dataset.dy =0;
  $btnUp.dataset.dy = $btnLeft.dataset.dx  = -100;
  $btnRight.dataset.dx =  $btnDown.dataset.dy =100;

  [$btnUp,$btnDown,$btnLeft,$btnRight].forEach(el=>{
    el.addEventListener('click', handleClick) 
  })
  setResetBtn();
  setRandomMovement();
  setColor();
}

window.addEventListener("DOMContentLoaded", event => {
  piece.init(item);
  init();
});
