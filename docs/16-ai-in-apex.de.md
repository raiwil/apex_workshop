# 16. KI in APEX

Kuenstliche Intelligenz ist schnell zu einem wichtigen Thema fuer die Anwendungsentwicklung geworden. Eine umfassende Diskussion von KI liegt ausserhalb des Umfangs dieses Workshops. Dieses Kapitel gibt aber eine kurze Einfuehrung in die KI-Faehigkeiten von Oracle APEX und hebt einige der wichtigsten Features hervor, die in den letzten Releases eingefuehrt wurden.

Seit Oracle APEX 24.1 sind KI-Faehigkeiten ein integrierter Bestandteil der Plattform. Sie unterstuetzen sowohl Entwickler beim Bau von Anwendungen als auch Endbenutzer bei der Interaktion mit ihnen. Oracle APEX ermoeglicht eine nahtlose Integration mit Large Language Models (LLMs) und KI-Services. Dadurch wird es einfacher, generative KI in Business-Anwendungen einzubauen.

Fuer Entwickler kann KI bei Aufgaben helfen wie SQL Queries erzeugen, Anwendungskomponenten erklaeren, Seiteninhalte erstellen und die Anwendungsentwicklung beschleunigen. Fuer Endbenutzer koennen KI-gestuetzte Features direkt in Anwendungen eingebettet werden, zum Beispiel natuerliche Sprachinteraktion, intelligente Suche, Inhaltserzeugung, Zusammenfassung und dialogorientierte User Experiences.

Mit Oracle APEX 26.1 erweitert die Einfuehrung der neuen APEXlang-Anwendungsrepraesentation die Moeglichkeiten fuer KI-gestuetzte Entwicklung weiter. Da Anwendungsdefinitionen nun in einem strukturierten, menschenlesbaren Format dargestellt werden koennen, koennen KI-Werkzeuge Anwendungskomponenten, Beziehungen und Business-Logik besser verstehen. Das verbessert die Qualitaet von KI-generierten Erklaerungen, Empfehlungen, Code-Vorschlaegen und Anwendungsaenderungen und unterstuetzt moderne Entwicklungsworkflows mit Source Control und Zusammenarbeit.

Da KI-Faehigkeiten sich weiterentwickeln, bietet Oracle APEX eine leistungsfaehige Plattform, um Low-Code-Entwicklung mit generativer KI zu kombinieren. Organisationen koennen dadurch intelligentere, produktivere und benutzerfreundlichere Anwendungen bauen.

## 16.1 Generative AI Service konfigurieren

Wenn du Demos oder Screenshots von Oracle APEX siehst und dich fragst, warum bestimmte KI-Features in deiner Umgebung nicht verfuegbar sind, liegt das normalerweise daran, dass kein **Generative AI Service** fuer den Workspace in den **Workspace Utilities** konfiguriert wurde. KI-gestuetzte Features im App Builder werden erst sichtbar, nachdem ein externer KI-Provider konfiguriert und aktiviert wurde.

Oracle APEX unterstuetzt aktuell mehrere Generative-AI-Provider, darunter OCI Generative AI Service, OpenAI, Cohere, Google Gemini, Anthropic Claude und Mistral AI. Zusaetzlich koennen lokal gehostete Modelle integriert werden, zum Beispiel ueber Ollama.

Um KI-Features im App Builder zu aktivieren, muss ein Provider konfiguriert und die Option **Used by App Builder** aktiviert werden. Sobald das erledigt ist, werden KI-bezogene Features in der Entwicklungsumgebung verfuegbar.

![genai](assets/ai/genai.png){ style="display:block;margin:auto;" }

Mehrere KI-Provider und Modelle koennen im selben Workspace konfiguriert werden. Allerdings kann jeweils nur ein Provider fuer App-Builder-Unterstuetzung festgelegt werden. Anwendungen selbst koennen weiterhin mehrere KI-Modelle verwenden, je nach konkreten Anforderungen.

## 16.2 KI-gestuetzte Anwendungsentwicklung

