window.onload = function(){
    slideOne();
    slideTwo();
    slideThree();
    slideFour();
    slideFive();
    slideSix();
    slideSeven();
    slideEight();
    slideNine();
    slideTen();
    slideEleven();
    slideTwelve();
    slideThirteen();
    slideFourteen();
}

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap1 = 0;
let sliderTrack1 = document.querySelector(".slider-track1");
let sliderMaxValue1 = document.getElementById("slider-1").max;

function slideOne(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap1){
        sliderOne.value = parseInt(sliderTwo.value) - minGap1;
    }
    displayValOne.textContent = sliderOne.value;
    fillColor1();
}
function slideTwo(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap1){
        sliderTwo.value = parseInt(sliderOne.value) + minGap1;
    }
    displayValTwo.textContent = sliderTwo.value;
    fillColor1();
}
function fillColor1(){
    percent1 = (sliderOne.value / sliderMaxValue1) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue1) * 100;
    sliderTrack1.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #196422 ${percent1}% , #196422 ${percent2}%, #dadae5 ${percent2}%)`;
}


let sliderThree = document.getElementById("slider-3");
let sliderFour = document.getElementById("slider-4");
let displayValThree = document.getElementById("range3");
let displayValFour = document.getElementById("range4");
let minGap2 = 0;
let sliderTrack2 = document.querySelector(".slider-track2");
let sliderMaxValue2 = document.getElementById("slider-3").max;

function slideThree(){
    if(parseInt(sliderFour.value) - parseInt(sliderThree.value) <= minGap2){
        sliderThree.value = parseInt(sliderFour.value) - minGap2;
    }
    displayValThree.textContent = sliderThree.value;
    fillColor2();
}
function slideFour(){
    if(parseInt(sliderFour.value) - parseInt(sliderThree.value) <= minGap2){
        sliderFour.value = parseInt(sliderThree.value) + minGap2;
    }
    displayValFour.textContent = sliderFour.value;
    fillColor2();
}
function fillColor2(){
    percent1 = (sliderThree.value / sliderMaxValue2) * 100;
    percent2 = (sliderFour.value / sliderMaxValue2) * 100;
    sliderTrack2.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #196422 ${percent1}% , #196422 ${percent2}%, #dadae5 ${percent2}%)`;
}


let sliderFive = document.getElementById("slider-5");
let sliderSix = document.getElementById("slider-6");
let displayValFive = document.getElementById("range5");
let displayValSix = document.getElementById("range6");
let minGap3 = 0;
let sliderTrack3 = document.querySelector(".slider-track3");
let sliderMaxValue3 = document.getElementById("slider-5").max;

function slideFive(){
    if(parseInt(sliderSix.value) - parseInt(sliderFive.value) <= minGap3){
        sliderFive.value = parseInt(sliderSix.value) - minGap3;
    }
    displayValFive.textContent = sliderFive.value;
    fillColor3();
}
function slideSix(){
    if(parseInt(sliderSix.value) - parseInt(sliderFive.value) <= minGap3){
        sliderSix.value = parseInt(sliderFive.value) + minGap3;
    }
    displayValSix.textContent = sliderSix.value;
    fillColor3();
}
function fillColor3(){
    percent1 = (sliderFive.value / sliderMaxValue3) * 100;
    percent2 = (sliderSix.value / sliderMaxValue3) * 100;
    sliderTrack3.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #196422 ${percent1}% , #196422 ${percent2}%, #dadae5 ${percent2}%)`;
}

let sliderSeven = document.getElementById("slider-7");
let sliderEight = document.getElementById("slider-8");
let displayValSeven = document.getElementById("range7");
let displayValEight = document.getElementById("range8");
let minGap4 = 0;
let sliderTrack4 = document.querySelector(".slider-track4");
let sliderMaxValue4 = document.getElementById("slider-7").max;

function slideSeven(){
    if(parseInt(sliderEight.value) - parseInt(sliderSeven.value) <= minGap4){
        sliderSeven.value = parseInt(sliderEight.value) - minGap4;
    }
    displayValSeven.textContent = sliderSeven.value;
    fillColor4();
}
function slideEight(){
    if(parseInt(sliderEight.value) - parseInt(sliderSeven.value) <= minGap4){
        sliderEight.value = parseInt(sliderSeven.value) + minGap4;
    }
    displayValEight.textContent = sliderEight.value;
    fillColor4();
}
function fillColor4(){
    percent1 = (sliderSeven.value / sliderMaxValue4) * 100;
    percent2 = (sliderEight.value / sliderMaxValue4) * 100;
    sliderTrack4.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #196422 ${percent1}% , #196422 ${percent2}%, #dadae5 ${percent2}%)`;
}

