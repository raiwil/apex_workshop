# 8. Diagramme

!!! sampleapp "Sample App Charts"
    <div class="two-columns">
      <div style="flex: 50%;">
           Diese Anwendung hebt die Charting-Fähigkeiten von Oracle APEX hervor. Sie zeigt, wie du deine Anwendungen erweitern kannst, um Daten visuell darzustellen, mit deklarativen und plug-in-basierten Charting-Lösungen.
           Diese App ist online verfügbar unter: [https://apex.oracle.com/go/sample_charts](https://apex.oracle.com/go/sample_charts){target="_blank"}
      </div>
      <div style="flex: 50%;">
          ![charts](assets/samples/charts.png){ style="display:block;margin:auto;" }
      </div>
    </div>

In dieser Übung bauen wir ein Pie Chart und ein Bar Chart. Das Pie Chart (Summe der Gehälter pro Abteilung) soll klickbar sein, sodass das Bar Chart (Gehälter der Mitarbeitenden) abhängig von der im Pie Chart angeklickten Abteilung aktualisiert wird. Es werden nur Mitarbeitende dieser Abteilung angezeigt.

## 8.1 Seite mit zwei Charts erstellen

Zuerst erstellen wir eine neue Seite mit einem Chart.

!!! exercise "Seite mit Chart erstellen"

    Erstelle eine Seite und klicke auf **Chart**. Die Option **Dashboard** erzeugt eine Seite mit vier Charts.

    ![createpage](assets/charts/createpage.png){ style="display:block;margin:auto;" }

    Wir beginnen mit einem **Pie Chart**.

    ![createpage2](assets/charts/createpage2.png){ style="display:block;margin:auto;" }

    Wähle `8` als **Page Number** und gib der Seite einen **Name** (zum Beispiel `MyCharts`).
    Als **Data Source** verwenden wir eine **SQL Query** statt einer Tabelle. Im SQL-Statement berechnen wir die Summe der Gehälter pro Abteilung.

    ```sql
        SELECT deptno, SUM(sal) AS deptsummary
          FROM emp
          GROUP BY deptno
          ORDER BY deptno
    ```

    ![createpage3](assets/charts/createpage3.png){ style="display:block;margin:auto;" }

    Im nächsten Schritt setzen wir die **Label Column** und die **Value Column** für das Pie Chart.

    ![createpage4](assets/charts/createpage4.png){ style="display:block;margin:auto;" }

    Sieh dir den Page Designer an. Du siehst eine Chart-Region mit einer Serie. Sowohl die Region als auch die Serie können eine Data Source haben. In diesem Fall wird die Query als Data Source der Serie verwendet, und das Chart selbst hat keine Data Source. Es ist möglich, die Data Source des Charts in einer Serie zu referenzieren, sodass mehrere Serien auf denselben Daten mit nur einem Request basieren können. Mit unterschiedlichen Quellen auf Serienebene kannst du mehrere Datenquellen im selben Chart verwenden.
    Jetzt wollen wir ein Bar Chart mit mehr als einer Serie hinzufügen (Gehalt und Provision der Mitarbeitenden). Hier verwenden wir die Data Source in der Region und referenzieren sie in der Serie. Ziehe dafür eine **Chart**-Region aus der Gallery per Drag-and-drop rechts neben das bestehende Chart.

    ![addchart](assets/charts/addchart.png){ style="display:block;margin:auto;" }

    Nenne die neue Region `Employees` und wähle `Chart` als **Type**. Die **Location** unserer Quelle ist die `Local Database`, und der **Table Name** ist unsere Tabelle `EMP`. Wenn du möchtest, kannst du den Namen des ersten Charts und seiner Serie ändern.

    ![addchart2](assets/charts/addchart2.png){ style="display:block;margin:auto;" }

    Ändere im Tab **Attributes** den Chart-**Type** auf Bar, falls er nicht bereits gesetzt ist.

    ![addchart3](assets/charts/addchart3.png){ style="display:block;margin:auto;" }

    Die Serie des neuen Charts ist wieder mit Beispieldaten vorbelegt. Nenne die Serie `Salary` und ersetze die vordefinierte **Location** `Sample Data` durch **Region Source**, die auf die Datenquelle der Region selbst zeigt. Jetzt können wir Daten aus dieser Quelle auswählen und **Label** auf `EMPNO` sowie **Value** auf `SAL` setzen. Da Aggregation hier irrelevant ist, setzen wir die Eigenschaft **Value Aggregation** auf `No Aggregation`.

    ![addchart4](assets/charts/addchart4.png){ style="display:block;margin:auto;" }

    Jetzt können wir diese Serie **Duplicate** (Rechtsklick auf die Serie) und nur den **Name** auf `Commission` sowie den **Value** von `SAL` auf `COMM` ändern.

    ![addchart5](assets/charts/addchart5.png){ style="display:block;margin:auto;" }

Jetzt stehen die beiden Charts unabhängig nebeneinander.

![result](assets/charts/result.png){ style="display:block;margin:auto;" }

## 8.2 Ein Chart durch Klick auf ein anderes ändern

Jetzt wollen wir im Bar Chart nur Mitarbeitende aus der Abteilung anzeigen, die im Pie Chart ausgewählt wurde (durch Klick auf ein Segment). Dafür verwenden wir ein verstecktes Item, das durch den Klick gefüllt und danach als Filter für das zweite Chart verwendet wird.

!!! exercise "Ein Chart durch Klick auf ein anderes ändern"

    Erstelle ein Page Item im Body (per Rechtsklick auf **Body**). Nenne dieses Item `P8_DEPTNO`. Position oder Label sind irrelevant, weil dieses Item später versteckt wird (als **Type**), aber für den Anfang behalten wir `Text Field` als **Type**, damit wir sehen, was mit dem Item passiert.

    ![item](assets/charts/item.png){ style="display:block;margin:auto;" }

    Wir verwenden dieses Item jetzt als Filter für das Bar Chart. Füge dafür diese Clause zur **Where Clause** der Region **Employees** hinzu. Wenn `P8_DEPTNO` null ist, werden alle Abteilungen angezeigt.

    ```sql
           deptno = nvl(:P8_DEPTNO,deptno)
    ```

    ![filter](assets/charts/filter.png){ style="display:block;margin:auto;" }

    Wähle jetzt die Serie des ersten Charts aus (sie heißt **Chart** und **Series1**, wenn du sie nicht geändert hast). Setze im Abschnitt **Link** den **Type** auf `Redirect to Page in this Application`. Dann erscheint die Eigenschaft **Target**, und du kannst auf **No Link Defined** klicken.

    ![link](assets/charts/link.png){ style="display:block;margin:auto;" }

    Setze `8` (die gleiche Seite, auf der wir sind) als **Page** für das **Target** und mappe das Page Item `P8_DEPTNO` auf den Wert der Chart-Region (`&DEPTNO.`). Das kannst du über die Menü-Icons tun.

    ![link2](assets/charts/link2.png){ style="display:block;margin:auto;" }

Das Pie Chart ist jetzt klickbar. Beim Klick wird die Seite neu geladen und das Bar Chart mit den passenden Daten aktualisiert. Du siehst auch die Änderung unseres Hilfs-Items. Was noch fehlt, ist ein Reset-Button, um wieder alle Mitarbeitenden anzuzeigen. Den fügen wir später hinzu.

## 8.3 Chart aktualisieren, ohne die ganze Seite neu zu laden

Aktuell wird die ganze Seite neu geladen, obwohl nur das eine Bar Chart aktualisiert werden muss. Für den Klick auf eine Serie gibt es leider keine Dynamic Action, aber wir können dafür ein kleines eigenes JavaScript verwenden.

!!! exercise "JavaScript für partielles Neuladen verwenden"
    Ändere den Link-**Type** der Serie in der Pie-Chart-Region auf `Redirect to URL` und schreibe etwas JavaScript als URL, um unser verstecktes Item zu setzen.

    ```javascript
           javascript:apex.item('P8_DEPTNO').setValue('&DEPTNO.');
    ```

    ![redirect](assets/charts/redirect.png){ style="display:block;margin:auto;" }

    Es ist also keine echte Weiterleitung. Wir verwenden dies, um das Item im Browser zu setzen, nicht auf dem Server (Session State).
    Füge dem Item eine **Dynamic Action** hinzu, die ausgeführt wird, wenn sich das Item ändert. Das ist im Abschnitt **When** vorbelegt, wenn die Dynamic Action über das Kontextmenü des Items erstellt wird.

    ![da](assets/charts/da.png){ style="display:block;margin:auto;" }

    Ändere die rot markierte True Action **Show** zur **Action** `Refresh`. **Affected Elements** ist unsere Bar-Chart-`Region` mit dem Namen `Employees`. Die Action kann benannt werden. Wenn der **Name** leer ist, werden Actions im Tree mit ihrer **Action** angezeigt.

    ![refresh](assets/charts/refresh.png){ style="display:block;margin:auto;" }

    Du kannst die Anwendung jetzt testen und siehst, dass beim Klick auf einen Abschnitt des Pie Charts ein Spinner im Bar Chart erscheint, sich aber nichts ändert. Unser Item ändert sich, aber das scheint keinen Effekt zu haben. Das ist ein Beispiel für **Session State**. Wir haben `P8_DEPTNO` im Browser geändert (per JavaScript), ohne es zu submitten. Die Änderung existiert also nur im Document Object Model (DOM). Die Query für das Chart läuft in der Datenbank, aber dort ist die Item-Änderung nicht bekannt. Deshalb müssen wir diese Änderung selbst submitten.
    Der einfachste Weg ist, in der Zielregion (unser Bar Chart) die Items zu definieren, die beim Refresh der Region submitted werden sollen. Dafür gibt es die Eigenschaft **Page Items to Submit**.

    ![submit](assets/charts/submit.png){ style="display:block;margin:auto;" }

    Zuletzt fügen wir einen Button hinzu, um die Auswahl zurückzusetzen. Wähle im Kontextmenü der Region **Employees** den Eintrag **Create Button**.
    Für **Button Name** und **Label** setzen wir `Reset`.

    ![button](assets/charts/button.png){ style="display:block;margin:auto;" }

    Im Abschnitt **Behavior** mit dem **Type** `Standard` wählen wir als **Action** den Wert `Trigger Action` (die vereinfachten Dynamic Actions aus Kapitel 2).

    ![triggeraction](assets/charts/triggeraction.png){ style="display:block;margin:auto;" }

    Als **Triggered Action** wähle die **Action** `Set Value`. **Affected Element** ist unser **Item** `P8_DEPTNO`, und der **Value** ist leer, weil wir das Item auf null setzen wollen.

    ![setvalue](assets/charts/setvalue.png){ style="display:block;margin:auto;" }

    Das Setzen des Werts löst die Refresh Action von oben aus, und diese Aufgabe ist erledigt.

!!! bytheway "Charts über verfügbare Eigenschaften hinaus anpassen"
    <div class="two-columns">
       <div>
          *Übrigens*,<br>
          Charting in APEX basiert auf den Oracle JavaScript Extension Toolkit (JET) Data Visualizations. Weitere Informationen zu Oracle JET und den Data-Visualization-Komponenten findest du im [Jet Cookbook](https://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html?component=home&demo=rootVisualizations){ target="_blank" } und im [ojChart API Guide](https://www.oracle.com/webfolder/technetwork/jet/jsdocs/oj.ojChart.html){ target="_blank" }.
          Nicht jede Eigenschaft von JET Charts kann über die APEX UI gesetzt werden. Es ist möglich, diese Eigenschaften per JavaScript zu manipulieren. Im JavaScript Initialization Code (unter dem Tab **Attributes** einer Chart-Region) zeigt die Hilfe ein kleines Beispiel, wie das gemacht werden kann.
       </div>
    <div>
        ![Mode](assets/charts/javascriptfunction.png){ style="display:block;margin:auto;" }
    </div>
    </div>

