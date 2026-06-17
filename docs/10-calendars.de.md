# 10. Kalender

!!! sampleapp "Sample App Calendar"
    <div class="two-columns">
      <div style="flex: 50%;">
           Diese Anwendung hebt die nativen Kalenderfaehigkeiten von Oracle APEX hervor. Sie enthaelt einen Monatskalender mit stilisierten Tagesaufgaben. Die Daten koennen per Drag-and-drop geaendert werden. Das ist vollstaendig deklarativ und kann einfach mit nativen APEX-Wizards erstellt werden.
      </div>
      <div style="flex: 50%;">
          ![calendar](assets/samples/calendar.png){ style="display:block;margin:auto;" }
      </div>
    </div>

In diesem Kapitel bauen wir einen Kalender in unserer Anwendung und passen die Farbcodierung etwas an. Der Calendar basiert auf der JavaScript-Bibliothek FullCalendar und kann deklarativ, ueber CSS und ueber JavaScript Initialization Code angepasst werden.

## 10.1 Daten fuer einen Kalender erstellen

!!! exercise "SQL Script ausfuehren"
    Zuerst erstellen wir eine Tabelle und laden einige Daten ueber ein **SQL Script**. Im Vergleich zu **SQL Commands** kannst du hier eine Menge von Statements auf einmal ausfuehren. Sie koennen dort geschrieben oder geladen werden. Erstelle ein neues Script und gib ihm den **Script Name** `myscript`. Kopiere das folgende Snippet in den Code Editor.

    ``` sql
       CREATE TABLE occupancies
          ( ID         NUMBER PRIMARY KEY,
            ROOM       VARCHAR2(30),
            START_TIME DATE,
            END_TIME   DATE,
            EVENT_NAME VARCHAR2(30)
          )
        /

        insert into occupancies values (1,'Redwood Shores',
                  to_date(to_char(next_day(sysdate-7,'MONDAY'),'DD.MM.YYYY')||'10:00','DD.MM.YYYY HH24:MI') ,
                  to_date(to_char(next_day(sysdate-7,'MONDAY'),'DD.MM.YYYY')||'12:00','DD.MM.YYYY HH24:MI') , 'Internal Meeting');
        insert into occupancies values (2,'Redwood Shores',
                  to_date(to_char(next_day(sysdate-7,'MONDAY')+2,'DD.MM.YYYY')||'12:00','DD.MM.YYYY HH24:MI') ,
                  to_date(to_char(next_day(sysdate-7,'MONDAY')+2,'DD.MM.YYYY')||'15:00','DD.MM.YYYY HH24:MI') , 'Strategy Overview');
        insert into occupancies values (3,'Bangalore',
                  to_date(to_char(next_day(sysdate-7,'MONDAY'),'DD.MM.YYYY')||'10:00','DD.MM.YYYY HH24:MI') ,
                  to_date(to_char(next_day(sysdate-7,'MONDAY'),'DD.MM.YYYY')||'16:00','DD.MM.YYYY HH24:MI') , 'Basic Cleaning');
        insert into occupancies values (4,'Bangalore',
                  to_date(to_char(next_day(sysdate-7,'MONDAY')+1,'DD.MM.YYYY')||'17:00','DD.MM.YYYY HH24:MI') ,
                  to_date(to_char(next_day(sysdate-7,'MONDAY')+2,'DD.MM.YYYY')||'12:00','DD.MM.YYYY HH24:MI') , 'Night-Hacking');
        insert into occupancies values (5,'Manila',
                  to_date(to_char(next_day(sysdate-7,'MONDAY'),'DD.MM.YYYY')||'12:00','DD.MM.YYYY HH24:MI') ,
                  to_date(to_char(next_day(sysdate-7,'MONDAY'),'DD.MM.YYYY')||'14:00','DD.MM.YYYY HH24:MI') , 'Customer A - Meeting');
        insert into occupancies values (6,'Manila',
                  to_date(to_char(next_day(sysdate-7,'MONDAY')+1,'DD.MM.YYYY')||'10:00','DD.MM.YYYY HH24:MI') ,
                  to_date(to_char(next_day(sysdate-7,'MONDAY')+1,'DD.MM.YYYY')||'12:00','DD.MM.YYYY HH24:MI') , 'Customer B - Planning');
    ```

    ![script](assets/calendar/script.png){ style="display:block;margin:auto;" }

    Das Script wird geprueft, wenn du auf **Run** klickst, und du musst danach erneut auf **Run** klicken. Du bekommst Rueckmeldung, was passiert ist.
    Im **Object Browser** kannst du die erstellte Tabelle (OCCUPANCIES) sehen und die eingefuegten Daten pruefen.

## 10.2 Seite mit Kalender bauen

Auf Basis der gerade erstellten Tabelle bauen wir nun einen Kalender, um die Daten zu visualisieren.

!!! exercise "Kalenderseite bauen"
    Erstelle eine neue Seite in deiner Anwendung und waehle **Calendar** als Region fuer diese neue Seite.

    ![createpage](assets/calendar/createpage.png){ style="display:block;margin:auto;" }

    Waehle `9` als **Page Number** und nenne die Seite `MyCalendar`. Als **Table / View Name** waehle die gerade erstellte Tabelle `OCCUPANCIES`.

    ![createpage2](assets/calendar/createpage2.png){ style="display:block;margin:auto;" }

    Im naechsten Schritt setzt du die Eigenschaften fuer **Display Column**, **Start Date Column** und **End Date Column** auf die passenden Spalten der Tabelle. Da wir die Uhrzeit sehen wollen, setze **Show Time** auf `Yes`. Klicke auf **Create Page** und starte die Seite, um den Kalender anzusehen.

    ![createpage3](assets/calendar/createpage3.png){ style="display:block;margin:auto;" }

    Jetzt machen wir es etwas schoener und faerben die Eintraege abhaengig von den Raeumen.

    Gehe in den Page Designer (Seite 9), klicke die Calendar-Komponente an und sieh dir den Tab **Attributes** der Region an. Im Tab **Region** aenderst du in der Source den **Type** von `Table/View` auf `SQL Query`. Ersetze die **SQL Query** durch diese Abfrage:

    ``` sql
        SELECT ID, ROOM, START_TIME, END_TIME, EVENT_NAME,
               EVENT_NAME || ' (' || TO_CHAR(START_TIME,'HH24:MI')  || '-' || TO_CHAR(END_TIME,'HH24:MI') || ')' as CAL_DISPLAY,
           CASE ROOM
              WHEN 'Redwood Shores' THEN 'apex-cal-blue'
              WHEN 'Bangalore'      THEN 'apex-cal-green'
              WHEN 'Manila'         THEN 'apex-cal-orange'
           END CSS_CLASS
        FROM OCCUPANCIES
    ```

    ![newquery](assets/calendar/newquery.png){ style="display:block;margin:auto;" }

    Gehe nun zurueck zum Tab **Attributes** und aendere die Eigenschaft **Display Column** auf `CAL_DISPLAY` und **CSS Class** auf `CSS_CLASS`.

    ![attributes](assets/calendar/attributes.png){ style="display:block;margin:auto;" }

Starte den Kalender. Du siehst jetzt eine schoene Farbcodierung. Schau oben rechts und wechsle die Zeitraeume, um zu sehen, was passiert.

