# 15. Uebersetzungen

APEX bietet seit langer Zeit ein Uebersetzungsframework, mit dem Entwickler mehrsprachige Anwendungen erstellen koennen. Traditionell basieren Uebersetzungen auf XLIFF-Uebersetzungsdateien, die aus einer Anwendung erzeugt, extern uebersetzt und danach wieder in APEX importiert werden. Dieser Ansatz eignet sich gut fuer professionelle Uebersetzungsworkflows und grosse Projekte. Die Verwaltung von Uebersetzungsdateien kann jedoch umstaendlich werden, wenn Anwendungen sich haeufig aendern.

Beim traditionellen Uebersetzungsansatz wird uebersetzter Text in einer separaten uebersetzten Anwendung gespeichert, die aus der Primaeranwendung generiert wird. Wenn sich uebersetzbare Inhalte in der Quellanwendung aendern, muessen die uebersetzten Anwendungen synchronisiert und entsprechend aktualisiert werden. Dieser Ansatz integriert sich gut in etablierte Uebersetzungsworkflows, aber die Pflege mehrerer Anwendungsversionen kann den administrativen Aufwand erhoehen.

Mit Oracle APEX 26.1 wurde ein neuer Ansatz namens **Message-Based Translation** eingefuehrt. Statt ausschliesslich auf exportierte Uebersetzungsdateien zu setzen, koennen Anwendungstexte nun direkt als uebersetzbare Messages in APEX verwaltet werden. Das vereinfacht die Wartung und erlaubt, Uebersetzungen waehrend der Entwicklung schneller zu aktualisieren.

Bei Message-Based Translation werden alle Uebersetzungen innerhalb derselben Anwendung gepflegt. Dadurch muessen keine separaten uebersetzten Anwendungen verwaltet werden, und die Synchronisations- und Regenerationsschritte des traditionellen Ansatzes entfallen. Das vereinfacht Entwicklung und Wartung.

Ein moeglicher Trade-off von Message-Based Translation ist, dass uebersetzte Texte zur Laufzeit aufgeloest werden, statt in separaten uebersetzten Anwendungen gespeichert zu sein. Dadurch entsteht etwas zusaetzliche Verarbeitung, deren Auswirkung fuer Business-Anwendungen normalerweise vernachlaessigbar ist. Im Gegenzug profitieren Entwickler von einer deutlich einfacheren Architektur, da nur eine einzige Anwendung gepflegt werden muss und keine Synchronisation uebersetzter Anwendungen noetig ist.

Beide Ansaetze bleiben verfuegbar und koennen je nach Projektanforderung verwendet werden. Organisationen mit etablierten Uebersetzungsprozessen koennen weiterhin Translation Repositories und XLIFF-Dateien verwenden, waehrend message-basierte Uebersetzungen fuer viele moderne Anwendungsszenarien eine agilere Alternative bieten.

Schritte fuer **Application-Based Translations**

1. Anwendungssprache definieren, indem die primaersprachige Anwendung einer oder mehreren uebersetzten Anwendungen zugeordnet wird.
2. Uebersetzbaren Text fuer die Anwendung seeden, damit er im Translation Repository verfuegbar ist.
3. Text direkt in der APEX UI uebersetzen oder als XLIFF exportieren, die XLIFF-Datei uebersetzen und wieder ins Repository importieren.
4. Uebersetzte Anwendung veroeffentlichen.

In der folgenden Uebung erkundest du **Message-Based Translation**.

!!! exercise "Anwendung ins Deutsche uebersetzen"
    Oeffne in **Shared Components** im Abschnitt **Globalization** den Eintrag **Application Translations**. Aktiviere zuerst Uebersetzungen fuer diese Anwendung. APEX zeigt die **Globalization**-Eigenschaften deiner Anwendung, wobei `English (en)` als **Application Primary Language** gesetzt sein sollte.

    Nachdem **Translate Application** aktiviert wurde, kannst du zwischen den beiden **Translation Methods** waehlen. Fuer diese Uebung waehlst du `Text Message-Based`. Abschliessend laesst du den Browser die Sprache bestimmen, indem du **Translation Language Derived From** auf `Browser (use browser language preference)` setzt.

    ##### Browser Language

    ![appstrans](assets/translations/appstrans.png){ style="display:block;margin:auto;" }

    Wenn du in **Shared Components** zu **Application Translations** zurueckkehrst, verwendest du den Button **Add Language**, um eine neue Sprachkonfiguration zu erstellen. Fuege `German (de)` hinzu. Nun siehst du links zwei Sprachen: die Primaersprache **English** und die uebersetzte Sprache **German**. Du siehst auch die Anzahl der Text Messages in der Anwendung.

    ![appstrans2](assets/translations/appstrans2.png){ style="display:block;margin:auto;" }

    Klicke auf die Anzahl der Text Messages, um sie direkt in APEX zu uebersetzen. Als Abkuerzung kannst du die Uebersetzungsdatei ueber das Drei-Punkte-Menue in der Actions-Spalte als CSV herunterladen, sie mit einem LLM uebersetzen lassen und die uebersetzte CSV-Datei wieder hochladen. Hochladen kannst du sie ueber **Import Text Messages** rechts auf dem Uebersetzungsbildschirm. Das war es. Die Uebersetzung muss noch geprueft werden, aber der groesste Teil der Arbeit ist erledigt.

    Teste die Uebersetzung, indem du die Spracheinstellungen deines Browsers aenderst.

    Wenn du die Anwendungsdefinition inspizierst, findest du Referenzen dort, wo vorher statischer Text verwendet wurde. Statt `"Job"` als Label fuer das Job-Item siehst du nun `"&{JOB}."`, eine Referenz, die zur Laufzeit aufgeloest wird.

!!! bytheway "APEX UI-Sprachen"
    *Uebrigens*,<br>
    du kannst die Sprache der APEX-Entwicklungsoberflaeche direkt auf der APEX-Startseite aendern, sofern die passenden Sprachpakete installiert wurden. Scrolle nach unten und waehle die gewuenschte Sprache. Du kannst die Sprache auch beim Login in die Umgebung auswaehlen.

