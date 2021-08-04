// inch to feet 
const inchInp = document.querySelector('.inch-inp');
const feetInp = document.querySelector('.feet-inp');
const inchBtn = document.querySelector('.inch-btn');
const feetBtn = document.querySelector('.feet-btn');

// even number 
const evenInp = document.querySelector('.evenOrOdd-inp');
const evenOutput =document.querySelector('.evenOrOddOutput');

// leap year 
const leapInp = document.querySelector('.leap-inp');
const leapOutput = document.querySelector('.leap-output');
const leapBtn = document.querySelector('.leap-btn');

// prime ganarator 
// const primeStartInp = document.querySelector('.prime-start-inp')
// const primeEndInp = document.querySelector('.prime-end-inp')
// const primeBtn = document.querySelector('.prime-btn');
// const primeOutput = document.querySelector('.prime-output');
// const primeStart = document.querySelector('.prime-start');
// const primeEnd = document.querySelector('.prime-end');

// factorial 
const facInp = document.querySelector('.fac-inp');
const facBtn = document.querySelector('.fac-btn');
const facOutput = document.querySelector('.fac-output');

const facAlert = document.querySelector('.fac-alert')

inchBtn.addEventListener('click', ()=>inchToFeet())
feetBtn.addEventListener('click', ()=>feetToInch())
leapBtn.addEventListener('click', ()=>isLeapYear())
// primeBtn.addEventListener('click', ()=>getprimeNumber())
facBtn.addEventListener('click', ()=>getFactorial())


// inch to feet funtion 
function inchToFeet(){
    let input  = inchInp.value;
    let feet = input / 12;
    feet = parseFloat(feet.toFixed(2));
    feetInp.value = `${feet} feet`;
   
};

// feet to inch function 
function feetToInch(){
    let input  = feetInp.value;
    let inch = input * 12;
    inch = parseFloat(inch.toFixed(2))
    inchInp.value = `${inch} inch`;
};

// is even cheker function 
function isEven(){
    let number = evenInp.value;
    let result = 'Odd'
    if(number % 2 == 0){
        result = 'Even'
    }
    evenOutput.innerText = result;
}

// leap year cheker function 

function isLeapYear(){
    number = leapInp.value;
    result = 'Not Leap Year'
    if(number % 400 == 0){
        result = 'Leap Year'
    }else if( number % 100 == 0){
        result = 'Not Leap Year'
    }else if(number % 4 == 0){
        result = 'Leap Year'
    }else{
        result = 'Not Leap Year'
    }
    leapOutput.innerHTML = result;

}

// prime   ganarator function
// function getprimeNumber(){
//     let start = primeStartInp.value;
//     let end = primeEndInp.value;
//     primeStart.innerHTML = start;
//     primeEnd.innerHTML = end;
//     // let primetorial =1;
//     for(start; start <= end; start++){
//         primeOutput.TEXT_NODE(` <h2> ${start} </h2>`);
        
//     }
// }

function getFactorial(){
    let number = facInp.value;
    if(number >20){
        number = 0;
        facOutput.innerHTML = " ";
        facInp.value = " " ;
        facAlert.classList.add('visible')
    }else{
        function getFac(number){
            if (number == 1){
            return 1;
            }
            return number * getFac(number - 1)
        }
        facAlert.classList.remove('visible')
        let factorial = getFac(number);
        facOutput.innerText = factorial;
    }
    

}

