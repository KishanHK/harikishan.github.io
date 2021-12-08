/*const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myVariable = 'Steve';
myVariable = 'Bob';


function multiply(num1,num2){
    let result = num1*num2;
    return result;
}

document.querySelector('html').onclick = function(){
    alert('Ouch! stop poking me!')
}
*/

let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Firefox_logo,_2019.svg.png'){
        myImage.setAttribute('src','images/firefox2.png');
    }else{
        myImage.setAttribute('src','images/Firefox_logo,_2019.svg.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name.');
    if(!myName){
        setUserName();
    }else{
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;   
    } 
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName =  localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function(){
    setUserName();
}