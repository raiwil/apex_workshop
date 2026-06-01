# 18. Application Lifecycle Management

Working copies, Git-oriented development, and merging changes.

![18. Application Lifecycle Management](assets/pages/page-094.png){ .chapter-image }

## What this chapter covers

- Describes working copies introduced in APEX 23.2.
- Shows how developers can branch, change, and merge application work safely.
- Highlights comparison and merge capabilities.

## Workshop transcript

<details markdown="1">
<summary>Transcribed from PDF pages 94-94</summary>

### PDF page 94

18 Application Lifecycle Management The paper Understanding the Oracle APEX Application Development Lifecycle (https://apex.oracle.com/go/lifecycle-technical-paper) describes, how to handle the Lifecycle of an APEX Application including the integration with Git, where the tool SQLcl plays an important role.

Working copies of applications have now been introduced in Release 23.2. Create a working copy of an application to fix a bug or add a feature, then selectively merge your changes back into the main application. You can create as many working copies as you like so that multiple developers can contribute and merge changes to a single application. Conflicts are identified manually when viewing file differences, and developers can choose to merge all or only certain components.

The working copies are marked as such in the Application Builder. The same applies to the overview of all applications in the workspace.

For a working copy, there is an additional menu with which you can return to the main application, merge the copy with the main, and view the changes in the comparison beforehand. It is also possible to transfer any changes from the Main to the Working Copy.

</details>
