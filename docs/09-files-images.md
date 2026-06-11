# 9. Files & Images

!!! sampleapp "Sample App File Upload and Download"
    <div class="two-columns">
      <div style="flex: 50%;">
           Learn how to create Oracle APEX applications that include file upload and download. Upload files using dialogs as well as dedicated pages. See how to download files stored in Oracle database BLOB columns within database tables. Specifically see how to produce file download links in interactive reports, classic reports, forms, and dynamically created HTML content.
      </div>
      <div style="flex: 50%;">
          ![files](assets/samples/files.png){ style="display:block;margin:auto;" }
      </div>
    </div>

!!! sampleapp "Sample App Image Support for Rich Text Editor"
    <div class="two-columns">
      <div style="flex: 50%;">
           This application illustrates how to augment Rich Text Editor content items to allow for inline images.
      </div>
      <div style="flex: 50%;">
          ![image](assets/samples/image.png){ style="display:block;margin:auto;" }
      </div>
    </div>

It’s quite easy to up- and download files with an APEX Application. And we will do both.

## 9.1 Upload a file in a form

!!! exercise "Define REST Data Sourcen"
    First, we expand the table emp with three columns to store files their metadata (the name and the mimetype). Additionally, there’s a BLOB for pictures, which we will use later. Run this in **SQL Commands**:
    
    ```sql 
         ALTER TABLE EMP ADD (  
            document          BLOB,
            document_mimetype VARCHAR2(100),
            document_name     VARCHAR2(40),
            image             BLOB,
            image_mimetype    VARCHAR2(100),
            image_name        VARCHAR2(40))
    ```

    ![altertable](assets/files/altertable.png){ style="display:block;margin:auto;" }

    In Page Designer, we navigate to our form page for the employees (page 3).  We’ve learned that we can synchronize the form with the database table, but we just want to add one of the newly added columns. Therefor we just **Create Page Item** in the region employee.
    
    We **Name** the new item `P3_DOCUMENT`, set the **Type** to `File Upload`. Set a **Label** and in the Display section you can choose the style how the file browse item should be displayed (I've used `Block Dropzone` as **Display As** and set a **Dropzone Title**).

    ![fileinform](assets/files/fileinform.png){ style="display:block;margin:auto;" }  

     Files can be (temporarily) stored in a central table, but we want to store them in our just-created BLOB column, so as **Type** we use `BLOB column specified in Ite Source attribute` which is a really long value for a property. And here we see, why we’ve created the columns `DOCUMENT_MIMETYPE` & `DOCUMENT_NAME`. They can automatically store this metadata when set in the appropriate properties **MIME Type Column** and **Filename Column**. And do not forget the hint from the long value above and define the source for the file, which is in our case in the **Form Region** `Employee` the **Column** `Document` which is of the **Data Type** `BLOB`

    ![blobcolumn](assets/files/blobcolumn.png){ style="display:block;margin:auto;" }

In the application, you can now upload a file for an employee.

## 9.2 Download Files

In the form the download of the files is already available. It's based on the properties **Display Download Link**, **Download Link Text** (which means 'Download' when empty).

Now we want to add the download possibility to the report on page 2. 

!!! exercise "Download Files in Report"
    We need In the Employees Report Region (page 2) a new report column for the documents. a BLOB itself can't be displayed itself, but we can use a numeric value to decide if there's a document or not (0 or not 0) and display a download link when theres a document. So the size of the BLOB (0=no file or not 0 when there's a file) is ideal for that. For this we change the **Type** in the section **Source** from `Table/View` to `SQL Query`. A Select-Statement for the table EMP with the WHERE-Condition we added in the chapter Autorization will be created.

    ![sourcetype](assets/files/sourcetype.png){ style="display:block;margin:auto;" }

    For the report itself we just need to know, if there’s a document or not, so we override the line **document**, with the following Code Snippet. With the length we know, if there’s a file or not.
    
    ```sql
        dbms_lob.getlength(document) as document,
    ```

    ![replace_document](assets/files/replace_document.png){ style="display:block;margin:auto;" }
    
    Select to **DOCUMENT** column in the left pane, set the **Type** to `Download BLOB` and reference in the section **BLOB Attributes** `EMP` as **Table Name**, `DOCUMENT` as **BLOB Column** and `EMPNO` as **Primary Key Column 1**. 
    And set the **Mime Type Column** and **Filename Column** with our database columns `DOCUMENT_MIMETYPE` and `DOCUMENT_NAME`, so that the browser is later able to know, what to do with the file.
    Last we can define a display text for the download. We reference to name of the file, which is stored in the column DOCUMENT_NAME (enclosed by hashes) - `#DOCUMENT_NAME#` - as **Download Text** in the section Appearance.

    ![downloadblob](assets/files/downloadblob.png){ style="display:block;margin:auto;" }

    Depending on the type of report (here Interactive Report), you need to make the new column visible in the Actions Menu under Columns in the Shuttle.
    
    ![actionmenu](assets/files/actionmenu.png){ width="50%" style="display:block;margin:auto;" }

Now you see in the report the clickable filenames of the uploaded documents to downlod them. 

![filedownload](assets/files/filedownload.png){ style="display:block;margin:auto;" }

!!! bytheway "Save Report for Interactive Grid"
    *By the way*,<br>
    After adding the document to the report you might recognize, that the column is later (in a new session) not visible again. There's a default view (configuration) how an Interactive Report is shown. As developer you can go to the **Actions** menu to **Reports** and their click on **Save Report**. Then you can save the report as an additional view (**As Named Report**) or **As Default Report Settings**.


## 9.3 Image Upload & Display

Now we do the same for pictures, which are just files that can be directly shown in the UI. So it is very similar to do. Sure can you store even pictures in our document column, but we want to display these.

!!! exercise "Add Image Upload & to the form"
    In Page Designer, we navigate again to our form page for the employees (page 3). Therefor we just **Create Page Item** in the region **employee**.
    We **Name** it `P3_IMAGE`, set the **Type** to `Image Upload` and check the **Label**. 
    There are different ways to **Display** an Image here. We choose the `Icon Dropzone`for **Display As**. Set the **Preview Size** to `Medium`.

    ![imageupload](assets/files/imageupload.png){ style="display:block;margin:auto;" }

    As before with the documents we choose `BLOB column specified in Item Source attribute`as **Type** for the storage and the appropiate column names for **MIME Type Column** and **Filename Column**. Now we had to define the source for the file, which is in our case the **Column** `Image` in the **Form Region** `Employee` of the **Data Type** `BLOB`.

    ![imageupload2](assets/files/imageupload2.png){ style="display:block;margin:auto;" }

    Last we drag and drop the Item **P3_IMAGE** in the Layout Editor to the right side of the Item **P3_DEPTNO**.

    ![draganddrop](assets/files/draganddrop.png){ style="display:block;margin:auto;" }


<div class="two-columns">
  <div>
    Now you can add Images to the employees and see them in the form.
  </div>
  <div>
    <img src="../assets/files/imageinform.png" alt="image" style="display:block;margin:auto;">
  </div>   
</div>

!!! bytheway "Use Camera of Mobile Phone"
    *By the way*,<br>
    there's a property **Capture Using** which allows you to make photos with your mobile device and load them directly to the form when the app runs there.

!!! exercise "Display Image in Report"
    <div class="two-columns">
      <div>
        That's now very similar to adding the document before. First replace the line `image,` in the **SQL Query** of the report on page 2 with the follwing snippet.
        ```sql
           dbms_lob.getlength(image) as image,
        ```
        As before we just want to know if there's an image and define the display now. 
      </div>
      <div>
            ![queryreplace](assets/files/queryreplace.png){ style="display:block;margin:auto;" }
      </div>   
    </div>

    Choose now `Display Image` as **Type** for the column **IMAGE**
    In the section BLOB Attributes set **Table Name**, **BLOB Column**, **Primary Key Column 1**, **Mime Type Column** & **Filename Column** with the appropriate values.
    
    ![displayimage](assets/files/displayimage.png){ style="display:block;margin:auto;" }

    Don't forget to add the column image in the Actions-menu to the report.

    If the loaded images has different sizes, you will see different sizes in the report. And the might be to large. To avoid having to rework this for each individual image, you can do this using a CSS snippet which scales the images to the same height and ensures, that header and content of the column have the same width.

    ```css
        <style>
            .a-IRR-table th[headers="IMAGES"],
            .a-IRR-table td[headers="IMAGES"] {
                width: 95px;
                min-width: 95px;
                max-width: 95px;
                text-align: center;
                vertical-align: middle;
            }

            .a-IRR-table td[headers="IMAGES"] img {
                display: block;
                height: 75px;
                margin: 0 auto;
                border: 4px solid #CCC;
                border-radius: 4px;
                box-sizing: border-box;
            }
        </style>
    ```

    <div class="two-columns">
        <div>
            First set the **HTML DOM ID** for the report column **IMAGE** to `IMAGES`. That's to identify this object the browser DOM Tree and to reference it from the CSS. 
        </div>
        <div>
            ![domid](assets/files/domid.png){ style="display:block;margin:auto;" }
        </div>   
    </div>

    In the **Header Text** of the region **Employees** we copy the CSS. In this small CSS-Snippet we reference the previously set Static ID to manipulate the sizing of the images.

    ![css](assets/files/css.png){ style="display:block;margin:auto;" }

![reportresult](assets/files/reportresult.png){ style="display:block;margin:auto;" }


## 9.4 File Download with Dynamic Action or Process

There is a declarative option to download one or more files (as a zip) outside of a report or a form. There is a suitable dynamic action and a corresponding process type for this. We will now place the download of all images in the table as a ZIP file behind a button.

!!! exercise "Download multiple files"
    In Page Designer, we navigate to our report page (page 2). **Create Button** in the region **Employees**.
    We set `ZIP`as **Button Name** & **Label** and position it in the **Slot** `Right of the Interactive Report Search Bar` (besides the CREATE-Button).
    As **Action** in the section Behaviour we choose `Trigger Action`.

    ![zipbuttton](assets/files/zipbutton.png){ style="display:block;margin:auto;" }

    There is now a red marked Triggered Action (named Execute Server-Side Code per Default). Change the **Action** to `Download` , activate the switch for **Multiple Files** an set the **Filename** to `images_&APP_USER..zip` (&APP_USER. is the syntax for substitution strings, so the two dots are not a typo).
    As **SQL Query** use this query.

    ```sql
        select image, image_name from emp where image is not null
    ```

    ![triggeraction](assets/files/triggeraction.png){ style="display:block;margin:auto;" }

Now there’s a button at the right upper side of the report. Clicking on it downloads a file with all images which is named depending the current logged in user. There’s the same configuration possible with a process type (also with the name download) to initiate a download as process. 

In our example we just selected the object itself and the name. When downloading a single file instead of multiple files at once, additionally the mimetype should be included in the query, so the browser is able to handle the file accordingly.


!!! bytheway "Files in Object Storage"
    *By the way*,<br>
    of course, it is also possible not to save the documents in the database, but only to reference them. For example, the documents can be placed in the Object Store of the Oracle Cloud Infrastructure via the appropriate APIs and then referenced from there. Starting with release 23.2 it’s also possible to store static resources in the Object Storage.
 
