# Testing

## 1. Dropdown lists five users

The dropdown displays five users using IDs from storage.js.
Verified manually by opening the page and checking that five users appear.

## 2. Selecting a user displays bookmarks for that user

Selecting a user from the dropdown loads bookmarks stored for that user.
Verified manually by switching between users and confirming bookmarks update.

## 3. If there are no bookmarks, show a message

If a selected user has no bookmarks, a message "No bookmarks yet" is displayed.
Verified manually by selecting a user with no stored bookmarks.

## 4. Bookmarks are shown in reverse chronological order

Bookmarks are displayed with the newest first based on the createdAt timestamp.
Verified manually by adding bookmarks at different times and confirming order,
and by unit tests in utils.test.js.

## 5. Each bookmark shows title, description, and timestamp

Each bookmark displays its title, description, and creation date.
Verified manually by adding a bookmark and checking the displayed information.

## 6. Bookmark title links to the correct URL

Clicking the bookmark title opens the correct URL in a new tab.
Verified manually by clicking the link after creating a bookmark.

## 7. Copy URL button copies the bookmark URL

The Copy URL button copies the bookmark link to the clipboard.
Verified manually by clicking the button and pasting the URL into a text field.

## 8. Like counter increments and persists

Clicking the Like button increases the counter and saves the value.
Verified manually by liking a bookmark, refreshing the page, and confirming the count remains.

## 9. Form includes URL, title, description inputs and submit button

The form contains required inputs for URL, title, and description with a submit button.
Verified manually by inspecting the form and submitting it using mouse and keyboard.

## 10. Submitting the form adds a bookmark for the selected user only

A new bookmark is stored only for the currently selected user.
Verified manually by adding a bookmark for one user and checking it does not appear for others.

## 11. Updated bookmark list shown after submission

After submitting the form, the bookmark list updates immediately.
Verified manually by adding a bookmark and confirming it appears without refreshing.

## 12. Accessibility score is 100 in Lighthouse Snapshot

Accessibility score reaches 100 in Lighthouse Snapshot mode.
Verified by running Lighthouse audit in browser developer tools.
