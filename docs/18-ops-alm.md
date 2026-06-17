# 18. Operations & Lifecycle Management

## 18.1 Application Lifecycle Management

Modern application development requires more than just building pages and components. Teams need efficient ways to collaborate, manage changes, track versions, and deploy applications reliably across multiple environments. Oracle APEX 26.1 introduces several enhancements that significantly improve Application Lifecycle Management (ALM) and make APEX applications easier to manage within modern development processes.

A key innovation in APEX 26.1 is **APEXlang**, a new human-readable application specification format. Instead of working with large SQL export files, applications can be exported as structured `.apx` files that are easier to review, compare, validate, and store in source control systems such as Git. This enables meaningful diffs, simpler code reviews, improved collaboration, and better integration into CI/CD pipelines. APEXlang also works well with modern development tools and AI-assisted workflows.

For collaborative development, APEX provides **Working Copies**, allowing multiple developers to work on the same application in parallel while maintaining isolation of their changes. Changes can later be merged back into the main application, reducing the risk of overwriting each other's work and improving team productivity. Working Copies were introduced in APEX 23.2.

Create a working copy of an application to fix a bug or add a feature, then selectively merge your changes back into the main application. You can create as many working copies as you like so that multiple developers can contribute and merge changes to a single application. Conflicts are identified manually when viewing file differences, and developers can choose to merge all or only certain components.

Working copies are marked as such in App Builder. The same applies to the overview of all applications in the workspace. For a working copy, there is an additional menu that lets you return to the main application, merge the copy with the main application, and review the changes in a comparison beforehand. It is also possible to transfer changes from the main application to the working copy.

To support controlled development processes, APEX also offers several governance features:

**Page Locking** prevents accidental modifications by allowing developers to lock individual pages while they are being edited.

**Build Options** make it possible to enable or disable features, pages, or components without removing them from the application. This is especially useful for feature toggles, phased rollouts, customer-specific functionality, and managing different deployment configurations.

Together, APEXlang, source control integration, Working Copies, page locking, and Build Options provide a solid foundation for professional application lifecycle management, enabling teams to adopt modern development practices while maintaining the productivity and simplicity of Oracle APEX.

## 18.2 Exporting, Importing, and Deploying Applications

APEX applications are stored as metadata in the database and can be easily transported between environments using the built-in **Export and Import** functionality. Applications can be exported from a development environment and imported into test, staging, or production environments, enabling a controlled and repeatable deployment process.

To support complete application deployments, APEX provides **Supporting Objects**. These allow developers to package database objects such as tables, views, packages, sample data, and installation scripts together with an application. During import, the Supporting Objects can be installed automatically, ensuring that all required database artifacts are available in the target environment.

For automated deployments, **SQLcl** provides command-line support for exporting, importing, and deploying Oracle APEX applications, making it a key component in CI/CD pipelines and scripted deployment processes.

In APEX 26.1, the introduction of the already mentioned APEXlang further improves application transport and version management by providing a human-readable export format that integrates well with source control systems and automated deployment pipelines. Together, application exports, Supporting Objects, and modern deployment practices form the foundation for transporting APEX applications safely and consistently across environments.

!!! bytheway "Environment Banner"
    <div class="two-columns">
      <div style="flex: 50%;">
            *By the way*,<br>
            to make the current environment immediately visible (for example Development, Test, or Production), you can define an **Environment Banner**. Open **Administration** from the bottom-left navigation, choose **Manage Service**, and then select **Define Environment Banner**. This gives developers and administrators a clear visual reminder of the environment they are currently using.
      </div>
      <div style="flex: 50%;">
          ![banner](assets/ops/banner.png){ style="display:block;margin:auto;" }
      </div>
    </div>

## 18.3 Instance Administration

APEX provides a dedicated **INTERNAL** workspace that is used exclusively for instance-level administration tasks. Through this workspace, instance administrators can manage workspaces, monitor usage, configure security settings, and maintain the overall APEX environment. Instance Administration controls settings that apply to all workspaces hosted within an APEX instance, such as authentication policies, email configuration, REST services, AI service settings, and workspace provisioning. Administrators can also define whether users are allowed to request new workspaces and manage the approval process for these requests.

By separating instance-level administration from application development, Oracle APEX enables centralized governance while allowing individual workspaces to remain isolated and independently managed.

## 18.4 APEX and ORDS

Unlike many development platforms, Oracle APEX is installed directly within the Oracle Database. No separate application server is required to execute application logic, as pages, metadata, SQL, PL/SQL, and application definitions are all managed and processed inside the database. Oracle APEX is included with the Oracle Database at no additional cost and is available in all supported Oracle Database editions.

To make APEX applications accessible through a web browser, Oracle REST Data Services (ORDS) serves as the web and REST gateway. ORDS receives HTTP requests, communicates with the database, executes APEX applications, and returns the generated content to the client. In addition, ORDS provides support for RESTful services and modern web integrations.

This architecture results in a compact and efficient deployment model consisting primarily of the Oracle Database, the APEX runtime environment, and ORDS. As part of operating an APEX environment, administrators are responsible for installing and upgrading APEX and ORDS, configuring security and connectivity settings, and ensuring the availability and performance of the overall platform.
