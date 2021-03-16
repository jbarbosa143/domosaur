const msm =document.querySelector('.mess-with-me');
msm.style.fontSize = "40px";

const msmbg = document.querySelector('.mess-with-me')
msmbg.style.backgroundColor = 'green';

const dinoimg = document.querySelector('#hide-me');
dinoimg.style.display ='none';

const dinimg = document.querySelector('#triceratops');
dinimg.style.width = '324px';

// const span = document.querySelector('span')
function fontColor(){
    const orangeFont =document.querySelector('.mess-with-me');
    orangeFont.style.color = "orange";
}
msmbg.addEventListener('click',fontColor);

function redBorder(){
    const borderColor = document.querySelector('#triceratops');
    borderColor.style.border ="5px solid red";
}
dinimg.addEventListener('click',redBorder);

const featDino = document.querySelector('#feathers');
function opa(){
    const transp = document.querySelector('#feathers');
    transp.style.opacity = '50%';
}
featDino.addEventListener('click',opa);

const rowBg =document.querySelector('#toggle');
function toggy(){
    const rowcolor = document.querySelector('#row');
    rowcolor.style.backgroundColor = 'blue';
}
rowBg.addEventListener('click',toggy);

const hover = document.querySelector('#biggify');
function enlarge(){
    const grow =document.querySelector('#biggify');
    grow.style.width = '200px';
}
hover.addEventListener('mouseover',enlarge);