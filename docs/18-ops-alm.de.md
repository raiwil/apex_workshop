# 18. Betrieb & Lifecycle Management

## 18.1 Application Lifecycle Management

Moderne Anwendungsentwicklung besteht aus mehr als dem Erstellen von Seiten und Komponenten. Teams benoetigen effiziente Moeglichkeiten, gemeinsam zu arbeiten, Aenderungen zu verwalten, Versionen nachzuverfolgen und Anwendungen verlaesslich ueber mehrere Umgebungen hinweg bereitzustellen. Oracle APEX 26.1 fuehrt mehrere Erweiterungen ein, die das Application Lifecycle Management (ALM) deutlich verbessern und APEX-Anwendungen leichter in moderne Entwicklungsprozesse integrieren.

Eine wichtige Neuerung in APEX 26.1 ist **APEXlang**, ein neues, menschenlesbares Format zur Beschreibung von Anwendungen. Statt mit grossen SQL-Exportdateien zu arbeiten, koennen Anwendungen als strukturierte `.apx`-Dateien exportiert werden. Diese lassen sich leichter lesen, vergleichen, validieren und in Versionsverwaltungssystemen wie Git speichern. Dadurch werden aussagekraeftige Diffs, einfachere Code Reviews, bessere Zusammenarbeit und eine bessere Integration in CI/CD-Pipelines moeglich. APEXlang passt ausserdem gut zu modernen Entwicklungstools und KI-gestuetzten Workflows.

Fuer die Zusammenarbeit mehrerer Entwickler stellt APEX **Working Copies** bereit. Damit koennen mehrere Personen parallel an derselben Anwendung arbeiten, ohne sich gegenseitig ihre Aenderungen zu ueberschreiben. Aenderungen koennen spaeter wieder in die Hauptanwendung uebernommen werden. Working Copies wurden mit APEX 23.2 eingefuehrt.

Erstellen Sie zum Beispiel eine Working Copy einer Anwendung, um einen Fehler zu beheben oder eine neue Funktion zu entwickeln, und fuehren Sie die Aenderungen anschliessend gezielt in die Hauptanwendung zurueck. Sie koennen beliebig viele Working Copies erstellen, sodass mehrere Entwicklerinnen und Entwickler zu einer Anwendung beitragen koennen. Konflikte werden beim Vergleich der Dateien sichtbar, und Entwickler koennen entscheiden, ob alle oder nur bestimmte Komponenten zusammengefuehrt werden sollen.

Working Copies sind im App Builder entsprechend gekennzeichnet. Das gilt auch fuer die Uebersicht aller Anwendungen im Workspace. Fuer eine Working Copy gibt es ein zusaetzliches Menue, mit dem Sie zur Hauptanwendung zurueckkehren, die Kopie mit der Hauptanwendung zusammenfuehren und die Aenderungen vorher im Vergleich pruefen koennen. Es ist auch moeglich, Aenderungen aus der Hauptanwendung in die Working Copy zu uebernehmen.

Zur Unterstuetzung kontrollierter Entwicklungsprozesse bietet APEX weitere Governance-Funktionen:

**Page Locking** verhindert versehentliche Aenderungen, indem Entwickler einzelne Seiten sperren koennen, waehrend sie daran arbeiten.

**Build Options** ermoeglichen es, Funktionen, Seiten oder Komponenten zu aktivieren oder zu deaktivieren, ohne sie aus der Anwendung zu entfernen. Das ist besonders nuetzlich fuer Feature Toggles, stufenweise Rollouts, kundenspezifische Funktionen und unterschiedliche Deployment-Konfigurationen.

Zusammen bilden APEXlang, Source-Control-Integration, Working Copies, Page Locking und Build Options eine solide Grundlage fuer professionelles Application Lifecycle Management. Teams koennen moderne Entwicklungspraktiken uebernehmen und gleichzeitig die Produktivitaet und Einfachheit von Oracle APEX beibehalten.

## 18.2 Anwendungen exportieren, importieren und bereitstellen

APEX-Anwendungen werden als Metadaten in der Datenbank gespeichert und koennen mit der eingebauten **Export and Import**-Funktion einfach zwischen Umgebungen transportiert werden. Anwendungen koennen aus einer Entwicklungsumgebung exportiert und in Test-, Staging- oder Produktionsumgebungen importiert werden. So entsteht ein kontrollierter und wiederholbarer Deployment-Prozess.

