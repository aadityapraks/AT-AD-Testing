# Test Cases for User Story MFLP-8: Text Message Templates

**Precondition for all test cases:**
- Login with user details:
  - **Client Code:** CCMR3
  - **Email:** ajayb@byterodge.com
  - **Password:** Welcome1#

## Test Case 1
**Test Case ID:** MFLP8-TC1  
**Test Name:** Verify Navigation to Text Message Templates  
**Steps:**
1. Login to the application with the provided user credentials.
2. Navigate to Operations from the main menu.
3. Click on Admin Control.
4. Select Pick List.
5. Click on Templates.
6. Click on Text Message Template option.  
**Expected Result:**
- The user should be navigated to a page displaying a table with the header 'Text Message Templates'.  
**Postcondition:**
- Logout from the application.

## Test Case 2
**Test Case ID:** MFLP8-TC2  
**Test Name:** Verify Table Columns and Tooltip in Text Message Templates  
**Steps:**
1. Login to the application with the provided user credentials.
2. Navigate to Operations → Admin Control → Pick List → Templates → Text Message Template.
3. Observe the columns in the displayed table.
4. Hover the mouse over the table header.  
**Expected Result:**
- The table should contain columns: Select All checkbox, Action, Text Name, Status, Description.
- A tooltip should appear with the message 'The list of Text Messages' when hovering over the header.  
**Postcondition:**
- Logout from the application.

## Test Case 3
**Test Case ID:** MFLP8-TC3  
**Test Name:** Add New Text Message Template with Active Status  
**Steps:**
1. Login to the application with the provided user credentials.
2. Navigate to Operations → Admin Control → Pick List → Templates → Text Message Template.
3. Click on 'Add new text message' button.
4. Verify that a dialog with header 'Add new text message' appears.
5. Hover over the header to check for tooltip.
6. Fill in the 'Text Name' field with a unique name (e.g., 'WelcomeMsg_001').
7. Fill in the 'Text Message' text area with a message (e.g., 'Welcome %Name%!').
8. Check the 'Active' checkbox.
9. Click on 'Save' button.  
**Expected Result:**
- A dialog should open with header 'Add new text message' and a tooltip 'Fill in the template details for text message'.
- After saving, a toast message 'Text message added successfully' should display.
- The new template should appear in the table with 'Status' as 'Active' in green color.  
**Postcondition:**
- Logout from the application.

## Test Case 4
**Test Case ID:** MFLP8-TC4  
**Test Name:** Add New Text Message Template with Inactive Status  
**Steps:**
1. Login to the application with the provided user credentials.
2. Navigate to Operations → Admin Control → Pick List → Templates → Text Message Template.
3. Click on 'Add new text message' button.
4. Fill in the 'Text Name' field with a unique name (e.g., 'InactiveMsg_001').
5. Fill in the 'Text Message' text area with a message (e.g., 'Inactive message').
6. Leave the 'Active' checkbox unchecked.
7. Click on 'Save' button.  
**Expected Result:**
- After saving, a toast message 'Text message added successfully' should display.
- The new template should appear in the table with 'Status' as 'Inactive' in red color.  
**Postcondition:**
- Logout from the application.

## Test Case 5
**Test Case ID:** MFLP8-TC5  
**Test Name:** Verify Mandatory Fields Error in Add Template Dialog  
**Steps:**
1. Login to the application with the provided user credentials.
2. Navigate to Operations → Admin Control → Pick List → Templates → Text Message Template.
3. Click on 'Add new text message' button.
4. Leave 'Text Name' and 'Text Message' fields empty.
5. Click on 'Save' button.  
**Expected Result:**
- Error messages should appear at the 'Text Name' and 'Text Message' fields indicating they are mandatory.  
**Postcondition:**
- Logout from the application.

## Test Case 6
**Test Case ID:** MFLP8-TC6  
**Test Name:** Verify Cancel Functionality in Add Template Dialog  
**Steps:**
1. Login to the application with the provided user credentials.
2. Navigate to Operations → Admin Control → Pick List → Templates → Text Message Template.
3. Click on 'Add new text message' button.
4. Fill in some details in the dialog.
5. Click on 'Cancel' button.  
**Expected Result:**
- The dialog should close without adding a new template to the table.  
**Postcondition:**
- Logout from the application.

