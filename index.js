let year = document.getElementById('year');
let month = document.getElementById('month');
let day = document.getElementById('day');


let hour = document.getElementById('hour');
let minuts = document.getElementById('minuts');

let NowDate = new Date()

year.innerText  = NowDate.getFullYear()

month.innerText = NowDate.getMonth()+1

day.innerText = NowDate.getDate()

hour.innerText = NowDate.getHours()

minuts.innerText = NowDate.getMinutes()


let counting = Math.random()*99
let minus = Math.random()*6
let yourNumberZero = document.getElementById('yourNumberZero')
yourNumberZero.innerText = Math.round(counting)

let nowServingZero = document.getElementById('nowServingZero');
nowServingZero.innerText = Math.round(counting) - Math.round(minus++)

let button = document.getElementById('theme-changer-btn');
button.addEventListener('click',themeChanger)

function themeChanger (){
    let body = document.getElementsByTagName('body')

    if(body[0].style.backgroundColor !== 'black'){

body[0].style.backgroundColor = 'black';

let slipeDiv = document.getElementsByClassName('slipe-div'); 
slipeDiv[0].style.borderColor = 'white'
slipeDiv[0].style.boxShadow = '1px 1px 13px white'
slipeDiv[0].style.color = 'white'
slipeDiv[0].style.backgroundColor = 'black'

let headings = document.getElementsByClassName('headings')
headings[0].style.borderColor = 'white'

button.style.backgroundColor = 'black'
button.style.color = 'white'
button.style.borderColor = 'white'
button.style.boxShadow = '1px 1px 3px white'


}else if (body[0].style.backgroundColor == 'black'){
    body[0].style.backgroundColor = 'white';

    let slipeDiv = document.getElementsByClassName('slipe-div'); 
    slipeDiv[0].style.borderColor = 'black'
    slipeDiv[0].style.color = 'black'
    slipeDiv[0].style.backgroundColor = 'white'
    
    let headings = document.getElementsByClassName('headings')
    headings[0].style.borderColor = 'black'
    
    button.style.backgroundColor = 'white'
    button.style.color = 'black'
    button.style.borderColor = 'black'
      
}
}