# 1. Getting started and taking the first steps

## 1.1 Introduction

!!! presented "Introduction with Slides"
    Introduction to Workshop & Oracle Application Express with some [Slides](assets/documents/APEX%20Workshop%2024.2.6.pdf){target="_blank"}.
    
## 1.2 UI - Overview

!!! presented "UI" 
    APEX Development UI will be shown with its 3 other parts than App Builder
    ![4 Main Menu-Topics - left and top](assets/gettingstarted/menu.png){ style="display:block;margin:auto;" }

    **SQL Workshop** is about database objects (Object Browser), SQL Statements and Scripts, Utilities (Data Loading, Data Generation and others) and RESTful Services (just a frontend to the Database/ORDS capabilities)

    ![SQL Workshop](assets/gettingstarted/sqlworkshop.png){ style="display:block;margin:auto;" }

    The **Gallery** contains sample and starter applications. 

    ![Gallery](assets/gettingstarted/gallery.png){ style="display:block;margin:auto;" }

    The **Data Reporter** is to create reporting applications based on the data in your schema without the overhead of full application development.

## 1.3 Create Tables EMP & DEPT

The exercises will use the well-known tables EMP and DEPT, and we will create them out of the Sample Datasets. For both tables, sequences and triggers are created for the primary key columns. 
Two foreign keys are also created so that employees can only work in departments that exist and that employees can only have a boss that exists.

![Datamodel](assets/gettingstarted/empdept.png){ style="display:block;margin:auto;" }

We will use **Sample Datasets**, but there are some other options (Quick SQL, Data Generator).

!!! exercise "Create Table (Sample Datasets)"
    In the **SQL Workshop** we choose the **Sample Datasets** in the **Utilities**

    ![Utilities](assets/gettingstarted/utilities.png){ style="display:block;margin:auto;" }
    
    ![Sample Datasets](assets/gettingstarted/sampledatasets.png){ style="display:block;margin:auto;" }
    
    There we click on **Install** for EMP/DEPT and select the language (please use English) and the database schema to install the tables. (At oracleapex.com there's only one schema possible).
    
    ![Install Dataset](assets/gettingstarted/installdataset.png){ style="display:block;margin:auto;" }
    
    After clicking **Next** we just choose **Install Dataset** in the next window and then **Exit** (Please don't use the Create Application Button). 
     
Now the tables are created and this could be checked in the **Object Browser**.

!!! bytheway "Dark and Light Mode"
    <div class="two-columns">
       <div>
          *By the way*,<br>
          clicking on your initial on the bottem left you can easily choose the mode of the application builder between Light and Dark Mode or a time-dependent automatic mode.
       </div>
    <div>
        ![Model](assets/btw/darkmode.png){ style="display:block;margin:auto;" }
    </div>
    </div>

## 1.4 Create First Application with the Wizard - MyEmployees

We will use the wizard to create an application with an initial homepage and a report/form for the employees. After that, we will add a second page in Page Designer. This will be our starting point for the upcoming exercises. Everything that’s created here can be changed later.
In the **App Builder** we click on **Create**.

![AppBuilder Create](assets/gettingstarted/appbuilder-create.png){ style="display:block;margin:auto;" }

There are various ways to create an application.

Just giving a name (MyEmployees) and clicking on the Create Application button would create an empty application. We will click on Use Create App Wizard. The ID is System Generated and must be unique in an APEX Instance.

## 1.5 Add a page (Faceted Search)

## 1.6 APEX Application Builder

Petra ist toll