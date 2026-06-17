# 20. Forms: Updates ueber Joins

Dieses Kapitel passt vielleicht nicht offensichtlich in einen Einsteiger-Workshop, aber es ist zu interessant, um es wegzulassen.

Bisher haben die Formulare und Datenaenderungen, die wir gebaut haben, jeweils eine Tabelle geaendert. In realen Szenarien kann es komplexer werden. In diesem Kapitel sehen wir, wie Formulare flexibler eingesetzt werden koennen und wie mehr als eine Tabelle beteiligt sein kann. Als Beispiel verwenden wir einen Join.

Wir erstellen eine Tabelle `EMP2`, um Kommentare zu Mitarbeitenden zu speichern, und verbinden sie ueber den Primaerschluessel `EMPNO` mit `EMP`. Eine Zeile in `EMP2` existiert nur dann, wenn ein Mitarbeiter einen Kommentar hat. Wenn ein Kommentar eingegeben wird, muessen wir eine Zeile in `EMP2` einfuegen. Wenn ein Kommentar geloescht wird, bleibt die Mitarbeiterzeile in `EMP` bestehen, aber die zugehoerige Zeile in `EMP2` soll geloescht werden.

In diesem Beispiel verwenden wir ein Interactive Grid. Der gleiche Ansatz funktioniert auch fuer eine Form Region.

