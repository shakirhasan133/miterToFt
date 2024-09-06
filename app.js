


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