Oracle APEX enthaelt den **APEX AI Assistant**, einen integrierten dialogorientierten Assistenten, der Generative AI nutzt, um viele Entwicklungsaufgaben zu unterstuetzen. Er kann helfen, Anwendungen zu erstellen, Code zu generieren und zu erklaeren, SQL-Statements zu optimieren und Troubleshooting direkt in der APEX-Entwicklungsumgebung zu unterstuetzen.

**Anwendungen oder Seiten mit natuerlicher Sprache erstellen**

Statt mit einem Wizard zu starten, koennen Entwickler die gewuenschte Anwendung in natuerlicher Sprache beschreiben. Auf Basis dieser Beschreibung erzeugt der AI Assistant einen Application Blueprint mit Seiten, Datenquellen und Features. Der Blueprint kann danach geprueft, verfeinert oder direkt generiert werden. Dasselbe ist moeglich, wenn einer bestehenden Anwendung eine Seite hinzugefuegt wird.

**KI-gestuetztes SQL Authoring**

Der AI Assistant kann SQL Queries anhand natuerlichsprachlicher Prompts erzeugen. Entwickler koennen beschreiben, welche Informationen sie abrufen moechten, ohne detaillierte Kenntnisse ueber Tabellenstrukturen, Spaltennamen oder SQL-Syntax zu brauchen. Bestehende Queries koennen durch dialogorientierte Anweisungen erweitert oder geaendert werden.

**AI Code Assistance**

Der AI Assistant unterstuetzt die Erzeugung und Erklaerung von Code in mehreren in APEX haeufig verwendeten Sprachen, darunter:

* PL/SQL
* JavaScript
* HTML
* CSS

Das kann Entwicklung deutlich beschleunigen und Entwicklern helfen, unbekannte APIs oder Coding Patterns zu lernen. KI-generierter Code sollte trotzdem geprueft und getestet werden, bevor er in einer Anwendung verwendet wird.

**KI-gestuetztes Debugging**

Wenn SQL- oder PL/SQL-Fehler auftreten, kann APEX den AI Assistant direkt aus dem Fehlerdialog ueber die Option **Help Me Fix This** aufrufen. Der Assistent analysiert die Fehlermeldung, erklaert die wahrscheinliche Ursache und schlaegt moegliche Loesungen oder Code-Korrekturen vor.

**KI-gestuetzte Entwicklung mit APEXlang**

Oracle-APEX-Anwendungen werden mit einem maschinenlesbaren Metadatenmodell definiert. Dadurch eignen sich APEX-Anwendungen gut fuer KI-gestuetzte Entwicklung.

Moderne KI-Werkzeuge koennen APEXlang verstehen und generieren. Dadurch koennen Entwickler neue Anwendungskomponenten erstellen, bestehende Seiten aendern oder Anwendungen mit natuerlichsprachlichen Anweisungen refaktorisieren. Zum Beispiel koennen Entwickler eine neue Seite, Region oder fachliche Anforderung in normalem Text beschreiben und die passenden APEX-Definitionen automatisch erzeugen lassen. Werkzeuge wie Visual Studio Code zusammen mit KI-Assistenten wie Codex koennen dadurch zu leistungsfaehigen Begleitern fuer Entwicklung und Wartung von APEX-Anwendungen ausserhalb des traditionellen App Builder werden.

## 16.3 KI-gestuetzte APEX-Anwendungen

APEX macht es einfach, kuenstliche Intelligenz in Business-Anwendungen zu integrieren. Durch die Konfiguration eines oder mehrerer KI-Provider auf Workspace-Ebene koennen Entwickler generative KI-Faehigkeiten deklarativ und programmatisch nutzen. Dadurch entstehen intelligente Anwendungen, die Benutzern natuerliche Sprachinteraktion, Inhaltserzeugung, Zusammenfassung, Empfehlungen und dialogorientierte Erfahrungen bieten.

**Conversational AI Experiences**

APEX enthaelt eingebaute Unterstuetzung fuer KI-gestuetzte Konversationen. Entwickler koennen schnell chatbasierte Assistenten zu Anwendungen hinzufuegen, indem sie einen System Prompt, eine Willkommensnachricht und UI-Optionen definieren. Diese Assistenten koennen inline auf einer Seite oder in einem modalen Dialog angezeigt werden, sodass Benutzer direkt im Anwendungskontext mit KI-Faehigkeiten interagieren koennen.

