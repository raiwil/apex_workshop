# 7. Reporting und Suche

Dieses Demo-Kapitel enthaelt keine Uebungen.

## 7.1 Reporting-Regionen

!!! sampleapp "Sample App Reporting"
    <div class="two-columns">
      <div style="flex: 50%;">
           Diese Anwendung hebt die Reporting-Faehigkeiten von Oracle APEX hervor. Du kannst Interactive Reports, Interactive Grids, Faceted Search Reports, Cards Reports und Classic Reports deklarativ mit SQL erstellen.
      </div>
      <div style="flex: 50%;">
          ![reporting](assets/samples/reporting.png){ style="display:block;margin:auto;" }
      </div>
    </div>

**Classic Reports**

<div class="two-columns">
  <div style="flex: 70%;">
    Ein Classic Report ist eine Liste von Daten auf Basis des formatierten Ergebnisses einer SQL-Abfrage oder einer Tabelle/View. Spaltensortierung ist standardmaessig enthalten. Fuer Classic Reports gibt es verschiedene Template Options, um andere Ausgaben als Standardlisten zu erzeugen.
  </div>
  <div style="flex: 30%;">
    <img src="assets/reporting/classic.png" alt="classic" style="display:block;margin:auto;">
  </div>
</div>

**Interactive Reports**

<div class="two-columns">
  <div style="flex: 70%;">
    Ein Interactive Report ist eine leistungsfaehige Reporting-Komponente in Oracle APEX, mit der Endbenutzer Daten analysieren und anpassen koennen, ohne dass Entwickler eingreifen muessen. Benutzer koennen Daten direkt im Report sortieren, filtern, suchen, hervorheben, aggregieren, berechnen und gruppieren. Interactive Reports unterstuetzen ausserdem gespeicherte Report-Layouts, Control Breaks, Charts und Daten-Downloads in verschiedenen Formaten. Damit sind sie ideal fuer Ad-hoc-Analysen und Self-Service-Reporting.
  </div>
  <div style="flex: 30%;">
    <img src="assets/reporting/ir.png" alt="ir" style="display:block;margin:auto;">
  </div>
</div>

**Interactive Grids**

!!! sampleapp "Sample App Interactive Grids"
    <div class="two-columns">
      <div style="flex: 50%;">
           Diese Anwendung zeigt die Features und Funktionen des Oracle APEX Interactive Grid. Ueber die Beispielseiten koennen Benutzer vielseitige Faehigkeiten erkunden, zum Beispiel umfangreiches Reporting, einfache Datenbearbeitung und intuitive Pagination.
      </div>
      <div style="flex: 50%;">
          ![ig](assets/samples/ig.png){ style="display:block;margin:auto;" }
      </div>
    </div>

Ein Interactive Grid kombiniert die Reporting-Faehigkeiten eines Interactive Reports mit eingebauter Datenbearbeitung. Benutzer koennen Daten sortieren, filtern, anpassen und analysieren und gleichzeitig Datensaetze direkt im Grid erstellen, aktualisieren und loeschen.

**Cards**

