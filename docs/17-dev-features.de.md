# 17. Weitere Entwicklungsfunktionen

## 17.1 Mobile Anwendungen

Universal Theme ist standardmaessig responsive. Wenn du mehr Kontrolle ueber das responsive Verhalten deiner Anwendung brauchst, nutze die zusaetzlichen Responsive Options im Universal Theme.

Das ist nicht spezifisch fuer mobile Anwendungen, aber wichtig, wenn eine Anwendung auf einem Smartphone nutzbar sein soll, ohne fuer jede Bildschirmgroesse eine eigene Seite zu bauen. Denke daran: Eine Form mit 87 Items und 12 Buttons kann technisch responsive sein, aber auf einem mobilen Geraet trotzdem nicht benutzerfreundlich.

Beim Design fuer mobile Nutzung solltest du mit der Aufgabe beginnen, die der Benutzer unterwegs erledigen will. Kuerzere Forms, klare Buttons, sinnvolle Default Values und weniger sichtbare Spalten haben oft mehr Wirkung, als eine bestehende Desktop-Seite nur auf einen kleineren Bildschirm zu bringen. Teste wichtige Seiten frueh auf einem echten Smartphone, weil Touch-Ziele, Scrollverhalten, Tastaturverhalten und Netzwerkbedingungen auf dem Desktop schwer einzuschaetzen sind.

