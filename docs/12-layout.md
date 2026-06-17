# 12. Layout

In Oracle APEX, a **Theme** defines the overall appearance and user experience of an application. It consists of a collection of **Templates** that control the layout and presentation of user interface components such as pages, regions, buttons, lists, and navigation elements. By using a theme, developers can ensure a consistent look and feel throughout the entire application. Themes also make it possible to centrally modify the application's appearance or completely change its visual design by switching to a different theme.

## 12.1 Themes

The **Universal Theme** is the standard theme provided with Oracle APEX and serves as the foundation for building modern, responsive web applications. It offers a comprehensive set of prebuilt templates, components, and styling options that automatically adapt to different screen sizes and devices. This flexibility enables developers to create attractive and professional user interfaces while minimizing the need for custom code.

Continuously enhanced with each APEX release, the Universal Theme incorporates best practices for usability, accessibility, maintainability, and modern web design. As a result, developers can efficiently build applications that provide a consistent, user-friendly, and future-proof experience across desktop and mobile devices.

!!! sampleapp "Universal Theme Reference"
    <div class="two-columns">
      <div style="flex: 50%;">
           This app introduces you to Universal Theme by providing an easy way to browse through the various templates, template options, and theme styles. The examples demonstrate how you can easily control the layout of your pages to create a great-looking application.
           This app is available online at: [https://oracleapex.com/ut](https://oracleapex.com/ut){target="_blank"}
      </div>
      <div style="flex: 50%;">
          ![ut](assets/samples/ut.png){ style="display:block;margin:auto;" }
      </div>
    </div>

In APEX, a **Theme Style** is a collection of CSS definitions and configuration settings that control the visual appearance of an application. Theme Styles provide a simple way to customize the look and feel of an application without modifying the underlying templates of the Universal Theme.

The **Theme Roller** allows developers to customize an existing Theme Style by changing colors, fonts, and other visual properties through an intuitive user interface. New Theme Styles can also be created by copying and modifying an existing style. The resulting CSS definitions are stored within the application theme and can be exported and imported for reuse in other applications.

APEX also supports user-selectable Theme Styles. In Shared Components -> User Interface Attributes, the option **Enable End Users to Choose Theme Style** allows users to switch between available styles at runtime. This feature is commonly used to provide options such as **Light Mode** and **Dark Mode**.

!!! exercise "Use the Theme Roller"
   
    <div class="two-columns">
      <div style="flex: 50%;">
          You start the **Theme Roller** from the **Developer Toolbar** in the running application. Do this on page 2, the employee report.
      </div>
      <div style="flex: 50%;">
          ![themeroller](assets/layout/themeroller.png){ style="display:block;margin:auto;" }
      </div>
    </div>

    <div class="two-columns">
      <div style="flex: 50%;">
          Make some changes and save them as a new Theme Style. Use **Select Theme** in Theme Roller to choose the Theme Style you want to start from. In the **Appearance** section, there are predefined choices, and below them you can define exact colors. The changes are immediately visible in the application. For example, change the **Link Color** and you will see it in the report. Save your changes as a new style.
      </div>
      <div style="flex: 50%;">
          ![themeroller2](assets/layout/themeroller2.png){ style="display:block;margin:auto;" }
      </div>
    </div>

    Now go to **Shared Components** and select **Themes** (in the middle is the **User Interface** section). Click the **Universal Theme** and go to the **Styles** section. There you can see your new style and inspect what is in it.

    ![styles](assets/layout/styles.png){ style="display:block;margin:auto;" }

    In **User Interface Attributes** in **Shared Components** (also reachable via the **Edit Application Definition** button on the application home page in App Builder), select the **Attributes** section. Activate all three switches. What they do is self-explanatory.

    ![styles2](assets/layout/styles2.png){ style="display:block;margin:auto;" }

    <div class="two-columns">
      <div style="flex: 50%;">
          Now, on the left side at the bottom of the application, there is a **Customize** link that lets the end user choose a style. You will also see the "Built with Love using APEX" footer we just activated.
      </div>
      <div style="flex: 50%;">
          ![styles3](assets/layout/styles3.png){ style="display:block;margin:auto;" }
      </div>
    </div>

## 12.2 Templates & Template Options

**Templates** are reusable components that define the structure and appearance of application elements such as pages, regions, reports, buttons, and lists. They control the generated HTML output and layout, ensuring a consistent user experience throughout the application. In addition to HTML markup and CSS classes, templates can also include JavaScript code to provide interactive functionality.

**Template Options** allow developers to modify the appearance and behavior of a template without changing the template itself. These options are implemented through predefined CSS classes and modifiers, making it easy to create different visual variations of the same component. For the Universal Theme, the available Template Options can be explored and demonstrated using the Sample Application, which showcases many of the supported layouts and styles.

APEX also provides **Live Template Options**, which allow developers to experiment with Template Options directly in a running application. Changes can be previewed immediately without switching back to Page Designer, making it easier to evaluate different layouts and styles during development.

Templates make extensive use of **substitution strings**, which are placeholders that are replaced with dynamic values at runtime. This mechanism enables templates to display application-specific information, such as page titles, region content, button labels, and user-specific data, while keeping the template definition reusable and maintainable.

!!! exercise "Build a template"
    
    We create a new page (use `10`) with a **Classic Report** as the component, based on the `EMP` table, and name the page `Layout`.

    ![classicreport](assets/layout/classicreport.png){ style="display:block;margin:auto;" }

    Remove the six columns for the documents and images from the report.
    When selecting the report region, you will see one **Template** property in the **Appearance** section of the **Region** tab and another one in the **Attributes** tab. The first is for the region itself, the second is a specific template for a report.

    ![appearance](assets/layout/appearance.png){ style="display:block;margin:auto;" }
    
    For every template, there are **Template Options** to change predefined properties. Most of them can be changed as **Live Template Options** in the application itself for immediate feedback. Use **Quick Edit** in the Developer Toolbar and click the wrench of the corresponding object to see the Live Template Options.

    The definitions of the **Templates** can be found in **Shared Components**. There are several different templates for each type. We can see how often a template is referenced in the application and can copy it with the icon at the end. We will copy the **Report - Generic Columns** template named **Standard** and use the name `MyReportTemplate` for our new template.

    ![reporttemplate](assets/layout/reporttemplate.png){ style="display:block;margin:auto;" }    
      
    It is now in the list and we can click on it to inspect it.
    First we want to add a pink frame around the report. To do that, we add the appropriate style (`style="border: 10px solid #ff00f7"`) to the template. Replace the first line of **Before Rows** with this one:

    ``` HTML
         <div class="t-Report #COMPONENT_CSS_CLASSES#" id="report_#REGION_DOM_ID#" style="border: 10px solid #ff00f7" #REPORT_ATTRIBUTES# data-region-id="#REGION_DOM_ID#">
    ```
    We change the color of the content in **Column Template 1**. It is possible to have multiple column templates, with conditions defining which template applies to which column. Here we add `style="color: #ff00f7; font-style: italic;"` to line one. Replace the first (and only) line in this property with this:

    ``` HTML
         <td class="t-Report-cell" #ALIGNMENT# #ACCESSIBLE_HEADERS#  style="color: #ff00f7; font-style: italic;">#COLUMN_VALUE#</td>
    ```
    Save that, choose our new template for the report (remember, in the Attributes tab, not the Region tab), and check the result.


!!! bytheway "HTML DOM ID and Static ID"
    *By the way*,<br>
    In APEX, a Static ID is a developer-defined identifier that can be assigned to components such as pages, regions, items, and buttons. It provides a stable and meaningful way to reference components from CSS, JavaScript, Dynamic Actions, or automated tests. It's very important when using APEXLang. 
    
    Prior to APEX 26.1, the Static ID was used to identify the corresponding HTML element in the browser. Starting with APEX 26.1, APEX introduces a clearer distinction between the Static ID and the HTML DOM ID. While the Static ID remains a logical identifier within APEX, the new HTML DOM ID attribute allows developers to explicitly define the ID that will be rendered in the browser's DOM. This provides greater control when integrating custom JavaScript, CSS, third-party libraries, and automated UI testing tools.

    So our example with the pink frame would work in older releases, but there you had to replace "DOM_ID" with "STATIC_ID".
    
    By separating these concepts, APEX applications become easier to maintain and less dependent on internally generated HTML identifiers. Developers can now define stable DOM IDs where needed, while continuing to use Static IDs for application-level component identification. 

## 12.3 Template Components

Before Oracle APEX 23.1, developers often used Classic Reports together with custom report templates to create specialized user interface components. This approach required a good understanding of report templates and the available substitution strings in order to generate the desired HTML output.

Template Components provide a modern and much more flexible alternative. They allow developers to create reusable UI components based on HTML templates, optionally enhanced with CSS and JavaScript. Template Components can be used as region types to display single or multiple data records, and even within report columns.

APEX includes several built-in Template Components, but developers can also create their own components and share them with other application developers. This enables a low-code approach to building custom user interface elements while ensuring consistency and reusability across applications.

Template Components make it possible to encapsulate complex UI functionality into easy-to-use building blocks, allowing application developers to focus on business requirements rather than implementation details.

A great introduction to Template Components is the blog post [Developing a Responsive Number Counter with Oracle APEX: My First Template Component](https://tm-apex.hashnode.dev/developing-a-responsive-number-counter-with-oracle-apex-my-first-template-component){target="_blank"} by Timo Herwix. It provides a step-by-step guide to building a Template Component using HTML, CSS, and JavaScript, and demonstrates how to integrate and use it within an APEX application.

For a broader overview, Oracle also offers an APEX Office Hours session dedicated to Template Components. The recording is available on [YouTube](https://www.youtube.com/watch?v=BiKOTn4bL1A){target="_blank"} and provides a practical introduction to the concepts, architecture, and use cases of this powerful feature.

!!! bytheway "APEX Office Hours"
    *By the way*,<br>
    [APEX Office Hours](https://asktom.oracle.com/ords/r/tech/catalog/series-landing-page?p5_oh_id=744){target="_blank"} are free online sessions hosted by the Oracle APEX product team. They provide developers with the opportunity to learn about new features, best practices, and real-world use cases directly from APEX experts. Sessions typically include live demonstrations, technical deep dives, and interactive Q&A segments where participants can ask questions and receive guidance from the product team. Recordings of past Office Hours are available on YouTube and cover a wide range of topics, from introductory concepts to advanced development techniques. They are an excellent resource for staying up to date with the latest Oracle APEX features and development practices.

!!! exercise "Build and use Template Component"
    In **Shared Components**, go to **Templates**, where we changed the report template before, and create a **Template Component**.

    ![tc](assets/layout/tc.png){ style="display:block;margin:auto;" }    
    
    Select **From Scratch** and name it `MyTC`.

    ![tc2](assets/layout/tc2.png){ style="display:block;margin:auto;" }   

    We want to use this component for a single record (**Single (Partial)**) and for multiple rows (**Multiple (Report)**), so we can use this Template Component for a report (Multiple) or, for example, in a report column (Single).
    HTML itself does not support these template conditions, but APEX template syntax does. In the **Partial** field, enter this code snippet.

    ```HTML
          {if APEX$IS_LAZY_LOADING/}
            <div>#NAME# #JOB#</div>
          {else/}
            <div class="t-rotatingcard">
              <div class="t-front">
                <div>{with/}{apply THEME$AVATAR/}</div>
                <div class="t-name">#NAME#</div>
                <div>#JOB#</div>
              </div>  
              <div class="t-back">
                <div>{with/}{apply THEME$AVATAR/}</div>
                <div>SAL=#SALARY#/COMM=#COMMISSION#</div>
              </div>
            </div>      
          {endif/}
    ```

    There is a reference to another predefined Template Component named Avatar. We want to build a rotating card that uses the Avatar component and shows information on both sides. The required CSS classes referenced here will be added later.

    ![tc3](assets/layout/tc3.png){ style="display:block;margin:auto;" } 

    Now we have defined the Partial, which is referenced from the Multiple settings via `#APEX$PARTIAL#`. Next, we change the HTML for **Report Row**, **Report Body** and **Report Container** with the following HTML snippets.
    
    ```HTML
         <li #APEX$ROW_IDENTIFICATION# class="t-card-item">#APEX$PARTIAL#</li>
    ```    

    ```HTML
         <ul class="t-card-list">  #APEX$ROWS# </ul>
    ```    

    ```HTML
         <div id="#APEX$DOM_ID#" class="t-card-report">  #APEX$REPORT_BODY# </div>
    ```   

    ![tc4](assets/layout/tc4.png){ style="display:block;margin:auto;" } 
    
    In the **Custom Attributes** section, we can define placeholders that are visible to developers in Page Designer and make the component easier to use. We do that via **Synchronize from Templates**.
    
    ![tc5](assets/layout/tc5.png){ style="display:block;margin:auto;" } 
    
    If there are more attributes, they can be grouped. We have **Commission**, **JOB**, **Name** and **Salary** and will group them into `Basic` and `Money` to see how that looks later in Page Designer. Attributes not assigned to a group are in the Settings group by default.

    ![tc6](assets/layout/tc6.png){ style="display:block;margin:auto;" } 

    ![tc7](assets/layout/tc7.png){ style="display:block;margin:auto;" } 

    To assign an attribute to a group, click the attribute's name.

    ![tc8](assets/layout/tc8.png){ style="display:block;margin:auto;" } 

    Now create a new region on page 10 to the right of the existing **Layout** region. As the type, choose our new Template Component. This is easiest via drag and drop from the gallery, as our new component is now available there.
    
    ![region_tc](assets/layout/region_tc.png){ style="display:block;margin:auto;" }     
    
    Name the new region `Swap`. The component `MyTC` is preselected as the **Type**, so we only need to select `EMP` as the **Table Name** for our source.

    ![region_tc2](assets/layout/region_tc2.png){ style="display:block;margin:auto;" }     
    
    When we open the Attributes tab, we see the sections **Basic** and **Money** with their attributes from the Template Component definition. We map the columns accordingly.

    ![region_tc3](assets/layout/region_tc3.png){ style="display:block;margin:auto;" }   
   
    Running this *works* (sort of), but does not look nice because the CSS is missing. At page level, copy the following CSS (which, by the way, was generated with some AI help) to the **Inline** attribute.

    ```CSS
        .t-card-list {
            list-style: none;
            padding: 0;
            margin: 0;

            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
        }

        .t-card-item {
            display: flex;
            justify-content: center;
        }

        .t-rotatingcard {
            position: relative;
            width: 15rem;
            height: 10rem;
            perspective: 15rem;
            font-size: 14px;
        }

        .t-front, .t-back {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: auto;
            border-radius: 20px;
            box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.8);
            transition: transform 2s cubic-bezier(0.25, 0.8, 0.25, 1);
            backface-visibility: hidden;
            overflow: hidden;
            flex-direction: column;
        }

        .t-front:before, .t-front:after, .t-back:before, .t-back:after {
            position: absolute;
        }

        .t-front:before, .t-back:before {
            top: -20px;
            right: -20px;
            width: 40px;
            height: 40px;
            background-color: rgba(255, 255, 255, 0.08);
            transform: rotate(45deg);
            z-index: 1;
        }

        .t-front:after, .t-back:after {
            top: 0;
            right: 5px;
            font-size: 24px;
            transform: rotate(45deg);
            z-index: 2;
        }

        .t-front {
            background-color: #90ee90;
            color: green;
            transform: rotateX(0deg);
        }

        .t-back {
            background-color: #ffcccb;
            color: red;
            transform: rotateX(180deg);
        }

        .t-rotatingcard:hover .t-back {
            transform: rotateX(360deg);
        }

        .t-rotatingcard:hover .t-front {
            transform: rotateX(180deg);
        }

        .t-name {
            text-decoration: underline;
        }
    ```

   ![css](assets/layout/css.png){ style="display:block;margin:auto;" }   

Another approach is to create a file in Shared Components - **Static Application Files** and reference it in the **File URLs** attribute above. The most reusable approach, if you want to use this Template Component everywhere with the same CSS, is to reference this file in the Template Component itself, so it is available regardless of the page used.

<div class="two-columns">
  <div style="flex: 50%;">
     Acceptance through bells and whistles ;)
  </div>
  <div style="flex: 50%;">
        <img src="assets/layout/rotatingcard.png" alt="rotatingcard" style="display:block;margin:auto;">
  </div>
</div>

## 12.4 Layout at Object Level

You can manipulate layout at the object level by adding CSS classes without modifying or creating templates.

!!! exercise "Add CSS & Styles to Items"
    We will change the item **P3_SAL** on the employee form (page 3). In the **Appearance** section, add the string `my-highlight` to the **CSS Classes** property.
    Now we need to define this class. This could be done - as seen in the previous chapter - at page level. Write the following code in the **Inline** field in the **CSS** section at page level.

    ``` CSS
        .my-highlight {
          background-color: #fffae6;
          border: 1px solid #f7c948;
          font-weight: bold;
        }
    ```
    
    Check the SAL item in the application now. There should be a yellow frame around the salary.

    It is also possible to add individual HTML styles.

    Now go to the item **P3_COMM** and, in the **Advanced** section, set the **Custom Attributes** field to `style="color:red; font-size:28px;"`

    The commission should now be shown in red and large.

    Finally, we want to format the name conditionally. To do this, create a **Dynamic Action** with the **Page Load** event. In the **True Action**, choose **Execute JavaScript Code** as the action and copy the following snippet into the **Code** field.

    ```javascript
        if ($v('P3_JOB') == 'PRESIDENT' || $v('P3_JOB') == 'MANAGER') {
            $('#P3_ENAME').css('background-color', '#ffe6e6');
          } else {
            $('#P3_ENAME').css('background-color', '');
          }
    ```     
    
    The name now has a red background when the job is Manager or President.

!!! bytheway "CSS utility classes"
    <div class="two-columns">
      <div style="flex: 50%;">
            *By the way*,<br>
            while many components within Universal Theme automatically make use of several colors, you can use them in custom components as well. Universal Theme provides a number of CSS utility classes that can be used to apply this color palette to any HTML markup: [Click here](https://oracleapex.com/ords/r/apex_pm/ut/color-and-status-modifiers){target="_blank"}
      </div>
      <div style="flex: 50%;">
          ![banner](assets/layout/cssclasses.png){ style="display:block;margin:auto;" }
      </div>
    </div>



## 12.5 Responsive Grid Layout

Oracle APEX uses a Responsive Grid Layout based on a 12-column grid. Page components such as regions and items can be positioned by choosing where they start and how many columns they span. This makes it easy to create layouts that adapt to different screen sizes while keeping the page structure consistent. The grid can also be nested, allowing regions or items inside a parent grid column to define their own internal 12-column layout.

Positioning within the grid is controlled by the following properties:
* **Start New Row** - whether the object starts a new row
* **Column** - the column, from 1 to 12, where the object starts
* **Column Span** - the number of columns the object spans
* **New Column** - whether the object starts a new column in the same row (only available when **Start New Row** is set to No)


!!! bytheway "Responsive Grid Layout"
    <div class="two-columns">
        <div style="flex: 50%;">
          *By the way*,<br>
          You can visualize the grid with the Developer Toolbar. Click the information icon in the toolbar and choose **Show Layout Columns** or **Hide Layout Columns**.
        </div>
        <div style="flex: 50%;">
            ![grid](assets/layout/grid.png){ style="display:block;margin:auto;" }   
        </div>
    </div>