!!! sampleapp "Sample App Cards"
    <div class="two-columns">
      <div style="flex: 50%;">
           Diese Anwendung hebt Cards-Regionen in Oracle APEX hervor. Cards-Regionen sind ein nativer Regionstyp. Sie geben Entwicklern eine leistungsfaehige und flexible Moeglichkeit, Daten in kompakten Bloecken darzustellen, ideal fuer Faceted Search oder fuer Informationen auf einen Blick.
           Diese App ist online verfuegbar unter: [https://apex.oracle.com/go/sample_cards](https://apex.oracle.com/go/sample_cards){target="_blank"}
      </div>
      <div style="flex: 50%;">
          ![cards](assets/samples/cards.png){ style="display:block;margin:auto;" }
      </div>
    </div>

Cards sind ein nativer Report-Regionstyp in Oracle APEX, der Daten als Sammlung kompakter, visuell ansprechender Bloecke darstellt. Card-Regionen eignen sich besonders fuer Faceted-Search-Anwendungen und Dashboards, in denen Informationen leicht erfassbar praesentiert werden sollen.

Entwickler koennen viele Aspekte einer Card anpassen, darunter Layout, Erscheinungsbild, Icons, Badges, Medien und Actions. Jede Card kann mehrere Actions unterstuetzen, sodass Benutzer zu verwandten Seiten navigieren oder bestimmte Funktionalitaet ausfuehren koennen.

Medieninhalte koennen aus einer BLOB-Spalte, einer URL, in einem iframe eingebetteten Videos oder Oracle-JET-Datenvisualisierungen stammen. Dadurch sind Cards eine vielseitige Option fuer moderne Anwendungsoberflaechen.

![cards](assets/reporting/cards.png){ style="display:block;margin:auto;" }

!!! sampleapp "Sample App Brookstrut"
    <div class="two-columns">
      <div style="flex: 50%;">
           Die Brookstrut-Beispielanwendung analysiert ein vereinfachtes gespeichertes Datenmodell und enthaelt eine Funktion zur Erzeugung zufaelliger Daten, von kleinen bis sehr grossen Datenmengen. Sie zeigt Oracle-APEX-Faehigkeiten in Datenreporting, Navigation und Datenpraesentation. Mit diesem Werkzeug kannst du verschiedene Oracle-APEX-Komponenten erkunden, darunter Faceted Search, Interactive Reports, Content Row Reports und Kalender.
      </div>
      <div style="flex: 50%;">
          ![brookstrut](assets/samples/brookstrut.png){ style="display:block;margin:auto;" }
      </div>
    </div>

## 7.2 Suchfunktionen

**Faceted Search**

<div class="two-columns">
  <div>
    Faceted Search bietet Benutzern eine intuitive Moeglichkeit, grosse Datenmengen zu durchsuchen und zu filtern. Typischerweise besteht sie aus einer Suchregion mit mehreren Filter-Facets und einer Ergebnisregion, die passende Datensaetze anzeigt. Wenn Benutzer Filter anwenden, werden die Ergebnisse dynamisch aktualisiert. So lassen sich grosse Datenmengen leicht eingrenzen.
    Am Anfang dieses Workshops haben wir mit dem Create Application Wizard eine Faceted-Search-Seite erzeugt. Das hat gezeigt, wie schnell Oracle APEX mit minimaler Konfiguration eine leistungsfaehige Suchoberflaeche erstellen kann.
  </div>
  <div>
    <img src="assets/reporting/facets.png" alt="facets" style="display:block;margin:auto;">
  </div>
</div>

**Smart Filters**

Smart Filters bieten eine kompakte und benutzerfreundliche Alternative zu Faceted Search. Statt mehrere Filtersteuerelemente anzuzeigen, verwenden Smart Filters ein einzelnes Suchfeld, in das Benutzer Suchbegriffe eingeben und Filter dynamisch anwenden koennen. Die Suchergebnisse koennen mit verschiedenen Regionstypen angezeigt werden, zum Beispiel Cards, Classic Reports, Maps oder Calendars.

Waehrend Faceted Search gut fuer komplexe Filterszenarien geeignet ist, bieten Smart Filters ein platzsparenderes Layout und sind ideal fuer Anwendungen, die eine einfache und intuitive Suche benoetigen.

![smartfilter](assets/reporting/smartfilter.png){ style="display:block;margin:auto;" }

**Application Search**

!!! sampleapp "Sample App Application Search"
    <div class="two-columns">
      <div style="flex: 50%;">
           Diese Anwendung zeigt die Application-Search-Funktion, die mit APEX 22.2 eingefuehrt wurde. Search Configurations und Search Regions ermoeglichen Entwicklern, robuste Suchmaschinen-Funktionalitaet zu APEX-Anwendungen hinzuzufuegen.
      </div>
      <div style="flex: 50%;">
          ![search](assets/samples/search.png){ style="display:block;margin:auto;" }
      </div>
    </div>

Die Application-Search-Funktion bietet eine nahtlose Sucherfahrung, die sich wie eine Suchmaschine innerhalb deiner Anwendung anfuehlt. Benutzer koennen Daten ueber mehrere Datenquellen hinweg durchsuchen und finden so leichter die benoetigten Informationen.
Mit Application Search kannst du mehrere Search Configurations erstellen, die eine lokale Datenquelle, REST-enabled SQL oder eine REST API durchsuchen. Dadurch kannst du Benutzern eine umfassende Sucherfahrung bieten und relevante Informationen aus unterschiedlichen Quellen abrufen.
Search Configurations enthalten Informationen ueber eine durchsuchbare Datenquelle und abstrahieren konkrete Suchimplementierungen. Das bietet Flexibilitaet und Spielraum fuer zukuenftige Verbesserungen. Du kannst deine **Search Configurations** unter **Shared Components** -> **Navigation and Search** -> **Search Configurations** erstellen und verwalten.

