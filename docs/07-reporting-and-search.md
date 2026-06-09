# 7. Reporting & Search

This is a demo chapter only without exercises.

## 7.1 Reporting Regions

!!! sampleapp "Sample App Reporting"
    <div class="two-columns">
      <div style="flex: 50%;">
           This application highlights the reporting capabilities of Oracle APEX. You can create Interactive Reports, Interactive Grids, Faceted Search Reports, Cards Reports, and Classic Reports declaratively using SQL.
      </div>
      <div style="flex: 50%;">
          ![reporting](assets/samples/reporting.png){ style="display:block;margin:auto;" }
      </div>
    </div>

**Classic Reports**

<div class="two-columns">
  <div>
    A classic report is a list of data based on the formatted result of a SQL query or a table/view. Column Sorting is an out of the box feature. For Classic Reports there are several Template Options available to generate other types of output than default lists. 
  </div>
  <div>
    <img src="../assets/reporting/classic.png" alt="classic" style="display:block;margin:auto;">
  </div>
</div>


**Interactive Reports**

<div class="two-columns">
  <div>
    An Interactive Report is a powerful reporting component in Oracle APEX that enables end users to analyze and customize data without requiring developer intervention. Users can sort, filter, search, highlight, aggregate, compute, and group data directly within the report. Interactive Reports also support saved report layouts, control breaks, charts, and data downloads in various formats. This makes them an ideal choice for ad-hoc analysis and self-service reporting.
  </div>
  <div>
    <img src="../assets/reporting/ir.png" alt="ir" style="display:block;margin:auto;">
  </div>
</div>


**Interactive Grids**

!!! sampleapp "Sample App Interactive Grids"
    <div class="two-columns">
      <div style="flex: 50%;">
           This application showcases the features and functionality of the Oracle APEX Interactive Grid. Through its interactive grid sample pages, users can explore its versatile capabilities, such as comprehensive reporting, seamless data editing or intuitive pagination.
      </div>
      <div style="flex: 50%;">
          ![ig](assets/samples/ig.png){ style="display:block;margin:auto;" }
      </div>
    </div>    

An Interactive Grid combines the reporting capabilities of an Interactive Report with built-in data editing functionality. Users can sort, filter, customize, and analyze data while also creating, updating, and deleting records directly within the grid.

**Cards**

!!! sampleapp "Sample App Cards"
    <div class="two-columns">
      <div style="flex: 50%;">
           This application highlights Cards regions in Oracle APEX. Cards regions are a native region type. They provide developers with a powerful and flexible new way to display data in bite-sized blocks, ideal for use in faceted search, or presenting at-a-glance information.
           This app is online available to view: [https://apex.oracle.com/go/sample_cards](https://apex.oracle.com/go/sample_cards){target="_blank"} 
      </div>
      <div style="flex: 50%;">
          ![cards](assets/samples/cards.png){ style="display:block;margin:auto;" }
      </div>
    </div>

Cards is a native report region type in Oracle APEX that displays data in a collection of compact, visually appealing blocks. Card regions are particularly well suited for faceted search applications and dashboards where information needs to be presented in an easy-to-consume format.

Developers can customize various aspects of a card, including its layout, appearance, icons, badges, media, and actions. Each card can support multiple actions, enabling users to navigate to related pages or execute specific functionality.

Media content can be sourced from a BLOB column, a URL, videos embedded in an iFrame, or Oracle JET data visualizations, making Cards a versatile option for modern application interfaces.

![cards](assets/reporting/cards.png){ style="display:block;margin:auto;" } 


## 7.2 Search Capabilities

**Faceted Search**

<div class="two-columns">
  <div>
    A Faceted Search provides users with an intuitive way to search and filter large amounts of data. It typically consists of a search region containing multiple filter facets and a results region that displays the matching records. As users apply filters, the results are updated dynamically, making it easy to narrow down large data sets.
    At the beginning of this workshop, we used the Create Application Wizard to generate a Faceted Search page. This demonstrated how quickly Oracle APEX can create a powerful search interface with minimal configuration.
  </div>
  <div>
    <img src="../assets/reporting/facets.png" alt="facets" style="display:block;margin:auto;">
</div>

**Smart Filters**

Smart Filters provide a compact and user-friendly alternative to Faceted Search. Instead of displaying multiple filter controls, Smart Filters use a single search field that allows users to enter search terms and apply filters dynamically. The search results can be displayed using different region types, such as Cards, Classic Reports, Maps, or Calendars.

While Faceted Search is well suited for complex filtering scenarios, Smart Filters offer a more space-efficient layout and are ideal for applications that require a simple and intuitive search experience.

![smartfilter](assets/reporting/smartfilter.png){ style="display:block;margin:auto;" } 


**Application Search**

!!! sampleapp "Sample App Application Search"
    <div class="two-columns">
      <div style="flex: 50%;">
           This application showcases the Application Search feature, introduced with APEX 22.2. Search Configurations and Search Regions allow developers to add robust search engine functionality to their APEX applications.
      </div>
      <div style="flex: 50%;">
          ![search](assets/samples/search.png){ style="display:block;margin:auto;" }
      </div>
    </div>

The Application Search feature provides a seamless search experience that feels like a search engine within your application. It allows users to search for data across multiple data sources, making it easy to find the information they need.
With Application Search, you can create multiple search configurations that search a local data source, REST-enabled SQL, or REST API. This allows you to provide a comprehensive search experience for your users, retrieving relevant information from a variety of sources.
Search Configurations contain information about a searchable data source and provide an abstraction over concrete search implementations, allowing for flexibility and future improvements. You can create and manage your **Search Configurations** under **Shared Components** → **Navigation and Search** → **Search Configurations**
