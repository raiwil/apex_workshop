# 16. AI in APEX

Artificial intelligence has rapidly become an important topic for application development. While a comprehensive discussion of AI is beyond the scope of this workshop, this chapter provides a brief introduction to the AI capabilities available in Oracle APEX and highlights some of the most important features introduced in recent releases.

Starting with Oracle APEX 24.1, AI capabilities have become an integral part of the platform, providing support both for developers building applications and for end users interacting with them. Oracle APEX enables seamless integration with large language models (LLMs) and AI services, making it easier to incorporate generative AI into business applications.

For developers, AI can assist with tasks such as generating SQL queries, explaining application components, creating page content, and accelerating application development. For end users, AI-powered features can be embedded directly into applications, enabling natural language interaction, intelligent search, content generation, summarization, and conversational user experiences.

With Oracle APEX 26.1, the introduction of the new **APEXlang** application representation further expands the possibilities for AI-assisted development. Because application definitions can now be represented in a structured, human-readable format, AI tools can better understand application components, relationships, and business logic. This improves the quality of AI-generated explanations, recommendations, code suggestions, and application modifications, while also supporting modern development workflows based on source control and collaboration.

As AI capabilities continue to evolve, Oracle APEX provides a powerful platform for combining low-code development with generative AI, allowing organizations to build more intelligent, productive, and user-friendly applications.

## 16.1 Configure a Generative AI Service

If you see demos or screenshots of Oracle APEX and wonder why certain AI features are not available in your environment, it is usually because no **Generative AI Service** has been configured for the workspace in the **Workspace Utilities**. AI-assisted features in the App Builder only become visible after an external AI provider has been configured and enabled.

Oracle APEX currently supports several Generative AI providers, including OCI Generative AI Service, OpenAI, Cohere, Google Gemini, Anthropic Claude, and Mistral AI. In addition, locally hosted models, such as those provided through Ollama, can also be integrated.

To enable AI features within the App Builder, a provider must be configured and the **Used by App Builder** option must be enabled. Once this has been done, AI-related features become available throughout the development environment.

![genai](assets/ai/genai.png){ style="display:block;margin:auto;" }

Multiple AI providers and models can be configured within the same workspace. However, only one provider can be designated for App Builder assistance at a time. Applications themselves can still access and use multiple AI models depending on their specific requirements.

## 16.2 AI-Assisted Application Development

Oracle APEX includes the **APEX AI Assistant**, an integrated conversational assistant that leverages Generative AI to support a wide range of development tasks. It can help create applications, generate and explain code, optimize SQL statements, and assist with troubleshooting directly within the APEX development environment.

**Create Applications (or pages) Using Natural Language**

Instead of starting with a wizard, developers can describe the desired application in natural language. Based on this description, the AI Assistant generates an application blueprint containing pages, data sources, and features. The blueprint can then be reviewed, refined, or generated immediately. The same is possible when adding a page to an application.

**AI-Assisted SQL Authoring**

The AI Assistant can generate SQL queries based on natural language prompts. Developers can describe the information they want to retrieve without needing detailed knowledge of table structures, column names, or SQL syntax. Existing queries can also be enhanced or modified through conversational instructions.

**AI Code Assistance**

The AI Assistant supports the generation and explanation of code in several languages commonly used in APEX, including:

* PL/SQL
* JavaScript
* HTML
* CSS

This can significantly accelerate development and help developers learn unfamiliar APIs or coding patterns. AI-generated code should still be reviewed and tested before it is used in an application.

**AI-Assisted Debugging**

When SQL or PL/SQL errors occur, APEX can invoke the AI Assistant directly from the error dialog using the **Help Me Fix This** option. The assistant analyzes the error message, explains the likely cause, and suggests possible solutions or code corrections.

**AI-Assisted Development Through APEXlang**

Oracle APEX applications are defined using a machine-readable metadata model. This makes APEX applications well suited for AI-assisted development.

