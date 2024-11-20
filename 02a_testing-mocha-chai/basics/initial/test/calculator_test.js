describe("calculations", function () {

    const expect = chai.expect;

    it('should correctly sum up two positive numeric values', function () {
        expect(sum(12, 5)).to.equal(17);
    });

    /* TODO #3 Erstellen Sie einen Testfall fuer die Addition von zwei negativen Zahlen */

    /* TODO #4 Erstellen Sie einen Testfall fuer die Addition von einer Zahl als string und einer Zahl als number */

    /* TODO #6 Erstellen Sie einen Testfall fuer die Addition eines Buchstabens und einer Zahl. Pruefen Sie in diesem
        Fall, ob der erwartete Fehler mit dem Text "illegal arguments" aufgetreten ist.

        Versuchen Sie anhand der Dokumentation herauszufinden, wie Sie diese Pruefung durchfuehren muessen. Siehe
        https://www.chaijs.com/api/bdd/#method_throw
    */
});

describe("persistence", function () {

    const expect = chai.expect;

    /* TODO #5 Erstellen Sie einen Testfall, der ueber die Funktion saveCalculation eine Kalkulation speichert und
     *  anschliessend prueft, ob die werte tatsaechlich im Local Storage gespeichert wurden.

     Die Parameter der Funktion saveCalculation sind:
       1. Parameter, Typ number: Der erste Wert fuer eine Addition, Beispiel: 2
       2. Parameter, Typ number: Der zweite Wert fuer eine Addition, Beispiel: 5
       3. Parameter, Typ number: Das Ergebnis der Addition, Beispiel: 7
       4. Parameter, Typ string: Schluessel unter dem die Werte als Objekt im Local Storage gespeichert werden sollen, Beispiel: "calculation".

     Lesen Sie nach dem Aufruf von saveCalculation das Ergebnis aus dem Local Storage aus und vergleichen Sie, ob
     der Wert dem entspricht, was sie erwarten. Mit den Beispielwerten von oben muss das Objekt so aussehen:
     {
       a: 2,
       b: 5,
       result: 7
     }

     Beachten Sie, dass hier Objekte verglichen werden. Damit ist der Einsatz von JSON.parse nach dem Auslesen des
     Wertes aus dem Local Storage noetig. Zudem muessen Sie fuer den Vergleich von Objekten mit Chai einen Vergleich
     auf "deep equals" machen. Siehe https://www.chaijs.com/api/bdd/#method_deep
    */
});