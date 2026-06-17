# 14. Genehmigungen und Workflows

!!! sampleapp "Sample App Workflow, Approvals, and Tasks"
    <div class="two-columns">
      <div style="flex: 50%;">
           Diese Anwendung hebt die wichtigsten Features der Workflow-, Approvals- und Tasks-Funktionen in Oracle APEX hervor. Benutzer koennen Aenderungen an Gehaeltern und Jobs von Mitarbeitenden verwalten, einen Laptop fuer einen Mitarbeitenden bereitstellen und Self-Appraisals von Mitarbeitenden bearbeiten. Alle Use Cases enthalten Human Tasks, die eine Aktion durch eine passende Person erfordern, teilweise mit Genehmigung oder Ablehnung.
      </div>
      <div style="flex: 50%;">
          ![workflow](assets/samples/workflow.png){ style="display:block;margin:auto;" }
      </div>
    </div>

## 14.1 Approvals und Human Tasks

APEX bietet eingebaute Unterstuetzung fuer **Approvals** und **Human Tasks**. Dadurch ist es einfach, Genehmigungsworkflows und andere benutzergesteuerte Geschaeftsprozesse in Anwendungen umzusetzen.

Das Feature enthaelt ein vordefiniertes Datenmodell und mehrere Anwendungskomponenten, zum Beispiel die **Unified Task List**, **Task Detail**-Seiten und den **Human Task**-Prozesstyp. Zusammen bieten diese Komponenten ein Framework zum Erstellen, Zuweisen, Nachverfolgen und Abschliessen von Aufgaben, die menschliche Interaktion erfordern.

Genehmigende Personen koennen zur Design-Zeit statisch definiert oder zur Laufzeit dynamisch anhand von Anwendungsdaten, Organisationsstrukturen oder Geschaeftsregeln bestimmt werden. Diese Flexibilitaet ermoeglicht einfache Genehmigungsszenarien ebenso wie komplexere Routing- und Eskalationsprozesse.

Fuer programmatischen Zugriff stellt APEX die **APEX_APPROVAL** API bereit. Die API kann verwendet werden, um Human Tasks direkt aus Anwendungscode zu erstellen, zuzuweisen, zu aktualisieren, zu genehmigen, abzulehnen und zu verwalten.

Approvals integrieren sich nahtlos mit der **APEX Workflow Engine** und koennen als Workflow Activities innerhalb groesserer Geschaeftsprozesse verwendet werden. Human Tasks und Approvals koennen aber auch unabhaengig genutzt werden, ohne einen vollstaendigen Workflow zu definieren.

## 14.2 Workflow

**Workflow Engine**

Seit APEX 23.2 ist eine eingebaute Workflow Engine Teil der Plattform. Workflows koennen visuell mit dem **Workflow Designer** entworfen werden, der in den App Builder integriert ist.

APEX kann automatisch **Workflow Console**-Seiten erzeugen, mit denen Administratoren und Benutzer Workflow-Instanzen ueberwachen, verwalten und mit ihnen interagieren koennen. Diese generierten Seiten koennen wie jede andere APEX-Seite angepasst werden.

Workflow-Funktionalitaet kann deklarativ ueber den bereitgestellten **Workflow**-Prozess und Dynamic-Action-Komponenten in Anwendungen integriert werden. Fuer programmatischen Zugriff stellt Oracle APEX die **APEX_WORKFLOW** API bereit. Damit koennen Entwickler Workflows starten, Workflow-Instanzen verwalten und aus Anwendungscode mit Workflow Activities interagieren.

Die APEX Workflow Engine legt den Fokus auf Einfachheit, Erweiterbarkeit und nahtlose Integration mit der APEX-Plattform. Sie ist nicht dafuer gedacht, den BPMN-2.0-Standard umzusetzen. Organisationen, die BPMN-2.0-Unterstuetzung benoetigen, koennen **Flows for APEX** in Betracht ziehen, eine Open-Source-Workflow-Loesung von APEX-Enthusiasten ([flowsforapex.org](https://flowsforapex.org/){target="_blank"}).

**Workflow Activities**

Workflow Activities sind die Bausteine einer Workflow-Definition. Jede Activity repraesentiert eine Arbeitseinheit, die ausgefuehrt wird, wenn der Workflow diesen Schritt erreicht. Innerhalb der APEX-Architektur werden Workflow Activities als **process type plug-ins** umgesetzt. Dadurch koennen Workflows bestehende APEX-Funktionalitaet wiederverwenden.

Jeder Workflow enthaelt:

* Genau eine **Start Activity**
* Eine oder mehrere **End Activities**
* Eine oder mehrere Zwischenaktivitaeten, die durch Transitions verbunden sind

![workflow](assets/workflow/workflow.png){ style="display:block;margin:auto;" }

Die folgenden nativen APEX-Prozesstypen koennen als Workflow Activities verwendet werden:

* Execute Code
* Send Email
* Human Task - Create Approval
* Send Push Notification

Zusaetzlich stellt APEX workflow-spezifische Activities bereit, zum Beispiel:

* Workflow Start
* Workflow End
* Wait
* Workflow Switch

Zusammen ermoeglichen diese Activities Entwicklern, Genehmigungsprozesse, Geschaeftsworkflows, Benachrichtigungen, Eskalationen und andere prozessgetriebene Anwendungsszenarien zu modellieren, ohne einen separaten Workflow-Server zu benoetigen.

