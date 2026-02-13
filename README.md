# Shared Bookmarks

A Vanilla JavaScript DOM application that allows users to save, view, and manage bookmarks per user. Each bookmark includes a title, description, timestamp, like counter, and copy-to-clipboard feature. URLs are normalized to prevent broken links.

**Live site:** 

---

## Features

- Select one of five users
- View bookmarks in reverse chronological order
- Add new bookmarks (URL, title, description)
- Automatic URL normalization (adds https://, fixes common mistakes)
- Like counter persisted in localStorage
- Copy URL to clipboard
- Accessible form and interface
- Lighthouse Accessibility score: 100

---

## Tech Stack

- HTML
- CSS
- Vanilla JavaScript (DOM manipulation)
- ES Modules
- localStorage
- Node.js built-in Test Runner

---

## Run Locally

This project uses JavaScript ES modules, so it must be served over HTTP.

You can use either:

### Option 1: VS Code Live Server
Right-click `index.html` and choose **Open with Live Server**.

### Option 2: http-server

```bash
npx http-server


## Tests

Run unit tests with:

```bash
node --test


## Author 
Teamwork