**APEX_AI API**

Fuer fortgeschrittenere Use Cases stellt APEX das Package **APEX_AI** bereit. Seine APIs erlauben Entwicklern, programmatisch mit konfigurierten KI-Services zu interagieren und eigene KI-getriebene Funktionalitaet zu bauen. Da Unterschiede zwischen einzelnen KI-Providern abstrahiert werden, koennen Entwickler sich auf fachliche Anforderungen konzentrieren statt auf provider-spezifische Implementierungsdetails.

**Retrieval-Augmented Generation (RAG)**

Waehrend Large Language Models beeindruckendes Allgemeinwissen bieten, brauchen Enterprise-Anwendungen haeufig Antworten auf Basis unternehmensspezifischer Informationen. Oracle APEX 26.1 unterstuetzt die Entwicklung von Retrieval-Augmented-Generation-Loesungen (RAG), die generative KI mit Daten in der Oracle Database kombinieren. Durch Vector Embeddings und Vector Search koennen relevante Informationen aus Dokumenten, Knowledge Bases oder Business-Daten abgerufen und dem KI-Modell als zusaetzlicher Kontext bereitgestellt werden. Dieser Ansatz verbessert Genauigkeit, Relevanz und Vertrauenswuerdigkeit KI-generierter Antworten.

**AI Agents und AI Tools**

APEX 26.1 fuehrt Unterstuetzung fuer AI Agents und AI Tools ein. Damit koennen KI-Assistenten mit Anwendungsfunktionalitaet und externen Services interagieren. Statt nur Text zu erzeugen, kann ein KI-Assistent vordefinierte Tools aufrufen, um Aktionen auszufuehren, Business-Daten abzurufen, Prozesse zu starten oder externe Systeme abzufragen. Entwickler koennen Anwendungslogik als Tools bereitstellen und genau steuern, welche Faehigkeiten dem KI-Modell zur Verfuegung stehen.

Ein wichtiger Vorteil dieses Ansatzes ist, dass nicht alle potenziell relevanten Daten vorab an das Large Language Model gesendet werden muessen. Stattdessen erhaelt das Modell eine Beschreibung der verfuegbaren Tools und kann entscheiden, wann zusaetzliche Informationen noetig sind. Dann kann es das passende Tool aufrufen, um nur die benoetigten Daten abzurufen. Das reduziert die Prompt-Groesse, minimiert Datentransfer, verbessert Performance und hilft, sensible Business-Daten enger zu kontrollieren.

Zusammen mit Retrieval-Augmented Generation (RAG) ermoeglichen AI Tools die Entwicklung intelligenter Assistenten, die nicht nur Fragen beantworten, sondern auch auf Enterprise-Wissen zugreifen, Aktionen ausfuehren und Benutzer aktiv bei Geschaeftsaufgaben unterstuetzen koennen.

## 16.4 Semantische Suche mit VECTOR-Datentyp in 26ai

Semantische Aehnlichkeitssuche hilft Endbenutzern, relevante Ergebnisse zu finden, auch wenn ihre Suchbegriffe nicht exakt mit dem gespeicherten Text uebereinstimmen. Eine **Search Configuration** kann verwendet werden, um Oracle Database 26ai Vector Search zu einer APEX-Anwendung hinzuzufuegen. Entwickler koennen Details wie Indexnutzung, Distanzmetriken und maximale Vektordistanz konfigurieren und damit Sucherlebnisse schaffen, die natuerliche Spracheingaben toleranter behandeln.

!!! sampleapp "Sample App Vector Search"
    <div class="two-columns">
      <div style="flex: 50%;">
           Diese Anwendung zeigt, wie Vector Search in Oracle Database 26ai genutzt werden kann. Du lernst, wie Vector Embeddings erzeugt und Vector Search mit APEX Search Configurations ausgefuehrt werden. Die Anwendung hebt auch die Unterschiede zur traditionellen Oracle Text Search hervor und zeigt, wie beide Methoden kombiniert werden koennen.
      </div>
      <div style="flex: 50%;">
          ![vectorsearch](assets/samples/vectorsearch.png){ style="display:block;margin:auto;" }
      </div>
    </div>

