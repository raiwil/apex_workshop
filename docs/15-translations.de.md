# 15. Übersetzungen

APEX bietet seit langer Zeit ein Übersetzungsframework, mit dem Entwickler mehrsprachige Anwendungen erstellen können. Traditionell basieren Übersetzungen auf XLIFF-Übersetzungsdateien, die aus einer Anwendung erzeugt, extern übersetzt und danach wieder in APEX importiert werden. Dieser Ansatz eignet sich gut für professionelle Übersetzungsworkflows und große Projekte. Die Verwaltung von Übersetzungsdateien kann jedoch umständlich werden, wenn Anwendungen sich häufig ändern.

Beim traditionellen Übersetzungsansatz wird übersetzter Text in einer separaten übersetzten Anwendung gespeichert, die aus der Primäranwendung generiert wird. Wenn sich übersetzbare Inhalte in der Quellanwendung ändern, müssen die übersetzten Anwendungen synchronisiert und entsprechend aktualisiert werden. Dieser Ansatz integriert sich gut in etablierte Übersetzungsworkflows, aber die Pflege mehrerer Anwendungsversionen kann den administrativen Aufwand erhöhen.

Mit Oracle APEX 26.1 wurde ein neuer Ansatz namens **Message-Based Translation** eingeführt. Statt ausschließlich auf exportierte Übersetzungsdateien zu setzen, können Anwendungstexte nun direkt als übersetzbare Messages in APEX verwaltet werden. Das vereinfacht die Wartung und erlaubt, Übersetzungen während der Entwicklung schneller zu aktualisieren.

Bei Message-Based Translation werden alle Übersetzungen innerhalb derselben Anwendung gepflegt. Dadurch müssen keine separaten übersetzten Anwendungen verwaltet werden, und die Synchronisations- und Regenerationsschritte des traditionellen Ansatzes entfallen. Das vereinfacht Entwicklung und Wartung.

Ein möglicher Trade-off von Message-Based Translation ist, dass übersetzte Texte zur Laufzeit aufgelöst werden, statt in separaten übersetzten Anwendungen gespeichert zu sein. Dadurch entsteht etwas zusätzliche Verarbeitung, deren Auswirkung für Business-Anwendungen normalerweise vernachlässigbar ist. Im Gegenzug profitieren Entwickler von einer deutlich einfacheren Architektur, da nur eine einzige Anwendung gepflegt werden muss und keine Synchronisation übersetzter Anwendungen nötig ist.

Beide Ansätze bleiben verfügbar und können je nach Projektanforderung verwendet werden. Organisationen mit etablierten Übersetzungsprozessen können weiterhin Translation Repositories und XLIFF-Dateien verwenden, während message-basierte Übersetzungen für viele moderne Anwendungsszenarien eine agilere Alternative bieten.

Schritte für **Application-Based Translations**

1. Anwendungssprache definieren, indem die primärsprachige Anwendung einer oder mehreren übersetzten Anwendungen zugeordnet wird.
2. Übersetzbaren Text für die Anwendung seeden, damit er im Translation Repository verfügbar ist.
3. Text direkt in der APEX UI übersetzen oder als XLIFF exportieren, die XLIFF-Datei übersetzen und wieder ins Repository importieren.
4. Übersetzte Anwendung veröffentlichen.

In der folgenden Übung erkundest du **Message-Based Translation**.

!!! exercise "Anwendung ins Deutsche übersetzen"
    Öffne in **Shared Components** im Abschnitt **Globalization** den Eintrag **Application Translations**. Aktiviere zuerst Übersetzungen für diese Anwendung. APEX zeigt die **Globalization**-Eigenschaften deiner Anwendung, wobei `English (en)` als **Application Primary Language** gesetzt sein sollte.

    Nachdem **Translate Application** aktiviert wurde, kannst du zwischen den beiden **Translation Methods** wählen. Für diese Übung wählst du `Text Message-Based`. Abschliessend lässt du den Browser die Sprache bestimmen, indem du **Translation Language Derived From** auf `Browser (use browser language preference)` setzt.

    ##### Browser Language

    ![appstrans](assets/translations/appstrans.png){ style="display:block;margin:auto;" }

    Wenn du in **Shared Components** zu **Application Translations** zurückkehrst, verwendest du den Button **Add Language**, um eine neue Sprachkonfiguration zu erstellen. Füge `German (de)` hinzu. Nun siehst du links zwei Sprachen: die Primärsprache **English** und die übersetzte Sprache **German**. Du siehst auch die Anzahl der Text Messages in der Anwendung.

    ![appstrans2](assets/translations/appstrans2.png){ style="display:block;margin:auto;" }

    Klicke auf die Anzahl der Text Messages, um sie direkt in APEX zu übersetzen. Als Abkürzung kannst du die Übersetzungsdatei über das Drei-Punkte-Menü in der Actions-Spalte als CSV herunterladen, sie mit einem LLM übersetzen lassen und die übersetzte CSV-Datei wieder hochladen. Hochladen kannst du sie über **Import Text Messages** rechts auf dem Übersetzungsbildschirm. Das war es. Die Übersetzung muss noch geprüft werden, aber der größte Teil der Arbeit ist erledigt.

    Teste die Übersetzung, indem du die Spracheinstellungen deines Browsers änderst.

    Wenn du die Anwendungsdefinition inspizierst, findest du Referenzen dort, wo vorher statischer Text verwendet wurde. Statt `"Job"` als Label für das Job-Item siehst du nun `"&{JOB}."`, eine Referenz, die zur Laufzeit aufgelöst wird.

!!! bytheway "APEX UI-Sprachen"
    *Übrigens*,<br>
    du kannst die Sprache der APEX-Entwicklungsoberfläche direkt auf der APEX-Startseite ändern, sofern die passenden Sprachpakete installiert wurden. Scrolle nach unten und wähle die gewünschte Sprache. Du kannst die Sprache auch beim Login in die Umgebung auswählen.

