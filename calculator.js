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
const primeStartInp = document.querySelector('.prime-start-inp')
const primeEndInp = document.querySelector('.prime-end-inp')
const primeBtn = document.querySelector('.prime-btn');
const primeOutput = document.querySelector('.prime-output');
const primeStart = document.querySelector('.prime-start');
const primeEnd = document.querySelector('.prime-end');
const primeClearBtn = document.querySelector('.prime-clear-btn');

// factorial 
const facInp = document.querySelector('.fac-inp');
const facBtn = document.querySelector('.fac-btn');
const facOutput = document.querySelector('.fac-output');
const facAlert = document.querySelector('.fac-alert');

// celsius to fahrenheit 
const celInp = document.querySelector('.celsius-inp');
const farenInp = document.querySelector('.faren-inp');
const celBtn = document.querySelector('.celsius-btn');
const farenBtn = document.querySelector('.faren-btn');
// exam grade 
const gradeInp = document.querySelector('.grade-inp');
const gradeBtn = document.querySelector('.grade-btn');
const gradeOutput = document.querySelector('.grade-output');


inchBtn.addEventListener('click', ()=>inchToFeet())
feetBtn.addEventListener('click', ()=>feetToInch())
leapBtn.addEventListener('click', ()=>isLeapYear())
primeBtn.addEventListener('click', ()=>getprimeNumber())
facBtn.addEventListener('click', ()=>getFactorial())
primeClearBtn.addEventListener('click', ()=>{
    primeOutput.innerHTML = '  ';
    primeStartInp.value = ' ' ;
    primeEndInp.value = ' ' ;
    primeStart.innerText = '0000';
    primeEnd.innerText = '0000';
})





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
function getprimeNumber(){
    let start = primeStartInp.value;
    let end = primeEndInp.value;
    primeStart.innerHTML = start;
    primeEnd.innerHTML = end;

    for(start; start<=end; start++){
        
        if(start == 1){
            text = '1 is a comsit Number'
            creatSpan(text);
        }
        else{
            var isPrime = true;
            for( i= 2; i<start; i++){
                if(start % i == 0 ){
                    isPrime = false;
                    break;
                }
            }
            if(isPrime == true){
                creatSpan(start);
            }
        }
    }
}

// span element creating function 
function creatSpan(number){
    let span = document.createElement('span');
    span.className = " span bg-primary btn";
    span.innerHTML = number;
    primeOutput.appendChild(span);
}

// get Factorial function 
function getFactorial(){
    let number = facInp.value;
    if(number >20){
        number = 0;
        facOutput.innerHTML = " ";
        facInp.value = " " ;
        facAlert.classList.add('visible')
        facInp.classList.add('border', 'border-danger' , 'border-2')
    }else{
        facInp.classList.remove('border', 'border-danger' , 'border-2')
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

// celsius to farenheit function 
function celToFaren() {
    let celsius = celInp.value;
    let faren = (9/5 * celsius) +32;
    faren = parseFloat(faren.toFixed(3))
    farenInp.value = `${faren}°`;
    
}
function clearAll() {
    if (celInp.value == " ") {
    farenInp = " 5";
   }
}

// fahrenheight to celsius function 
function farenToCel(){
    let faren = farenInp.value;
    let cel = 5/9 * (faren -32);
    cel = parseFloat(cel.toFixed(3));
    celInp.value = `${cel}°`;
}

// grade function 

function examGrade(){
    let mark = gradeInp.value;
    mark = parseInt(mark) ;
    let result = 'You '
    if(mark >100 ){
        result = 'Somthing worng';
    }
    else if(mark>=80 && mark <=100){
        result = 'You Got (A+)';
    }
    else if(mark>=70 && mark <=79){
        result = 'You Got (A)';
    }
    else if(mark>=60 && mark <=69){
        result = 'You Got (A-)';
    }
    else if(mark>=50 && mark <=59){
        result = 'You Got (B)';
    }
    else if(mark>=40 && mark <=49){
        result = 'You Got (C)';
    }
    else if(mark>=33 && mark <=39){
        result = 'You Got (D)';
    }
    else{
        result = 'You are Failed';
    }

    gradeOutput.innerHTML = result;
    
}