## Test Case 7
**Test Case ID:** MFLP8-TC7  
**Test Name:** Verify Duplicate Template Name Error  
**Steps:**
1. Login to the application with the provided user credentials.
2. Navigate to Operations → Admin Control → Pick List → Templates → Text Message Template.
3. Click on 'Add new text message' button.
4. Enter a 'Text Name' that already exists in the table.
5. Fill in the 'Text Message' field.
6. Click on 'Save' button.  
**Expected Result:**
- An error message should appear indicating that the template name already exists.  
**Postcondition:**
- Logout from the application.

## Test Case 8
**Test Case ID:** MFLP8-TC8  
**Test Name:** Verify Handler Search and Copy Functionality  
**Steps:**
1. Login to the application with the provided user credentials.
2. Navigate to Operations → Admin Control → Pick List → Templates → Text Message Template.
3. Click on 'Add new text message' button.
4. In the dialog, use the search field to search for a handler (e.g., 'Name').
5. Select and copy a handler (e.g., '%Name%') to the 'Text Message' field.  
**Expected Result:**
- The search should filter and show relevant handlers.
- The selected handler should be copied to the 'Text Message' field.  
**Postcondition:**
- Logout from the application.

## Test Case 9
**Test Case ID:** MFLP8-TC9  
**Test Name:** Edit Text Message Template via Row Click  
**Steps:**
1. Login to the application with the provided user credentials.
2. Navigate to Operations → Admin Control → Pick List → Templates → Text Message Template.
3. Click on a row in the table to edit a template.
4. Update the 'Text Message' field with new content.
5. Click on 'Save' button.  
**Expected Result:**
- The edit dialog should open with the template details.
- After saving, a toast message 'Text message updated successfully' should display.
- The table should reflect the updated details.  
**Postcondition:**
- Logout from the application.

## Test Case 10
**Test Case ID:** MFLP8-TC10  
**Test Name:** Edit Text Message Template via Action Menu  
**Steps:**
1. Login to the application with the provided user credentials.
2. Navigate to Operations → Admin Control → Pick List → Templates → Text Message Template.
3. In the Action column of a row, click on the three dots.
4. Select 'Edit/View Text Message' from the dropdown.
5. Update some fields in the dialog.
6. Click on 'Save' button.  
**Expected Result:**
- The edit dialog should open with the template details.
- After saving, a toast message 'Text message updated successfully' should display.
- The table should reflect the updated details.  
**Postcondition:**
- Logout from the application.

## Test Case 11
**Test Case ID:** MFLP8-TC11  
**Test Name:** Delete Text Message Template via Checkbox Selection  
**Steps:**
1. Login to the application with the provided user credentials.
2. Navigate to Operations → Admin Control → Pick List → Templates → Text Message Template.
3. Select a template by checking the checkbox next to it.
4. Click on a delete option/button.
5. In the confirmation dialog, click 'Yes'.  
**Expected Result:**
- A confirmation dialog should appear with the message 'Are you sure you want to delete the text message?' and display the Text Name.
- After clicking 'Yes', the template should be deleted and no longer appear in the table.  
**Postcondition:**
- Logout from the application.

## Test Case 12
**Test Case ID:** MFLP8-TC12  
**Test Name:** Delete Text Message Template via Action Menu  
**Steps:**
1. Login to the application with the provided user credentials.
2. Navigate to Operations → Admin Control → Pick List → Templates → Text Message Template.
3. In the Action column of a row, click on the three dots.
4. Select 'Delete' from the dropdown.
5. In the confirmation dialog, click 'Yes'.  
**Expected Result:**
- A confirmation dialog should appear with the message 'Are you sure you want to delete the text message?' and display the Text Name.
- After clicking 'Yes', the template should be deleted and no longer appear in the table.  
**Postcondition:**
- Logout from the application.

## Test Case 13
**Test Case ID:** MFLP8-TC13  
**Test Name:** Cancel Deletion of Text Message Template  
**Steps:**
1. Login to the application with the provided user credentials.
2. Navigate to Operations → Admin Control → Pick List → Templates → Text Message Template.
3. Select a template by checking the checkbox next to it.
4. Click on a delete option/button.
5. In the confirmation dialog, click 'Cancel'.  
**Expected Result:**
- A confirmation dialog should appear.
- After clicking 'Cancel', the dialog should close, and the template should still be present in the table.  
**Postcondition:**
- Logout from the application. 