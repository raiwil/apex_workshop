# 3. Authentifizierung

Authentifizierung stellt fest, welche Benutzerin oder welcher Benutzer auf eine Anwendung zugreift. Sobald ein Benutzer identifiziert wurde, verfolgt die Oracle APEX Engine diesen Benutzer über den Wert der eingebauten Substitutionszeichenfolge `APP_USER`.

Es gibt mehrere vordefinierte Authentifizierungsschemata:

- **Builder Extension Sign-In** -> Ermöglicht die Integration dieser Anwendung mit der APEX-Entwicklungsumgebung.
- **Custom** -> Ermöglicht das Erstellen eines eigenen Authentifizierungsschemas von Grund auf. Damit hast du die vollständige Kontrolle über die Authentifizierungslogik.
- **Database Accounts** -> Dieses Authentifizierungsschema setzt voraus, dass ein Datenbankbenutzer bzw. Schema in der lokalen Datenbank existiert. Benutzername und Passwort dieses Datenbankkontos werden für die Anmeldung verwendet.
- **HTTP Header Variable** -> Externe Authentifizierung, bei der der Benutzername in einer HTTP-Header-Variable steht, die vom Webserver gesetzt wird.
- **Internal Application Extension** -> Verwend dieses Schema für Erweiterungen interner Anwendungen.
- **LDAP Directory** -> Authentifizierung von Benutzername und Passwort über eine Anfrage an einen LDAP-Server.
- **No Authentication** -> Verwendet den aktuellen Datenbankbenutzer.
- **Open Door Credentials** -> Ermöglicht beliebigen Zugriff auf die Anwendung über eine Login-Seite, die einen Benutzernamen erfasst.
- **Oracle APEX Accounts** -> Oracle APEX Account Credentials sind interne Benutzerkonten, die im APEX-Benutzerrepository erstellt und verwaltet werden. Bei dieser Methode authentifiziert sich die Anwendung gegen diese Konten.
- **SAML Sign-In** -> Unterstützt Authentifizierung mit SAML2 Identity Providern.
- **Social Sign-In** -> Unterstützt Authentifizierung mit Google, Facebook, generischem OpenID Connect und generischem OAuth2.

## 3.1 Eigene Authentifizierung

Bisher haben wir die Benutzerinnen und Benutzer der Anwendung gegen lokal in APEX definierte Benutzer authentifiziert. Das ist normalerweise nicht üblich, außer vielleicht in der Entwicklung. Jetzt erstellen wir eine eigene Authentifizierung und definieren einfach die Mitarbeitenden aus unserer Tabelle `EMP` als Benutzer der Anwendung. Grob fahrlässig speichern wir das Passwort dabei im Klartext in der Tabelle.

!!! exercise "Eigene Authentifizierung bauen"
    Boxen mit diesem türkisfarbenen Hintergrund enthalten die Übungen. Sie werden Schritt für Schritt demonstriert, und relevante Details werden erklärt. Danach, oder parallel dazu, ist Zeit, die Schritte selbst nachzuvollziehen.

    Zuerst fügen wir der Tabelle `EMP` eine Passwortspalte hinzu und füllen sie mit `ENAME` in Kleinbuchstaben. Führe folgende Statements in **SQL Commands** im **SQL Workshop** aus, jeweils nacheinander. Mehrere Statements auf einmal können in **SQL Scripts** ausgeführt werden.

    ```sql
      ALTER TABLE EMP ADD password VARCHAR2(20)
    ```

    ```sql
      UPDATE emp SET password = lower(ename)
    ```

    ![sqlcommands](assets/authentication/sqlcommands.png){ style="display:block;margin:auto;" }

    ![runsql](assets/authentication/runsql.png){ style="display:block;margin:auto;" }

    Wechseln Sie in die **Shared Components** Ihrer Anwendung und wählen Sie im Bereich **Security** die **Authentication Schemes**.

    ![authschemes](assets/authentication/authschemes.png){ style="display:block;margin:auto;" }

    Es gibt bereits ein Schema, das wir übrigens im Wizard beim Erzeugen der Anwendung ausgewählt haben. Klicke auf **Create**.

    ![createscheme](assets/authentication/createscheme.png){ style="display:block;margin:auto;" }

    Wähle **Based on a pre-configured scheme from the gallery** und klicke auf **Next**.

    ![next](assets/authentication/next.png){ style="display:block;margin:auto;" }

    Geib dem Schema einen **Name** (hier `MyEmpAuth`) mit **Scheme Type** `Custom`. Der **Authentication Function Name** lautet `myauth`, und diese Funktion definieren wir im Editor **PL/SQL Code**.

    ```sql
        FUNCTION MyAuth (
           p_username  IN  VARCHAR2,
           p_password  IN  VARCHAR2
          ) RETURN BOOLEAN IS
             l_value                NUMBER;
             l_returnvalue          BOOLEAN;
        BEGIN
           SELECT 1
             INTO l_value
             FROM emp
            WHERE lower(ename) = lower(p_username)
              AND password = p_password;

            l_returnvalue := l_value = 1;
            RETURN l_returnvalue;

        EXCEPTION
           WHEN NO_DATA_FOUND THEN
               RAISE_APPLICATION_ERROR(-20010,'No valid combination for Username/Password');
        END;
    ```

    ![authscheme](assets/authentication/authscheme.png){ style="display:block;margin:auto;" }

    Statt den Code direkt hier zu verwenden, könnte auch eine gespeicherte Funktion oder eine Funktion in einem Datenbank-Package genutzt werden.

    Das neue Schema ist nun vorhanden, aber noch nicht aktiv (**Is Current**). Klicke auf den Namen des neuen Schemas.

    ![iscurrent](assets/authentication/iscurrent.png){ style="display:block;margin:auto;" }

    Klicke nun auf **Make Current Scheme**, um das neue Schema als aktives Schema der Anwendung festzulegen.

    ![makecurrent](assets/authentication/makecurrent.png){ style="display:block;margin:auto;" }

Um das neue Schema zu testen, muß zuerst die aktuelle Anwendungssitzung beendet werden. Das geht auf jeder Seite der laufenden Anwendung oben rechts, wo der aktuell angemeldete Benutzer angezeigt wird. Danach kann man sich mit einem beliebigen Mitarbeiternamen aus der Tabelle `EMP` anmelden. Als Passwort wird der Name des Users Kleinbuchstaben verwendet. Anschließend sieht man den angemeldeten Benutzer oben rechts in der Anwendung.

!!! bytheway "Authentifizierung wechseln"
    *By the way*,<br>
    Neben der Definition eines Standard-Authentifizierungsschemas unterstützt Oracle APEX auch den Wechsel von Authentifizierungsschemata zur Laufzeit. Dadurch kann eine Anwendung je nach Anwendungslogik, Umgebung, Mandantenkonfiguration oder Benutzeranforderung dynamisch unterschiedliche Authentifizierungsmechanismen auswählen. Eine einzelne Anwendung kann so mehrere Authentifizierungsstrategien unterstützen und trotzdem eine konsistente Benutzererfahrung bieten.

!!! sampleapp "Sample App Email Authentication"
    <div class="two-columns">
      <div style="flex: 50%;">
           Diese Anwendung zeigt die Verwendung von E-Mail-Authentifizierung. Benutzernamen müssen E-Mail-Adressen sein, und Login-Token werden per E-Mail an Benutzer gesendet, um ihre Identität zu bestätigen, statt Passwörter zu verwenden.
      </div>
      <div style="flex: 50%;">
          ![email](assets/samples/emailauth.png){ style="display:block;margin:auto;" }
      </div>
    </div>
