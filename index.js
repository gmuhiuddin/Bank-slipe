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
yourNumberZero.innerText = counting.toFixed(0)

let nowServingZero = document.getElementById('nowServingZero');
nowServingZero.innerText = counting.toFixed(0) - minus.toFixed(0) 
