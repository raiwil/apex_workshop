# 11. JavaScript in APEX

Fuer Entwickler, die mit SQL und PL/SQL vertraut sind, bietet APEX eine extrem produktive Umgebung fuer den Bau datenbankzentrierter Anwendungen. APEX-Anwendungen sind jedoch Webanwendungen, und JavaScript bleibt die wichtigste Programmiersprache des Browsers.

Im Laufe der Jahre ist JavaScript innerhalb von APEX immer wichtiger geworden. Das APEX-Entwicklungsteam nutzt JavaScript intensiv, um die reichhaltigen UI-Komponenten des Frameworks umzusetzen. Anwendungsentwickler koennen JavaScript einsetzen, um das Verhalten ihrer Anwendungen anzupassen und zu erweitern.

Die gute Nachricht: APEX-Entwickler muessen keine JavaScript-Experten werden. Schon ein grundlegendes Verstaendnis von JavaScript kann eine Anwendung deutlich verbessern, etwa durch eigene Validierungen, dynamisches UI-Verhalten, clientseitige Verarbeitung und Integration mit Browser-APIs oder Drittanbieterbibliotheken.

!!! tip "LiveLab"
    Oracle LiveLabs stellt einen Workshop namens **JavaScript for APEX Developers** bereit.
    [Hier klicken](https://livelabs.oracle.com/ords/r/dbpm/livelabs/view-workshop?wid=3863){target="_blank"}

Eine grosse Staerke von APEX ist, dass seine Funktionalitaet mit JavaScript erweitert werden kann, auch wenn du kein JavaScript-Experte bist. Hier sind einige einfache Beispiele fuer die Verwendung von JavaScript in APEX.

## 11.1 JavaScript in der Anwendung

### 11.1.1 Komponenteninitialisierung

Viele Komponenten in APEX basieren auf Open-Source-Bibliotheken und bieten mehr Funktionen, als im App Builder sichtbar sind. Mit JavaScript koennen diese zusaetzlichen Funktionen aktiviert werden.
Zum Beispiel basiert die APEX-Kalenderkomponente auf einer Komponente namens FullCalendar. Die APEX-Dokumentation zeigt einige Beispiele, wie der Kalender per JavaScript angepasst werden kann. Eine vollstaendige Liste der Einstellungen findest du in der [FullCalendar](https://fullcalendar.io/){target="_blank"}-Dokumentation.
Obwohl diese zusaetzlichen Parameter in der UI nicht verfuegbar sind, koennen sie per JavaScript gesetzt werden. Der App Builder stellt dafuer bereits ein Feld fuer JavaScript Initialization Code bereit.

!!! exercise "Kalenderwochen zum Kalender hinzufuegen"
    Im folgenden Beispiel wird der Kalender so konfiguriert, dass er in der wochenweisen Time-Grid-Ansicht startet. Kalenderwochennummern werden angezeigt, die aktuelle Zeit wird mit einem now indicator hervorgehoben, und der sichtbare Zeitraum wird auf Geschaeftszeiten zwischen 08:00 und 22:00 begrenzt. Zusaetzlich werden Zeitslots in 30-Minuten-Intervallen angezeigt.
    Waehle die zuvor erstellte Kalenderregion aus und wechsle im rechten Bereich zum Tab **Attributes**. Scrolle zum Abschnitt **Advanced** und fuege den folgenden Code in die Eigenschaft **Initialization JavaScript Function** ein.

    ``` JavaScript
       function ( pOptions) {
            pOptions.initialView    = 'timeGridWeek';
            pOptions.weekNumbers    = true;
            pOptions.weekText       = 'CW ';
            pOptions.weekTextLong   = 'Week ';
            pOptions.nowIndicator   = true;
            pOptions.slotMinTime    = '08:00:00';
            pOptions.slotMaxTime    = '22:00:00';
            pOptions.slotDuration   = '00:30:00';

            return pOptions;
        }
    ```

    ![javascriptinit](assets/javascript/javascriptinit.png){ style="display:block;margin:auto;" }

### 11.1.2 Dynamic Actions

Dynamic Actions sind der deklarative APEX-Weg, clientseitige Interaktivitaet zu einer Anwendung hinzuzufuegen, ohne grosse Mengen JavaScript-Code zu schreiben. Sie basieren auf Events, Conditions und Actions und erlauben Entwicklern, auf Benutzerinteraktionen wie Klicks, Wertaenderungen oder Page-Load-Events zu reagieren.

Obwohl Dynamic Actions vollstaendig ueber den APEX Builder erstellt werden koennen, fuehren sie im Hintergrund oft JavaScript aus. Entwickler koennen Dynamic Actions auch mit eigenem JavaScript erweitern, wenn fortgeschritteneres Verhalten benoetigt wird.

### 11.1.3 Flexibilitaet und Agilitaet

Wir wollen nun das Label des Apply-Changes-Buttons in der Employee Form so aendern, dass der Name des aktuellen Mitarbeiters als Label verwendet wird. Alle Objekte bekommen eine interne ID, die im Browser verwendet wird (HTML DOM ID). Wir koennen diese ID im Page Designer setzen, damit wir wissen, welches Objekt wir per JavaScript manipulieren wollen.

!!! exercise "Dynamisches Button-Label"
    Navigiere zu Seite 3 und setze die **HTML DOM ID** des SAVE-Buttons auf `MYBUTTON`.

    ![domid](assets/javascript/domid.png){ style="display:block;margin:auto;" }

    <div class="two-columns">
      <div style="flex: 50%;">
           Waehle danach im Tab Dynamic Actions (Blitz-Icon) bei **Page Load** den Eintrag **Create Dynamic Action**.
      </div>
      <div style="flex: 50%;">
          ![createda](assets/javascript/createda.png){ style="display:block;margin:auto;" }
      </div>
    </div>

    Setze den **Name** der Action auf `SetLabel`. Das **Event** `Page Load` sollte bereits vorbelegt sein, weil wir die Action auf diese Weise erstellt haben.

    ![createda2](assets/javascript/createda2.png){ style="display:block;margin:auto;" }

    Als **True Action** (nach der Erstellung Show genannt und rot markiert) verwenden wir `Execute JavaScript Code`. Kopiere den Code aus dem folgenden Snippet. Wir lesen den Wert des Items `P3_ENAME` und haengen ihn mit dem Wort *Save* als Label an den Button an, referenziert ueber seine HTML DOM ID.

    ``` JavaScript
        const mylabel = 'Save ' + $x("P3_ENAME").value;
        $('#MYBUTTON span').text(mylabel);
    ```
    ![createda3](assets/javascript/createda3.png){ style="display:block;margin:auto;" }

    Starte die Anwendung und sieh dir das Button-Label an.

Das ist nur ein einfaches Beispiel. Sieh dir fuer anspruchsvollere Aufgaben die [JavaScript API](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/index.html){target="_blank"} an.

!!! bytheway "JavaScript auf Seitenebene"
    <div class="two-columns">
       <div>
          *Uebrigens*,<br>
          auf Seitenebene kannst du JavaScript-Code direkt oder ueber referenzierte Dateien hinzufuegen. Auf derselben Ebene kannst du auf die gleiche Weise eigenes CSS fuer die Seite hinzufuegen.
       </div>
       <div>
          ![Mode](assets/javascript/jsatpage.png){ style="display:block;margin:auto;" }
       </div>
    </div>

## 11.2 JavaScript nutzen, um den Application Flow zu verstehen

**Werte abfragen**

JavaScript kann auch in der Entwicklerkonsole deines Browsers verwendet werden. Navigiere zum Beispiel zur Employee Form und oeffne die Konsole mit `Ctrl+Shift+I`. Die Konsole sieht je nach Browser anders aus und kann an verschiedenen Seiten des Browserfensters angedockt sein.

![console](assets/javascript/console.png){ style="display:block;margin:auto;" }

In der Konsole kannst du interaktiv JavaScript ausfuehren und die APEX JavaScript API verwenden. Zum Beispiel liefert `apex.item("P3_ENAME").getValue()` oder die Kurzform `$v("P3_ENAME")` den Wert eines Page Items. Achtung: Wenn du eine modale Seite verwendest, wie in unserem Employees-Form-Beispiel, musst du die Konsole zuerst auf den korrekten Frame `Employee` ausrichten (Firefox links, Chromium rechts).

![frame](assets/javascript/frame.png){ style="display:block;margin:auto;" }

![getvalue](assets/javascript/getvalue.png){ style="display:block;margin:auto;" }

**Dynamic Actions nachverfolgen**

In einer Anwendung mit vielen ausloesenden Dynamic Actions kann es schwierig werden, dem Ausfuehrungsfluss zu folgen. Eine einfache Moeglichkeit ist, JavaScript in den Dynamic Actions zu verwenden, um Ausgaben in der Entwicklerkonsole des Browsers zu erzeugen.

!!! exercise "Log in die Konsole schreiben"
    Bearbeite Seite 3 und fuege dem Event **JobChanged** eine **True Action** hinzu. Nenne sie `LogCommission`, setze die **Action** auf `Execute JavaScript Code` und fuege das Code-Snippet in das Feld **Code** ein.

    ``` JavaScript
        console.log("Job changed to " + $v("P3_JOB") + " for employee " + $v("P3_ENAME") + ". Commission is " + $v("P3_COMM"));
    ```
    ![log](assets/javascript/log.png){ style="display:block;margin:auto;" }

    <div class="two-columns">
       <div>
          Klicke mit der rechten Maustaste auf die neue Action (`LogCommission`) und waehle **Create Opposite Action**. Entferne aus dieser **False Action** den Teil fuer die Provision und speichere sie.
       </div>
       <div>
          ![opposite](assets/javascript/opposite.png){ style="display:block;margin:auto;" }
       </div>
    </div>

    Lade die Form fuer einen beliebigen Mitarbeitenden neu und oeffne die Browser-Konsole. Aendere den Job des Mitarbeiters hin und her, setze eine Provision, falls der Mitarbeitende keine hat, und pruefe die Ausgabe in der Browser-Konsole.

    Loesche nach dem Test beide Logging-Actions.

Gerade wenn mehrere Dynamic Actions feuern und voneinander abhaengen, ist das ein nuetzlicher Weg, dem Application Flow zu folgen.

!!! bytheway "Debugging"
    <div class="two-columns">
       <div>
          *Uebrigens*,<br>
          beim Entwickeln von JavaScript-Code ist es oft hilfreich, Informationen schnell ueber die Entwicklerkonsole des Browsers auszugeben. APEX stellt aber auch ein eingebautes Debugging-Framework bereit, das detaillierte Einblicke in Page Processing, Dynamic Actions, AJAX-Requests und serverseitige Ausfuehrung bietet.

          Der Debug Mode kann direkt ueber die Developer Toolbar aktiviert werden, indem **Debug** ausgewaehlt wird. Sobald er aktiv ist, werden detaillierte Ausfuehrungsinformationen gesammelt und koennen ueber **View Debug** angesehen werden. Die Debug-Ausgabe zeigt die Reihenfolge von Page-Rendering- und Processing-Schritten, ausgefuehrten PL/SQL-Code, SQL-Statements und Timing-Informationen. Dadurch lassen sich Probleme deutlich einfacher identifizieren und analysieren.

          Zusaetzlich stellt APEX eine Debugging API bereit, mit der Entwickler eigene Debug-Meldungen schreiben koennen. Das ist nuetzlich, um Anwendungslogik nachzuverfolgen, Variablenwerte zu ueberwachen und die Analyse komplexer Prozesse waehrend Entwicklung und Troubleshooting zu vereinfachen.
       </div>
    </div>

