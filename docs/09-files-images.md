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

It is quite easy to upload and download files with an APEX application. We will do both.

## 9.1 Upload a File in a Form

!!! exercise "Add File Columns"
    First, we expand the table EMP with columns to store files and their metadata (the name and the MIME type). Additionally, there is a BLOB for pictures, which we will use later. Run this in **SQL Commands**:
    
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

    In Page Designer, navigate to our form page for the employees (page 3). We have learned that we can synchronize the form with the database table, but we just want to add one of the newly added columns. Therefore, choose **Create Page Item** in the region **Employee**.
    
    Name the new item `P3_DOCUMENT` and set the **Type** to `File Upload`. Set a **Label**, and in the **Display** section choose the style for how the file browse item should be displayed. I used `Block Dropzone` as **Display As** and set a **Dropzone Title**.

    ![fileinform](assets/files/fileinform.png){ style="display:block;margin:auto;" }  

     Files can be stored temporarily in a central table, but we want to store them in our just-created BLOB column, so as **Type** we use `BLOB column specified in Item Source attribute`, which is a really long value for a property. Here we see why we created the columns `DOCUMENT_MIMETYPE` and `DOCUMENT_NAME`. They can automatically store this metadata when set in the appropriate properties **MIME Type Column** and **Filename Column**. Do not forget the hint from the long value above and define the source for the file, which in our case is the **Column** `Document` in the **Form Region** `Employee` with the **Data Type** `BLOB`.

    ![blobcolumn](assets/files/blobcolumn.png){ style="display:block;margin:auto;" }

In the application, you can now upload a file for an employee.

## 9.2 Download Files

In the form, file download is already available. It is based on the properties **Display Download Link** and **Download Link Text** (which means "Download" when empty).

Now we want to add the download option to the report on page 2.

!!! exercise "Download Files in Report"
    In the Employees report region (page 2), we need a new report column for the documents. A BLOB itself cannot be displayed directly, but we can use a numeric value to decide whether there is a document or not (0 or not 0) and display a download link when there is a document. The size of the BLOB (0 = no file, not 0 = there is a file) is ideal for that. For this, change the **Type** in the **Source** section from `Table/View` to `SQL Query`. A SELECT statement for the table EMP with the WHERE condition we added in the Authorization chapter will be created.

    ![sourcetype](assets/files/sourcetype.png){ style="display:block;margin:auto;" }

    For the report itself, we just need to know whether there is a document or not, so we override the line **document** with the following code snippet. With the length, we know whether there is a file or not.
    
    ```sql
        dbms_lob.getlength(document) as document,
    ```

    ![replace_document](assets/files/replace_document.png){ style="display:block;margin:auto;" }
    
    Select the **DOCUMENT** column in the left pane, set the **Type** to `Download BLOB`, and in the section **BLOB Attributes** reference `EMP` as **Table Name**, `DOCUMENT` as **BLOB Column**, and `EMPNO` as **Primary Key Column 1**.
    Set the **Mime Type Column** and **Filename Column** with our database columns `DOCUMENT_MIMETYPE` and `DOCUMENT_NAME`, so that the browser later knows what to do with the file.
    Last, we can define a display text for the download. We reference the name of the file, which is stored in the column DOCUMENT_NAME (enclosed by hashes) - `#DOCUMENT_NAME#` - as **Download Text** in the **Appearance** section.

    ![downloadblob](assets/files/downloadblob.png){ style="display:block;margin:auto;" }

    Depending on the type of report (here Interactive Report), you need to make the new column visible in the Actions Menu under Columns in the Shuttle.
    
    ![actionmenu](assets/files/actionmenu.png){ width="50%" style="display:block;margin:auto;" }

Now you see the clickable filenames of the uploaded documents in the report and can download them.

![filedownload](assets/files/filedownload.png){ style="display:block;margin:auto;" }

!!! bytheway "Save Report for Interactive Grid"
    *By the way*,<br>
    After adding the document to the report, you might notice that the column is later (in a new session) not visible again. There is a default view (configuration) for how an Interactive Report is shown. As a developer, you can go to the **Actions** menu, then to **Reports**, and click **Save Report**. Then you can save the report as an additional view (**As Named Report**) or **As Default Report Settings**.


## 9.3 Image Upload & Display

Now we do the same for pictures, which are just files that can be shown directly in the UI. The approach is very similar. Of course, you could store pictures in our document column as well, but we want to display them.

