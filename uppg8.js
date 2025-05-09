

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument
    const personOne = {name: "Greta Garbo", age:33};
    const personTwo = {name: "Nils Dacke", age:34};
    const personThree = {name: "Joakim von Anka", age:25};
    const personFour = {name: "John Doe", age:75};
    const personFive = {name: "Michael Schumacher", age:3};

    var persons = [personOne, personTwo, personThree, personFour, personFive]

    function olderThan(arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].age > 30) {
                console.log(arr[i].name);
            }
        }
    }

    olderThan(persons);

}

module.exports = { uppg8 };