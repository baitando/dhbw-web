function documentLoaded() {
    console.log("Hier bin ich, C-Kurs");
    console.warn("Hier bin ich, C-Kurs. Warnung");
    console.error("Hier bin ich, C-Kurs. Fehler");
}

function save() {
    var vorname = window.document.getElementById("vorname").value;

    var nachname = window.document.getElementsByName("nachname")[0].value;


    var person = {
      vorname: vorname,
      nachname: nachname
    };
    window.localStorage.setItem("person", JSON.stringify( person));

    console.log(person);
    alert("Hallo");
}

function load() {
    var json = window.localStorage.getItem("person");
    var person = JSON.parse(json);
    var li = document.createElement("li");
    li.textContent = person.vorname + " " + person.nachname;
    li.setAttribute("class", "dummy");

    document.getElementById("liste").append(li);
}
