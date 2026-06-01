# 20. Printing/PDF with APEX

Print servers, document generation, and build options.

![20. Printing/PDF with APEX](assets/pages/page-098.png){ .chapter-image }

## What this chapter covers

- Explains the main print server choices in APEX.
- Mentions Oracle Analytics Publisher, APEX Office Print, and Oracle Document Generator.
- Connects printing to report layouts and report queries.
- Notes the role of build options for hiding unfinished functionality.

## Workshop transcript

<details markdown="1">
<summary>Transcribed from PDF pages 98-98</summary>

### PDF page 98

20 Printing/PDF with APEX

In the Instance Settings of APEX it’s possible to configure a print server to use for generating documents.It’s possible to choose

- External (Apache FOP) for some basic printing functionality, which includes creating report queries

and printing report regions using the default templates provided in APEX and using your own customized XSL-FO templates.

- Oracle Analytics Publisher (Licence required), with which you can upload your own customized RTF

or XSL-FO templates for printing reports within APEX.

- APEX Office Print (Licence or Subscription required) to convert query results them from JSON to

PDF/MS Office formats.

Starting with 24.1 it’s possible to use the Oracle Document Generator Pre-built Function13 (OCI Tenant required), a serveless function in OCI, which brings – similar to Analytics Publisher and APEX Office Print- DOCX templates together with JSON Data as content to generate PDF-Documents14.

The integration is done via the existing functionality with Reports Layouts & Reports Queries in the Shared Components of an application. A Process Type and a Dynamic Action is available to use them in applications and for individual use the API APEX_PRINT is available.

By the way, with Build Options it’s easy possible to hide functionalities which for example is uncomplete. This can be done during installation so that applications can have different functionalities depending the environment.

13 https://blogs.oracle.com/apex/post/seamless-pdf-generation-with-oracle-apex-and-oci-document-generator 14 This cannot be done at apex.oracle.com, as the print server must be configured in the internal workspace

</details>
