# 6. RESTful Services

!!! sampleapp "Sample App REST Services"
    <div class="two-columns">
      <div style="flex: 50%;">
           Diese Anwendung zeigt, wie externe REST Services aus Oracle APEX heraus angesprochen werden. Die App arbeitet mit dem Beispiel-RESTful-Service oracle.example.hr. Die Beispiele in dieser Anwendung zeigen, wie man einen einfachen tabellarischen Report auf REST-Service-Daten erstellt, filtert und Pagination hinzufuegt.
      </div>
      <div style="flex: 50%;">
          ![rest](assets/samples/rest.png){ style="display:block;margin:auto;" }
      </div>
    </div>

In diesem Kapitel lesen wir Standortdaten aus einer REST Data Source und fuegen sie der Form-Seite der Departments hinzu.

## 6.1 REST Data Source definieren

Zuerst definieren wir die **REST Data Source** einmal in den **Shared Components** der Anwendung, damit wir sie spaeter auf den Seiten verwenden koennen.

!!! exercise "REST Data Source definieren"

    Wir verwenden fuer diese Uebung einen einfachen, freien REST-Service, der Informationen zu einer gegebenen Postleitzahl zurueckgibt, zum Beispiel Landkreis, Bundesland oder Gemeindetyp.

    ```text
         https://openplzapi.org/de/Localities?postalCode=55593
    ```

    Fuehre diese URL im Browser aus, um die Antwort zu sehen.

    Gehe in **Shared Components** im Abschnitt **Data Sources** zu **REST Data Sources** und klicke auf **Create**.

    Wir verwenden **From scratch** als Methode.

    ![createrest](assets/rest/createrest.png){ style="display:block;margin:auto;" }

    Waehle `Simple HTTP` als **REST Data Source Type** und nenne den Service `locations`. Verwende fuer den **URL Endpoint** die oben genannte URL.

    ![createrest2](assets/rest/createrest2.png){ style="display:block;margin:auto;" }

    Nach einem Klick auf **Next** extrahiert APEX den **Remote Server**, die **Base URL** und den **Service URL Path**. Bestaetige das mit **Next**.

    ![createrest3](assets/rest/createrest3.png){ style="display:block;margin:auto;" }

    Wir verwenden keine **Pagination**, da es fuer eine Postleitzahl nicht viele Daten gibt.

    ![createrest4](assets/rest/createrest4.png){ style="display:block;margin:auto;" }

    Fuer Services, die zum Beispiel einen API-Key benoetigen, kannst du zuerst Web Credentials in den Shared Components definieren und diese dann in den Services verwenden. Hier nutzen wir einen oeffentlichen Service ohne Authentication, daher bleibt der Switch **Authentication Required** deaktiviert. Jetzt koennen wir den Service mit **Discover** untersuchen.

    ![createrest5](assets/rest/createrest5.png){ style="display:block;margin:auto;" }

    Wir erhalten drei Tabs. Einer enthaelt die Daten, die wir bereits im Browser gesehen haben (**Response Body**). Dieselben Daten stehen im Tab **Data**, aber nicht als JSON. Klicke auf den Tab **Data Profile**. Dort entfernen wir Daten aus dem Service, die wir nicht verwenden wollen. Entferne alle Zeilen ausser **DISTRICT_NAME**, **FEDERALSTATE_NAME** und **MUNICIPALITY_TYPE** und klicke danach auf **Create REST Data Source**.

    ![createrest6](assets/rest/createrest6.png){ style="display:block;margin:auto;" }

    Wenn du auf den neu erstellten Service klickst, kannst du die Einstellungen inspizieren und sehen, wo sie spaeter bei Bedarf angepasst werden koennen. Es gibt auch einen Test-Button.

!!! bytheway "Eigene REST Services"
    *Uebrigens*,<br>
    hier integrieren wir bestehende REST Services. In Verbindung mit ORDS (Oracle REST Data Services) ist es moeglich, eigene REST Services fuer deine Daten zu bauen. APEX ist eines der moeglichen Werkzeuge, um solche REST Services zu erstellen.
    ![ords](assets/rest/ords.png){ style="display:block;margin:auto;" }

## 6.2 Daten aus einer REST Data Source in die Anwendung integrieren

Wir wollen die Standortdaten aus der REST Data Source jetzt auf der Departments-Form anzeigen.

