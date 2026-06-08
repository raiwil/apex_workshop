# 4. Authorization

Authorization Schemes control which users are allowed to access specific components within an Oracle APEX application. While Authentication determines *who* a user is, Authorization determines *what* that user is allowed to do. Authorization Schemes can be applied to pages, regions, items, buttons, navigation entries, and processes to restrict access based on predefined rules.

Oracle APEX provides several types of Authorization Schemes, including role-based checks, PL/SQL functions, and custom logic. Authorization is evaluated whenever a protected component is accessed, ensuring that only authorized users can view or interact with the corresponding functionality.

By centralizing access control in Authorization Schemes, developers can implement consistent security policies and simplify the maintenance of application security requirements.

## 4.1 Basics 

First we will look what's possible without authorization.

### 4.1.1 Make Page available without Authentication

The homepage should be reachable without login for Public Users, but when clicking along, the login screen should appear.

!!! exercise "Public Page"
    Go to the Page Designer for page 1 and click on the Page Level. In the properties column in the section Security choose `Page is Public` instead of the default `Page Requires Authentication`as **Authentication**. The property **Authorization Scheme** will be used later.

    ![public](assets/authorization/public.png){ style="display:block;margin:auto;" }

Now when you logout, you will see Page 1 without login (as user **nobody**), and when you navigate to another page, the login screen appears. The properties (Authorization Scheme and Authentication) are available for a lot of objects in APEX.

### 4.1.2 Make Menu Entry only visible for logged-in users

The menu item **EmpFacets** to reach the corresponding page should not be visible to public users (on the now public page 1). After a user is logged in, it should be visible regardless of the specific user.

!!! exercise "Not Public"
    In the **Shared Components** choose **Navigation Menu** in the Navigation section.
    
    ![navigationmenu](assets/authorization/navigationmenu.png){ style="display:block;margin:auto;" }

    There is currently only one menu available, which is also named **Navigation Menu**. Click on the name.
    
    ![navigationmenu2](assets/authorization/navigationmenu2.png){ style="display:block;margin:auto;" }

    You see the three current menu entries. As we want to change the visibility of the **EmpFacets** entry click the pencil of this row. 
    
    ![pencil](assets/authorization/pencil.png){ style="display:block;margin:auto;" }

    In the **Authorization** section choose `Must Not Be Public User` as **Authorization Scheme**
    
    ![notpublic](assets/authorization/notpublic.png){ style="display:block;margin:auto;" }

Now, when starting the application, you can see the homepage without logging in. But you won’t see Master Detail in the menu. After logging in (by clicking on the still visible Employees Menu Item), the topic can be seen in the menu.

## 4.2 Use an Authorization Scheme

Now we will create an Authorization Scheme and use this scheme on different objects in the application.

### 4.2.1 Create new page for Bosses

First we add a new page for demonstration purposes.

!!! exercise "Create Page BossesOnly"
    Use one of the possible ways to create a new page and choose **Blank Page**. 
    
    ![blankpage](assets/authorization/blankpage.png){ style="display:block;margin:auto;" }

    We **Name** this Page `BossesOnly` and give it the **Page Number** `5`.
    
    ![bossespage](assets/authorization/bossespage.png){ style="display:block;margin:auto;" }

    Now we add a Region to the page with the right click on **Body** by choosing **Create Region**.
    
    ![createregion](assets/authorization/createregion.png){ style="display:block;margin:auto;" }
   
    **Name** the new region `HintForBosses`. It's of the **Type** `Static Content` and in the **HTML Code** write anything you want (with or without HTML-Tags) as HTML Code. I've choosen `<h1>Only Bosses can see this !!! </h1>`.
    
    ![static](assets/authorization/static.png){ style="display:block;margin:auto;" }

### 4.2.2 Create an Authorization Scheme

In the Authorization Scheme we will create, we will check if the user is a **MANAGER** or **PRESIDENT**. Therefore, we call this scheme `IsBoss`.

!!! exercise "Create Authorization Scheme"
    In the **Shared Components** go to the **Authorization Schemes** in the Security section.
    
    ![authorizationschemes](assets/authorization/authorizationschemes.png){ style="display:block;margin:auto;" }

   Create a new Authorization Scheme ..
 
   ![createauthscheme](assets/authorization/createauthscheme.png){ style="display:block;margin:auto;" }
 
   **From Scratch** and click **Next**.
        
   ![next](assets/authorization/next.png){ style="display:block;margin:auto;" }

   Give the scheme a **Name** (here `IsBoss`) and choose `Exists SQL Query` as **Scheme Type**.
   For the **SQL Query** use the following code, which checks whether the logged-in user (:APP_USER) is in a managerial role.

   ```sql 
      SELECT 1
        FROM emp
       WHERE lower(:APP_USER) = lower(ename)
         AND UPPER(job) IN ('MANAGER','PRESIDENT')
   ```

   Write an error message and let’s validate the rule once per session.

  ![createauthorizationscheme](assets/authorization/createauthorizationscheme.png){ style="display:block;margin:auto;" }
   
Now the Authorization Scheme is ready to be used in the application.

