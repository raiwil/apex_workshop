# 2. Application Customization

## 2.1 Links & Items 

### 2.1.1 Navigation - Link from Report to Form

!!! presented "Action  Menu & Forms" 
    - Where to manipulate the Action Menu of the Interactive Report
    - How a form works
        - Primary Key
        - Pre-Rendering
        - Process Form 
        - Buttons with Conditions

To see how linked navigation works in APEX, we will add our own to the automatically created one. We want to make the name of the employee clickable (on page 2 - Employees) and navigate to the employee form (page 3), like with the pencil.

!!! exercise "Add a navigation link"
    
    In Page Designer, search for column **ENAME** in Region **Employees** (on page 2). In the properties on the right side, choose   `Link` as **Type**. In the Link-Section click on **No Link defined**                       
    
    ![column](assets/application-customization/enamecolumn.png){ style="display:block;margin:auto;" }

    The target is the Form Page `3`. There, we set the primary key (`P3_EMPNO`) with the value of the chosen row in the report (`#EMPNO#`).

    ![targemapping](assets/application-customization/target.png){ style="display:block;margin:auto;" }

When you now run the application, you’ll see that the employee names are clickable, and they navigate us to the corresponding form page like the pencil.

### 2.1.2 Change Date Formats

In this exercise, we will change the display format of the HIREDATE in the form and the report.
Depending on the environment, the data format might not be one you like. It’s possible to set a default format for the application, which we haven’t done so far. 

!!! exercise "Change Data Format"

    Choose Column **HIREDATE** in Region **Employees** on Page 2. In the Appearance section set **Format Mask** to `DD.MM.YYYY`.

    ![targemapping](assets/application-customization/data_report.png){ style="display:block;margin:auto;" }

    Do the same in the Form Page (3) at item **P3_HIREDATE**. In the Appearance set **Format Mask** to `DD.MM.YYYY`.

    ![targemapping](assets/application-customization/data_form.png){ style="display:block;margin:auto;" }

Now the format of the date should look like the typical German format. We’ve here shown the setting of a format for a single column or item. It’s possible to set a default format for the application which is used when no dedicated format is chosen.
In the **Shared Components** (the three geometric shapes) you’ll find the **Globalization Attributes** in the **Globalization** section. There's an item Application Data Format where you can set the default for the application.
	 
### 2.1.3 Change Item from Select List to Radio Group

On page 3, the item **P3_DEPTNO** is set as a `Select List`. We’ll change this now to have a `Radio Group` instead.

![lov](assets/application-customization/lov_department.png){ style="display:block;margin:auto;" }

!!! exercise "Change Item Type"

    Via the Developer Toolbar, you can quickly reach the properties of an item. Click on **Quick Edit** and then direct onto the item. Clicking on the spanner will bring you to the Live Template Options. If you are in the Page Designer, you don't have to go through the Developer Toolbar. This is just an effective way for developers to jump from the running application to the right place in the Page Designer.

    ![quickedit](assets/application-customization/quickedit.png){ style="display:block;margin:auto;" }

    When **P3_DEPTNO** in Page Designer is selected, choose `Radio Group` instead of `Select List` as **Type**.
    In the List of Values section suppress the **Display of Extra Values** and the **Display Null Value** property.

    ![radiogroup](assets/application-customization/radiogroup.png){ style="display:block;margin:auto;" }

<div class="two-columns">
  <div>
    Running the application now should show the department in the Employees Form as Radio Group
  </div>
  <div>
    <img src="../assets/application-customization/ui-radiogroup.png" alt="ui-radiogroup" style="display:block;margin:auto;">
  </div>
</div>

  
!!! tip "Item Types"

    <div class="two-columns">

      <div style="flex: 30%;">
          Marking the **Type** property and choosing the **Help** Tab in the middle pane, you get a short overview about the available predefined item types.
      </div>

      <div style="flex: 70%;">
          ![contexthelp](assets/application-customization/contexthelp.png){ style="display:block;margin:auto;" }
      </div>

    </div>

