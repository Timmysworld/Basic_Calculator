function calculate (numEntered){
    if (numEntered == 'C'){
        document.getElementById('answer'). innerText = '';
    }
    else if (numEntered == '='){
        document.getElementById('answer'). innerText = eval(document.getElementById ('answer').innerText);
    }
    else if (numEntered == '%'){
        document.getElementById('answer').innerText = document.getElementById('answer').innerText/100;
    }
    else if (numEntered == '+/-'){
        
    }
    else {
    document.getElementById('answer').innerText += numEntered;
    }
} 