!!! bytheway "Referencing Bind Variables"
    *By the way*,<br>
    Bind-Variables like APP_USER or Page items can be integrated in different ways at various points throughout the application:<br>
    - **:MYVARIABLE** – with a colon inside APEX in SQL & PL/SQL as seen in this example.<br>
    - **v('MYVARIABLE')** – with the function v and nv (for values and numeric value) in PL/SQL Code outside of APEX <br>
    - **&MYVARIABLE.**  – enclosed by an ampersand and a dot (don’t forget this dot at the end) as a substitution string like in APEX Items (Static Text)<br>
    - **#MYVARIABLE#** - enclosed by hash-signs as template substitution strings <br>

### 4.2.3 Use Authentication Scheme with Application Objects

#### 4.2.3.1 Only managers should see the new created page and the corresponding menu entry

In this exercise, we use the **IsBoss** authorization scheme that we just created and assign it to Page 5 at the page level by setting the page's authorization to this scheme.

!!! exercise "Set Authentication Scheme to Menu Entry"
    In the **Shared Components** choose **Navigation Menu** in the Navigation section.
    
    ![navigationmenu](assets/authorization/navigationmenu.png){ style="display:block;margin:auto;" }

    Click **Navigation Menu**. 
    
    ![navigationmenu2](assets/authorization/navigationmenu2.png){ style="display:block;margin:auto;" }
    
    Choose the **BossesOnly** menu entry (by clicking on the pencil).
   
    ![pencil_boss](assets/authorization/pencil_boss.png){ style="display:block;margin:auto;" }

    Choose the **Authorization Scheme** `IsBoss` in the Authorization section

    ![auth_isboss_menu](assets/authorization/auth_isboss_menu.png){ style="display:block;margin:auto;" }

    It’s better to secure the corresponding page as well. So go to BossesOnly page 5 and choose, at page level in the Security section, the **Authorization Scheme**. 

    ![auth_isboss_page.png](assets/authorization/auth_isboss_page.png){ style="display:block;margin:auto;" }
 
Run the application with different users and check if you see BossesOnly in the menu.

#### 4.2.3.2 Only privileged Users should be able to create new Employees

Next, we want to allow only bosses, to create new employees in the database.

!!! exercise "Set Authentication Scheme to Button"
    The same you’ve done for the page in the step before, you can do for the **CREATE** button on Page 2.
    
    ![auth_isboss_button.png](assets/authorization/auth_isboss_button.png){ style="display:block;margin:auto;" }

Now the form is still usable for editing by other users, but to create a new employee, it’s only reachable by privileged users. To prevent them from changing existing employees, you can use the Authorization Scheme for the Apply Changes button on the form.

!!! bytheway "Open Door Credentials"
    *By the way*,<br>
    We can test this here, as we know every credential. However, these are not normally recognised. In order to be able to test the application anyway, the Authentication **Open Door Credentials** can be used. With this, you simply enter a user name when logging in without verification. But please don't forget to change this again before you go live.

#### 4.2.3.3 Only privileged Users should see Salary & Commission

In the employee report (page 2) there are both financial columns (SAL, COM). If a non-privileged user calls this report, it should be suppressed.

!!! exercise "Set Authentication Scheme to Columns in a Report"
    And again, but now for both the previously mentioned report columns on page 2, set the **Authorization Scheme**. 
    Select them together (using the CTRL-Button), so you only need to change the property once for both.
    
    ![auth_isboss_column.png](assets/authorization/auth_isboss_column.png){ style="display:block;margin:auto;" }

Non-privileged users can now see the report, but without the two financial columns. Ok, they can still see salary and commission in the corresponding form, but now you might know, how to change that (suspend the items) or how to prevent that they can reach the form at all.

### 4.3 Filter data depending current user

As the last exercise in this chapter, we want to change the report of the employees so that users can only see employees in their own department. Only the president should see all the data.

!!! exercise "Set Authentication Scheme to Columns in a Report"
    Choose the Report Region Employees in Page Designer (Page 2) and add a **Where Clause** to the report source whcih cheks if the user is PRESIDENT or the data selected is only from the same department as from the user.

    ```sql 
      deptno = (select deptno from emp where ename = :APP_USER) 
          OR
      'PRESIDENT' = (select job from emp where ename = :APP_USER) 
    ```
 
    ![whereclause.png](assets/authorization/whereclause.png){ style="display:block;margin:auto;" }

Run the report with different users and check the result.

!!! bytheway "Row Level Security"
    *By the way*,<br>
    **Virtual Private Database (VPD)** might be a great alternative to fulfill the task of Row-Level Security. The VPD Context can easily be set at the beginning of an APEX session. 
    Also, **Real Application Security (RAS)**, the next generation VPD provides a declarative model that enables security policies that encompass not only the business objects being protected but also the principals (users and roles) that have permissions to operate on those business objects. 
    And new with the Database 23.26.2 there is **Oracle Deep Data Security (Deep Sec)**, which is a database-enforced data authorization framework in the database. It enforces fine-grained access control at the row, column, and cell levels using declarative SQL, securing all access paths to sensitive data across enterprise applications, analytics tools, and agentic AI systems. Deep Sec integrates natively with external identity and access management systems (like Microsoft Entra ID and OCI IAM) to establish end-user security contexts, which ensures that every SQL operation is authorized against the actual requesting user's identity, roles, and attributes.
