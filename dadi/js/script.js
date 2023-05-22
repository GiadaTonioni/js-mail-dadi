//dichiarazione variabili numeri 
let number = Math.random();
console.log(number);

let number_2 = Math.random();
console.log(number_2);

//generazione random dei numeri
document.getElementById("number").innerHTML = Math.floor(Math.random() * 7);

document.getElementById("number_2").innerHTML = Math.floor(Math.random() * 7);
    
//condizioni per vincere o perdere
if (number >= number_2) {
    console.log('Hai vinto');
    document.getElementById("result").innerText = 'Hai vinto';
}

else {
    console.log('Hai perso');
    document.getElementById("result").innerText = 'Hai perso';

}


