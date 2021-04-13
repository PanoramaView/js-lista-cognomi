
var cogList = ['Bianchi', 'Neri', 'Rossi', 'Gialli'];
var check = true;
//chiedi cognome
while (check) {
    var checkCog = false;
    var input = prompt("Cognome: ");

    //check if cognome already exists
    for (var i = 0; i < cogList.length; i++) {
        if ( input === cogList[i]){
            checkCog = true;
        }
    }
    //if yes, alert
    if (checkCog){
        alert("Cognome gia' presente.");
    } 
    //else push in array
    else{ 
        cogList.push(input);
    }

    var checkR = true;
    while (checkR && !checkCog) {
        var risposta = prompt("Vuoi un altro cognome? si/no");
        if (risposta === 'no') {
            check = false;
            checkR = false;
        } else if (risposta === 'si') {
            checkR = false;
        } else {
            alert("Devi rispondere con si o no.");
        }
    }
}


//order alphabetically
cogList.sort();
//print
document.write(cogList);
console.log(cogList);


//ok non mi serve lol
var alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


/*
switch(alfabeto){
    case "a":
        break;
    case "b":
        break;
}
*/