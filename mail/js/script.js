//elenco mail autorizzate
let autorizzati = ['trapano@gmail.com', 'avvitatore@gmail.com', 'martello@gmail.com', 'sparachiodi@gmail.com',
'seghetto@gmail.com', 'avvitatore@gmail.com', 'cricchetto@gmail.com', 'taglierino@gmail.com', 
'brugola@gmail.com', 'metrolaser@gmail.com']

console.log (autorizzati)

//inserimento mail utente
let email = prompt('Inserire la propria e-mail')
//condizione di controllo della mail rispetto all'elenco
let flag = false 

for (let i=0; i<autorizzati.length; i++){
    if(autorizzati[i] === email){
        flag = true
    }
}

if(flag === true){
    console.log('Mail autorizzata')
    document.getElementById('messaggio').innerHTML = `${'Mail autorizzata'}`
}

else{
    console.log('Mail non autorizzata')
    document.getElementById('messaggio').innerHTML = `${'Mail non autorizzata'}`
}

console.log(flag)