!!! sampleapp "Sample App APEXToGo"
    <div class="two-columns">
      <div style="flex: 50%;">
           Diese Anwendung zeigt Features einer mobilen Webanwendung, die mit Oracle APEX gebaut wurde. Sie demonstriert Mobile-Design-Faehigkeiten und verwendet Progressive-Web-App-Technologie (PWA), um eine erweiterte, native-aehnliche Erfahrung bereitzustellen.
           Diese App ist online verfuegbar unter: [https://oracleapex.com/ords/r/apex_pm/apextogo/](https://oracleapex.com/ords/r/apex_pm/apextogo/){target="_blank"}

      </div>
      <div style="flex: 50%;">
          ![apextogo](assets/samples/apextogo.png){ style="display:block;margin:auto;" }
      </div>
    </div>

Fuer Reports bietet Oracle APEX zwei responsive Report-Typen fuer mobile Geraete: **Column Toggle Report** und **Reflow Report**. Sie koennen Benutzern helfen, bei Report-Daten auf kleineren Bildschirmen den Ueberblick zu behalten. Ein Report mit vielen Spalten ist aber oft besser als Card, Liste oder suchfokussierte Seite neu gestaltet, auf der Benutzer den relevanten Datensatz schnell finden und oeffnen koennen.

Seit APEX 21.2 koennen Anwendungen deklarativ als Progressive Web Apps (PWAs) aktiviert werden. Eine PWA ist eine Webanwendung, die responsives Webdesign mit ausgewaehlten Faehigkeiten verbindet, die man sonst mit nativen Apps verbindet. Nach der Installation kann sie vom Home Screen oder App Launcher gestartet und ohne umgebendes Browserfenster angezeigt werden. Dadurch fuehlt sie sich eher wie eine normale App an. PWAs verwenden ein Web App Manifest und einen Service Worker, um Features wie Installierbarkeit und optimiertes Caching zu unterstuetzen. Das kann Ladeverhalten verbessern und auf unzuverlaessigen Netzwerken eine bessere Erfahrung bieten. Seiten und Daten, die offline funktionieren sollen, muessen aber bewusst entworfen werden.

Bei Business-Anwendungen liegt der groesste Wert einer PWA oft nicht darin, eine native App vollstaendig zu ersetzen, sondern die Reibung fuer haeufige Benutzer zu reduzieren. Sie koennen die Anwendung installieren, sie vom selben Ort wie ihre anderen Apps starten und zu einem fokussierten Workflow zurueckkehren, ohne erst durch den Browser navigieren zu muessen. Das ist nuetzlich fuer Approval Apps, Field-Service-Szenarien, Inventurpruefungen, Event-Registrierung oder jeden Prozess, bei dem Benutzer schnellen Zugriff auf Smartphone oder Tablet brauchen.

Offline-Verhalten sollte sorgfaeltig geplant werden. Gecachte Anwendungsdateien koennen die Application Shell schneller laden lassen, aber Business-Daten sind ein anderes Thema: Du musst entscheiden, welche Informationen offline verfuegbar sein duerfen, wie alt sie sein duerfen und was passieren soll, wenn der Benutzer wieder online ist. Fuer viele APEX-Anwendungen ist eine zuverlaessige Online-First-Erfahrung mit gutem Caching bereits wertvoll, waehrend volle Offline-Dateneingabe zusaetzliches Design und Synchronisationslogik erfordern kann.

!!! sampleapp "Sample App APEX PWA Reference"
    <div class="two-columns">
      <div style="flex: 50%;">
           Oracle APEX ermoeglicht Entwicklern, Progressive Web Apps (PWAs) zu bauen, die auf jedem Desktop- oder Mobilgeraet installiert werden koennen, um eine nativere App-Erfahrung zu liefern. Diese Anwendung dient als Referenz fuer wichtige PWA-Features in APEX und dafuer, wie du sie in deinen eigenen Apps verwenden kannst. Sie ist ein guter Ort, um Installationsverhalten, Offline-Unterstuetzung, Caching und andere PWA-Einstellungen zu pruefen, bevor du sie auf deine eigenen Apps anwendest.
           Diese App ist online verfuegbar unter: [https://oracleapex.com/go/pwa](https://oracleapex.com/go/pwa){target="_blank"}
      </div>
      <div style="flex: 50%;">
          ![pwa](assets/samples/pwa.png){ style="display:block;margin:auto;" }
      </div>
    </div>

Push Notifications koennen mobile Workflows weiter verbessern. In APEX kann eine PWA Benutzern erlauben, Notifications zu abonnieren und kurze, zeitnahe Nachrichten auf unterstuetzten Browsern und Geraeten zu empfangen, auch wenn die Anwendung gerade nicht geoeffnet ist. Typische Use Cases sind Aufgabenzuweisungen, Approval Requests, Erinnerungen oder Statusaenderungen, bei denen der Benutzer informiert werden soll, ohne die Anwendung zuerst zu oeffnen.

Gute Notifications sind handlungsorientiert und selten genug, um nuetzlich zu bleiben. Eine Nachricht wie "Expense report waiting for approval" oder "Service request assigned to you" ist deutlich hilfreicher als eine generische Nachricht wie "Something changed". Verwende Notifications gezielt, stelle sicher, dass die Zielseite den richtigen Kontext oeffnet, und denke daran, dass Benutzer der Anwendung ausdruecklich genug vertrauen muessen, um Notifications zu erlauben.

## 17.2 JSON

Im Kapitel zu REST Data Sources haben wir bereits erwaehnt, dass APEX mit verschachtelten JSON-Dokumenten arbeiten kann. Diese Faehigkeit ist jedoch nicht auf REST-basierte Integrationen beschraenkt. APEX kann auch direkt mit JSON-Daten arbeiten, die in der Oracle Database gespeichert sind. JSON-Dokumente koennen in JSON-Spalten gespeichert, in JSON Collections verwaltet oder ueber JSON Relational Duality Views bereitgestellt werden. Diese Datenstrukturen koennen sowohl als Datenquellen fuer APEX-Anwendungen als auch als Ziele fuer Datenaenderungen dienen.

Durch native Unterstuetzung verschachtelter JSON-Strukturen ermoeglicht APEX Entwicklern, Anwendungen zu bauen, die nahtlos mit relationalen und dokumentorientierten Datenmodellen arbeiten. Benutzer koennen JSON-basierte Business-Objekte anzeigen, erstellen, aktualisieren und loeschen, ohne deren hierarchische Struktur zu verlieren.

Dieser Ansatz ist besonders nuetzlich fuer moderne Anwendungen, die flexible Datenmodelle, Integration mit REST Services oder die Verwaltung komplexer Business-Entitaeten benoetigen. In Kombination mit der nativen JSON-Funktionalitaet der Oracle Database bietet APEX eine leistungsfaehige Low-Code-Umgebung fuer die Entwicklung von Anwendungen auf Basis von JSON-Dokumenten.

## 17.3 Master Detail

APEX bietet mehrere Out-of-the-box-Optionen fuer die Umsetzung von Master-Detail-Oberflaechen. Ein Master-Detail-Layout kann auf einer einzigen Seite angezeigt werden, entweder vertikal gestapelt oder nebeneinander angeordnet. In diesem Fall zeigt die Auswahl eines Master-Datensatzes automatisch die zugehoerigen Detaildatensaetze an.

Alternativ koennen Anwendungen einen Drill-down-Ansatz verwenden, bei dem Benutzer von einer Master-Seite zu einer separaten Detailseite navigieren. Dieses Muster ist besonders nuetzlich, wenn Detaildaten umfangreich sind oder wenn zusaetzliche Aktionen und Informationen fuer den ausgewaehlten Datensatz dargestellt werden sollen.

Beide Ansaetze koennen deklarativ umgesetzt werden und benoetigen wenig oder gar keinen eigenen Code.

!!! sampleapp "Sample App Master Detail"
    <div class="two-columns">
      <div style="flex: 50%;">
           Diese Anwendung hebt die nativen Master-Detail-Faehigkeiten von Oracle APEX hervor. Die Anwendung enthaelt vier verschiedene Master-Detail-Seitenlayouts. Die ersten beiden Layouts zeigen Master Detail auf einer einzigen Seite mit bearbeitbaren Interactive Grids. Die letzten beiden Layouts zeigen Master Detail auf zwei Seiten mit einer Mischung aus bearbeitbaren Interactive Grids, Form Items, Classic Reports und modalen Popups.
      </div>
      <div style="flex: 50%;">
          ![masterdetail](assets/samples/masterdetail.png){ style="display:block;margin:auto;" }
      </div>
    </div>

## 17.4 Collections

In traditionellen Datenbankanwendungen werden oft temporaere Tabellen verwendet, um Daten waehrend einer Session zu speichern. In APEX sind Anwendungen jedoch webbasiert und verlassen sich auf Session State statt auf eine dedizierte Datenbanksession. Daher sind temporaere Tabellen nicht geeignet, um benutzerspezifische Anwendungsdaten zu speichern.

Dafuer stellt APEX **Collections** bereit. Collections sind temporaere, sessionspezifische Datenstrukturen, die verwendet werden koennen, um Zeilen von Daten waehrend einer Benutzersession zu speichern und zu verarbeiten. Sie werden haeufig fuer Shopping Carts, mehrstufige Wizards, Staging importierter Daten oder Zwischenergebnisse verwendet, bevor diese in permanente Datenbanktabellen geschrieben werden.

Jede Collection besteht aus einer benannten Menge von Members. Ein Member kann bis zu 50 Character-Attribute (`C001-C050`), 5 Number-Attribute (`N001-N005`), 5 Date-Attribute (`D001-D005`), ein grosses Character-Attribut (`CLOB`), ein grosses binaeres Attribut (`BLOB`) und ein XML-Type-Attribut enthalten.

Das Package **APEX_COLLECTION** stellt die API bereit, um Collections zu erstellen und Collection Members einzufuegen, zu aktualisieren, zu loeschen und abzufragen.

!!! sampleapp "Sample App Collections"
    <div class="two-columns">
      <div style="flex: 50%;">
           Sample Collections ermoeglicht es, Datenzeilen fuer die Verwendung innerhalb einer Oracle-APEX-Session zu speichern. Diese Datenbankanwendung zeigt, wie PL/SQL verwendet wird, um collection-basierten Session State zu erstellen und zu verwalten.
      </div>
      <div style="flex: 50%;">
          ![collections](assets/samples/collections.png){ style="display:block;margin:auto;" }
      </div>
    </div>

## 17.5 Tree Navigation

<div class="two-columns">
    <div style="flex: 75%;">
       APEX stellt den Regionstyp **Tree** bereit, um hierarchische Datenstrukturen anzuzeigen. Ein Tree kann verwendet werden, um Parent-Child-Beziehungen darzustellen, zum Beispiel Organisationsstrukturen, Produktkategorien, Dateisysteme oder Menuehierarchien.

       Nodes koennen vom Benutzer ein- und ausgeklappt werden. Dadurch lassen sich grosse hierarchische Datenmengen leicht navigieren. Die Auswahl eines Nodes kann eine Navigation zu einer anderen Seite ausloesen, zugehoerige Informationen anzeigen oder eigene Actions ausfuehren.

       Die Tree Region kann auf SQL Queries basieren, die hierarchische Daten zurueckgeben, und unterstuetzt verschiedene Optionen zur Steuerung von Erscheinungsbild und Verhalten des Trees.
    </div>
    <div style="flex: 25%;">
       <img src="assets/misc/tree.png" alt="tree" style="display:block;margin:auto;">
   </div>
</div>

!!! sampleapp "Sample Trees"
    <div class="two-columns">
      <div style="flex: 50%;">
           Lerne, wie ein Tree Control mit einer SQL Query erstellt wird. Diese Anwendung zeigt verschiedene Methoden, Tree Controls in deine Oracle-APEX-Anwendung zu integrieren.
      </div>
      <div style="flex: 50%;">
          ![trees](assets/samples/trees.png){ style="display:block;margin:auto;" }
      </div>
    </div>

## 17.6 QR Codes

<div class="two-columns">
    <div style="flex: 75%;">
       APEX stellt einen QR-Code-Item-Typ bereit, mit dem scanbare QR Codes einfach in einer Anwendung erzeugt und angezeigt werden koennen. QR Codes koennen verschiedene Arten von Informationen enthalten, darunter Text, URLs, Telefonnummern, E-Mail-Adressen, SMS-Nachrichten und geografische Standorte.

       Zusaetzlich zum Item-Typ stellt APEX die **APEX_BARCODE** API bereit, mit der QR Codes programmatisch erzeugt werden koennen. Dadurch koennen QR Codes in Reports, E-Mails, druckbaren Dokumenten oder anderen Teilen einer Anwendung eingebettet werden.

       Um einen QR Code auf einer Seite zu erstellen, fuege einfach ein Item vom Typ QR Code hinzu, gib den Source-Wert an (statisch oder dynamisch) und waehle die gewuenschte Groesse. APEX erzeugt den QR Code dann automatisch zur Laufzeit.
    </div>
    <div style="flex: 25%;">
       <img src="assets/misc/qrcode.png" alt="QR code" style="display:block;margin:auto;">
   </div>
</div>

## 17.7 Emails und Email Templates

APEX stellt das Package **APEX_MAIL** bereit, um E-Mails aus APEX-Anwendungen mit PL/SQL zu versenden. Intern basiert diese Funktionalitaet auf dem Datenbankpackage **UTL_SMTP**. Voraussetzung ist, dass fuer die APEX-Instanz ein SMTP-Server konfiguriert ist.

E-Mails koennen direkt in PL/SQL mit der **APEX_MAIL** API erstellt werden. Alternativ unterstuetzt Oracle APEX **Email Templates**, die in **Shared Components** definiert werden koennen. Email Templates erlauben Entwicklern, E-Mail-Inhalte von Anwendungslogik zu trennen und standardisierte E-Mail-Layouts in einer Anwendung wiederzuverwenden.

Templates koennen Platzhalter enthalten, zum Beispiel **#SALUTATION#** oder **#ORDER_ID#**, die beim Senden der E-Mail durch Laufzeitwerte ersetzt werden. Statt `APEX_MAIL.SEND` in PL/SQL aufzurufen, koennen Entwickler auch den deklarativen Prozesstyp **Send E-Mail** verwenden und Item-Werte auf Template-Platzhalter mappen. Email Templates unterstuetzen HTML- und Plain-Text-Inhalte, sodass professionelle und responsive E-Mails direkt in APEX erstellt werden koennen.

E-Mails werden nicht sofort versendet. Sie werden zuerst in die APEX Mail Queue gelegt und danach asynchron durch den Datenbankjob **ORACLE_APEX_MAIL_QUEUE** verarbeitet. Bei Bedarf kann die Queue-Verarbeitung sofort mit **APEX_MAIL.PUSH_QUEUE** ausgeloest werden.

Die aktuelle Mail Queue und die E-Mail-Sendehistorie koennen ueber die Views **APEX_MAIL_QUEUE** und **APEX_MAIL_LOG** ueberwacht werden.

## 17.8 Tabs und Region Switching

<div class="two-columns">
    <div style="flex: 65%;">
       APEX bietet mehrere Moeglichkeiten, Inhalte zu organisieren und Benutzern das Wechseln zwischen verschiedenen Ansichten auf derselben Seite zu ermoeglichen.

       Eine Option ist der **Tab Container**. Durch Aktivieren der Einstellung **Tab Container** in einer Parent Region koennen mehrere Child Regions als Tabs angezeigt werden. Benutzer koennen zwischen den Tabs wechseln, um den Inhalt der zugeordneten Regionen zu sehen, ohne die Seite zu verlassen.

       Eine weitere Option ist der Regionstyp **Region Display Selector (RDS)**. Ein RDS erzeugt automatisch eine tab-aehnliche Navigation fuer ausgewaehlte Regionen auf der Seite. Das bietet eine einfache Moeglichkeit, zusammengehoerige Inhalte zu organisieren und Unordnung auf der Seite zu reduzieren, waehrend Benutzer schnell zwischen verschiedenen Regionen wechseln koennen.

       Beide Ansaetze verbessern die Usability, indem sie grosse Informationsmengen in einem kompakten und leicht navigierbaren Layout praesentieren.
    </div>
    <div style="flex: 35%;">
       <img src="assets/misc/regiontabs.png" alt="region tabs" style="display:block;margin:auto;">
   </div>
</div>

## 17.9 Automations

Automations erlauben APEX-Anwendungen, Daten zu ueberwachen und vordefinierte Actions automatisch auszufuehren. Eine Automation besteht aus einem Trigger, einer optionalen Condition und einer oder mehreren Actions, die nacheinander ausgefuehrt werden, wenn die Automation laeuft.

Automations koennen auf Zeitplaenen, Events oder SQL-Query-Ergebnissen basieren. Typische Use Cases sind das Senden von Benachrichtigungen, die Verarbeitung von Daten, das Aktualisieren von Datensaetzen, das Aufrufen von PL/SQL-Code oder die Integration mit externen Systemen.

Mehrere Actions koennen definiert und in Reihenfolge ausgefuehrt werden. Oracle APEX stellt ausserdem die **APEX_AUTOMATION** API bereit, mit der Automations programmatisch aus PL/SQL gestartet und verwaltet werden koennen.

Alle Automation-Ausfuehrungen werden protokolliert. Dadurch lassen sich Ausfuehrungsdetails, Ergebnisse und Fehler einfach pruefen und ueberwachen. Ausfuehrungshistorie, Statusinformationen und Log-Meldungen sind innerhalb der APEX-Entwicklungsumgebung verfuegbar.

Automations werden mit Oracle Scheduler Jobs umgesetzt. Deshalb benoetigt das Parsing Schema das Datenbankprivileg **CREATE JOB**. Diese enge Integration mit der Datenbank ermoeglicht zuverlaessige und skalierbare Hintergrundverarbeitung direkt aus Oracle APEX.

![automations](assets/misc/automations.png){ style="display:block;margin:auto;" }

## 17.10 Plug-ins

Plug-ins erlauben Entwicklern, APEX mit eigener Funktionalitaet zu erweitern, die nicht nativ in der Plattform verfuegbar ist. Sie bieten einen Mechanismus, um wiederverwendbare Komponenten hinzuzufuegen und Drittanbieter-Technologien in APEX-Anwendungen zu integrieren.

APEX unterstuetzt mehrere Arten von Plug-ins, darunter **Item**, **Region**, **Dynamic Action**, **Process** und **Authentication** Plug-ins. Nach der Installation koennen Plug-ins deklarativ in Anwendungen verwendet werden, genau wie eingebaute APEX-Komponenten.

Plug-ins werden in **Shared Components** im Abschnitt **Other Components** verwaltet. Sie koennen importiert, exportiert und ueber Anwendungen innerhalb eines Workspaces geteilt werden.

Eine grosse Sammlung von Community-Plug-ins ist auf der APEX-Community-Seite [**APEX World**](https://apex.world/ords/r/apex_world/apex-world/plug-ins){target="_blank"} verfuegbar.

Oracle stellt ausserdem einen Katalog von Beispiel- und unterstuetzten Plug-ins auf der [APEX-Website](https://apex.oracle.com/en/solutions/apps/#plug_ins){target="_blank"} bereit.
Plug-ins sind ein leistungsfaehiger Weg, die Benutzeroberflaeche zu erweitern, externe Bibliotheken zu integrieren und spezialisierte Funktionalitaet hinzuzufuegen, waehrend das Low-Code-Entwicklungsmodell von APEX erhalten bleibt.

## 17.11 Document Generation und Printing

APEX unterstuetzt Dokumentenerzeugung ueber externe Print Engines, die in den APEX-Instanzeinstellungen konfiguriert werden koennen. Je nach ausgewaehlter Print Engine koennen Anwendungen PDF- und andere Dokumentformate auf Basis von SQL-Query-Ergebnissen und Dokumentvorlagen erzeugen.

Die folgenden Print Engines werden unterstuetzt:

* **External (Apache FOP)** stellt grundlegende Druckfunktionen bereit. Es unterstuetzt Report Queries und Report Regions mit den von APEX gelieferten Standard-Templates sowie eigene XSL-FO-Templates.

* **Oracle Analytics Publisher** (Lizenz erforderlich) ermoeglicht fortgeschrittene Dokumentenerzeugung mit eigenen RTF- und XSL-FO-Templates. Es unterstuetzt anspruchsvolle Layouts, Formatierungen und Anforderungen an Dokumentenerzeugung.

* **APEX Office Print (AOP)** (Lizenz oder Subscription erforderlich) erzeugt Dokumente in PDF- und Microsoft-Office-Formaten wie Word, Excel und PowerPoint. Es kombiniert Template-Dateien mit Anwendungsdaten, typischerweise als JSON bereitgestellt.

Seit APEX 24.1 unterstuetzt Oracle APEX auch **Oracle Document Generator**, einen OCI-basierten Service zur Dokumentenerzeugung. Mit DOCX-Templates und JSON-Daten kann er PDF-Dokumente aehnlich wie Oracle Analytics Publisher und APEX Office Print erzeugen. Eine OCI Tenancy ist erforderlich, um diesen Service zu nutzen.

![docgeneration](assets/misc/docgeneration.png){ style="display:block;margin:auto;" }

Dokumentenerzeugung ist in APEX ueber **Report Queries** und **Report Layouts** integriert, die in **Shared Components** definiert werden. Anwendungen koennen Dokumentenerzeugung deklarativ ueber den eingebauten Prozesstyp **Download Report** und verwandte Dynamic Actions aufrufen. Fuer programmatischen Zugriff stellt APEX die **APEX_PRINT** API bereit.

Diese Features erlauben Entwicklern, professionelle Reports, Rechnungen, Briefe, Zertifikate und andere Business-Dokumente direkt aus APEX-Anwendungen zu erzeugen.

!!! sampleapp "Sample App Document Generator"
    <div class="two-columns">
      <div style="flex: 50%;">
           Diese Anwendung zeigt die Integration mit der Oracle Document Generator Pre-built Function auf OCI. Sie enthaelt Beispiele fuer die Erzeugung von PDF-Dokumenten aus einer Kombination von JSON-Daten und Microsoft-Word-Templates.
      </div>
      <div style="flex: 50%;">
          ![documentgenerator](assets/samples/documentgenerator.png){ style="display:block;margin:auto;" }
      </div>
    </div>

