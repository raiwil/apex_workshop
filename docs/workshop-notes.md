# Workshop Notes

This hands-on workshop will be a mix of explanations, demonstrations, and taking your own steps.


!!! presented "Presented"
    Boxes with a brown background indicate in bullet points some topics the presenter will show and explain at this point. These are listed here as a reminder of what has been seen.

!!! exercise "Exercise"
    Boxes with this aqua background represent the exercises. These are demonstrated step by step, and relevant things are explained. After that, or in parallel, there is time to reproduce these steps yourself. 


There are some code snippets available. These are available as follows to easy copy them into clipboard.

```sql title="Example for Copy to Clipboard of a Code Snippet"
SELECT *
FROM emp;
```

Property-Names, Button Labels or similar mentioned in the text are **bold** and entries for properties are `like this`.

Some of the exercises build on each other. Thus, exercises for a chapter should always be performed in sequence. Chapters 1 & 2 create a basic application that serves as the basis for all further exercises. 
Furthermore, the Chapter with the RESTful Service Integration requires the result of the exercise for geographical information and the JavaScript example is built on top of the calendar excercise. 

An APEX application consists, besides other objects, of pages, each of which is assigned a unique number. All items on a page will (or at least should) have that number in their name (Px_Itemname). 
In the screenshots of the exercises, you will see these numbers (that are automatically pre-assigned in ascending order) and item names, which might look different for you. So try to use the page numbers during the exercises to have the same numbering of pages, or keep in mind to use another number when creating an item manually or in the provided Code Snippets. 

!!! sampleapp "Sample Apps"
    There are a lot of sample applications available to demonstrate specific topics. The relevant sample applications for a chapter will be mentioned in such green boxes.

!!! bytheway "By the way"
    Sometimes we have a tip or notice (that is not necessarily directly related to the current exercise in this workshop). This is then shown in light purple.

!!! tip "Tips"
    Sometimes we've an important hint