### 2.1.4 Change Modal Dialog

!!! exercise "Change Modal Dialog"
    
    The drawing behavior of the modal window can be changed at the page level. Click on page 3 in the Page Designer at the top left. In the Appearance section of the properties you can change the **Dialog Template** from `Drawer` to `Modal Dialog` which centers the modal window while Drawer inserts it on the right side. When testing that, potentially you had to Shift-Reload to see the effect of changing the property.

    It is possible to specify the page size for a modal window, but it is also possible to allow the end user to customise the size of the modal window.

    ![modaldialog](assets/application-customization/modaldialog.png){ style="display:block;margin:auto;" }



### 2.1.5 Add a List of Values to the Job

The job item in the form is currently a simple Text Field. Now we add a List of Values to this item to let the users select a job from existing jobs in a Select List.

!!! exercise "Add a List of Values"
    Choose item **P3_JOB** on page 3 (via Page Designer or Quick Edit) und set `Select List` as Item **Type**. Immediately, some red color appears for errors. Not only the exclamation mark at the top but also the item in the tree-view and the layout. Click on the exclamation mark, and at the error you want to fix (which is here only one thing)

    ![lov_error](assets/application-customization/lov_error.png){ style="display:block;margin:auto;" }

    Choose `SQL Query` as the **Type** for the List of Values. As **SQL Query** choose the Code Snippet and write `no job assigned` as **Null Display Value**

    ```sql
       SELECT distinct job as d, job as r 
         FROM emp
        WHERE job IS NOT NULL
        ORDER BY 1
    ```
     ![lov_query](assets/application-customization/lov_query.png){ style="display:block;margin:auto;" }

    There are two columns in a List of Values Query: one is the Display Column, and the other is the Return Column. Look in the context help to see an example.

When using such a List of Values more than once, it’s better to implement them as a Shared Component and just refer to it here.

<div class="two-columns">
  <div>
    Now, when running the application, there should be a Select List at the job item in which you can choose from any existing job in the database, and the **Null Display Value** is named *no job assigned*
  </div>
  <div>
    <img src="../assets/application-customization/lov_ui.png" alt="lov_ui" style="display:block;margin:auto;">
  </div>
</div>

## 2.2 Behaviour depending on values

In this exercise, the Form will be changed to reflect a value-dependent behavior. Our goal is to enforce that only SALESMAN can get a commission (column `comm` in the table).

### 2.2.1 Validations

First, we will add a validation that checks that item P3_COMM (the commission) is null when the job is different from SALESMAN.  In our example data, the jobs are stored in uppercase in the database and searches in the database are by default case-sensitive, so we use here SALESMAN in uppercase too.

!!! exercise "Validate Commission"

     <div class="two-columns">
      <div style="flex: 50%;">
          On Page 3 click right on item P3_COMM and choose Create Validation.
      </div>
      <div style="flex: 50%;">
          ![createvalidation](assets/application-customization/createvalidation.png){ style="display:block;margin:auto;" }
      </div>
    </div>

   The validation (named New by default) is marked red as there are mandatory properties not set at the beginning. These are marked in red too. We **Name** the validation `check_commission`.
   As “IS NULL” does not exist as a **Type** for the validation, we choose `Expression`. As Language, we use `PL/SQL` and `:P3_COMM IS NULL` will be our **PL/SQL Expression**. (Don’t forget the colon to reference the page item).
   
   Additionally, we write an **Error Message**, and we can choose where to display this message (**Display Location**).
   
   Now we add a condition (**Server-side Condition**) for when this validation should happen. For that we choose `Item != Value` as **Type**, `P3_JOB`as **Item** and `SALESMAN` as **VALUE**.

   ![validation](assets/application-customization/validation.png){ style="display:block;margin:auto;" }

Try to give a non-Salesman a commission and see what happens. 
But this might not the perfect approach in this case ... 

### 2.2.2 Conditions

