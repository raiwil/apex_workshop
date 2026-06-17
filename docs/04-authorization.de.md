# 4. Autorisierung

Authorization Schemes steuern, welche Benutzer auf bestimmte Komponenten innerhalb einer Oracle-APEX-Anwendung zugreifen dürfen. Während Authentication bestimmt, *wer* ein Benutzer ist, bestimmt Authorization, *was* dieser Benutzer tun darf. Authorization Schemes können auf Seiten, Regionen, Items, Buttons, Navigationseinträge und Prozesse angewendet werden, um den Zugriff anhand vordefinierter Regeln einzuschränken.

Oracle APEX stellt verschiedene Arten von Authorization Schemes bereit, darunter rollenbasierte Prüfungen, PL/SQL-Funktionen und eigene Logik. Authorization wird immer dann ausgewertet, wenn auf eine geschützte Komponente zugegriffen wird. Dadurch können nur berechtigte Benutzer die entsprechende Funktion sehen oder verwenden.

Durch die zentrale Verwaltung von Zugriffskontrolle in Authorization Schemes können Entwickler konsistente Sicherheitsrichtlinien umsetzen und die Wartung von Sicherheitsanforderungen vereinfachen.

## 4.1 Grundlagen

Zuerst sehen wir uns an, was ohne Authorization möglich ist.

### 4.1.1 Seite ohne Authentication verfügbar machen

Die Home Page soll für öffentliche Benutzer ohne Login erreichbar sein. Wenn weitergeklickt wird, soll aber die Login-Seite erscheinen.

!!! exercise "Public Page"
    Gehe im Page Designer zu Seite 1 und klicke auf die Seitenebene. Wähle in der Eigenschaften-Spalte im Abschnitt **Security** bei **Authentication** statt des Standards `Page Requires Authentication` den Wert `Page is Public`. Die Eigenschaft **Authorization Scheme** verwenden wir später.

    ![public](assets/authorization/public.png){ style="display:block;margin:auto;" }

Wenn du dich jetzt abmeldest, siehst du Seite 1 ohne Login (als Benutzer **nobody**). Wenn du zu einer anderen Seite navigierst, erscheint die Login-Seite. Die Eigenschaften **Authorization Scheme** und **Authentication** sind für viele Objekte in APEX verfügbar.

### 4.1.2 Menüeintrag nur für angemeldete Benutzer anzeigen

Der Menüeintrag **EmpFacets** zur entsprechenden Seite soll für öffentliche Benutzer nicht sichtbar sein (auf der jetzt öffentlichen Seite 1). Nach dem Login soll er sichtbar sein, unabhängig vom konkreten Benutzer.

!!! exercise "Nicht öffentlich"
    Wähle in **Shared Components** im Abschnitt **Navigation** den Eintrag **Navigation Menu**.

    ![navigationmenu](assets/authorization/navigationmenu.png){ style="display:block;margin:auto;" }

    Aktuell gibt es nur ein Menü, das ebenfalls **Navigation Menu** heißt. Klicke auf den Namen.

    ![navigationmenu2](assets/authorization/navigationmenu2.png){ style="display:block;margin:auto;" }

    Du siehst die drei aktuellen Menüeinträge. Da wir die Sichtbarkeit des Eintrags **EmpFacets** ändern wollen, klicke in dieser Zeile auf den Stift.

    ![pencil](assets/authorization/pencil.png){ style="display:block;margin:auto;" }

    Wähle im Abschnitt **Authorization** als **Authorization Scheme** den Wert `Must Not Be Public User`.

    ![notpublic](assets/authorization/notpublic.png){ style="display:block;margin:auto;" }

Wenn du die Anwendung jetzt startest, siehst du die Home Page ohne Login. Den Eintrag Master Detail im Menü siehst du aber nicht. Nach dem Login (über den weiterhin sichtbaren Menüeintrag Employees) ist der Eintrag im Menü sichtbar.

## 4.2 Authorization Scheme verwenden

Jetzt erstellen wir ein Authorization Scheme und verwenden es an verschiedenen Objekten in der Anwendung.

### 4.2.1 Neue Seite für Chefs erstellen

Zuerst fügen wir zu Demonstrationszwecken eine neue Seite hinzu.

!!! exercise "Seite BossesOnly erstellen"
    Nutze einen der möglichen Wege, eine neue Seite zu erstellen, und wähle **Blank Page**.

    ![blankpage](assets/authorization/blankpage.png){ style="display:block;margin:auto;" }

    Nenne die Seite `BossesOnly` und gib ihr die **Page Number** `5`.

    ![bossespage](assets/authorization/bossespage.png){ style="display:block;margin:auto;" }

    Füge der Seite nun eine Region hinzu, indem du mit der rechten Maustaste auf **Body** klickst und **Create Region** wählst.

    ![createregion](assets/authorization/createregion.png){ style="display:block;margin:auto;" }

    Nenne die neue Region `HintForBosses`. Sie ist vom **Type** `Static Content`. Schreibe in **HTML Code** beliebigen Text, mit oder ohne HTML-Tags. Ich habe `<h1>Only Bosses can see this !!! </h1>` gewählt.

    ![static](assets/authorization/static.png){ style="display:block;margin:auto;" }

