# 1. Erste Schritte

## 1.1 Einführung

!!! presented "Einführung"
    Einführung in den Workshop und Oracle Application Express mit einigen [Folien](assets/documents/APEX%20Workshop%2024.2.6.pdf){target="_blank"}.

    Gut zu wissen für den Einstieg

    - Die Entwicklungsumgebung und die Endbenutzer-Oberfläche laufen im Webbrowser -> **Keine Client-Software erforderlich**
    - APEX-App-Definitionen werden als Metadaten in der Datenbank gespeichert -> **Deklarativ, keine Code-Generierung**
    - Die Seitenerzeugung erfolgt in der Datenbank mit nur einem Request -> **Seite und Daten zusammen**
    - Show Page und Accept Page: APEX verarbeitet jeden Request in zwei Phasen: Show Page (Rendering der Seite) und Accept Page (Verarbeitung gesendeter Daten, Validierungen und Branching).
    - Session Management: APEX hält den Session State, um benutzerspezifische Daten über Seitenaufrufe hinweg zu speichern. Dadurch entsteht stateful Anwendungsverhalten auf dem stateless HTTP-Protokoll.
    - APEX deckt das Spektrum von No-Code über Low-Code bis High-Control ab -> **flexibel und erweiterbar**
    - UI für jedes Gerät -> **responsive Apps**
    - **ORDS** als Listener
    - Eine Datenbank mit mehreren **Workspaces**

## 1.2 UI - Überblick

!!! presented "UI"
    Die APEX-Entwicklungsoberfläche wird mit ihren drei Bereichen neben dem App Builder vorgestellt.
    ![4 Main Menu-Topics - left and top](assets/gettingstarted/menu.png){ style="display:block;margin:auto;" }

    Im **SQL Workshop** geht es um Datenbankobjekte (Object Browser), SQL-Statements und Skripte, Utilities (Data Loading, Data Generation und andere) sowie RESTful Services (eine Oberfläche für Datenbank- und ORDS-Funktionen).

    ![SQL Workshop](assets/gettingstarted/sqlworkshop.png){ style="display:block;margin:auto;" }

    Die **Gallery** enthält Beispiel- und Starter-Anwendungen.

    ![Gallery](assets/gettingstarted/gallery.png){ style="display:block;margin:auto;" }

    Der **Data Reporter** wird genutzt, um Reporting-Anwendungen auf Basis der Daten in deinem Schema zu erstellen, ohne den Aufwand einer vollständigen Anwendungsentwicklung.

## 1.3 Tabellen EMP und DEPT erstellen

<div class="two-columns">

  <div>
    Die Übungen verwenden die bekannten Tabellen EMP und DEPT. Wir erstellen sie aus den **Sample Datasets**. Für beide Tabellen werden Sequenzen und Trigger für die Primärschlüsselspalten erstellt.
    Ausserdem werden zwei Foreign Keys erstellt, damit Mitarbeiter nur in existierenden Abteilungen arbeiten können und nur einen existierenden Manager haben können.
  </div>

  <div>
    <img src="../assets/gettingstarted/empdept.png" alt="empdept" style="display:block;margin:auto;">
  </div>

</div>

Wir verwenden **Sample Datasets**, es gäbe aber auch andere Optionen wie Quick SQL oder Data Generator.

!!! exercise "Tabelle erstellen (Sample Datasets)"
    Wähle im **SQL Workshop** unter **Utilities** den Eintrag **Sample Datasets**.

    ![Utilities](assets/gettingstarted/utilities.png){ style="display:block;margin:auto;" }

    ![Sample Datasets](assets/gettingstarted/sampledatasets.png){ style="display:block;margin:auto;" }

    Klicke bei EMP/DEPT auf **Install** und wähle die Sprache (bitte Englisch verwenden) sowie das Datenbankschema, in dem die Tabellen installiert werden sollen. Auf oracleapex.com ist nur ein Schema möglich.

    ![Install Dataset](assets/gettingstarted/installdataset.png){ style="display:block;margin:auto;" }

    Nach einem Klick auf **Next** wähle im nächsten Fenster **Install Dataset** und danach **Exit**. Bitte nicht den Button Create Application verwenden.

Jetzt sind die Tabellen erstellt und können im **Object Browser** angeschaut werden.

