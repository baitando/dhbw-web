function run() {
    /*
       TODO #1 Konstante 'name' deklarieren und initialisieren

       Achten Sie darauf, dass es sich um eine Konstante handeln soll. Weisen Sie der Konstante einen beliebigen Wert
       als String zu (z.B. Miriam).
     */

    /*
      TODO #2 Variable 'greeting' deklarieren, initialisieren und auf Konsole ausgeben

      Achten Sie darauf, dass es sich um eine Variable handeln muss, da sich der Wert nach der Initialisierung aendern
      wird. Belegen Sie die Variable mit dem Begruessungstext 'Hello <name>!', wobei der <name> durch den Wert der
      Konstante 'name' ersetzt werden soll.
      a) Setzen Sie den String zunaechst durch Nutzung des Operators '+' zusammen.
      b) Geben Sie den Wert von 'greeting' auf der Konsole aus.
      c) Belegen Sie die Variable 'greeting' nun neu, indem Sie den bisherigen Wert unter Nutzung eines Template Strings
         ueberschreiben.
      d) Geben Sie den neuen Wert von 'greeting' auf der Konsole aus.
     */

    /*
      TODO #4 Aufruf der Funktion 'calcSum' mit unterschiedlichen Eingaben und Ergebnisausgabe auf Konsole

      Rufen Sie 'calcSum' nacheinander mit den unten dargestellten Parameterkonstellationen auf und geben Sie das
      Ergebnis auf der Konsole aus.
      a) Zwei Ganzzahlen als Number.
      b) Zwei Flieskommazahlen als Number.
      c) Eine Ganzzahl als String und eine Ganzzahl als Number.
      d) Eine Ganzzahl als Number und ein alphanumerischer String
      e) Fuer beide undefined.
     */

    /*
      TODO #5 Erstellen eines Datenobjekts mit den Daten einer Addition

      Erstellen Sie ein Objekt 'calcObject' als Konstante.
      a) Fuegen Sie ein Attribut 'value1' mit einer Ganzzahl hinzu.
      b) Fuegen Sie ein Attribut 'value2' mit einer Ganzzahl hinzu.
      c) Fuegen Sie ein Attribut 'sum' mit dem Ergebnis der Funktion 'calcSum' hinzu, die Sie mit den selben Werten wie
         'value1' und 'value2' aufrufen.
      d) Geben Sie nun das Objekt (und nur das Objekt ohne weiteren Text in dieser Ausgabe) auf der Konsole aus.
     */

    /*
      TODO #6 Objekt in JSON-String umwandeln, Ergebnis in Konstante speichern und auf Konsole ausgeben

      a) Konvertieren Sie das Objekt 'calcObject' in einen JSON-String.
      b) Speichern Sie das Ergebnis in der Konstante 'serializedCalc'.
      c) Geben Sie den Wert von 'serializedCalc' auf der Konsole aus.
      d) Vergleichen Sie die Ausgabe mit der Ausgabe des Objekts aus der vorherigen Aufgabe.
     */

    /*
      TODO #7 JSON-String in Objekt zurueckwandeln und Attribute auf Konsole ausgeben

      a) Konvertieren Sie den JSON-String aus 'serializedCalc' zurueck in ein Javascript-Objekt und weisen Sie es
         der Konstante 'deserializedCalc' zu.
      b) Geben Sie die Attribute des Objekts 'deserializedCalc' in einem String auf der Konsole aus, der folgendermassen
         aufgebaut ist: 'Die Addition von <value1> und <value2> ergibt <sum>'.
     */
}

/*
  TODO #3 Funktion 'calcSum' erstellen

  Legen Sie eine neue Funktion an. Die Funktion soll zwei Parameter erhalten und die Addition nur ausfuehren, wenn
  beide Parameter Ganzzahlen (Integer) sind. Im Falle von 'undefined' oder anderen Datentypen bzw. Fliesskommazahlen
  (Float) soll eine Fehlermeldung auf der Konsole ausgegeben werden.
  a) Erstellen Sie die Funktion 'calcSum' am Ende der Datei. Definieren Sie zwei Parameter.
  b) Pruefen Sie, ob beide Parameter valide Integer sind. Sie koennen hierzu die Methode Number.isInteger(<value>)
     verwenden, die im Falle eines validen Integer den Wahrheitswert true liefert.
  c) Im Falle von zwei validen Integer als Parameter addieren Sie die beiden Werte und geben das Ergebnis an den
     Aufrufer zurueck.
  d) Falls mindestens einer der Parameter kein valider Integer ist, geben Sie eine entsprechende Fehlermeldung auf der
     Konsole aus. Die Rueckgabe der Funktion soll in diesem Fall undefined sein.
 */