Fuer vollstaendige Anwendungsdeployments bietet APEX **Supporting Objects**. Damit koennen Entwickler Datenbankobjekte wie Tabellen, Views, Packages, Beispieldaten und Installationsskripte zusammen mit einer Anwendung paketieren. Beim Import koennen diese Supporting Objects automatisch installiert werden, sodass alle benoetigten Datenbankartefakte in der Zielumgebung vorhanden sind.

Fuer automatisierte Deployments bietet **SQLcl** Kommandozeilenunterstuetzung fuer Export, Import und Deployment von Oracle APEX-Anwendungen. Damit ist SQLcl ein wichtiger Baustein fuer CI/CD-Pipelines und geskriptete Deployment-Prozesse.

In APEX 26.1 verbessert das bereits erwaehnte APEXlang den Anwendungstransport und das Versionsmanagement weiter, weil es ein menschenlesbares Exportformat bereitstellt, das gut mit Source-Control-Systemen und automatisierten Deployment-Pipelines harmoniert. Zusammen bilden Anwendungsexporte, Supporting Objects und moderne Deployment-Praktiken die Grundlage fuer einen sicheren und konsistenten Transport von APEX-Anwendungen ueber mehrere Umgebungen hinweg.

!!! bytheway "Environment Banner"
    <div class="two-columns">
      <div style="flex: 50%;">
            *By the way*,<br>
            um die aktuelle Umgebung sofort sichtbar zu machen, zum Beispiel Development, Test oder Production, koennen Sie einen **Environment Banner** definieren. Oeffnen Sie **Administration** ueber die Navigation unten links, waehlen Sie **Manage Service** und dann **Define Environment Banner**. Dadurch erhalten Entwickler und Administratoren einen klaren visuellen Hinweis, in welcher Umgebung sie gerade arbeiten.
      </div>
      <div style="flex: 50%;">
          ![banner](assets/ops/banner.png){ style="display:block;margin:auto;" }
      </div>
    </div>

## 18.3 Instance Administration

APEX stellt einen speziellen Workspace **INTERNAL** bereit, der ausschliesslich fuer administrative Aufgaben auf Instanzebene verwendet wird. Ueber diesen Workspace koennen Instanzadministratoren Workspaces verwalten, Nutzung ueberwachen, Sicherheitseinstellungen konfigurieren und die gesamte APEX-Umgebung pflegen. Die Instance Administration steuert Einstellungen, die fuer alle Workspaces einer APEX-Instanz gelten, zum Beispiel Authentifizierungsrichtlinien, E-Mail-Konfiguration, REST Services, AI-Service-Einstellungen und Workspace-Provisionierung. Administratoren koennen ausserdem festlegen, ob Benutzer neue Workspaces anfordern duerfen und wie diese Anforderungen genehmigt werden.

Durch die Trennung von Instanzadministration und Anwendungsentwicklung ermoeglicht Oracle APEX eine zentrale Governance, waehrend einzelne Workspaces isoliert und unabhaengig verwaltet werden koennen.

## 18.4 APEX und ORDS

Im Unterschied zu vielen anderen Entwicklungsplattformen wird Oracle APEX direkt in der Oracle Database installiert. Es ist kein separater Application Server erforderlich, um Anwendungslogik auszufuehren, da Seiten, Metadaten, SQL, PL/SQL und Anwendungsdefinitionen in der Datenbank verwaltet und verarbeitet werden. Oracle APEX ist ohne zusaetzliche Kosten in der Oracle Database enthalten und in allen unterstuetzten Editionen der Oracle Database verfuegbar.

Damit APEX-Anwendungen ueber einen Webbrowser erreichbar sind, dient Oracle REST Data Services (ORDS) als Web- und REST-Gateway. ORDS nimmt HTTP-Anfragen entgegen, kommuniziert mit der Datenbank, fuehrt APEX-Anwendungen aus und liefert die erzeugten Inhalte an den Client zurueck. Darueber hinaus stellt ORDS Unterstuetzung fuer RESTful Services und moderne Webintegrationen bereit.

Diese Architektur ergibt ein kompaktes und effizientes Deployment-Modell, das im Wesentlichen aus der Oracle Database, der APEX-Runtime-Umgebung und ORDS besteht. Beim Betrieb einer APEX-Umgebung sind Administratoren dafuer verantwortlich, APEX und ORDS zu installieren und zu aktualisieren, Sicherheits- und Verbindungseinstellungen zu konfigurieren und Verfuegbarkeit sowie Performance der gesamten Plattform sicherzustellen.
