# 5. Karten

!!! sampleapp "Sample App Maps"
    <div class="two-columns">
      <div style="flex: 50%;">
           Diese Anwendung enthaelt viele Beispiele fuer die Visualisierung von Koordinatendaten auf einer Karte. Verwende Map Markers, Lines oder Polygons oder die Heat-Map-Funktion. Die APEX Map Region kann einfach mit Oracle Spatial kombiniert werden (in jeder Oracle Database enthalten), um eine 'Within Distance Search', 'Nearest Neighbor Search' oder andere raeumliche Analysen durchzufuehren.
           Diese App ist online verfuegbar unter: [https://oracleapex.com/go/maps](https://oracleapex.com/go/maps){target="_blank"}
      </div>
      <div style="flex: 50%;">
          ![maps](assets/samples/maps.png){ style="display:block;margin:auto;" }
      </div>
    </div>

## 5.1 Report mit Form fuer Departments erstellen

Wir wollen geografische Informationen fuer unsere Abteilungen anzeigen. Deshalb bauen wir zuerst eine Seite dafuer.

!!! exercise "Interactive Report mit Form erstellen"

    Waehle beim Erstellen einer neuen Seite im Dialog **Interactive Report**.

    ![createirpage.png](assets/maps/createirpage.png){ style="display:block;margin:auto;" }

    Setze (oder behalte) die **Page Number** auf `6` und nenne die Seite `Departments`. Nachdem wir den Switch fuer **Include Form Page** aktiviert haben, koennen wir auch die Nummer (`7`) und den Namen (`Department`) fuer die Form-Seite setzen. Am Anfang haben wir eine Form mit enthaltenem Report erstellt (fuer EMP), was dieselbe Struktur ergibt wie dieser Ansatz hier. Abschliessend ist `DEPT` unsere **Table** fuer diese beiden Seiten.

    ![createirpage2.png](assets/maps/createirpage2.png){ style="display:block;margin:auto;" }

    Nachdem du `DEPTNO` als **Primary Key Column** gewaehlt hast, erstelle die Seite(n).

    ![createirpage3.png](assets/maps/createirpage3.png){ style="display:block;margin:auto;" }

Starte die Anwendung, um die neuen Komponenten zu sehen.

## 5.2 Datenmodell fuer raeumliche Daten und Adressen erweitern

Um raeumliche Daten fuer unsere Abteilungen in der Datenbank zu speichern, fuegen wir eine Spalte mit dem Datentyp SDO_GEOMETRY hinzu. Zusaetzlich fuegen wir Spalten fuer Strasse und Postleitzahl neben der Stadt (Spalte `LOCATION`) hinzu.

!!! exercise "Tabelle DEPT erweitern"

    Fuehre den ALTER-TABLE-Befehl in **SQL Commands** aus.

    ```sql
      ALTER TABLE DEPT
            ADD zipcode     varchar2(20)
            ADD street      varchar2(50)
            ADD geolocation SDO_GEOMETRY
    ```

    ![altertable.png](assets/maps/altertable.png){ style="display:block;margin:auto;" }

Sieh dir die Tabelle DEPT im **Object Browser** an.

Bist du jetzt verwirrt, warum wir zuerst die Seite erstellt und danach die Tabelle erweitert haben, statt andersherum? Das waere sicher einfacher gewesen. Aber dann wuerden wir nicht sehen, wie Regionen (die gerade erstellte Form) mit der Datenbank synchronisiert werden. Items muessen nicht einzeln hinzugefuegt werden.

## 5.3 Vorhandene Adressen geokodieren

In dieser Uebung erweitern wir die bestehende Form fuer die Tabelle DEPT um Items fuer Postleitzahl und Strasse. Danach fuegen wir Funktionalitaet hinzu, die eine gegebene Adresse geokodiert und sogar bereinigt.
Du kannst Items zu Forms manuell hinzufuegen, entweder ueber das Kontextmenue oder per Drag-and-drop aus der Toolbar unten, und sie danach manuell konfigurieren und den neuen Datenbankspalten zuordnen.

!!! exercise "Form fuer Departments anpassen"

    Wir synchronisieren einfach die Form-Region mit der zugrunde liegenden Datenbanktabelle. Klicke auf Seite 7 (die Form-Seite) mit der rechten Maustaste auf die Region **Department** und waehle **Synchronize Page Items**.

    ![synchronize](assets/maps/synchronize.png){ style="display:block;margin:auto;" }

    APEX erkennt die hinzugefuegten Spalten und erweitert die Form entsprechend. Jetzt bearbeiten wir das neue Item **P7_GEOLOCATION** und aendern den **Type** auf `Geocoded Address`.
    Wir beachten die Einstellungen fuer **Structured Address**, **Sanitize Address** und **Trigger Geocoding**, aendern sie aber nicht.
    Im Abschnitt **Geocoding Input** setzen wir **Country** auf `Germany` mit **Country Type** `Static` und fuegen die passenden Page Items fuer **Street Item**, **Postal Code Item** und **City Item** mit den entsprechenden Spalten der Tabelle DEPT hinzu.

    ![geocoding.png](assets/maps/geocoding.png){ style="display:block;margin:auto;" }

Jetzt kannst du die Form verwenden, um den Abteilungen Adressen (in Deutschland) hinzuzufuegen. Waehle Staedte in Deutschland und fuege eine Strasse hinzu (Hausnummern koennen enthalten sein). Eine Postleitzahl ist optional, ebenso die Strasse, aber fuer eine bessere Geokodierung sollte die Strasse verwendet werden.

Wenn in der Form etwas geaendert wird, werden die Informationen automatisch bereinigt und geokodiert. Das raeumliche Ergebnis wird in der SDO_GEOMETRY-Spalte gespeichert, und eine Karte mit der Adresse wird angezeigt.

!!! bytheway "Oracle eLocation Service"
    *Uebrigens*,<br>
    fuer die hier gezeigten Karten wird der Oracle eLocation Service verwendet (https://maps.oracle.com). Er kann ohne API-Key genutzt werden und ist im Kontext von Oracle APEX kostenlos. Einige Kartenstile werden standardmaessig bereitgestellt, du kannst aber auch eigene Karten verwenden.
    Seit 2019 sind die Funktionen der frueheren Spatial-and-Graph-Option fuer Enterprise Edition Teil der Datenbank (Enterprise Edition und Standard Edition 2), ohne dass eine Option erforderlich ist. Sie sind Teil der Standardinstallation. Wenn du eine Datenbank verwendest, die schon laenger laeuft, ist der in der Uebung verwendete Datentyp SDO_GEOMETRY eventuell nicht verfuegbar, weil er bei einem Upgrade nicht automatisch hinzugefuegt wird.

## 5.4 Karte zur Visualisierung der Department-Standorte hinzufuegen

Auf der Report-Seite fuer die Departments fuegen wir nun eine Map Region hinzu, um alle geokodierten Adressen anzuzeigen.

!!! exercise "Map Region hinzufuegen"

    Ziehe eine Map Region per Drag-and-drop aus der Gallery unter die Departments-Region auf Seite 6.

    ![gallery](assets/maps/gallery.png){ style="display:block;margin:auto;" }

    Alternativ kannst du eine solche Region erstellen, indem du im Content Body mit der rechten Maustaste klickst, **Create Region** waehlst und als **Region Type** `Map` setzt.

    Gib der Region einen **Name** (`MyMap`).

    ![mapregion](assets/maps/mapregion.png){ style="display:block;margin:auto;" }

    Sieh dir jetzt den Layer an, der mit Beispieldaten vorbelegt ist. Setze **Name** und **Label** des Layers auf `location`, waehle `Local Database` als Quelle und die Tabelle `DEPT`. Jetzt sollten oben am Ausrufezeichen zwei Fehler rot markiert sein.

    ![mapregion](assets/maps/mapregion.png){ style="display:block;margin:auto;" }

    Wenn du zu diesen Fehlern navigierst, indem du in den Eigenschaften nach unten scrollst oder das Fehlermeldungsfenster waehlen, findest du das Column Mapping, das fuer die Fehler verantwortlich ist. Waehle in diesem Abschnitt `SDO_GEOMETRY` als **Geometry Column Data Type** und unsere neue Spalte `GEOLOCATION` als **Geometry Column**. Es ist auch sinnvoll, die **Primary Key Column** zu definieren.

    ![columnmapping](assets/maps/columnmapping.png){ style="display:block;margin:auto;" }

## 5.5 Karte automatisch aktualisieren, wenn sich Daten aendern

Wenn eine Adresse in der Form geaendert wird und du zur Seite mit Report und Karte zurueckkehrst, wird der Report automatisch aktualisiert, die Karte jedoch nicht. Fuer den Report gibt es bereits eine Refresh Action, die vom Wizard beim Erstellen der Seite erzeugt wurde. Wir implementieren jetzt die automatische Aktualisierung der Map Region.

!!! exercise "Automatischer Refresh der Map Region"

    Fuer den Report gibt es bereits eine Refresh Action. Wir finden diese Action im Tab Dynamic Actions (das Blitz-Icon) unter Dialog Closed. Dort gibt es eine True Action, die die Report-Region aktualisiert, wenn der Form-Dialog geschlossen wird. Wir duplizieren diese Action per Rechtsklick auf die Action.

    ![duplicate](assets/maps/duplicate.png){ style="display:block;margin:auto;" }

    Fuer die neue Refresh Action (oder die andere) aendern wir im Abschnitt **Affected Elements** die **Region** von Departments auf `MyMap`.

    ![regionaffected](assets/maps/regionaffected.png){ style="display:block;margin:auto;" }

    Es ist eine gute Idee, die Actions entsprechend zu benennen.

Aendere nun eine bestehende Adresse oder fuege eine neue Abteilung hinzu. Die Karte sollte automatisch aktualisiert werden, genau wie der Report. Den schoenen Kamera-Flyover zu den Punkten sehen wir allerdings noch nicht.

!!! tip "LiveLab"
    Es gibt ein Oracle LiveLab **Getting Started with Maps and Spatial in APEX**.
    [Hier klicken](https://livelabs.oracle.com/ords/r/dbpm/livelabs/view-workshop?wid=936){target="_blank"}

