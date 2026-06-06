# 3. Authentication

Authentication establishes the identity of each user who accesses your application. Once a user has been identified, the Oracle APEX engine keeps track of each user by setting the value of the built-in substitution string APP_USER.

There are several predefined authentication schemes available:

- **Builder Extension Sign-In** -> Enables you to integrate this application with the APEX development environment.
- **Custom** -> Enables you to create a custom authentication scheme from scratch, giving you complete control over your authentication interface.
- **Database Accounts** -> This authentication scheme requires that a database user (schema) exists in the local database. When using this method, the user name and password of the database account is used to authenticate the user.
- **HTTP Header Variable** -> Authenticate externally, where the username is stored in an HTTP header variable set by the web server.
- **Internal Application Extension** -> Use this scheme for extensions to internal applications.
- **LDAP Directory** -> Authentication of user/password with an authentication request to an LDAP server.
- **No Authentication** -> Adopts the current database user.
- **Open Door Credentials** -> Enables anyone to access your application using a login page that captures a user name.
- **Oracle APEX Accounts** -> Oracle APEX Account Credentials are internal user accounts that are created within and managed in the Oracle APEX user repository. When you use this method, your application is authenticated against these accounts.
- **SAML Sign-In** -> Supports authentication with SAML2 identity providers.
- **Social Sign-In** -> Supports authentication with Google, Facebook, generic OpenID Connect, and generic OAuth2 identity providers.

## 3.1 Custom Authentication

So far, we have authenticated the application users against those users defined locally in APEX. This is not normally done, except perhaps during development. We now create our own authentication and simply define the employees of our table EMP as users of the application, and, And, rather carelessly, we store the password in plain text in the table.

!!! exercise "Build Custom Authentication"
    Boxes with this aqua background represent the exercises. These are demonstrated step by step, and relevant things are explained. After that, or in parallel, there is time to reproduce these steps yourself. 

    First, we add a password column to the table EMP and fill this with the ENAME in lowercase. Run the following to statemets in **SQL Commands** in the **SQL Workshop** (one after the other, running more than one statement at once could be done in **SQL Scripts**)

    ```sql 
      ALTER TABLE EMP ADD password VARCHAR2(20)
    ```
    
    ```sql 
      UPDATE emp SET password = lower(ename)
    ```

    ![sqlcommands](assets/authentication/sqlcommands.png){ style="display:block;margin:auto;" }

    ![runsql](assets/authentication/runsql.png){ style="display:block;margin:auto;" }

    Go to the **Shared Components** of your application and choose **Authentication Schemes** in the **Security** section.

    ![authschemes](assets/authentication/authschemes.png){ style="display:block;margin:auto;" }

    There is already one Scheme, which by the way we've choosen in the Wizard when generating the application. Click **Create**

    ![createscheme](assets/authentication/createscheme.png){ style="display:block;margin:auto;" }

    **Based on one a pre-configured scheme from the gallery** we will build one. Press **Next**

    ![next](assets/authentication/next.png){ style="display:block;margin:auto;" }


    Give the scheme a **Name** (here `MyEmpAuth`) with **Schema Type** `Custom`. The **Authetication Function Name** will my `myauth` and we define this function in the **PL/SQL Code** Editor.

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

    Instead of using the code here, it could be a Stored Function or a function in a package in the database.

    The new scheme is now available, but not the used scheme (**IS Current**). Click on the name of the new scheme.

    ![iscurrent](assets/authentication/iscurrent.png){ style="display:block;margin:auto;" }
    
    Now you can click **Make Current Scheme** to define your new scheme as the used scheme for the application.

    ![makecurrent](assets/authentication/makecurrent.png){ style="display:block;margin:auto;" }    

To test the new scheme, you first had to disconnect your current application session. You can do this on any page of the running application at the top right, where you see the currently connected user. Now you can log in with any of the employee names in the EMP table (using the name in lowercase as the password) and you’ll see the connected user at the top right of the application.


!!! bytheway "Switching Authentication"
    By the way,
    In addition to defining a default Authentication Scheme, Oracle APEX also supports switching authentication schemes at runtime. This allows applications to dynamically choose different authentication mechanisms based on application logic, environment, tenant configuration, or user requirements. As a result, a single application can support multiple authentication strategies while maintaining a consistent user experience.

!!! sampleapp "Sample App Email Authentication"
    <div class="two-columns">
      <div style="flex: 50%;">
           This application illustrates the use of email authentication. Usernames must be email addresses and tokens are emailed to users at login time to verify their identities, instead of using passwords.
      </div>
      <div style="flex: 50%;">
          ![email](assets/samples/emailauth.png){ style="display:block;margin:auto;" }
      </div>
    </div>




