# 14. Genehmigungen und Workflows

!!! sampleapp "Sample App Workflow, Approvals, and Tasks"
    <div class="two-columns">
      <div style="flex: 50%;">
           Diese Anwendung hebt die wichtigsten Features der Workflow-, Approvals- und Tasks-Funktionen in Oracle APEX hervor. Benutzer können Änderungen an Gehältern und Jobs von Mitarbeitenden verwalten, einen Laptop für einen Mitarbeitenden bereitstellen und Self-Appraisals von Mitarbeitenden bearbeiten. Alle Use Cases enthalten Human Tasks, die eine Aktion durch eine passende Person erfordern, teilweise mit Genehmigung oder Ablehnung.
      </div>
      <div style="flex: 50%;">
          ![workflow](assets/samples/workflow.png){ style="display:block;margin:auto;" }
      </div>
    </div>

## 14.1 Approvals und Human Tasks

APEX bietet eingebaute Unterstützung für **Approvals** und **Human Tasks**. Dadurch ist es einfach, Genehmigungsworkflows und andere benutzergesteuerte Geschäftsprozesse in Anwendungen umzusetzen.

Das Feature enthält ein vordefiniertes Datenmodell und mehrere Anwendungskomponenten, zum Beispiel die **Unified Task List**, **Task Detail**-Seiten und den **Human Task**-Prozesstyp. Zusammen bieten diese Komponenten ein Framework zum Erstellen, Zuweisen, Nachverfolgen und Abschliessen von Aufgaben, die menschliche Interaktion erfordern.

Genehmigende Personen können zur Design-Zeit statisch definiert oder zur Laufzeit dynamisch anhand von Anwendungsdaten, Organisationsstrukturen oder Geschäftsregeln bestimmt werden. Diese Flexibilität ermöglicht einfache Genehmigungsszenarien ebenso wie komplexere Routing- und Eskalationsprozesse.

Für programmatischen Zugriff stellt APEX die **APEX_APPROVAL** API bereit. Die API kann verwendet werden, um Human Tasks direkt aus Anwendungscode zu erstellen, zuzuweisen, zu aktualisieren, zu genehmigen, abzulehnen und zu verwalten.

Approvals integrieren sich nahtlos mit der **APEX Workflow Engine** und können als Workflow Activities innerhalb größerer Geschäftsprozesse verwendet werden. Human Tasks und Approvals können aber auch unabhängig genutzt werden, ohne einen vollständigen Workflow zu definieren.

## 14.2 Workflow

**Workflow Engine**

Seit APEX 23.2 ist eine eingebaute Workflow Engine Teil der Plattform. Workflows können visuell mit dem **Workflow Designer** entworfen werden, der in den App Builder integriert ist.

APEX kann automatisch **Workflow Console**-Seiten erzeugen, mit denen Administratoren und Benutzer Workflow-Instanzen überwachen, verwalten und mit ihnen interagieren können. Diese generierten Seiten können wie jede andere APEX-Seite angepasst werden.

Workflow-Funktionalität kann deklarativ über den bereitgestellten **Workflow**-Prozess und Dynamic-Action-Komponenten in Anwendungen integriert werden. Für programmatischen Zugriff stellt Oracle APEX die **APEX_WORKFLOW** API bereit. Damit können Entwickler Workflows starten, Workflow-Instanzen verwalten und aus Anwendungscode mit Workflow Activities interagieren.

Die APEX Workflow Engine legt den Fokus auf Einfachheit, Erweiterbarkeit und nahtlose Integration mit der APEX-Plattform. Sie ist nicht dafür gedacht, den BPMN-2.0-Standard umzusetzen. Organisationen, die BPMN-2.0-Unterstützung benötigen, können **Flows for APEX** in Betracht ziehen, eine Open-Source-Workflow-Lösung von APEX-Enthusiasten ([flowsforapex.org](https://flowsforapex.org/){target="_blank"}).

**Workflow Activities**

Workflow Activities sind die Bausteine einer Workflow-Definition. Jede Activity repräsentiert eine Arbeitseinheit, die ausgeführt wird, wenn der Workflow diesen Schritt erreicht. Innerhalb der APEX-Architektur werden Workflow Activities als **process type plug-ins** umgesetzt. Dadurch können Workflows bestehende APEX-Funktionalität wiederverwenden.

Jeder Workflow enthält:

* Genau eine **Start Activity**
* Eine oder mehrere **End Activities**
* Eine oder mehrere Zwischenaktivitäten, die durch Transitions verbunden sind

![workflow](assets/workflow/workflow.png){ style="display:block;margin:auto;" }

Die folgenden nativen APEX-Prozesstypen können als Workflow Activities verwendet werden:

* Execute Code
* Send Email
* Human Task - Create Approval
* Send Push Notification

Zusätzlich stellt APEX workflow-spezifische Activities bereit, zum Beispiel:

* Workflow Start
* Workflow End
* Wait
* Workflow Switch

Zusammen ermöglichen diese Activities Entwicklern, Genehmigungsprozesse, Geschäftsworkflows, Benachrichtigungen, Eskalationen und andere prozessgetriebene Anwendungsszenarien zu modellieren, ohne einen separaten Workflow-Server zu benötigen.

