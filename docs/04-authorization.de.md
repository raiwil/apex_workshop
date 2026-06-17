# 4. Autorisierung

Authorization Schemes steuern, welche Benutzer auf bestimmte Komponenten innerhalb einer Oracle-APEX-Anwendung zugreifen duerfen. Waehrend Authentication bestimmt, *wer* ein Benutzer ist, bestimmt Authorization, *was* dieser Benutzer tun darf. Authorization Schemes koennen auf Seiten, Regionen, Items, Buttons, Navigationseintraege und Prozesse angewendet werden, um den Zugriff anhand vordefinierter Regeln einzuschraenken.

Oracle APEX stellt verschiedene Arten von Authorization Schemes bereit, darunter rollenbasierte Pruefungen, PL/SQL-Funktionen und eigene Logik. Authorization wird immer dann ausgewertet, wenn auf eine geschuetzte Komponente zugegriffen wird. Dadurch koennen nur berechtigte Benutzer die entsprechende Funktion sehen oder verwenden.

Durch die zentrale Verwaltung von Zugriffskontrolle in Authorization Schemes koennen Entwickler konsistente Sicherheitsrichtlinien umsetzen und die Wartung von Sicherheitsanforderungen vereinfachen.

## 4.1 Grundlagen

Zuerst sehen wir uns an, was ohne Authorization moeglich ist.

### 4.1.1 Seite ohne Authentication verfuegbar machen

Die Home Page soll fuer oeffentliche Benutzer ohne Login erreichbar sein. Wenn weitergeklickt wird, soll aber die Login-Seite erscheinen.

!!! exercise "Public Page"
    Gehe im Page Designer zu Seite 1 und klicke auf die Seitenebene. Waehle in der Eigenschaften-Spalte im Abschnitt **Security** bei **Authentication** statt des Standards `Page Requires Authentication` den Wert `Page is Public`. Die Eigenschaft **Authorization Scheme** verwenden wir spaeter.

    ![public](assets/authorization/public.png){ style="display:block;margin:auto;" }

Wenn du dich jetzt abmeldest, siehst du Seite 1 ohne Login (als Benutzer **nobody**). Wenn du zu einer anderen Seite navigierst, erscheint die Login-Seite. Die Eigenschaften **Authorization Scheme** und **Authentication** sind fuer viele Objekte in APEX verfuegbar.

### 4.1.2 Menueintrag nur fuer angemeldete Benutzer anzeigen

Der Menueintrag **EmpFacets** zur entsprechenden Seite soll fuer oeffentliche Benutzer nicht sichtbar sein (auf der jetzt oeffentlichen Seite 1). Nach dem Login soll er sichtbar sein, unabhaengig vom konkreten Benutzer.

!!! exercise "Nicht oeffentlich"
    Waehle in **Shared Components** im Abschnitt **Navigation** den Eintrag **Navigation Menu**.

    ![navigationmenu](assets/authorization/navigationmenu.png){ style="display:block;margin:auto;" }

    Aktuell gibt es nur ein Menue, das ebenfalls **Navigation Menu** heisst. Klicke auf den Namen.

    ![navigationmenu2](assets/authorization/navigationmenu2.png){ style="display:block;margin:auto;" }

    Du siehst die drei aktuellen Menueintraege. Da wir die Sichtbarkeit des Eintrags **EmpFacets** aendern wollen, klicke in dieser Zeile auf den Stift.

    ![pencil](assets/authorization/pencil.png){ style="display:block;margin:auto;" }

    Waehle im Abschnitt **Authorization** als **Authorization Scheme** den Wert `Must Not Be Public User`.

    ![notpublic](assets/authorization/notpublic.png){ style="display:block;margin:auto;" }

Wenn du die Anwendung jetzt startest, siehst du die Home Page ohne Login. Den Eintrag Master Detail im Menue siehst du aber nicht. Nach dem Login (ueber den weiterhin sichtbaren Menueintrag Employees) ist der Eintrag im Menue sichtbar.

## 4.2 Authorization Scheme verwenden

Jetzt erstellen wir ein Authorization Scheme und verwenden es an verschiedenen Objekten in der Anwendung.

### 4.2.1 Neue Seite fuer Chefs erstellen

Zuerst fuegen wir zu Demonstrationszwecken eine neue Seite hinzu.

