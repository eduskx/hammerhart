# Update Project

## Value Proposition

**As a user**

**I want to** update the details of existing projects,

**so that** they reflect the most accurate and relevant information.

## Description

Capstone Group Todo: Add wireframes

## Acceptance Criteria

- Each project’s details page includes an easily accessible edit option.
- Clicking the edit option opens a new page with a form pre-filled with the project’s existing details for modification.
- The form allows for edits to all project details, including:
  - Project title
  - Project description
  - Project complexity
  - Project duration
  - Project materials (dynamic form fields)
  - Project steps (dynamic form fields)
- The following fields are mandatory:
  - Project title
  - Project complexity
  - Project duration
- The form section includes options for both saving and cancelling the action.
- The cancellation option allows the user to back out of the edit process if selected by mistake or if they change their mind.
- Submissions with empty mandatory fields are blocked, with validation messages indicating the missing required fields.
- Upon confirming the save, the user is immediately redirected to the details page of the edited project, and the changes are saved and reflected.

## Tasks

- [ ] Create feature branch `feature/edit-project`
- [ ] Capstone Group Todo: Add tasks

> 💡 It is not yet possible to edit images at this stage.

> 💡 You can accommodate multiple materials and steps by using dynamic form fields, which allow additional input fields to be added as needed.