Modern AI tools can understand and generate APEXlang, enabling developers to create new application components, modify existing pages, or refactor applications using natural language instructions. For example, developers can describe a new page, region, or business requirement in plain text and have the corresponding APEX definitions generated automatically. Tools such as Visual Studio Code combined with AI assistants like Codex can therefore become powerful companions for developing and maintaining APEX applications outside the traditional App Builder environment.

## 16.3 AI-Powered APEX Applications

APEX makes it easy to integrate artificial intelligence into business applications. By configuring one or more AI providers at the workspace level, developers can leverage generative AI capabilities both declaratively and programmatically. This enables the creation of intelligent applications that provide users with natural language interactions, content generation, summarization, recommendations, and conversational experiences.

**Conversational AI Experiences**

APEX includes built-in support for AI-powered conversations. Developers can quickly add chat-based assistants to applications by defining a system prompt, welcome message, and user interface options. These assistants can be displayed inline on a page or within a modal dialog, allowing users to interact with AI capabilities directly within the application context.

**Natural Language in Interactive Reports**

Starting with Oracle APEX 26.1, Interactive Reports can accept natural language input from end users. When **Natural Language Support** is enabled for a report region, users can enter questions or instructions in the search field, for example to apply filters, highlight rows, sort data, show or hide columns, or create control breaks, group by views, pivot views, and charts.

APEX translates the input into declarative report settings using the configured Generative AI Service. The component remains a standard Interactive Report, but it becomes much more accessible to business users because they do not need to know every menu and filter option. Good results depend on meaningful column names and, where useful, report context, column context, and reference data such as LOVs.

**APEX_AI API**

For more advanced use cases, APEX provides the **APEX_AI** package. Its APIs allow developers to interact with configured AI services programmatically and build custom AI-driven functionality. By abstracting the differences between individual AI providers, the API enables developers to focus on business requirements rather than provider-specific implementation details.

**Retrieval-Augmented Generation (RAG)**

While large language models provide impressive general knowledge, enterprise applications often require answers based on company-specific information. Oracle APEX 26.1 supports the development of Retrieval-Augmented Generation (RAG) solutions, combining generative AI with data stored in the Oracle Database. Using vector embeddings and vector search capabilities, relevant information can be retrieved from documents, knowledge bases, or business data and provided to the AI model as additional context. This approach helps improve the accuracy, relevance, and trustworthiness of AI-generated responses.

**AI Agents and AI Tools**

APEX 26.1 introduces support for AI Agents and AI Tools, allowing AI assistants to interact with application functionality and external services. Instead of only generating text, an AI assistant can invoke predefined tools to perform actions, retrieve business data, execute processes, or query external systems. Developers can expose application logic as tools and control exactly which capabilities are available to the AI model.

An important advantage of this approach is that not all potentially relevant data has to be sent to the large language model upfront. Instead, the model receives a description of the available tools and can decide when additional information is required. It can then invoke the appropriate tool to retrieve only the necessary data. This reduces prompt size, minimizes data transfer, improves performance, and helps keep sensitive business data under tighter control.

Combined with Retrieval-Augmented Generation (RAG), AI Tools enable the development of intelligent assistants that can not only answer questions but also access enterprise knowledge, perform actions, and actively support users in completing business tasks.

## 16.4 Semantic Search with VECTOR Data Type in 26ai

Semantic similarity search helps end users find relevant results even when their search terms do not exactly match the stored text. A **Search Configuration** can be used to add Oracle Database 26ai vector search to an APEX application. Developers can configure details such as index usage, distance metrics, and maximum vector distance, enabling search experiences that are more tolerant of natural language input.

!!! sampleapp "Sample App Vector Search"
    <div class="two-columns">
      <div style="flex: 50%;">
           This application shows how to leverage Vector Search in Oracle Database 26ai. Learn how to generate vector embeddings and perform vector search using APEX Search Configurations. The application also highlights the differences from traditional Oracle Text search and showcases how to combine both methods.
      </div>
      <div style="flex: 50%;">
          ![vectorsearch](assets/samples/vectorsearch.png){ style="display:block;margin:auto;" }
      </div>
    </div>
