const div1 = document.querySelector('div');
//console.log(div1.textContent);

const divs = document.querySelectorAll('div');
//console.log(divs);
//loop through node list outputting element that is matching the div 
//divs.forEach((div) => {
    //console.log(div.textContent);
//});

const ele1 = document.querySelector('.red');
console.log(ele1);

const eles = document.querySelectorAll('.red');
console.log(eles[0]);

ele1.textContent = "Ele1";
eles[0].textContent = "Get the Bag!";  
document.body.children[1].textContent = "Deja Vu";
console.log(ele1.textContent);

const eleID = document.querySelector('#yellow');
eleID.textContent = "NEW ID";

divs.forEach((div, index) => {
    div.textContent += ` - (${index})`;
});