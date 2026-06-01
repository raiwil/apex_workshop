# 19. AI in APEX

APEX AI Assistant, AI-powered application features, and vector search.

![19. AI in APEX](assets/pages/page-095.png){ .chapter-image }

## What this chapter covers

- Explains that AI features appear only after a generative AI service is configured.
- Shows AI-assisted app development and SQL/PL/SQL/code authoring.
- Covers AI-powered applications, conversational experiences, and the APEX_AI API.
- Ends with vector search support as a new application capability.

## Workshop transcript

<details markdown="1">
<summary>Transcribed from PDF pages 95-97</summary>

### PDF page 95

19 AI in APEX Everyone is talking about AI. Starting with release 24.1, there are integration points between APEX and AI. This involves both AI support in the development process and the provision of AI for the users of APEX applications.

If you see demos or screenshots of APEX and wonder why you don't see these AI features, they only become visible when an external Generative AI service has been configured in the workspace. You can currently choose between Cohere, Open AI and OCI Generative Service.

Only when this has been done and the Switch for Used by App Builder has been activated will the corresponding buttons or options described under 19.1 appear there.

It is possible to configure several AI providers and these can also be operated locally (OLLAMA models). Only one can be configured here for the App Builder, but several models can be accessed for AI applications.

19.1 AI-Assisted Application Development Introducing APEX AI Assistant, an integrated, conversational companion that uses generative AI to help with many development activities, from creating apps to authoring code. With APEX AI Assistant, you can generate, optimize, explain, or debug SQL queries, or get help with HTML, CSS, JavaScript, and PL/SQL - in any code editor across APEX.

Create Apps using Natural Language Simply describe the kinds of pages, data, and features you want, and APEX AI Assistant puts together an application blueprint to get you started. You can further refine the application using the full Create App wizard or generate the application immediately.

### PDF page 96

AI-Assisted SQL Authoring APEX AI Assistant helps you author SQL queries over your application data model by understanding your natural language description of what data you want to retrieve. Augment existing queries by explaining the additional information to include. This frees you from having to lookup exact database table and column names or precise SQL syntax to achieve a result.

AI Code Assistantance Generate PL/SQL, JavaScript, HTML & CSS Code.

AI-Assisted Debugging Need to debug errors within your SQL or PL/SQL code? Use the "Help me fix this" link below the error message to invoke the APEX AI Assistant to help you diagnose the issue and suggest solutions.

### PDF page 97

19.2 AI-Powered APEX Applications Oracle APEX 24.1 makes it easier than ever to integrate AI capabilities into your own applications. Simply configure one or more Al providers, then build custom AI features using them declaratively or programmatically with the new APEX_AI API.

- Configure Generative AI Services

APEX offers an abstraction layer for AI services at the Workspace level. This enables seamless integration with these services across applications and makes for easy portability during import/export.

- Conversational AI Dialogs

Easily configure AI-powered conversational experiences using a new dedicated Dynamic Action. Simply provide the system prompt, welcome message, and customize the appearance, choosing whether to display the AI assistant within a modal dialog or inline directly on your page.

- APEX_AI API

Unlock deeper AI integrations using the new APEX_AI API. Its chat() and generate() methods simplify building intelligent features using the generative AI services configured within your APEX Workspace. They save you from having to understand the differences of individual provider's APIs and interaction flows.

Both parts are covered in an APEX Office Hour (https://youtu.be/0F5Tu7xQuXE), where you can see a demonstration of AI-Assited Application and the building of AI-Powered APEX Applications Development (Minute 17:50-42:00). Additionally there is an almost 3-hour Learning Path that discusses and demonstrates the various aspects of this: https://apex.oracle.com/go/ai-learn

A nice LiveLab demonstrating Generative AI in APEX is Build an Innovative Q&A Interface Powered by Generative AI with Oracle APEX11.

And of course, APEX can also use the new vector data type in the 23ai database, as it is available via SQL and PL/SQL commands

Vector Search Support

Empower end-users to find the most relevant results with semantic similarity searching. A new Search Configuration type simplifies adding Oracle Database 23ai vector search to your applications12. Specify details like index usage, distance metrics, and maximum vector distance, then watch users smile as they find what they're looking for more quickly than ever.

That’s just the beginning of the AI Journey.

11 https://apexapps.oracle.com/pls/apex/r/dbpm/livelabs/view-workshop?wid=3947 12 https://blogs.oracle.com/apex/post/nextgen-data-search-integrating-ai-vector-search-into-search-configurations

</details>