!!! exercise "Seite BossesOnly erstellen"
    Nutze einen der moeglichen Wege, eine neue Seite zu erstellen, und waehle **Blank Page**.

    ![blankpage](assets/authorization/blankpage.png){ style="display:block;margin:auto;" }

    Nenne die Seite `BossesOnly` und gib ihr die **Page Number** `5`.

    ![bossespage](assets/authorization/bossespage.png){ style="display:block;margin:auto;" }

    Fuege der Seite nun eine Region hinzu, indem du mit der rechten Maustaste auf **Body** klickst und **Create Region** waehlst.

    ![createregion](assets/authorization/createregion.png){ style="display:block;margin:auto;" }

    Nenne die neue Region `HintForBosses`. Sie ist vom **Type** `Static Content`. Schreibe in **HTML Code** beliebigen Text, mit oder ohne HTML-Tags. Ich habe `<h1>Only Bosses can see this !!! </h1>` gewaehlt.

    ![static](assets/authorization/static.png){ style="display:block;margin:auto;" }

### 4.2.2 Authorization Scheme erstellen

Im Authorization Scheme, das wir erstellen, pruefen wir, ob der Benutzer **MANAGER** oder **PRESIDENT** ist. Deshalb nennen wir dieses Scheme `IsBoss`.

!!! exercise "Authorization Scheme erstellen"
    Gehe in **Shared Components** im Abschnitt **Security** zu **Authorization Schemes**.

    ![authorizationschemes](assets/authorization/authorizationschemes.png){ style="display:block;margin:auto;" }

   Erstelle ein neues Authorization Scheme.

   ![createauthscheme](assets/authorization/createauthscheme.png){ style="display:block;margin:auto;" }

   Waehle **From Scratch** und klicke auf **Next**.

   ![next](assets/authorization/next.png){ style="display:block;margin:auto;" }

   Gib dem Scheme einen **Name** (hier `IsBoss`) und waehle als **Scheme Type** den Wert `Exists SQL Query`.
   Verwende fuer die **SQL Query** den folgenden Code. Er prueft, ob der angemeldete Benutzer (`:APP_USER`) eine Fuehrungsrolle hat.

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
    *Uebrigens*,<br>
    Bind Variables wie APP_USER oder Page Items koennen an unterschiedlichen Stellen der Anwendung auf verschiedene Arten eingebunden werden:<br>
    - **:MYVARIABLE** - mit Doppelpunkt innerhalb von APEX in SQL und PL/SQL, wie in diesem Beispiel.<br>
    - **v('MYVARIABLE')** - mit den Funktionen v und nv (fuer value und numeric value) in PL/SQL-Code ausserhalb von APEX.<br>
    - **&MYVARIABLE.** - mit Ampersand und Punkt (den Punkt am Ende nicht vergessen) als Substitution String, zum Beispiel in APEX Items (Static Text).<br>
    - **#MYVARIABLE#** - mit Hash-Zeichen als Template Substitution String.<br>

### 4.2.3 Authorization Schemes mit Anwendungsobjekten verwenden

#### 4.2.3.1 Nur Manager sollen die neu erstellte Seite und den passenden Menueintrag sehen

In dieser Uebung verwenden wir das gerade erstellte Authorization Scheme **IsBoss** und weisen es Seite 5 auf Seitenebene zu, indem wir die Authorization der Seite auf dieses Scheme setzen.

!!! exercise "Authorization Scheme am Menueintrag setzen"
    Waehle in **Shared Components** im Abschnitt **Navigation** den Eintrag **Navigation Menu**.

    ![navigationmenu](assets/authorization/navigationmenu.png){ style="display:block;margin:auto;" }

    Klicke auf **Navigation Menu**.

    ![navigationmenu2](assets/authorization/navigationmenu2.png){ style="display:block;margin:auto;" }

    Waehle den Menueintrag **BossesOnly**, indem du auf den Stift klickst.

    ![pencil_boss](assets/authorization/pencil_boss.png){ style="display:block;margin:auto;" }

    Waehle im Abschnitt **Authorization** das **Authorization Scheme** `IsBoss`.

    ![auth_isboss_menu](assets/authorization/auth_isboss_menu.png){ style="display:block;margin:auto;" }

    Es ist besser, auch die passende Seite selbst abzusichern. Gehe zu Seite 5 **BossesOnly** und waehle auf Seitenebene im Abschnitt **Security** das **Authorization Scheme**.

    ![auth_isboss_page.png](assets/authorization/auth_isboss_page.png){ style="display:block;margin:auto;" }

Starte die Anwendung mit verschiedenen Benutzern und pruefe, ob du **BossesOnly** im Menue siehst.

#### 4.2.3.2 Nur privilegierte Benutzer sollen neue Mitarbeitende anlegen koennen

Als Naechstes wollen wir nur Chefs erlauben, neue Mitarbeitende in der Datenbank anzulegen.

!!! exercise "Authorization Scheme am Button setzen"
    Dasselbe, was du im vorherigen Schritt fuer die Seite getan hast, kannst du fuer den **CREATE**-Button auf Seite 2 machen.

    ![auth_isboss_button.png](assets/authorization/auth_isboss_button.png){ style="display:block;margin:auto;" }

