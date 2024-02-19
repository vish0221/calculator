let display = document.getElementById('display');

function appendToDisplay(value){
    display.value += value;
}

function clearDisplay(){
    display.value='';
}

function calculate(){
    try{

        display.value= eval(display.value);
    }
    catch{
        display.value='Error'
    }
}
 

function appendToDisplay(value){
    if(value=='DEL'){
        display.value= display.value.slice(0,-1);
    }else{
        display.value += value;
    }
}