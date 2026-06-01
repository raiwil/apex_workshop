# 21. Miscellaneous

A collection of additional APEX capabilities and patterns.

![21. Miscellaneous](assets/pages/page-099.png){ .chapter-image }

## What this chapter covers

- Covers JSON documents, master detail, and APEX collections.
- Touches on tree navigation and QR codes.
- Explains email templates, tabs, automations, plug-ins, and application search.
- Ends with the built-in text editor support for Markdown and HTML.

## Workshop transcript

<details markdown="1">
<summary>Transcribed from PDF pages 99-102</summary>

### PDF page 99

21 Miscellaneous 21.1 APEX & JSON Documents The chapter on REST Data Sources already mentioned that APEX can handle nested JSON documents. This refers not only to REST data sources, but of course also to JSON documents or objects in the database itself. This means that JSON columns, JSON collections and the JSON Relational Duality Views included in database release 23ai can be used as data sources, but can also be written.

21.2 Master Detail

There are out-of-the-box options for master-detail displays. These can be stacked, i.e. show both the master and the details on a single page (one below the other or side by side). Drilling down with a separate detail page is also possible.

21.3 Collections

In the database sessions, you can use temporary tables to store data during the session. But APEX is stateless, and you can’t use these tables from an APEX application. Therefore, you can use Collections to temporarily capture one or more nonscalar values. Collections enable you to store rows and columns currently in session state so they can be accessed, manipulated, or processed during a user's specific session. Every collection contains a named list of members containing up to 50 text attributes, 5 number attributes, five date attributes, and one XMLType, BLOB, CLOB each APEX_COLLECTION is the related API with which you can insert, update and delete members.

21.4 Tree Navigation

You can build a tree navigation using the region type Tree.

### PDF page 100

21.5 QR-Codes

The QR Code item type lets you easily embed scannable QR codes that contain text, URL, phone, email, SMS, or location data. You can also use the associated QR Code API (APEX_BARCODE) for embedding QR codes within reports, emails, or other parts of your application. Just use the QR Code Item Type and choose your source (static or dynamic) and decide the size of the barcode.

21.6 EMails & EMail-Templates With the API APEX_MAIL, it’s possible to send Emails from APEX Applications via PL/SQL. This API is based on the database package UTL_SMTP and a prerequisite for this is the configuration of an SMTP-Server in the configuration of the APEX Instance.

You can code your Email manually or in the Shared Components (User Interface – Email Templates)

You can add there placeholders (like #ANREDE# in the above screenshot) and instead of using APEX_MAIL in PL/SQL Code, you can invoke the Send E-Mail Process Type and map the Mail- and Placeholder values to your items.

A database job (ORACLE_APEX_MAIL_QUEUE) periodically sends the mails from the active mail queue. The sending can be pushed (APEX_MAIL.PUSH_QUEUE). You can check your mail queue and the sending history in the database views APEX_MAIL_LOG and APEX_MAIL_QUEUE.

### PDF page 101

21.7 Tabs

For tabs on a page, to quickly change the view of different regions on a page. There’s in the Appearance Section for Regions Tab Container with which you can build such tabs for your page,

There’s a region type Region Display Selector, with which you also can get such tabs automatically for your page.

21.8 Automations Automations are a sequential set of actions, triggered by query results that monitor data and then perform the appropriate action.

It’s possible to define multiple actions (typically PL/SQL) in sequential order to run. There’s an API APEX_AUTOMATION available to trigger these automations via PL/SQL. Everything is logged, so you can review what’s being executed with the appropriate messages. The CREATE JOB privilege in the database is needed to use this feature, which deeply integrates scheduling into APEX applications.

### PDF page 102

21.9 Plug-ins Plug-ins enable you to extend your APEX applications with custom functionality that is not available natively in the platform: https://apex.oracle.com/en/solutions/apps/#plug_ins

Plug-Ins could be integrated in the Shared Components in the Other Components section.

Many examples of plug-ins can be found on the community-maintained site https://apex.world/

21.10 Application Search

The Application Search feature provides a seamless search experience that feels like a search engine within your application. It allows users to search for data across multiple data sources, making it easy to find the information they need. With Application Search, you can create multiple search configurations that search a local data source, REST- enabled SQL, or REST API. This allows you to provide a comprehensive search experience for your users, retrieving relevant information from a variety of sources. Search Configurations contain information about a searchable data source and provide an abstraction over concrete search implementations, allowing for flexibility and future improvements. You can create and manage your Search Configurations under Shared Components → Navigation and Search → Search Configurations

By the way, it is possible to provide the end user with a text editor. This can have different menu sizes and use HTML or Markdown.

</details>
