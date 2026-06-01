# 17. Translations

Application languages, translation repository, and XLIFF.

![17. Translations](assets/pages/page-092.png){ .chapter-image }

## What this chapter covers

- Adds another application language.
- Seeds translatable text from the application.
- Exports and re-imports XLIFF translation files.
- Publishes translated applications and maintains translation repository entries.

## Workshop transcript

<details markdown="1">
<summary>Transcribed from PDF pages 92-93</summary>

### PDF page 92

17 Translations APEX has an embedded capability to use applications in more than one language.

In the Shared Components click Application Translations

There you see the steps to do to add another language to your application.

First (1), we define an application language

Now we seed the translatable text (2)

This can be exported to an XLIFF File (3). XLIFF is an XML-based standard format that can be translated by professional tools.

Such a translated file can be applied after translation (5)

### PDF page 93

Then you can publish your translated application. (6)

In the Translation Repository, you can see your translation

and you can even do translations here.

Changing some translations requires a new publishing of the translated application. (6) Changing something in the original applications requires potentially a new seeding. (2)

Under Globalization, you can define, from where the language should be derived, for example, the language of the browser session

By the way, on the APEX start page, it will be possible to change the language of the development interface at runtime (if language sets have been installed). Just scroll down and select the desired language. By the way, this can also be selected when logging in to the environment.

</details>
