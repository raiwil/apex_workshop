# 5. Maps

!!! sampleapp "Sample App Maps"
    <div class="two-columns">
      <div style="flex: 50%;">
           This application contains numerous examples of visualizing coordinate data on a map. Use Map Markers, Lines or Polygons, or the Heat Map feature. The APEX Map Region can easily be combined with Oracle Spatial functionality (which is included in every Oracle Database) to perform a 'Within Distance Search', 'Nearest Neighbor Search', or other spatial analysis.
           This app is available online at: [https://oracleapex.com/go/maps](https://oracleapex.com/go/maps){target="_blank"}
      </div>
      <div style="flex: 50%;">
          ![maps](assets/samples/maps.png){ style="display:block;margin:auto;" }
      </div>
    </div>


## 5.1 Build a Report with a Form for Departments

We want to show geographical information for our departments, so we first build a page for that.

!!! exercise "Create Interactive Report with a Form"
    
    Choose **Interactive Report** in the dialog when creating a new page.

    ![createirpage.png](assets/maps/createirpage.png){ style="display:block;margin:auto;" }

    Set (or keep) the **Page Number** as `6` and name the page `Departments`. After enabling the switch for **Include Form Page**, we can also set the number (`7`) and name (`Department`) for the form page. At the beginning, we saw the creation of a form with an included report (for EMP), which results in the same structure as this approach here. Finally, `DEPT` is our **Table** for these two pages.

    ![createirpage2.png](assets/maps/createirpage2.png){ style="display:block;margin:auto;" }

    After choosing `DEPTNO` as **Primary Key Column**, create the page(s).

    ![createirpage3.png](assets/maps/createirpage3.png){ style="display:block;margin:auto;" }   

    
Run the application to see the new components.

## 5.2 Augment the Data Model to Store Spatial Data and Addresses

To store spatial data in the database for our departments, we add a column with the data type SDO_GEOMETRY. Additionally, we add columns to store the street and zip code alongside the city (column `LOCATION`).

!!! exercise "Augment table DEPT"
    
    Run the ALTER TABLE command in **SQL Commands**.

    ```sql 
      ALTER TABLE DEPT
            ADD zipcode     varchar2(20)
            ADD street      varchar2(50)
            ADD geolocation SDO_GEOMETRY
    ```
    
    ![altertable.png](assets/maps/altertable.png){ style="display:block;margin:auto;" }

Have a look at the table DEPT in the **Object Browser**.

Are you now confused as to why we first created the page and then augmented the table, and not the other way around? Surely that would have been easier. But then we would not see how to synchronize regions (the form we just created) with the database. Items do not have to be added individually.

## 5.3 Geocode Given Addresses

In this exercise, we will enhance the existing form for table DEPT by adding items for zip code and street. Then we add functionality that geocodes a given address and even sanitizes it.
You can add items to forms manually by adding them via the context menu or drag-and-drop from the toolbar at the bottom, and then configure and map them manually to the new database columns.

!!! exercise "Modify Form for Departments"
    
    We just synchronize the form region with the underlying database table. Right-click the region **Department** on page 7 (the form page) and select **Synchronize Page Items**.

    ![synchronize](assets/maps/synchronize.png){ style="display:block;margin:auto;" }

    APEX detects the added columns and expands the form accordingly. Now we edit the new item **P7_GEOLOCATION** and change the **Type** to `Geocoded Address`. 
    We note, but do not change, the settings for **Structured Address**, **Sanitize Address** and **Trigger Geocoding**.
    In the **Geocoding Input** section, change **Country** to `Germany` with **Country Type** set to `Static`, and add the corresponding page items for **Street Item**, **Postal Code Item** and **City Item** with the appropriate columns of the table DEPT.

    ![geocoding.png](assets/maps/geocoding.png){ style="display:block;margin:auto;" }

Now you can use the form to add addresses (in Germany) to the departments. Choose cities in Germany and add a street (house numbers can be included). A zip code is optional, as is the street, but the street should be used for better geocoding.

When changing something in the form, the information will be automatically sanitized and geocoded, and the spatial result is stored in the SDO_GEOMETRY column and a map with the address is shown.

!!! bytheway "Oracle eLocation Service"
    *By the way*,<br>
    For the maps shown here, the Oracle eLocation Service is used (https://maps.oracle.com). It can be used without an API key and is free in the context of Oracle APEX. Some map styles are provided by default, but you can use your own maps.
    Since 2019, the features of the formerly known Spatial and Graph option for Enterprise Edition are part of the database (Enterprise Edition and Standard Edition 2) without the need for an option. It is part of the standard installation. If you are using a database that has been running for some time, the SDO_GEOMETRY data type used in the exercise may not be available because it is not automatically added during an upgrade.

## 5.4 Add a Map to Visualize Department Locations

On the report page for the departments, we will now add a map region to show all geocoded addresses.

!!! exercise "Add a Map Region"
    
    Drag and drop a Map region from the gallery below the departments region on page 6.

    ![gallery](assets/maps/gallery.png){ style="display:block;margin:auto;" }

    Alternatively, you can create such a region by right-clicking in the Content Body, choosing **Create Region**, and setting `Map` as **Region Type**.

    Give the region a **Name** (`MyMap`).
 
    ![mapregion](assets/maps/mapregion.png){ style="display:block;margin:auto;" }

    Now have a look at the layer, which is predefined with some sample data. Set **Name** and **Label** of the layer to `location`, and choose `Local Database` as the source and table `DEPT`. Now there should be two errors marked red at the exclamation mark at the top.

    ![mapregion](assets/maps/mapregion.png){ style="display:block;margin:auto;" }

    Navigating to these errors by scrolling down in the properties or choosing the error message window, you will find the Column Mapping responsible for the errors. In this section, choose `SDO_GEOMETRY` as **Geometry Column Data Type** and our new column `GEOLOCATION` as **Geometry Column**. It might also be a good idea to define the **Primary Key Column**.

    ![columnmapping](assets/maps/columnmapping.png){ style="display:block;margin:auto;" }

## 5.5 Refresh the Map Automatically When Data Changes

When changing an address in the form and coming back to the page with the report and the map, the report is refreshed automatically but the map is not. For the report, there is already a refresh action, created by the wizard at page creation. We will now implement the automatic refresh of the map region.

!!! exercise "Automatic Refresh of Map Region"
    
    For the report, there is already a refresh action. We find this action in the Dynamic Actions tab (the flash icon) under Dialog Closed. There is a True Action that refreshes the report region when the form dialog is closed. We duplicate this action by right-clicking the action.

    ![duplicate](assets/maps/duplicate.png){ style="display:block;margin:auto;" }

    For the new Refresh Action (or the other one), change the **Region** in the **Affected Elements** section from Departments to `MyMap`.

    ![regionaffected](assets/maps/regionaffected.png){ style="display:block;margin:auto;" }

    It might be a good idea to name the actions accordingly. 

Now change an existing address or add a new department, and the map should be refreshed automatically, like the report. However, we cannot see the nice camera flyover to the points just yet.

!!! tip "LiveLab"
    There is an Oracle LiveLab **Getting Started with Maps and Spatial in APEX** available.
    [Click here](https://livelabs.oracle.com/ords/r/dbpm/livelabs/view-workshop?wid=936){target="_blank"}