Now we try another way, where we ensure, that no commission can be entered in the form when the job of the employee is not SALESMAN.

!!! exercise "Conditional Read Only"
    First, we delete the validation from the preceding exercise by right-clicking it and choosing **Delete**.  Alternatively, you can simply select an object and press DEL. Configure the **Read Only** Section of the Item **P3_COMM** with the same settings as before the Server-side Condition for the validation. 
    
    ![conditionalreadonly](assets/application-customization/conditionalreadonly.png){ style="display:block;margin:auto;" }

    As an alternative, you can do the same settings in the Server-side Condition section, which hides the item conditionally.

Open the form for different employees and see how the item behaves.
But again, this might not the perfect approach in this case ... 


### 2.2.3 Dynamic Actions

When the job is changed in the form, the item for the commission will not change. In the third approach, we now will hide and show the item depending on the current value of the job dynamically on the client, without interaction with the server. This requires JavaScript. But **Dynamic Action** handle the JavaScript generation for you, so you do not need to write the code yourself.

!!! exercise "Dynamic Actions"
    
    <div class="two-columns">
      <div style="flex: 50%;">
          Delete the Read Only condition from before. This can be done by just choosing `– Select –` as **Type**
      </div>
      <div style="flex: 50%;">
          ![select](assets/application-customization/select.png){ style="display:block;margin:auto;" }
      </div>
    </div>
    <div class="two-columns">
      <div style="flex: 50%;">
          Right-click **P3_JOB** (we want to create something happens, when the job is changed) and choose **Create Dynamic Action**.
      </div>
      <div style="flex: 50%;">
          ![createda](assets/application-customization/createda.png){ style="display:block;margin:auto;" }
      </div>
    </div>
    
    Give the action a **Name** (`JobChanged`). The **When** is preset due to the way of creation: It's the `Change` of the **ITEM** `P3_JOB`. 
    Now we have two cases: the job becomes SALESMAN, or it becomes something else. We could now place two actions behind the event, each checking which case applies and handling it accordingly. Or we could check the case already in the event and then go down either a TRUE or FALSE branch. In the current case, this is the better approach, since the check only has to happen once.
    Fot that we no use a **Client-side Condition** (we don't want a roundtrip to the database) where we define that **Item* `P3_Job` should be `SALESMAN`

    ![da](assets/application-customization/da.png){ style="display:block;margin:auto;" }

    Click on the pre-initiated True-Action **Show** (which is in red due to missing properties). Due to the condition in the Dynamic Event and the fact, that we are in the True Branch, the **Action** `Show` is the right one and we name this action `ShowComm`, as the **Affected Element** is **Item** P3_COMM. There's a property **Fire on Initialization** activated, so that there's no need for some extra steps to show the item when loading the page (and the job is SALESMAN).

    ![action](assets/application-customization/action.png){ style="display:block;margin:auto;" }

    <div class="two-columns">
      <div style="flex: 50%;">
           Now we need the opposite action the hide the commission, when the job is not SALESMAN. We right click on the ShowComm-True Event and create the Opposite Action (which hides the Item when the job is changed to something different as SALESMAN) using the menu option **Create Opposite Action** .
      </div>
      <div style="flex: 50%;">
          ![opposite](assets/application-customization/opposite.png){ style="display:block;margin:auto;" }
      </div>
    </div>

    Just rename the created False Action to `HideComm` and we are ready
   
Now play around and watch the commission item in the form when changing the job.
What has not yet been considered is how to handle a possibly existing commission value.

!!! bytheway "Dynamic Action Event Input"
    *By the way*,<br>
    In 24.1, a Dynamic Action event called Input was introduced. The event fires every time the value of an element changes. This differs from the Change event used in the exercises, which only fires after the user finishes the input—for example, by pressing Enter or selecting a value from a list of values.


!!! sampleapp "Sample App Dynamic Actions"
    <div class="two-columns">
      <div style="flex: 50%;">
           This application demonstrates a number of different dynamic actions that can be incorporated into an application. These declarative client-side behaviors include simple examples for manipulating the display of components, style examples for changing the appearance of components, and server-side examples which interact with the database.
      </div>
      <div style="flex: 50%;">
          ![da](assets/samples/da.png){ style="display:block;margin:auto;" }
      </div>
    </div>

!!! bytheway "Trigger Actions"
    *By the way*,<br>
    in 26.1 Trigger Actions are introduced. These provide a simplified way to define reactive behavior in Oracle APEX. Instead of creating a full Dynamic Action with events, conditions, and actions, a Trigger Action allows developers to declaratively specify what should happen when a particular event occurs. They are designed to cover common client-side interaction patterns with less configuration and improved maintainability. Trigger Actions help reduce complexity while still enabling responsive and interactive user interfaces.
   


## 2.3 Session State

Client-side Conditions evaluate item values directly in the browser using JavaScript. Since the evaluation takes place on the client, no request needs to be sent to the server. This makes client-side conditions very responsive and efficient for controlling the user interface, for example showing or hiding regions, enabling or disabling items, or validating user input while typing.

In contrast, Server-side Conditions evaluate values stored in the APEX Session State. Session State is maintained on the database server and contains the current values of page items for a specific user session. Because the evaluation occurs on the server, Oracle APEX may need to perform a request to the database before the condition can be evaluated.

Oracle APEX automatically manages Session State for each user session. Developers can access Session State values from any page within the application, making it possible to share information across pages and processes. However, it is important to understand that a value entered by the user is initially only available in the browser. It is not automatically stored in Session State.

To make a value available on the server, it must be submitted. This can be done by submitting the entire page or by submitting only selected page items using the Page Items to Submit property of a Dynamic Action, region, or process. Once submitted, the value is stored in Session State and can be referenced by server-side conditions, computations, validations, processes, and PL/SQL code.

Understanding the difference between browser values and Session State is essential when developing APEX applications, as it explains why a value may be visible on the page but not yet available to server-side logic.

We will experience this firsthand in the chapter on **charts**.

## 2.4 Computations, Processes & Branches

   
!!! presented "Computations, Processes & Branches"

    <div class="two-columns">

      <div>
     
      **Computations**
      
      **Processes**

      - Invoke API - Call Stored Code declarative
      - Human Tasks – Approval Processes
      - Execute Code – PL/SQL
      - Data Loading 
      - Send E-Mail
      - Execution Chain – order of execution (in the background possible)

      **Branches (Submit Page Sequences)**
      </div>

      <div>
          ![targemapping](assets/application-customization/processes.png){ style="display:block;margin:auto;" }
      </div>

    </div>

!!! tip "LiveLab"
    There's an Oracle LiveLab **Implement custom authentication in APEX** available.
    [Click here](https://livelabs.oracle.com/ords/r/dbpm/livelabs/view-workshop?wid=3315){target="_blank"}

## 2.5 User Interface Attributes

As a brief preview of the Chapter **Layout**, we will now adjust the menu of our application to make the following exercises easier to follow and more visually intuitive.

User interface attributes include settings that control the appearance of an application's user interface. An important aspect here is the navigation menus and their placement. These settings form the standard for the application, but can be deviated from on individual pages.

There are several possibilities for presenting the menu of an application. Our first app uses a sidebar for the navigation. We change this to a Top-Navigation

!!! exercise "Change Menu from Side to Top"
    
    Look for the **Edit Application Definition** Button to reach a specific part of the Shared Components

    ![appdefinition](assets/application-customization/appdefinition.png){ style="display:block;margin:auto;" }

    Go to the **User Interface** section and change **Position** for **Navigation Menu** from `Side` to `Top`-

    ![menu](assets/application-customization/menu.png){ style="display:block;margin:auto;" }

    <div class="two-columns">
      <div>
        Run the application and see the new menu.
      </div>
      <div>
              ![menu_app](assets/application-customization/menu_app.png){ style="display:block;margin:auto;" }
      </div>

    </div>