### 4.2.2 Authorization Scheme erstellen

Im Authorization Scheme, das wir erstellen, prüfen wir, ob der Benutzer **MANAGER** oder **PRESIDENT** ist. Deshalb nennen wir dieses Scheme `IsBoss`.

!!! exercise "Authorization Scheme erstellen"
    Gehe in **Shared Components** im Abschnitt **Security** zu **Authorization Schemes**.

    ![authorizationschemes](assets/authorization/authorizationschemes.png){ style="display:block;margin:auto;" }

   Erstelle ein neues Authorization Scheme.

   ![createauthscheme](assets/authorization/createauthscheme.png){ style="display:block;margin:auto;" }

   Wähle **From Scratch** und klicke auf **Next**.

   ![next](assets/authorization/next.png){ style="display:block;margin:auto;" }

   Gib dem Scheme einen **Name** (hier `IsBoss`) und wähle als **Scheme Type** den Wert `Exists SQL Query`.
   Verwende für die **SQL Query** den folgenden Code. Er prüft, ob der angemeldete Benutzer (`:APP_USER`) eine Führungsrolle hat.

   ```sql
      SELECT 1
        FROM emp
       WHERE lower(:APP_USER) = lower(ename)
         AND UPPER(job) IN ('MANAGER','PRESIDENT')
   ```

   Schreibe eine Fehlermeldung und validiere die Regel einmal pro Session.

  ![createauthorizationscheme](assets/authorization/createauthorizationscheme.png){ style="display:block;margin:auto;" }

Jetzt ist das Authorization Scheme bereit, in der Anwendung verwendet zu werden.

!!! bytheway "Bind Variables referenzieren"
    *Übrigens*,<br>
    Bind Variables wie APP_USER oder Page Items können an unterschiedlichen Stellen der Anwendung auf verschiedene Arten eingebunden werden:<br>
    - **:MYVARIABLE** - mit Doppelpunkt innerhalb von APEX in SQL und PL/SQL, wie in diesem Beispiel.<br>
    - **v('MYVARIABLE')** - mit den Funktionen v und nv (für value und numeric value) in PL/SQL-Code außerhalb von APEX.<br>
    - **&MYVARIABLE.** - mit Ampersand und Punkt (den Punkt am Ende nicht vergessen) als Substitution String, zum Beispiel in APEX Items (Static Text).<br>
    - **#MYVARIABLE#** - mit Hash-Zeichen als Template Substitution String.<br>

### 4.2.3 Authorization Schemes mit Anwendungsobjekten verwenden

#### 4.2.3.1 Nur Manager sollen die neu erstellte Seite und den passenden Menüeintrag sehen

In dieser Übung verwenden wir das gerade erstellte Authorization Scheme **IsBoss** und weisen es Seite 5 auf Seitenebene zu, indem wir die Authorization der Seite auf dieses Scheme setzen.

!!! exercise "Authorization Scheme am Menüeintrag setzen"
    Wähle in **Shared Components** im Abschnitt **Navigation** den Eintrag **Navigation Menu**.

    ![navigationmenu](assets/authorization/navigationmenu.png){ style="display:block;margin:auto;" }

    Klicke auf **Navigation Menu**.

    ![navigationmenu2](assets/authorization/navigationmenu2.png){ style="display:block;margin:auto;" }

    Wähle den Menüeintrag **BossesOnly**, indem du auf den Stift klickst.

    ![pencil_boss](assets/authorization/pencil_boss.png){ style="display:block;margin:auto;" }

    Wähle im Abschnitt **Authorization** das **Authorization Scheme** `IsBoss`.

    ![auth_isboss_menu](assets/authorization/auth_isboss_menu.png){ style="display:block;margin:auto;" }

    Es ist besser, auch die passende Seite selbst abzusichern. Gehe zu Seite 5 **BossesOnly** und wähle auf Seitenebene im Abschnitt **Security** das **Authorization Scheme**.

    ![auth_isboss_page.png](assets/authorization/auth_isboss_page.png){ style="display:block;margin:auto;" }

Starte die Anwendung mit verschiedenen Benutzern und prüfe, ob du **BossesOnly** im Menü siehst.

#### 4.2.3.2 Nur privilegierte Benutzer sollen neue Mitarbeitende anlegen können

Als Nächstes wollen wir nur Chefs erlauben, neue Mitarbeitende in der Datenbank anzulegen.