!!! exercise "Updates ueber Joins in Interactive Grids"
    Zuerst erstellen wir eine neue Tabelle, um Kommentare fuer die Mitarbeitenden zu speichern. Natuerlich koennte das auch eine Spalte in der Tabelle `EMP` sein, aber wir wollen bewusst eine zweite Tabelle verwenden, um Updates ueber Joins zu zeigen.

    Fuehren Sie diesen Befehl in **SQL Commands** aus.

    ```sql
        CREATE TABLE emp2 (
            empno      NUMBER PRIMARY KEY,
            mycomment  VARCHAR2(50),
            CONSTRAINT fk_emp FOREIGN KEY (empno)
                REFERENCES emp (empno)
        );
    ```

    Versuchen Sie nun, die folgende SQL-Anweisung in **SQL Commands** auszufuehren. Das SELECT-Statement innerhalb des `UPDATE` verwendet einen Outer Join, sodass Zeilen aus `EMP` angezeigt werden, auch wenn es noch keine passende Zeile in `EMP2` gibt.

    ```sql
        UPDATE (
            SELECT e.empno AS e_empno,
                   e.ename,
                   e.sal,
                   e.job,
                   e2.mycomment
              FROM emp e
              LEFT OUTER JOIN emp2 e2
                ON e.empno = e2.empno
        )
           SET sal = sal,
               mycomment = mycomment;
    ```

    Sie erhalten den Fehler *ORA-01776: cannot modify more than one base table through a join view*. Nur die Spalte `sal` zu aktualisieren funktioniert, aber nur die Spalte `mycomment` zu aktualisieren fuehrt zu *ORA-01763: update or delete involves outer joined table*.

    Wir wollen aber Updates, Inserts und Deletes auf beiden Tabellen aus demselben Formular heraus ausfuehren. Wie koennen wir das erreichen?

    Erstellen Sie eine neue Seite mit einer **Interactive Grid**-Komponente. Verwenden Sie einen beliebigen **Name**, setzen Sie **Source Type** auf `SQL Query`, und geben Sie den folgenden Code in **Enter a SQL SELECT statement** ein.

    ```sql
        SELECT e.empno,
               e.ename,
               e.sal,
               e.job,
               e2.mycomment
          FROM emp e
          LEFT OUTER JOIN emp2 e2
            ON e.empno = e2.empno
    ```

    ![ig](assets/extra/ig.png){ style="display:block;margin:auto;" }

    Wechseln Sie in der Region auf den Tab **Attributes** und aktivieren Sie im Bereich **Edit** den Schalter **Enabled**.

    Definieren Sie nun die Spalte **EMPNO** als **Primary Key**. Diese Eigenschaft finden Sie im Bereich **Source**.

    Beim Versuch, Daten zu aktualisieren, sehen Sie die gleichen Fehlermeldungen wie zuvor. Wenn Sie die Spalte **MYCOMMENT** auf **Read Only** setzen, kann das Grid fuer Updates auf `EMP` verwendet werden, aber diese Spalte wird ignoriert.

    Wir wollen aber Folgendes erreichen:

    * Zeilen in `EMP` aktualisieren
    * Zeilen in `EMP2` aktualisieren
    * Zeilen in `EMP2` einfuegen, wenn `MYCOMMENT` von `NULL` auf einen Wert geaendert wird
    * Zeilen aus `EMP2` loeschen, wenn `MYCOMMENT` auf `NULL` gesetzt wird und vorher nicht `NULL` war
    * Zeilen aus `EMP` und `EMP2` loeschen, wenn eine Zeile im Grid geloescht wird

    Das erreichen wir, indem wir eigene Logik verwenden statt des Standard-Prozesstyps `Interactive Grid - Automatic Row Processing (DML)`.

    Wechseln Sie in den Tab **Processing**, waehlen Sie den Prozess fuer das Update aus, und aendern Sie den **Target Type** dieses Prozesses von `Region Source`, also unserer Query, auf `PL/SQL Code`.

    Verwenden Sie als **PL/SQL Code to Insert/Update/Delete** diesen Code:

    ```plsql
        DECLARE
            newempno NUMBER;
        BEGIN
            CASE :apex$row_status
            WHEN 'C' THEN
                INSERT INTO emp (ename, sal, job)
                VALUES (:ename, :sal, :job)
                RETURNING empno INTO newempno;

                IF :mycomment IS NOT NULL THEN
                    INSERT INTO emp2 (empno, mycomment)
                    VALUES (newempno, :mycomment);
                END IF;

            WHEN 'U' THEN
                UPDATE emp
                   SET ename = :ename,
                       sal   = :sal,
                       job   = :job
                 WHERE empno = :empno;

                MERGE INTO emp2 target
                USING (
                    SELECT :empno     AS empno,
                           :mycomment AS mycomment
                      FROM sys.dual
                ) source
                   ON (source.empno = target.empno)
                 WHEN MATCHED THEN
                    UPDATE
                       SET target.mycomment = source.mycomment
                    DELETE WHERE source.mycomment IS NULL
                 WHEN NOT MATCHED THEN
                    INSERT (target.empno, target.mycomment)
                    VALUES (source.empno, source.mycomment)
                    WHERE source.mycomment IS NOT NULL;

            WHEN 'D' THEN
                DELETE FROM emp2 WHERE empno = :empno;
                DELETE FROM emp  WHERE empno = :empno;
            END CASE;
        END;
    ```

    ![ig_plsql](assets/extra/ig_plsql.png){ style="display:block;margin:auto;" }

    Fuer jede geaenderte Grid-Zeile prueft der Code, ob sie aktualisiert (`U`), erstellt (`C`) oder geloescht (`D`) wurde, und fuehrt dann die oben beschriebene Logik aus. Wenn ein neuer Mitarbeiter erstellt wird, erzeugen der vorhandene Trigger und die Sequence aus dem Sample Dataset den neuen Wert fuer `EMPNO`. `RETURNING empno INTO newempno` liest diesen Wert aus, damit die zugehoerige Zeile in `EMP2` eingefuegt werden kann.

    Testen Sie nun die Anwendung, nehmen Sie einige Datenaenderungen vor, und pruefen Sie im Object Browser, was in der Tabelle `EMP` und besonders in `EMP2` passiert.

Es ist etwas Coding beteiligt, aber dieser Ansatz gibt Ihnen die volle Flexibilitaet und Kontrolle, wenn Sie sie brauchen.

!!! bytheway "Prevent Lost Updates"
    *By the way*,<br>
    Auch mit eigenem DML-Code wird **Prevent Lost Updates** weiterhin automatisch behandelt.

!!! bytheway "Instead of Triggers"
    *By the way*,<br>
    Als Alternative koennen Sie diesen Ansatz verwenden:

    * Eine View mit der oben gezeigten Query erstellen
    * `INSTEAD OF` Trigger fuer diese View erstellen, um die Logik aus dem Code oben in die Datenbank zu verschieben
    * Die View als Grundlage fuer ein Formular verwenden

    Mit diesem Ansatz ist die Logik auch aus anderen Umgebungen wiederverwendbar.