Die Form kann von anderen Benutzern weiterhin zum Bearbeiten verwendet werden, aber das Anlegen eines neuen Mitarbeiters ist nur fuer privilegierte Benutzer erreichbar. Um zu verhindern, dass nicht privilegierte Benutzer bestehende Mitarbeitende aendern, kannst du das Authorization Scheme fuer den Apply-Changes-Button in der Form verwenden.

!!! bytheway "Open Door Credentials"
    *Uebrigens*,<br>
    wir koennen das hier testen, weil wir alle Zugangsdaten kennen. In echten Anwendungen ist das normalerweise nicht der Fall. Um die Anwendung trotzdem testen zu koennen, kann das Authentication Scheme **Open Door Credentials** verwendet werden. Damit gibst du beim Login nur einen Benutzernamen ein, ohne Verifikation. Bitte vergiss nicht, das vor dem Go-live wieder zu aendern.

#### 4.2.3.3 Nur privilegierte Benutzer sollen Gehalt und Provision sehen

Im Mitarbeitenden-Report (Seite 2) gibt es zwei finanzielle Spalten (SAL, COMM). Wenn ein nicht privilegierter Benutzer diesen Report oeffnet, sollen sie unterdrueckt werden.

!!! exercise "Authorization Scheme an Report-Spalten setzen"
    Setze erneut das **Authorization Scheme**, diesmal aber fuer die beiden zuvor genannten Report-Spalten auf Seite 2.
    Waehle sie zusammen aus (mit der Ctrl-Taste), damit du die Eigenschaft nur einmal fuer beide aendern musst.

    ![auth_isboss_column.png](assets/authorization/auth_isboss_column.png){ style="display:block;margin:auto;" }

Nicht privilegierte Benutzer koennen den Report jetzt sehen, aber ohne die beiden finanziellen Spalten. Sie koennen Gehalt und Provision weiterhin in der passenden Form sehen, aber jetzt weisst du, wie du das aendern kannst (Items unterdruecken) oder wie du verhinderst, dass sie die Form ueberhaupt erreichen.

### 4.3 Daten abhaengig vom aktuellen Benutzer filtern

Als letzte Uebung in diesem Kapitel wollen wir den Report der Mitarbeitenden so aendern, dass Benutzer nur Mitarbeitende der eigenen Abteilung sehen koennen. Nur der President soll alle Daten sehen.

!!! exercise "Reportdaten nach aktuellem Benutzer filtern"
    Waehle im Page Designer die Report-Region **Employees** (Seite 2) und fuege der Report-Quelle eine **Where Clause** hinzu, die prueft, ob der Benutzer PRESIDENT ist oder ob die ausgewaehlten Daten nur aus derselben Abteilung wie der Benutzer stammen.

    ```sql
      deptno = (select deptno from emp where ename = :APP_USER)
          OR
      'PRESIDENT' = (select job from emp where ename = :APP_USER)
    ```

    ![whereclause.png](assets/authorization/whereclause.png){ style="display:block;margin:auto;" }

Starte den Report mit verschiedenen Benutzern und pruefe das Ergebnis.

!!! bytheway "Row Level Security"
    *Uebrigens*,<br>
    **Virtual Private Database (VPD)** kann eine gute Alternative sein, um Row-Level Security umzusetzen. Der VPD-Kontext kann zu Beginn einer APEX-Session einfach gesetzt werden.
    Auch **Real Application Security (RAS)**, die naechste Generation von VPD, stellt ein deklaratives Modell bereit, das Sicherheitsrichtlinien ermoeglicht, die nicht nur die geschuetzten Business-Objekte umfassen, sondern auch die Principals (Benutzer und Rollen), die Berechtigungen fuer diese Objekte haben.
    Neu mit Database 23.26.2 ist **Oracle Deep Data Security (Deep Sec)**, ein datenbankseitig erzwungenes Data-Authorization-Framework. Es erzwingt feingranulare Zugriffskontrolle auf Zeilen-, Spalten- und Zellenebene mit deklarativem SQL und sichert alle Zugriffspfade auf sensible Daten ueber Enterprise-Anwendungen, Analysewerkzeuge und agentische KI-Systeme hinweg. Deep Sec integriert sich nativ mit externen Identity- und Access-Management-Systemen wie Microsoft Entra ID und OCI IAM, um Endbenutzer-Sicherheitskontexte herzustellen. Dadurch wird jede SQL-Operation gegen die tatsaechliche Identitaet, Rollen und Attribute des anfragenden Benutzers autorisiert.