!!! exercise "Authorization Scheme am Button setzen"
    Dasselbe, was du im vorherigen Schritt für die Seite getan hast, kannst du für den **CREATE**-Button auf Seite 2 machen.

    ![auth_isboss_button.png](assets/authorization/auth_isboss_button.png){ style="display:block;margin:auto;" }

Die Form kann von anderen Benutzern weiterhin zum Bearbeiten verwendet werden, aber das Anlegen eines neuen Mitarbeiters ist nur für privilegierte Benutzer erreichbar. Um zu verhindern, dass nicht privilegierte Benutzer bestehende Mitarbeitende ändern, kannst du das Authorization Scheme für den Apply-Changes-Button in der Form verwenden.

!!! bytheway "Open Door Credentials"
    *Übrigens*,<br>
    wir können das hier testen, weil wir alle Zugangsdaten kennen. In echten Anwendungen ist das normalerweise nicht der Fall. Um die Anwendung trotzdem testen zu können, kann das Authentication Scheme **Open Door Credentials** verwendet werden. Damit gibst du beim Login nur einen Benutzernamen ein, ohne Verifikation. Bitte vergiss nicht, das vor dem Go-live wieder zu ändern.

#### 4.2.3.3 Nur privilegierte Benutzer sollen Gehalt und Provision sehen

Im Mitarbeitenden-Report (Seite 2) gibt es zwei finanzielle Spalten (SAL, COMM). Wenn ein nicht privilegierter Benutzer diesen Report öffnet, sollen sie unterdrückt werden.

!!! exercise "Authorization Scheme an Report-Spalten setzen"
    Setze erneut das **Authorization Scheme**, diesmal aber für die beiden zuvor genannten Report-Spalten auf Seite 2.
    Wähle sie zusammen aus (mit der Ctrl-Taste), damit du die Eigenschaft nur einmal für beide ändern musst.

    ![auth_isboss_column.png](assets/authorization/auth_isboss_column.png){ style="display:block;margin:auto;" }

Nicht privilegierte Benutzer können den Report jetzt sehen, aber ohne die beiden finanziellen Spalten. Sie können Gehalt und Provision weiterhin in der passenden Form sehen, aber jetzt weisst du, wie du das ändern kannst (Items unterdrücken) oder wie du verhinderst, dass sie die Form überhaupt erreichen.

### 4.3 Daten abhängig vom aktuellen Benutzer filtern

Als letzte Übung in diesem Kapitel wollen wir den Report der Mitarbeitenden so ändern, dass Benutzer nur Mitarbeitende der eigenen Abteilung sehen können. Nur der President soll alle Daten sehen.

!!! exercise "Reportdaten nach aktuellem Benutzer filtern"
    Wähle im Page Designer die Report-Region **Employees** (Seite 2) und füge der Report-Quelle eine **Where Clause** hinzu, die prüft, ob der Benutzer PRESIDENT ist oder ob die ausgewählten Daten nur aus derselben Abteilung wie der Benutzer stammen.

    ```sql
      deptno = (select deptno from emp where ename = :APP_USER)
          OR
      'PRESIDENT' = (select job from emp where ename = :APP_USER)
    ```

    ![whereclause.png](assets/authorization/whereclause.png){ style="display:block;margin:auto;" }

Starte den Report mit verschiedenen Benutzern und prüfe das Ergebnis.

!!! bytheway "Row Level Security"
    *Übrigens*,<br>
    **Virtual Private Database (VPD)** kann eine gute Alternative sein, um Row-Level Security umzusetzen. Der VPD-Kontext kann zu Beginn einer APEX-Session einfach gesetzt werden.
    Auch **Real Application Security (RAS)**, die nächste Generation von VPD, stellt ein deklaratives Modell bereit, das Sicherheitsrichtlinien ermöglicht, die nicht nur die geschützten Business-Objekte umfassen, sondern auch die Principals (Benutzer und Rollen), die Berechtigungen für diese Objekte haben.
    Neu mit Database 23.26.2 ist **Oracle Deep Data Security (Deep Sec)**, ein datenbankseitig erzwungenes Data-Authorization-Framework. Es erzwingt feingranulare Zugriffskontrolle auf Zeilen-, Spalten- und Zellenebene mit deklarativem SQL und sichert alle Zugriffspfade auf sensible Daten über Enterprise-Anwendungen, Analysewerkzeuge und agentische KI-Systeme hinweg. Deep Sec integriert sich nativ mit externen Identity- und Access-Management-Systemen wie Microsoft Entra ID und OCI IAM, um Endbenutzer-Sicherheitskontexte herzustellen. Dadurch wird jede SQL-Operation gegen die tatsächliche Identität, Rollen und Attribute des anfragenden Benutzers autorisiert.