!!! exercise "REST Data Source in der Anwendung verwenden"
    Gehe in den **Page Designer** fuer Seite 7 **Department**.
    Zuerst ordnen wir die bestehenden Items neu an, damit vertikal etwas mehr Platz entsteht. Das geht per Drag-and-drop oder ueber die Eigenschaft **Start New Row** (und eventuell **Sequence**) im Abschnitt **Layout** der Items.

    ![item](assets/rest/items.png){ style="display:block;margin:auto;" }

    Ziehe einen **Classic Report** aus der **Gallery** per Drag-and-drop oberhalb des Items **P7_GEOLOCATION**.

    ![classicreport](assets/rest/classicreport.png){ style="display:block;margin:auto;" }

    Die neue Region ist jetzt eine Subregion der Department-Region und mit Beispieldaten vorbelegt. Nenne die neue Region `Infos` und waehle als **Location** (der Quelle) `REST Source` statt `Sample Data`. Danach kannst du die zuvor definierte **REST Source** `locations` auswaehlen.

    ![restsource](assets/rest/restsource.png){ style="display:block;margin:auto;" }

    Du siehst die drei Informationen, die wir aus der REST Source gewaehlt haben, als **Columns** und `postalCode` als **Parameter**. Sortiere die Spalten in die Reihenfolge MUNICIPALITY_TYPE, DISTRICT_NAME und FEDERALSTATE_NAME. Das geht per Drag-and-drop oder ueber die Spalteneigenschaft **Sequence**.
    Waehle den Parameter **postalCode** und aendere den **Type** auf `Item`. Dann koennen wir `P7_ZIPCODE` als **Item** verwenden.

    ![postalcode](assets/rest/postalcode.png){ style="display:block;margin:auto;" }

    Du kannst die Anwendung jetzt speichern und starten, um das aktuelle Ergebnis zu sehen. Wir wollen es aber noch etwas schoener machen.

    Markiere die Region **Infos** und ersetze im Tab **Attributes** im Abschnitt **Appearance** das **Template** `Standard` durch `Value Attribute Pairs - Column`. Pruefe, dass der **Type** fuer **Pagination** auf `No Pagination (Show All Rows)` steht.
    Es gibt Postleitzahlen, fuer die unser einfacher REST Service mehrere Treffer liefert. Zur Vereinfachung koennen wir die Anzahl der Zeilen auf 1 begrenzen. Dafuer passen wir das Attribut **Number of Rows** fuer die neue Report-Region an.

    ![template](assets/rest/template.png){ style="display:block;margin:auto;" }

<div class="two-columns">
  <div>
    Jetzt sollte die Seite wie dieses Beispiel aussehen (hier Frankfurt am Main), mit einer Kombination aus lokalen Daten und Remote-Daten ueber einen RESTful Service.
  </div>
  <div>
    <img src="assets/rest/gardentower.png" alt="lov_ui" style="display:block;margin:auto;">
  </div>
</div>

!!! bytheway "Nested JSON"
    *Uebrigens*,<br>
    bis 23.2 konnte APEX nur flache Strukturen aus REST-API-Antworten extrahieren. Ab 24.1 gibt es Unterstuetzung fuer verschachtelte JSON-Antworten. Jede APEX-Komponente mit Unterstuetzung fuer REST Data Sources unterstuetzt deshalb Array Columns. Dazu gehoeren Reports (Classic, Interactive Reports und Grids), Karten und Diagramme, Kalender, Region Plug-ins und Automations.

!!! bytheway "REST Source Catalogs"
    *Uebrigens*,<br>
    du kannst REST Services in REST Source Catalogs buendeln (zu finden in **Workspace Utilities**). Dadurch lassen sich diese gebuendelten Services einfach mit anderen Workspaces oder Umgebungen teilen. Entwickler koennen solche Kataloge durchsuchen, die Metadaten ueber REST Services enthalten, und daraus APEX REST Data Sources erstellen.

!!! bytheway "REST Synchronization"
    *Uebrigens*,<br>
    stell dir vor, es kommen viele Daten aus einer REST Data Source, die sich nicht sehr haeufig aendern. Dann kann es sinnvoll sein, die Daten lokal zu speichern und in einem passenden Intervall zu synchronisieren. Das kann mit REST Data Source Synchronizations automatisiert werden.

!!! tip "LiveLab"
    Es gibt ein Oracle LiveLab **Build a Movies Watchlist Application using Oracle APEX**, das auf REST Data Sources basiert. Dort lernst du etwas ueber **Web Credentials**, **REST Catalogs** und **Post Processing** des Ergebnisses von REST Sources.
    Zusaetzlich behandelt das LiveLab Cards, Application Items and Processes, Quick SQL, Faceted Search, Template Options und CSS.
    [Hier klicken](https://livelabs.oracle.com/ords/r/dbpm/livelabs/view-workshop?wid=942){target="_blank"}

!!! bytheway "Oracle LiveLabs"
    *Uebrigens*,<br>
    Oracle LiveLabs ist eine APEX-Anwendung.
