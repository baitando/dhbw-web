function documentLoaded() {
    console.log("Bin da in der Konsole");
}

function save() {
    console.log("Speichern");

    var vornameElement = document.getElementsByName("vorname");
    var vorname = vornameElement[0].value;

    var nachname = document.getElementById("nachname").value;

    var person = {
        vorname: vorname,
        nachname: nachname
    };

    console.log(person);
    alert("aajdfkl");
    var personString = JSON.stringify(person);
    localStorage.setItem("person", personString);


}

function load() {
    var jsonString = localStorage.getItem("person");

    if (jsonString) {
        var person = JSON.parse(jsonString);
        console.log(person);
    } else {
        alert("Existiert nicht");
    }
}
