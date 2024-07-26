console.log('Hello World!');
var nav=document.querySelector('.nav');
document.querySelector('.navbn').onclick=()=>{
nav.classList.toggle("navs");
}
/*
var firstname=document.querySelector('#firstname');
var lastname=document.querySelector('#lastname');
var middlename=document.querySelector('#middlename');
var message=document.querySelector('.text');
var age=document.querySelector('#age');
var info=document.querySelector('.info');
var msg='Hello the Director, I am texting to message you for the registration of my child of age'+''+age.value+''+'Who bears the name'+''+firstname.value+''+lastname.value+''+middlename.value+''+'and class ss1. I will be awaiting your response sir';
document.querySelector('#sub').onclick=()=>{
  info.classList='show';
   
  message.append(msg)
  
 window.href='#'
  
};

*/


let changeImageBtn=document.querySelector('.next');
let changeImageBtn2=document.querySelector('.prev');
  
let text=document.querySelector('.text');

var textValue=[
  'Giving Academic Directions.',
  'Building Future Leaders.',
    'Impacting Lives For Global Relevance.',

  'Providing Education to All.',
  'Elevating Your Skills.',
  'Help you Achieve you Goals.',
  'Help you Find your Tribe.',
  'Embracing Our Culture',
  'You Are Welcome',
  'TO COMePASS College',
  '',
  ]
var imgSrcs=[
  '12.jpg',
  '13.jpg',
  '2024-02-21 (1).jpg',
  '2024-02-21 (2).jpg',
  '2024-02-21 (3).jpg',
  '2024-02-21 (4).jpg',
  '2024-02-21 (5).jpg',
  '2024-02-21 (7).jpg',
  '2024-02-21 (6).jpg',
  '2024-02-21 (8).jpg',
  'logo.jpg'
  ];
  
var myImage= document.querySelector('.bgimg');



let imgIndex = 0;
myImage.src = imgSrcs[imgIndex];
text.innerText= textValue[imgIndex];
// Get button element


// Add event listener to button
changeImageBtn.addEventListener("click", function() {
  // Increment image index
  imgIndex = (imgIndex + 1) % imgSrcs.length;
  
  // Change image source
  myImage.src = imgSrcs[imgIndex]
  text.innerText=textValue[imgIndex]
  
});

changeImageBtn2.addEventListener("click", function() {
  // Increment image index
  if ( imgIndex< 1 ) {
    imgIndex = imgSrcs.length - 1;
    
  };
    
  
  imgIndex = (imgIndex - 1) % imgSrcs.length;
  // Change image source
  myImage.src = imgSrcs[imgIndex];
  text.innerText=textValue[imgIndex]

});