!!! bytheway "Dark und Light Mode"
    <div class="two-columns">
       <div>
          *Übrigens*,<br>
          durch einen Klick auf deine Initialen unten links kannst du den Modus des App Builders einfach auswählen: Light Mode, Dark Mode oder einen zeitabhängigen automatischen Modus.
       </div>
    <div>
        ![Mode](assets/btw/darkmode.png){ style="display:block;margin:auto;" }
    </div>
    </div>

## 1.4 Erste Anwendung mit dem Wizard erstellen - MyEmployees

Wir verwenden den Wizard, um eine Anwendung mit einer ersten Home Page und einem Report mit einer Form für Mitarbeiter zu erstellen. Danach fügen wir im Page Designer eine zweite Seite hinzu. Das ist unser Startpunkt für die folgenden Übungen. Alles, was hier erstellt wird, kann später geändert werden.

!!! exercise "Erste Anwendung mit dem Wizard erstellen"

    Im **App Builder** klicken wir auf **Create**.

    ![AppBuilder Create](assets/gettingstarted/appbuilder-create.png){ style="display:block;margin:auto;" }

    Es gibt verschiedene Wege, eine Anwendung zu erstellen.

    Wenn man nur einen Namen (`MyEmployees`) eingibt und auf **Create Application** klickt, entsteht eine leere Anwendung. Wir klicken auf **Use Create App Wizard**. Die ID wird vom System erzeugt und muss innerhalb einer APEX-Instanz eindeutig sein.

    ![AppBuilder Create](assets/gettingstarted/createanapplication.png){ style="display:block;margin:auto;" }

    !!! tip "Create App Using Generative AI"
        Der Eintrag **Create App Using Generative AI** ist nur verfügbar, wenn in den **Workspace Utilities** ein **Generative AI Service** konfiguriert wurde. Das Gleiche gilt für die APEX Assistants in den Code Editoren.

    Wir können das Logo und das Standard-Erscheinungsbild ändern. Klicke auf **Add Page**.

    ![AppBuilder Create](assets/gettingstarted/createanapplication2.png){ style="display:block;margin:auto;" }

    Wir können eine leere Seite erstellen oder eine Region für die neue Seite auswählen. Wir verwenden eine **Form**-Region.

    ![AppBuilder Create](assets/gettingstarted/addpage.png){ style="display:block;margin:auto;" }

    Nenne die Seite `Employee` und wähle unsere neu erstellte Tabelle `EMP`. Damit wir einen Report sehen und Mitarbeitende auswählen können, aktiviere die Checkbox **Include Report**.

    ![AppBuilder Create](assets/gettingstarted/createformpage.png){ style="display:block;margin:auto;" }

    Lasse die restlichen Eigenschaften im Wizard unverändert und klicke auf **Create Application**.

    ![AppBuilder Create](assets/gettingstarted/createanapplication2.png){ style="display:block;margin:auto;" }

    Nach wenigen Sekunden ist die Anwendung erstellt und du siehst die Seiten. Klicke auf **Run Application**, um das Ergebnis zu sehen. Benutzername und Passwort sind identisch mit den Daten, mit denen du dich an der Entwicklungsumgebung anmeldest, da das Standard-Authentication Scheme Oracle APEX Accounts ist.

    ![AppBuilder Create](assets/gettingstarted/runmyemployees.png){ style="display:block;margin:auto;" }

## 1.5 Seite hinzufügen (Faceted Search)

Wir fügen der Anwendung jetzt eine zusätzliche Seite hinzu, um zu sehen, wie das ohne den initialen Wizard funktioniert.

!!! exercise "Faceted-Search-Seite hinzufügen"
    Du siehst die Anwendung mit den bereits erstellten Seiten. Klicke auf **Create Page**. Später sehen wir, dass das auch im Page Designer möglich ist.

    ![AppBuilder Create](assets/gettingstarted/createpage.png){ style="display:block;margin:auto;" }

    Wähle nun **Faceted Search** als Komponente für die neue Seite.

    ![AppBuilder Create](assets/gettingstarted/createpage2.png){ style="display:block;margin:auto;" }

    **Page Number** `4` sollte vorbelegt sein. Wir nennen die Seite `EmpFacets`. Als **Data Source** verwenden wir die **Local Database** und unsere Tabelle `EMP`.

    ![AppBuilder Create](assets/gettingstarted/createpage3.png){ style="display:block;margin:auto;" }

    Wir wollen die Ergebnisse als **Cards** anzeigen und lassen alle ausgewählten Attribute für Facets aktiviert, bevor wir die Seite erstellen.

    ![AppBuilder Create](assets/gettingstarted/createpage4.png){ style="display:block;margin:auto;" }

    Abschliessend wollen wir die Cards in einem **Grid** sehen und auswählen, welche Spalten der Tabelle als Titel und Body der Cards angezeigt werden sollen. `ENAME` und `JOB` sollten hier vorausgewählt sein.

    ![AppBuilder Create](assets/gettingstarted/createpage5.png){ style="display:block;margin:auto;" }

