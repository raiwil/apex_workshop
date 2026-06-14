# 1. Getting Started and Taking the First Steps

## 1.1 Introduction

!!! presented "Introduction"
    Introduction to the workshop and Oracle Application Express with some [slides](assets/documents/APEX%20Workshop%2024.2.6.pdf){target="_blank"}.

    Good to know for the beginning

    - The app development IDE and end-user IDE are web browsers -> **No client software needed**
    - APEX app definitions are stored as metadata in the database -> **Declarative, no code generation**
    - Page Generation is in the database with only one request -> **Page & Data together** 
    - Show Page & Accept Page: APEX processes every request in two phases: Show Page (page rendering) and Accept Page (processing submitted data, validations, and branching).
    - Session Management: APEX maintains session state to persist user-specific data across page requests, enabling stateful application behavior on top of the stateless HTTP protocol.
    - APEX uniquely spans the app development spectrum, from no-code to low-code to high-control -> **flexible & extensible**
    - Accessible UI for any device -> **responsive apps**
    - ORDS as Listener 
    - Single Database with Multiple Workspaces

    
## 1.2 UI - Overview

!!! presented "UI" 
    The APEX development UI will be shown with its three areas besides App Builder.
    ![4 Main Menu-Topics - left and top](assets/gettingstarted/menu.png){ style="display:block;margin:auto;" }

    **SQL Workshop** is about database objects (Object Browser), SQL statements and scripts, utilities (Data Loading, Data Generation, and others), and RESTful Services (a front end to the database/ORDS capabilities).

    ![SQL Workshop](assets/gettingstarted/sqlworkshop.png){ style="display:block;margin:auto;" }

    The **Gallery** contains sample and starter applications. 

    ![Gallery](assets/gettingstarted/gallery.png){ style="display:block;margin:auto;" }

    The **Data Reporter** is used to create reporting applications based on the data in your schema without the overhead of full application development.

## 1.3 Create Tables EMP & DEPT

<div class="two-columns">

  <div>
    The exercises will use the well-known tables EMP and DEPT, and we will create them from the Sample Datasets. For both tables, sequences and triggers are created for the primary key columns.
Two foreign keys are also created so that employees can only work in departments that exist and employees can only have a manager that exists.
  </div>

  <div>
    <img src="../assets/gettingstarted/empdept.png" alt="empdept" style="display:block;margin:auto;">
  </div>

</div>

We will use **Sample Datasets**, but there are some other options (Quick SQL, Data Generator).

!!! exercise "Create Table (Sample Datasets)"
    In **SQL Workshop**, choose **Sample Datasets** in **Utilities**.

    ![Utilities](assets/gettingstarted/utilities.png){ style="display:block;margin:auto;" }
    
    ![Sample Datasets](assets/gettingstarted/sampledatasets.png){ style="display:block;margin:auto;" }
    
    Click **Install** for EMP/DEPT and select the language (please use English) and the database schema where the tables should be installed. At oracleapex.com, only one schema is possible.
    
    ![Install Dataset](assets/gettingstarted/installdataset.png){ style="display:block;margin:auto;" }
    
    After clicking **Next**, choose **Install Dataset** in the next window and then **Exit** (please do not use the Create Application button).
     
Now the tables are created and can be checked in the **Object Browser**.

!!! bytheway "Dark and Light Mode"
    <div class="two-columns">
       <div>
          *By the way*,<br>
          By clicking your initials at the bottom left, you can easily choose the mode of App Builder: Light Mode, Dark Mode, or a time-dependent automatic mode.
       </div>
    <div>
        ![Mode](assets/btw/darkmode.png){ style="display:block;margin:auto;" }
    </div>
    </div>

## 1.4 Create First Application with the Wizard - MyEmployees

We will use the wizard to create an application with an initial home page and a report/form for the employees. After that, we will add a second page in Page Designer. This will be our starting point for the upcoming exercises. Everything that is created here can be changed later.

!!! exercise "Create first application with the Wizard"

    In the **App Builder** we click on **Create**.

    ![AppBuilder Create](assets/gettingstarted/appbuilder-create.png){ style="display:block;margin:auto;" }

    There are various ways to create an application.

    Just entering a name (`MyEmployees`) and clicking the **Create Application** button would create an empty application. We will click **Use Create App Wizard**. The ID is system-generated and must be unique in an APEX instance.

    ![AppBuilder Create](assets/gettingstarted/createanapplication.png){ style="display:block;margin:auto;" }

    !!! tip "Create App Using Generative AI"
        The entry **Create App Using Generative AI** is only available when you have configured a **Generative AI Service** in the Workspace Utilities. The same applies to the APEX Assistants in the Code Editors.

    We can change the logo and the default appearance. Click **Add Page**.

    ![AppBuilder Create](assets/gettingstarted/createanapplication2.png){ style="display:block;margin:auto;" }

    We can create an empty page or choose a region for the new page. We use a **Form** region.

    ![AppBuilder Create](assets/gettingstarted/addpage.png){ style="display:block;margin:auto;" }

    Name the page `Employee` and choose our newly created table `EMP`. To get a report where we can see and select employees, check the **Include Report** checkbox.

    ![AppBuilder Create](assets/gettingstarted/createformpage.png){ style="display:block;margin:auto;" }

    Keep the rest of the properties in the wizard as they are and click **Create Application**.

    ![AppBuilder Create](assets/gettingstarted/createanapplication2.png){ style="display:block;margin:auto;" }

    After a few seconds, the application is created and you can see the pages. Click **Run Application** to see the result. Username and password are identical to those you chose to connect to the development environment, as the default Authentication Scheme is Oracle APEX Accounts.

    ![AppBuilder Create](assets/gettingstarted/runmyemployees.png){ style="display:block;margin:auto;" }


