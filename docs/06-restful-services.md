# 6. RESTful Services

!!! sampleapp "Sample App REST Services"
    <div class="two-columns">
      <div style="flex: 50%;">
           This application showcases how to access external REST services from Oracle APEX. The app works on the sample RESTful Service, oracle.example.hr. The examples in this application illustrate how to create a simple tabular report on REST service data, how to filter, and how to add pagination.
      </div>
      <div style="flex: 50%;">
          ![rest](assets/samples/rest.png){ style="display:block;margin:auto;" }
      </div>
    </div>

In this chapter, we will read population data from a REST Data Source and add it to the form page of the departments.

## 6.1 Define REST Data Source

First, we define the **REST Data Source** in the **Shared Components** of the application once, to use them later in the pages.

!!! exercise "Define REST Data Sourcen"
    
    We use a simple, free REST Service for this excercise, which returns us for a given zip-code some infos like district, federalstate or municipality. 
    
    ```sql 
         https://openplzapi.org/de/Localities?postalCode=55593
    ```
    
    Run this URL in your browser to see the response.

    Go to the topic **REST Data Sources** in the **Data Sources** section of the **Shared Components** and click there the **Create** Button.

    We use **From scratch** as the method.

    ![createrest](assets/rest/createrest.png){ style="display:block;margin:auto;" }

    Choose `Simple HTTP` as the **REST Data Source Type** and **Name** the service `locations`. For the **URL Endpoint** use the above URL.

    ![createrest2](assets/rest/createrest2.png){ style="display:block;margin:auto;" }

    After clicking Next APEX extracts the **Remote Server**, the **BASE URL** and the **Service URL Path**. Confirm this with the **Next** Button.

    ![createrest3](assets/rest/createrest3.png){ style="display:block;margin:auto;" }  

    We don't use **Pagination**, as for one zip-code there's not so much data.

    ![createrest4](assets/rest/createrest4.png){ style="display:block;margin:auto;" }  

     For services needing, for example, an API key, you can first design Web Credentials in the Shared Components, which you can used in the services. Here we use a public service without the need for authentication, so he **Authentication Required** switch stays disabled. Now we can **Discover** the service.

    ![createrest5](assets/rest/createrest5.png){ style="display:block;margin:auto;" }  

    We get 3 Tabs. One with the data, we've already seen in the browser (**Response Body**). The same data is in the **Data** tab, but not as JSON. We click on the **Data Profile** tab where we remove data from the service we don't want to use. Remove every row other than **DISTRICT_NAME**, **FEDERALSTATE_NAME** and **MUNICIPALITY_TYPE** and **Creae RES Data Source** than.
    
    ![createrest6](assets/rest/createrest6.png){ style="display:block;margin:auto;" } 

    When you click on the just created service, you can inspect the settings and see where you can manipulate them later if needed. There’s also a test button.


!!! bytheway "Own REST Services"
    *By the way*,<br>
    we integrate here existing REST Services. In conjunction with the ORDS (Oracle REST Data Services), it’s possible to build your own REST Services for your data. APEX is one of the possible Tools to create such REST Services.
    ![ords](assets/rest/ords.png){ style="display:block;margin:auto;" } 


## 6.2 Integrate Data from REST Data Source in the application

We now want to display the population data from the REST Data Source on the Departments form.

!!! exercise "Use REST Data Source in the application"
    Go to **Page Designer** for page 7 **Department**. 
    First, we rearrange the existing items to have some more vertical space. This could be done via Drag & Drop or the property **Start New Row** (and potentially **Sequence**) in the section Layout of the items.

    ![item](assets/rest/item.png){ style="display:block;margin:auto;" } 

    Drag and Drop a **Classic Report** from the **Gallery** above the Item **P5_GEOLOCATION**.
   
    ![classicreport](assets/rest/classicreport.png){ style="display:block;margin:auto;" } 

    The new region is now a subregion of the region Department (and predefined with some sample data). **Name** this new region `Infos` and choose as **Location** (of it's source)  `REST Source` instead of `Sample Data`. Then you can select the **REST Source** `locations` we have designed before.

    ![restsource](assets/rest/restsource.png){ style="display:block;margin:auto;" } 

     You will see the three infos we have choosen from the Rest Source as **Columns** and the postalCode as **Parameter**. Reorder the columns list and reorder them into MUNICIPALITY_TYPE, DISTRICT_NAME and FEDERALSTATE_NAME. This could be done via Drag and Drop or the column property Sequence. 
     Select the parameter **postalCode** and change the **Type** to `Item`. Then we can use `P7_ZIPCODE` as **Item**. 

    ![postalcode](assets/rest/postalcode.png){ style="display:block;margin:auto;" } 

    You can now save and run the application to see the current result … but we want to have it a little bit nicer

    Mark the **Infos** region and replace under the **Attributes** Tab in the section Appearance the **Template** named `Standard` with `Value Attribute Pairs – Column`. Check that the **Type** for the Paginitaion is set to `No Pagination (Show All Rows)`.
    There are postal codes for which there are multiple hits in our simple REST Service. For simplification, we may limit the number of rows to 1. To do this, we adjust the **Number of Rows** attribute for the new report region.

    ![template](assets/rest/template.png){ style="display:block;margin:auto;" } 

<div class="two-columns">
  <div>
    Now the page should look like this one (here Frankfurt am Main) with a combination of local data and remote data through a RESTful Service.
  </div>
  <div>
    <img src="../assets/rest/gardentower.png" alt="lov_ui" style="display:block;margin:auto;">
  </div>
</div>

!!! bytheway "Nested JSON"
    *By the way*,<br>
    until 23.2 APEX could only extract flat structures from REST API responses. Beginning with 24.1 there’s support for nested JSON response. So every APEX component with support for REST Data Sources supports Array Columns. This includes Reports (Classic, Interactive Reports & Grids), Maps & Charts, Calender, Region Plug-Ins and Automations.

!!! bytheway "REST Source Catalogs"
    *By the way*,<br>
    you can bundle REST Services together in REST Source Catalogs (could be found in the **Workspace Utilities**). Then is easy to share these bundled Services with other Workspaces or Environments. Developers can search and browse through such catalogs that contain metadata about the REST Services and create APEX REST Data Sources based on REST Service metadata within the catalog.

!!! bytheway "REST Synchroization"
    *By the way*,<br>
    imagine that there’s a lot of data coming from a REST Data Source, which potentially didn’t change so often. So, it might be a good idea to store and use the data locally and synchronize them at a meaningful frequency. This can be automated with REST Data Source Synchronizations. 

!!! tip "LiveLab"
    There's an Oracle LiveLab **Build a Movies Watchlist Application using Oracle APEX** available which is based on Rest Data Sources. There you can learn about **Web Credentials**, **REST Catalogs** and **Post Processing** the Result of REST Sources.
    Aditionally you can learn in the LiveLab about Cards, Application Items & Processes, Quick SQL, Faceted Search, Template Options & CSS.
    [Click here](https://livelabs.oracle.com/ords/r/dbpm/livelabs/view-workshop?wid=942){target="_blank"}

!!! bytheway "Oracle LiveLabs"
    *By the way*,<br>
    Oracle LiveLabs is an APEX Application.