!!! bytheway "Page 0"
    *Übrigens*,<br>
    in APEX gibt es eine Page 0. Sie ist eine Art Vorlage für die Anwendung, da alle Komponenten dieser Seite auf allen Seiten einer Anwendung dargestellt werden. Auf Page 0 gibt es also nur Page Rendering. Zum Beispiel kannst du dort einen Footer definieren, der auf jeder Seite deiner Anwendung erscheinen soll.

## 1.6 Page Designer

!!! presented "Page Designer"
    Auf Basis der gerade erstellten Anwendung wird ein Überblick über den Page Designer gegeben.

    ![AppBuilder Create](assets/gettingstarted/panes.png){ style="display:block;margin:auto;" }

    ![AppBuilder Create](assets/gettingstarted/toolbar.png){  width="70%" style="display:block;margin:auto;" }

    - Pages
    - Regions
    - Items
    - Buttons
    - Properties (Generic / Specific / Sections)
    - Multiselect
    - Layout (Drag & Drop / Properties)
    - Error Marking
    - Help
    - Developer Toolbar

    ![AppBuilder Create](assets/gettingstarted/developertoolbar.png){  width="70%" style="display:block;margin:auto;" }

    !!! bytheway "Position der Developer Toolbar"
        <div class="two-columns">
            <div>
                *Übrigens*,<br>
                du kannst festlegen, wo die Developer Toolbar auf dem Bildschirm angezeigt wird.
            </div>
            <div>
                ![Model](assets/btw/developertoolbarlocation.png){ style="display:block;margin:auto;" }
            </div>
        </div>

!!! bytheway "Pane Mode"
    <div class="two-columns">
       <div>
          *Übrigens*,<br>
          im Page Designer nutzt man manchmal den Layout-Bereich in der Mitte nicht. Dann kann es viel Mausbewegung bedeuten, Elemente links auszuwählen und rechts in den Eigenschaften zu bearbeiten. Man kann nicht nur die Größe der Bereiche ändern, sondern auch zwischen zwei und drei Bereichen wechseln. Der Two-Pane Mode blendet den mittleren Bereich aus.
       </div>
    <div>
        ![Model](assets/btw/panemode.png){ style="display:block;margin:auto;" }
    </div>
    </div>

!!! bytheway "Multi Select"
    <div class="two-columns">
       <div>
          *Übrigens*,<br>
          wenn du im Navigator mehr als ein Objekt auswählst, siehst du blaue Dreiecke und blaue, leere Felder im Property-Bereich. Das zeigt an, dass es für die ausgewählten Elemente unterschiedliche Werte gibt. Du kannst dort trotzdem einen Wert für alle ausgewählten Objekte auf einmal setzen.
       </div>
    <div>
        ![Model](assets/btw/multiselect.png){ style="display:block;margin:auto;" }
    </div>
    </div>

!!! bytheway "Conditions"
    <div class="two-columns">
       <div>
          *Übrigens*,<br>
          wenn rechts unten am Icon eines Objekts (Button, Item, Prozess, ...) ein roter Kreis steht, bedeutet das, dass für dieses Objekt eine Bedingung gesetzt ist.
       </div>
    <div>
        ![Model](assets/btw/conditions.png){ style="display:block;margin:auto;" }
    </div>
    </div>

!!! bytheway "Changed Items"
    <div class="two-columns">
       <div>
          *Übrigens*,<br>
          nicht gespeicherte Einstellungen erkennst du an der grünen Linie vor einem Objekt.
       </div>
    <div>
        ![Model](assets/btw/changeditems.png){ style="display:block;margin:auto;" }
    </div>
    </div>
