


const button=  document.querySelector('#convertBtn');
const miterinput = document.querySelector('#meterInput');

function meterToFit (mvalue){

    if(mvalue >0){
     const feetconverter= mvalue/12;
     const roundvalue = parseInt(feetconverter)
 
     const inch = mvalue % 12;
     
     const result = roundvalue +" ft " + inch +" inch";
     
     document.querySelector('#feetOutput').innerHTML = result;
    }
    else{
 
     document.querySelector('#feetOutput').innerHTML = "Enter a valid number";
    }
}

button.addEventListener('click',()=>{
    const mitervalue = document.querySelector('#meterInput').value;
    meterToFit(mitervalue);
});

miterinput.addEventListener('keypress',()=>{
if(event.key=== 'Enter'){
    const entfeetvalue = document.querySelector('#meterInput').value;
    meterToFit(entfeetvalue);
}
 
});




// Leap Year Count 

 const LeapYearconvertBtn = document.querySelector("#LeapYearconvertBtn");
 let  leapYearInput = document.querySelector("#leapYearInput").value;

 function isLeapYear (yearValue){

    if(yearValue % 100 !==0 && yearValue % 4 ===0 ){
        const isleap1 = yearValue + " is Leap Year";
        document.querySelector("#LeapOutput").innerHTML = isleap1;
    }
    else if (yearValue % 100 ===0 && yearValue % 400 ===0 ){
        const isleap2 = yearValue + " is Leap Year";
        document.querySelector("#LeapOutput").innerHTML = isleap2;
    }

    else{

        document.querySelector("#LeapOutput").innerHTML = yearValue + " is not Leap Year";
    }
 }


 LeapYearconvertBtn.addEventListener("click", ()=>{
    let  leapYearInput1 = document.querySelector("#leapYearInput").value;
    isLeapYear(leapYearInput1);
 });
 





//   Duplicate Checker

const DuplicateInput = document.querySelector("#DuplicateInput").value.trim();



const DuplicateCheckBtn = document.querySelector("#DuplicateCheckBtn");

function DuplicateChker (userValue){
    const unique = [];
    for(let num  of userValue){
        if(unique.includes(num)===false){
            unique.push(num);
        }
    }
    document.querySelector("#NotDuplicateOutput").innerHTML = unique +" is unique number";

}

DuplicateCheckBtn.addEventListener("click", ()=>{

    const duplicateArr = [];
    let x =  document.querySelector("#DuplicateInput").value;
    let y = x.split(",");

    for (let i = 0; i < y.length; i++) {
        if (i < y.length) {  
            duplicateArr.push(Number(y[i].trim())); 
        }
    }

     DuplicateChker(duplicateArr);
    

})



// Fahrenheit to Celsius Converter

const fahrenheitToCelsiusBtn = document.querySelector("#fahrenheitToCelsiusBtn");

function fahrenheitToCelsius (fvalue){

    if(fvalue>0){
        const Celsius = (fvalue-32)/1.8;
    
        const cel = Celsius.toFixed(2);
        document.querySelector("#celciusOutput").innerHTML = cel +" Degre Celsius";
    }
    else {
        document.querySelector("#celciusOutput").innerHTML ="Enter a valid number";
    }
    

    // return cel;

}

fahrenheitToCelsiusBtn.addEventListener("click", ()=>{
    let Fahrenheit = document.querySelector("#Fahrenheit").value;
    fahrenheitToCelsius(Fahrenheit);

})

 const FahrenheitEnter = document.querySelector("#Fahrenheit");

 FahrenheitEnter.addEventListener("keypress", ()=>{
    if(event.key==="Enter"){
        let Fahrenheit = document.querySelector("#Fahrenheit").value;
    fahrenheitToCelsius(Fahrenheit);
    }
 })































