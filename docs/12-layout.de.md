# 12. Layout

In Oracle APEX definiert ein **Theme** das allgemeine Erscheinungsbild und die User Experience einer Anwendung. Es besteht aus einer Sammlung von **Templates**, die Layout und Darstellung von UI-Komponenten wie Seiten, Regionen, Buttons, Listen und Navigationselementen steuern. Durch ein Theme können Entwickler ein konsistentes Look and Feel in der gesamten Anwendung sicherstellen. Themes ermöglichen auch, das Erscheinungsbild einer Anwendung zentral zu verändern oder das visuelle Design durch Wechsel auf ein anderes Theme komplett auszutauschen.

## 12.1 Themes

Das **Universal Theme** ist das Standard-Theme von Oracle APEX und dient als Grundlage für moderne, responsive Webanwendungen. Es bietet einen umfangreichen Satz vordefinierter Templates, Komponenten und Styling-Optionen, die sich automatisch an verschiedene Bildschirmgrößen und Geräte anpassen. Diese Flexibilität ermöglicht Entwicklern, attraktive und professionelle Benutzeroberflächen zu erstellen, ohne viel eigenen Code schreiben zu müssen.

Das Universal Theme wird mit jedem APEX-Release weiter verbessert und enthält Best Practices für Usability, Accessibility, Wartbarkeit und modernes Webdesign. Dadurch können Entwickler effizient Anwendungen bauen, die über Desktop- und Mobilgeräte hinweg eine konsistente, benutzerfreundliche und zukunftssichere Erfahrung bieten.

