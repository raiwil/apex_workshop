# 5. Karten

!!! sampleapp "Sample App Maps"
    <div class="two-columns">
      <div style="flex: 50%;">
           Diese Anwendung enthält viele Beispiele für die Visualisierung von Koordinatendaten auf einer Karte. Verwende Map Markers, Lines oder Polygons oder die Heat-Map-Funktion. Die APEX Map Region kann einfach mit Oracle Spatial kombiniert werden (in jeder Oracle Database enthalten), um eine 'Within Distance Search', 'Nearest Neighbor Search' oder andere räumliche Analysen durchzuführen.
           Diese App ist online verfügbar unter: [https://oracleapex.com/go/maps](https://oracleapex.com/go/maps){target="_blank"}
      </div>
      <div style="flex: 50%;">
          ![maps](assets/samples/maps.png){ style="display:block;margin:auto;" }
      </div>
    </div>

## 5.1 Report mit Form für Departments erstellen

Wir wollen geografische Informationen für unsere Abteilungen anzeigen. Deshalb bauen wir zuerst eine Seite dafür.

!!! exercise "Interactive Report mit Form erstellen"

    Wähle beim Erstellen einer neuen Seite im Dialog **Interactive Report**.

    ![createirpage.png](assets/maps/createirpage.png){ style="display:block;margin:auto;" }

    Setze (oder behalte) die **Page Number** auf `6` und nenne die Seite `Departments`. Nachdem wir den Switch für **Include Form Page** aktiviert haben, können wir auch die Nummer (`7`) und den Namen (`Department`) für die Form-Seite setzen. Am Anfang haben wir eine Form mit enthaltenem Report erstellt (für EMP), was dieselbe Struktur ergibt wie dieser Ansatz hier. Abschliessend ist `DEPT` unsere **Table** für diese beiden Seiten.

    ![createirpage2.png](assets/maps/createirpage2.png){ style="display:block;margin:auto;" }

    Nachdem du `DEPTNO` als **Primary Key Column** gewählt hast, erstelle die Seite(n).

    ![createirpage3.png](assets/maps/createirpage3.png){ style="display:block;margin:auto;" }

Starte die Anwendung, um die neuen Komponenten zu sehen.

## 5.2 Datenmodell für räumliche Daten und Adressen erweitern

Um räumliche Daten für unsere Abteilungen in der Datenbank zu speichern, fügen wir eine Spalte mit dem Datentyp SDO_GEOMETRY hinzu. Zusätzlich fügen wir Spalten für Straße und Postleitzahl neben der Stadt (Spalte `LOCATION`) hinzu.

!!! exercise "Tabelle DEPT erweitern"

    Führe den ALTER-TABLE-Befehl in **SQL Commands** aus.

    ```sql
      ALTER TABLE DEPT
            ADD zipcode     varchar2(20)
            ADD street      varchar2(50)
            ADD geolocation SDO_GEOMETRY
    ```

    ![altertable.png](assets/maps/altertable.png){ style="display:block;margin:auto;" }

Sieh dir die Tabelle DEPT im **Object Browser** an.

Bist du jetzt verwirrt, warum wir zuerst die Seite erstellt und danach die Tabelle erweitert haben, statt andersherum? Das wäre sicher einfacher gewesen. Aber dann würden wir nicht sehen, wie Regionen (die gerade erstellte Form) mit der Datenbank synchronisiert werden. Items müssen nicht einzeln hinzugefügt werden.

## 5.3 Vorhandene Adressen geokodieren

In dieser Übung erweitern wir die bestehende Form für die Tabelle DEPT um Items für Postleitzahl und Straße. Danach fügen wir Funktionalität hinzu, die eine gegebene Adresse geokodiert und sogar bereinigt.
Du kannst Items zu Forms manuell hinzufügen, entweder über das Kontextmenü oder per Drag-and-drop aus der Toolbar unten, und sie danach manuell konfigurieren und den neuen Datenbankspalten zuordnen.

!!! exercise "Form für Departments anpassen"

    Wir synchronisieren einfach die Form-Region mit der zugrunde liegenden Datenbanktabelle. Klicke auf Seite 7 (die Form-Seite) mit der rechten Maustaste auf die Region **Department** und wähle **Synchronize Page Items**.

    ![synchronize](assets/maps/synchronize.png){ style="display:block;margin:auto;" }

    APEX erkennt die hinzugefügten Spalten und erweitert die Form entsprechend. Jetzt bearbeiten wir das neue Item **P7_GEOLOCATION** und ändern den **Type** auf `Geocoded Address`.
    Wir beachten die Einstellungen für **Structured Address**, **Sanitize Address** und **Trigger Geocoding**, ändern sie aber nicht.
    Im Abschnitt **Geocoding Input** setzen wir **Country** auf `Germany` mit **Country Type** `Static` und fügen die passenden Page Items für **Street Item**, **Postal Code Item** und **City Item** mit den entsprechenden Spalten der Tabelle DEPT hinzu.

    ![geocoding.png](assets/maps/geocoding.png){ style="display:block;margin:auto;" }

Jetzt kannst du die Form verwenden, um den Abteilungen Adressen (in Deutschland) hinzuzufügen. Wähle Städte in Deutschland und füge eine Straße hinzu (Hausnummern können enthalten sein). Eine Postleitzahl ist optional, ebenso die Straße, aber für eine bessere Geokodierung sollte die Straße verwendet werden.

Wenn in der Form etwas geändert wird, werden die Informationen automatisch bereinigt und geokodiert. Das räumliche Ergebnis wird in der SDO_GEOMETRY-Spalte gespeichert, und eine Karte mit der Adresse wird angezeigt.

!!! bytheway "Oracle eLocation Service"
    *Übrigens*,<br>
    für die hier gezeigten Karten wird der Oracle eLocation Service verwendet (https://maps.oracle.com). Er kann ohne API-Key genutzt werden und ist im Kontext von Oracle APEX kostenlos. Einige Kartenstile werden standardmäßig bereitgestellt, du kannst aber auch eigene Karten verwenden.
    Seit 2019 sind die Funktionen der früheren Spatial-and-Graph-Option für Enterprise Edition Teil der Datenbank (Enterprise Edition und Standard Edition 2), ohne dass eine Option erforderlich ist. Sie sind Teil der Standardinstallation. Wenn du eine Datenbank verwendest, die schon länger läuft, ist der in der Übung verwendete Datentyp SDO_GEOMETRY eventuell nicht verfügbar, weil er bei einem Upgrade nicht automatisch hinzugefügt wird.

## 5.4 Karte zur Visualisierung der Department-Standorte hinzufügen

Auf der Report-Seite für die Departments fügen wir nun eine Map Region hinzu, um alle geokodierten Adressen anzuzeigen.

!!! exercise "Map Region hinzufügen"

    Ziehe eine Map Region per Drag-and-drop aus der Gallery unter die Departments-Region auf Seite 6.

    ![gallery](assets/maps/gallery.png){ style="display:block;margin:auto;" }

    Alternativ kannst du eine solche Region erstellen, indem du im Content Body mit der rechten Maustaste klickst, **Create Region** wählst und als **Region Type** `Map` setzt.

    Gib der Region einen **Name** (`MyMap`).

    ![mapregion](assets/maps/mapregion.png){ style="display:block;margin:auto;" }

    Sieh dir jetzt den Layer an, der mit Beispieldaten vorbelegt ist. Setze **Name** und **Label** des Layers auf `location`, wähle `Local Database` als Quelle und die Tabelle `DEPT`. Jetzt sollten oben am Ausrufezeichen zwei Fehler rot markiert sein.

    ![mapregion](assets/maps/mapregion.png){ style="display:block;margin:auto;" }

    Wenn du zu diesen Fehlern navigierst, indem du in den Eigenschaften nach unten scrollst oder das Fehlermeldungsfenster wählen, findest du das Column Mapping, das für die Fehler verantwortlich ist. Wähle in diesem Abschnitt `SDO_GEOMETRY` als **Geometry Column Data Type** und unsere neue Spalte `GEOLOCATION` als **Geometry Column**. Es ist auch sinnvoll, die **Primary Key Column** zu definieren.

    ![columnmapping](assets/maps/columnmapping.png){ style="display:block;margin:auto;" }

## 5.5 Karte automatisch aktualisieren, wenn sich Daten ändern

Wenn eine Adresse in der Form geändert wird und du zur Seite mit Report und Karte zurückkehrst, wird der Report automatisch aktualisiert, die Karte jedoch nicht. Für den Report gibt es bereits eine Refresh Action, die vom Wizard beim Erstellen der Seite erzeugt wurde. Wir implementieren jetzt die automatische Aktualisierung der Map Region.

!!! exercise "Automatischer Refresh der Map Region"

    Für den Report gibt es bereits eine Refresh Action. Wir finden diese Action im Tab Dynamic Actions (das Blitz-Icon) unter Dialog Closed. Dort gibt es eine True Action, die die Report-Region aktualisiert, wenn der Form-Dialog geschlossen wird. Wir duplizieren diese Action per Rechtsklick auf die Action.

    ![duplicate](assets/maps/duplicate.png){ style="display:block;margin:auto;" }

    Für die neue Refresh Action (oder die andere) ändern wir im Abschnitt **Affected Elements** die **Region** von Departments auf `MyMap`.

    ![regionaffected](assets/maps/regionaffected.png){ style="display:block;margin:auto;" }

    Es ist eine gute Idee, die Actions entsprechend zu benennen.

Ändere nun eine bestehende Adresse oder füge eine neue Abteilung hinzu. Die Karte sollte automatisch aktualisiert werden, genau wie der Report. Den schönen Kamera-Flyover zu den Punkten sehen wir allerdings noch nicht.

!!! tip "LiveLab"
    Es gibt ein Oracle LiveLab **Getting Started with Maps and Spatial in APEX**.
    [Hier klicken](https://livelabs.oracle.com/ords/r/dbpm/livelabs/view-workshop?wid=936){target="_blank"}

