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