!!! exercise "Add Image Upload to the Form"
    In Page Designer, navigate again to our form page for the employees (page 3). Therefore, choose **Create Page Item** in the region **Employee**.
    Name it `P3_IMAGE`, set the **Type** to `Image Upload`, and check the **Label**.
    There are different ways to **Display** an image here. Choose `Icon Dropzone` for **Display As**. Set the **Preview Size** to `Medium`.

    ![imageupload](assets/files/imageupload.png){ style="display:block;margin:auto;" }

    As before with the documents, choose `BLOB column specified in Item Source attribute` as **Type** for the storage and the appropriate column names for **MIME Type Column** and **Filename Column**. Now we have to define the source for the file, which in our case is the **Column** `Image` in the **Form Region** `Employee` with the **Data Type** `BLOB`.

    ![imageupload2](assets/files/imageupload2.png){ style="display:block;margin:auto;" }

    Last, drag and drop the item **P3_IMAGE** in the Layout Editor to the right side of the item **P3_DEPTNO**.

    ![draganddrop](assets/files/draganddrop.png){ style="display:block;margin:auto;" }


<div class="two-columns">
  <div>
    Now you can add images to the employees and see them in the form.
  </div>
  <div>
    <img src="../assets/files/imageinform.png" alt="image" style="display:block;margin:auto;">
  </div>   
</div>

!!! bytheway "Use Camera of Mobile Phone"
    *By the way*,<br>
    There is a property **Capture Using** which allows you to take photos with your mobile device and load them directly to the form when the app runs there.

!!! exercise "Display Image in Report"
    <div class="two-columns">
      <div>
        This is now very similar to adding the document before. First, replace the line `image,` in the **SQL Query** of the report on page 2 with the following snippet.
        ```sql
           dbms_lob.getlength(image) as image,
        ```
        As before, we just want to know if there is an image and define the display now.
      </div>
      <div>
            ![queryreplace](assets/files/queryreplace.png){ style="display:block;margin:auto;" }
      </div>   
    </div>

    Now choose `Display Image` as **Type** for the column **IMAGE**.
    In the section **BLOB Attributes**, set **Table Name**, **BLOB Column**, **Primary Key Column 1**, **Mime Type Column** and **Filename Column** with the appropriate values.
    
    ![displayimage](assets/files/displayimage.png){ style="display:block;margin:auto;" }

    Do not forget to add the column image to the report in the Actions menu.

    If the loaded images have different sizes, you will see different sizes in the report, and they might be too large. To avoid having to rework this for each individual image, you can use a CSS snippet that scales the images to the same height and ensures that header and content of the column have the same width.

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
            First set the **HTML DOM ID** for the report column **IMAGE** to `IMAGES`. This identifies the object in the browser DOM tree and allows us to reference it from the CSS.
        </div>
        <div>
            ![domid](assets/files/domid.png){ style="display:block;margin:auto;" }
        </div>   
    </div>

    Copy the CSS into the **Header Text** of the region **Employees**. In this small CSS snippet, we reference the previously set DOM ID to manipulate the sizing of the images.

    ![css](assets/files/css.png){ style="display:block;margin:auto;" }

![reportresult](assets/files/reportresult.png){ style="display:block;margin:auto;" }


## 9.4 File Download with Dynamic Action or Process

There is a declarative option to download one or more files (as a zip) outside of a report or a form. There is a suitable dynamic action and a corresponding process type for this. We will now place the download of all images in the table as a ZIP file behind a button.

!!! exercise "Download Multiple Files"
    In Page Designer, navigate to our report page (page 2). Choose **Create Button** in the region **Employees**.
    Set `ZIP` as **Button Name** and **Label** and position it in the **Slot** `Right of the Interactive Report Search Bar` (beside the CREATE button).
    As **Action** in the **Behavior** section, choose `Trigger Action`.

    ![zipbuttton](assets/files/zipbutton.png){ style="display:block;margin:auto;" }

    There is now a red-marked Triggered Action (named Execute Server-Side Code by default). Change the **Action** to `Download`, activate the switch for **Multiple Files**, and set the **Filename** to `images_&APP_USER..zip` (`&APP_USER.` is the syntax for substitution strings, so the two dots are not a typo).
    As **SQL Query** use this query.

    ```sql
        select image, image_name from emp where image is not null
    ```

    ![triggeraction](assets/files/triggeraction.png){ style="display:block;margin:auto;" }

Now there is a button at the upper right side of the report. Clicking it downloads a file with all images, named depending on the currently logged-in user. The same configuration is possible with a process type (also named Download) to initiate a download as a process.

In our example, we just selected the object itself and the name. When downloading a single file instead of multiple files at once, the MIME type should additionally be included in the query, so the browser is able to handle the file accordingly.


!!! bytheway "Files in Object Storage"
    *By the way*,<br>
    Of course, it is also possible not to save the documents in the database, but only to reference them. For example, the documents can be placed in Object Storage in Oracle Cloud Infrastructure via the appropriate APIs and then referenced from there. Starting with release 23.2, it is also possible to store static resources in Object Storage.
 
