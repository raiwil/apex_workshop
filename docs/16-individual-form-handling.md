# 16. Individual Form Handling - Updates over Joins

Interactive grids over joins, custom DML, and trigger alternatives.

![16. Individual Form Handling - Updates over Joins](assets/pages/page-089.png){ .chapter-image }

## What this chapter covers

- Creates a table for employee comments and joins it to EMP.
- Shows the limitation of updating multiple base tables through a join.
- Builds an interactive grid that handles insert, update, and delete logic explicitly in PL/SQL.
- Mentions an alternative approach using a view and instead-of triggers.

## Workshop transcript

<details markdown="1">
<summary>Transcribed from PDF pages 89-91</summary>

### PDF page 89

16 Individual Form Handling – Updates over Joins 16.1 Build an Interactive Grid based on a Join including Updates What we have seen so far in terms of dialogs and data changes have been changes to individual tables. However, the scenarios may be more complex. In this chapter, we will see how forms can be used flexibly and how more than one table can be integrated. We will run through this with a join as an example.

We will create a table EMP2 to store comments for employees and join it via the primary key EMPNO with the table EMP. Only if a comment is there, a row exists. So, when entering a comment, an INSERT into this table is needed. When deleting a comment, the row of the employee in EMP is still there but should be deleted in EMP2.

In this example, we will use an Interactive Grid; for a form region, it would work the same.

Go to the SQL Command and create a new table (Code Snippet 33)

Try to update a join (Code Snippet 34) and see the error (cannot modify more than one base table through a join). Without line 8 the statement (and of course the comma at the end of line 3) will be successful

But we want to update both tables in the same statement.

Create a page

… with an Interactive Grid

### PDF page 90

Let’s choose 12 as the Page Number and name the page FlexUpdate

Choose SQL Query as the Source Type and use Code Snippet 35 as the SQL Statement

Alternatively, we could store the query as a view and select the view here.

Don’t forget to activate Editing Enabled for the Interactive Grid, as we want to change the data.

Choose EMPNO as the Primary Key Column and create the page in the next step

Independent of which column you change in the application, you’ll get the error message

For the Report Column MYCOMMENT activate the Query Only switch

Changes for the salary are now possible, changes for mycomment are ignored. But we want to reach the following: o run updates on emp o run updates on emp2 o insert rows into emp2, when mycomment is changed from null to a value o delete row from emp2, when mycomment is set to null and was not null before o delete rows from emp and emp2, when a row in the grid is deleted

### PDF page 91

First, switch the Query Only property for MYCOMMENT back to no

Have a look at the PROCESS for the DML of the Interactive Grid. The Target Type is the Region Source

Set the Target Type to PL/SQL Code instead of Region Source and use Code Snippet 36 as PL/SQL Code to Insert/Update/Delete data

The code checks the status of the rows in the grid. (:apex$row_status). If a row is changed (‘U’), created (‘C’) or deleted (‘D’) we run the needed statements in the two different tables on our own.

In this code, there’s a sequence used. Pick Code Snippet 37 and create this sequence in SQL Commands

There are now 2 sequences for table emp. One coming from the identity column and this one. This is certainly not a good practice, and we use the second sequence here only to demonstrate the above code. Now check the application, do some data manipulation, and see in the Object Browser what happens in table EMP, and especially in EMP2. There’s a little bit of coding needed, but you have the full flexibility and power if needed.

By the way, even with our own code for DML, Prevent Lost Updates is still handled by the tool.

16.2 Use Instead of Trigger instead. As an alternative, one can also consider the following

- Create a view with the above query

- Create Instead Of Triggers for this view that move the logic from Code Snippet 24 into the database.

- Use the view as the basis for a form.

With this approach, this is reusable from other environments.

</details>