let sliderNine = document.getElementById("slider-9");
  let sliderTen = document.getElementById("slider-10");
  let displayValNine = document.getElementById("range9");
  let displayValTen = document.getElementById("range10");
  let minGap5 = 0;
  let sliderTrack5 = document.querySelector(".slider-track5");
  let sliderMaxValue5 = document.getElementById("slider-9").max;
  
  function slideNine(){
      if(parseInt(sliderTen.value) - parseInt(sliderNine.value) <= minGap5){
          sliderNine.value = parseInt(sliderTen.value) - minGap5;
      }
      displayValNine.textContent = sliderNine.value;
      fillColor5();
  }
  function slideTen(){
      if(parseInt(sliderTen.value) - parseInt(sliderNine.value) <= minGap5){
          sliderTen.value = parseInt(sliderNine.value) + minGap5;
      }
      displayValTen.textContent = sliderTen.value;
      fillColor5();
  }
  function fillColor5(){
      percent1 = (sliderNine.value / sliderMaxValue5) * 100;
      percent2 = (sliderTen.value / sliderMaxValue5) * 100;
      sliderTrack5.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #196422 ${percent1}% , #196422 ${percent2}%, #dadae5 ${percent2}%)`;
  }

  let sliderEleven = document.getElementById("slider-11");
  let sliderTwelve = document.getElementById("slider-12");
  let displayValEleven = document.getElementById("range11");
  let displayValTwelve = document.getElementById("range12");
  let minGap6 = 0;
  let sliderTrack6 = document.querySelector(".slider-track6");
  let sliderMaxValue6 = document.getElementById("slider-11").max;
  
  function slideEleven(){
      if(parseInt(sliderTwelve.value) - parseInt(sliderEleven.value) <= minGap6){
          sliderEleven.value = parseInt(sliderTwelve.value) - minGap6;
      }
      displayValEleven.textContent = sliderEleven.value;
      fillColor6();
  }
  function slideTwelve(){
      if(parseInt(sliderTwelve.value) - parseInt(sliderEleven.value) <= minGap6){
          sliderTwelve.value = parseInt(sliderEleven.value) + minGap6;
      }
      displayValTwelve.textContent = sliderTwelve.value;
      fillColor6();
  }
  function fillColor6(){
      percent1 = (sliderEleven.value / sliderMaxValue6) * 100;
      percent2 = (sliderTwelve.value / sliderMaxValue6) * 100;
      sliderTrack6.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #196422 ${percent1}% , #196422 ${percent2}%, #dadae5 ${percent2}%)`;
  }

  let sliderThirteen = document.getElementById("slider-13");
  let sliderFourteen = document.getElementById("slider-14");
  let displayValThirteen = document.getElementById("range13");
  let displayValFourteen = document.getElementById("range14");
  let minGap7 = 0;
  let sliderTrack7 = document.querySelector(".slider-track7");
  let sliderMaxValue7 = document.getElementById("slider-13").max;
  
  function slideThirteen(){
      if(parseInt(sliderFourteen.value) - parseInt(sliderThirteen.value) <= minGap7){
          sliderThirteen.value = parseInt(sliderFourteen.value) - minGap7;
      }
      displayValThirteen.textContent = sliderThirteen.value;
      fillColor7();
  }
  function slideFourteen(){
      if(parseInt(sliderFourteen.value) - parseInt(sliderThirteen.value) <= minGap7){
          sliderFourteen.value = parseInt(sliderThirteen.value) + minGap7;
      }
      displayValFourteen.textContent = sliderFourteen.value;
      fillColor7();
  }
  function fillColor7(){
      percent1 = (sliderThirteen.value / sliderMaxValue7) * 100;
      percent2 = (sliderFourteen.value / sliderMaxValue7) * 100;
      sliderTrack7.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #196422 ${percent1}% , #196422 ${percent2}%, #dadae5 ${percent2}%)`;
  }