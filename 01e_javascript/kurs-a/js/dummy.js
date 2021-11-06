function documentLoaded() {
    console.log("Document loaded");
}

function formSubmitted() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;

    var person = {
        firstName: firstName,
        lastName: lastName
    };
    console.log(person);

    var personJson = JSON.stringify(person);
    localStorage.setItem("person", personJson);

    alert(personJson);
}

function loadPerson() {

    if(localStorage.getItem("blublub"))
    {
        alert("Existiert nicht");
    }

    var persons = [
        {
            vorname: "Miriam",
            nachname: "Mustermann"
        }
    ];
    localStorage.setItem("persons", JSON.stringify(persons));

    var newPersons = JSON.parse(localStorage.getItem("persons"));
    newPersons.append({
        vorname: "Max",
        nachname: "mustermann"
    })

    localStorage.setItem("persons", JSON.stringify(newPersons));
}

function loadPerson2() {
    var person = JSON.parse(localStorage.getItem("person"));

    var li = document.createElement("li");
    li.textContent = person.firstName + " " + person.lastName;
   document.getElementById("liste").append(li);

}