<!--
```sql title="Abfrage Tabelle EMP"
SELECT *
FROM emp;
```
[Link zu Oracle](https://www.oracle.com){target="_blank"}

> Ich bin ein Zitat

!!! note "Note"
    Bitte zuerst die Datenbankverbindung prüfen.

!!! tip "Tip"
    Das ist ein Tipp.

!!! warning "Warning"
    Warning

!!! success "Success"
    Erfolgreich ausgeführt

!!! info "Info"
    Zusätzliche Information.

!!! danger "Danger"
    Vorsicht!



SamleApps Bildchen 293*80
-->



!!! sampleapp "Sample App APEX PWA Reference"
    <div class="two-columns">
      <div style="flex: 50%;">
           Oracle APEX enables developers to build Progressive Web Apps (PWAs) that can be installed on any desktop or mobile device to deliver a more native app experience. This application serves as a reference for key PWA features in APEX and how you can use them in your own apps. 
           This app is online available to view: [https://oracleapex.com/go/pwa](https://oracleapex.com/go/pwa){target="_blank"} 
      </div>
      <div style="flex: 50%;">
          ![pwa](assets/samples/pwa.png){ style="display:block;margin:auto;" }
      </div>
    </div>

!!! sampleapp "Sample App APEXToGo"
    <div class="two-columns">
      <div style="flex: 50%;">
           This application showcases the features of a mobile web application built with Oracle APEX. It demonstrates mobile design capabilities and leverages Progressive Web Apps (PWAs) technologies to provide an enhanced user experience, offering a seamless and native-like experience.
           This app is online available to view: [https://oracleapex.com/ords/r/apex_pm/apextogo/](https://oracleapex.com/ords/r/apex_pm/apextogo/){target="_blank"} 
           
      </div>
      <div style="flex: 50%;">
          ![apextogo](assets/samples/apextogo.png){ style="display:block;margin:auto;" }
      </div>
    </div>

!!! sampleapp "Sample App Brookstrut"
    <div class="two-columns">
      <div style="flex: 50%;">
           The Brookstrut sample application analyzes a simplified stored data model and includes a feature to generate random data, accommodating everything from small to extra large data sets. It showcases Oracle APEX's capabilities in data reporting, navigation, and data presentation. This tool allows you to explore various Oracle APEX components, including faceted search, interactive reports, content row reports, and calendars.
      </div>
      <div style="flex: 50%;">
          ![brookstrut](assets/samples/brookstrut.png){ style="display:block;margin:auto;" }
      </div>
    </div>

!!! sampleapp "Sample App Image Support for Rich Text Editor"
    <div class="two-columns">
      <div style="flex: 50%;">
           This application illustrates how to augment Rich Text Editor content items to allow for inline images.
      </div>
      <div style="flex: 50%;">
          [image](assets/samples/image.png){ style="display:block;margin:auto;" }
      </div>
    </div>

!!! sampleapp "Sample App Application Search"
    <div class="two-columns">
      <div style="flex: 50%;">
           This application showcases the Application Search feature, introduced with APEX 22.2. Search Configurations and Search Regions allow developers to add robust search engine functionality to their APEX applications.
      </div>
      <div style="flex: 50%;">
          ![search](assets/samples/search.png){ style="display:block;margin:auto;" }
      </div>
    </div>

!!! sampleapp "Sample App Calendar"
    <div class="two-columns">
      <div style="flex: 50%;">
           This application highlights the native calendaring capabilities of Oracle APEX. It features a monthly calendar with stylized daily tasks. The dates can be changed using drag and drop, which is all declarative and easily created using native APEX wizards.
           This app is online available to view: [https://oracleapex.com/go/calendar](https://oracleapex.com/go/calendar){target="_blank"} 
      </div>
      <div style="flex: 50%;">
          ![calendar](assets/samples/calendar.png){ style="display:block;margin:auto;" }
      </div>
    </div>

!!! sampleapp "Sample App Cards"
    <div class="two-columns">
      <div style="flex: 50%;">
           This application highlights Cards regions in Oracle APEX. Cards regions are a native region type. They provide developers with a powerful and flexible new way to display data in bite-sized blocks, ideal for use in faceted search, or presenting at-a-glance information.
           This app is online available to view: [https://oracleapex.com/go/cards](https://oracleapex.com/go/cards){target="_blank"} 
      </div>
      <div style="flex: 50%;">
          ![cards](assets/samples/cards.png){ style="display:block;margin:auto;" }
      </div>
    </div>

!!! sampleapp "Sample App Charts"
    <div class="two-columns">
      <div style="flex: 50%;">
           This application highlights the charting capabilities of Oracle APEX. It demonstrates how you can enhance your applications to visually represent your data, using declarative and plug-in based charting solutions.
           This app is online available to view: [https://oracleapex.com/go/charts](https://oracleapex.com/go/charts){target="_blank"} 
      </div>
      <div style="flex: 50%;">
          ![charts](assets/samples/charts.png){ style="display:block;margin:auto;" }
      </div>
    </div>

!!! sampleapp "Sample App Collections"
    <div class="two-columns">
      <div style="flex: 50%;">
           Sample Collections enables you to store rows of data for use within an Oracle APEX session. This database application illustrates how to use PL/SQL to create and manage collection-based session state.
      </div>
      <div style="flex: 50%;">
          ![collections](assets/samples/collections.png){ style="display:block;margin:auto;" }
      </div>
    </div>

!!! sampleapp "Sample App Data Loading"
    <div class="two-columns">
      <div style="flex: 50%;">
           This application is built on simple EMP and DEPT tables to highlight how developers can define pages to allow end users to upload spreadsheet data into an existing table.
      </div>
      <div style="flex: 50%;">
          ![dataloading](assets/samples/dataloading.png){ style="display:block;margin:auto;" }
      </div>
    </div>

!!! sampleapp "Sample App Document Generator"
    <div class="two-columns">
      <div style="flex: 50%;">
           This application showcases the integration with the Oracle Document Generator Pre-built Function on OCI. It features examples of generating PDF documents from a combination of JSON data and MS Word templates.
      </div>
      <div style="flex: 50%;">
          ![documentgenerator](assets/samples/documenetgenerator.png){ style="display:block;margin:auto;" }
      </div>
    </div>

!!! sampleapp "Sample App Dynamic Actions"
    <div class="two-columns">
      <div style="flex: 50%;">
           This application demonstrates a number of different dynamic actions that can be incorporated into an application. These declarative client-side behaviors include simple examples for manipulating the display of components, style examples for changing the appearance of components, and server-side examples which interact with the database.
      </div>
      <div style="flex: 50%;">
          ![da](assets/samples/da.png){ style="display:block;margin:auto;" }
      </div>
    </div>

!!! sampleapp "Sample App Email Authentication"
    <div class="two-columns">
      <div style="flex: 50%;">
           This application illustrates the use of email authentication. Usernames must be email addresses and tokens are emailed to users at login time to verify their identities, instead of using passwords.
      </div>
      <div style="flex: 50%;">
          ![email](assets/samples/email.png){ style="display:block;margin:auto;" }
      </div>
    </div>

!!! sampleapp "Sample App File Upload and Download"
    <div class="two-columns">
      <div style="flex: 50%;">
           Learn how to create Oracle APEX applications that include file upload and download. Upload files using dialogs as well as dedicated pages. See how to download files stored in Oracle database BLOB columns within database tables. Specifically see how to produce file download links in interactive reports, classic reports, forms, and dynamically created HTML content.
      </div>
      <div style="flex: 50%;">
          ![files](assets/samples/files.png){ style="display:block;margin:auto;" }
      </div>
    </div>

!!! sampleapp "Sample App Interactive Grids"
    <div class="two-columns">
      <div style="flex: 50%;">
           This application showcases the features and functionality of the Oracle APEX Interactive Grid. Through its interactive grid sample pages, users can explore its versatile capabilities, such as comprehensive reporting, seamless data editing or intuitive pagination.
      </div>
      <div style="flex: 50%;">
          ![ig](assets/samples/ig.png){ style="display:block;margin:auto;" }
      </div>
    </div>

!!! sampleapp "Sample App Maps"
    <div class="two-columns">
      <div style="flex: 50%;">
           This application contains numerous examples of visualizing coordinate data on a map. Use Map Markers, Lines or Polygons, or the Heat Map feature. The APEX Map Region can easily be combined with Oracle Spatial functionality (which is included in every Oracle Database) to perform a 'Within Distance Search', 'Nearest Neighbor Search', or other spatial analysis.
           This app is online available to view: [https://oracleapex.com/go/maps](https://oracleapex.com/go/maps){target="_blank"} 
      </div>
      <div style="flex: 50%;">
          ![maps](assets/samples/maps.png){ style="display:block;margin:auto;" }
      </div>
    </div>

!!! sampleapp "Sample App Master Detail"
    <div class="two-columns">
      <div style="flex: 50%;">
           This application highlights the native master detail capabilities of Oracle APEX. The application contains four different master detail page layouts. The first two layouts display master detail in a single page using editable Interactive Grids. The last two layouts display master detail in two pages with mix of editable Interactive Grids, form items, classic reports and modal popups.
      </div>
      <div style="flex: 50%;">
          ![masterdetail](assets/samples/masterdetail.png){ style="display:block;margin:auto;" }
      </div>
    </div>

!!! sampleapp "Sample App Reporting"
    <div class="two-columns">
      <div style="flex: 50%;">
           This application highlights the reporting capabilities of Oracle APEX. You can create Interactive Reports, Interactive Grids, Faceted Search Reports, Cards Reports, and Classic Reports declaratively using SQL.
      </div>
      <div style="flex: 50%;">
          ![reporting](assets/samples/reporting.png){ style="display:block;margin:auto;" }
      </div>
    </div>

!!! sampleapp "Sample App REST Services"
    <div class="two-columns">
      <div style="flex: 50%;">
           This application showcases how to access external REST services from Oracle APEX. The app works on the sample RESTful Service, oracle.example.hr. The examples in this application illustrate how to create a simple tabular report on REST service data, how to filter, and how to add pagination.
      </div>
      <div style="flex: 50%;">
          ![rest](assets/samples/rest.png){ style="display:block;margin:auto;" }
      </div>
    </div>

!!! sampleapp "Sample Trees"
    <div class="two-columns">
      <div style="flex: 50%;">
           Learn how to create a tree control using a SQL query. This application shows various methods of integrating tree controls into your Oracle APEX application.
      </div>
      <div style="flex: 50%;">
          ![trees](assets/samples/trees.png){ style="display:block;margin:auto;" }
      </div>
    </div>

!!! sampleapp "Sample App Vector Search"
    <div class="two-columns">
      <div style="flex: 50%;">
           This application shows how to leverage Vector Search in Oracle Database 26ai. Learn how to generate vector embeddings and how to do vector search, using APEX Search Configurations. The application also highlights the differences to traditional Oracle Text search, and showcases how to combine both methods.
      </div>
      <div style="flex: 50%;">
          ![vectorsearch](assets/samples/vectorsearch.png){ style="display:block;margin:auto;" }
      </div>
    </div>

!!! sampleapp "Sample App Workflow, Approvals and Tasks"
    <div class="two-columns">
      <div style="flex: 50%;">
           This application highlights the key features of the Workflow, Approvals, and Tasks capabilities in Oracle APEX. It lets users manage changes to employees' salaries and jobs, provision a laptop for an employee, and manage employees' self-appraisals. All use cases involve human tasks requiring an action by an appropriate individual, some of which require an approval or rejection.
      </div>
      <div style="flex: 50%;">
          ![worksflow](assets/samples/workflow.png){ style="display:block;margin:auto;" }
      </div>
    </div>

!!! sampleapp "Universal Theme Reference"
    <div class="two-columns">
      <div style="flex: 50%;">
           This app introduces you to Universal Theme by providing an easy way to browse through the various templates, template options, and theme styles. The examples demonstrate how you can easily control the layout of your pages, to create a great looking application.
           This app is online available to view: [https://oracleapex.com/ut](https://oracleapex.com/ut){target="_blank"} 
      </div>
      <div style="flex: 50%;">
          ![ut](assets/samples/ut.png){ style="display:block;margin:auto;" }
      </div>
    </div>


