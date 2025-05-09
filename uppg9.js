

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument

    var numbers = [0,1,2,3,4,5,6,7,8,9]

    function sort(arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                console.log(arr[i] + " jämnt");
            } else {
                console.log(arr[i] + " udda");
            }
        }
    }
    
    sort(numbers);
}

module.exports = { uppg9 };