## 1.5 Add a Page (Faceted Search)

We will now add an additional page to the application to see how this is done without the wizard.

!!! exercise "Add a Faceted Search Page"
    You see the application with the pages already created by the wizard. Click **Create Page**. Later, we will see that this is also possible in Page Designer.

    ![AppBuilder Create](assets/gettingstarted/createpage.png){ style="display:block;margin:auto;" }

    Now choose **Faceted Search** as the component for the new page.

    ![AppBuilder Create](assets/gettingstarted/createpage2.png){ style="display:block;margin:auto;" }

    **Page Number** `4` should be pre-initialized, and we name the page `EmpFacets`. As **Data Source**, use the **Local Database** and our table `EMP`.

    ![AppBuilder Create](assets/gettingstarted/createpage3.png){ style="display:block;margin:auto;" }

    We want to display the results as **Cards** and leave all selected attributes for facets checked before creating the page.

    ![AppBuilder Create](assets/gettingstarted/createpage4.png){ style="display:block;margin:auto;" }

    Finally, we want to see the cards in a **Grid** and select which columns of the table should be shown as the title and body of the cards. `ENAME` and `JOB` should be preselected here.

    ![AppBuilder Create](assets/gettingstarted/createpage5.png){ style="display:block;margin:auto;" }

## 1.6 Page Designer


!!! presented "Page Designer"
    Based on the application we just created, an overview of Page Designer will be given.

    ![AppBuilder Create](assets/gettingstarted/panes.png){ style="display:block;margin:auto;" }

    ![AppBuilder Create](assets/gettingstarted/toolbar.png){  width="70%" style="display:block;margin:auto;" }

    - Pages
    - Regions
    - Items
    - Buttons
    - Properties (Generic / Specific / Sections)
    - Multiselect
    - Layout (Drag & Drop / Properties)
    - Error Marking
    - Help
    - Developer Toolbar

    ![AppBuilder Create](assets/gettingstarted/developertoolbar.png){  width="70%" style="display:block;margin:auto;" }
     
    !!! bytheway "Location of Developer Toolbar"
        <div class="two-columns">
            <div>
                *By the way*,<br>
                You can decide where the Developer Toolbar is shown on the screen.
            </div>
            <div>
                ![Model](assets/btw/developertoolbarlocation.png){ style="display:block;margin:auto;" }
            </div>
        </div>


!!! bytheway "Pane Mode"
    <div class="two-columns">
       <div>
          *By the way*,<br>
          In Page Designer, you sometimes do not use the Layout pane in the middle. Then choosing elements in the left pane and editing them in the right attributes pane might require a lot of mouse movement. It is not only possible to change the size of the panes, you can also choose between two and three panes. Two-Pane Mode hides the middle pane.
       </div>
    <div>
        ![Model](assets/btw/panemode.png){ style="display:block;margin:auto;" }
    </div>
    </div>

!!! bytheway "Multi Select"
    <div class="two-columns">
       <div>
          *By the way*,<br>
          When selecting more than one object in the navigator, you will see blue triangles and blue, empty fields in the property pane. This indicates that there are different values for the selected items. You can still set a value there for all selected objects at once.
       </div>
    <div>
        ![Model](assets/btw/multiselect.png){ style="display:block;margin:auto;" }
    </div>
    </div>
 
!!! bytheway "Conditions"
    <div class="two-columns">
       <div>
          *By the way*,<br>
          When there is a red circle on the lower right side of the icon of an object (button, item, process, ...), that indicates that there is a condition on this object.
       </div>
    <div>
        ![Model](assets/btw/conditions.png){ style="display:block;margin:auto;" }
    </div>
    </div>
 
!!! bytheway "Changed Items"
    <div class="two-columns">
       <div>
          *By the way*,<br>
          Unsaved settings can be identified by the green line in front of an object.
       </div>
    <div>
        ![Model](assets/btw/changeditems.png){ style="display:block;margin:auto;" }
    </div>
    </div>
