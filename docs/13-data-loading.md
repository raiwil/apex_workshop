# 13. Data Loading

!!! sampleapp "Sample App Data Loading"
    <div class="two-columns">
      <div style="flex: 50%;">
           This application is built on simple EMP and DEPT tables to highlight how developers can define pages to allow end users to upload spreadsheet data into an existing table.
      </div>
      <div style="flex: 50%;">
          ![dataloading](assets/samples/dataloading.png){ style="display:block;margin:auto;" }
      </div>
    </div>

APEX provides powerful built-in capabilities for importing data from external sources into database tables. The Data Loading framework supports common file formats such as CSV, XLSX, XML, and JSON, enabling both developers and end users to load data with minimal effort. During the import process, APEX can automatically detect columns, map source data to database tables, validate values, and report errors.

Behind the scenes, Oracle APEX offers two APIs that can also be used programmatically:

* **APEX Data Loading API** - provides a flexible framework for loading and validating data into database tables.
* **APEX Data Parser API** - extracts and parses data from files such as CSV, Excel, XML, and JSON without requiring a predefined database structure.

!!! exercise "Enable Data Load for an End User"
    Besides the APIs for Data Loading, there is the possibility to define **Data Load Definitions** declaratively in **Shared Components** to enable users to load data via APEX applications. Data Load Definitions are part of **Other Components** in the top-right area. Click it and create the first Data Load Definition **From Scratch**. Name the definition `MyDL`, and use `DEPT` as **Table Name**.

    ![dataload](assets/loading/dataload.png){ style="display:block;margin:auto;" }

    Then you can copy and paste or upload an example of your expected files. Ideally, this should be a file that end users later use to fill in their data (or which is generated elsewhere). Typically, XLSX is used, but here we do it with CSV. Copy this CSV as an example into the wizard.

    ```CSV
      depts;street;zip;city;domain
      50;Hammelsdamm 101;67547;WORMS;PROCUREMENT
      60;Mustorstrasse 2;54290;TRIER;HR
    ```

    ![dataload2](assets/loading/dataload2.png){ style="display:block;margin:auto;" }

    In the next step, you can map your file's content to your destination object. Street is pre-mapped because it has the same name in the CSV and the database. In our example, **First line contains headers** is enabled, and we check the department number as **Primary Key**.
    Click **Create and Add Page** to directly create a new page with a Data Loading region.

    ![dataload3](assets/loading/dataload3.png){ style="display:block;margin:auto;" }

    Use `11` as **Page Number** and name the page `Loading`. As **Data Load**, our definition `MyDL` is used, and we use **Paste Delimited Data** to load data.

    ![createpage](assets/loading/createpage.png){ style="display:block;margin:auto;" }

    There is now a page `Loading`, but it is not visible in the menu, because our chosen way of creation does not add a menu entry.
    Go to **Shared Components**, then to the **Navigation and Search** section, click **Lists**, and then click **Navigation Menu**.
    Click the light blue button **Create List Entry** on the right side. For the new entry, set **List Entry Label** to `Load Data` and **Page** to our just-created page `11`, then click **Create List Entry** again.

    Now an end user can load data into the database through the APEX application. Load an example (the one above) through this page to see what happens.

When **File** is chosen as the source instead of copy and paste, a file upload is generated.

Have a look at the **Data Load Definition** in **Shared Components** again to see additional options of the definition. You can choose to **Append**, **Merge**, or **Replace** when loading data, and you can define what should happen in case of an error.
