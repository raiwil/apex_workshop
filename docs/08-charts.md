# 8. Charts

!!! sampleapp "Sample App Charts"
    <div class="two-columns">
      <div style="flex: 50%;">
           This application highlights the charting capabilities of Oracle APEX. It demonstrates how you can enhance your applications to visually represent your data, using declarative and plug-in based charting solutions.
           This app is online available to view: [https://apex.oracle.com/go/sample_charts](https://apex.oracle.com/go/sample_charts){target="_blank"} 
      </div>
      <div style="flex: 50%;">
          ![charts](assets/samples/charts.png){ style="display:block;margin:auto;" }
      </div>
    </div>

In this exercise, we will build a pie chart and a bar chart. The pie chart (summary of salaries per department) will be clickable so that the bar chart (salaries of the employees) will be refreshed depending on the department clicked on the pie chart so that only employees from this department will be displayed.

## 8.1 Create a page with two charts

First we create a new page with one chart.

!!! exercise "Create Page with a Chart"

    Create a page and click in **Chart** (the option **Dashboard** generates a page with four charts)

    ![createpage](assets/charts/createpage.png){ style="display:block;margin:auto;" }

    We start with a **Pie Chart**

    ![createpage2](assets/charts/createpage2.png){ style="display:block;margin:auto;" }

    Choose `8` as the **Page Number** and give the page a **Name** (for example `MyCharts`).
    As Data Source we’ll use a **SQL Query** instead of a Table. In the SQL Statement we calculate the sum of the salary per department.

    ```sql 
        SELECT deptno, SUM(sal) AS deptsummary
          FROM emp
          GROUP BY deptno
          ORDER BY deptno
    ```

    ![createpage3](assets/charts/createpage3.png){ style="display:block;margin:auto;" }

    In the next step, we set the **Label Column** and the **Value Column** for the Pie Chart.

    ![createpage4](assets/charts/createpage4.png){ style="display:block;margin:auto;" }

    Have a look at the Page Designer. You’ll see a Chart-Region with one Series. Both, the region and the series can have a data source, but in this case the used Query is the data source of the series and the chart is without a data source. It's possible to reference in the series the data source of the chart, so multiple series can be based on the same data with only one request. And with different sources at series level, you can use multiple data sources in the same chart.
    Now we want to add a bar chart with more than one series (salary and commission of employees). Here we will use the data source in the region and reference them in the series. For that Drag & Drop a **Chart** region from the gallery to the right side of the existing chart.

    ![addchart](assets/charts/addchart.png){ style="display:block;margin:auto;" } 

    **Name** the new region `Employees` and select `Chart` as **Type**. The **Location** of our source is the `Local Database` and as **Table Name** our table `EMP`. If you like change the name of the first chart and it's series. 
    
    ![addchart2](assets/charts/addchart2.png){ style="display:block;margin:auto;" }  

    In the **Attributes** tab, change the chart **Type** to Bar (if not already set).

    ![addchart3](assets/charts/addchart3.png){ style="display:block;margin:auto;" } 

    The series of the new chart is again preset with sample data. **Name** the Series `Salary` and replace the predefined `Sample Data` as **Location** with **Region Source**, whcih pints to the data source of the region itself. Now we can select from this source the data and can set the **Label* to `EMPNO` and the **Value** to `SAL`. And as aggregation is irrelevant here, we set the property **Value Aggregation** to `No Aggregation`.

    ![addchart4](assets/charts/addchart4.png){ style="display:block;margin:auto;" } 

    Now we can **Duplicate** this series (right mouse click on the series) and just change the **Name** to `Commission` and the **Value** from `SAL` to `COMM`.

    ![addchart5](assets/charts/addchart5.png){ style="display:block;margin:auto;" }     

Now the two charts are independently side by side.

![result](assets/charts/result.png){ style="display:block;margin:auto;" }

## 8.2 Change one chart by clicking on the other

Now we want to display in the bar chart only employees from the department we selected in the pie chart (via click on a segment). Therefore, we will use a hidden item which is filled with the click and then used as filter for the second chart.

!!! exercise "Change one chart by clicking on the other"
    
    Create a page item in the Body (via right mouse click on **Body**). **Name** this item `P8_DEPTNO`. The position or label is irrelevant, because this item will be hidden (as **Type**), but we stay for the beginning with `Text Field`as **Type** to see what happens with the item.

    ![item](assets/charts/item.png){ style="display:block;margin:auto;" }

    We will use this item now as a filter for the bar chart. For that we add this clause to the **Where Clause** of the **Employees** region. So when P8_DEPTNO is null, every department will be shown.

    ```sql 
           deptno = nvl(:P8_DEPTNO,deptno)
    ```

    ![filter](assets/charts/filter.png){ style="display:block;margin:auto;" }
      
    Now select the series of the first chart (which are named **Chart** and **Series1** if you have not changed it). Set the **Type** in the **Link** section to `Redirect to Page in this Application`. Then the property **Target** will appear und you can click at **No Link Defined**.

    ![link](assets/charts/link.png){ style="display:block;margin:auto;" }
   
    Set `8` (the same page where we are) as the **Page** for the **Target** and map the page item `P8_DEPTNO` to the value of the chart region (`&DEPTNO.`). You can do this by clicking on the menu icons.

    ![link2](assets/charts/link2.png){ style="display:block;margin:auto;" }

The pie chart is now clickable. When clicked the page reloads and the bar chart is refreshed with the appropriate data. And you see the change of our helper item. What’s missing is a Reset Button to show all employees again. We will add this later. 

## 8.3 Refresh chart without reloading entire page

Currently the whole page is reloaded, but it's just needed to reload the one bar chart. Unfortunately, for a click on series, there’s no Dynamic Action, but we can use our own small JavaScript-Code for that.

!!! exercise "Use JavaScript for a partial reload"
    We change the Link **Type** of the Series in the pie-chart region to Redirect to URL and write as URL some JavaScript to set our (hidden) item. 

    ```javascript 
           javascript:apex.item('P8_DEPTNO').setValue('&DEPTNO.'); 
    ```

    ![redirect](assets/charts/redirect.png){ style="display:block;margin:auto;" }

    So it's not really a redirection, but we use this to set the item in the browser, but not in the server (Session State). 
    We add a **Dynamic Action** to the item which will run when the item is changed (what is preset in the section **When**, when created via the context menu) of the item. 

    ![da](assets/charts/da.png){ style="display:block;margin:auto;" }

    We change the red marked True Action **Show** to the **Action** `Refresh`. **Affected Elemets** is our bar chart `Region` which is names `Employees`. The action can be named. If the **Name** is empty, they are shown with their **Action** in the tree.
    
    ![refresh](assets/charts/refresh.png){ style="display:block;margin:auto;" }

    You can now test the applicaion and will see, that there's a spinner on the bar chart when you click at a section of the pie chart, but there's no change. Our item will change, but this seems to have no effect. And that's an example about **Session State**. We've changed P8_DEPTNO in the browser (via JavaScript) without submitting it. So the chance is just in the Document Object Model (DOM). The query for the chart runs in the database, but there the item change is not known. So we had to submit this change by ourself. 
    The easiest way to to this, is to define in the target region (our bar char) the items, which should be submitted when the page is refreshed. For that there's a property **Page Items to Submit**

    ![submit](assets/charts/submit.png){ style="display:block;margin:auto;" }

    Last, we add a button to reset the selection. In the contect menu of the **Employees** region choose **Create Button**.
    For **Button Name** and **Label** we set `Reset`.

    ![button](assets/charts/button.png){ style="display:block;margin:auto;" }

    In the section **Behavior** with the **Type** `Standard`, you can choose as **Action** a `Trigger Action` (the simplified Dynamic Actions mentioned in chapter 2).

    ![triggeraction](assets/charts/triggeraction.png){ style="display:block;margin:auto;" }

    As **Triggered Action** we choose the **Action** `Set Value`. **Affected Element** is our **Item** `P8_DEPTNO` and the **Value** is empty as we want to set the item to null. 

    ![setvalue](assets/charts/setvalue.png){ style="display:block;margin:auto;" }
    
    Setting the value will fire the refresh action from above and we've finsihed this task.
    

!!! bytheway "Customizing Charts beyond available properties"
    <div class="two-columns">
       <div>
          *By the way*,<br>
          The charting in APEX is based on the Oracle JavaScript Extension Toolkit (JET) Data Visualizations. For more information on Oracle JET and the Data Visualizations components, please refer to the [Jet Cookbook](https://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html?component=home&demo=rootVisualizations){ target="_blank" } and the [ojChart API Guide](https://www.oracle.com/webfolder/technetwork/jet/jsdocs/oj.ojChart.htmlojChart){ target="_blank" }.
          Not every property of JET-charts can be set via the APEX UI. It's possible to manipulate these properties via Java Script. In the JavaScript Initialization Code (could be found under the **Attributes** tab of a charts region) in the Help you'll see a small example of how this can be done
       </div>
    <div>
        ![Mode](assets/charts/javascriptfunction.png.png){ style="display:block;margin:auto;" }   ***** NEW Screenshot ****
    </div>
    </div>