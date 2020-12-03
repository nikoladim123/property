var sliderContainerID = document.getElementById('sliderContainerID');
var banerHeadingAnimContainer = document.getElementsByClassName('banerHeadingAnimContainer');



var jsxImage = `<img src="assets/images/banner-slider/${'ce vidimo'}.jpg" alt="">`;
var newImageElem;
var imgNum = 0;
function createNewElem() {
  var newDiv = document.createElement('div');
  newDiv.innerHTML = `<img src="assets/images/${"pic"+imgNum%2}.webp" alt="">`;
  sliderContainerID.removeChild(sliderContainerID.children[1]);
  sliderContainerID.insertAdjacentElement('afterbegin',newDiv);
  imgNum++;
  console.log(imgNum%6);
}

var jsxProperty = ['Sell','Rent','Buy'];
var propertyModule = 0;


function intervalStart(){
  setInterval(function () {
    banerHeadingAnimContainerFun();
  }, 8000);
}

function sliderClassStartFun() {
  sliderContainerID.className += ' sliderContainer';
  setInterval(function () {
    createNewElem();
  }, 8000);
}

window.addEventListener('load',()=>{
  sliderClassStartFun();
});