!!! sampleapp "Universal Theme Reference"
    <div class="two-columns">
      <div style="flex: 50%;">
           Diese App stellt dir Universal Theme vor und bietet eine einfache Möglichkeit, die verschiedenen Templates, Template Options und Theme Styles zu durchsuchen. Die Beispiele zeigen, wie du das Layout deiner Seiten einfach steuern kannst, um eine gut aussehende Anwendung zu erstellen.
           Diese App ist online verfügbar unter: [https://oracleapex.com/ut](https://oracleapex.com/ut){target="_blank"}
      </div>
      <div style="flex: 50%;">
          ![ut](assets/samples/ut.png){ style="display:block;margin:auto;" }
      </div>
    </div>

In APEX ist ein **Theme Style** eine Sammlung von CSS-Definitionen und Konfigurationseinstellungen, die das visuelle Erscheinungsbild einer Anwendung steuern. Theme Styles bieten eine einfache Möglichkeit, Look and Feel einer Anwendung anzupassen, ohne die zugrunde liegenden Templates des Universal Theme zu verändern.

Mit dem **Theme Roller** können Entwickler einen bestehenden Theme Style über eine intuitive Benutzeroberfläche anpassen, indem sie Farben, Schriftarten und andere visuelle Eigenschaften ändern. Neue Theme Styles können auch erstellt werden, indem ein bestehender Style kopiert und angepasst wird. Die resultierenden CSS-Definitionen werden im Anwendungstheme gespeichert und können exportiert und in anderen Anwendungen wieder importiert werden.

APEX unterstützt außerdem Theme Styles, die vom Benutzer ausgewählt werden können. In Shared Components -> User Interface Attributes erlaubt die Option **Enable End Users to Choose Theme Style** Benutzern, zur Laufzeit zwischen verfügbaren Styles zu wechseln. Diese Funktion wird häufig verwendet, um Optionen wie **Light Mode** und **Dark Mode** anzubieten.

!!! exercise "Theme Roller verwenden"

    <div class="two-columns">
      <div style="flex: 50%;">
          Du startest den **Theme Roller** aus der **Developer Toolbar** in der laufenden Anwendung. Mache das auf Seite 2, dem Employee Report.
      </div>
      <div style="flex: 50%;">
          ![themeroller](assets/layout/themeroller.png){ style="display:block;margin:auto;" }
      </div>
    </div>

    <div class="two-columns">
      <div style="flex: 50%;">
          Nimm einige Änderungen vor und speichere sie als neuen Theme Style. Verwende **Select Theme** im Theme Roller, um den Theme Style auszuwählen, von dem du starten willst. Im Abschnitt **Appearance** gibt es vordefinierte Auswahlmöglichkeiten, darunter kannst du exakte Farben definieren. Die Änderungen sind sofort in der Anwendung sichtbar. Ändere zum Beispiel die **Link Color**, und du siehst die Änderung im Report. Speichere deine Änderungen als neuen Style.
      </div>
      <div style="flex: 50%;">
          ![themeroller2](assets/layout/themeroller2.png){ style="display:block;margin:auto;" }
      </div>
    </div>

    Gehe jetzt zu **Shared Components** und wähle **Themes**. In der Mitte befindet sich der Abschnitt **User Interface**. Klicke auf das **Universal Theme** und gehe zum Abschnitt **Styles**. Dort siehst du deinen neuen Style und kannst prüfen, was darin enthalten ist.

    ![styles](assets/layout/styles.png){ style="display:block;margin:auto;" }

    Wähle in **User Interface Attributes** in **Shared Components** (auch erreichbar über den Button **Edit Application Definition** auf der Application Home Page im App Builder) den Abschnitt **Attributes**. Aktiviere alle drei Switches. Was sie tun, ist selbsterklärend.

    ![styles2](assets/layout/styles2.png){ style="display:block;margin:auto;" }

    <div class="two-columns">
      <div style="flex: 50%;">
          Jetzt gibt es unten links in der Anwendung einen Link **Customize**, über den der Endbenutzer einen Style auswählen kann. Du siehst auch den gerade aktivierten "Built with Love using APEX"-Footer.
      </div>
      <div style="flex: 50%;">
          ![styles3](assets/layout/styles3.png){ style="display:block;margin:auto;" }
      </div>
    </div>

## 12.2 Templates und Template Options

**Templates** sind wiederverwendbare Komponenten, die Struktur und Erscheinungsbild von Anwendungselementen wie Seiten, Regionen, Reports, Buttons und Listen definieren. Sie steuern das erzeugte HTML und Layout und sorgen für eine konsistente User Experience in der gesamten Anwendung. Neben HTML-Markup und CSS-Klassen können Templates auch JavaScript-Code enthalten, um interaktive Funktionalität bereitzustellen.

**Template Options** erlauben Entwicklern, Aussehen und Verhalten eines Templates zu verändern, ohne das Template selbst zu ändern. Diese Optionen werden über vordefinierte CSS-Klassen und Modifier umgesetzt. Dadurch lassen sich unterschiedliche visuelle Varianten derselben Komponente einfach erstellen. Für das Universal Theme können die verfügbaren Template Options über die Sample Application erkundet und demonstriert werden, die viele der unterstützten Layouts und Styles zeigt.

APEX bietet auch **Live Template Options**, mit denen Entwickler Template Options direkt in einer laufenden Anwendung ausprobieren können. Änderungen können sofort previewed werden, ohne zurück in den Page Designer zu wechseln. Das macht es einfacher, verschiedene Layouts und Styles während der Entwicklung zu bewerten.

Templates verwenden intensiv **Substitution Strings**. Das sind Platzhalter, die zur Laufzeit durch dynamische Werte ersetzt werden. Dieser Mechanismus erlaubt Templates, anwendungsspezifische Informationen wie Seitentitel, Region-Inhalte, Button-Labels und benutzerspezifische Daten anzuzeigen, während die Template-Definition wiederverwendbar und wartbar bleibt.

!!! exercise "Template bauen"

    Wir erstellen eine neue Seite (verwende `10`) mit einem **Classic Report** als Komponente, basierend auf der Tabelle `EMP`, und nennen die Seite `Layout`.

    ![classicreport](assets/layout/classicreport.png){ style="display:block;margin:auto;" }

    Entferne die sechs Spalten für Dokumente und Bilder aus dem Report.
    Wenn du die Report-Region auswählst, siehst du eine **Template**-Eigenschaft im Abschnitt **Appearance** des Tabs **Region** und eine weitere im Tab **Attributes**. Die erste ist für die Region selbst, die zweite ist ein spezifisches Template für den Report.

    ![appearance](assets/layout/appearance.png){ style="display:block;margin:auto;" }

    Für jedes Template gibt es **Template Options**, mit denen vordefinierte Eigenschaften geändert werden können. Die meisten davon können als **Live Template Options** direkt in der Anwendung geändert werden, um sofortiges Feedback zu erhalten. Verwende **Quick Edit** in der Developer Toolbar und klicke auf den Schraubenschlüssel des entsprechenden Objekts, um die Live Template Options zu sehen.

    Die Definitionen der **Templates** findest du in **Shared Components**. Es gibt mehrere unterschiedliche Templates pro Typ. Wir können sehen, wie oft ein Template in der Anwendung referenziert wird, und es mit dem Icon am Ende kopieren. Wir kopieren das Template **Report - Generic Columns** mit dem Namen **Standard** und verwenden den Namen `MyReportTemplate` für unser neues Template.

    ![reporttemplate](assets/layout/reporttemplate.png){ style="display:block;margin:auto;" }

    Es steht nun in der Liste, und wir können darauf klicken, um es zu inspizieren.
    Zuerst wollen wir einen pinken Rahmen um den Report hinzufügen. Dafür ergänzen wir den passenden Style (`style="border: 10px solid #ff00f7"`) im Template. Ersetze die erste Zeile von **Before Rows** durch diese:

    ``` HTML
         <div class="t-Report #COMPONENT_CSS_CLASSES#" id="report_#REGION_DOM_ID#" style="border: 10px solid #ff00f7" #REPORT_ATTRIBUTES# data-region-id="#REGION_DOM_ID#">
    ```

    Wir ändern die Farbe des Inhalts in **Column Template 1**. Es ist möglich, mehrere Column Templates zu haben, wobei Conditions festlegen, welches Template für welche Spalte gilt. Hier fügen wir `style="color: #ff00f7; font-style: italic;"` in Zeile eins hinzu. Ersetze die erste und einzige Zeile in dieser Eigenschaft durch diese:

    ``` HTML
         <td class="t-Report-cell" #ALIGNMENT# #ACCESSIBLE_HEADERS#  style="color: #ff00f7; font-style: italic;">#COLUMN_VALUE#</td>
    ```

    Speichere das, wähle unser neues Template für den Report aus (zur Erinnerung: im Attributes-Tab, nicht im Region-Tab) und prüfe das Ergebnis.

!!! bytheway "HTML DOM ID und Static ID"
    *Übrigens*,<br>
    in APEX ist eine Static ID ein vom Entwickler definierter Identifier, der Komponenten wie Seiten, Regionen, Items und Buttons zugewiesen werden kann. Sie bietet eine stabile und sinnvolle Möglichkeit, Komponenten aus CSS, JavaScript, Dynamic Actions oder automatisierten Tests zu referenzieren. Sie ist sehr wichtig bei der Verwendung von APEXLang.

    Vor APEX 26.1 wurde die Static ID verwendet, um das entsprechende HTML-Element im Browser zu identifizieren. Ab APEX 26.1 führt APEX eine klarere Trennung zwischen Static ID und HTML DOM ID ein. Während die Static ID ein logischer Identifier innerhalb von APEX bleibt, erlaubt das neue Attribut HTML DOM ID Entwicklern, explizit die ID zu definieren, die im DOM des Browsers gerendert wird. Das bietet mehr Kontrolle bei der Integration von eigenem JavaScript, CSS, Drittanbieterbibliotheken und automatisierten UI-Testwerkzeugen.

    Unser Beispiel mit dem pinken Rahmen würde also auch in älteren Releases funktionieren, dort müsste aber "DOM_ID" durch "STATIC_ID" ersetzt werden.

    Durch die Trennung dieser Konzepte werden APEX-Anwendungen leichter wartbar und weniger abhängig von intern erzeugten HTML-Identifiern. Entwickler können nun bei Bedarf stabile DOM IDs definieren und gleichzeitig Static IDs für die komponentenbezogene Identifikation auf Anwendungsebene weiterverwenden.

## 12.3 Template Components

Vor Oracle APEX 23.1 verwendeten Entwickler häufig Classic Reports zusammen mit eigenen Report Templates, um spezialisierte UI-Komponenten zu erstellen. Dieser Ansatz erforderte ein gutes Verständnis von Report Templates und den verfügbaren Substitution Strings, um die gewünschte HTML-Ausgabe zu erzeugen.

Template Components bieten eine moderne und deutlich flexiblere Alternative. Sie ermöglichen Entwicklern, wiederverwendbare UI-Komponenten auf Basis von HTML-Templates zu erstellen, optional erweitert mit CSS und JavaScript. Template Components können als Regionstyp verwendet werden, um einzelne oder mehrere Datensätze anzuzeigen, und sogar innerhalb von Report-Spalten.

APEX enthält mehrere eingebaute Template Components, aber Entwickler können auch eigene Komponenten erstellen und mit anderen Anwendungsentwicklern teilen. Dadurch entsteht ein Low-Code-Ansatz für eigene UI-Elemente, der gleichzeitig Konsistenz und Wiederverwendbarkeit über Anwendungen hinweg fördert.

Template Components ermöglichen es, komplexe UI-Funktionalität in einfach nutzbare Bausteine zu kapseln. Anwendungsentwickler können sich dadurch stärker auf fachliche Anforderungen konzentrieren statt auf Implementierungsdetails.

Eine gute Einführung in Template Components ist der Blogpost [Developing a Responsive Number Counter with Oracle APEX: My First Template Component](https://tm-apex.hashnode.dev/developing-a-responsive-number-counter-with-oracle-apex-my-first-template-component){target="_blank"} von Timo Herwix. Er bietet eine Schritt-für-Schritt-Anleitung zum Bau einer Template Component mit HTML, CSS und JavaScript und zeigt, wie sie in eine APEX-Anwendung integriert und verwendet wird.

Für einen breiteren Überblick bietet Oracle außerdem eine APEX-Office-Hours-Session zu Template Components. Die Aufzeichnung ist auf [YouTube](https://www.youtube.com/watch?v=BiKOTn4bL1A){target="_blank"} verfügbar und bietet eine praktische Einführung in Konzepte, Architektur und Use Cases dieser leistungsfähigen Funktion.

!!! bytheway "APEX Office Hours"
    *Übrigens*,<br>
    [APEX Office Hours](https://asktom.oracle.com/ords/r/tech/catalog/series-landing-page?p5_oh_id=744){target="_blank"} sind kostenlose Online-Sessions des Oracle-APEX-Produktteams. Sie bieten Entwicklern die Möglichkeit, direkt von APEX-Experten etwas über neue Features, Best Practices und reale Use Cases zu lernen. Sessions enthalten typischerweise Live-Demonstrationen, technische Deep Dives und interaktive Q&A-Segmente, in denen Teilnehmende Fragen stellen und Rückmeldung vom Produktteam erhalten können. Aufzeichnungen vergangener Office Hours sind auf YouTube verfügbar und decken viele Themen ab, von Einsteigerkonzepten bis zu fortgeschrittenen Entwicklungstechniken. Sie sind eine ausgezeichnete Ressource, um bei den neuesten Oracle-APEX-Features und Entwicklungspraktiken auf dem Laufenden zu bleiben.

!!! exercise "Template Component bauen und verwenden"
    Gehe in **Shared Components** zu **Templates**, wo wir vorher das Report Template geändert haben, und erstelle eine **Template Component**.

    ![tc](assets/layout/tc.png){ style="display:block;margin:auto;" }

    Wähle **From Scratch** und nenne sie `MyTC`.

    ![tc2](assets/layout/tc2.png){ style="display:block;margin:auto;" }

    Wir wollen diese Komponente für einen einzelnen Datensatz (**Single (Partial)**) und für mehrere Zeilen (**Multiple (Report)**) verwenden, damit wir diese Template Component für einen Report (Multiple) oder zum Beispiel in einer Report-Spalte (Single) nutzen können.
    HTML selbst unterstützt diese Template Conditions nicht, aber die APEX-Template-Syntax tut das. Gib im Feld **Partial** dieses Code-Snippet ein.

    ```HTML
          {if APEX$IS_LAZY_LOADING/}
            <div>#NAME# #JOB#</div>
          {else/}
            <div class="t-rotatingcard">
              <div class="t-front">
                <div>{with/}{apply THEME$AVATAR/}</div>
                <div class="t-name">#NAME#</div>
                <div>#JOB#</div>
              </div>
              <div class="t-back">
                <div>{with/}{apply THEME$AVATAR/}</div>
                <div>SAL=#SALARY#/COMM=#COMMISSION#</div>
              </div>
            </div>
          {endif/}
    ```

    Es gibt eine Referenz auf eine andere vordefinierte Template Component namens Avatar. Wir wollen eine rotierende Karte bauen, die die Avatar-Komponente verwendet und Informationen auf beiden Seiten zeigt. Die hier referenzierten CSS-Klassen werden später hinzugefügt.

    ![tc3](assets/layout/tc3.png){ style="display:block;margin:auto;" }

    Jetzt haben wir das Partial definiert, das aus den Multiple-Einstellungen über `#APEX$PARTIAL#` referenziert wird. Als Nächstes ändern wir das HTML für **Report Row**, **Report Body** und **Report Container** mit den folgenden HTML-Snippets.

    ```HTML
         <li #APEX$ROW_IDENTIFICATION# class="t-card-item">#APEX$PARTIAL#</li>
    ```

    ```HTML
         <ul class="t-card-list">  #APEX$ROWS# </ul>
    ```

    ```HTML
         <div id="#APEX$DOM_ID#" class="t-card-report">  #APEX$REPORT_BODY# </div>
    ```

    ![tc4](assets/layout/tc4.png){ style="display:block;margin:auto;" }

    Im Abschnitt **Custom Attributes** können wir Platzhalter definieren, die für Entwickler im Page Designer sichtbar sind und die Komponente einfacher nutzbar machen. Das machen wir über **Synchronize from Templates**.

    ![tc5](assets/layout/tc5.png){ style="display:block;margin:auto;" }

    Wenn es mehrere Attribute gibt, können sie gruppiert werden. Wir haben **Commission**, **JOB**, **Name** und **Salary** und gruppieren sie in `Basic` und `Money`, um später im Page Designer zu sehen, wie das aussieht. Attribute, die keiner Gruppe zugeordnet sind, landen standardmäßig in der Gruppe Settings.

    ![tc6](assets/layout/tc6.png){ style="display:block;margin:auto;" }

    ![tc7](assets/layout/tc7.png){ style="display:block;margin:auto;" }

    Um ein Attribut einer Gruppe zuzuweisen, klicke auf den Namen des Attributs.

    ![tc8](assets/layout/tc8.png){ style="display:block;margin:auto;" }

    Erstelle jetzt auf Seite 10 rechts neben der bestehenden Region **Layout** eine neue Region. Wähle als Typ unsere neue Template Component. Am einfachsten geht das per Drag-and-drop aus der Gallery, da unsere neue Komponente dort jetzt verfügbar ist.

    ![region_tc](assets/layout/region_tc.png){ style="display:block;margin:auto;" }

    Nenne die neue Region `Swap`. Die Komponente `MyTC` ist als **Type** bereits vorausgewählt, daher müssen wir für unsere Source nur noch `EMP` als **Table Name** auswählen.

    ![region_tc2](assets/layout/region_tc2.png){ style="display:block;margin:auto;" }

    Wenn wir den Attributes-Tab öffnen, sehen wir die Abschnitte **Basic** und **Money** mit ihren Attributen aus der Template-Component-Definition. Wir mappen die Spalten entsprechend.

    ![region_tc3](assets/layout/region_tc3.png){ style="display:block;margin:auto;" }

    Das Ausführen *funktioniert* irgendwie, sieht aber nicht schön aus, weil das CSS fehlt. Kopiere auf Seitenebene das folgende CSS (das übrigens mit etwas KI-Hilfe erzeugt wurde) in das Attribut **Inline**.

    ```CSS
        .t-card-list {
            list-style: none;
            padding: 0;
            margin: 0;

            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
        }

        .t-card-item {
            display: flex;
            justify-content: center;
        }

        .t-rotatingcard {
            position: relative;
            width: 15rem;
            height: 10rem;
            perspective: 15rem;
            font-size: 14px;
        }

        .t-front, .t-back {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: auto;
            border-radius: 20px;
            box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.8);
            transition: transform 2s cubic-bezier(0.25, 0.8, 0.25, 1);
            backface-visibility: hidden;
            overflow: hidden;
            flex-direction: column;
        }

        .t-front:before, .t-front:after, .t-back:before, .t-back:after {
            position: absolute;
        }

        .t-front:before, .t-back:before {
            top: -20px;
            right: -20px;
            width: 40px;
            height: 40px;
            background-color: rgba(255, 255, 255, 0.08);
            transform: rotate(45deg);
            z-index: 1;
        }

        .t-front:after, .t-back:after {
            top: 0;
            right: 5px;
            font-size: 24px;
            transform: rotate(45deg);
            z-index: 2;
        }

        .t-front {
            background-color: #90ee90;
            color: green;
            transform: rotateX(0deg);
        }

        .t-back {
            background-color: #ffcccb;
            color: red;
            transform: rotateX(180deg);
        }

        .t-rotatingcard:hover .t-back {
            transform: rotateX(360deg);
        }

        .t-rotatingcard:hover .t-front {
            transform: rotateX(180deg);
        }

        .t-name {
            text-decoration: underline;
        }
    ```

   ![css](assets/layout/css.png){ style="display:block;margin:auto;" }

Ein anderer Ansatz ist, eine Datei in Shared Components - **Static Application Files** zu erstellen und sie im oben genannten Attribut **File URLs** zu referenzieren. Der am besten wiederverwendbare Ansatz, wenn du diese Template Component überall mit demselben CSS verwenden willst, ist, diese Datei in der Template Component selbst zu referenzieren. Dann ist sie unabhängig von der verwendeten Seite verfügbar.

<div class="two-columns">
  <div style="flex: 50%;">
     Akzeptanz durch Schnickschnack ;)
  </div>
  <div style="flex: 50%;">
        <img src="../assets/layout/rotatingcard.png" alt="rotatingcard" style="display:block;margin:auto;">
  </div>
</div>

## 12.4 Layout auf Objektebene

Du kannst Layout auf Objektebene beeinflussen, indem du CSS-Klassen hinzufügst, ohne Templates zu ändern oder zu erstellen.

!!! exercise "CSS und Styles zu Items hinzufügen"
    Wir ändern das Item **P3_SAL** in der Employee Form (Seite 3). Füge im Abschnitt **Appearance** den String `my-highlight` zur Eigenschaft **CSS Classes** hinzu.
    Jetzt müssen wir diese Klasse definieren. Das könnte, wie im vorherigen Kapitel gesehen, auf Seitenebene passieren. Schreibe den folgenden Code auf Seitenebene in das Feld **Inline** im Abschnitt **CSS**.

    ``` CSS
        .my-highlight {
          background-color: #fffae6;
          border: 1px solid #f7c948;
          font-weight: bold;
        }
    ```

    Prüfe nun das SAL-Item in der Anwendung. Es sollte ein gelber Rahmen um das Gehalt erscheinen.

    Es ist auch möglich, individuelle HTML-Styles hinzuzufügen.

    Gehe jetzt zum Item **P3_COMM** und setze im Abschnitt **Advanced** das Feld **Custom Attributes** auf `style="color:red; font-size:28px;"`

    Die Provision sollte nun rot und groß angezeigt werden.

    Abschliessend wollen wir den Namen bedingt formatieren. Erstelle dazu eine **Dynamic Action** mit dem Event **Page Load**. Wähle in der **True Action** als Action **Execute JavaScript Code** und kopiere das folgende Snippet in das Feld **Code**.

    ```javascript
        if ($v('P3_JOB') == 'PRESIDENT' || $v('P3_JOB') == 'MANAGER') {
            $('#P3_ENAME').css('background-color', '#ffe6e6');
          } else {
            $('#P3_ENAME').css('background-color', '');
          }
    ```

    Der Name hat nun einen roten Hintergrund, wenn der Job Manager oder President ist.

!!! bytheway "CSS utility classes"
    <div class="two-columns">
      <div style="flex: 50%;">
            *Übrigens*,<br>
            während viele Komponenten im Universal Theme automatisch mehrere Farben verwenden, kannst du diese auch in eigenen Komponenten nutzen. Universal Theme stellt eine Reihe von CSS Utility Classes bereit, mit denen diese Farbpalette auf beliebiges HTML-Markup angewendet werden kann: [Hier klicken](https://oracleapex.com/ords/r/apex_pm/ut/color-and-status-modifiers){target="_blank"}
      </div>
      <div style="flex: 50%;">
          ![banner](assets/layout/cssclasses.png){ style="display:block;margin:auto;" }
      </div>
    </div>

## 12.5 Responsive Grid Layout

Oracle APEX verwendet ein Responsive Grid Layout auf Basis eines 12-Spalten-Rasters. Seitenkomponenten wie Regionen und Items können positioniert werden, indem ausgewählt wird, wo sie starten und wie viele Spalten sie einnehmen. Dadurch lassen sich Layouts einfach erstellen, die sich an verschiedene Bildschirmgrößen anpassen und gleichzeitig eine konsistente Seitenstruktur behalten. Das Grid kann auch verschachtelt werden, sodass Regionen oder Items innerhalb einer Parent-Grid-Spalte ihr eigenes internes 12-Spalten-Layout definieren können.

Die Positionierung innerhalb des Grids wird über folgende Eigenschaften gesteuert:

* **Start New Row** - ob das Objekt eine neue Zeile startet
* **Column** - die Spalte von 1 bis 12, in der das Objekt startet
* **Column Span** - die Anzahl der Spalten, die das Objekt einnimmt
* **New Column** - ob das Objekt in derselben Zeile eine neue Spalte startet (nur verfügbar, wenn **Start New Row** auf No steht)

!!! bytheway "Responsive Grid Layout"
    <div class="two-columns">
        <div style="flex: 50%;">
          *Übrigens*,<br>
          du kannst das Grid mit der Developer Toolbar visualisieren. Klicke in der Toolbar auf das Informations-Icon und wähle **Show Layout Columns** oder **Hide Layout Columns**.
        </div>
        <div style="flex: 50%;">
            ![grid](assets/layout/grid.png){ style="display:block;margin:auto;" }
        </div>
    </div>

