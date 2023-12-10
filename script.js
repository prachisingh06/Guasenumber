
const random = parseInt(Math.random() * 10 +1);
console.log(random);
const submit = document.querySelector('#subt')
//console.log(submit);
const  userinput = document.querySelector('#guessfield')
//console.log(userinput);
const guesslot = document.querySelector('.guesses')
//console.log(guesslot);
const renaining = document.querySelector('.lastresult')
//console.log(renaining);
const low = document.querySelector('.low')
//console.log(low);
const startover = document.querySelector('.resultparas') 
//console.log(startover);

const p =document.createElement('p')

let prevguess =[]
let numguess = 1

let playgame =  true;
//console.log(playgame);
if(playgame){
submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(userinput.value)
    //console.log(guess);
    validateguess(guess)
})
}
function validateguess(guess){
if(isNaN(guess)){
    alert('please enter a valid number')
}else if(guess <1){
    alert('please enter a number more then 1')
}else if(guess>100){
    alert('please enter a  number less then 100')
}else{
    prevguess.push(guess)
    if(numguess===10){
        displayguess(guess)
        displaymessage(`game over. random number was ${random}`)
        endgame()
    }
    else{
        displayguess(guess)
        cheackguess(guess)
    }
}
}

function cheackguess(guess){
   if(guess===random){
    displaymessage('you guessed is right');
    endgame();
   }
   else if(guess<random){
    displaymessage('number is to low');
   }
   else if(guess>random){
    displaymessage('number is to high');

}
}

function displaymessage(message){
 low.innerHTML=`<h2>${message}</h2>`
 console.log(message);
}

function displayguess(guess){
    userinput.value = ''
    guesslot.innerHTML += `${guess}  ,  `;
    numguess++;
    renaining.innerHTML =`${11-numguess}  `;

}

function newgame(){
const newgamebutton = document.querySelector('#newgame')
newgamebutton.addEventListener('click',function(e){
    randomnumber = parseInt(Math.random()+ 100+1);
    prevguess = []
    numguess = 1
    guesslot.innerHTML =''
    renaining.innerHTML= `${11-numguess}`;
    userinput.removeAttribute('disabled')
    startover.removeChild(p)
    playgame= true;

})
}

function endgame(){
userinput.value= ''
userinput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML = `<h2 id="newgame"><center>start new game</center></h2>`;
startover.appendChild(p)
playgame = false;
newgame()

}

